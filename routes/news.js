var express = require('express');
var newsController = express.Router();
var NewsHandler =  require('../handlers/news-handler/news_handler');


newsController.get('/',NewsHandler.getNews);

newsController.post('/save/savenews',NewsHandler.saveNews);

 module.exports = newsController;