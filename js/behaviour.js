let inputPassword = document.querySelector('.field-password__input');
let check = document.querySelector('.field-password__checkbox');
let eyeImg = document.querySelector('.field-password__eye');
let counter = 2;
let image = document.querySelector('.sliderimg__photo');
let active = false;


//change the eye icon in input password

inputPassword.addEventListener('click', function(){
    if(active === false){
        inputPassword.type ="text";
        active = true;
    }
    else{
        inputPassword.type ="password";
        active = false;
    }
})



//slider: change the images each 3 seconds

let indice = 1;
window.addEventListener('load',function(){
    let images = ['./images/foto1.png','./images/foto2.png','./images/foto3.png','./images/foto4.png'];
    image.style.opacity= 1;
    eyeImg.style.opacity= 1;

    function show(){
        
        let opacity = Number(window.getComputedStyle(image).getPropertyValue("opacity"));
        if(opacity < 1){
            opacity = opacity + 0.01;
            image.style.opacity= opacity;
        }
    }

    function changeImages(){
        let intervalSh = setInterval(show,40);
        image.src=images[indice];
        if(indice < images.length - 1){
            indice++;
        }
        else{
            indice = 0;
        }
        image.style.opacity= 0.5;
  }


//slider: change the images each 4 seconds with click

let interval = setInterval(changeImages,3000);
image.addEventListener('click', function(){
    clearInterval(interval)
    changeImages();
    interval = setInterval(changeImages,4000);
})
})




