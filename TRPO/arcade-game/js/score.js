/* score.js - for all methods that handle generating the scoreboard */

const HTML_TABLE_HEAD = '<thead><tr><th>Player</th><th>Score</th></tr></thead>';

let allScores;


// Initialize the scores variable and initialize the local storage if it doesnt exist
if (window.localStorage.getItem('scores')){
	// set scores to saved scores if they exist
	allScores = JSON.parse(window.localStorage.scores);
} else {
	// if there isnt any localstorage scores, create it
	clearScores();
}


// Wait to display high score list until the page has loaded
document.addEventListener("DOMContentLoaded", function() {
	displayScores(allScores);
});


function displayScores(scores){
	/* displayScores() - Adds data from given array into the html table */

	// 1) Sort the scores
	sortScores(scores, 'score');

	// 2) Get the table's DOM element
	let tableElement = document.getElementById('scoreTable');

	// 3) Generate a string for the table's inner HTML
	let html = HTML_TABLE_HEAD; // head
	scores.forEach((scoreObj) => {
		// Adding a row for each item in the array
		html += `<tr><td>${scoreObj.name}</td><td>${scoreObj.score}</td></tr>`; // row
	});

	// 4) Append the generated content to the DOM
	tableElement.innerHTML = html;
}


function sortScores(scoresArr, sortBy){
	/* sortScores() - sorts scoresArr by the given sortBy argument */
	return scoresArr.sort((a, b) => {

		if (a[sortBy] < b[sortBy]){
			return 1;

		} else if (a[sortBy] > b[sortBy]){
			return -1;
			
		} else {
			return 0;
		}
	});
}


function clearScores(){
	/* clearScores() - resets the scores array variable and clears the local storage */
	allScores = [
		{
			name: 'Dima',
			score: 100,
			id: 0
		}
	];
	// convert to json string becuase localStorage only accepts stirngs
	window.localStorage.setItem('scores', JSON.stringify(allScores));
	displayScores(allScores);
}