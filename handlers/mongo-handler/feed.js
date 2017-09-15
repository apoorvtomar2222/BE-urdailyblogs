var mongoose = require('mongoose');
var globalwars= require('../global-wars/global_wars.js');

var Schema = mongoose.Schema;

var feedSchema = new Schema({
    title:{
        type: String
    },
    _id:{
      type: String
    },
    image:{
        type: String
    },
    category:[{
        type:String
    }],
    authorName:{
      type: String
    },
    articleId:{
      type: String
    },
    publishedDate:{
      type: String
    },
    creationDate:{
      type: String
    },
    authorPicture:{
      type: String
    },
    published:{
      type: Boolean
    }
});

var Feed = module.exports = mongoose.model('feed', feedSchema);