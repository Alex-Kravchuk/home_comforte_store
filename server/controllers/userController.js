const bcrypt = require("bcrypt");

const ApiError = require("../error/ApiError");

const { User, Basket } = require("../models/models");
const createImgName = require("../helpers/createImgName");
const { generateJWT } = require("../helpers/generateJWT");

class UserController {
  static errorSource = "user controller";

  async signUp(req, res, next) {
    try {
      const { email, password, name, lastname } = req.body;

      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({
        name,
        lastname,
        email,
        password: hashPassword,
      });

      const jwtConfig = {
        id: user.id,
        email: user.email,
        password: user.password,
        name: user.name,
        lastname: user.lastname,
        role: user.role,
      };

      const token = generateJWT(jwtConfig);

      return res.json({ token });
    } catch (error) {
      return next(ApiError.unexpectedError(error, UserController.errorSource));
    }
  }

  async logIn(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return next(
          ApiError.badRequest(
            "The user is not defined",
            UserController.errorSource
          )
        );
      }

      const comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return next(
          ApiError.badRequest(
            "The password is incorrect",
            UserController.errorSource
          )
        );
      }

      const jwtConfig = {
        id: user.id,
        email: user.email,
        password: user.password,
        name: user.name,
        mobile: user.mobile,
        bonus: user.bonus,
        address: user.address,
        img: user.img,
        role: user.role,
      };

      const token = generateJWT(jwtConfig);

      return res.json({ token });
    } catch (error) {
      return next(ApiError.unexpectedError(error, UserController.errorSource));
    }
  }

  // check function I use before firstLogin function

  async check(req, res, next) {
    try {
      const { user } = req;
      const token = generateJWT({ user });

      return res.json({ token });
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
