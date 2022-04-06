const proposalModel = require("../models/ProposalModel");

let proposal = {};

module.exports = class proposalController {
  static async propostalCreate(req, res) {
    const { name, email, phone, phone_prefix, planId } = req.body;

    if ((!name, !email, !phone, !phone_prefix, !planId)) {
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

    proposal = {
      name,
      email,
      phone,
      phone_prefix,
      planId
    };

    proposal = { ...proposal };
    try {
      const addProposal = await proposalModel.create(proposal);
      res.status(200).send({ message: "Cliente Adicionado na proposta", Proposta: proposal });
      return;
    } catch (err) {
      console.info(err);
      return;
    }
  }
};
