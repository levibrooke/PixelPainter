let storedColor;
let rowCount = 0;
let cellCount = 0;

// Add colors
let colors = ['#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

//Structure
let createDivOne = document.createElement("div");
createDivOne.setAttribute("id", "sidebar");
document.getElementById("pixelPainter").appendChild(createDivOne);

let createSwatch = document.createElement("div");
createSwatch.setAttribute("id", "swatch");
document.getElementById("sidebar").appendChild(createSwatch);

let createDivTwo = document.createElement("div");
createDivTwo.setAttribute("id", "main");
document.getElementById("pixelPainter").appendChild(createDivTwo);

let createCanvas = document.createElement("div");
createCanvas.setAttribute("id", "canvas");
document.getElementById("main").appendChild(createCanvas);

//Creating Button Structure
let buttonContainer = document.createElement("div");
buttonContainer.className = "buttonContainer";
document.getElementById("sidebar").appendChild(buttonContainer);

let eraser = document.createElement("button");
eraser.id = "eraser";
buttonContainer.appendChild(eraser);
eraser.innerText= "Erase";

let clear = document.createElement("button");
clear.id = "clear";
buttonContainer.appendChild(clear);
clear.innerText = "Clear";

// Create a grid
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

let colorPickerCells = document.querySelectorAll("#swatch .cell");

// Assign colors to the color picker
function addColors(arr){
  for(var i =0; i< arr.length; i++){
    arr[i].style.backgroundColor = colors[i];
  }
}
addColors(colorPickerCells);

// Assign event listener to the colorPicker
swatch.addEventListener('click', colorPicker);

function colorPicker(event) {
  
  // Take clicked color and assign to variable
  if(event.target.classList.contains("cell")){
    storedColor = event.target.style.backgroundColor;
    console.log(storedColor); 
  }
}

//Create grid
createGrid(6,6,"#canvas");

// Add event listeners to grid cells

canvas.addEventListener('mousedown', function() {
  canvas.addEventListener('mouseover', colorChanger);
});

canvas.addEventListener('mouseup', function() {
  canvas.removeEventListener('mouseover', colorChanger);
});

canvas.addEventListener('click', colorChanger);

function colorChanger(event) {
  
  if( event.target.classList.contains("cell") ){
    event.target.style.backgroundColor = storedColor;
    console.log("colorChanger");
  }
}

// Erase button: add event listener
eraser.addEventListener('click', function() {
  storedColor = "#FFF";
});

// Clear button: add event listener
let canvasCells = document.querySelectorAll("#canvas .cell");

clear.addEventListener('click', function(){
  
  for(var i = 0; i < canvasCells.length; i++){
    canvasCells[i].style.backgroundColor = "#FFF"; 
  }
  console.log("cleared!");
});

// Generate new colors (https://www.sitepoint.com/generating-random-color-values/)
// const generateColor = "rgb" + "(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";

let newColorArray = [];

function generateNewColors(num) {
  for (let i = 0; i < num; i++) {
    let generateColor = "rgb" + "(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";
    newColorArray.push(generateColor);
  }
}

function addNewColors(arr){
  for(var i =0; i< arr.length; i++){
    arr[i].style.backgroundColor = newColorArray[i];
  }
}

// Create button
let addColorButton = document.createElement("button");
addColorButton.id = "addColors";
buttonContainer.appendChild(addColorButton);
addColorButton.innerHTML = "Add Two Colors";

// Event listener
addColorButton.addEventListener("click", twoNewColors);

function twoNewColors() {
  createGrid(1, 2, "#swatch");
  let newColorPickerCells = document.querySelectorAll("#row" + rowCount + " .cell");
  console.log(newColorPickerCells);
  generateNewColors(2);
  addNewColors(newColorPickerCells);

  addColorButton.removeEventListener("click", twoNewColors);
  addColorButton.style.textDecoration = "line-through";
}



