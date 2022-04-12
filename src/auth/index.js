const jwt = require("jsonwebtoken");
// eslint-disable-next-line no-undef
const SECRET = process.env.TOKEN_SIGNE;
module.exports = class Auth {
  static async generateToken(id, email, name) {
    // eslint-disable-next-line no-undef
    const token = jwt.sign({ id, email, name }, process.env.TOKEN_SIGNE, {
      expiresIn: "24h",
    });
    return token;
  }

  static async authenticated(req, res, next) {
    // const tk = req.headers["x-access-token"];
    let authorization = await req.headers.authorization;
    if (!authorization) {
      res.status(401).send({ message: "Você não está autorizado a acessar esta rota!" });
      return;
    }
    let tk = authorization.replace("Bearer ", "");
    // let tk = req.headers.authorization;
    console.log("tk", tk);
    jwt.verify(tk, SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send({ message: "Você não está autorizado a acessar esta rota!" });
        return;
      }
      req.userId = decoded._id;
      req.userName = decoded.name;
      req.userEmail = decoded.email;
      next();
    });
  }
};
