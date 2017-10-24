var HID = require('node-hid');
var _  =require("lodash");
var async  =require("async");
var devices = HID.devices();
console.log(devices);

// for RFID Reader
var vendorID = 45039;
var productID = 3841;


// for Tackpad Reader
// var vendorID = 16700;
// var productID = 12314;

// var rfidDevice  = _.find(devices,function(n) {
// return  (n.vendorId == vendorID && n.productId == productID);
// });
var rfidDevice =  new HID.HID(vendorID,productID);


rfidDevice.on("data", function(data) {
    console.log(data);
    var textChunk = data.toString();
    // console.log(textChunk);
});

// rfidDevice.sendFeatureReport(data)
rfidDevice.on("error", function(err) {
    console.log(err);
});



console.log(rfidDevice.getDeviceInfo());



setTimeout(function() {
    rfidDevice.write([0x000000]);
},1000);

