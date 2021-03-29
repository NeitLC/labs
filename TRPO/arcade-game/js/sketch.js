// Initialize objets
let gameState;


// Initialize image variables
let basicPlayerImg;
let basicEnemyImg;
let redLaserImg;
let deathImg;


 function preload(){
// Load sprite image
	basicPlayerImg = loadImage('assets/images/ship-std.png');
	basicEnemyImg = loadImage('assets/images/enemy-std.png');
	redLaserImg = loadImage('assets/images/red-laser.png');
	deathImg = loadImage('assets/images/expl-3.png');
 }

function setup(){
	console.log('Running setup()');
	noCursor();

	// Create canvas and append to document
	let canvas = createCanvas(350,465);
	canvas.parent(document.getElementById('canvas-container'));

	// Setup the game state (lives, level#, enemy patterns, score, etc)
	// GameState class imported from GameState.js
	gameState = new GameState(3); // Init with 3 lives

	// Start at level 0
	gameState.startLevel(0);

	noLoop(); // pause until loop() is run in startGame()

}

function draw(){
	background(0); // black

	gameState.automation(); // handles enemy movement and displaying score/lives
	gameState.playerInputs(); // handles keyborad inputs
	gameState.collisions();	// Handles all things that have to do with collision

	drawSprites(); // draws all sprites to canvas (p5.play.js)
}


function startGame(){
	/* startGame() - executed when the START button is pressed */
	document.getElementById('start').style.display = 'none';  // HIDE the form 
	document.getElementById('canvas-container').style.display = 'block';  // and SHOW the canvas
	document.getElementById('bottom-instructions').style.display = 'flex';

	// Add the new player to the score list
	let userName = document.getElementById('nameInput').value;

	allScores.push({name: userName, score: 0, id: allScores.length});  // allScores is initialized in score.js

	// Start the canvas loop
	loop();
}

function resetGameState(){
	// impliment reset button
	allSprites.forEach((sprite) => {
		//console.log(sprite);
		removeSprite(sprite);
	});
	gameState = new GameState(3);
	gameState.startLevel(0);

}

// prevent space from scrolling the page
window.onkeydown = (e) => {
	if (e.keyCode == 32){
		e.preventDefault();
	}
};
