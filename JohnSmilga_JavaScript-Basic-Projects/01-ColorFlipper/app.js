const colors = ["green", "red", "rgba(133,122,200)", "f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Evento al hacer click en boton para cambiar color de background
btn.addEventListener("click", function () {
  // get random number 0 - 3 colors[3]  
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}