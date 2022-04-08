const planModel = require("../models/PlanModel");
const plans = require("../helpers/plans");

let plan = {};

module.exports = class planController {
  static async create(req, res) {
    const {
      name,
      appointmenter,
      appointmenterValue,
      appointmentmedical,
      appointmentmedicalValue,
      therapy,
      therapyValue,
      monthlypayment,
      category,
      description,
      pprocedure,
      ppproceduredescription,
      pprocedurevalue,
    } = req.body;

    if (
      !name ||
      !appointmenter ||
      !appointmenterValue ||
      !appointmentmedical ||
      !appointmentmedicalValue ||
      !therapy ||
      !therapyValue ||
      !monthlypayment ||
      !category ||
      !description
    ) {
      res
        .status(400)
        .send({ message: "Complete todos os campos obrigatórios!" });
      return;
    }

    plan = {
      name,
      appointmenter,
      appointmenterValue,
      appointmentmedical,
      appointmentmedicalValue,
      therapy,
      therapyValue,
      monthlypayment,
      category,
      description,
    };
    if (pprocedure && !pprocedurevalue && !ppproceduredescription) {
      res
        .status(400)
        .send({ message: "Complete a descrição e valor do procedimento!" });
      return;
    }
    if (pprocedure) {
      plan = { ...plan, pprocedure, ppproceduredescription, pprocedurevalue };
    }

    try {
      const addPlan = await planModel.create(plan);
      res.status(200).send({ message: "Plano Criado", plano: addPlan });
      return;
    } catch (err) {
      console.info(err);
      return;
    }

    res.status(200).send({ message: "Plano Criado" });
    return;
  }

  static async list(req, res) {
    const listOfPlans = await plans.getPlan();
    console.info("Nossa lista de planos",  listOfPlans);
    res.status(200).send({ message: "Lista de Planos", plans: listOfPlans });
    return;
  }

  static async update(req, res) {
    res.status(200).send({ message: "Plano atualizado" });
    return;
  }

  static async delete(req, res) {
    res.status(200).send({ message: "Plano excluído" });
    return;
  }

  static async simular(req, res) {
    res.status(200).send({ message: "Simulado Plano" });
    return;
  }
  static async aprouved(req, res) {
    res.status(200).send({ message: "Plano Aprovado" });
    return;
  }

  static async signed(req, res) {
    res.status(200).send({ message: "Plano assinado" });
    return;
  }
};
