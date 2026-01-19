// src/pages/etnografia-dashboard.jsx
import React, { useEffect, useMemo, useState } from "react";
import "./etnografia-dashboard.css";

var RAW_FILENAMES = [
  "20251226_011750.jpg",
  "20251227_181818.jpg",
  "cali es el melao.jpeg",
  "calle de la escopeta 1.jpg",
  "calle de la escopeta 2.jpg",
  "cañaveral.jpeg",
  "carrito de guarapo.jpg",
  "cop 16 grafite 2 univalle.jpg",
  "cop 16-desierto de caña.jpg",
  "despojo unillave .jpg",
  "el amor sistema sostenible IMCA.jpg",
  "el desierto de caña, univalle.jpg",
  "el rio nuestra identidad.jpeg",
  "el viche.jpeg",
  "Entrada museo de la caña.jpg",
  "gobernación.jpeg",
  "gobernacipn 2.jpeg",
  "grafiti guacari 2.jpg",
  "grafiti guacari 3 .jpg",
  "grafiti guacari.jpg",
  "IMCA(1).jpg",
  "IMCA.jpg",
  "ingenio providencia .jpg",
  "la dulce amargura.jpg",
  "mi cañita.jpeg",
  "movilizaicon por el agua.jpeg",
  "paladar valluno.jpeg",
  "publicidad museo de la caña.jpg",
  "safari cañero.jpg",
  "tierra de caña .jpg",
  "tierra para la gente 2.jpg",
  "tierra para la gente 3.jpg",
  "tierra para la gente.jpg",
  "univalle .jpg",
  "univalle grafite 1 cop 16.jpg",
  "WhatsApp Image 2025-11-15 at 11.18.28 AM.jpeg",
  "WhatsApp Image 2025-11-25 at 4.59.00 PM.jpeg",
  "WhatsApp Image 2025-12-05 at 5.21.16 PM.jpeg",
  "WhatsApp Image 2025-12-12 at 10.22.50 AM.jpeg"
];

function fileToUrl(filename) {
  return new URL("../assets/etnografia/" + filename, import.meta.url).href;
}

function getExt(filename) {
  var m = filename.match(/\.([a-zA-Z0-9]+)$/);
  if (!m) return "img";
  return m[1].toLowerCase();
}

function normalizeName(filename) {
  // Para búsqueda: minúsculas + sin dobles espacios + trim
  return filename.toLowerCase().replace(/\s+/g, " ").trim();
}

function prettifyLabel(filename) {
  // Quita extensión y limpia espacios para mostrarlo bonito
  var base = filename.replace(/\.[^/.]+$/, "");
  base = base.replace(/\s+/g, " ").trim();
  return base;
}

function Thumb(props) {
  var photo = props.photo;
  var onOpen = props.onOpen;

  return (
    <button
      type="button"
      className="ed-thumb"
      onClick={function () {
        onOpen(photo);
      }}
      aria-label={"Abrir foto: " + photo.title}
    >
      <div className="ed-thumb-media">
        <img
          src={photo.src}
          alt={photo.title}
          className="ed-thumb-img"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="ed-thumb-meta">
        <span className="ed-thumb-title">{photo.title}</span>
        <span className="ed-thumb-sub">{photo.ext.toUpperCase()}</span>
      </div>
    </button>
  );
}

function Modal(props) {
  var isOpen = props.isOpen;
  var photo = props.photo;
  var onClose = props.onClose;
  var onPrev = props.onPrev;
  var onNext = props.onNext;
  var indexLabel = props.indexLabel;
  // estado local para rotación (grados)
  var _React$useState = React.useState(0),
    rotation = _React$useState[0],
    setRotation = _React$useState[1];

  React.useEffect(
    function () {
      // al abrir o cambiar foto, reiniciamos rotación
      setRotation(0);
    },
    [isOpen, photo && photo.filename]
  );

  if (!isOpen || photo === null) return null;

  function rotateLeft() {
    setRotation(function (r) {
      return (r - 90 + 360) % 360;
    });
  }

  function rotateRight() {
    setRotation(function (r) {
      return (r + 90) % 360;
    });
  }

  return (
    <div className="ed-modal" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="ed-modal-content"
        onClick={function (e) {
          e.stopPropagation();
        }}
      >
        <div className="ed-modal-top">
          <div className="ed-modal-title">
            <p className="ed-modal-overline">Etnografía</p>
            <h2 className="ed-modal-h2">{photo.title}</h2>
            <p className="ed-modal-sub">{indexLabel}</p>
          </div>

          <div className="ed-modal-actions">
            <button type="button" className="ed-icon-btn" onClick={rotateLeft} aria-label="Rotar izquierda">
              ⟲
            </button>
            <button type="button" className="ed-icon-btn" onClick={rotateRight} aria-label="Rotar derecha">
              ⟳
            </button>
            <button type="button" className="ed-icon-btn" onClick={onPrev} aria-label="Anterior">
              ←
            </button>
            <button type="button" className="ed-icon-btn" onClick={onNext} aria-label="Siguiente">
              →
            </button>
            <button type="button" className="ed-close-btn" onClick={onClose} aria-label="Cerrar">
              ✕
            </button>
          </div>
        </div>

        <div className="ed-modal-media">
          <img
            src={photo.src}
            alt={photo.title}
            className="ed-modal-img"
            decoding="async"
            style={{ transform: "rotate(" + rotation + "deg)" }}
          />
        </div>

        <div className="ed-modal-foot">
          <span className="ed-foot-chip">{photo.filename}</span>
          <span className="ed-foot-hint">ESC para cerrar • ←/→ para navegar</span>
        </div>
      </div>
    </div>
  );
}

