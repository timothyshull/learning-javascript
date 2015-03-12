var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: { name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
  ranger3: { name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: { name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};

function relieveDuty(vehicle, day) {
	vehicle.onDuty = [];
	vehicle.offDuty = [];
	for (var i = 0; i < vehicle.numRangers; i++) {
		var rngr = vehicle["ranger" + (i+1)];
		console.log(rngr);
		if (rngr.dayOff == day){
			vehicle.offDuty.push(rngr);
			delete vehicle["ranger" + (i+1)];
		}
		else {
			vehicle.onDuty.push(rngr);
			delete vehicle["ranger" + (i+1)];
		}
	}
  vehicle.numRangers = vehicle.onDuty.length;
	for (var j = 0; j<vehicle.numRangers; j++){
		vehicle["ranger" + String(j+1)] = vehicle.onDuty[j];
	}
  return vehicle.offDuty;
}
var offToday = relieveDuty(vehicle3, "Friday");
console.log(offToday[0]);
console.log(offToday[1]);
