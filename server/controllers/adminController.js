const ApiError = require("../error/ApiError");

const adminService = require("../services/admin-service");

class AdminController {
  static errorSource = "admin controller";
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const adminData = await adminService.login(email, password);

      res.cookie("refreshToken", adminData.refreshToken, {
        maxAge: 30 * (3600 * 24) * 1000,
        httpOnly: true,
      });

      return res.json(adminData);
    } catch (error) {
      return next(ApiError.unexpectedError(error, AdminController.errorSource));
    }
  }
}

module.exports = new AdminController();
