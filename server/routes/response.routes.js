const Router = require("express");
const router = new Router();
const responseController = require("../controllers/response.controller");

router.post("/response", responseController.createResponse);
router.get("/responses", responseController.getResponses);
router.get("/response", responseController.getOneResponse);
router.put("/response", responseController.updateResponse);
router.delete("/response", responseController.deleteResponse);

module.exports = router;
