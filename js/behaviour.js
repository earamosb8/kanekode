let slider = document.querySelector(".slider-images");
let sliderindividual = document.querySelector(".slider-img");
let contador = 1;
let width = sliderindividual[0].clientWidth;
let interval = 3000;

function slides(){
    slider.style.transform = "translate(500px)"
}