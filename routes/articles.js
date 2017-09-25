var express = require('express');
var articleController = express();
var articleHandler = require('../handlers/article-handler/article_handler.js');
var path = require('path');
var cloudinary = require('cloudinary');
cloudinary.config({ 
    cloud_name: 'apoorvtomar', 
    api_key: '753257696249553', 
    api_secret: 'cBoORgn4CEqVt0r3nvpqffjh7jg' 
  });
  
//creating new article start
articleController.get("/redirect/newarticle",function(req,res){
    console.log("This is for new article");
    res.sendFile(path.join(__dirname+'/../views/writeanarticle.html'));
}) 
//creating new article end
articleController.post("/save/newarticle",function(req,res){
    console.log("Save/newarticle called",req.body.headerImage);
    var path=req.body.headerImage;
    console.log("Path",path);
    cloudinary.v2.uploader.upload(path, 
    function(error, result) {console.log("result",result)});
    



   // articleHandler.insertArticle(req.body);
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