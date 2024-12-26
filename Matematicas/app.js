
/* 

...are the one percent of one percent...
anyway...

*/

/* COMPONENTE THE NAVBAR */
class TheNavbar extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const theNavbar = document.createElement('template');
        theNavbar.innerHTML = `
        <ul id="theNavbar">
            <li><a href="#">Algebra basica</a></li>
            <li><a href="#">Geometria basica</a></li>
            <li><a href="#">Estadistica basica</a></li>
        </ul>
        `
        return theNavbar;
    }
    getStyles() {
        const navbarStyles = document.createElement('link');
        navbarStyles.rel = 'stylesheet';
        navbarStyles.href = './navbar.css';
        return navbarStyles;
    }
    render(){
        document.head.appendChild(this.getStyles());
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define('the-navbar', TheNavbar)


/* Componente formulas de algebra (app)*/
class AlgebraApp extends HTMLElement {
    constructor(){
        super();
    }
    getTemplate(){
        const algebraApp = document.createElement('template');
        algebraApp.innerHTML = `
        <div>
            <h1>Algebra Basica</h1>
            <ol id="app-list">
                <li>Cuadrado de Binomio</li>
                <li>Otro tema</li>
                <li>Otro tema</li>
                <li>Otro tema</li>
            </ol>
        </div>
        `
        return algebraApp;
    }
    getStyles(){
        const algebraAppStyles = document.createElement('link');
        navbarStyles.rel = 'stylesheet';
        navbarStyles.href = './algebra-app.css';
        return algebraAppStyles;
    }
    render(){
        document.head.appendChild(this.getStyles())
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define('algebra-app', AlgebraApp)