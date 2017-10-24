var HID = require('node-hid');
var _ = require("lodash");
var async = require("async");
var SerialPort = require('serialport');
var port = new SerialPort('/dev/tty.usbmodem1421', {
    baudRate: 9600
});
var cards = [];
var i = 0; {
    cards = [{
        "name": "1s",
        "value": "0406B9020A5481"
    }, {
        "name": "2s",
        "value": "040999020A5480"
    }, {
        "name": "3s",
        "value": "041398020A5480"
    }, {
        "name": "4s",
        "value": "04F4AA020A5480"
    }, {
        "name": "5s",
        "value": "04F5AA020A5480"
    }, {
        "name": "6s",
        "value": "0400AA020A5481"
    }, {
        "name": "7s",
        "value": "0491B1020A5480"
    }, {
        "name": "8s",
        "value": "047D74020A5481"
    }, {
        "name": "9s",
        "value": "04A6A6020A5480"
    }, {
        "name": "Ts",
        "value": "043197020A5480"
    }, {
        "name": "Js",
        "value": "044D70020A5480"
    }, {
        "name": "Qs",
        "value": "04D5B9020A5480"
    }, {
        "name": "Ks",
        "value": "041DB0020A5480"
    }, {
        "name": "1d",
        "value": "04B87C020A5480"
    }, {
        "name": "2d",
        "value": "047A8E020A5480"
    }, {
        "name": "3d",
        "value": "049EAC020A5480"
    }, {
        "name": "4d",
        "value": "049FAC020A5480"
    }, {
        "name": "5d",
        "value": "04AAAC020A5480"
    }, {
        "name": "6d",
        "value": "048195020A5480"
    }, {
        "name": "7d",
        "value": "04B6AC020A5480"
    }, {
        "name": "8d",
        "value": "04093C12E05381"
    }, {
        "name": "9d",
        "value": "04783C12E05380"
    }, {
        "name": "Td",
        "value": "04F3B5020A5480"
    }, {
        "name": "Jd",
        "value": "04F9B9020A5480"
    }, {
        "name": "Qd",
        "value": "04D6B9020A5480"
    }, {
        "name": "Kd",
        "value": "049CB1020A5480"
    }, {
        "name": "1c",
        "value": "0475B9020A5480"
    }, {
        "name": "2c",
        "value": "04B3A9020A5480"
    }, {
        "name": "3c",
        "value": "040E97020A5480"
    }, {
        "name": "4c",
        "value": "0472A6020A5480"
    }, {
        "name": "5c",
        "value": "047E97020A5480"
    }, {
        "name": "6c",
        "value": "040B8D020A5481"
    }, {
        "name": "7c",
        "value": "049AA9020A5480"
    }, {
        "name": "8c",
        "value": "040873020A5481"
    }, {
        "name": "9c",
        "value": "048EA9020A5480"
    }, {
        "name": "Tc",
        "value": "04288C020A5480"
    }, {
        "name": "Jc",
        "value": "044E70020A5480"
    }, {
        "name": "Qc",
        "value": "0481A3020A5481"
    }, {
        "name": "Kc",
        "value": "04BDB9020A5480"
    }, {
        "name": "1h",
        "value": "046E6E020A5481"
    }, {
        "name": "2h",
        "value": "046A4152E05380"
    }, {
        "name": "3h",
        "value": "043DB6020A5480"
    }, {
        "name": "4h",
        "value": "04EB6B020A5480"
    }, {
        "name": "5h",
        "value": "04754152E05380"
    }, {
        "name": "6h",
        "value": "04116B020A5481"
    }, {
        "name": "7h",
        "value": "042F8F020A5480"
    }, {
        "name": "8h",
        "value": "04449F020A5481"
    }, {
        "name": "9h",
        "value": "04459F020A5481"
    }, {
        "name": "Th",
        "value": "0400B5020A5481"
    }, {
        "name": "Jh",
        "value": "044170020A5480"
    }, {
        "name": "Qh",
        "value": "04E1B9020A5480"
    }, {
        "name": "Kh",
        "value": "0490B1020A5480"
    }, {
        "name": "Joker1",
        "value": "04C9B9020A5480"
    }, {
        "name": "Joker2",
        "value": "04E2B9020A5480"
    }];
}



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
        card = cards[i++];
        console.log("This was saved to " + card.name);
        var newCard = _.chain(stringArr).head().split(" ").join("").trim().value();
        card.value = newCard;
        console.log(newCard);
        string = "";
        if (i % 13 === 0) {
            console.log(JSON.stringify(cards));
        }
    }

});