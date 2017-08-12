var express = require('express');
var async = require('async');
var Feed = require('../mongo-handler/feed.js');
//var Feed = new feed_handler;

module.exports = {
"fetchMegaFeedTestbyCity":function(batchSize,timeOfLastFeedItem,cb){
    console.log("Function Called fetchMegaFeedTestbyCity",Feed);
    var feed=[];
  
    Feed.find({},function(err,result){
      cb(err,result);
    });
  }
};