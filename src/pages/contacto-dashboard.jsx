// src/pages/contacto-dashboard.jsx
import React from "react";
import "./contacto-dashboard.css";

export default function ContactoDashboard() {
  return (
    <main className="contacto-page">
      <header className="contacto-hero">
        <p className="contacto-overline">Contacto</p>
        <h1 className="contacto-title">Hablemos</h1>

        <p className="contacto-intro">
          Un espacio para conectar, compartir referencias y continuar la conversación
          desde el archivo y la mirada.
        </p>
      </header>

      <section className="contacto-grid">
        {/* Card principal */}
        <article className="contacto-card contacto-card-main">
          <div className="contacto-card-head">
            <h2 className="contacto-card-title">Gabriela Cobo</h2>
            <span className="contacto-chip">Ciudad de Cali</span>
          </div>

          <p className="contacto-card-text">
            Puedes escribir por correo o por WhatsApp. 
          </p>

          <div className="contacto-fields">
            <div className="contacto-field">
              <span className="contacto-label">Email</span>
              <a
                className="contacto-value contacto-link"
                href="mailto:gabrielacobocruz@gmail.com"
              >
                gabrielacobocruz@gmail.com
              </a>
            </div>

            <div className="contacto-field">
              <span className="contacto-label">Teléfono</span>
              <a className="contacto-value contacto-link" href="tel:+573206501952">
                +57 320 6501952
              </a>
            </div>
          </div>

          <div className="contacto-actions">
            <a
              className="contacto-btn contacto-btn-primary"
              href="mailto:gabrielacobocruz@gmail.com?subject=Contacto%20desde%20la%20web"
            >
              Enviar correo
            </a>

            <a
              className="contacto-btn"
              href="https://wa.me/573206501952?text=Hola%20Gabriela%2C%20te%20escribo%20desde%20la%20p%C3%A1gina%20web."
              target="_blank"
              rel="noreferrer"
            >
              Abrir WhatsApp
            </a>
          </div>

        </article>

      </section>
    </main>
  );
}
