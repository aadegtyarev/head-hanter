const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");

router.post("/user", userController.createUser);
router.get("/users", userController.getUsers);
router.get("/user", userController.getOneUser);
router.put("/user", userController.updateUser);
router.delete("/user", userController.deleteUser);

module.exports = router;
