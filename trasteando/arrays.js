// Constante que contenga un array de nombres y apellidos de estudiantes de ambos generos.
// Debe tener al menos 10 nombres.

const students = [ 'Juan Perez', 'Maria Rodriguez', 'Pedro Gomez', 'Ana Sanchez', 'Luisa Perez', 'Carlos Rodriguez', 'Sofia Gomez', 'Lucia Sanchez', 'Jorge Perez', 'Marta Rodriguez', 'Fernando Montalban', 'Ricardo Perez' ];

// Una constante que contenga un array de numero de equipos, del 1 al 3.
const teams = [ 1, 2, 3 ];



// una constante que contenga un array de temas a exponer.
const topics = [ 'Matematicas', 'Ciencias', 'Arte' ];
// A partir de aquí copilot me ayudó a crear las constantes.
// Copilot off.

// randomNumber
function getRandomNumber(randomizedArray){
    const randomNumber = Math.floor(Math.random() * randomizedArray.length);
    return randomNumber;
}

const groups = students.map(item => {
    return {
        name: item,
        team: teams[getRandomNumber(teams)],
    }
    
})