//Structure


let createDiv = document.createElement("div");
createDiv.setAttribute("class", "col");

document.getElementById("pixelPainter").appendChild(createDiv);

//Create grid
var pixelPainter = function(width, height) {

}

// Create a grid
function createGrid(row, column, parent) {

  let cellCount = 0;

  for (let i = 0; i < row; i++) {

    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "row" + [i]);
    document.querySelector(parent).appendChild(row);
      
      for (let j = 0; j < column; j++) {

        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cellCount++;
        cell.setAttribute("id", "cell" + cellCount);
        document.querySelector("#row" + [i]).appendChild(cell);
      }
    }
}

// Create Color Picker Grid 2x2
createGrid(2,2,".col");

// Add colors
let colors = ['#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

// Add event listener to each cell in the color picker
let colorPickerCells = document.querySelectorAll(".col .cell");

function colorPickerListener(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", thisFunction);
    arr[i].style.backgroundColor = colors[i];
  }
}
colorPickerListener(colorPickerCells);

function thisFunction() {
  // Take clicked color and assign to variable
  let storedColor = this.style.backgroundColor;
  console.log(storedColor); 
}
