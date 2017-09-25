var express = require('express');
var Articles = require("../mongo-handler/articles");
var Feed = require("../mongo-handler/feed");


module.exports ={
    "getArticle" : function(id,cb){

        console.log("Id in article handler ",id);
        console.log("Article",Articles);
            Articles.find({_id:id},function(err,resp){
                console.log("Article Returned from Data base is",resp);
                cb(err,resp);
            });
    },

    "postArticle": function(req,res,next){
    
        var article =  new Articles(req.body);
        article.save(function(err){
            if(err){
                console.log(err);
                return res.json(err);
            }
            var date = new Date();
            var feed = {};
            feed['authorName'] = req.body.authorName;
            feed['creationDate'] = date.getTime();
            feed['articleId'] = req.body._id;
            feed['image'] = req.body.headerImage;
            feed['category'] = req.body.categories;
            feed['publishedDate'] = date.getTime();
            feed['published'] = 1.0;
            feed['title'] = req.body.title;
            feed['authorPicture'] = req.body.authorPicture;
            var newFeed = new Feed(feed);
            newFeed.save(function(err){
                if(err){
                    return res.json({succes:false});
                }
                res.json({success:true});
            });
            
        });
        
    }
}

