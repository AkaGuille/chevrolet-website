import './src/components/filter/filter.js'
const filterContainer = document.querySelector('#filter-container');
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


const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

document.querySelector('.menu-btn').addEventListener('click', () => {

    document.querySelector('.nav-menu').classList.toggle('show')

} )

document.body.style.overflowX = "hidden";

const images = [
    {img: "https://assets.static-gm.com/Assets/63a90616-1fa5-40c9-814a-17f4de353956/a7e32d73-c4aa-4142-a0f6-0cde1af569e9/v-1645558907/Desktop.webp", alt : "ONIX"},
    {img: "https://www.valleychevy.com/wp-content/uploads/2021/11/color-picker_0001_22CHSpark-Summit-White.png", alt : "SPARK"},
    {img: "https://assets.static-gm.com/Assets/925e467e-b354-4c6a-bee7-094286fb63d9/6905cfd6-7a9e-426a-9544-7e1a634c8c8e/v-1621478869/Desktop.png", alt : "CAMARO ZL1"},
    {img: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2023/trucks/silverado-ld/01-images/trims/png/2023-silverado1500-cc10543-1lt-gxd-trimselector.png?imwidth=960", alt : "SILVERADO"},

]

const carousel = document.querySelector("my-carousel")
carousel.giveImages(images)



















slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moveRight() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-300%";
    slider.style.transition = "all 0.3s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 
    500);
}


function moveLeft() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 
    500);
}

btnRight.addEventListener('click', function(){
    moveRight();
    
})

btnLeft.addEventListener('click', function(){
    moveLeft();
    
})