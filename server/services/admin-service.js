const AdminDTO = require("../dtos/admin-dto");
const { Admin } = require("../models/models");
const bcrypt = require("bcrypt");
const tokenService = require("./token-service");
const ApiError = require("../error/ApiError");
const createAdminResponse = require("../helpers/createAdminResponse");

class AdminService {
  static errorSource = "admin service";

  async initialization() {
    const adminInitialized = await Admin.findOne({
      where: { email: process.env.ADMIN_EMAIL },
    });

    if (adminInitialized) {
      return;
    }

    const hashPassword = bcrypt.hash(process.env.ADMIN_PASSWORD, 5);
    const admin = await Admin.create({
      email: process.env.ADMIN_EMAIL,
      name: process.env.ADMIN_NAME,
      lastname: process.env.ADMIN_LASTNAME,
      password: hashPassword,
    });

    createAdminResponse(admin)
  }

  async login(email, password) {
    const admin = await Admin.findOne({ where: { email } });

    console.log("logloglog", email, password);

    if (!admin) {
      return null;
    }

    const comparePassword = bcrypt.compareSync(password, admin.password);
    if (!comparePassword) {
      throw ApiError.notAuthorized(
        AdminService.errorSource,
        "The password is incorrect"
      );
    }

    const response = createAdminResponse(admin);
    return response;
  }
}

module.exports = new AdminService();
