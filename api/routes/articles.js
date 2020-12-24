const express = require('express');
const router = express.Router();

const { 
    getAllArticles,
    getArticle,
    creatArticle,
    updateArticle,
    deleteArticle
} = require("../controllers/articles");

router.get("/", getAllArticles);
router.get("/:articleId", getArticle);
router.post("/", creatArticle);
router.patch("/:articleId", updateArticle);
router.delete("/:articleId", deleteArticle);

module.exports = router;