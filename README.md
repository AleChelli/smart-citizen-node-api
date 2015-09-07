Smart Citizend API Node
==================


This is a Node.js wrapper/client for the [Smart Citizen](http://api.smartcitizen.me), integrated with the [Smart Citizen New API](https://github.com/fablabbcn/smartcitizen).

Project owner is [AleChelli](https://github.com/AleChelli).

It includes helper functions to do the following:

#### Devices
- List all devices (implemented with the new API)

#### Data
- Get latest Data
- Get Sensors Data

#### Users
- Get User Info


The methods implemented require an api_key, you can obtain one here:

- [api_key](https://smartcitizen.me/users/login) (Register and obtain one)

##### Dependencies

This project depends on [request](https://github.com/request/request) to make HTTP requests.

## Installation

    $ npm install smart-citizen-node-api --save

## Usage

First, instantiate the wrapper.You need an Api Key [obtain here](https://smartcitizen.me/users/login)
```javascript
var smartCitizien = require("smart-citizen-node-api");

// You need an Api Key, you will always use your api_key
var smart = smartCitizien(your_api_key);
```

Lastly, use the wrapper's helper methods to make the request to Smart Citizen's API.
```javascript
// List all devices
smart.devices.listAll(function(err, data){
  if(err){
    console.log("Error");
  } else {
    console.log(data);
})
```
## Other API:
- .data.getSensors(id, from, to, group_by callback);
- users.listAll(callback)
- users.me(callback)
- sensors.listAll()
- components.listAll()
- measurements.listAll()
- kits.listAll()

## Development

See something you think can be improved? [Open an issue](https://github.com/AleChelli/smart-citizen-node-api/issues/new) or clone the project and send a pull request with your changes.

##Enjoy IoT
