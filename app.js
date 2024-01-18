const wrapper = document.createElement("div"); // wrapper container
wrapper.id = "wrapper";
document.body.appendChild(wrapper);

const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "pixel density";

button.addEventListener("click", function(event) {
    const boxes = document.querySelectorAll("#box");
    boxes.forEach(box => box.style.backgroundColor = "white");
    console.log("button clicked");
});

for (let i = 0; i < 256; i++){
    const box = document.createElement("div");
    box.id = "box";
    wrapper.appendChild(box);
    box.textContent = i;

    box.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "gray";
    });
}

