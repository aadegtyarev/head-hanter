const Router = require("express");
const router = new Router();
const ResponseStatusController = require("../controllers/response-status.controller");

router.get("/response-statuses", ResponseStatusController.getResponseStatuses);

module.exports = router;
