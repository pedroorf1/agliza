const clientModel = require("../models/ClientModel");
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
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
      res.status(403).send({ message: "Email inválido!" });
      return;
    }
    // CPF and CNPJ verification
    let regexCnp =
      /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;

    if (!cpf_cnpj.match(regexCnp)) {
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
