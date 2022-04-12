const userModel = require("../models/UserModel");
const tools = require("../helpers/tools");
const auth = require("../auth");
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
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      res.status(403).send({ message: "Este email já está cadastrado em nossos sistemas!" });
      return;
    }

    if (password.length < 6) {
      res.status(403).send({ message: "Password curta!" });
      return;
    }
    const hashPassword = await tools.createPassword(password);
    // Inserindo usuários no BD
    const usuario = { name, email, password: hashPassword, access };
    try {
      const created = await userModel.create(usuario);
      res.status(200).send({ message: "Criado Usuário", created });
    } catch (err) {
      console.info(err);
    }
  }
  //++++++++++++++++++++ User Login +++++++++++++++++++++++++++++++++++
  static async login(req, res) {
    const { email, password } = req.body;
    // Validações (usuário e senha)
    if (!email || !password) {
      res.status(403).send({ message: "Dados inválidos!" });
      return;
    }

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
      res.status(403).send({ message: "Email inválido!" });
      return;
    }

    const userExists = await userModel.findOne({ email });
    if (userExists) {
      const validatePassword = await tools.validatePassword(password, userExists.password);
      if (!validatePassword) {
        res.status(403).send({ message: "Dados inválidos!" });
        return;
      }
      const token = await auth.generateToken(userExists._id, userExists.email, userExists.name);
      req.headers["Authorization"] = "Bearer " + token;
      req.userId = userExists._id;
      req.userName = userExists.name;
      req.userEmail = userExists.email;
      console.info(req.headers);
      res.status(200).send({ message: "Logado!", user: userExists, token });
    }
    return;
  }
  static async upDatePassword(req, res) {
    res.status(200).send({ message: "Senha alterada!" });
    return;
  }

  static async logout(req, res) {
    req.headers["Authorization"] = "";
    req.userId = null;
    req.userName = null;
    req.userEmail = null;
    console.info(req.headers);
    res.status(200).send({ message: "Logout efetuado com sucesso!" });
    return;
  }

  static async testeRoute(req, res) {
    res.status(200).send({ message: "Acesso a rota autorizado!" });
    return;
  }
};
