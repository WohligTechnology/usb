var HID = require('node-hid');
var _ = require("lodash");
var async = require("async");

var SerialPort = require('serialport');
var port = new SerialPort('/dev/tty.usbmodem1421', {
    baudRate: 9600
});


var string = "";


port.open(function (err) {
    if (err) {
        return console.log('Error opening port: ', err.message);
    }
});

// The open event is always emitted
port.on('open', function () {
    console.log("Port Open");
});

port.on('data', function (data) {
    string += data.toString("binary");
    var stringArr = _.split(string, "\n");
    if (stringArr.length > 1) {
        console.log(_.chain(stringArr).head().split(" ").join("").trim().value());
        string = "";
    }
});


var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
var colors = ["s", "h", "c", "d"];