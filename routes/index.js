const router = require("express").Router();
const comments = require("./comments");
const contacts = require("./contacts");
const vehicles = require("./vehicles");
const products = require("./products");

router.use("/comments", comments);
router.use("/contacts", contacts);
router.use("/vehicles", vehicles);
router.use("/products", products);

module.exports = router;
