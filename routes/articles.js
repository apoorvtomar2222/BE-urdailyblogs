var express = require('express');
var articleController = express();
var articleHandler = require('../handlers/article-handler/article_handler.js');

articleController.get("/:id",function(req,res){
    console.log("This is the aritcle handler",req.params.id);

    articleHandler.getArticle(req.params.id,function(err,resp){
            res.send(resp);
    } );

}) 

articleController.post('/newArticles', articleHandler.postArticle);

module.exports = articleController;