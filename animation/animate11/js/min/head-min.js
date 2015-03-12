var speed = 1000;

var s = Snap('#fullpage'); 
    
var fullhead = this.s.select("#full_head");



function firstAnimation() {
  fullhead.animate( {transform: 'r20,843,450'},1000, mina.ease, secondAnimation);
}

function secondAnimation() {
  fullhead.animate( {transform: 'r-20,843,450'},1000, mina.ease, firstAnimation);
}
  
fullhead.mouseover(firstAnimation);






