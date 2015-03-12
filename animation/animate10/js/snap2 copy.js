// $("#cloud1").velocity({
//   /* Coordinate animation works. */
//   x: 200,
//   r: 25,
//   /* 2D transforms work. */
//   translateX: "200px",
//   /* 3D transforms work in non-IE browsers. */
//   translateZ: "200px",
//   /* "Fill" color animation works. */
//   fill: "#ff0000",
//   strokeRed: 255,
//   strokeGreen: 0,
//   strokeBlue: 0,
//   /* Some standard CSS properties work. */
//   opacity: 1,
//   width: "50%"
// }, {
//   loop: true
// });

// $("#tail").velocity({rotateZ:5});

// $("#tail").velocity({attributeName:"transform", type:"rotate", from:"0 985 472", to:"25 985 472", dur:".5", repeatCount:"indefinite"});

//http://www.algosome.com/articles/drawing-javascript-graphics-svg.html
var gravity = 0.25;
var dX = 1.5;
var dY = 0;
var width = 1440;
var height = 720;
var radius = 15;
var x = radius;
var y = radius;
var dragY = 0.035;
var dragX = 0.001;
var time = 0;

function bounceBall() {
  var ball = document.getElementById('ball');
  if (x + radius + dX > width || x - radius + dX < 0) {
    dX = -dX;
  }
  if (y + radius + dY > height || y - radius + dY <= 0) {
    dY = -dY;
    //alert(y);
  }
  x = x + dX;
  y = y + dY;
  dY += gravity;
  ball.setAttribute("cx", x);
  ball.setAttribute("cy", y);
  dY = dY > 0 ? dY -= dragY : dY += dragY;
  dX = dX > 0 ? dX -= dragX : dX += dragX;
  time += 16;
  if (time > 100000) {
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

var interval = window.setInterval(bounceBall, 16);

var speed = 1000;

var s = Snap('.js-lamp' ); 
    
var head = this.s.select('.js-lamp-head');