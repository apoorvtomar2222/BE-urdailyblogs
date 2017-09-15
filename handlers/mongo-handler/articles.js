var mongoose = require('mongoose');
//ßvar globalwars= require('../global-wars');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    _id:{
        type:String,
    },
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
      type: Schema.Types.ObjectId, ref:'Admin'
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

var Articles = module.exports = mongoose.model('Articles', articleSchema);