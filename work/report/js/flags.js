"use strict";

var moldova = document.getElementById('mold_link');
var france = document.getElementById('franc_link');
var sweden = document.getElementById('swed_link');

var flag_body = document.getElementById('translucent');

moldova.addEventListener("click", function(){
  console.log("moldova runs");
  flag_body.id = "moldova";
});

france.addEventListener("click", function(){
  console.log("france runs");
  flag_body.id = "france";
});

sweden.addEventListener("click", function(){
  console.log("sweden runs");
  flag_body.id = "sweden";
});
