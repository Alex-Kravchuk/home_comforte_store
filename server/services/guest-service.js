const ApiError = require("../error/ApiError");
const { Basket, Guest } = require("../models/models");
const bcrypt = require("bcrypt");

const UserDTO = require("../dtos/user-dto");
const tokenService = require("./token-service");
const createUserResponse = require("../helpers/createUserResponse");
const { generateJWT } = require("../helpers/generateJWT");

class GuestService {
  static errorSource = "guest service";

  async create() {
    const guest = await Guest.create();
    const basket = await Basket.create({ guestId: guest.id });

    const jwtPayload = {
      guest_id: guest.id,
      basket_id: basket.id,
      role: guest.role,
    };

    const token = generateJWT(jwtPayload);
    return token;
  }

  //   do it after user login
  async removeGuest(guestToken) {
    const decoded = tokenService.tokenDecode(guestToken);

    if (decoded) {
      const guest = await Guest.findOne({ where: { id: decoded.guest_id } });
      const basket = await Basket.findOne({ where: { id: decoded.basket_id } });
      if (guest) {
        await guest.destroy();
        await basket.destroy();
        return true;
      }
    }

    return false;
  }
}

module.exports = new GuestService();
