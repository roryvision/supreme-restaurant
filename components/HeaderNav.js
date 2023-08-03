const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    a {
      color: #660708;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    nav {
      display: flex;
      justify-content: space-between;
      width: 300px;
    }

    .nav-text {
      font-size: 20px;
    }

    img {
      width: 20px;
    }
  </style>
  
  <header>
    <ul class='nav-text'>
      <li><a href='info.html'><img src='./assets/images/logo.svg' /></a></li>
      <nav>
        <li><a href='info.html'>Info</a></li>
        <li><a href='info.html'>Menu</a></li>
        <li><a href='info.html'>Contact</a></li>
      </nav>
      <div>
        <li><a href='info.html'><img src='./assets/images/instagram.svg' /></a></li>
        <li><a href='info.html'><img src='./assets/images/yelp.svg' /></a></li>
      </div>
    </ul>
  </header>
`

class HeaderNav extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(headerTemplate.content);
  }
}

customElements.define('header-nav', HeaderNav);