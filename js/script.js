function savePriority() {
	var priority = document.getElementById("priority").value;

	// Save the variables
	localStorage.setItem("priority", priority);

	console.log(priority)
}

function saveRepeat() {
	var repeat = document.getElementById("repeat").value;

	// Save the variables
	localStorage.setItem("repeat", repeat);

	console.log(repeat)
}

function saveTeam() {
	var team = document.getElementById("app-team").value;

	// Save the variables
	localStorage.setItem("app-team", team);

	console.log(team)
}

function saveApp() {
	var app = document.getElementById("impacted-app").value;

	// Save the variables
	localStorage.setItem("impacted-app", app);

	console.log(app)
}

function printVariables() {

	console.log(priority); // prints 10
	console.log(repeat); // prints "hello"
	// console.log(team); // prints true
	//console.log(app); // prints true
	console.log(desc)
}