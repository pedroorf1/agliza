const userModel = require("../models/UserModel");

module.exports = class userController {
  static async criarPlano(req, res) {
    res.status(200).send({ message: "Plano criado" });
  }
  //++++++++++++++++++++ User Create +++++++++++++++++++++++++++++++++++

  static async create(req, res) {
    const { name, email, password, access } = req.body;

    // Validações (usuário e senha)

    if (!name || !email || !password || !access) {
      res.status(403).send({ message: "Dados inválidos!" });
      return;
    }

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
      res.status(403).send({ message: "Email inválido!" });
      return;
    }

    if (password.length < 6) {
      res.status(403).send({ message: "Password curta!" });
      return;
    }

    // Inserindo usuários no BD

    const usuario = { name, email, password, access };
    try {
      const created = await userModel.create(usuario);
      res.status(200).send({ message: "Criado Usuário", created });
    } catch (err) {
      console.info(err);
    }
  }

  //++++++++++++++++++++ User Login +++++++++++++++++++++++++++++++++++

  static async login(req, res) {
    res.status(200).send({ message: "Logado!" });
  }

  static async upDatePassword(req, res) {
    res.status(200).send({ message: "Senha alterada!" });
  }
};
