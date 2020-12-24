const Article = require("../models/article");
const mongoose = require("mongoose");

module.exports = {
    getAllArticles: (req,res) => {
        Article.find().then((articles) => {
            res.status(200).json({
                articles
            })
        }).catch(error => {
            res.status(500).json({
                error
            })     
        });
    },
    getArticle: (req,res) => {
        const articleId = req.params.articleId;

        Article.findById(articleId).then((article) => {
            res.status(200).json({
                article
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    creatArticle: (req,res) => {
        const {title, description, content} = req.body;

        const article = new Article({
            _id: new mongoose.Types.ObjectId(), //mongoose will generate a unique string 
            title,
            description,
            content
        });

        article.save().then(() => {
            res.status(200).json({
                message: "Created article"

            })

        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    updateArticle: (req,res) => {
        const articleId = req.params.articleId

        Article.updateOne({_id: articleId}, req.body).then(() => {
            res.status(200).json({
                message: "Article Updated"
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    deleteArticle: (req,res) => {
        const articleId = req.params.articleId

        Article.deleteOne({_id: articleId}).then(() => {
            res.status(200).json({
                message: `Delete article -  ${articleId}`
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    }
}