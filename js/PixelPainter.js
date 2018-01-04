//Structure


let createDiv = document.createElement("div");
createDiv.setAttribute("class", "col");

document.getElementById("pixelPainter").appendChild(createDiv);

//Create grid
var pixelPainter = function(width, height) {


    
}

    function createGrid(width, height) {
        for (let i = 0; i < width; i++) {
            createDiv.setAttribute("class", "cell");
           // return "test";

            for (let j = 1; j < height; j++) {
                createDiv.setAttribute("class", "cell");
                console.log("test");
            }
        }
    }
    


//Create color grid
//two buttons
//
