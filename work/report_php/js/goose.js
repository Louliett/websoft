"use strict";

(function() {

  var goose = document.getElementById('goose');
  var gooseWidth = goose.width = 128;
  var gooseHeight = goose.height = 80;

  var area = document.body;
  var areaHeight = window.innerHeight;
  var areaWidth = window.innerWidth;

  var posX = getRandomIntInclusive(0+gooseWidth, areaWidth-gooseWidth);
  var posY = getRandomIntInclusive(0+gooseHeight, areaHeight-gooseHeight);
  var move = 0;

  //deploying the goose randomly
  goose.style.left = posX + "px";
  goose.style.top = posY + "px";
  console.log("goose deployed");

  goose.addEventListener("click", function(){
    //make the goose honk randomly on click
    honk(getRandomIntInclusive(1,4));
  });


  //init();

  function init() {
    setInterval(draw, 10);
  }

  function draw() {

    if(posX > areaWidth - gooseWidth && move === 0) {
      //if it goes too much right
      move = getRandomWithExclusion(0, 3, 0);
      console.log("right move = " + move);
    }
    else if(posY > areaHeight - gooseHeight && move === 3) {
      //if it goes too much down
      move = getRandomWithExclusion(0, 3, 3);
      console.log("down move = " + move);
    }
    else if(posX < 0  && move === 1) {
      //if it goes too much left
      move = getRandomWithExclusion(0, 3, 1);
      console.log("left move = " + move);
    }
    else if(posY < 0 && move === 2) {
      //if it goes too much up
      move = getRandomWithExclusion(0, 3, 2);
      console.log("up move = " + move);
    }

    //console.log("Xpos=" + posX);
    //console.log("Ypos=" + posY);
    console.log("but move is: " + move);

    switch (move) {
      case 0:
        //move right
        posX++;
        goose.style.left = posX + 'px';
        break;
      case 1:
        //move left
        posX--;
        goose.style.left = posX + 'px';
        break;
      case 2:
        //move up
        posY--;
        goose.style.top = posY + 'px';
        break;
      case 3:
        //move down
        posY++;
        goose.style.top = posY + 'px';
        break;
    }

  }


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

function getRandomWithExclusion(min, max, ex) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  if(random == ex) {
    return getRandomWithExclusion(min, max, ex);
  } else {
    return random;
  }
}
