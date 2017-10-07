var usb = require("usb");
var _ = require("lodash");
var async = require("async");
var USBDevice = require("usbdevice");
// var usbdevice = new USBDevice(vendorId, productId);
allPort = usb.getDeviceList();

var ourVendorId= [ 1137, 45039 ];

var allEndPoints = _.map(allPort,function(n,index) {
    if(_.indexOf(ourVendorId,n.deviceDescriptor.idVendor) > -1) {
        n.open();
        return {endPoint:n.interfaces[0].endpoints,vendor:n.deviceDescriptor.idVendor,product:n.deviceDescriptor.idProduct};
    } else {
        return false;
    }
    
});

var allEndPoints = _.compact(allEndPoints);

console.log(allEndPoints);
var usb1 = new USBDevice(allEndPoints[0].vendor, allEndPoints[0].product);
usb1.connect();
var stream = usb1.stream();
stream.on("data",function(err,data) {
    console.log("This is the Error");
    console.log(err);
    console.log("This is Data");
    console.log(data);
});








