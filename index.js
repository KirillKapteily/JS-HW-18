//1
let cats = document.querySelector("ul#categories");
let itemCats = document.querySelectorAll("li");

itemCats.forEach(element => {
    //un finished
// console.log(cats);

});

//2
const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];

let ingredient = document.querySelector("li.ingridient");
let ingredientns = document.querySelector("ul.ingredients");
let created = document.querySelector("li.created");

ingredients.forEach(ingr => {
    const li = document.createElement('li');
    li.textContent = ingr;
    li.classList.add('item');
    ingredientns.appendChild(li);
});
