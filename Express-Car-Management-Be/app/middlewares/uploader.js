const multer = require("multer");

const multerFiltering = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(new Error("File format is not valid"), false);
  }
};

const uploads = multer({
  fileFilter: multerFiltering,
});

module.exports = uploads;
