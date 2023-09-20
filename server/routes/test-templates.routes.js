const Router = require("express");
const router = new Router();
const TestTemplatesController = require("../controllers/test-templates.controller");

router.post("/test-template", TestTemplatesController.createTestTemplate);
router.get("/test-templates", TestTemplatesController.getTestTemplates);
router.get("/test-template", TestTemplatesController.getOneTestTemplate);
router.put("/test-template", TestTemplatesController.updateTestTemplate);
router.delete("/test-template", TestTemplatesController.deleteTestTemplate);

module.exports = router;
