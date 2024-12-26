class MathApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    getTemplate() {
        const mathApp = document.createElement('template');
        mathApp.innerHTML = `
            <article id="math-app">
                <h1>MathApp</h1>
                <h2>Aplicacón de formulas basicas de Matematicas</h2>
                <h3>Indice</h3>
                <ol id="math-app__index">
                    <li>Formulas de Algebra</li>
                        <ul>
                            <li class="math-app-subject math-app-algebra-subject math-app-algebra-subject-binomio-cuadrado">Cuadrado de Binomio</li>
                            <li class="math-app-subject math-app-algebra-subject math-app-algebra-subject-binomio-cubo">Cubo de Binomio</li>
                        </ul>
                    <li>Formulas de Geometría</li>
                        <ul>
                            <li>Triangulo</li>
                                <ul>
                                    <li class="math-app-subject math-app-geometry-subject math-app-geometry-subject-triangulo-perimetro">Perimetro</li>
                                    <li class="math-app-subject math-app-geometry-subject math-app-geometry-subject-triangulo-area">Area</li>
                                    <li class="math-app-subject math-app-geometry-subject math-app-geometry-subject-triangulo-altura">Altura</li>
                                </ul>
                            <li>Cuandrado</li>
                            <li>Círculo</li>
                        </ul>
                    <li>Formulas de Estadística</li>
                </ol>
            </article>
            ${this.getStyles()}
        `
        return mathApp;
    }
    putVariables(){
        const mathAppVariables = document.createElement('link');
        mathAppVariables.rel = 'stylesheet';
        mathAppVariables.href = './mathApp.css';
        return mathAppVariables;
    }
    getStyles(){
        return `
            <style>
                * {
                }  
                #math-app {
                    display: var(--MathApp-Display);
                    flex-direction: var(--MathApp-Flex-Direction);
                    width: var(--MathApp-Width);
                }
                h1, h2 {
                    text-align: center;
                }
                h1,h2,h3 {
                    font-family: "Roboto Slab", serif;
                }
                #math-app h1 {
                    font-size: 3.8rem;
                    margin: 0;
                    margin-bottom: 18px;
                    padding: 0;
                }
                #math-app h2 {
                    font-size: 2.5rem;
                    margin: 0;
                    margin-bottom: 40px;
                    padding: 0;
                }
                #math-app h3 {
                    font-size: 2.2rem;
                    margin: 0;
                    margin-bottom: 15px;
                    padding: 0;
                }
                .math-app-subject:hover {
                    cursor: pointer;
                    color: green;
                }
            </style>
        `
    }
    formulaLauncher(){
        const mathAppIndex = this.shadowRoot.getElementById('math-app__index');
        mathAppIndex.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target.classList;
            const arrayClases = Array.from(target);
            if (arrayClases.includes('math-app-algebra-subject-binomio-cuadrado')){
                this.binomioCuadrado()
            } else if (arrayClases.includes('math-app-algebra-subject-binomio-cubo')) {
                console.log('it works!')
            } else if (arrayClases.includes('math-app-geometry-subject-triangulo-perimetro')) {
                console.log('it works!')
            } else if (arrayClases.includes('math-app-geometry-subject-triangulo-area')){
                console.log('it works!')
            } else if (arrayClases.includes('math-app-geometry-subject-triangulo-altura')){
                console.log('it works!')
            } 
        })
    }
    binomioCuadrado(){
        const mathAppArticle = this.shadowRoot.getElementById('math-app');
        const binomioCuadrado = document.createElement('div');
        binomioCuadrado.id = 'algebra-binomio-cuadrado';
        mathAppArticle.appendChild(binomioCuadrado);
        binomioCuadrado.innerHTML = `
            <h4>Cuadrado de Binomio</h4>
            <form id="binomio-cuadrado-form">
                <div>
                    <label for="binomio-cuadrado-a">a</label>
                    <input type="number" id="binomio-cuadrado-a" placeholder="a">
                </div>
                <div>
                    <label for="binomio-cuadrado-b">b</label>
                    <input type="number" id="binomio-cuadrado-b" placeholder="b">
                </div>
                <button type="submit">Calcular</button>
            </form>
            <p id="binomio-cuadrado-result"></p>
            <style>
                h4 {
                    margin-bottom: 20px;
                    font-size: 2.2rem;
                    text-align: center;
                }
                #binomio-cuadrado-form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;

                }
            </style>
        `
    }
    attachScript(){
        this.shadowRoot.getElementById('')
    }
    render(){
        document.head.appendChild(this.putVariables());
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        this.formulaLauncher();

    }
    connectedCallback(){
        this.render();
    }
}
customElements.define('math-app', MathApp)