function genNum() {
  return Math.floor((Math.random() * 10) + 1);
}

var tail = this.s.select('#tailpath');

var cloud1 = this.s.select('#cloud1');

var cloud2 = this.s.select('#cloud2');

var cloud3 = this.s.select('#cloud3');

var ranNum = function genNum() {
  return Math.floor((Math.random() * 100) - 49);
};

function cloudMove(cloud) {
  cloud.animate({transform: 't'+ranNum()+','+ranNum()}, 1000, mina.ease);
}

function thirdAnimation() {
  cloudMove(cloud1);
  cloudMove(cloud2);
  cloudMove(cloud3);
  fourthAnimation;
}

function fourthAnimation() {
  cloudMove(cloud1);
  cloudMove(cloud2);
  cloudMove(cloud3);
  thirdAnimation;
}

thirdAnimation();


