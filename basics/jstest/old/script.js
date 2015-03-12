function showTemps() {
  var tempByHour = new Array();
  tempByHour[0] = 59.2;
  tempByHour[1] = 59.6;
  tempByHour[2] = 59.26;
  tempByHour[3] = 50.2;
  tempByHour[4] = 9.2;
  for (var i = 0; i < 5; i++) {
    var theTemp = tempByHour[i];
    var id = "temp" + i;
    var li = document.getElementById(id);
    li.innerHTML = "The temperature at " + i + " was " + theTemp;
  }
}