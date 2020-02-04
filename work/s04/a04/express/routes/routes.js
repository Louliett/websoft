"use strict"

var express = require('express');
var router = express.Router();

//grade 3 by using EJS
router.get('/lotto', (req, res) => {
  let lotto_num = {};
  lotto_num.lotto_number = [];

  for (var i = 0; i < 5; i++) {
    lotto_num.lotto_number.push(getRandomIntInclusive(1, 35));
  }

  res.render("lotto_view", lotto_num);
});

//grade 4 by using JSON
router.get('/lotto-json', (req, res) => {
  var lotto_num = [];

  for (var i = 0; i < 5; i++) {
    lotto_num.push(getRandomIntInclusive(1, 35));
  }

  var lottoJason = JSON.stringify(lotto_num);

  res.send("The lotto numbers are: " + lottoJason + "<p>" + "duo" + "</p>");
});



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = router;
