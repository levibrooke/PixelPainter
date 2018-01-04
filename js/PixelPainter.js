//Structure


let createDivOne = document.createElement("div");
createDivOne.setAttribute("id", "col-3");
document.getElementById("pixelPainter").appendChild(createDivOne);

let createDivTwo = document.createElement("div");
createDivTwo.setAttribute("id", "col-7");
document.getElementById("pixelPainter").appendChild(createDivTwo);

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
createGrid(2,2,"#col-3");

// Add colors
let colors = ['#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

// Add event listener to each cell in the color picker
let colorPickerCells = document.querySelectorAll("#col-3 .cell");

function colorPickerListener(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", colorPicker);
    arr[i].style.backgroundColor = colors[i];
  }
}
colorPickerListener(colorPickerCells);

let storedColor;

function colorPicker() {
  // Take clicked color and assign to variable
  storedColor = this.style.backgroundColor;
  console.log(storedColor); 
}

//Create grid
createGrid(6,6,"#col-7");

// function pixelPainter(width, height, parent) {

// }

// Add event listener to grid cells
let canvasCells = document.querySelectorAll("#col-7 .cell");

function canvasListener(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", colorChanger);
  }
}

canvasListener(canvasCells);

function colorChanger() {
  this.style.backgroundColor = storedColor;
  console.log("colorChanger");
}