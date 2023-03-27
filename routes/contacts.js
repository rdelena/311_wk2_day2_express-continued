const router = require("express").Router();
const contactController = require("../controllers/contacts");

router.get("/", contactController.list);
router.get("/:id", contactController.show);
router.post("/", contactController.create);

module.exports = router;
