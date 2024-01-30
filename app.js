const wrapper = document.createElement("div"); // wrapper container
wrapper.id = "wrapper";
document.body.appendChild(wrapper);

let numBoxes = 0;

const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "pixel density";

button.addEventListener("click", function(event) {
    const boxes = document.querySelectorAll("#box");
    boxes.forEach(box => box.style.backgroundColor = "white");

    const numBoxes = prompt("How many boxes per side?");
    boxes.forEach(box => box.remove());

    while(numBoxes > 100 || numBoxes < 1) {
        numBoxes = prompt("Invalid. Enter a number between 1 and 100. How many boxes per side?");
    }// check for valid inputs

    for (let i = 0; i < numBoxes**2; i++){
        const box = document.createElement("div");
        box.id = "box";
        box.style.flex = `1 0 calc(100% / ${numBoxes})`; // number of boxes per row
        box.style.width = `calc(100% / ${numBoxes})`;//set width of box
        box.style.height = box.style.width;
        wrapper.appendChild(box);

        box.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "gray";
        }); 
    }
});
