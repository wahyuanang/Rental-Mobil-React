const router = require("express").Router();
const swaggerUI = require("swagger-ui-express")
const swaggerDocument = require("../../app/docs/api-docs.json")

router.use("/", swaggerUI.serve);
router.use("/", swaggerUI.setup(swaggerDocument));

module.exports = router;
