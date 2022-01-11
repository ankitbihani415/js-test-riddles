const fs = require("fs");


var data = {
  fname: "santoshi4",
  lname: "patidar4",
  address: "newadd"
};
fs.appendFile('Customer.json', JSON.stringify(data), function(err, data) {
  if(!err){
    console.log(data)
    console.log('append data')
  }
});