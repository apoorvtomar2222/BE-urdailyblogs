var express = require('express');
var async = require('async');
var Feed = require('../mongo-handler/feed.js');
//var Feed = new feed_handler;

module.exports = {
"fetchMegaFeedTestbyCity":function(batchSize,timeOfLastFeedItem,cb){
    console.log("Function Called fetchMegaFeedTestbyCity");
    var feed=[];

    Feed.find({},function(err,result){
      cb(err,result);
    });
  },

"fetchMegaFeedTestbyCityInterest":function(interest,timeOfLastFeedItem,cb){
    if(interest){
        Feed.find({category:[interest]},function(err,result){
            cb(err,result);
        });
    }
    else if(!interest){
        Feed.find({},function(err,result){
            cb(err,result);
          });
    }
    
    }
};