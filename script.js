const container = document.querySelector(".container");
const slidercontainer = document.querySelector(".slider");
const layout = document.querySelector(".layout");
let size = slidercontainer.value;
let paintOn = false;

slidercontainer.addEventListener("click", () => {
  size = slidercontainer.value;
  drawGrid();
});

container.addEventListener("click", () => {
  if (!paintOn) {
    paintOn = true;
  } else {
    paintOn = false;
  }
});

function drawGrid() {
  container.innerHTML = "";
  layout.innerHTML = `${size}x${size}`;
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.className = "square";
      square.addEventListener("mouseover", () => {
        if (paintOn) {
          let colorVal1 = Math.floor(Math.random() * 255);
          let colorVal2 = Math.floor(Math.random() * 255);
          let colorVal3 = Math.floor(Math.random() * 255);
          square.style.backgroundColor = `rgb(${colorVal1}, ${colorVal2}, ${colorVal3})`;
        }
      });
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

document.querySelector(".clear").addEventListener("click", () => {
  drawGrid();
});

drawGrid();
