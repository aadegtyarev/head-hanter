const Router = require("express");
const router = new Router();
const tokenController = require("../controllers/token.controller");

router.post("/token", tokenController.createToken);
router.get("/token", tokenController.checkToken);
router.delete("/token", tokenController.deleteToken);

module.exports = router;
