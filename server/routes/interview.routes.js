const Router = require("express");
const router = new Router();
const interviewController = require("../controllers/interview.controller");

router.post("/interview", interviewController.createInterview);
router.get("/interviews", interviewController.getInterviews);
router.get("/interview", interviewController.getOneInterview);
router.put("/interview", interviewController.updateInterview);
router.delete("/interview", interviewController.deleteInterview);

module.exports = router;
