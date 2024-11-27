const router = require("express").Router();

const { AuthController } = require("../../app/controllers/api/v1")

router.post("/register", AuthController.register)
router.post("/login", AuthController.login)

module.exports = router;