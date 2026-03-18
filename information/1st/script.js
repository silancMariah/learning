const button = document.getElementById("btd")
const message = document.getElementById("messege")
const nameInput = document.getElementById("name")

button.addEventListener("click", () => {
    const name = nameInput.value;
    const box = document.createElement("div");
    box.classList.add("box");

    if (name === "") {
        box.textContent = "Du måste skriva något";
    } else {
        box.textContent = "Tack " + name + "!";
    }

    document.body.appendChild(box); // <-- viktigt
});