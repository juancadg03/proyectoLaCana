// src/pages/contra-imagen.jsx
import React, { useMemo, useState } from "react";
import "./contra-imagen.css";

function buildImages(folder, prefix, start, end, ext) {
  var arr = [];
  var i = 0;

  for (i = start; i <= end; i = i + 1) {
    var filename = prefix + i + ext;
    var href = new URL("../assets/" + folder + "/" + filename, import.meta.url).href;
    arr.push({ src: href, alt: filename });
  }

  return arr;
}

function Section(props) {
  var title = props.title;
  var desc = props.desc;
  var images = props.images;
  var align = props.align;
  var accent = props.accent;
  var onSelect = props.onSelect;

  var sectionClass = "ci-section " + align;

  return (
    <section className={sectionClass}>
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
                onSelect(img.src, img.alt);
              }}
            >
              <img
                className="ci-img"
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

  var trabajadores = useMemo(function () {
    return buildImages("Foto ensayo", "fotoTrabajadores", 1, 14, ".jpg");
  }, []);

  var serigrafia = useMemo(function () {
    return buildImages("Serigrafia", "serigrafia_", 1, 6, ".jpg");
  }, []);

  var artivismo = useMemo(function () {
    return buildImages("Artivismo", "artivismo_", 1, 13, ".jpg");
  }, []);

  function closeModal() {
    setActiveImg(null);
    setActiveAlt("");
  }

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
          Una contra-imagen es esa imagen que lucha con otra sensibilidad, otro afecto, otra mirada…Es una respuesta crítica a las imágenes dominantes que han construido la realidad de cierta manera.
        </p>
      </header>

      <div className="ci-wrap">
        <Section
          title="Trabajadores"
          desc=" El paisaje cañero como un verde que pica, dinámicas de los trabajadores de caña, mucho sol y la brisa que llega. Una realidad a pie de la carretera de unos con ciertos  privilegios y por otro lado una cotidianidad para muchos."
          images={trabajadores}
          align="text-left"
          accent="accent-a"
          onSelect={function (src, alt) {
            setActiveImg(src);
            setActiveAlt(alt);
          }}
        />

        <Section
          title="Serigrafía"
          desc="Darle un rostro a un paisaje silenciado. Rastros de los paisajes porque detrás de cada verde hay huellas. Como una malla unas se ven otras quedan bloqueadas. Juego de traspasar la imagen. "
          images={serigrafia}
          align="text-right"
          accent="accent-b"
          onSelect={function (src, alt) {
            setActiveImg(src);
            setActiveAlt(alt);
          }}
        />

        <Section
          title="Artivismo"
          desc="El arte como forma de acción colectiva/política y el activismo en una forma de creación política. Porque en la ciudad las paredes también hablan y están en constante debate narrativo. "
          images={artivismo}
          align="text-left"
          accent="accent-c"
          onSelect={function (src, alt) {
            setActiveImg(src);
            setActiveAlt(alt);
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
            <button className="ci-modal-close" onClick={closeModal}>
              ✕
            </button>
            <img src={activeImg} alt={activeAlt} className="ci-modal-img" />
          </div>
        </div>
      )}
    </main>
  );
}
