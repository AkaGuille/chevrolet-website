import './src/components/filter/filter.js'
const filterContainer = document.querySelector('#filter-container');
const categoriesButtons = document.querySelectorAll('#filter-categories-titles button')

console.log(categoriesButtons);

async function getProducts(){
    try {
    let response = await fetch('https://apimocha.com/chevroletcars/cars');
    let data = await response.json();
    console.log(data);
    createCardFilter(data);
    } catch (e) {
    console.log(e);
        }}

getProducts();

function createCardFilter(cars) {
    cars.forEach(element => {
        const carOb = document.createElement('filter-component');
        carOb.setAttribute("name", element.name);
        carOb.setAttribute("image", element.image);
        carOb.setAttribute("description", element.description);
        carOb.setAttribute("price", element.price);
        carOb.setAttribute("model", element.model);
        carOb.setAttribute("category", element.category);
        carOb.setAttribute("color", element.color);
        filterContainer.append(carOb);
    });
}

categoriesButtons.forEach(btn => btn.addEventListener('click', ()=> setCategory(btn)))

function setCategory(elem) {
    console.log(elem.textContent)
}