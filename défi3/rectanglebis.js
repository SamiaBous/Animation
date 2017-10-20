var birgit = document.getElementById("carre")


function moveTop() {
	birgit.style.position = "absolute";
	birgit.style.top = "100px"; 
}

function moveBack() {
	birgit.style.position = "absolute";
	birgit.style.bottom = "100px";
}

function move() {

	var go = moveTop();
	var back = moveBack();
	
}

document.addEventListener("keydown", function(e) {
	
	if (e.keyCode == "38") {
		 move();
	}

})


