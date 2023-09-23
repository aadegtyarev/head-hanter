const Router = require("express");
const router = new Router();
const tokenController = require("../controllers/token.controller");

router.post("/token", tokenController.createToken);
router.get("/token", tokenController.getTokenByUser);
router.put("/token", tokenController.updateToken);
router.delete("/token", tokenController.deleteToken);

module.exports = router;
