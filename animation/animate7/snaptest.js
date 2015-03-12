var s = Snap("#svgout");

var cloud1 = Snap("#cloud1");
var cloud2 = Snap("#cloud2");
var cloud3 = Snap("#cloud3");

var t = new Snap.Matrix(); 
t.translate(500, 500); 
cloud3.transform(t);

cloud1.animate({ transform: 't50,50,r360' }, 5000);
cloud2.animate({ transform: 't200,0' }, 3000, mina.bounce);

// function() { cloud2.animate({ transform: 't0,0' }, 3000, mina.bounce)  } 