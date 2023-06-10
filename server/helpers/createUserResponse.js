const UserDTO = require("../dtos/user-dto");
const { Basket } = require("../models/models");
const tokenService = require("../services/token-service");

const createUserResponse = async (user) => {
  let userBasket = await Basket.findOne({ where: { userId: user.id } });

  if (!userBasket) {
    userBasket = await Basket.create({ userId: user.id });
  }

  const dtoConfig = { ...user.dataValues, basketId: userBasket.id };
  const userDto = new UserDTO(dtoConfig);

  const tokens = tokenService.generateTokens({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refreshToken);

  return { ...tokens, user: userDto };
};

module.exports = createUserResponse;
