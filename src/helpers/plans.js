const sdk = require("api")("@iugu-dev/v1.0#somtdtlql1fa3opt");
const axios = require("axios");
module.exports = class plans {
  static async getPlans() {
    // eslint-disable-next-line no-undef
    sdk.auth(process.env.TOKEN_IUGU);
    const lista = await sdk["listar-plano"]();
    console.info(lista);
    return lista;
  }
  static async getPlan(id) {
    try {
      // eslint-disable-next-line no-undef
      const plan = await axios.get(`https://api.iugu.com/v1/plans/${id}?api_token=${process.env.TOKEN_IUGU}`);
      console.info(plan.data);
      return plan.data;
    }
    catch (err) {
      console.info(err);
      return;
    }
  }
};
