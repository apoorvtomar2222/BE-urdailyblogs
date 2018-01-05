var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var newsSchema = new Schema({
    title:{
        type: String
    },
    headerImage:{
        type: String
    },
    category:[{
        type:String
    }],
    content:{
        type: String
    },
    author:{
      type: String
    },
    authorName:{
      type: String
    },
    authorPicture:{
      type: String
    },
    published:{
      type: Boolean
    }
});

var News = module.exports = mongoose.model('news', newsSchema);