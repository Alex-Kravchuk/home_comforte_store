const AdminDTO = require("../dtos/admin-dto");

const tokenService = require("../services/token-service");

const createAdminResponse = async (admin) => {
  const dtoConfig = { ...admin.dataValues };
  const adminDto = new AdminDTO(dtoConfig);

  const tokens = tokenService.generateTokens({ ...adminDto });
  await tokenService.saveToken(adminDto.id, tokens.refreshToken);

  return { ...tokens, admin: adminDto };
};

module.exports = createAdminResponse;
