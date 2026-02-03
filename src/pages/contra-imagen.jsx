// src/pages/contra-imagen.jsx
import React, { useMemo, useState, useEffect } from "react";
import "./contra-imagen.css";
import { Link, useLocation } from "react-router-dom";

function buildImages(folder, prefix, start, end, ext) {
  var arr = [];
  var base = import.meta.env.BASE_URL;
  var i = 0;

  for (i = start; i <= end; i = i + 1) {
    var filename = prefix + i + ext;
    var src = base + "assets/" + folder + "/" + filename;
    arr.push({ src: src, alt: filename });
  }

  return arr;
}

function Section(props) {
  var id = props.id;
  var title = props.title;
  var desc = props.desc;
  var images = props.images;
  var align = props.align;
  var accent = props.accent;
  var onSelect = props.onSelect;

  var sectionClass = "ci-section " + align;

  return (
    <section id={id} className={sectionClass}>
      <div className={"ci-text " + accent}>
        <p className="ci-overline">Contra-imagen</p>
        <h2 className="ci-title">{title}</h2>
        <p className="ci-desc">{desc}</p>
      </div>

      <div className="ci-gallery">
        {images.map(function (img, idx) {
          return (
            <figure
              className="ci-card"
              key={img.src + "_" + idx}
              onClick={function () {
                if (onSelect) {
                  onSelect(img.src, img.alt);
                }
              }}
            >
              <img
                className={
                  "ci-img" +
                  (img && img.alt && /^artivismo_(?:1|2)(?:\.[^.]+)?$/.test(img.alt)
                    ? " rotate-90"
                    : "")
                }
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default function ContraImagen() {
  var [activeImg, setActiveImg] = useState(null);
  var [activeAlt, setActiveAlt] = useState("");
  var [activeIndex, setActiveIndex] = useState(-1);
  var [allImages, setAllImages] = useState([]);

  // ✅ Carpetas en public/assets
  var trabajadores = useMemo(function () {
    return buildImages("Fotoensayo", "fotoTrabajadores", 1, 14, ".jpg");
  }, []);

  var serigrafia = useMemo(function () {
    return buildImages("Serigrafia", "serigrafia_", 1, 6, ".jpg");
  }, []);

  var artivismo = useMemo(function () {
    return buildImages("Artivismo", "artivismo_", 1, 13, ".jpg");
  }, []);

  // Lista global para navegar (en el orden de la página)
  useEffect(function () {
    var merged = [].concat(trabajadores, serigrafia, artivismo);
    setAllImages(merged);
  }, [trabajadores, serigrafia, artivismo]);

  function closeModal() {
    setActiveImg(null);
    setActiveAlt("");
    setActiveIndex(-1);
  }

  function openBySrc(src, alt) {
    var idx = -1;
    var i = 0;

    for (i = 0; i < allImages.length; i = i + 1) {
      if (allImages[i].src === src) {
        idx = i;
      }
    }

    setActiveImg(src);
    setActiveAlt(alt || "");
    setActiveIndex(idx);
  }

  function goPrev() {
    if (activeIndex < 0) return;
    var nextIndex = activeIndex - 1;
    if (nextIndex < 0) {
      nextIndex = allImages.length - 1;
    }

    setActiveIndex(nextIndex);
    setActiveImg(allImages[nextIndex].src);
    setActiveAlt(allImages[nextIndex].alt);
  }

  function goNext() {
    if (activeIndex < 0) return;
    var nextIndex = activeIndex + 1;
    if (nextIndex >= allImages.length) {
      nextIndex = 0;
    }

    setActiveIndex(nextIndex);
    setActiveImg(allImages[nextIndex].src);
    setActiveAlt(allImages[nextIndex].alt);
  }

  // Scroll a fragmento si existe (/contra-imagen#serigrafia)
  var location = useLocation();
  useEffect(function () {
    if (location && location.hash) {
      var id = location.hash.replace("#", "");
      setTimeout(function () {
        var el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  }, [location]);

  // Teclado: ESC cierra, ← → navega
  useEffect(function () {
    function onKey(e) {
      if (e.key === "Escape") {
        closeModal();
      }
      if (e.key === "ArrowLeft") {
        goPrev();
      }
      if (e.key === "ArrowRight") {
        goNext();
      }
    }

    if (activeImg !== null) {
      window.addEventListener("keydown", onKey);
    }

    return function () {
      window.removeEventListener("keydown", onKey);
    };
  }, [activeImg, activeIndex, allImages]);

  // Swipe móvil en el modal (sin librerías)
  useEffect(function () {
    if (activeImg === null) return;

    var startX = 0;
    var startY = 0;
    var endX = 0;
    var endY = 0;

    function onTouchStart(e) {
      if (!e || !e.touches || e.touches.length === 0) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      endX = startX;
      endY = startY;
    }

    function onTouchMove(e) {
      if (!e || !e.touches || e.touches.length === 0) return;
      endX = e.touches[0].clientX;
      endY = e.touches[0].clientY;
    }

    function onTouchEnd() {
      var dx = endX - startX;
      var dy = endY - startY;

      // swipe horizontal predominante
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) {
          goPrev();
        } else {
          goNext();
        }
      }
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return function () {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [activeImg, activeIndex, allImages]);

  return (
    <main className="contra-imagen-page">
      <header className="contra-imagen-hero">
        <p className="contra-imagen-overline">Galería</p>
        <h1 className="contra-imagen-title">Contra-Imagen</h1>
        <p className="contra-imagen-intro">
          “Las imágenes pueden luchar unas contra otras.”
          <br />
          Didi-Huberman
          <br />
          <br />
          Una contra-imagen es esa imagen que lucha con otra sensibilidad, otro afecto, otra mirada…Es una
          respuesta crítica a las imágenes dominantes que han construido la realidad de cierta manera.
        </p>
      </header>

      <div className="ci-wrap">
        <Section
          id="trabajadores"
          title="Trabajadores"
          desc=" El paisaje cañero como un verde que pica, dinámicas de los trabajadores de caña, mucho sol y la brisa que llega. Una realidad a pie de la carretera de unos con ciertos  privilegios y por otro lado una cotidianidad para muchos. ( fotografías tomadas por Jhu Piñeros, 2025)"
          images={trabajadores}
          align="text-left"
          accent="accent-a"
          onSelect={function (src, alt) {
            openBySrc(src, alt);
          }}
        />

        <Section
          id="serigrafia"
          title="Serigrafía"
          desc="Darle un rostro a un paisaje silenciado. Rastros de los paisajes porque detrás de cada verde hay huellas. Como una malla unas se ven otras quedan bloqueadas. Juego de traspasar la imagen. "
          images={serigrafia}
          align="text-right"
          accent="accent-b"
          onSelect={function (src, alt) {
            openBySrc(src, alt);
          }}
        />

        <Section
          id="artivismo"
          title="Artivismo"
          desc="El arte como forma de acción colectiva/política y el activismo en una forma de creación política. Porque en la ciudad las paredes también hablan y están en constante debate narrativo. "
          images={artivismo}
          align="text-left"
          accent="accent-c"
          onSelect={function (src, alt) {
            openBySrc(src, alt);
          }}
        />
      </div>

      {/* MODAL / LIGHTBOX */}
      {activeImg !== null && (
        <div className="ci-modal" onClick={closeModal}>
          <div
            className="ci-modal-content"
            onClick={function (e) {
              e.stopPropagation();
            }}
          >
            <button
              className="ci-modal-close"
              onClick={function (e) {
                e.stopPropagation();
                closeModal();
              }}
              aria-label="Cerrar"
              type="button"
            >
              ✕
            </button>

            {/* Flecha izquierda */}
            <button
              className="ci-modal-nav ci-modal-prev"
              type="button"
              aria-label="Anterior"
              onClick={function (e) {
                e.stopPropagation();
                goPrev();
              }}
            >
              ‹
            </button>

            {/* Imagen */}
            <img src={activeImg} alt={activeAlt} className="ci-modal-img" />

            {/* Flecha derecha */}
            <button
              className="ci-modal-nav ci-modal-next"
              type="button"
              aria-label="Siguiente"
              onClick={function (e) {
                e.stopPropagation();
                goNext();
              }}
            >
              ›
            </button>

            {/* Contador opcional */}
            {activeIndex >= 0 && (
              <div className="ci-modal-counter">
                {activeIndex + 1} / {allImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
