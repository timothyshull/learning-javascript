function distanceOf(x, y) {
	var sumSqr = [(x^2) + (y^2)];
	console.log(Math.pow(x, 2));
	console.log(Math.pow(y, 2));
	console.log(sumSqr);
  var distance = Math.sqrt(sumSqr);
  return distance;
};

console.log(Math.sqrt(25));
console.log(distanceOf(3, 4));