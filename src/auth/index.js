const jwt = require("jsonwebtoken");

module.exports = class Auth {
  static async generateToken(id, email, name) {
    const token = jwt.sign({ id, email, name }, process.env.TOKEN_SIGNE, {
      expiresIn: "24h",
    });
    return token;
  }

  static async verifyToken(req, res, next) {
    const tk = req.headers["x-access-token"];
    jwt.verify(tk, process.env.TOKEN_SIGNE, (err, decoded) => {
      if (err) {
        res.status(401).send({ message: "Erro de autenticação!" });
        return;
      }
      req.userId = decoded._id;
      req.userName = decoded.name;
      req.userEmail = decoded.email;
      next();
    });
  }
};
