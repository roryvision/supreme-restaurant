const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    header {
      margin: 48px 88px 0px 88px;
    }
    
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
      width: clamp(200px, 50%, 300px);
    }

    #nav-text {
      font-size: 1.2em;
    }

    .img-small {
      height: 20px;
    }

    .flex-btwn {
      display: flex;
      justify-content:space-between;
    }

    .w-50 {
      width: 50px;
    }
  </style>
  
  <header>
    <ul id='nav-text'>
      <li class='w-50'><a href='index.html'><img src='./assets/icons/logo.svg' class='img-small' /></a></li>
      <nav class='flex-btwn'>
        <li><a href='info.html'>Info</a></li>
        <li><a href='menu.html'>Menu</a></li>
        <li><a href='contact.html'>Contact</a></li>
      </nav>
      <div class='flex-btwn w-50'>
        <li><a href='https://www.instagram.com/supremerestaurant_nyc/' rel='noopener noreferrer' target='_blank'><img src='./assets/icons/instagram.svg' class='img-small' /></a></li>
        <li><a href='https://www.yelp.com/biz/supreme-restaurant-new-york-2' rel='noopener noreferrer' target='_blank'><img src='./assets/icons/yelp.svg' class='img-small' /></a></li>
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