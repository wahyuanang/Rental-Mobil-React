const { Cars, Users } = require("../../../models");
const imagekit = require("../../../lib/imagekit");
const { Op, where } = require("sequelize");

async function getAllCars(req, res) {
  try {
    const cars = await Cars.findAll({
      include: [
        {
          model: Users,
          as: "userCreate",
          attributes: ["id", "firstName", "lastName", "role"],
        },
        {
          model: Users,
          as: "userUpdate",
          attributes: ["id", "firstName", "lastName", "role"],
        },
        {
          model: Users,
          as: "userDelete",
          attributes: ["id", "firstName", "lastName", "role"],
        },
      ],
      attributes: [
        "id",
        "name",
        "tahun",
        "noPlat",
        "harga",
        "fotoMobil",
        "createdAt",
        "updatedAt",
        "deletedAt",
      ],
      order: ["id"],
    });

    if (cars.length === 0) {
      return res.status(404).json({
        status: "Failed",
        message: "No data cars found",
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Success get cars data",
      isSuccess: true,
      data: {
        cars,
      },
    });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errorMessage = error.errors.map((err) => err.message);
      return res.status(400).json({
        status: "Failed",
        message: errorMessage[0],
        isSuccess: false,
        data: null,
      });
    } else if (error.name === "SequelizeDatabaseError") {
      return res.status(400).json({
        status: "Failed",
        message: error.message || "Database error",
        isSuccess: false,
        data: null,
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        message: error.message,
        isSuccess: false,
        data: null,
      });
    }
  }
}

async function getFilterCars(req, res) {
  try {
    const { name, harga, page = 1, limit = 10 } = req.query;
    console.log(name, harga);

    const condition = {};
    if (name) condition.name = { [Op.iLike]: `%${name}%` };
    if (harga) {
      condition.harga = {
        [Op.lte]: harga,
      };
    }
    condition.deletedAt = null

    const offset = (page - 1) * limit;

    const totalData = await Cars.count({ where: condition });

    const cars = await Cars.findAll({
      include: [
        {
          model: Users,
          as: "userCreate",
          attributes: ["id", "firstName", "lastName", "role"],
        },
        {
          model: Users,
          as: "userUpdate",
          attributes: ["id", "firstName", "lastName", "role"],
        },
        {
          model: Users,
          as: "userDelete",
          attributes: ["id", "firstName", "lastName", "role"],
        },
      ],
      attributes: [
        "id",
        "name",
        "tahun",
        "noPlat",
        "harga",
        "fotoMobil",
        "createdAt",
        "updatedAt",
        "deletedAt",
      ],
      where: condition,
      limit: limit,
      offset: offset,
      order: ["id"],
    });

    if (cars.length === 0) {
      return res.status(404).json({
        status: "Failed",
        message: "No data cars found",
        isSuccess: false,
        data: null,
      });
    }

    const totalPages = Math.ceil(totalData / limit);

    res.status(200).json({
      status: "Success",
      message: "Success get cars data",
      isSuccess: true,
      data: {
        totalData,
        totalPages,
        page,
        cars,
      },
    });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errorMessage = error.errors.map((err) => err.message);
      return res.status(400).json({
        status: "Failed",
        message: errorMessage[0],
        isSuccess: false,
        data: null,
      });
    } else if (error.name === "SequelizeDatabaseError") {
      return res.status(400).json({
        status: "Failed",
        message: error.message || "Database error",
        isSuccess: false,
        data: null,
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        message: error.message,
        isSuccess: false,
        data: null,
      });
    }
  }
}

async function getCarbyId(req, res) {
  try {
    const id = req.params.id;
    const car = await Cars.findOne({
      where: { id },
      include: [
        {
          model: Users,
          as: "userCreate",
          attributes: ["id", "firstName", "lastName", "role"],
        },
        {
          model: Users,
          as: "userUpdate",
          attributes: ["id", "firstName", "lastName", "role"],
        },
        {
          model: Users,
          as: "userDelete",
          attributes: ["id", "firstName", "lastName", "role"],
        },
      ],
      attributes: [
        "id",
        "name",
        "tahun",
        "noPlat",
        "harga",
        "fotoMobil",
        "createdAt",
        "updatedAt",
        "deletedAt",
      ],
    });
    if (!car) {
      return res.status(404).json({
        status: "Failed",
        message: "No data cars found",
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Success get cars data",
      isSuccess: true,
      data: {
        car,
      },
    });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errorMessage = error.errors.map((err) => err.message);
      return res.status(400).json({
        status: "Failed",
        message: errorMessage[0],
        isSuccess: false,
        data: null,
      });
    } else if (error.name === "SequelizeDatabaseError") {
      return res.status(400).json({
        status: "Failed",
        message: error.message || "Database error",
        isSuccess: false,
        data: null,
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        message: "An unexpected error occurred",
        isSuccess: false,
        data: null,
      });
    }
  }
}

