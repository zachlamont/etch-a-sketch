let gridSize = 16;

const container = document.querySelector("#grid-container"); // assign container div to a variable
const pixels = document.querySelectorAll(".pixels");
const mouseInfo = document.getElementById("mouse-info");
const rangeInput = document.getElementById("resolution");
const colorPicker = document.getElementById("color-picker");

function LightenDarkenColor(col, amt) {
  col = parseInt(col, 16);
  return (
    ((col & 0x0000ff) + amt) |
    ((((col >> 8) & 0x00ff) + amt) << 8) |
    (((col >> 16) + amt) << 16)
  ).toString(16);
}
// TEST
//console.log( LightenDarkenColor("3F6D2A",40) );

function drawGrid(gridSize) {
  for (i = 0; i < gridSize ** 2; i++) {
    let pixel = document.createElement("div"); // define a new div element with js called 'content'
    pixel.classList.add("pixels"); // assign a class to our new element 'content'

    /* 
        pixel.textContent = "This is the glorious text-content!"; //add some text to our new 'content' element
        
        pixel.setAttribute(
          "style",
          "width: 20px; height: 20px; background-color: hotpink;"
        );
*/

    pixel.style.width = (1 / gridSize) * 100 + "%";
    pixel.style.height = (1 / gridSize) * 100 + "%";

    let pixelLightness = 1;

    pixel.addEventListener("mouseover", (event) => {
      // highlight the mouseover target

      if (mouseDown == 1) {
        var pickedColor = document.getElementById("color-picker").value;

        event.target.style.backgroundColor = pickedColor;

        //pixelLightness = pixelLightness - 0.1;
      }
    });

    container.appendChild(pixel); //Add our new content element to the DOM
  }
}

drawGrid(32);

rangeInput.addEventListener("mouseup", (event) => {
  const pixels = document.querySelectorAll(".pixels");

  pixels.forEach((pixel) => {
    pixel.remove();
  });
  drawGrid(event.target.value);
});

let mouseDown = 0;
document.body.onmousedown = function () {
  mouseDown = 1;
  mouseInfo.textContent = "Mouse is Down!";
};
document.body.onmouseup = function () {
  mouseDown = 0;
  mouseInfo.textContent = "Mouse is Up!";
};

/*
function draw() {
  if (mouseDown == 1) {
    // the mouse is down, do what you have to do.
    pixels.setAttribute("style", "background-color: black;");
    
  }
};

pixels.addEventListener("mouseover", draw());



        object.addEventListener("mouseover", myScript);

  pixels.addEventListener("mouseover", () => handleClick("drawing"));

  function handleClick(playerSelection) {
    playRound(playerSelection, getComputerChoice());
  }
*/
