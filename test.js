var smartCitizien = require("./")
var smart = smartCitizien("2cdea7d41ccd90ad377196d1fb02fb0f867cdc0b");
//a.setApiKey();
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
a.users.listAll(function(err, data){
  if(err){
    console.log("Error");
  } else {
    console.log(data);
  }
})
a.components.listAll(function(err, data){
  if(err){
    console.log("Error");
  } else {
    console.log(data);
  }
})

//a.data.getLatestData();
a.data.getSensors(65, function(err,data){
  if(err){
    console.log(err)
  }
  else{
    console.log(data);
  }
})
console.log(a.api_key)
