let gridSize = 16;

const container = document.querySelector("#grid-container"); // assign container div to a variable

function drawGrid(gridSize) {
  for (i = 0; i < gridSize ** 2; i++) {
    let pixel = document.createElement("div"); // define a new div element with js called 'content'
    pixel.classList.add("pixel"); // assign a class to our new element 'content'

    /* 
        pixel.textContent = "This is the glorious text-content!"; //add some text to our new 'content' element
        
        pixel.setAttribute(
          "style",
          "width: 20px; height: 20px; background-color: hotpink;"
        );
*/

    pixel.style.width = (1 / gridSize) * 100 + "%";
    pixel.style.height = (1 / gridSize) * 100 + "%";

    container.appendChild(pixel); //Add our new content element to the DOM
  }
}

drawGrid(16);
