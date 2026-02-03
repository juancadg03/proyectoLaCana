// src/pages/home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainMenu from "../components/MainMenu";

const img1 = "/assets/img1.png";
const img2 = "/assets/img2.png";
const img3 = "/assets/img3.png";
const img4 = "/assets/img4.png";
const img5 = "/assets/img5.png";
const img6 = "/assets/img6.png";
const img9 = "/assets/img9.png";
const img10 = "/assets/img10.jpeg";

function Home() {
  const [tip, setTip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  function showTip(e, text) {
    // posición del tooltip cerca del cursor
    setTip({
      visible: true,
      text: text,
      x: e.clientX,
      y: e.clientY,
    });
  }

  function moveTip(e) {
    setTip((prev) => {
      if (!prev.visible) return prev;
      return { ...prev, x: e.clientX, y: e.clientY };
    });
  }

  function hideTip() {
    setTip((prev) => {
      if (!prev.visible) return prev;
      return { ...prev, visible: false };
    });
  }

  // Cierra el tooltip al hacer scroll (queda más limpio)
  useEffect(() => {
    function onScroll() {
      hideTip();
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Offset para que no tape el cursor
  const offsetX = 14;
  const offsetY = 18;

  return (
    <main className="home">
      <MainMenu />

      {/* Tooltip flotante */}
      <div
        className={"cursor-tip" + (tip.visible ? " cursor-tip--visible" : "")}
        style={{
          transform: `translate3d(${tip.x + offsetX}px, ${tip.y + offsetY}px, 0)`,
        }}
        aria-hidden="true"
      >
        {tip.text}
      </div>

      {/* Sección de inicio / héroe */}
      <section className="hero" id="inicio">
        <div className="hero-title-wrapper">
          <h1 className="title title-small title-first special-gothic-expanded-one-regular">
            <span className="title-word">La</span>
            <span className="title-word">caña</span>
            <span className="title-word">se</span>
            <span className="title-word">ve</span>
          </h1>

          <h1 className="title title-big title-second special-gothic-expanded-one-regular">
            <span className="title-word">Y</span>
            <span className="title-word">se</span>
            <span className="title-word">contra</span>
            <span className="title-word">ve</span>
          </h1>
        </div>

        {/* NUEVO: texto de portada */}
        <div className="home-intro">
          <div className="home-intro-paper">
            <div className="home-intro-content">
              <p>Como una bitácora, el camino lleva a detenerse: acompañado de preguntas que a veces abruman y otras enseñan a seguir.
              Aquí la caña no aparece como fondo, sino como un espacio que se mira desde distintos ángulos, buscando fisuras, silencios y sensibilidades.
              La investigación se teje en ese volver sobre lo mismo para empezar a ver otra cosa: un juego de perspectivas. Más que explicar el paisaje cañero, se intenta desacomodar, ensayar contra-imágenes y abrir preguntas sobre lo que queda fuera del encuadre cuando el paisaje se reduce a un solo verde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collage libre de imágenes */}
      <section className="image-collage-free">
        <div className="collage-layer">
          <Link
            to="/metodologia/talleres-colaborativos"
            className="collage-link"
            aria-label="Ir a Metodología: Talleres colaborativos"
            onMouseEnter={(e) => showTip(e, "Metodología · Talleres")}
            onMouseMove={moveTip}
            onMouseLeave={hideTip}
            onFocus={(e) => showTip(e, "Metodología · Talleres")}
            onBlur={hideTip}
          >
            <img
              src={img6}
              alt="Camión cañero"
              className="collage-img collage-img-6"
              loading="lazy"
            />
          </Link>

          <Link
            to="/contra-imagen#trabajadores"
            className="collage-link"
            aria-label="Ir a Contra-imagen: Trabajadores"
            onMouseEnter={(e) => showTip(e, "Contra-imagen · Trabajadores")}
            onMouseMove={moveTip}
            onMouseLeave={hideTip}
            onFocus={(e) => showTip(e, "Contra-imagen · Trabajadores")}
            onBlur={hideTip}
          >
            <img
              src={img5}
              alt="Tractor"
              className="collage-img collage-img-5"
              loading="lazy"
            />
          </Link>

          {/* No enlazada */}
          <button
            type="button"
            className="collage-link collage-link-btn"
            aria-label="Imagen no enlazada"
            onMouseEnter={(e) => showTip(e, "Sin destino")}
            onMouseMove={moveTip}
            onMouseLeave={hideTip}
            onFocus={(e) => showTip(e, "Sin destino")}
            onBlur={hideTip}
          >
            
          </button>

          <Link
            to="/vinetas"
            className="collage-link"
            aria-label="Ir a Viñetas"
            onMouseEnter={(e) => showTip(e, "Viñetas")}
            onMouseMove={moveTip}
            onMouseLeave={hideTip}
            onFocus={(e) => showTip(e, "Viñetas")}
            onBlur={hideTip}
          >
            <img
              src={img4}
              alt="Trabajador actual"
              className="collage-img collage-img-4"
              loading="lazy"
            />
          </Link>

          <Link
            to="/contra-imagen#artivismo"
            className="collage-link"
            aria-label="Ir a Contra-imagen: Artivismo"
            onMouseEnter={(e) => showTip(e, "Contra-imagen · Artivismo")}
            onMouseMove={moveTip}
            onMouseLeave={hideTip}
            onFocus={(e) => showTip(e, "Contra-imagen · Artivismo")}
            onBlur={hideTip}
          >
            <img
              src={img2}
              alt="Carrito de guarapo"
              className="collage-img collage-img-2"
              loading="lazy"
            />
          </Link>

          <Link
            to="/archivos/etnografia-dashboard"
            className="collage-link"
            aria-label="Ir a Archivos: Etnografía"
            onMouseEnter={(e) => showTip(e, "Archivos · Etnografía")}
            onMouseMove={moveTip}
            onMouseLeave={hideTip}
            onFocus={(e) => showTip(e, "Archivos · Etnografía")}
            onBlur={hideTip}
          >
            <img
              src={img3}
              alt="Bus Cañaveral"
              className="collage-img collage-img-3"
              loading="lazy"
            />
          </Link>

          <Link
            to="/archivos/archivos-dashboard"
            className="collage-link"
            aria-label="Ir a Archivos: Dashboard"
            onMouseEnter={(e) => showTip(e, "Archivos · Dashboard")}
            onMouseMove={moveTip}
            onMouseLeave={hideTip}
            onFocus={(e) => showTip(e, "Archivos · Dashboard")}
            onBlur={hideTip}
          >
            <img
              src={img10}
              alt="Cortero antiguo"
              className="collage-img collage-img-10"
              loading="lazy"
            />
          </Link>

          <Link
            to="/metodologia/analisis-narrativo"
            className="collage-link"
            aria-label="Ir a Metodología: Análisis narrativo"
            onMouseEnter={(e) => showTip(e, "Metodología · Análisis")}
            onMouseMove={moveTip}
            onMouseLeave={hideTip}
            onFocus={(e) => showTip(e, "Metodología · Análisis")}
            onBlur={hideTip}
          >
            <img
              src={img9}
              alt="Cruce de tren cañero"
              className="collage-img collage-img-9"
              loading="lazy"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
