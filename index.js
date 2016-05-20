//
/*
 *  jshint strict: true
 *
 */

module.exports = function(api_key) {

    var request = require('request');
    var proto = {};

    proto.api_key = api_key;

    //Set your Api Key here
    proto.setApiKey = function(key) {
        proto.api_key = key;
    }

    proto.devices = {}
        //Return a JSON with all device ("This is implemented with the new API")
    proto.devices.listAll = function(callback) {

        var result = "";
        var error;
        var requestData = {
            uri: 'https://new-api.smartcitizen.me/v0/devices',
            method: "GET"
        }
        var _req = request(requestData, function(error, response, body) {
            if ('undefined' !== typeof response) {
                if ('200' === response.statusCode || 200 === response.statusCode) {
                    //console.log(JSON.parse(body));
                    //callback(error, JSON.parse(body));
                    result = JSON.parse(body);


                } else {
                    error = "Not 200 status code";
                }
            } else {
                error = "Not send";

            }
            callback(error, result);
        });
    };
    proto.sensors = {};
    proto.sensors.listAll = function(callback) {

        var result = "";
        var error;
        var requestData = {
            uri: 'https://new-api.smartcitizen.me/v0/sensors',
            method: "GET"
        }
        var _req = request(requestData, function(error, response, body) {
            if ('undefined' !== typeof response) {
                if ('200' === response.statusCode || 200 === response.statusCode) {
                    //console.log(JSON.parse(body));
                    //callback(error, JSON.parse(body));
                    result = JSON.parse(body);


                } else {
                    error = "Not 200 status code";
                }
            } else {
                error = "Not send";

            }
            callback(error, result);
        });
    };
    proto.users = {};
    proto.users.listAll = function(callback) {

        var result = "";
        var error;
        var requestData = {
            uri: 'https://new-api.smartcitizen.me/v0/users',
            method: "GET"
        }
        var _req = request(requestData, function(error, response, body) {
            if ('undefined' !== typeof response) {
                if ('200' === response.statusCode || 200 === response.statusCode) {
                    //console.log(JSON.parse(body));
                    //callback(error, JSON.parse(body));
                    result = JSON.parse(body);


                } else {
                    error = "Not 200 status code";
                }
            } else {
                error = "Not send";

            }
            callback(error, result);
        });
    };
    proto.users.me = function(callback) {

        var result = "";
        var error;
        var requestData = {
            uri: 'http://api.smartcitizen.me/v0.0.1/' + api_key + '/me.json',
            method: "GET"
        }
        var _req = request(requestData, function(error, response, body) {
            if ('undefined' !== typeof response) {
                if ('200' === response.statusCode || 200 === response.statusCode) {
                    //console.log(JSON.parse(body));
                    //callback(error, JSON.parse(body));
                    result = JSON.parse(body);


                } else {
                    error = "Not 200 status code";
                }
            } else {
                error = "Not send";

            }
            callback(error, result);
        });
    };

    proto.measurements = {};
    proto.measurements.listAll = function(callback) {

        var result = "";
        var error;
        var requestData = {
            uri: 'https://new-api.smartcitizen.me/v0/measurements',
            method: "GET"
        }
        var _req = request(requestData, function(error, response, body) {
            if ('undefined' !== typeof response) {
                if ('200' === response.statusCode || 200 === response.statusCode) {
                    //console.log(JSON.parse(body));
                    //callback(error, JSON.parse(body));
                    result = JSON.parse(body);


                } else {
                    error = "Not 200 status code";
                }
            } else {
                error = "Not send";

            }
            callback(error, result);
        });
    };
    proto.kits = {};
    proto.kits.listAll = function(callback) {

        var result = "";
        var error;
        var requestData = {
            uri: 'https://new-api.smartcitizen.me/v0/kits',
            method: "GET"
        }
        var _req = request(requestData, function(error, response, body) {
            if ('undefined' !== typeof response) {
                if ('200' === response.statusCode || 200 === response.statusCode) {
                    //console.log(JSON.parse(body));
                    //callback(error, JSON.parse(body));
                    result = JSON.parse(body);


                } else {
                    error = "Not 200 status code";
                }
            } else {
                error = "Not send";

            }
            callback(error, result);
        });
    };
    proto.components = {};
    proto.components.listAll = function(callback) {

        var result = "";
        var error;
        var requestData = {
            uri: 'https://new-api.smartcitizen.me/v0/components',
            method: "GET"
        }
        var _req = request(requestData, function(error, response, body) {
            if ('undefined' !== typeof response) {
                if ('200' === response.statusCode || 200 === response.statusCode) {
                    //console.log(JSON.parse(body));
                    //callback(error, JSON.parse(body));
                    result = JSON.parse(body);


                } else {
                    error = "Not 200 status code";
                }
            } else {
                error = "Not send";

            }
            callback(error, result);
        });
    };
    return proto;
}
