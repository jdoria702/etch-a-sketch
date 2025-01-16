const container = document.querySelector(".container");
const slidercontainer = document.querySelector(".slider");
const layout = document.querySelector(".layout");
const lightButton = document.querySelector(".light");
let size = slidercontainer.value;
let paintOn = false;
let lightOn = true;

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

lightButton.addEventListener("click", () => {
  const page = document.querySelector(".page");
  const body = document.querySelector("body");
  if (lightOn) {
    lightOn = false;
    page.style.backgroundColor = "rgb(30,30,30)";
    body.style.backgroundColor = "rgb(18,18,18)";
    document.querySelector("h1").style.color = "white";
    document.querySelector("h2").style.color = "white";
    document.querySelector(".container").style.borderColor = "lightgray";
  } else {
    lightOn = true;
    body.style.backgroundColor = "lightgray";
    page.style.backgroundColor = "white";
    document.querySelector("h1").style.color = "black";
    document.querySelector("h2").style.color = "black";
    document.querySelector(".container").style.borderColor = "black";
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
