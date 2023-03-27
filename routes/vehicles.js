const router = require("express").Router();
const vehicleController = require("../controllers/vehicles");

router.get("/", vehicleController.list);
router.get("/:id", vehicleController.show);
router.post("/", vehicleController.create);

module.exports = router;
