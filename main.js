const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

document.querySelector('.menu-btn').addEventListener('click', () => {

    document.querySelector('.nav-menu').classList.toggle('show')


} )



















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