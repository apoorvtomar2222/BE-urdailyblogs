var express = require('express');
var Articles = require("../mongo-handler/articles");


module.exports ={
    "getArticle" : function(id,cb){

        console.log("Id in article handler ",id);
        console.log("Article",Articles);
            Articles.find({_id:id},function(err,resp){
                console.log("Article Returned from Data base is",resp);
                cb(err,resp);
            });
    },

    "insertArticle":function(data){
        console.log("data in insert Article",data);
        var article = new Articles(data);
        article.save();
    }
}

