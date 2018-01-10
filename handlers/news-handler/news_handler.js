var express = require('express');
var News = require('../mongo-handler/news');

module.exports = {
    "getNews": function (req, res) {
        News.find({}, function (err, data) {
            console.log('NEws is', data);
            res.json(data);
        });
    },
    "saveNews": function (req, res) {
        console.log('Data ',req.body);
        var news = new News(req.body);
        news.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('meow');
            }
        });
    }
}