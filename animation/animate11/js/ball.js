
//http://www.algosome.com/articles/drawing-javascript-graphics-svg.html
var h = Snap('#fullpage');

var gravity = 0.5;
var dX = 1.5;
var dY = 0;
var width = h.getBBox().width;
var height = h.getBBox().height;
var radius = 15;
var x = radius;
var y = radius;
var dragY = 0.035;
var dragX = 0.001;
var time = 0;
// var ball = document.getElementById('ball');

var ball = h.select("#ball");

function bounceBall() {
  if (x + radius + dX > width || x - radius + dX < 0) {
    dX = -dX;
  }
  if (y + radius + dY > height || y - radius + dY <= 0) {
    dY = -dY;
    //alert(y);
  }
  x = x + dX;
  y = y + dY;
//   console.log(x + " " + y);
  dY += gravity;
  ball.mouseover(function() {
    return y = 0;
  });
  // ball.setAttribute("cx", x);
  // ball.setAttribute("cy", y);
  ball.animate({cx: x, cy: y}, 16, mina.ease);
  dY = dY > 0 ? dY -= dragY : dY += dragY;
  dX = dX > 0 ? dX -= dragX : dX += dragX;
  time += 16;
  if (time > 50000) {
    reset();
  }
}

function reset() {
  dX = 1.5;
  dY = 0;
  x = radius;
  y = radius;
  time = 0;
  ball.setAttribute("cx", x);
  ball.setAttribute("cy", y);
}

var interval = window.setInterval(bounceBall, 42);


//http://www.algosome.com/articles/drawing-javascript-graphics-svg.html
// var gravity = 0.25;
// var dX = 1.5;
// var dY = 0;
// var width = 1440;
// var height = 720;
// var radius = 15;
// var x = radius;
// var y = radius;
// var dragY = 0.035;
// var dragX = 0.001;
// var time = 0;
//
// function bounceBall() {
//   var ball = document.getElementById('ball');
//   if (x + radius + dX > width || x - radius + dX < 0) {
//     dX = -dX;
//   }
//   if (y + radius + dY > height || y - radius + dY <= 0) {
//     dY = -dY;
//     //alert(y);
//   }
//   x = x + dX;
//   y = y + dY;
//   dY += gravity;
//   ball.setAttribute("cx", x);
//   ball.setAttribute("cy", y);
//   dY = dY > 0 ? dY -= dragY : dY += dragY;
//   dX = dX > 0 ? dX -= dragX : dX += dragX;
//   time += 16;
//   if (time > 100000) {
//     reset();
//   }
// }
//
// function reset() {
//   dX = 1.5;
//   dY = 0;
//   x = radius;
//   y = radius;
//   time = 0;
//   ball.setAttribute("cx", x);
//   ball.setAttribute("cy", y);
// }
//
// var interval = window.setInterval(bounceBall, 16);
