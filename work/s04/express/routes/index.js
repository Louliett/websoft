"use strict"

var express = require('express');
var router = express.Router();

//adding a route for a path
router.get('/', (req, res) => {
  res.send("Hello fellas!");
});

router.get('/about', (req, res) => {
  res.send("About fellas!");
});

module.exports = router;
