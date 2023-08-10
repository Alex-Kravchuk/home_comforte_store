const bcrypt = require("bcrypt");

const ApiError = require("../error/ApiError");
const { User, ResetPasswordToken, Admin } = require("../models/models");

const mailService = require("./mail-service");
const tokenService = require("./token-service");

const createUserResponse = require("../helpers/createUserResponse");
const createImgName = require("../helpers/createImgName");
const adminService = require("./admin-service");
const createAdminResponse = require("../helpers/createAdminResponse");

class UserService {
  static errorSource = "user service";

  async signup(email, password, name, lastname) {
    const emailAlreadyInUse = await User.findOne({ where: { email } });

    if (emailAlreadyInUse) {
      throw ApiError.duplicate("email", UserService.errorSource);
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      name,
      lastname,
      email,
      password: hashPassword,
    });

    const response = await createUserResponse(user);
    return response;
  }

  async login(email, password) {
    const isAdmin = await adminService.login(email, password);

    if (isAdmin) {
      return isAdmin;
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw ApiError.notAuthorized(
        UserService.errorSource,
        "The user with this email does not exist"
      );
    }

    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      throw ApiError.notAuthorized(
        UserService.errorSource,
        "The password is incorrect"
      );
    }

    const response = await createUserResponse(user);
    return response;
  }

  async logout(refreshToken) {
    const response = await tokenService.removeToken(refreshToken);
    return response;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.notAuthorized(UserService.errorSource);
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDB) {
      throw ApiError.notAuthorized(UserService.errorSource);
    }

    const admin = await Admin.findOne({ where: { id: userData.id } });
    const user = await User.findOne({ where: { id: userData.id } });

    if (admin) {
      const adminResponse = await createAdminResponse(admin);
      return adminResponse;
    }

    const response = await createUserResponse(user);
    return response;
  }

  async checkAuth(userData) {
    const admin = await Admin.findOne({ where: { id: userData.id } });

    if (admin) {
      const adminResponse = await createAdminResponse(admin);
      return adminResponse;
    }

    const user = await User.findOne({ where: { id: userData.id } });
    if (!user) {
      throw ApiError.notAuthorized(UserService.errorSource);
    }
    const response = await createUserResponse(user);
    return response;
  }

  async forgotPassword(email) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiError.badRequest(
        "The user with this email does not exist",
        UserService.errorSource
      );
    }

    const oldResetToken = await ResetPasswordToken.findOne({
      where: { userId: user.id },
    });

    if (oldResetToken) {
      await oldResetToken.destroy();
    }

    const newlyGeneratedToken = tokenService.generateSimpleToken(
      {
        id: user.id,
      },
      "60m"
    );

    const newResetToken = await ResetPasswordToken.create({
      token: newlyGeneratedToken,
      userId: user.id,
    });

    const resetLink = `${process.env.CLIENT_APP_URL}/account/reset-password/${newResetToken.token}/${user.id}`;

    const response = await mailService.sendResetPasswordEmail(
      email,
      resetLink,
      user
    );

    return response;
  }

  async resetPassword(token, userId, password) {
    const tokenFromDB = await ResetPasswordToken.findOne({
      where: { userId: userId },
    });
    if (!tokenFromDB) {
      throw ApiError.badRequest(
        "Something went wrong",
        UserService.errorSource
      );
    }

    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      throw ApiError.badRequest(
        "An error occurred. No user found",
        UserService.errorSource
      );
    }

    const isValid = tokenService.validateSimpleToken(tokenFromDB.token);
    // because the marker is valid for 60 minutes
    if (!isValid) {
      throw ApiError.badRequest(
        "Password reset timed out. Submit the password change form again.",
        UserService.errorSource
      );
    }

    const hashPassword = await bcrypt.hash(password, 5);
    await user.update({ password: hashPassword });

    return true;
  }

  async updateData(userId, files, requestBody) {
    const { email, name, lastname, mobile, address, bonus } = requestBody;
    let fileName;

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      throw ApiError.badRequest(
        "The user is not defined",
        UserService.errorSource
      );
    }

    if (files) {
      const { avatar } = files;
      fileName = createImgName(avatar, "STRING");
    } else {
      // when the user wanted to delete the old avatar
      fileName = null;
    }

    await user.update({
      email,
      name,
      lastname,
      mobile,
      address,
      bonus,
      img: fileName,
    });

    const response = await createUserResponse(user);
    return response;
  }
}

module.exports = new UserService();
