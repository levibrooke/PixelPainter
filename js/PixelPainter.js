//Structure


let createDiv = document.createElement("div");
createDiv.setAttribute("class", "col");

document.getElementById("pixelPainter").appendChild(createDiv);

//Create grid
var pixelPainter = function(width, height) {

}

// Create a grid

function createGrid(row, column) {
    
  

  
  for (let i = 0; i < row; i++) {

    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "row" + [i]);
    document.querySelector(".col").appendChild(row);
      
      for (let j = 0; j < column; j++) {

        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        document.querySelector("#row" + [i]).appendChild(cell);
      }
    }
}
