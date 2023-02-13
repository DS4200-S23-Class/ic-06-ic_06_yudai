// function that changes adds red element
function submitRedClicked() {
	// grab id for the line, horizon
	let horiLine = document.getElementById("horizon");

	horiLine.classList.add("addRed");
}


function submitGreenClicked() {
	// grab id for the circle, top right
	let topCir = document.getElementById("top right");

	topCir.classList.add("addRed");
}

document.getElementById("sumitButton").addEventListener("click", submitRedClicked);

document.getElementById("sumitButton").addEventListener("click", submitRedClicked);