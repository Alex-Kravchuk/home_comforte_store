// DTO is Data transfer object

module.exports = class UserDTO {
  id;
  img;
  name;
  role;
  email;
  bonus;
  mobile;
  address;
  lastname;
  basketId;

  constructor(model) {
    this.id = model.id;
    this.img = model.img;
    this.name = model.name;
    this.role = model.role;
    this.email = model.email;
    this.bonus = model.bonus;
    this.mobile = model.mobile;
    this.address = model.address;
    this.lastname = model.lastname;
    this.basketId = model.basketId;
  }
};
