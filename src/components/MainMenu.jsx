// src/components/MainMenu.jsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./MainMenu.css";

const primaryItems = [

  { path: "/vinetas", label: "Viñetas" },
  { path: "/contra-imagen", label: "Contra-imagen" },
  { path: "/archivos", label: "Archivos y Referencias" },
];

const metodologiaItems = [
  { path: "/metodologia/analisis-narrativo", label: "Análisis narrativo", hint: "Ejes, lectura y hallazgos" },
  { path: "/metodologia/linea-del-tiempo", label: "Línea del tiempo", hint: "Cronología y contexto" },
  { path: "/metodologia/talleres-colaborativos", label: "Talleres colaborativos", hint: "Cartografía, ATLAS y creación" },
];

function MetodologiaDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const location = useLocation();

  // ✅ Cierra si cambia la ruta
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // ✅ Cierra al hacer click fuera
  useEffect(() => {
    function onDocMouseDown(e) {
      if (!open) return;
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    }

    function onKeyDown(e) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onDocMouseDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isMetodologiaActive =
    location.pathname === "/metodologia" ||
    location.pathname.indexOf("/metodologia/") === 0;

  return (
    <div ref={wrapRef} className={"main-menu-dropdown" + (open ? " is-open" : "")}>
      <button
        type="button"
        className={"main-menu-link main-menu-dropdown-btn main-menu-link-bold" + (isMetodologiaActive ? " main-menu-link-active" : "") }
        aria-haspopup="menu"
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen(!open)}
      >
        Capas de Análisis
        <span className="main-menu-caret" aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <div className="main-menu-dropdown-panel" role="menu" aria-label="Opciones de metodología">
          {metodologiaItems.map((it) => (
            <NavLink
              key={it.path}
              to={it.path}
              role="menuitem"
              className={({ isActive }) =>
                "main-menu-dropdown-item" + (isActive ? " main-menu-dropdown-item-active" : "")
              }
            >
              {it.label}
              <span className="main-menu-dropdown-hint">{it.hint}</span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export function BottomMiniMenu() {
  return (
    <nav className="bottom-mini-menu" aria-label="Navegación inferior">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          "bottom-mini-link" + (isActive ? " bottom-mini-link-active" : "")
        }
      >
        Inicio
      </NavLink>

      <NavLink
        to="/contacto"
        className={({ isActive }) =>
          "bottom-mini-link" + (isActive ? " bottom-mini-link-active" : "")
        }
      >
        Contacto
      </NavLink>
    </nav>
  );
}

function MainMenu() {
  return (
    <>
      <nav className="main-menu" aria-label="Navegación principal">
        <ul className="main-menu-list">
        
          

          {/* ✅ Dropdown Metodología */}
          <li className="main-menu-item">
            <MetodologiaDropdown />
          </li>

          {/* Resto */}
          {primaryItems
            .filter((x) => x.path !== "/") // ya puse Inicio arriba
            .map((item) => (
              <li key={item.path} className="main-menu-item">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    "main-menu-link" + (isActive ? " main-menu-link-active" : "")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
        </ul>

        <div className="sugarcane-leaf" aria-hidden="true" />
      </nav>

      {/* ✅ Menú inferior fijo (para dashboards o global si lo dejas aquí) */}
      <BottomMiniMenu />
    </>
  );
}

export default MainMenu;
