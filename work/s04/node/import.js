"use strict"

let utils = require("./stringRange1.js");
let res;

res = utils.stringRange(1, 10);
console.info(res);


res = utils.stringRange(1, 10, " - ");
console.info(res);

console.log("what does it consist of?");
console.log(utils);
