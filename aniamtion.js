var fontSize = 20;
var birgit = document.getElementById("birgit");

function zoomIn() {
	fontSize += 10;
	birgit.style.fontSize = fontSize + "px";
}
 
function zoomOut() {
	fontSize -= 10;
	birgit.style.fontSize = fontSize + "px";
}
