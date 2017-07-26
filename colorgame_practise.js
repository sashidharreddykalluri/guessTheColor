var colors = generateRandomColors(6);

var pickedColor = colors[3] ;
var squares = document.querySelectorAll(".square");
var displayRGB = document.querySelector("#displayRGB");

displayRGB.textContent = pickedColor;

for(var i =0; i< squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		if (this.style.backgroundColor === pickedColor) {
			alert("correct");
		}else{
			alert("wrong");
		}
	});
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr[i] = getRandomColor();
	}
	return arr;
}

function getRandomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}