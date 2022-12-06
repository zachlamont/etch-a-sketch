const container = document.querySelector("#grid-container");
const pixels = document.querySelectorAll(".pixels");
const mouseInfo = document.getElementById("mouse-info");
const rangeInput = document.getElementById("resolution");
const colorPicker = document.getElementById("color-picker");

function drawGrid(gridSize) {
  for (i = 0; i < gridSize ** 2; i++) {
    //number of pixels needed to fill a square grid
    let pixel = document.createElement("div");
    pixel.classList.add("pixels"); // assign a class to each pixel element

    pixel.style.width = (1 / gridSize) * 100 + "%"; //sets the size of each pixel as a fraction of the grid size
    pixel.style.height = (1 / gridSize) * 100 + "%";

    pixel.addEventListener("mouseover", (event) => {
      if (mouseDown == 1) {
        var pickedColor = document.getElementById("color-picker").value;

        event.target.style.backgroundColor = pickedColor; //colour the pixel
      }
    });

    container.appendChild(pixel); //Add the pixel to the DOM
  }
}

drawGrid(32); //Draw the grid of reponsive pixels

rangeInput.addEventListener("mouseup", (event) => {
  // When you release the slider
  const pixels = document.querySelectorAll(".pixels");

  pixels.forEach((pixel) => {
    pixel.remove(); //Erase the grid
  });
  drawGrid(event.target.value); //Redraw grid with specified size
});

let mouseDown = 0;

document.body.onmousedown = function () {
  mouseDown = 1;
  //mouseInfo.textContent = "Mouse is Down!";
};
document.body.onmouseup = function () {
  mouseDown = 0;
  //mouseInfo.textContent = "Mouse is Up!";
};