export default function EtnografiaDashboard() {
  var [query, setQuery] = useState("");
  var [visibleCount, setVisibleCount] = useState(24);

  var [isOpen, setIsOpen] = useState(false);
  var [activeIndex, setActiveIndex] = useState(-1);

  var photos = useMemo(function () {
    var arr = RAW_FILENAMES.slice(0);

    // Orden básico: primero por nombre normalizado (no cronológico real, pero consistente)
    arr.sort(function (a, b) {
      var na = normalizeName(a);
      var nb = normalizeName(b);
      if (na < nb) return -1;
      if (na > nb) return 1;
      return 0;
    });

    return arr.map(function (filename, idx) {
      return {
        idx: idx,
        filename: filename, // nombre original del archivo (mantener para mapping)
        originalTitle: prettifyLabel(filename), // título original legible
        title: "fotoEtnografica" + (idx + 1), // título mostrado secuencial
        ext: getExt(filename),
        src: fileToUrl(filename),
        searchKey: normalizeName(filename)
      };
    });
  }, []);

  var filtered = useMemo(function () {
    var q = query.toLowerCase().trim().replace(/\s+/g, " ");
    if (q.length === 0) return photos;

    return photos.filter(function (p) {
      return (
        p.searchKey.indexOf(q) !== -1 ||
        (p.originalTitle && p.originalTitle.toLowerCase().indexOf(q) !== -1)
      );
    });
  }, [photos, query]);

  var shown = useMemo(function () {
    return filtered.slice(0, visibleCount);
  }, [filtered, visibleCount]);

  var activePhoto = useMemo(function () {
    if (activeIndex < 0 || activeIndex >= filtered.length) return null;
    return filtered[activeIndex];
  }, [activeIndex, filtered]);

  function openPhoto(photo) {
    var i = 0;
    for (i = 0; i < filtered.length; i = i + 1) {
      if (filtered[i].filename === photo.filename) {
        setActiveIndex(i);
        break;
      }
    }
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function prev() {
    if (filtered.length === 0) return;
    var nextIndex = activeIndex - 1;
    if (nextIndex < 0) nextIndex = filtered.length - 1;
    setActiveIndex(nextIndex);
  }

  function next() {
    if (filtered.length === 0) return;
    var nextIndex = activeIndex + 1;
    if (nextIndex >= filtered.length) nextIndex = 0;
    setActiveIndex(nextIndex);
  }

  useEffect(function () {
    function onKeyDown(e) {
      if (!isOpen) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKeyDown);
    return function () {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, activeIndex, filtered]);

  useEffect(function () {
    setVisibleCount(24);
  }, [query]);

  var totalLabel = filtered.length;
  var showingLabel = shown.length;

  return (
    <main className="etnografia-dashboard-page">
      <header className="ed-hero">
        <p className="ed-overline">Archivo</p>
        <h1 className="ed-title">Fotos Etnográficas</h1>
        <p className="ed-intro">
          Registro visual de campo. Selecciona una foto para verla en detalle.
        </p>

        <div className="ed-toolbar">
          <div className="ed-search">
            <span className="ed-search-icon">⌕</span>
            <input
              className="ed-search-input"
              placeholder="Buscar (ej: 'univalle', 'caña', 'cop 16', 'WhatsApp'...)"
              value={query}
              onChange={function (e) {
                setQuery(e.target.value);
              }}
            />
          </div>

          <div className="ed-stats">
            <span className="ed-chip">
              Mostrando <b>{showingLabel}</b> de <b>{totalLabel}</b>
            </span>
          </div>
        </div>
      </header>

      <section className="ed-grid-wrap">
        <div className="ed-grid">
          {shown.map(function (p) {
            return <Thumb key={p.filename} photo={p} onOpen={openPhoto} />;
          })}
        </div>

        {showingLabel < totalLabel && (
          <div className="ed-loadmore">
            <button
              type="button"
              className="ed-loadmore-btn"
              onClick={function () {
                setVisibleCount(visibleCount + 24);
              }}
            >
              Cargar más
            </button>
            <p className="ed-loadmore-hint">Render por lotes para mantener fluidez.</p>
          </div>
        )}
      </section>

      <Modal
        isOpen={isOpen}
        photo={activePhoto}
        onClose={closeModal}
        onPrev={prev}
        onNext={next}
        indexLabel={
          activeIndex >= 0 && filtered.length > 0
            ? "Foto " + (activeIndex + 1) + " / " + filtered.length
            : ""
        }
      />
    </main>
  );
}
