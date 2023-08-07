const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      background-color: #660708;
      color: #FFFFFF;
      padding: 88px;
    }

    h1, h2, h3, p {
      margin-block-start: 0px;
      margin-block-end: 0px;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }

    h1 {
      font-family: 'Nyght Serif';
      font-weight: normal;
      font-style: italic;
      font-size: 3em;
    }

    h2 {
      font-family: 'Nohemi';
      font-weight: bold;
      font-size: 1.5em;
      margin-top: 44px;
      margin-bottom: 12px;
    }

    span {
      font-size: 1.5em;
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }

    button:hover {
      text-decoration: underline;
    }

    .flex-btwn {
      display: flex;
      justify-content:space-between;
      align-items: flex-start;
      flex-flow: row wrap;
    }

    #top {
      align-self: flex-end;
      font-size: 1.5em;
    }
  </style>
  
  <footer>
    <h1>Supreme Restaurant</h1>
    <div class='flex-btwn'>
      <div>
        <h2>ADDRESS</h2>
        <span>100 Mott Street</span><br />
        <span>New York, NY 10013</span><br />
        <span>United States</span>
      </div>
      <div>
        <h2>HOURS</h2>
        <span>SUNDAY to THURSDAY</span><br />
        <span>11:30am <img src='./assets/icons/arrow-right.svg' class='img-small' /> 10pm</span><br />
        <span>FRIDAY and SATURDAY</span><br />
        <span>11:30am <img src='./assets/icons/arrow-right.svg' class='img-small' /> 11pm</span><br />
      </div>
      <button id='top'>Top</button>
    </div>
  </footer>
`

class FooterAbout extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(footerTemplate.content);
  }

  connectedCallback() {
    const topButton = this.shadowRoot.getElementById('top');
    topButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }
}

customElements.define('footer-about', FooterAbout);