const router = require("express").Router();
const commentController = require("../controllers/comments");

router.get("/", commentController.list);
router.get("/:id", commentController.show);
router.post("/", commentController.create);

module.exports = router;