async function createCar(req, res) {
  try {
    if (req.file) {
      const file = req.file;
      const split = file.originalname.split(".");
      const ext = split[split.length - 1];
      const { name, tahun, noPlat, harga } = req.body;

      const uploadedImage = await imagekit.upload({
        file: file.buffer,
        fileName: `${split[0]}-${Date.now()}.${ext}`,
      });
      if (!uploadedImage) {
        return res.status(500).json({
          status: "Failed",
          message: "Cant add uploadimage",
          isSuccess: false,
          data: null,
        });
      } else if (uploadedImage) {
        const newCar = await Cars.create({
          name,
          tahun,
          noPlat,
          harga,
          fotoMobil: uploadedImage.url,
          createdBy: req.user.id,
        });

        res.status(200).json({
          status: "Success",
          message: "Success create car data",
          isSuccess: true,
          data: {
            newCar,
          },
        });
      }
    } else {
      const { name, tahun, noPlat, harga } = req.body;
      const newCar = await Cars.create({
        name,
        tahun,
        noPlat,
        harga,
        createdBy: req.user.id,
      });

      res.status(200).json({
        status: "Success",
        message: "Success create car data",
        isSuccess: true,
        data: {
          newCar,
        },
      });
    }
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errorMessage = error.errors.map((err) => err.message);
      return res.status(400).json({
        status: "Failed",
        message: errorMessage[0],
        isSuccess: false,
        data: null,
      });
    } else if (error.name === "SequelizeDatabaseError") {
      return res.status(400).json({
        status: "Failed",
        message: error.message || "Database error",
        isSuccess: false,
        data: null,
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        message: "An unexpected error occurred",
        isSuccess: false,
        data: null,
      });
    }
  }
}

async function updateCar(req, res) {
  try {
    const id = req.params.id;
    const { name, tahun, noPlat, harga } = req.body;

    const detailCar = await Cars.findByPk(id);
    if (!detailCar) {
      return res.status(404).json({
        status: "Failed",
        message: "No data cars found",
        isSuccess: false,
        data: null,
      });
    }

    if (req.file) {
      const file = req.file;
      const split = file.originalname.split(".");
      const ext = split[split.length - 1];

      const uploadedImage = await imagekit.upload({
        file: file.buffer,
        fileName: `${split[0]}-${Date.now()}.${ext}`,
      });
      console.log("ok");
      if (!uploadedImage) {
        console.log("ok");
        return res.status(500).json({
          status: "Failed",
          message: "Cant add uploadimage",
          isSuccess: false,
          data: null,
        });
      }
      (detailCar.name = name),
        (detailCar.tahun = tahun),
        (detailCar.noPlat = noPlat),
        (detailCar.harga = harga),
        (detailCar.fotoMobil = uploadedImage.url),
        (detailCar.updatedBy = req.user.id);

      await detailCar.save();

      res.status(200).json({
        status: "Success",
        message: "Success update car data",
        isSuccess: true,
        data: {
          car: {
            name,
            tahun,
            noPlat,
            harga,
            fotoMobil: uploadedImage.url,
            updatedBy: req.user.id,
          },
        },
      });
    } else {
      detailCar.name = name;
      detailCar.tahun = tahun;
      detailCar.noPlat = noPlat;
      detailCar.harga = harga;
      detailCar.updatedBy = req.user.id;

      await detailCar.save();

      res.status(200).json({
        status: "Success",
        message: "Success update car data",
        isSuccess: true,
        data: {
          car: {
            name,
            tahun,
            noPlat,
            harga,
            updatedBy: req.user.id,
          },
        },
      });
    }
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errorMessage = error.errors.map((err) => err.message);
      return res.status(400).json({
        status: "Failed",
        message: errorMessage[0],
        isSuccess: false,
        data: null,
      });
    } else if (error.name === "SequelizeDatabaseError") {
      return res.status(400).json({
        status: "Failed",
        message: error.message || "Database error",
        isSuccess: false,
        data: null,
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        message: "An unexpected error occurred",
        isSuccess: false,
        data: null,
      });
    }
  }
}

async function deleteCar(req, res) {
  try {
    const id = req.params.id;
    const car = await Cars.findByPk(id);

    if (!car) {
      return res.status(404).json({
        status: "Failed",
        message: "No data cars found",
        isSuccess: false,
        data: null,
      });
    }

    const dateNow = Date.now();
    const dateParse = new Date(dateNow);
    (car.deletedBy = req.user.id), (car.deletedAt = dateNow);

    await car.save({ silent: true });

    res.status(200).json({
      status: "Success",
      message: "Success delete car",
      isSuccess: true,
      data: {
        car: {
          id: car.id,
          deletedBy: req.user.id,
          deletedAt: dateParse.toString(),
        },
      },
    });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errorMessage = error.errors.map((err) => err.message);
      return res.status(400).json({
        status: "Failed",
        message: errorMessage[0],
        isSuccess: false,
        data: null,
      });
    } else if (error.name === "SequelizeDatabaseError") {
      return res.status(400).json({
        status: "Failed",
        message: error.message || "Database error",
        isSuccess: false,
        data: null,
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        message: "An unexpected error occurred",
        isSuccess: false,
        data: null,
      });
    }
  }
}

module.exports = {
  getAllCars,
  getFilterCars,
  getCarbyId,
  createCar,
  updateCar,
  deleteCar,
};
