const router = require("express").Router();
const userControllers = require("./../controllers/userControllers");

router.post("/", userControllers.postUser);
router.get("/", userControllers.getAllUser);

module.exports = router;
