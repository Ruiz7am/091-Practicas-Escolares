// debugger;
// Se declara una constante con un array de los dígitos que conforman el sistema numérico hexadecimal
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


// Se declaran dos constantes, la del botón que cambia el color del background y el valor hexadecimal del color
const btn = document.getElementById('btn')
const color = document.querySelector('.color')


// Se agrega un eventListener al elemento botón.
// Al hacer click sobre el se desencadena el siguiente código:
// Se crea una variable hexColor para almacenar el color aleatorio
// Se itera 5 veces para recolectar un dígito del array hex 
// mediante la función getRandomNumber() y agregarlo a la variable hexColor
// Una vez obtenido el color se cambia el nombre del color a su valor hex
// Y se cambia el color de background del body
btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});


// Se declara una función para multiplicar un numero aleatorio por la cantidad de elementos que tiene el array hex
// y todo eso es truncado mediante Math.floor()
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}
