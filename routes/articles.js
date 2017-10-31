var express = require('express');
var articleController = express();
var slug = require('slugg')
var articleHandler = require('../handlers/article-handler/article_handler.js');
var path = require('path');

//creating new article start
articleController.get("/redirect/newarticle",function(req,res){
    res.sendFile(path.join(__dirname+'/../views/writeanarticle.html'));
}) 
//creating new article end
articleController.post("/save/newarticle",function(req,res){
    console.log("REqqqqqqq",req.body);
    var authorName =req.body.authorPicture;
    var authorPicture = "https://res.cloudinary.com/apoorvtomar/image/upload/c_fit,h_100,q_45,w_100/v1507466798/"+req.body.authorPicture+ ".jpg";
    var categories=[]
    categories.push(req.body.categories);
    console.log("categories",categories);
    var data ={
        "_id":slug(req.body.title),
        "title":req.body.title,
        "headerImage":req.body.headerImage,
        "categories:":categories,
        "content":req.body.content,
        "authorPicture":authorPicture
    }
    console.log("Data ",data);
   articleHandler.postArticle(data,authorName);
    //res.sendFile(path.join(__dirname+'/../views/writeanarticle.html'));
})

articleController.post("/save/uploadImage",function(req,res){
    //res.sendFile(path.join(__dirname+'/../views/writeanarticle.html'));
})





//fetching new article start
articleController.get("/:id",function(req,res){
    console.log("This is the aritcle handler",req.params.id);
    articleHandler.getArticle(req.params.id,function(err,resp){
            res.send(resp);
    });
})
//fetching new article end


articleController.post('/newArticles', articleHandler.postArticle);

module.exports = articleController;