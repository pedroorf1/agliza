const sdk = require("api")("@iugu-dev/v1.0#somtdtlql1fa3opt");

module.exports = class plans {
  static async getPlan() {
    sdk.auth(process.env.TOKEN_IUGU);
    const lista = await sdk["listar-plano"]();
    console.info(lista);
    return lista;
  }
};
