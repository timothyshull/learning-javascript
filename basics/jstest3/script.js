	function init() {
	function phraseGen() {
		var words1 = ["flowing", "photo", "silver", "journalist", "mirror", "finishes"];
		var words2 = ["norm", "raised", "dog", "talks", "existing", "magic"];
		var words3 = ["crowds", "weapon", "acceptance", "standardizes", "helpful", "glow"];
	
		var rand1 = Math.floor(Math.random() * words1.length);
		var rand2 = Math.floor(Math.random() * words2.length);
		var rand3 = Math.floor(Math.random() * words3.length);
	
		var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
	
		var phraseElement = document.getElementById("phrase");
		phraseElement.innerHTML = phrase;		
	}
	window.onclick = phraseGen;
}
window.onload = init;