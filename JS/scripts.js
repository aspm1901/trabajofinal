document.addEventListener("DOMContentLoaded", function () {});

const Header = () => (
  <header>
    <div class="header-logo">
      <img src="FOTITOS/logo.png" alt="GameVerse Logo" class="logo" />
      <h1>GameVerse</h1>
    </div>
    <nav>
      <div class="nav-buttons">
        <button onclick="window.location.href='gameList.html'">
          Acerca de nosotros
        </button>
        <button onclick="window.location.href='contact.html'">
          Nuestros productos
        </button>
      </div>
    </nav>
  </header>
);

const MainContent = () => (
  <div className="container">
    <h2 style={{ color: "#f59bf7" }} className="titulo">
      ¡Bienvenido a GameVerse, tu mundo gamer!
    </h2>
    <section id="main">
      <img
        src="FOTITOS/imagenprincipal.jpg"
        alt="Imagen principal"
        className="imagenprincipal"
      />
      <h2>
        <a href="#" style={{ color: "#9f5ea0" }}>
          Acerca de nosotros
        </a>
      </h2>
      <p className="letrarticulo">
        En GameVerse, nuestra pasión por los videojuegos es lo que nos impulsa.
        Somos un equipo de entusiastas que vive y respira este emocionante
        mundo, y nuestro objetivo es compartir esa pasión contigo.
      </p>
    </section>
    <section id="products">
      <h2 style={{ color: "#9f5ea0" }}>Productos destacados</h2>
      <div className="product-card">
        <img src="FOTITOS/ps5.png" className="Ps5s" alt="PlayStation 5" />
        <p>PlayStation 5</p>
      </div>
      <div className="product-card">
        <img src="FOTITOS/xbox.png" className="Xboxs" alt="Xbox Series X" />
        <p>Xbox Series X</p>
      </div>
      <div className="product-card">
        <img
          src="FOTITOS/switch.png"
          className="Nintendos"
          alt="Nintendo Switch OLED"
        />
        <p>Nintendo Switch OLED</p>
      </div>
    </section>
    <div className="todos-productos">
      <a href="#">Ver todos nuestros productos</a>
    </div>
  </div>
);

const Footer = () => (
  <footer>
    <a href="./contacto.html" target="_top">
      ¡Contáctanos!
    </a>
    <p>
      Nuestra dirección es: <address>Madre de Dios 371 - La Molina</address>
    </p>
    <p>Número de contacto: +51 960 172 519</p>
    <small>2024 Fundamentos de diseño web - All Rights Reserved</small>
  </footer>
);
