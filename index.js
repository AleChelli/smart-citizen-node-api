//
/*
 *  jshint strict: true
 *
 */

module.exports = function(api_key) {

  var request = require('request')
  var proto = {}

  proto.api_key = api_key;

  //Set your Api Key here
  proto.setApiKey = function(key){
    proto.api_key = key;
  }

  proto.devices = {}
  //Return a JSON with all device ("This is implemented with the new API")
  proto.devices.listAll = function(callback){
    console.log("All devices JSON: ");
    var result = ""
    var error
    var requestData = {
      uri : 'https://new-api.smartcitizen.me/v0/devices',
      method : "GET"
    }
    var _req = request(requestData,function(error,response,body){
        if ('undefined' !== typeof response){
            if ('200' === response.statusCode || 200 === response.statusCode) {
              //console.log(JSON.parse(body));
              //callback(error, JSON.parse(body));
              result = JSON.parse(body);


            }
            else {
              error = "Not 200 status code"
            }
        } else {
          error = "Not send"

        }
        callback(error, result);
    });
  }
  proto.data = {}
  //Return a JSON with all device ("This is implemented with the new API")
  proto.data.getLatestData = function(){
    console.log("All devices JSON: ");
    var requestData = {
      uri : 'http://api.smartcitizen.me/v0.0.1/'+proto.api_key+'/lastpost.json',
      method : "GET"
    }
    var _req = request(requestData,function(error,response,body){
        if ('undefined' !== typeof response){
            if ('200' === response.statusCode || 200 === response.statusCode) {
              console.log(JSON.parse(body));


            }
            else {

            }
        } else {

        }
    });
  }

  return proto;
}
