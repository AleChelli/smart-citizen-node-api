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
  //Return a JSON with all device ("This is implemented with the new API")
  proto.listAll = function(callback){
    console.log("All devices JSON: ");
    var requestData = {
      uri : 'https://new-api.smartcitizen.me/v0/devices',
      method : "GET"
    }
    var _req = request(requestData,function(error,response,body){
            //console.log(response)
        if ('undefined' !== typeof response){
            if ('200' === response.statusCode || 200 === response.statusCode) {
              console.log(body)


            }
            else {

            }
        } else {

        }
    });
  }
  return proto;
}
