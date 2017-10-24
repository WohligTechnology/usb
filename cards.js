console.log("Generating Cards Array");
var _ = require("lodash");
// var cards = [];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
var colors = ["s", "d", "c", "h", ];
_.each(colors, function (color) {
    _.each(numbers, function (number) {
        cards.push({
            name: number + "" + color,
            value: number + "" + color
        });
    });
});



console.log(JSON.stringify(cards));