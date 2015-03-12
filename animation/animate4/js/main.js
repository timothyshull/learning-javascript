var s = Snap(1440, 720);


// Snap.load("background.svg", function (f) {
//
//     // f.select("#Welcome").attr({fill: "#bada55"});
//     var g = f.select("#Welcome");
//     s.append(g);
//
//     g.drag();
// });
//
Snap.load("img/cloud1.svg", function (cloud) {

    // f.select("#Welcome").attr({fill: "#bada55"});
    var cloudImg = cloud.select("#cloud1Main");
    s.append(cloudImg);
    //
    // cloudImg.animate({r: 50}, 1000);
});


// var otherRect = s.rect(200,200,50,50,10,10).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'green' });
// var otherRect = s.rect(200,200,50,50,10,10).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'green', transform: "" });
var cloudImg2 = s.select("#cloud1Main");

window.addEventListener("load", function() {
    cloudImg2.animate({ transform: "translate(30) rotate(45 50 50)" }, 5000);
});




