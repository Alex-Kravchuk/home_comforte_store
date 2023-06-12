const { Basket, Guest } = require("../models/models");

const tokenService = require("./token-service");

class GuestService {
  static errorSource = "guest service";

  async create(oldToken) {
    if (!oldToken) {
      const newGuest = await Guest.create();
      const newBasket = await Basket.create({ guestId: newGuest.id });

      const payload = {
        guest_id: newGuest.id,
        basket_id: newBasket.id,
        role: newGuest.role,
      };

      const token = tokenService.generateSimpleToken(payload, "24h");
      return token;
    }

    const decoded = tokenService.decode(oldToken);
    const isValid = tokenService.validateSimpleToken(oldToken);

    if (!isValid) {
      const oldGuest = await Guest.findOne({ where: { id: decoded.guest_id } });
      const oldBasket = await Basket.findOne({
        where: { id: decoded.basket_id },
      });

      await oldGuest.destroy();
      await oldBasket.destroy();

      const newGuest = await Guest.create();
      const newBasket = await Basket.create({ guestId: newGuest.id });

      const payload = {
        guest_id: newGuest.id,
        basket_id: newBasket.id,
        role: newGuest.role,
      };

      const token = tokenService.generateSimpleToken(payload, "24h");
      return token;
    }

    return oldToken;
  }

  //   do it after user login
  async removeGuest(guestToken) {
    const decoded = tokenService.decode(guestToken);

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
