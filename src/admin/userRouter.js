const router = require("express").Router();
const userController = require("./userController");
const authenticated = require("../auth").authenticated;

router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.post("/create", authenticated, userController.create);
router.get("/teste", authenticated, userController.testeRoute);

module.exports = router;