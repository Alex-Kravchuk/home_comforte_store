const ApiError = require("../error/ApiError");
const { User, Basket, ResetPasswordToken } = require("../models/models");
const bcrypt = require("bcrypt");

const UserDTO = require("../dtos/user-dto");
const tokenService = require("./token-service");
const createUserResponse = require("../helpers/createUserResponse");
const mailService = require("./mail-service");

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
    try {
      const response = await tokenService.removeToken(refreshToken);
      return response;
    } catch (error) {
      return ApiError.unexpectedError(error, UserService.errorSource);
    }
  }

  async refresh(refreshToken) {
    try {
      const userData = tokenService.validateRefreshToken(refreshToken);
      const tokenFromDB = await tokenService.findToken(refreshToken);

      if (!userData || !tokenFromDB) {
        throw ApiError.notAuthorized(UserService.errorSource);
      }

      const user = await User.findOne({ where: { id: userData.id } });

      const response = await createUserResponse(user);
      return response;
    } catch (error) {
      throw ApiError.unexpectedError(error, UserService.errorSource);
    }
  }

  async checkAuth(userData) {
    try {
      // TODO if null?
      const user = await User.findOne({ where: { id: userData.id } });

      const response = await createUserResponse(user);
      return response;
    } catch (error) {
      throw ApiError.unexpectedError(error, UserService.errorSource);
    }
  }

  async forgotPassword(email) {
    // try {
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

    const newlyGeneratedToken = await tokenService.generateSimpleToken({
      id: user.id,
    });

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
    console.log("====================================");
    console.log("lasd", token, userId, password);
    console.log("====================================");
    if (!tokenFromDB) {

      console.log('====================================');
      console.log('suka', tokenFromDB);
      console.log('====================================');
      throw ApiError.badRequest(
        "Something went wrong",
        UserService.errorSource
      );
    }

    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      throw ApiError.badRequest(
        "The user with this email does not exist",
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

    // const response = await createUserResponse(user);
    return true;
  }
}

module.exports = new UserService();
