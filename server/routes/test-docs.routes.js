const Router = require("express");
const router = new Router();
const TestDocsController = require("../controllers/test-docs.controller");

router.post("/test-doc", TestDocsController.createTestDoc);
router.get("/test-docs", TestDocsController.getTestDocs);
router.get("/test-doc", TestDocsController.getOneTestDoc);
router.put("/test-doc", TestDocsController.updateTestDoc);
router.delete("/test-doc", TestDocsController.deleteTestDoc);

module.exports = router;
