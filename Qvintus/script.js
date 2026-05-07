const infoBtn = document.getElementById("infoBtn");
const popup = document.getElementById("popup");
const close = document.getElementById("close");

infoBtn.addEventListener("click", function() {
    popup.classList.remove("hidden");
});

close.addEventListener("click", function() {
    popup.classList.add("hidden");
});