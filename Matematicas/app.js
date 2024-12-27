const formulario = this.shadowRoot.getElementById('binomio-cuadrado-form');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const a = this.shadowRoot.getElementById('binomio-cuadrado-a').value
    const b = this.shadowRoot.getElementById('binomio-cuadrado-b').value
    const respuesta = document.createElement('div')
    respuesta.id = 'respuesta'
    respuesta.innerHTML = `
        (${a} = ${b})² = ${a}² + 2${a}${b} + ${b}²
    `
})