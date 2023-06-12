const jwt = require("jsonwebtoken");
const { Token } = require("../models/models");
const ApiError = require("../error/ApiError");

class TokenService {
  static errorSource = "token service";

  generateTokens(payload) {
    try {
      const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, {
        expiresIn: "30m",
      });

      const refreshToken = jwt.sign(
        payload,
        process.env.JWT_REFRESH_SECRET_KEY,
        {
          expiresIn: "40d",
        }
      );

      return {
        accessToken,
        refreshToken,
      };
    } catch (error) {
      throw ApiError.unexpectedError(error, TokenService.errorSource);
    }
  }

   generateSimpleToken(payload, expiresIn = '24h') {
    try {
      const token = jwt.sign(payload, process.env.JWT_SIMPLE_SECRET_KEY, {
        expiresIn,
      });

      return token;
    } catch (error) {
      throw ApiError.unexpectedError(error, TokenService.errorSource);
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({ where: { userId } });
    if (tokenData) {
      return tokenData.update({ refreshToken });
    }

    const token = await Token.create({ userId, refreshToken });
    return token;
  }

  // for logout
  async removeToken(refreshToken) {
    try {
      const tokenData = await Token.destroy({ where: { refreshToken } });
      return tokenData;
    } catch (error) {
      throw ApiError.unexpectedError(error, errorSource);
    }
  }

  async findToken(refreshToken) {
    try {
      const tokenData = await Token.findOne({ where: { refreshToken } });
      return tokenData;
    } catch (error) {
      throw ApiError.unexpectedError(error, errorSource);
    }
  }

  validateRefreshToken(refreshToken) {
    try {
      const userData = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET_KEY
      );

      return userData;
    } catch (error) {
      return null;
    }
  }

  validateAccessToken(accessToken) {
    try {
      const userData = jwt.verify(
        accessToken,
        process.env.JWT_ACCESS_SECRET_KEY
      );

      return userData;
    } catch (error) {
      return null;
    }
  }

  validateSimpleToken(simpleToken) {
    try {
      const access = jwt.verify(simpleToken, process.env.JWT_SIMPLE_SECRET_KEY);

      return access;
    } catch (error) {
      return null;
    }
  }

  decode(token) {
    try {
      const decoded = jwt.decode(token);
      return decoded;
    } catch (error) {
      return null;
    }
  }
}

module.exports = new TokenService();
