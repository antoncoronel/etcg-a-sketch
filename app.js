const wrapper = document.createElement("div"); // wrapper container
wrapper.id = "wrapper";
document.body.appendChild(wrapper);

for (let i = 0; i < 272; i++){
    const box = document.createElement("div");
    box.id = "box";
    wrapper.appendChild(box);
    box.textContent = i;

    box.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "gray";
    });
}

