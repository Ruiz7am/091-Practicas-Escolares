class ANavbar extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const aNavbar = document.createElement('template');
        aNavbar.innerHTML = `
        <nav>
            <ul id="aNavbar">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
            </ul>
        </nav>
        `;
        return aNavbar;
    }
    putStyles() {
        const navbarStyles = document.createElement(`link`);
        navbarStyles.rel = `stylesheet`;
        navbarStyles.href = `./style.css`;
        return navbarStyles;
    }
    render() {
        document.head.appendChild(this.putStyles());
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define('a-navbar', ANavbar)

