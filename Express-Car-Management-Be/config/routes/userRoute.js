const router = require("express").Router();

const { UserController } = require("../../app/controllers/api/v1");
const { uploader, authenticated, authorize } = require("../../app/middlewares");

router.get("/", authenticated, authorize('superadmin', 'admin'), UserController.getAllUsers);
router.get("/:id", authenticated, authorize('superadmin', 'admin', 'member'), UserController.getUserbyId);
router.post("/", authenticated, authorize('superadmin', 'admin'), uploader.single("fotoProfil"), UserController.createUser);
router.get("/current/user", authenticated, authorize('superadmin', 'admin', 'member'), UserController.currentUser);
router.patch("/:id", authenticated, authorize('superadmin', 'admin', 'member'), uploader.single("fotoProfil"), UserController.updateUser);
// router.delete("/:id", UserController.deleteUser);


module.exports = router;