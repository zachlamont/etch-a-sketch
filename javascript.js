let gridSize = 16;

const container = document.querySelector("#grid-container"); // assign container div to a variable
const pixels = document.querySelector(".pixels");
const mouseInfo = document.getElementById("mouse-info");

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

    pixel.addEventListener("mouseover", (event) => {
      // highlight the mouseover target
      if (mouseDown == 1) {
      event.target.style.backgroundColor = "green";
      }
    });

    container.appendChild(pixel); //Add our new content element to the DOM
  }
}

drawGrid(32);

let mouseDown = 0;
document.body.onmousedown = function () {
  mouseDown = 1;
  mouseInfo.textContent = 'Mouse is Down!';
};
document.body.onmouseup = function () {
  mouseDown = 0;
  mouseInfo.textContent = 'Mouse is Up!';
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
