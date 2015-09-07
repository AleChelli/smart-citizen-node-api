var smartCitizien = require("./")
var a = smartCitizien("2cdea7d41ccd90ad377196d1fb02fb0f867cdc0b");
//a.setApiKey();
a.devices.listAll(function(err, data){
  if(err){
    console.log("Error");
  } else {
    console.log(data);
})

a.data.getLatestData();
console.log(a.api_key)
