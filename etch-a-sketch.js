const container = document.querySelector("#container");

function etch_a_sketch(number) {
  let containerSize = 700;
  while (containerSize % number != 0) {
    containerSize = containerSize + 1;
  }
  for (let i = 1; i <= number * number; i++) {
    size = containerSize / number;
    container.style.width = containerSize + "px";
    container.style.height = containerSize + "px";
    const div = document.createElement("div");
    div.style = "background-color: black";
    div.style.height = size + "px";
    div.style.width = size + "px";
    div.classList.add("sketch");
    container.appendChild(div);
  }
}

function getRandomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function draw() {
  const sketches = document.querySelectorAll(".sketch");
  sketches.forEach((sketch) => {
    sketch.addEventListener("mouseenter", () => {
      let random = Math.random;
      sketch.style.backgroundColor = getRandomRGB();
    });
  });
}

const new_sketch = document.querySelector("#new_sketch");

new_sketch.addEventListener("click", () => {
  let choice;
  while (choice <= 0 || choice > 100 || isNaN(choice) == true) {
    choice = prompt("How many squares per side ? (Min: 1, Max: 100)");
    if (choice === null || choice === "") {
      break;
    }
    choice = parseInt(choice);
  }
  document.querySelectorAll(".sketch").forEach((e) => e.remove());
  document.querySelectorAll(".new_line").forEach((e) => e.remove());
  choice = parseInt(choice);
  etch_a_sketch(choice);
  draw();
});
