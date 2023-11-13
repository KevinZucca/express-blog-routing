const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts");

router.get("/", postController.index);
router.get("/create", postController.create);
router.get("/:slug", postController.show);

module.exports = router;
