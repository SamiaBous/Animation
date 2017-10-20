
var carre = document.getElementById("carre");

function changeColor() {
	carre.style.backgroundColor = "#7CFC00";
}

function backColorIni() {
	carre.style.backgroundColor = "#069";
}

function hideObject(){
	carre.style.display = "none";
}

function showObject(){
	carre.style.display = "block";
}

var height = 100;

function changeSize(){
	height += 10;
	if (height < 300) {
		carre.style.height = height + "px";
	}
 	
 	
	else if (height > 300) {
		carre.style.height = 100 + "px";
	}
}