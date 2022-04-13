const bcrypt = require("bcrypt");
module.exports = class tools {
  static async createPassword(password) {
    const step = 10;
    const salt = await bcrypt.genSalt(step);
    const newPassword = await bcrypt.hash(password, salt);
    return newPassword;
  }
  static async validatePassword(password, hash) {
    const validate = await bcrypt.compare(password, hash);
    return validate;
  }

  static async testeEmail(email) {
    // eslint-disable-next-line no-useless-escape
    let testeEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(testeEmail)
  }

  static async testeCpfCnpj(cpfcnpj) {
    // eslint-disable-next-line no-useless-escape
    let regexCnp = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
    return cpfcnpj.match(regexCnp)
  }
};

