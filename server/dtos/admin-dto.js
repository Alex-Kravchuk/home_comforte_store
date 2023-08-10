// DTO is Data transfer object

module.exports = class AdminDTO {
  id;
  name;
  role;
  email;
  lastname;

  constructor(model) {
    this.id = model.id;
    this.name = model.name;
    this.role = model.role;
    this.email = model.email;
    this.lastname = model.lastname;
  }
};
