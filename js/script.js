function savePriority() {
	// Get the value of the selected color
	var priority = document.getElementById("priority").value;
	// Get the value of the selected number
	// var number = document.getElementById("number").value;
	// Save the variables
	localStorage.setItem("favoriteColor", priority);
	// localStorage.setItem("favoriteNumber", number);
	alert("Variable priority saved!");
	console.log(priority)
	// console.log(number)
}

function saveRepeat() {
	// Get the value of the selected color
	var repeat = document.getElementById("repeat").value;
	// Get the value of the selected number
	// var number = document.getElementById("number").value;
	// Save the variables
	localStorage.setItem("favoriteColor", repeat);
	// localStorage.setItem("favoriteNumber", number);
	alert("Variable repeat saved!");
	console.log(repeat)
	// console.log(number)
}

