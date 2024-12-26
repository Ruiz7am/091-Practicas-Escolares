/* COMPONENTE THE NAVBAR */
class TheNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    getTemplate() {
        const theNavbar = document.createElement('template');
        theNavbar.innerHTML = `
        <ul id="the-navbar">
            <li><a href="#">Algebra basica</a></li>
            <li><a href="#">Geometria basica</a></li>
            <li><a href="#">Estadistica basica</a></li>
        </ul>
        ${this.getStyles()}
        `
        return theNavbar;
    }
    putVariables(){
        const navbarVariables = document.createElement('link');
        navbarVariables.rel = 'stylesheet';
        navbarVariables.href = './navbar.css';
        return navbarVariables;
    }
    getStyles() {
        /*  */
        return `
        <style>
            li  {
                    list-style: none;
            }    
            a {
                    text-decoration: none;
            }
            #the-navbar {
                /* layout */
                display: var(--Navbar-Display);
                align-items: var(--Navbar-Align-Items);
                justify-content: var(--Navbar-Justify-Content);
                gap: var(--Navbar-Gap);

                /* box model */
                width: var(--Navbar-Width);
                height: var(--Navbar-Height);
                margin: var(--Navbar-Margin);
                padding: var(--Navbar-Padding);
                /* font settings */
                font-family: var(--Navbar-Font-Family);
            }
    </style>
        `
    }
    render(){
        document.head.appendChild(this.putVariables())
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define('the-navbar', TheNavbar)