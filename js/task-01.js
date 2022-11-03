const catNum = document.querySelector("ul#categories").children.length;
console.log(`Number of categories: ${catNum}`);

const category = document.querySelectorAll(".item");
const catDesc = category.forEach(item => {
    console.log("Category: ", item.firstElementChild.textContent);
    console.log("Elements: ", item.lastElementChild.children.length);
})