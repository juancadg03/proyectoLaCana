// src/pages/Metodologia.jsx
import React from "react";
import "./metodologia.css";

const timelineItems = [
  {
    period: "1541–1721",
    title: "Llegada de la caña y primeros trapiches",
    text:
      "Sebastián de Belalcázar introduce la caña de azúcar en el Valle del Cauca. " +
      "Se fundan ingenios a orillas del río Amaime y, hacia 1721, funcionan decenas de trapiches en la región.",
  },
  {
    period: "Finales s. XVII – s. XVIII",
    title: "Haciendas de trapiche y mano de obra esclavizada",
    text:
      "Se consolidan las haciendas como unidad productiva. Trapiches con grandes extensiones de tierra, " +
      "ganadería y fuertes contingentes de mano de obra esclavizada para producir mieles y aguardiente.",
  },
  {
    period: "1851",
    title: "Abolición de la esclavitud y nueva servidumbre",
    text:
      "La abolición libera jurídicamente a las personas esclavizadas, pero mantiene intacta la estructura económica. " +
      "Las poblaciones negras son perseguidas y desplazadas para forzarlas a trabajar como jornaleras.",
  },
  {
    period: "Final s. XIX – inicios s. XX",
    title: "Haciendas, ingenios y expansión cañera",
    text:
      "Se consolidan haciendas como La María y proyectos agroindustriales como Manuelita. " +
      "Se refuerza el control de la tierra y la concentración del poder económico en pocas familias.",
  },
  {
    period: "1914",
    title: "Canal de Panamá y ferrocarril Cali–Buenaventura",
    text:
      "La apertura del Canal de Panamá y la conexión férrea con Buenaventura integran el Valle del Cauca " +
      "a rutas marítimas globales, facilitando la exportación de azúcar y otros productos.",
  },
  {
    period: "1928",
    title: "Granja Agrícola Experimental de Palmira",
    text:
      "Se impulsa la investigación agrícola y la modernización del cultivo, abriendo camino a un modelo " +
      "más tecnificado de producción cañera.",
  },
  {
    period: "Décadas de 1940–50",
    title: "Transformación industrial y nuevos ingenios",
    text:
      "El paisaje pasa del trapiche a los ingenios industriales. Surgen nuevos ingenios y figuras como " +
      "Ciro Molina Garcés, junto con políticas y estudios que reorganizan la agricultura del Valle.",
  },
  {
    period: "1950–1970",
    title: "Instituciones y disputas sociales",
    text:
      "Se crean entidades como ASOCAÑA, CVC, IMCA y CIAT. A la par, aparecen protestas de corteros de caña " +
      "y ferias que celebran la industria mientras se profundiza el conflicto social y territorial.",
  },
  {
    period: "1990s",
    title: "Ley 70, apertura económica y reconfiguración rural",
    text:
      "La Ley 70 reconoce derechos a comunidades negras, pero la apertura económica y el conflicto armado " +
      "reconfiguran la vida campesina y afrodescendiente en los territorios cañeros.",
  },
  {
    period: "2000s en adelante",
    title: "Etanol, paros de corteros y reservas campesinas",
    text:
      "La ley del etanol impulsa una nueva fase del monocultivo cañero. Paros de corteros en 2005 y 2008, " +
      "protestas sociales y propuestas de zonas de reserva campesina cuestionan el modelo extractivo " +
      "y abren caminos hacia la patrimonialización crítica del paisaje cultural cañero.",
  },
];

function Metodologia() {
  return (
    <main className="metodologia-page">
      <section className="metodologia-hero">
        <p className="metodologia-overline">Metodología</p>
        <h1 className="metodologia-title">
          Línea del tiempo del paisaje cultural cañero
        </h1>
        <p className="metodologia-intro">
          Esta línea del tiempo condensa los hitos históricos que enmarcan
          nuestro trabajo: desde la introducción de la caña y las haciendas
          de trapiche, hasta las luchas de los corteros, las políticas sobre
          el territorio y las propuestas recientes de patrimonialización.
        </p>
      </section>

      <section className="timeline-section">
        <div className="timeline-line" aria-hidden="true" />

        <div className="timeline-items">
          {timelineItems.map((item, index) => (
            <article
              key={item.period}
              className={
                "timeline-item " + (index % 2 === 0 ? "timeline-left" : "timeline-right")
              }
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-period">{item.period}</span>
                <h2 className="timeline-card-title">{item.title}</h2>
                <p className="timeline-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Metodologia;
