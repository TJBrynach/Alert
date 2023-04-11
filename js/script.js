function populateModels() {
	var makeSelect = document.getElementById("app-team");
	var modelSelect = document.getElementById("impacted-app");
	modelSelect.innerHTML = "";

	var team = makeSelect.options[makeSelect.selectedIndex].value;
	if (team === "pretrade") {
		var app = ["D3", "DataMarket", "Guardian", "XC60", "XC90"];
	} else if (team === "executions") {
		var app = ["ProTrade", "SmartTrade"];
	} else if (team === "intraday") {
		var app = ["ActivePivot", "HedgeIT", "Fusion"];
	} else if (team === "eod") {
		var app = ["DataLake", "MSX", "Adobe Insight", "UTS", "Q5"];
	} else {
		var app = [];
	}

	for (var i = 0; i < app.length; i++) {
		var option = document.createElement("option");
		option.value = app[i];
		option.text = app[i];
		modelSelect.add(option);
	}
}

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

function bothScripts() {
	populateModels()
	saveTeam()
}

function printVariables() {
	console.log(priority.value);
	console.log(repeat.value);
	console.log(team.value);
	console.log(app.value);
	console.log(desc.value)
	console.log(bizimpact.value)
	console.log(users.value)
	console.log(update.value)
	output.innerHTML = "x = " + priority.value + "<br>y = " + desc.value + "<br>z = " + users.value;

}