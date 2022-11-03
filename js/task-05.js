const input = document.querySelector("#name-input");
const name = document.querySelector("#name-output");

function onInputChange(event) {
    name.textContent =
        event.currentTarget.value.trim() !== "" ? event.currentTarget.value : "Anonymous";
}

input.addEventListener("input", onInputChange);