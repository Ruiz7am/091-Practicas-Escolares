// Card
class 
TheCard extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }
  
  static get observedAttribute(){
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue){
    if (oldValue !== newValue) {
      this.render();
    }
  }

  getTemplate(){
    // Dynamic Attributes declaring

    // 
    const theCard = document.createElement('template');
    theCard.innerHTML = `
      <figure class="card__avatar-container">
        <img src="./avatar.png" alt="avatar">
      </figure>
      <div class="card__name-container">
        <h2 class="card__name">Armando Ruiz</h2>
        <h3 class="card__role">Frontend Developer Jr.</h3>
      </div>
      <p class="card__mini-bio">Hi, I'm Armando from Mx. I'm 35yo and I've been studying and practicing frontend web development for about six months. I've been improving my skills in HTML, CSS and JavaScript, focusing on good practices and the importance of a design system.</p>
      <div class="card__social-media-container">
        <span><a href="#">Site</a></span>
        <span><a href="#">Github</a></span>
        <span><a href="#">Twitter</a></span>
      </div>
      <style>${this.getStyles()}</style>
    `;
    return theCard;
  }

  getStyles(){
      const styles = `
      :host {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 25px;
        min-width: 250px;
        max-width: 500px;
        padding: 30px;
        border: solid 1px rgb(from #000 r g b / 0.20);
        border-radius: 20px;
        box-shadow: 1px 1px 5px 1px rgb(from #000 r g b / 0.12), -1px -1px 5px 1px rgb(from #000 r g b / 0.12);
      }
      * {
        margin: 0;
        padding: 0;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      .card__avatar-container {
        width: 65px;
        height: 55px;
      }
      .card__avatar-container img {
        width: 100%;
        border: solid 1px rgb(from #000 r g b / 0.10);  
        border-radius: 50%;
        box-shadow: 1px 1px 5px 1px rgb(from #000 r g b / 0.12), -1px -1px 3px 1px rgb(from #000 r g b / 0.12);
      }
      .card__name-container { 
        display: flex;
        flex-direction: column;
        align-items: 
      }
      h2 {
        font-size: 1.9rem;
      }
      h3 {
        font-size: 1.6rem;
      }
      p {
        font-size: 1.3rem;
      }
      .card__social-media-container {
        display: flex;
        gap: 20px;
      }
      span {
        font-size: 1.3rem;
      }
      span:hover a {
        cursor: pointer;
      }
    `;
    return styles;
  }

  getScript(){

  }

  render(){
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback(){
    this.render()
  }
}

customElements.define('the-card', TheCard);