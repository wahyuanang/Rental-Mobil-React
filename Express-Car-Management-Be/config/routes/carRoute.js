const router = require("express").Router();

const { CarController } = require("../../app/controllers/api/v1");
const { uploader, authenticated, authorize } = require("../../app/middlewares");

router.get("/", authenticated, CarController.getAllCars);
router.get("/filter", authenticated, CarController.getFilterCars);
router.get("/:id", authenticated, CarController.getCarbyId);
router.post("/", authenticated, authorize('superadmin', 'admin'), uploader.single("fotoMobil"), CarController.createCar);
router.patch("/:id", authenticated, authorize('superadmin', 'admin'), uploader.single("fotoMobil"), CarController.updateCar);
router.delete("/:id", authenticated, authorize('superadmin', 'admin'), CarController.deleteCar);

module.exports = router;