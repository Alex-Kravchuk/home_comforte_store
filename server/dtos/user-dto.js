// DTO is Data transfer object

module.exports = class UserDTO {
  email;
  id;
  lastname;
  name;
  role;
  basketId;

  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.lastname = model.lastname;
    this.name = model.name;
    this.role = model.role;
    this.basketId = model.basketId;
  }
};
