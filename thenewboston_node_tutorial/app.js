'use strict';

//importing module:
var movies = require('./movies');
var foods = require('./foods');

function placeAnOrder(orderNumber) {
    console.log("costumer order: ", orderNumber);
    cookAndDeliverFood(function () {
        console.log("delivered food order", orderNumber);
    });
}
//simulate a 5 second operation
function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);

//this will happen before the callback from cookAndDeliverFood
movies.avatar();

foods.printFavorite();
foods.printIngredients();