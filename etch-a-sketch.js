const container = document.querySelector("#container");
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.classList.add("sketch");
    container.appendChild(div);
  }
}

const sketches = document.querySelectorAll(".sketch");
sketches.forEach(sketch => {
    sketch.addEventListener("mouseenter", () => {
        sketch.style = "background-color:lime";
    });
});
