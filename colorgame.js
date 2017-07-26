var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton = document.querySelector("#reset");
colorDisplay.textContent = pickedColor;
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
	for(var i=0; i<modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares =3: numSquares =6;
			reset();
		});
	}

	for (var i = 0; i < squares.length; i++){
		//add initial color to squares
		squares[i].style.backgroundColor = colors[i];

		//add event listener to squares
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
			 messageDisplay.textContent = "Correct!";
			 changeColors(clickedColor);
			 h1.style.backgroundColor = clickedColor;
			 resetButton.textContent = "Play Again?";
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!";
			}
		});
	}

	reset();
}


function reset(){
	resetButton.textContent = "New Colors"
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		//add initial color to squares
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

function changeColors(color){
	//Loop through the squares and assign the clicked color
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make and array
	var arr = [];
	// add num of random colors to arrays
	for(var i = 0; i< num; i++){
		//get random colors and then push into arr
		arr[i] = randomColor();
	}
	//return array
	return arr;
}

function randomColor(){
	// pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// picj a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb("+ r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function(){
	reset();
});