const router = require("express").Router();
const productController = require("../controllers/products");

router.get("/", productController.list);
router.get("/:id", productController.show);
router.post("/", productController.create);

module.exports = router;
