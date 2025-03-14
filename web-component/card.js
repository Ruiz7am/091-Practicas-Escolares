// Card
class TheCard extends HTMLElement {
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
        <img src="./avatar.png" alt="avatar" class="card__avatar">
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
        max-width: 400px;
        height: auto;
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

      .card__avatar-container:hover .card__avatar {
        transform: scale(1.03);
      }

      .card__avatar-container .card__avatar {
        width: 100%;
        border: solid 1px rgb(from #000 r g b / 0.10);  
        border-radius: 50%;
        box-shadow: 0.5px 0.5px 4px 0.5px rgb(from #000 r g b / 0.12);
      }
      .card__name-container { 
        display: flex;
        flex-direction: column; 
      }
      h2 {
        font-size: 1.9rem;
      }
      h3 {
        font-size: 1.6rem;
      }
      .card__mini-bio {
        display: block;
        width: 0px;
        height: 0px;
        padding: .1px;
        font-size: 1.3rem;
        line-height: 1.6;
        letter-spacing: 0.2px;
        will-change: visibility;
        visibility: hidden;
        overflow: hidden;
        box-sizing: border-box;
        transition: width 500ms, height 500ms, visibility 500ms;
      }
      .card__social-media-container {
        display: flex;
        flex-wrap: wrap;
        width: 0px;
        height: 0px;
        padding: 0;
        will-change: visibility;
        visibility: hidden;
        overflow: hidden;
        box-sizing: border-box;
      }
      span {
        margin: 5px;
        padding: 3px 10px;
        border: 1px solid rgb(from #000 r g b / 0.1);
        border-radius: 4px;
        font-size: 1.3rem;
        cursor: pointer;
        box-shadow: 0.5px 0.5px 2px 0.5px rgb(from #000 r g b / 0.1);
      }
    `;
    return styles;
  }

  script(){
    console.group();
    console.log("SCRIPT DEBUGGING");
    const host = document.querySelector('the-card');
    const width = host.clientWidth;
    const height = host.clientHeight;
    console.log(`El host del componente es: ${host}`);
    console.log(host)
    console.log(`Su tamaño es de W:${width}px X H:${height}px`);
    const miniBio = host.shadowRoot.querySelector('.card__mini-bio');
    const socialMediaContainer = host.shadowRoot.querySelector('.card__social-media-container');
    console.log(socialMediaContainer);
    console.log(miniBio);

    host.addEventListener('mouseenter', () => {
      miniBio.style.visibility = 'visible';
      miniBio.style.width = 'fit-content';
      miniBio.style.height = 'auto';
      socialMediaContainer.style.visibility = 'visible';
      socialMediaContainer.style.width = '100%';
      socialMediaContainer.style.height = 'auto';
    });
    host.addEventListener('mouseleave', () => {
      miniBio.style.visibility = 'hidden';
      miniBio.style.width = '0px';
      miniBio.style.height = '0px';
      socialMediaContainer.style.visibility = 'hidden';
      socialMediaContainer.style.width = '0px';
      socialMediaContainer.style.height = '0px';
    })
    console.groupEnd();
  }

  render(){
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback(){
    this.render();
    this.script();
  }
}

customElements.define('the-card', TheCard);