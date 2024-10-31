document.addEventListener("DOMContentLoaded", function () {});

const Form = () => (
  <div class="contact-container">
    <div class="image-section">
      <img src="FOTITOS/imagencuadro.png" alt="mandos" />
    </div>
    <div class="form-section">
      <h2>Contáctanos</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Nombres y apellidos"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
        />
        <input type="tel" placeholder="Número telefónico" required />
        <textarea name="message" placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
);
