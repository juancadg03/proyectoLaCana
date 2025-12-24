// src/components/MainMenu.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./MainMenu.css";

const menuItems = [
  { path: "/", label: "Inicio" },
  { path: "/metodologia", label: "Metodología" },
  { path: "/vinetas", label: "Viñetas" },
  { path: "/contra-imagen", label: "Contra-imagen" },
  { path: "/archivos", label: "Archivos" },
  { path: "/contacto", label: "Contacto" },
];

function MainMenu() {
  return (
    <nav className="main-menu" aria-label="Navegación principal">
      <ul className="main-menu-list">
        {menuItems.map((item) => (
          <li key={item.path} className="main-menu-item">
            <NavLink
              to={item.path}
              end={item.path === "/"} // para que solo "/" cuente como Inicio
              className={({ isActive }) =>
                "main-menu-link" + (isActive ? " main-menu-link-active" : "")
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* hojita / detalle visual si ya la tienes en tu CSS */}
      <div className="sugarcane-leaf" aria-hidden="true" />
    </nav>
  );
}

export default MainMenu;
