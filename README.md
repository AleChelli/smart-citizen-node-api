# Node.js Smart Citizen API

This is a Node.js client for the [Smart Citizen API](http://developer.smartcitizen.me).

## Installation

```
$ npm install smart-citizen-node-api
```

## Usage
First, you need to call the module and set your API key. You can obtain your API key from your [SmartCitizen Profile](https://smartcitizen.me/profile/users).

```javascript
var smartCitizen = require("smart-citizen-node-api");
var client = smartCitizen(your_api_key);
```

Then you can start using the SmartCitizen API.

For example, to get all the devices associated to your account, you can use:

```javascript
client.devices.listAll(function(err, result){
    if (err) return;
    // do something with your data
});
```

## Implemented Methods

### Devices: Get All Devices
[API Reference](http://developer.smartcitizen.me/#get-all-devices)

```javascript
client.devices.listAll( function(err, result) {...} )
```

### Sensors: Get All Sensors
[API Reference](http://developer.smartcitizen.me/#get-all-sensors)

```javascript
client.sensors.listAll( function(err, result) {...} )
```

### Users: Get All Users
[API Reference](http://developer.smartcitizen.me/#get-all-users)

```javascript
client.users.listAll( function(err, result) {...} )
```

### Users: Get Current User
[API Reference](http://developer.smartcitizen.me/#get-current-user-(me))

```javascript
client.users.me( function(err, result) {...} )
```

### Measurements: Get All Measurements
[API Reference](http://developer.smartcitizen.me/#get-all-measurements)

```javascript
client.measurements.listAll( function(err, result) {...} )
```

### Kits: Get All Kits
[API Reference](http://developer.smartcitizen.me/#get-all-kits)

```javascript
client.kits.listAll( function(err, result) {...} )
```

### Components: Get All Components
[API Reference](http://developer.smartcitizen.me/#get-all-components)

```javascript
client.components.listAll( function(err, result) {...} )
```

## Dependencies

This project depends on [request](https://github.com/request/request) to make HTTP requests.

## Development

See something you think can be improved? [Open an issue](https://github.com/AleChelli/smart-citizen-node-api/issues/new) or clone the project and send a pull request with your changes.

## Project Members

- Owner: [AleChelli](https://github.com/AleChelli)
- Mantainer: [XzAeRo](https://github.com/XzAeRo)
