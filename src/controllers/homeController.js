module.exports = class homeController {
  /**
     * 1) Fazer chamada para a rota de simulação da proposta
     */
  static async home(req, res) {
    const token = req.headers["x-access-token"];
    res.status(200).send({ message: "Bem vindo!", url: "/client/simularplano", token });
  }
};


