"use strict";

module.exports = {
    "stringRange": stringRange
    
}

var con = "t'es un!"

function stringRange(a, b, sep = ", ") {

  let res = "";
  let i = a;

  while(i <b) {
    res += i + sep;
    i++;
  }

  res = res.substring(0, res.length - sep.length);
  return res;

}

console.log(stringRange(1, 10));
console.log(stringRange(1, 10, "-"));
