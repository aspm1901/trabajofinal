document.addEventListener("DOMContentLoaded", function () {});

const Header = () => (
  <header>
    <a href="index.html" className="header-logo-link">
      <div className="header-logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRINCIPALES%2Flogo.png?alt=media&token=1e2f5cd6-aedd-4a61-82bc-24a37d01ecc9"
          alt="GameVerse Logo"
          className="logo"
        />
        <h1>GameVerse</h1>
      </div>
    </a>
    <nav>
      <div className="nav-buttons">
        <button onClick={() => (window.location.href = "acercade.html")}>
          Acerca de nosotros
        </button>
        <button onClick={() => (window.location.href = "prod.html")}>
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
        src="https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRINCIPALES%2Fimagenprincipal.jpg?alt=media&token=5d3ae7ef-16b8-4bde-a624-b616233eafb5"
        alt="Imagen principal"
        className="imagenprincipal"
      />
      <h2>
        <a href="acercade.html" style={{ color: "#9f5ea0" }}>
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
        <img
          src=" https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRINCIPALES%2FPS5.jpeg?alt=media&token=248092d2-c5bd-48a2-a56f-275f1285b0a7"
          className="Ps5s"
          alt="PlayStation 5"
        />
        <p className="textito">PlayStation 5</p>
      </div>
      <div className="product-card">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRINCIPALES%2Fxbox.png?alt=media&token=be2e135f-679b-4374-b5b0-9c422cea0b96"
          className="Xboxs"
          alt="Xbox Series X"
        />
        <p className="textito" textito>
          Xbox Series X
        </p>
      </div>
      <div className="product-card">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20PRINCIPALES%2Fswitch.png?alt=media&token=4842f586-62ea-419a-959e-4d14b3df7b31"
          className="Nintendos"
          alt="Nintendo Switch OLED"
        />
        <p className="textito">Nintendo Switch OLED</p>
      </div>
    </section>
    <div className="todos-productos">
      <a href="prod.html">Ver todos nuestros productos</a>
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

const Form = () => (
  <div class="contact-container">
    <div class="image-section">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/imagenes-del-final.appspot.com/o/IMAGENES%20CONTACTO%2Fimagencuadro.png?alt=media&token=f46c1991-b7c9-4ac0-a29f-b20b9819e25d"
        alt="mandos"
      />
    </div>
    <div class="form-section">
      <h2>Contáctanos</h2>
      <form className="p-6 bg-white shadow-md rounded-lg space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombres y apellidos"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="tel"
          placeholder="Número telefónico"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          required
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 border border-gray-300 rounded"
        >
          {" "}
          Enviar{" "}
        </button>
      </form>
    </div>
  </div>
);
