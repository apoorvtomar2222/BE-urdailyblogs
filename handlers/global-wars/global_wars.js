var envConstants = function(){
  var env = "dev";
  var devEnv = {
    // "baseUrl": "http://localhost:1302",
    // "elasticSearch": {
    //   "url": "http://localhost:9200",
    //   "index": "sodelhi",
    //   "listingsTypeName": "listings",
    //   "imagesTypeName": "images"
    // },
    "mongodb": {
      "url": "mongodb://localhost/daily_blogs"
    }
    // ,
    // "usersurl": "http://localhost:1306",
    // "usersKey": "app123",
    // "usersdb":  {
    //   "url": "mongodb://aditya22:1234@ds135577.mlab.com:35577/delhi"
    // },
    // "mongodbSession": {
    //   url: "mongodb://localhost:27017/connect_mongodb_session_store"
    // },
    // "usersmongodbSession": {
    //   url: "mongodb://localhost:27018/connect_mongodb_session_store"
    // },
    // "audience": "",
    // "limit":{
    //   articles:500,
    //   listing:500,
    //   feeds:50
    // }
  };
//   var prodEnv = {
//     "baseUrl": "https://s-o.co.in:1304",
//     "elasticSearch": {
//       "url": "http://188.166.252.230:9200",
//       "index": "sodelhi",
//       "listingsTypeName": "listings",
//       "imagesTypeName": "images"
//     },
//     "mongodb": {
//       "url": "mongodb://sodelhiBackend:BaChAo9891@139.59.21.76:17218/sodelhi?authSource=admin"
//     },
//     "usersurl": "http://139.59.10.25:1304",
//     "usersKey": "app123",
//     "usersdb":  {
//       "url": "mongodb://sodelhiBackend:BaChAo9891@139.59.21.76:17218/sodelhi?authSource=admin"
//     },

//     "mongodbSession": {
//             "url": "mongodb://sodelhiBackend:BaChAo9891@139.59.21.76:17218/connect_mongodb_session_store?authSource=admin"
//     },
//     "usersmongodbSession": {

//      "url": "mongodb://sodelhiBackend:BaChAo9891@139.59.21.76:17218/connect_mongodb_session_store?authSource=admin"
//     },
//     "audience": "",
//     "limit":{
//       articles:500,
//       listing:500,
//       feeds:500
//     }
//   };

  if(env == "prod"){
    return prodEnv;
  }
  else{
    if(env == "dev"){
      return devEnv;
    }
  }
};
exports.envConstants = envConstants;