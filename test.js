var smartCitizen = require("./")
var smart = smartCitizen("2cdea7d41ccd90ad377196d1fb02fb0f867cdc0b");

smart.measurements.listAll(function(err, data){
  if(err){
    console.log("Error");
  } else {
    console.log(data);
  }
})

smart.measurements.listAll(function(err, data){
  if(err){
    console.log("Error");
  } else {
    console.log(data);
  }
})
smart.sensors.listAll(function(err, data){
  if(err){
    console.log("Error");
  } else {
    console.log(data);
  }
})
smart.users.listAll(function(err, data){
  if(err){
    console.log("Error");
  } else {
    console.log(data);
  }
})
smart.components.listAll(function(err, data){
  if(err){
    console.log("Error");
  } else {
    console.log(data);
  }
})
console.log(smart.api_key)
