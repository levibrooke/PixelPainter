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

// Create Color Picker Grid
createGrid(2,2,".col");

// Color Picker 

// Add event listener 
var colorPickerCells = document.querySelectorAll(".col .cell");

function colorPickerListener(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", thisFunction);
  }
}
colorPickerListener(colorPickerCells);

// for (i = 0; i < colorPickerCells.length; i++) {
//   colorPickerCells[i].addEventListener("click", thisFunction);
// }

function thisFunction() {
  console.log("Successful event listener!")
}
