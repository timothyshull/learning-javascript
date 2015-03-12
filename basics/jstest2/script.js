function init(){
function winClick(){
	var planet = document.getElementById("greenplanet");
	var content = "Red Alert: hit by phaser fire!";
	planet.innerHTML = content;
};
window.onclick = winClick;
}
window.onload = init();