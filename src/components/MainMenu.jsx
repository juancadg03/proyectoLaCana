// src/components/MainMenu.jsx
import React from "react";
import "./MainMenu.css";

function MainMenu() {
  const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "metodologia", label: "Metodología" },
    { id: "vinietas", label: "Viñetas" },
    { id: "contra-imagen", label: "Contra-Imagen" },
    { id: "archivos-recursos", label: "Archivos" },
    { id: "propuestas-contacto", label: "Contacto" },
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="main-menu">
      <ul className="main-menu-list">
        {sections.map((item) => (
          <li key={item.id} className="main-menu-item">
            <button
              type="button"
              className="main-menu-link"
              onClick={() => handleScrollTo(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainMenu;
