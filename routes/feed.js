var express = require('express');
var feedController = express();
//console.log(require('../handlers/feed-handler'))
var feedHandler = require('../handlers/feed-handler/feed_handler.js');

/**
 * getting feed from the database
 */
feedController.get('/feedtest/:batchSize?', function(req, res, next){
  console.log("I am here in feedjs",feedHandler);
  feedHandler.fetchMegaFeedTestbyCity(req.params.batchSize, req.params.timeOfLastFeedItem,function(err, resp){

    res.send(resp);

  });
});



feedController.get('/feedtestinterest/:interest?', function(req, res, next){

    feedHandler.fetchMegaFeedTestbyCityInterest(req.params.interest, req.params.timeOfLastFeedItem,function(err, resp){
        console.log("Resp received",resp);
        res.send(resp);
        // if(err){
        //   responseHandler.apiResponder(req, res, "error", err);
        // }else{
        //   responseHandler.apiResponder(req, res, "success", resp);
        // }
    });
});




module.exports = feedController;
