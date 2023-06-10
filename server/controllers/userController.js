const bcrypt = require("bcrypt");

const ApiError = require("../error/ApiError");

const { User } = require("../models/models");
const createImgName = require("../helpers/createImgName");
const userService = require("../services/user-service");

class UserController {
  static errorSource = "user controller";

  async signUp(req, res, next) {
    try {
      const { email, password, name, lastname } = req.body;
      const userData = await userService.signup(
        email,
        password,
        name,
        lastname
      );

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * (3600 * 24),
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      return next(error);
    }
  }

  async logIn(req, res, next) {
    try {
      const { email, password } = req.body;

      const userData = await userService.login(email, password);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * (3600 * 24),
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      return next(error);
    }
  }

  async logOut(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.status(200).json({ message: "Logged out" });
    } catch (error) {
      return next(error);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * (3600 * 24),
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      return next(error);
    }
  }

  async testFuncGetUsers(req, res, next) {
    try {
      const users = await User.findAndCountAll();

      return res.json(users);
    } catch (error) {
      console.log(error);
    }
  }

  async checkAuth(req, res, next) {
    try {
      const { user } = req;
      const userData = await userService.checkAuth(user);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * (3600 * 24),
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      return next(ApiError.unexpectedError(error, UserController.errorSource));
    }
  }

  async forgotPassword(req, res, next) {
    try {
      const { email } = req.body;
      await userService.forgotPassword(email);

      return res.status(200).json({ message: "processed" });
    } catch (error) {
      return next(ApiError.unexpectedError(error, UserController.errorSource));
    }
  }

  async resetPassword(req, res, next) {
    try {
      const { token, password, userId } = req.body;
      const userData = await userService.resetPassword(token, userId, password);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * (3600 * 24),
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      return next(ApiError.unexpectedError(error, UserController.errorSource));
    }
  }

  async update(req, res, next) {
    try {
      let fileName;
      const { id } = req.params;
      const { email, password, name, mobile, address, bonus } = req.body;

      if (req.files) {
        const { img } = req.files;
        fileName = createImgName(img, "STRING");
      }

      const user = await User.findOne({ where: { id } });
      if (!user) {
        return next(
          ApiError.badRequest(
            "The user is not defined",
            UserController.errorSource
          )
        );
      }

      user.update({
        email,
        password,
        name,
        mobile,
        address,
        bonus,
        img: fileName,
      });

      return res.json(user);
    } catch (error) {
      return next(ApiError.unexpectedError(error, UserController.errorSource));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;

      const user = await User.findOne({ where: { id } });
      return res.json(user);
    } catch (error) {
      return next(ApiError.unexpectedError(error, UserController.errorSource));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findOne({ where: { id } });
      user.destroy();
      return res.json({ status: 200, message: "deleted" });
    } catch (error) {
      return next(ApiError.unexpectedError(error, UserController.errorSource));
    }
  }
}

module.exports = new UserController();
