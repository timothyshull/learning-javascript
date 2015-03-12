function warningMaker( obstacle ){
	var count = 0;
	var zones = [];
	return function ( number, location ) {
		count++;
		zones.push(location);
		function arrayNewLine(array1){
			var str = "";
			for (var i = 0; i<array1.length; i++){
				str = str + array1[i] + "\n";
			}
			return str;
		}
		var zonesList = arrayNewLine(zones);
		console.log("Beware! There have been " +
		obstacle +
		" sightings in the Cove today!\n" +
		number +
		" " +
		obstacle +
		"(s) spotted at the " +
		location +
		"!\n" +
		"This is Alert #" +
		count +
		" today for " +
		obstacle +
		" danger.\nCurrent danger zones are:\n" + zonesList
	);
};
}

var testWarn = warningMaker("iceberg");

testWarn(2, "Blizzard Beach");
testWarn(2, "Ice Caves");
testWarn(2, "Rocky Cliffs");
