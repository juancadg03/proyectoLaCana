// src/pages/Vinetas.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./vinetas.css";

import imgPaisaje from "../assets/vinetas/Paisaje.jpeg";                  // paisaje cañero
import imgVerde from "../assets/vinetas/Distintos tonos de verdes.jpg";    // o Distintos tonos de verdes.jpg
import imgHablar from "../assets/vinetas/Hablar desde un lugar.jpg";
import imgBrisa from "../assets/vinetas/Cuando la brisa llega y el sol se queda.jpg"; 

const vinetas = [
  {
    id: "paisaje",
    title: "Paisaje cañero",
    subtitle: "Pensar la caña como paisaje y no solo como cultivo.",
    image: imgPaisaje,
  },
  {
    id: "distintos-tonos-de-verde",
    title: "Distintos tonos de verde",
    subtitle: "Viajes por el valle, semillas, montañas y otras ruralidades.",
    image: imgVerde,
  },
  {
    id: "hablar-desde-un-lugar",
    title: "Hablar desde un lugar",
    subtitle: "Cali como punto de enunciación del paisaje cañero.",
    image: imgHablar,
  },
  {
    id: "cuando-la-brisa-llega",
    title: "Cuando la brisa llega y el sol se queda",
    subtitle: "Adentrarse en la hacienda y ver lo que la velocidad oculta.",
    image: imgBrisa,
  },
];

function Vinetas() {
  return (
    <main className="vinetas-page">
      <section className="vinetas-hero">
        <p className="vinetas-overline">Viñetas etnográficas</p>
        <h1 className="vinetas-title">
          Mirar el paisaje cañero desde otros lugares
        </h1>
        <p className="vinetas-description">
          Estas viñetas reúnen fragmentos de viajes, conversaciones y
          escenas que permiten ver la caña y sus alrededores desde
          distintos verdes, cuerpos y memorias. Cada imagen abre una
          puerta a un texto más extenso.
        </p>
      </section>

      <section className="vinetas-grid">
        {vinetas.map((item) => (
          <article key={item.id} className="vineta-card">
            <div className="vineta-image-wrap">
              <img
                src={item.image}
                alt={item.title}
                className="vineta-image"
              />
            </div>

            <div className="vineta-body">
              <h2 className="vineta-card-title">{item.title}</h2>
              <p className="vineta-card-text">{item.subtitle}</p>

              <Link
                to={`/vinetas/${item.id}`}
                className="vineta-link"
              >
                Leer viñeta
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Vinetas;
