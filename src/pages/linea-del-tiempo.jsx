// src/pages/Metodologia.jsx
import React, { useEffect, useMemo, useState } from "react";
import "./metodologia.css";
import { Link, useLocation } from "react-router-dom";

/* =========================
   TIMELINE DATA
========================= */
const timelineItems = [
  {
    period: "1541",
    title: "Belalcázar introduce la caña en el Valle",
    text:
      "Sebastián de Belalcázar planta caña de azúcar en su estancia en Yumbo, marcando el inicio documentado del cultivo en el Valle del Cauca.",
  },
  {
    period: "1550–1588",
    title: "Primeros ingenios y comercio temprano",
    text:
      "En 1550 se fundan tres ingenios a orillas del río Amaime; en 1588 desde esta región se envían azúcar y miel hacia Panamá, articulando el Valle a circuitos comerciales coloniales.",
  },
  {
    period: "Finales s. XVII – s. XVIII",
    title: "Haciendas coloniales y trapiches",
    text: (
      <>
        Se consolida el sistema de haciendas (concentración de tierra y poder) y
        se fortalecen haciendas de trapiche (caña + ganadería). Para 1721 se
        estiman 33 trapiches, sostenidos principalmente por mano de obra
        esclavizada proveniente de regiones mineras del Chocó y el Pacífico. La
        demanda de mieles para aguardiente estimula la diversificación en torno a
        la caña{" "}
        <Link to="/archivos#refs-linea-del-tiempo" className="ref-inline">
          (Colmenares, 1983)
        </Link>
        .
      </>
    ),
  },
  {
    period: "1851",
    title: "Abolición de la esclavitud y continuidad estructural",
    text: (
      <>
        La abolición libera jurídicamente, pero no cambia la estructura: se
        persigue a negros libres para desplazarlos de sus tierras y forzarlos a
        trabajar para terratenientes, pasando “de la esclavitud del látigo a la
        esclavitud del jornal”{" "}
        <Link to="/archivos#refs-linea-del-tiempo" className="ref-inline">
          (Mina, 1975; Castaño Rico, 2016)
        </Link>
        .
      </>
    ),
  },
  {
    period: "1864",
    title: "Eder compra La Rita y Manuelita",
    text:
      "Santiago Henry Eder, tras viajes comerciales a Buenaventura, identifica el valle del río Cauca como oportunidad de inversión y compra en subasta en Cali las haciendas La Rita y Manuelita (trapiche del padre de Jorge Isaacs).",
  },
  {
    period: "1867",
    title: "Primer trapiche hidráulico",
    text:
      "Se registra el primer trapiche hidráulico, señalando una transición tecnológica temprana en el procesamiento de caña.",
  },
  {
    period: "1878–1882",
    title: "Ferrocarril del Pacífico e importaciones tecnológicas",
    text:
      "En 1878 inicia la construcción del Ferrocarril del Pacífico; en 1882 se inaugura y se expande por el Valle. Eder invierte en el ferrocarril y en importaciones tecnológicas para trapiches y haciendas azucareras.",
  },
  {
    period: "1901",
    title: "Primer molino a vapor",
    text:
      "Se introduce el primer molino a vapor, profundizando la mecanización y el aumento de capacidad industrial del sector azucarero.",
  },
  {
    period: "1910",
    title: "Creación del Departamento del Valle del Cauca",
    text:
      "El Valle del Cauca se separa del Cauca: élites de Cali y Buga impulsan la nueva entidad para ganar independencia política y promover proyectos regionales de “desarrollo”.",
  },
  {
    period: "1913",
    title: "Ministerio de Agricultura y Comercio",
    text: (
      <>
        Ley 25 del 8 de octubre de 1913 crea el Ministerio para impulsar la
        esfera agropecuaria: técnicas de cultivo, difusión técnico-científica,
        abonos, mejora de semillas e inversiones{" "}
        <Link to="/archivos#refs-linea-del-tiempo" className="ref-inline">
          (Bejarano, 1979)
        </Link>
        .
      </>
    ),
  },
  {
    period: "1914",
    title: "Canal de Panamá y salida a mercados globales",
    text:
      "La apertura del Canal de Panamá y la conexión férrea facilitan la salida directa a mercados internacionales: azúcar y otros productos circulan con mayor facilidad hacia EE. UU. y Europa.",
  },
  {
    period: "1928",
    title: "Estación Experimental Agrícola de Palmira",
    text: (
      <>
        Se crea la Estación Experimental Agrícola de Palmira, en la ola de granjas
        experimentales (Colombia desde 1916). Es impulsada por Ciro Molina Garcés
        (1926–1930), buscando aplicar el modelo norteamericano de gestión
        agrícola{" "}
        <Link to="/archivos#refs-linea-del-tiempo" className="ref-inline">
          (Sánchez Mejía &amp; Santos Delgado, 2025)
        </Link>
        .
      </>
    ),
  },
  {
    period: "1930",
    title: "Misión Chardón y variedades de caña",
    text: (
      <>
        Especialistas puertorriqueños trabajan en Palmira como laboratorio de
        prueba: orientan la producción regional al fortalecimiento de la caña y
        su articulación con industrialización, e introducen 15 variedades para
        mejorar rendimientos y adaptación{" "}
        <Link to="/archivos#refs-linea-del-tiempo" className="ref-inline">
          (Delgadillo &amp; Valencia, 2020)
        </Link>
        .
      </>
    ),
  },
  {
    period: "1930–1940",
    title: "Expansión industrial y nueva ola de ingenios",
    text:
      "Avances en manejo agrícola con apoyo científico en cultivo y producción; surge una primera ola de empresas cañeras que expanden la frontera industrial, amplían áreas de cultivo y consolidan nuevas familias empresariales.",
  },
  {
    period: "1935",
    title: "Virus del mosaico y caña POJ-2878",
    text:
      "Aparece el virus del mosaico que afecta el cultivo; se introduce la caña POJ-2878, que se expande y permanece sembrada hasta hoy.",
  },
  {
    period: "1935–1972",
    title: "Organización sindical en ingenios",
    text:
      "Se consolida el primer sindicato en Manuelita (legalizado en 1945) y se multiplican sindicatos: Riopaila (1944), Providencia (1945), Central Castilla (1954), Meléndez (1955), Papayal (1956), La Cabaña/La Carmelita/El Naranjo (1959), El Porvenir/Pichichí/Tumaco (1960), San Carlos (1963), Bengala (1969), y Cauca (1971–1972).",
  },
  {
    period: "1944",
    title: "ESAT y Revolución Verde",
    text:
      "Se crea la Escuela Superior de Agricultura Tropical del Valle del Cauca (ESAT), adscrita al Departamento, centrada en investigación en agricultura tropical bajo influencia de la Revolución Verde.",
  },
  {
    period: "1945",
    title: "Fundación de la Universidad del Valle",
    text: (
      <>
        Se funda Univalle: Tulio Ramírez proyecta una cultura académica ligada a
        desarrollo industrial y fomenta formación en ciencias, administración e
        ingenierías{" "}
        <Link to="/archivos#refs-linea-del-tiempo" className="ref-inline">
          (Castillo, 2020)
        </Link>
        .
      </>
    ),
  },
  {
    period: "1949",
    title: "Misión Currie y planeación estatal",
    text: (
      <>
        Primera misión del Banco Mundial (dirigida por asesor canadiense) propone
        la creación del Departamento Nacional de Planeación; estudia agricultura,
        transporte ferroviario y empleo{" "}
        <Link to="/archivos#refs-linea-del-tiempo" className="ref-inline">
          (Enciclopedia Banrepcultural, s.f.)
        </Link>
        .
      </>
    ),
  },
  {
    period: "Años 50",
    title: "Expansión del cultivo y aumento de corteros",
    text:
      "A medida que se expande el cultivo, crece también la cantidad de corteros de caña y la centralidad del trabajo manual en el modelo productivo.",
  },
  {
    period: "1954",
    title: "Misión Lilienthal y visión modernizadora",
    text: (
      <>
        David Lilienthal recomienda priorizar el Valle para un programa de
        desarrollo de recursos naturales, inspirado en modelos como la TVA, con
        visión tecnocrática y modernizadora del desarrollo regional{" "}
        <Link to="/archivos#refs-linea-del-tiempo" className="ref-inline">
          (Delgadillo &amp; Valencia, 2024)
        </Link>
        .
      </>
    ),
  },
  {
    period: "1954",
    title: "Creación de la CVC",
    text:
      "Se crea la Corporación Autónoma Regional del Valle del Cauca (CVC) para explotar/aprovechar cuencas e indagar potencial hidroeléctrico, en línea con estudios asociados a la Misión Lilienthal.",
  },
  {
    period: "1957",
    title: "Feria de Cali (antes Feria de la Caña)",
    text: (
      <>
        Se instituye la Feria de Cali, nacida como Feria de la Caña, articulando
        industria y celebraciones regionales{" "}
        <Link to="/archivos#refs-linea-del-tiempo" className="ref-inline">
          (TuBarco Noticias, 2023)
        </Link>
        .
      </>
    ),
  },
  {
    period: "1959",
    title: "Revolución cubana y reconfiguración del azúcar",
    text:
      "La Revolución cubana reordena alianzas con EE. UU.; como Cuba era el principal exportador, se abre oportunidad para impulsar la agroindustria cañera del Valle en mercados internacionales.",
  },
  {
    period: "1959",
    title: "Fundación de ASOCAÑA",
    text:
      "Se crea ASOCAÑA (Asociación de Cultivadores de Caña de Azúcar de Colombia) para articular productores y empresarios y promover la agroindustria en frentes tecnológicos, políticos y económicos.",
  },
  {
    period: "1961",
    title: "Reforma agraria y conflicto por la tierra",
    text:
      "Reforma agraria en gobierno de Lleras Restrepo en un contexto de conflicto social por la tierra en una de sus etapas más críticas.",
  },
  {
    period: "1962",
    title: "Universidad Campesina (UNCA) e IMCA",
    text: (
      <>
        Se funda en la hacienda La Julia la UNCA por iniciativa del padre
        Francisco Javier Mejía: modelo educativo alternativo a enfoques
        desarrollistas dominantes; con el tiempo deriva en el IMCA, activo en
        educación rural y sostenibilidad regional{" "}
        <Link to="/archivos#refs-linea-del-tiempo" className="ref-inline">
          (Malagón, 2015)
        </Link>
        .
      </>
    ),
  },
  {
    period: "1962",
    title: "Palmira se transforma en CIAT",
    text:
      "Con apoyo de la Fundación Rockefeller, la Estación Experimental de Palmira se convierte en CIAT, internacionalizando investigación y tecnificación agrícola y posicionando al Valle como nodo global de conocimiento tropical.",
  },
  {
    period: "1975",
    title: "Huelga sindical en Riopaila",
    text: (
      <>
        Gran huelga en Ingenio Riopaila: inicia por reclamo de aumento salarial
        de 100 pesos, escala a conflicto laboral y social de meses y es reprimida
        violentamente{" "}
        <Link to="/archivos#refs-linea-del-tiempo" className="ref-inline">
          (Sánchez Ángel, 2008)
        </Link>
        .
      </>
    ),
  },
  {
    period: "Años 80–2000",
    title: "Auge del narco-paramilitarismo",
    text:
      "Escalada de violencias y disputas armadas en el Valle; hechos como la masacre de Trujillo (1986–1994) marcan el periodo.",
  },
  {
    period: "1991",
    title: "Constitución del 91 y giro neoliberal",
    text:
      "La Constitución de 1991 trae cambios políticos y económicos; se intensifican agendas de neoliberalismo y libre comercio.",
  },
  {
    period: "1991",
    title: "Ley 10 y expansión de EAT",
    text:
      "Se profundiza cambio laboral: se implementan Empresas Asociativas de Trabajo (EAT) donde los corteros figuran como “asociados” y no empleados; los ingenios dejan de contratar directo y pagan el servicio de “corte de caña”.",
  },
  {
    period: "1993",
    title: "Ley 70 y defensa territorial NARP",
    text:
      "Ley 70 de 1993 reconoce derechos territoriales de comunidades negras, afrocolombianas, raizales y palenqueras (NARP), clave en defensas territoriales (especialmente en el norte del Cauca) frente a expansión del monocultivo.",
  },
  {
    period: "2001",
    title: "Ley del Etanol y giro energético",
    text:
      "Ley 693 de 2001 establece uso obligatorio de etanol carburante mezclado con gasolina (hasta 10%) para menor impacto ambiental y autosuficiencia energética; el etanol se vuelve producto clave tras fermentación y destilación del jugo de caña (incluye actualización posterior como Res. 4011 de 2021).",
  },
  {
    period: "2005",
    title: "EAT/CTA y detonante del paro",
    text:
      "Desde comienzos de los 2000, EAT y luego CTA transforman contratación: mayor flexibilidad jurídica, pero deslocalización, precarización y pérdida de derechos. Se intensifican reclamos y paros en ingenios como Pichichí e Incauca; 2005 marca el inicio del gran paro de corteros.",
  },
  {
    period: "2006",
    title: "Decreto 4588 y regulación de CTA",
    text:
      "El Decreto 4588 de 2006 regula formalmente las Cooperativas de Trabajo Asociado (CTA), que venían expandiéndose en el sector agro desde inicios de los 2000.",
  },
  {
    period: "2008",
    title: "Paro de corteros: “machetes caídos”",
    text: (
      <>
        Paro masivo en el Valle por condiciones laborales precarias, salarios
        bajos y tercerización vía cooperativas que despoja derechos; visibiliza
        la explotación en la agroindustria azucarera{" "}
        <Link to="/archivos#refs-linea-del-tiempo" className="ref-inline">
          (Montoya, 2011)
        </Link>
        .
      </>
    ),
  },
  {
    period: "2024",
    title: "ZRC Pradera y Tuluá (COP16 Cali)",
    text:
      "Durante la COP16 en Cali se declaran dos Zonas de Reserva Campesina (Pradera y Tuluá). Bajo la Ley 160 de 1994, son instrumentos de ordenamiento rural para garantizar acceso a tierra campesina y promover desarrollo sostenible/alternativo.",
  },
  {
    period: "2024",
    title: "Debate por “paisaje cultural” cañero",
    text:
      "Desde la Alcaldía de Candelaria y con apoyo de actores políticos se propone declarar el paisaje cañero como paisaje cultural, generando polémica y discusión pública en el Valle del Cauca.",
  },
];

