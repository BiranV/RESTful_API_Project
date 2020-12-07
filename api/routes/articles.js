const express = require('express');
const router = express.Router();
const controllers = require('../controllers/articles')
const upload = require ('../middlewares/upload');


router.get("/", controllers.getAllArticles);
router.get("/:articleId", controllers.getArticle);
router.post("/", upload.single("image") , controllers.creatArticle);
router.patch("/:articleId", controllers.updateArticle);
router.delete("/:articleId", controllers.deleteArticle);

module.exports = router;