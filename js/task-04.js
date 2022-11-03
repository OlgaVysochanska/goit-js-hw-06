const valueEl = document.querySelector("#value");
const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");

let counterValue = 0;

const update = (event) => {
    counterValue += Number(event.currentTarget.textContent);
    valueEl.textContent = counterValue;
};

incrementBtn.addEventListener('click', update);
decrementBtn.addEventListener('click', update);