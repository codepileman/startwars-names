var uniqueRandomArray = require('unique-random-array');
var starWarNames = require('./starwars-names.json');
var getRandomItem = uniqueRandomArray(starWarNames);

module.exports = {
    all:starWarNames,
    random:random

};

function random(number){
    if (number === undefined){
        return getRandomItem();
    } else{
        var randomItems = [];
        for (var i=1;i<number;i++){
            randomItems.push(getRandomItem());
        }

        return randomItems;
    }
    
}