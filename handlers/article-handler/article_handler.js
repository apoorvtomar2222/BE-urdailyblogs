var express = require('express');
var Articles = require("../mongo-handler/articles");
var Feed = require("../mongo-handler/feed");


module.exports = {
    "getArticle": function (id, cb) {

        console.log("Id in article handler ", id);
        console.log("Article", Articles);
        Articles.find({ _id: id }, function (err, resp) {
            console.log("Article Returned from Data base is", resp);
            cb(err, resp);
        });
    },
    
    "postArticle": function (req, authorName,res,next) {
        console.log("post article",req)
        var article = new Articles(req);
        article.save(function (err) {
            if (err) {
                console.log(err);
                return res.json(err);
            }
            var date = new Date();
            var feed = {};
            feed['_id'] = date.getTime();
            feed['authorName'] = authorName;
            feed['creationDate'] = date.getTime();
            feed['articleId'] = req._id;
            feed['image'] = req.headerImage;
            feed['category'] = [req.categories];
            feed['publishedDate'] = date.getTime();
            feed['published'] = 1.0;
            feed['title'] = req.title;
            feed['authorPicture'] = req.authorPicture;
            console.log("FEEd",feed);
            var newFeed = new Feed(feed);
                newFeed.save();
                
        });

    }
}

