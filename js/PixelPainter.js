//Structure
let createDivOne = document.createElement("div");
createDivOne.setAttribute("id", "col-3");
document.getElementById("pixelPainter").appendChild(createDivOne);

let createSwatch = document.createElement("div");
createSwatch.setAttribute("id", "swatch");
document.getElementById("col-3").appendChild(createSwatch);

let createDivTwo = document.createElement("div");
createDivTwo.setAttribute("id", "col-7");
document.getElementById("pixelPainter").appendChild(createDivTwo);

let createCanvas = document.createElement("div");
createCanvas.setAttribute("id", "canvas");
document.getElementById("col-7").appendChild(createCanvas);

//Creating Button Structure
let buttonContainer = document.createElement("div");
buttonContainer.className = "buttonContainer";
document.getElementById("col-3").appendChild(buttonContainer);

let eraser = document.createElement("button");
eraser.id = "eraser";
buttonContainer.appendChild(eraser);
eraser.innerText= "Erase";

let clear = document.createElement("button");
clear.id = "clear";
buttonContainer.appendChild(clear);
clear.innerText = "Clear";

// Create a grid
let rowCount = 0;
let cellCount = 0;

function createGrid(row, column, parent) {

  for (let i = 0; i < row; i++) {

    let createRow = document.createElement("div");
    createRow.setAttribute("class", "row");
    rowCount++;
    createRow.setAttribute("id", "row" + rowCount);
    document.querySelector(parent).appendChild(createRow);
      
      for (let j = 0; j < column; j++) {

        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cellCount++;
        cell.setAttribute("id", "cell" + cellCount);
        document.querySelector("#row" + rowCount).appendChild(cell);
      }
    }
}

// Create Color Picker Grid 2x2
createGrid(2,2,"#swatch");

// Add colors
let colors = ['#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

// Assign colors to the color picker
let colorPickerCells = document.querySelectorAll("#swatch .cell");

function addColors(arr){

  for(var i =0; i< arr.length; i++){
    arr[i].style.backgroundColor = colors[i];
  }
}
addColors(colorPickerCells);

// Assign event listener to the colorPicker
swatch.addEventListener('click', colorPicker);


let storedColor;

function colorPicker(event) {
  // Take clicked color and assign to variable

  if(event.target.classList.contains("cell")){
    storedColor = event.target.style.backgroundColor;
    console.log(storedColor); 
  }
}

//Create grid
createGrid(6,6,"#canvas");

// Add event listener to grid cells
canvas.addEventListener('click', colorChanger);


function colorChanger(event) {
  
  if( event.target.classList.contains("cell") ){
    event.target.style.backgroundColor = storedColor;
    console.log("colorChanger");
  }
}

// Button: add event listener to erase button

eraser.addEventListener('click', function() {
  storedColor = "#FFF";
});

let canvasCells = document.querySelectorAll("#canvas .cell");

clear.addEventListener('click', function(){

  for(var i = 0; i < canvasCells.length; i++){
    canvasCells[i].style.backgroundColor = "#FFF"; 
  }
  
  console.log("cleared!");

});



