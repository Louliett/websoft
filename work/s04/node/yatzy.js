"use strict"

let Dice = require("./dice.js");

let hand = [];

for(let i=0; i<5; i++) {
  hand[i] = new Dice();
  hand[i].roll();
}

console.info("the dice u rolled: ");

console.info(hand);

console.info(hand.join());
