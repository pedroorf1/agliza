const clientModel = require("../models/ClientModel");
const tools = require("../helpers/tools")
let client = {};
module.exports = class clientController {
  static async clientCreate(req, res) {
    const {
      name,
      email,
      phone,
      phone_prefix,
      cpf_cnpj,
      zip_code,
      number,
      street,
      city,
      state,
      district,
      complement,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !phone_prefix ||
      !cpf_cnpj ||
      !zip_code ||
      !number ||
      !street ||
      !city ||
      !state ||
      !district ||
      !complement
    ) {
      res
        .status(400)
        .send({ message: "Complete todos os campos obrigatórios!" });
      return;
    }
    // Email verification
    if (!tools.testeEmail(email)) {
      res.status(403).send({ message: "Email inválido!" });
      return;
    }
    // CPF and CNPJ verification
    if (!tools.testeCpfCnpj(cpf_cnpj)) {
      res.status(403).send({ message: "CPF ou CNPJ inválido!" });
      return;
    }

    client = {
      name,
      email,
      phone,
      phone_prefix,
      cpf_cnpj,
      zip_code,
      number,
      street,
      city,
      state,
      district,
      complement,
    };

    client = { ...client };
    try {
      const addClient = await clientModel.create(client);
      res.status(200).send({ message: "Cliente Criado", Client: addClient });
      return;
    } catch (err) {
      console.info(err);
      return;
    }
  }
  //   ++++++++++++++++++++++++++++ Plan Simulation ++++++++++++++++++++++++++++
  static async clientSimularPlano(req, res) {
    res.status(200).send({ message: "Cliente simulando plano" });
  }
};
