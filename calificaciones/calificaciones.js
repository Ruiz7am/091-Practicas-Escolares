// faker api:
// to get random students names
const { faker } = await import('https://esm.sh/@faker-js/faker');
// Supongamos que esta variable son las calificaciones de los alumnos de una universidad.
// En donde se califica del 0 al 100 con valores decimales que, dependiendo de los decimales que sean, se redondea o se truncan, poniendo a varios estudiantes en la delgada linea que divide la felicidad y la desgracia.

// Constants of elements will be dynamic
const boton = document.querySelector('.boton');
const paragraph = document.querySelector('.calificacion');
const resultados = document.getElementsByTagName('span');
const nombre = document.getElementById('nombre');

// Click Event for initiate the program
boton.addEventListener('click', (event) => {
    let randomName = faker.person.fullName();
    nombre.innerHTML = `${randomName}`;
    nombre.style.color = 'blue';
    let calificacion = (Math.random() * 100).toFixed(3);
    let acreditacion = 'no data';
    let decimales = parseInt(calificacion.toString().split('.')[1]);
    
    if(calificacion >= 59.600){
        acreditacion = 'Acreditado';
        redondearOTruncarCalificacion(decimales, calificacion, acreditacion);
    } else if(calificacion < 59.600) {
        acreditacion = 'No acreditado';
        redondearOTruncarCalificacion(decimales, calificacion, acreditacion);
    }
});

// Round or truncate
function redondearOTruncarCalificacion(decimales, calificacion, acreditacion) {
    if (decimales < 600){
        let calificacion2 = Math.floor(calificacion);
        mensaje(calificacion, calificacion2, acreditacion)
    } else if (decimales > 600) {
        let calificacion2 = Math.round(calificacion)
        mensaje(calificacion, calificacion2, acreditacion)
    }
}

// Mensaje 
function mensaje(calificacion, calificacion2, acreditacion){
    paragraph.innerHTML = `Tu puntuacion es de: <span class="decimal">${calificacion}</span> Tu calificación es de: <span class="integer">${calificacion2}</span> Resultado: <span class="result">${acreditacion}</span>`;
    if (acreditacion === 'Acreditado'){
        for (let i = 0; i < resultados.length; i++){
            resultados[i].classList.toggle('acreditado')
        }
    } else if (acreditacion === 'No acreditado'){
        for (let i = 0; i < resultados.length; i++){
            resultados[i].classList.toggle('no-acreditado')
        }
    }
}