function LineaDelTiempo() {
  const location = useLocation();

  // Si en tu archivo original existen axes, FigureBlock, AxisArticle, etc.,
  // déjalos arriba y esto seguirá funcionando.
  const [activeAxis, setActiveAxis] = useState(null);

  // Si axes no existe en tu proyecto, quita estas 2 líneas.
  // (No afecta la línea del tiempo, pero evita error "axes is not defined".)
  const axes = useMemo(() => [], []);
  const selected = useMemo(
    () => (activeAxis ? axes.find((a) => a.id === activeAxis) : null),
    [activeAxis, axes]
  );

  /* =========================
     INTERSECTION OBSERVER
  ========================= */
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
          else entry.target.classList.remove("in-view");
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      }
    );

    items.forEach((it, idx) => {
      it.style.setProperty("--delay", `${(idx % 6) * 80}ms`);
      observer.observe(it);
    });

    return () => observer.disconnect();
  }, []);

  /* =========================
     SCROLL TO HASH
  ========================= */
  useEffect(() => {
    if (location && location.hash) {
      const id = location.hash.replace("#", "");
      // un pequeño delay para asegurar que el DOM ya renderizó
      window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [location]);

  return (
    <main className="metodologia-page">
      {/* ================= TIMELINE ================= */}
      <section className="metodologia-hero metodologia-hero--afterBillboard">
        <h1 className="metodologia-title">
          Línea del tiempo del paisaje cultural cañero
        </h1>
      </section>

      <section className="timeline-section">
        <div className="timeline-line" />
        <div className="timeline-items">
          {timelineItems.map((item, index) => (
            <article
              key={`${item.period}-${index}`}
              className={
                "timeline-item " +
                (index % 2 === 0 ? "timeline-left" : "timeline-right")
              }
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-period">{item.period}</span>
                <h2>{item.title}</h2>

                {/* Esto soporta string o JSX (fragment con <Link/>) */}
                <p className="timeline-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
export default LineaDelTiempo;