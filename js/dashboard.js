let userName = document.querySelector('.profile__info-name');
let greetingText = document.querySelector('.block-greeting__text');
let activeCourses = document.querySelector('#activecourses');
let newOportunities = document.querySelector('#newoportunities');
let estEgresados = document.querySelector('#estudiantesEgresados');
let certificados = document.querySelector('#certificados');
let photo = document.querySelector('.profile__info-icon');
let day = document.querySelector('.block-calendar__day');
let mes = document.querySelector('.block-calendar__month');
let meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
let estActivos = document.querySelector('.info__activos');
let estInactivos = document.querySelector('.info__inactivos');

let Persona = {};
const fecha = new Date();


window.addEventListener('load',function(){
    fetch('persona.json')
    .then(function(response) {
        return(response.json());
        
    })
    .then(function(data){
        persona = data.data;
        console.log(persona);
        userName.textContent = persona.first_name + " " + persona.last_name;
        greetingText.textContent = `¡Hola ${persona.first_name}, así van tus programas!`;
        photo.src= persona.avatar;
        activeCourses.textContent = persona.counter.cursosActivos;
        newOportunities.textContent = persona.counter.nuevasOportunidades;
        estEgresados.textContent = persona.counter.estudiantesEgresados;
        certificados.textContent= persona.counter.certificadosEntregados;
        day.textContent = fecha.getDate();
        let mesSelected = fecha.getMonth();
        mes.textContent = meses[mesSelected];
        estActivos.textContent = persona.counter.estudiante.activos;
        estInactivos.textContent = persona.counter.estudiante.inactivos;
    })
})

