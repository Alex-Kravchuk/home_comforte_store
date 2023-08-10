const jwt = require("jsonwebtoken");
const { Token, User } = require("../models/models");
const ApiError = require("../error/ApiError");

class TokenService {
  static errorSource = "token service";

  generateTokens(payload) {
    console.log("suka blya", payload);
    try {
      const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, {
        expiresIn: "30m",
      });

      const refreshToken = jwt.sign(
        payload,
        process.env.JWT_REFRESH_SECRET_KEY,
        {
          expiresIn: "30d",
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

  generateSimpleToken(payload, expiresIn = "24h") {
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
    const tokenDataByUserId = await Token.findOne({ where: { userId } });
    if (tokenDataByUserId) {
      return tokenDataByUserId.update({ refreshToken });
    }

    const tokenDataByAdminId = await Token.findOne({
      where: { adminId: userId },
    });
    if (tokenDataByAdminId) {
      return tokenDataByAdminId.update({ refreshToken });
    }

    const user = await User.findOne({ where: { id: userId } });

    const tokenCreateConfig = {
      refreshToken,
      userId: user ? userId : null,
      adminId: !user ? userId : null,
    };

    const token = await Token.create(tokenCreateConfig);

    return token;
  }

  // for logout
  async removeToken(refreshToken) {
    try {
      const tokenData = await Token.destroy({ where: { refreshToken } });
      return tokenData;
    } catch (error) {
      throw ApiError.unexpectedError(error, TokenService.errorSource);
    }
  }

  async findToken(refreshToken) {
    try {
      const tokenData = await Token.findOne({ where: { refreshToken } });
      return tokenData;
    } catch (error) {
      throw ApiError.unexpectedError(error, TokenService.errorSource);
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
