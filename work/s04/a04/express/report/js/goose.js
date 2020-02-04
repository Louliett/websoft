"use strict";

(function() {

  var goose = document.getElementById('goose');
  // goose.src = "img/goose.png";
  goose.height = 80;
  goose.width = 128;

  var gooseWidth = goose.width;
  var gooseHeight = goose.height;

  var area = document.body;
  var areaHeight = window.innerHeight;
  var areaWidth = window.innerWidth;


  goose.addEventListener("click", function(){
    //make the goose honk randomly
    honk(getRandomIntInclusive(1,4));
  });

  deployGoose(goose, areaWidth, areaHeight, gooseWidth, gooseHeight);


})();

function honk(num) {
  var honk = new Audio();

  if(num == 1) {
    honk.src = "/work/report/sounds/honk1.mp4";
    honk.play();
  } if(num == 2) {
    honk.src = "/work/report/sounds/honk2.mp4";
    honk.play();
  } if(num == 3) {
    honk.src = "/work/report/sounds/honk3.mp4";
    honk.play();
  } if(num == 4) {
    honk.src = "/work/report/sounds/honk4.mp4";
    honk.play();
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function deployGoose(goose, areaWidth, areaHeight, gooseWidth, gooseHeight) {
  console.log("area width: " + areaWidth);
  console.log("area height: " + areaHeight);
  console.log("goose width: " + gooseWidth);
  console.log("goose height: " + gooseHeight);

  var posX = getRandomIntInclusive(0+gooseWidth, areaWidth-gooseWidth);
  var posY = getRandomIntInclusive(0+gooseHeight, areaHeight-gooseHeight);

  console.log("posX: " + posX);
  console.log("posY: " + posY);
  goose.style.left = posX + "px";
  goose.style.top = posY + "px";
  console.log("goose deployed");
}
