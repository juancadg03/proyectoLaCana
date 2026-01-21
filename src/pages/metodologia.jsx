// src/pages/Metodologia.jsx
import React, { useMemo, useState, useEffect } from "react";
import "./metodologia.css";
import TalleresColaborativosSection from "../components/TalleresColaborativosSection";
import vallaImg from "../assets/valla.png";
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


/* =========================
   FIGURAS (ARCHIVO + NOTA)
   Carpeta esperada: src/assets/figuras/
========================= */
const figureMeta = {

  // 1 (Transformación - general)
  "Figura1-1.png": {
    figLabel: "Figura 1. Incauca",
    note:
      "Nota. Imagen publicada por Incauca [@incauca.co] en Instagram, el 18 de agosto de 2025. https://www.instagram.com/p/DNgJnNqtvI8/",
  },

  // 1.1 Cuidado
  "Figura2-1.1-Cuidado_1.png": {
    figLabel: "Figura 2. Portada sitio web de Manuelita",
    note:
      "Nota. Imagen publicada en el sitio web de Manuelita. s. f. https://www.manuelita.com/",
  },
  "Figura3-1.1-Cuidado_2.png": {
    figLabel: "Figura 3. Storie destacada “Somos azúcar…”",
    note:
      "Nota. Imagen publicada por Asocaña [@asocanaoficial] en Instagram, el 12 de noviembre de 2021. https://www.instagram.com/stories/highlights/18129181459117559/",
  },
  "Figura4-1.1-Cuidado_3.png": {
    figLabel: "Figura 4. Video “En estos campos crece más que caña “",
    note:
      "Nota. Video publicado por Asocaña [@asocanaoficial] en Instagram, el 4 de noviembre de 2024. https://www.instagram.com/reel/DB9tGwGyLYB/",
  },

  // 1.2 Economía circular
  "Figura5-1.2-Economia-circular_1.jpeg": {
    figLabel: "Figura 5. Presentación de Asocaña en la Semana de la Biodiversidad",
    note: "Nota. Fotografía de Gabriela Cobo, Cali, octubre de 2025.",
  },
  "Figura6-1.2-Economia-circular_2.png": {
    figLabel: "Figura 6. Uso del bagazo en Manuelita",
    note:
      "Nota. Imagen publicada por Manuelita [@manuelitaagroindustria] en Instagram, el 24 de mayo de 2025. https://www.instagram.com/p/DKC_KPMuS4C/",
  },

  // 1.3 Responsabilidad social
  "Figura7-1.3-Responsabilidad-social_1.png": {
    figLabel: "Figura 7. Convenio Asocaña–MinAgricultura",
    note:
      "Nota. Imagen publicada por Asocaña [@asocanaoficial] en Instagram, el 29 de septiembre de 2025.  https://www.instagram.com/p/DPM1fnXkh5b/",
  },
  "Figura8-1.3-Responsabilidad-social_2.png": {
    figLabel: "Figura 8. Programas comunitarios de Manuelita",
    note:
      "Nota. Imagen publicada por Manuelita [@manuelitaagroindustria] en Instagram, el 29 de agosto de 2025. https://www.instagram.com/p/DN9EFUKEeQ5/",
  },
  "Figura9-1.3-Responsabilidad-social_3.png": {
    figLabel: "Figura 9. Portada sitio web Fundación Caicedo González Riopaila Castilla",
    note:
      "Nota. Imagen publicada en el sitio web de la FCGRC. s. f. https://fcgriopailacastilla.org/site/",
  },

  // 1.4 Cercanía
  "Figura10-1.4-Cercania_1.png": {
    figLabel: "Figura 10. Petronio Álvarez – Asocaña",
    note:
      "Nota. Imagen publicada por Asocaña [@asocanaoficial] en Instagram, el 8 de agosto de 2025. https://www.instagram.com/p/DNGSugcp6EP/",
  },
  "Figura11-1.4-Cercania_2.png": {
    figLabel: "Figura 11. Stand de Asocaña en el Petronio",
    note:
      "Nota. Imagen publicada por Asocaña [@asocanaoficial] en Instagram, el 13 de agosto de 2025. https://www.instagram.com/p/DNTKjfaPez1/",
  },
  "Figura12-1.4-Cercania_3.png": {
    figLabel: "Figura 12. Fotografía en Petronio publicada por Alejandro Eder",
    note:
      "Nota. Imagen publicada por Alejandro Eder [@alejoeder] en Instagram, el 18 de agosto de 2025. https://www.instagram.com/p/DNggAt-p09b/",
  },

  // 2 (Identitario - general)
  "Figura13-2.jpeg": {
    figLabel: "Figura 13. Valla en Cali",
    note: "Nota. Fotografía de Joshua Ruiz, Cali, diciembre de 2025.",
  },

  // 2.1 Caña-Azúcar
  "Figura14-2.1Cana-Azucar_1.jpeg": {
    figLabel: "Figura 14. Letrero en el Festival Petronio",
    note: "Nota. Fotografía de Gabriela Cobo, Cali, octubre de 2025.",
  },
  "Figura15-2.1_Cana-Azucar_2.webp": {
    figLabel: "Figura 15. Museo de la Caña de Azúcar",
    note:
      "Nota. Fotografía de M. Ríos, publicada el 22 de mayo de 2019 en OurGuía. https://www.ourguia.com/blog/museo-de-la-cana-de-azucar",
  },
  "Figura16-2.1_Cana-Azucar_3.png": {
    figLabel: "Figura 16. “No mires los comentarios”",
    note:
      "Nota. Imagen publicada por Providencia [@providencia.col] en Instagram, el 26 de noviembre de 2025. https://www.instagram.com/p/DRh_xUFjWrb/",
  },

  // 2.2 Historia del desarrollo de la región
  "Figura17-2.2-Historia-de-desarrollo-de-la-region_1.png": {
    figLabel: "Figura 17. Mujeres en la agroindustria Manuelita",
    note:
      "Nota. Imagen publicada por Manuelita [@manuelitaagroindustria] en Instagram, el 13 de marzo de 2025. https://www.instagram.com/p/DHKC6IXuCyw/",
  },
  "Figura18-2.2_Historiadedesarrollodelaregion_2.png": {
    figLabel: "Figura 18. 84 años del Ingenio Pichichí",
    note:
      "Nota. Imagen publicada por Ingenio Pichichí [@ingenio_pichichi] en Instagram, el 1 de abril de 2025. https://www.instagram.com/p/DH54bZYxvxm/",
  },

  // 2.3 Fiesta
  "Figura19-2.3-Fiesta_1.png": {
    figLabel: "Figura 19. Fiesta del Pacífico – Asocaña",
    note:
      "Nota. Imagen publicada por Asocaña [@asocanaoficial] en Instagram, el 17 de agosto de 2025. https://www.instagram.com/p/DNeoy1uuIOs/",
  },
  "Figura20-2.3-Fiesta_2.png": {
    figLabel: "Figura 20. Ingenios Mayagüez y San Carlos en el Petronio",
    note:
      "Nota. Imagen publicada por Ingenio Mayagüez [@ingeniomayaguez] e Ingenio San Carlos [@ingeniosancarlos] en Instagram, el 12 de agosto de 2025. https://www.instagram.com/p/DNRtGcOpE63/",
  },
  "Figura21-2.3Fiesta_3.png": {
    figLabel: "Figura 21. Padrinos y ahijados Manuelita",
    note:
      "Nota. Imagen publicada por Manuelita [@manuelitaagroindustria] en Instagram, el 29 de junio de 2024. https://www.instagram.com/p/C8zXe8AMGLJ/",
  },

  // 3 (Progreso - general)
  "Figura22-3.png": {
    figLabel: "Figura 22. “Donde hay caña hay progreso”",
    note:
      "Nota. Imagen publicada por Asocaña [@asocanaoficial] en Instagram, el 20 de agosto de 2025. https://www.instagram.com/p/DNlTK9qT0lQ/",
  },

  // 3.1 Gran apoyo económico
  "Figura23-3.1Granapoyoeconomico_1.png": {
    figLabel: "Figura 23. Desarrollo del Suroccidente – Manuelita",
    note:
      "Nota. Imagen publicada por Manuelita [@manuelitaagroindustria] en Instagram, el 8 de noviembre de 2025. https://www.instagram.com/p/DP9rRJ_EWVk/",
  },
  "Figura24-3.1Granapoyoeconomico_2.png": {
    figLabel: "Figura 24. “Somos Corazón de Caña”",
    note:
      "Nota. Imagen publicada por Manuelita [@manuelitaagroindustria] en Instagram, el 8 de noviembre de 2025. https://www.instagram.com/p/DQzzjH1kTbU/",
  },

  // 3.2 Empleo
  "Figura25-3.2Empleo_1.png": {
    figLabel: "Figura 25. Empresa destacada – Manuelita",
    note:
      "Nota. Imagen publicada por Manuelita [@manuelitaagroindustria] en Instagram, el 8 de octubre de 2025. https://www.instagram.com/p/DPj-g3pkXpn/",
  },
  "Figura26-3.2Empleo_2.png": {
    figLabel: "Figura 26. Trabajo y futuro en la agroindustria",
    note:
      "Nota. Imagen publicada por Asocaña [@asocanaoficial] en Instagram, el 8 de septiembre de 2025. https://www.instagram.com/p/DOWEH43E2UG/",
  },
  "Figura27-3.2Empleo_3.png": {
    figLabel: "Figura 27. “Aquí crecemos todos” – Ingenio Mayagüez",
    note:
      "Nota. Imagen publicada por Ingenio Mayagüez [@ingeniomayaguez] en Instagram, el 29 de mayo de 2025. https://www.instagram.com/p/DKQHwKXpars/",
  },

  // 3.3 Tecnología y avance
  "Figura28-3.3Tecnologiayavance_1.png": {
    figLabel: "Figura 28. Conexiones económicas en municipios cañeros",
    note:
      "Nota. Imagen publicada por Asocaña [@asocanaoficial] en Instagram, el 10 de septiembre de 2025. https://www.instagram.com/p/DOb7ELrE727/",
  },
  "Figura29-3.3Tecnologiayavance_2.png": {
    figLabel: "Figura 29. Montaje de planta de cogeneración – Pichichí",
    note:
      "Nota. Video publicado por Ingenio Pichichí [@ingenio_pichichi] en Instagram, el 25 de septiembre de 2025. https://www.instagram.com/reel/DPCgVs5EgVU/",
  },

  // 3.4 Paisaje
  "Figura30-3.4Paisaje_1.png": {
    figLabel: "Figura 30. Paisaje cañero al atardecer",
    note:
      "Nota. Imagen publicada por Asocaña [@asocanaoficial] en Instagram, el 5 de agosto de 2025. https://www.instagram.com/p/DM-gtTivrVd/",
  },
  "Figura31-3.4Paisaje_2.png": {
    figLabel: "Figura 31. Inspiración Ghibli – Mayagüez",
    note:
      "Nota. Imagen publicada por Ingenio Mayagüez [@ingeniomayaguez] en Instagram, el 30 de marzo de 2025. https://www.instagram.com/p/DH1TBqhJw3D/",
  },

  // 4 (Socioambiental - general)
  "Figura32-4.avif": {
    figLabel: "Figura 32. Atmósferas – William Narváez Cedeño",
    note:
      "Nota. Obra publicada por W. Narváez Cedeño, 2014–2016. https://williamnarvaezc.wixsite.com/william-narvaez/atmosferas",
  },

  // 4.1 Tierra
  "Figura33-4.1Tierra_1.jpg": {
    figLabel: "Figura 33. Grafiti en Avenida de las Américas, Cali",
    note: "Nota. Fotografía de Gabriela Cobo, septiembre de 2025.",
  },
  "Figura34-4.1Tierra_2.png": {
    figLabel: "Figura 34. Video “El monocultivo de caña en el Valle”",
    note:
      "Nota. Video publicado por J. Acosta en Facebook, el 28 de octubre de 2024. https://www.facebook.com/watch/?v=583164404145383",
  },
  "Figura35-4.1Tierra_3.png": {
    figLabel: "Figura 35. Mural “¡Caña no más!”",
    note:
      "Nota. Fotografía publicada por E. Possú en CESYCMÉ, el 12 de noviembre de 2019. http://cesycme.org/index.php/2019/11/12/caravana-artivista-por-el-cauca-encuentros-interculturales-por-la-defensa-de-la-vida-y-el-territorio/",
  },

  // 4.2 Agua
  "Figura36-4.2Agua_1.jpeg": {
    figLabel: "Figura 36. Afiche por el cuidado del agua",
    note:
      "Nota. Fotografía de Gabriela Cobo, Universidad del Valle, octubre de 2025.",
  },
  "Figura37-4.2Agua_2.png": {
    figLabel: "Figura 37. Enramada — Despojo de tierras y aguas",
    note:
      "Nota. Imagen publicada por Enramada [@en_ramada] en Instagram, el 21 de octubre de 2024. https://www.instagram.com/p/DBZw3v4St5r/",
  },

  // 4.3 Quemas
  "Figura38-4.3Quemas_1.jpg": {
    figLabel: "Figura 38. Mural calle de la Escopeta",
    note: "Nota. Fotografía de Gabriela Cobo, Cali, septiembre de 2025.",
  },
  "Figura39-4.3Quemas_2.jpg": {
    figLabel: "Figura 39. Fotograma “La tierra y la sombra”",
    note:
      "Nota. Fotograma publicado por Proimágenes Colombia, 2015. https://www.proimagenescolombia.com/.../pelicula_plantilla.php?id_pelicula=2116",
  },

  // 4.4 Laboral
  "Figura40-4.4Laboral_1.png": {
    figLabel: "Figura 40. Video “Corteros de caña (22.000 machetazos)”",
    note:
      "Nota. Video publicado por Producción Agrícola Vallecaucana en YouTube, el 4 de enero de 2020. https://www.youtube.com/watch?v=K_ea7ntPh3Q",
  },
  "Figura41-4.4Laboral_2.jpg": {
    figLabel: "Figura 41. Fotograma del documental “Corta”",
    note:
      "Nota. Fotograma publicado por Proimágenes Colombia, dirigido por F. Guerrero, 2014. https://www.proimagenescolombia.com/.../pelicula_plantilla.php?id_pelicula=2012",
  },
  "Figura42-4.4Laboral_3.jpg": {
    figLabel: "Figura 42. Mural en Guacarí",
    note: "Nota. Fotografía de Gabriela Cobo, agosto de 2025.",
  },

  // 5 (Disputa - general)
  "Figura43-5.png": {
    figLabel: "Figura 43. Portada del informe “No todo lo verde es biodiverso”",
    note:
      "Nota. Imagen publicada por Forest Peoples Programme, Palenke Alto Cauca y Enramada, en 2024. https://www.forestpeoples.org/.../no-todo-lo-verde-es-biodiverso…",
  },

  // 5.1
  "Figura44-5.1Elamargosaberdelazucar_1.jpg": {
    figLabel: "Figura 44. Afiche callejero en Cali",
    note: "Nota. Fotografía de Gabriela Cobo, septiembre de 2025.",
  },
  "Figura45-5.1Elamargosaberdelazucar_2.gif": {
    figLabel: "Figura 45. “Amargo sabor a caña: masacre de Llano Verde”",
    note:
      "Nota. Imagen principal del artículo publicada por D. Rey en Infobae, el 28 de agosto de 2022. https://www.infobae.com/.../amargo-sabor-a-cana…",
  },

  // 5.2
  "Figura46-5.2Masalladelacana,otrospaisajes_1.webp": {
    figLabel: "Figura 46. Infografía “Impactos negativos de la industria cañera”",
    note: "Nota. Imagen publicada por MUTANTE, 2024. https://mutante.org/.../impactos-negativos-de-la-industria…",
  },
  "Figura47-5.2Masalladelacana,otrospaisajes_2.webp": {
    figLabel: "Figura 47. Póster “Cali es Cali y también es Loma”",
    note:
      "Nota. Imagen publicada por La Linterna Cali. s. f. https://lalinternacali.com/producto/cali-es-cali-y-tambien-es-loma-1-2/",
  },
  "Figura48-5.2Masalladelacana,otrospaisajes_4.jpg": {
    figLabel: "Figura 48. Grafiti en Universidad del Valle",
    note: "Nota. Fotografía de Gabriela Cobo, septiembre de 2025.",
  },
  "Figura49-5.2Masalladelacana,otrospaisajes_4.png": {
    figLabel: "Figura 49. “Desiertos verdes” – India Taller",
    note:
      "Nota. Imagen publicada por India Taller [@india.taller] en Instagram, el 18 de noviembre de 2024. https://www.instagram.com/p/DChUpDkRmAw/",
  },

  // 5.3
  "Figura50-5.3.Desenmascararelpoder_1.webp": {
    figLabel: "Figura 50. Infografía “Azúcar: los números de una industria…”",
    note:
      "Nota. Imagen publicada por A. Pik en Vorágine, el 13 de enero de 2022. https://voragine.co/historias/infografia/azucar-los-numeros…",
  },
  "Figura51-5.3Desenmascararelpoder_2.jpg": {
    figLabel: "Figura 51. Grafiti en Universidad del Valle",
    note: "Nota. Fotografía de Gabriela Cobo, septiembre de 2025.",
  },
  "Figura52-5.3Desenmascararelpoder_3.jpg": {
    figLabel: "Figura 52. Afiche en Cali",
    note: "Nota. Fotografía de Gabriela Cobo, agosto de 2025.",
  },
};

/* =========================
   helpers
========================= */
function figSrc(fileName) {
  // Vite / bundlers modernos:
  return new URL(`../assets/figuras/${fileName}`, import.meta.url).href;
}

function FigureBlock({ files = [] }) {
  if (!files || files.length === 0) return null;

  return (
    <div className="axis-figures">
      {files.map((file) => {
        const meta = figureMeta[file];
        const label = meta?.figLabel || file;
        const note = meta?.note || "";

        return (
          <figure key={file} className="axis-figure">
            <img className="axis-figure-img" src={figSrc(file)} alt={label} />
            <figcaption className="axis-figure-cap">
              <span className="axis-figure-title">{label}</span>
              {note ? <span className="axis-figure-note">{note}</span> : null}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

/* Bloque “artículo” (2 columnas) para cada punto */
function AxisArticle({ children }) {
  return <div className="axis-article">{children}</div>;
}

/* =========================
   COMPONENT
========================= */
function Metodologia() {
  const axes = useMemo(
    () => [
      {
        id: "transformacion",
        label: "1. Transformación",
        pos: { top: "28%", left: "25%" },
        content: (
          <AxisArticle>
            <h3 className="axis-title">1. Transformación</h3>
            <FigureBlock files={["Figura1-1.png"]} />

            <p className="axis-text">
              En este eje aparece una narrativa que presenta a la industria cañera como un sector transformado, distinto de su pasado y de otras actividades extractivas. Se muestra como una agroindustria con conciencia ambiental y social, proyectada como moderna, responsable y alineada con los valores contemporáneos de sostenibilidad. Este discurso, marcado por tonos verdes y azules, cifras y expresiones de compromiso, puede leerse como un ejercicio de <em>greenwashing</em> hasta <em>social washing</em> <sup><a href="#fn4" id="ref-4" className="footnote-ref">4</a></sup>, donde la sostenibilidad se narra y se escenifica.
            </p>

            <p className="axis-text">
              La idea central es la transformación hacia el futuro: una industria que “aprende”, corrige, innova y se adapta a los lenguajes globales de desarrollo sostenible. Desde los estudios críticos del desarrollo, esta narrativa se relaciona con lo que Arturo Escobar denomina regímenes de verdad del desarrollo<sup><a href="#fn5" id="ref-5" className="footnote-ref">5</a></sup> (<Link to="/archivos#refs-analisis-narrativo" className="ref-inline">Escobar, 2007</Link>), donde los problemas generados por el modelo productivo se reinterpretan como oportunidades de mejora sin cuestionar la estructura que los produce.
            </p>

            <h4 className="axis-subtitle">1.1 Cuidado</h4>
            <FigureBlock
              files={[
                "Figura2-1.1-Cuidado_1.png",
                "Figura3-1.1-Cuidado_2.png",
                "Figura4-1.1-Cuidado_3.png",
              ]}
            />

            <p className="axis-text">
              La industria se presenta a sí misma como protectora del medio ambiente y de la biodiversidad. Para hacerlo, recurre a estrategias discursivas que responden directamente a las críticas sociales. Una de las más comunes son las preguntas retóricas como “¿Es verdad que la caña contamina?" seguidas de explicaciones técnicas que minimizan el impacto o lo reinterpretan como controlable. A esto se suman afirmaciones performativas como “somos biodiversidad” o “cuidamos el medio ambiente”, que buscan convertir en verdad aquello que se enuncia.
            </p>

            <p className="axis-text">
              Las narrativas se acompañan de imágenes de fauna y flora, tonos verdes predominantes y frases como “la industria cañera cuida” o “estamos comprometidos con…”. Todo esto configura un marco visual y verbal centrado en transmitir responsabilidad ambiental.
            </p>

            <p className="axis-text">
              Los mensajes suelen apoyarse en cifras, certificaciones, tecnicismos y reconocimientos, recursos que, según la teoría del discurso, ayudan a legitimar una posición de autoridad y producir un efecto de verdad. Los principales emisores son Asocaña y los ingenios, actores que controlan la narrativa institucional y pueden hablar desde una posición privilegiada.
            </p>

            <p className="axis-text">
              Al observar este discurso, se evidencia cómo la industria busca posicionarse como un actor ambientalmente consciente, en línea con lo que Escobar<sup><a href="#fn6" id="ref-6" className="footnote-ref">6</a></sup> describe sobre sectores que adoptan lenguajes ambientales para reforzar su legitimidad. El objetivo no es negar los avances técnicos, sino señalar la tensión entre esos logros y los límites estructurales de un cultivo extensivo que transforma profundamente los ecosistemas.
            </p>

            <h4 className="axis-subtitle">1.2. Industria circular</h4>
            <FigureBlock
              files={[
                "Figura5-1.2-Economia-circular_1.jpeg",
                "Figura6-1.2-Economia-circular_2.png",
              ]}
            />

            <p className="axis-text">
              La industria se describe como “circular”, capaz de reutilizar sus residuos, producir energía, avanzar hacia el “carbono cero” y sostenerse dentro de un ciclo productivo autosuficiente. Esta narrativa se apoya en datos, gráficos y lenguaje técnico, reforzando la imagen de una agroindustria moderna e innovadora.
            </p>

            <p className="axis-text">
              La idea de circularidad se vincula a la economía circular, un modelo que —según sus críticos— se presenta como alternativo, pero que en realidad mantiene las mismas estructuras extractivas, solo que más eficientes. La insistencia en porcentajes y tecnicismos contribuye a una retórica tecnocrática que legitima a la industria como alineada con las agendas globales de sostenibilidad.
            </p>

            <p className="axis-text">
              Un recurso estratégico central es el uso del término soberanía, especialmente en relación con la generación de energía. Los ingenios afirman que su capacidad de producir energía fortalece la independencia de la región e incluso del país. En un contexto marcado por disputas por el uso del suelo, tensiones por el agua y debates sobre soberanía energética y alimentaria, esta palabra adquiere un peso simbólico significativo. Así, la industria no solo se muestra como eficiente, sino como garante de estabilidad territorial y autonomía energética.
            </p>

            <h4 className="axis-subtitle">1.3. Responsabilidad social</h4>
            <FigureBlock
              files={[
                "Figura7-1.3-Responsabilidad-social_1.png",
                "Figura8-1.3-Responsabilidad-social_2.png",
                "Figura9-1.3-Responsabilidad-social_3.png",
              ]}
            />

            <p className="axis-text">
              Se construye la imagen de una industria que no solo impulsa el desarrollo económico, sino que además “apoya” a comunidades vulnerables. Las acciones se presentan como gestos solidarios hacia familias agricultoras, instituciones educativas o deportistas, funcionando como un lavado de imagen social. La narrativa desplaza cualquier referencia a desigualdad estructural y la sustituye por relaciones de acompañamiento y ayuda vertical.
            </p>

            <p className="axis-text">
              Las páginas web destacan constantemente noticias de fundaciones, donaciones, incentivos y talleres con niños y niñas, reforzando una estética de gratitud y bienestar. Fotografías de sonrisas, certificados o entregas de mercados operan como evidencias visuales del compromiso social. La similitud entre los menús y secciones de todos los ingenios sugiere una estandarización del discurso, como si existiera un guion comunicacional compartido.
            </p>

            <p className="axis-text">
              Dentro de los programas de “compromiso social”, la industria enfatiza su apoyo a mercados campesinos, emprendimientos y pequeñas empresas. Estas acciones se presentan como parte de una responsabilidad ampliada, destinada a fortalecer el tejido productivo regional y mostrar que su alcance va más allá de la producción de caña.
            </p>

            <p className="axis-text">
              No se trata de negar la existencia ni los efectos concretos de estos apoyos, sino de observar cómo son comunicados y desde qué visión se formulan. En muchos casos, se trata de intervenciones que responden más a una lógica desarrollista y superficial que a las necesidades reales del territorio: por ejemplo, promover emprendimientos cuando existen problemáticas más urgentes, o construir canchas deportivas en veredas con dificultades de movilidad<sup><a href="#fn6" id="ref-6" className="footnote-ref">6</a></sup>. Estas acciones se presentan como pruebas de un compromiso profundo, reforzando la idea de que la industria es un actor social indispensable. Al hacerlo, suaviza la percepción pública sobre su poder económico y territorial.
            </p>

            <h4 className="axis-subtitle">1.4 Cercanía</h4>
            <FigureBlock
              files={[
                "Figura10-1.4-Cercania_1.png",
                "Figura11-1.4-Cercania_2.png",
                "Figura12-1.4-Cercania_3.png",
              ]}
            />

            <p className="axis-text">
              Este sub-eje complementa la responsabilidad social, pero enfatiza en la construcción de una industria “cercana al pueblo”, integrada a la vida cotidiana de la región. Pequeños gestos como participar en eventos culturales (Petronio Álvarez, la Feria de Cali, la COP16, la Semana de la Biodiversidad) o aparecer en publicaciones de autoridades locales buscan mostrar una conexión afectiva, no solo económica.
            </p>

            <p className="axis-text">
              Esta narrativa intenta reducir la distancia histórica entre la élite cañera y el resto de la población, aunque en la práctica mantiene una estructura de poder. Los ingenios buscan romper la idea de que la industria cañera pertenece sólo a unas pocas familias. Allí se presenta una narrativa donde la industria ya no es de los “dueños tradicionales” sino parte de la región, un actor cotidiano y accesible.
            </p>

            <p className="axis-text">
              Esta estrategia construye cercanía: integra a la gente dentro de la vida industrial, los hace partícipes de una identidad regional que se asocia con progreso, biodiversidad, tradición y trabajo. En esa operación simbólica, la industria no solo produce azúcar; produce un sentido de pertenencia y de normalidad, donde la caña se vuelve paisaje naturalizado y su presencia en la vida diaria parece obvia, estable, inevitable.
            </p>

            <p className="axis-text axis-close">
             Las narrativas de transformación de la industria cañera construyen una imagen de sostenibilidad que, aunque se apoya en ciertos avances reales, también magnífica estos logros y atenúa los impactos estructurales del monocultivo. El uso de lenguajes verdes, cifras y estéticas ambientalizadas produce la sensación de una industria “ya cambiada”, a pesar de las tensiones socio ecológicas señaladas por comunidades del Valle y Cauca. En este marco, estas narrativas operan como formas de greenwashing (y en algunos casos social washing<sup><a href="#fn7" id="ref-7" className="footnote-ref">7</a></sup>) al convertir acciones puntuales de cuidado ambiental o apoyo comunitario en pruebas de responsabilidad ampliada. Iniciativas sociales y culturales se integran en un relato donde los ingenios aparecen como aliados del territorio, aun cuando persisten críticas sobre el uso de la tierra, el agua y los efectos socioambientales del monocultivo.
            </p>

            <div className="metodologia-footnotes" aria-label="Notas al pie">
              <hr />
              <ol start={3}>
                <li id="fn3">
                   Greenwashing, “las estrategias publicitarias que algunas compañías utilizan para presentarse, a ellas y sus productos, como respetuosas con el medioambiente, cuando no lo son”. Definición de GreenPeace. <a href="#ref-3" className="footnote-back">↩</a>
                </li>
                <li id="fn4">
                   Social washing, “cómo algunas organizaciones pretenden ser más sociales de lo que realmente son, con el único fin de proyectar una imagen positiva sin respaldarla con acciones genuinas”. Cita de Funiber. <a href="#ref-4" className="footnote-back">↩</a>
                </li>
                <li id="fn5">
                   Según Arturo Escobar se entiende los  regímenes de verdad del desarrollo como los discursos del desarrollo que generan una comprensión e imaginarios de la naturaleza y especialmente en los paisajes considerados tercer mundo.  <a href="#ref-5" className="footnote-back">↩</a>
                </li>
                <li id="fn6">
                    En una salida de campo a la zona rural de Guacarí, la profesora del colegio de este corregimiento nos comentaba como construyeron el ingenio Pichichi una cancha de fútbol sobre un terreno que no se podía ingresar por problemas jurídicos y por riesgo ambiental. <a href="#ref-6" className="footnote-back">↩</a>
                </li>
                <li id="fn7">
                    Social washing, “cómo algunas organizaciones pretenden ser más sociales de lo que realmente son, con el único fin de proyectar una imagen positiva sin respaldarla con acciones genuinas”. Cita de Funiber. <a href="#ref-7" className="footnote-back">↩</a>
                </li>
              </ol>
            </div>
          </AxisArticle>
        ),
      },

      {
        id: "identitario",
        label: "2. Identitario",
        pos: { top: "35%", left: "55%" },
        content: (
          <AxisArticle>
            <h3 className="axis-title">2. Identitario</h3>
            <FigureBlock files={["Figura13-2.jpeg"]} />

            <p className="axis-text">
              La narrativa identitaria impulsada por la agroindustria y diversos actores (políticos, influencies, negocios...) busca posicionar la caña de azúcar como un signo natural de pertenencia regional, casi como si fuera un elemento compartido por toda la población del Valle del Cauca. Aunque las identidades no se construyen sólo desde los discursos institucionales, los ingenios y gremios como Asocaña producen contenidos que inscriben la caña en la vida cotidiana, cultural y simbólica de la región.
            </p>

            <p className="axis-text">
              Sus recursos visuales son fácilmente reconocibles: archivos fotográficos de plantaciones, videos que combinan tomas aéreas con escenas de música y cotidianidad, e infografías donde la caña aparece estilizada como hoja, línea curva o motivo gráfico que articula pasado, presente y futuro. Todo ello conforma un paisaje comunicativo donde la caña se presenta como parte del territorio, la memoria y las prácticas rurales y urbanas.
            </p>

            <p className="axis-text">
              Más allá de lo publicitario, esta narrativa también se expresa en el espacio urbano: el Parque de la Caña, el sistema de transporte “Cañaveral”, negocios y marcas como “Mi Cañita”, el sobrenombre del equipo de fútbol “los azucareros”, o el propio escudo del departamento. Estos elementos funcionan como recordatorios constantes de la presencia simbólica de la caña en la región.
            </p>

            <h4 className="axis-subtitle">2.1 Trapiche/azúcar</h4>
            <FigureBlock
              files={[
                "Figura14-2.1Cana-Azucar_1.jpeg",
                "Figura15-2.1_Cana-Azucar_2.webp",
                "Figura16-2.1_Cana-Azucar_3.png",
              ]}
            />

            <p className="axis-text">
              Uno de los elementos centrales de esta narrativa identitaria es el uso del trapiche como símbolo fundacional. Uno de los elementos centrales de esta narrativa identitaria es el uso del trapiche como símbolo fundacional. La figura del trapiche funciona como puente entre historia y presente: representa los orígenes artesanales de la producción de azúcar y, al mismo tiempo, está vinculada a economías locales campesinas y paneleras que existen fuera (y a veces en tensión) con los ingenios. Museos como el Museo de la Caña o Haciendas coloniales construyen sus guiones curatoriales a partir de la historia del trapiche, presentando una trayectoria técnica ascendente hacia la agroindustria moderna. Este recorrido, acompañado de fotografías antiguas, maquetas y relatos, produce una genealogía en la que la industria aparece como la heredera “natural” de un proceso histórico continuo.
            </p>

            <p className="axis-text">
              Sin embargo, el trapiche también es parte de usos y prácticas sociales que no pertenecen meramente a los ingenios: el trabajo panelero, la circulación del guarapo, la panela artesanal, el viche y otras transformaciones de la caña que sostienen economías locales afrodescendientes y campesinas. En muchos casos, lo que es realmente significativo para estas comunidades no es la caña en sí misma, sino los otros usos culturales, culinarios, simbólicos y relacionales que emergen de ella. Aquí se revela la tensión central del sub-eje: mientras la narrativa institucional intenta convertir la caña en símbolo unificado de identidad, en la práctica social la identidad se articula a partir de usos diferenciados, desigualdades territoriales y economías múltiples que no se reducen a la versión industrial del cultivo.
            </p>

            <p className="axis-text">
              La identidad que se intenta construir a partir de la caña se enfrenta a una fractura fundamental: mientras la azúcar refinada es producto exclusivo de los ingenios —industrializado, tecnificado, desligado de experiencias cotidianas— los derivados tradicionales (panela, viche, guarapo) operan como marcadores culturales cercanos a las comunidades. Esta tensión evidencia que el símbolo identitario promovido por la industria no proviene del cultivo en sí, sino del universo cultural que otras poblaciones han creado alrededor de sus transformaciones no industriales. La narrativa institucional, no obstante, absorbe estos elementos culturales para reforzar la idea de una caña que “pertenece a todos”, aun si sus usos, memorias y beneficios se distribuyen de manera desigual.
            </p>

            <h4 className="axis-subtitle">2.2. Historia del desarrollo</h4>
            <FigureBlock
              files={[
                "Figura17-2.2-Historia-de-desarrollo-de-la-region_1.png",
                "Figura18-2.2_Historiadedesarrollodelaregion_2.png",
              ]}
            />

            <p className="axis-text">
              Esta narrativa es la idea de que la caña ha sido el motor histórico del desarrollo económico y social de la región. Los relatos visuales e institucionales (líneas de tiempo, fotografías en blanco y negro de haciendas, archivos familiares, mapas antiguos) construyen una historia donde la agroindustria aparece como protagonista de la modernización, generadora de empleo y base del crecimiento regional. Este montaje histórico vincula la prosperidad del Valle del Cauca con las familias que lideraron el negocio de la caña, reforzando una continuidad entre pasado, progreso y presente.
            </p>

            <p className="axis-text">
              Si bien parte de esta historia responde a hechos reales, también silencia otra dimensión fundamental: las formas en que ese poder económico se consolidó y se ejerció, así como las relaciones desiguales que posibilitaron la expansión del monocultivo. Esta narrativa, al presentarse como la única vía de desarrollo, invisibiliza otras historias, economías rurales y procesos sociales que han coexistido y en ocasiones sufrido el avance de la agroindustria.
            </p>

            <h4 className="axis-subtitle">2.3 Fiesta y alegría</h4>
            <FigureBlock
              files={[
                "Figura19-2.3-Fiesta_1.png",
                "Figura20-2.3-Fiesta_2.png",
                "Figura21-2.3Fiesta_3.png",
              ]}
            />

            <p className="axis-text">
              La narrativa identitaria se refuerza a través de un imaginario festivo. Desde la antigua Feria de la Caña, hoy Feria de Cali, hasta la participación en eventos como el Petronio, celebraciones deportivas, conciertos o carnavales, la industria se inserta en las expresiones culturales de la región a través de un lenguaje visual cargado de música, colores vivos, movimientos de baile y mensajes que asocian la caña con alegría y orgullo. En redes sociales, los ingenios publican fotografías de comparsas, videos de orquestas y frases como “la caña que nos une”, “raíces que celebramos” o “somos tradición y futuro”.
            </p>

            <p className="axis-text">
              La fiesta se convierte así en dispositivo emocional que suaviza las tensiones históricas y económicas vinculadas al monocultivo y, al mismo tiempo, posiciona a la industria como parte activa de la vida cultural regional.
            </p>

            <p className="axis-text axis-close">
               En conjunto, estas narrativas identitarias no describen una identidad regional plenamente consolidada, sino un proyecto en construcción: un intento de posicionar la caña como signo natural y unificador del Valle del Cauca. Al instalarse en el paisaje, en lo urbano, en la memoria y en el relato histórico, la agroindustria busca producir un sentido común donde su presencia parezca inevitable y benéfica. Sin negar los aportes económicos del sector, este entramado simbólico tiende a simplificar la complejidad del territorio y a desplazar otras memorias, identidades y economías que también lo configuran. Más que reflejar la diversidad social del Valle, estas narrativas expresan un esfuerzo por moldear un imaginario agroindustrial que asegure legitimidad, continuidad y arraigo cultural.
            </p>
          </AxisArticle>
        ),
      },

      {
        id: "progreso",
        label: "3. Progreso",
        pos: { top: "30%", left: "77%" },
        content: (
          <AxisArticle>
            <h3 className="axis-title">3. Progreso</h3>
            <FigureBlock files={["Figura22-3.png"]} />

            <p className="axis-text">
              Esta narrativa es la más persistente y dominante, heredera directa de la Revolución Verde y se podría decir que sigue de alguna manera vigente<sup><a href="#fn8" id="ref-8" className="footnote-ref">8</a></sup>. En ella, la industria cañera se presenta como sinónimo de avance: la adopción de monocultivos, la mecanización, la tecnificación del campo, la biotecnología y los nuevos productos como el etanol funcionan como pruebas materiales de ese progreso. Retoma lo que Escobar plantea sobre el “discurso del desarrollo” como único horizonte posible: una visión que legitima modelos económicos modernizantes y que opera como guía de futuro social. (<Link to="/archivos#refs-analisis-narrativo" className="ref-inline">Escobar, 2007</Link>).
            </p>

            <p className="axis-text">
              En las imágenes, esta narrativa se refuerza con maquinaria reluciente, campos perfectamente alineados, laboratorios, destilerías... La caña se convierte así en un marcador visual de modernidad y orientación hacia un porvenir tecnocientífico inevitable.
            </p>

            <h4 className="axis-subtitle">3.1. El gran aporte económico</h4>
            <FigureBlock
              files={[
                "Figura23-3.1Granapoyoeconomico_1.png",
                "Figura24-3.1Granapoyoeconomico_2.png",
              ]}
            />

            <p className="axis-text">
              Esta narrativa se articula a través de indicadores, porcentajes y comparativas que presentan el aporte económico de la agroindustria: generación de empleo, niveles de exportación, productividad por hectárea, crecimiento del PIB regional, inversiones en tecnología y volúmenes de producción de azúcar y etanol. En paralelo, los materiales visuales —infraestructura industrial, bodegas, maquinaria pesada, laboratorios y equipos tecnológicos— operan como símbolos de eficiencia y fortaleza económica.
            </p>

            <p className="axis-text">
              La narrativa insiste en posicionar al sector como motor indispensable del desarrollo regional: una industria estratégica que garantiza estabilidad, modernización y competitividad para el Valle y el Cauca. El mensaje se repite con claridad: la caña asegura prosperidad.
            </p>

            <p className="axis-text">
              Sin embargo, este discurso no solo comunica cifras; construye un régimen de verdad donde los números adquieren autoridad epistémica (<Link to="/archivos#refs-analisis-narrativo" className="ref-inline">Escobar, 2007</Link>). Al destacar aportes al PIB, exportaciones o rendimientos productivos, la industria produce una sensación de inevitabilidad: si la caña sostiene la economía regional, entonces su modelo productivo aparece como necesario, incuestionable y estructural.
            </p>

            <p className="axis-text">
              Este énfasis económico tiene efectos clave: desplaza o minimiza discusiones sobre los costos sociales, ambientales y culturales del monocultivo, pues lo económico se presenta como un criterio objetivo, neutral y superior frente a otras formas de valorar el territorio.
            </p>

            <h4 className="axis-subtitle">3.2. Empleo</h4>
            <FigureBlock
              files={[
                "Figura25-3.2Empleo_1.png",
                "Figura26-3.2Empleo_2.png",
                "Figura27-3.2Empleo_3.png",
              ]}
            />

            <p className="axis-text">
              La narrativa laboral adquiere un peso particular por la historia del trabajo en los ingenios y las tensiones del régimen laboral del monocultivo. En los discursos institucionales, el empleo se presenta como prueba directa del aporte socioeconómico del sector: miles de empleos directos y una amplia red de encadenamientos productivos que demostrarían el “bien” que la industria genera para la región.
            </p>

            <p className="axis-text">
              Las imágenes refuerzan este mensaje mediante escenas de cuadrillas en el campo, ingenieros con cascos, personal técnico en plantas y laboratorios. La figura del trabajador se convierte así en un recurso legitimador: la industria no solo produce azúcar, sino futuro y estabilidad para las familias que dependen de ella.
            </p>

            <p className="axis-text">
              En este marco, la presencia de mujeres en roles técnicos y científicos se destaca como símbolo de modernización. Fotografías de mujeres operando maquinaria o liderando procesos son acompañadas de mensajes que celebran su participación. Aunque estas imágenes reflejan cambios reales, también funcionan estratégicamente como prueba de inclusión y progreso que proyecta una industria moderna sin abordar las desigualdades históricas que persisten para las mujeres rurales y trabajadoras.
            </p>

            <h4 className="axis-subtitle">3.3. Tecnología y avance</h4>
            <FigureBlock
              files={[
                "Figura28-3.3Tecnologiayavance_1.png",
                "Figura29-3.3Tecnologiayavance_2.png",
              ]}
            />

            <p className="axis-text">
              En este tramo de la narrativa, la tecnología ocupa un lugar protagónico. La agroindustria se presenta como un sector cada vez más eficiente y preciso, donde maquinaria automatizada, sistemas de riego inteligente, procesos computarizados y plantas de destilación de última generación garantizan menor desperdicio, mayor control y mejores resultados. La ecuación es simple: más tecnología significa más exactitud, más productividad y más rentabilidad.
            </p>

            <p className="axis-text">
              Si bien la tecnificación del campo ha sido cuestionada por sustituir mano de obra, en los discursos institucionales aparece como un avance ambiental y económico: una “industria limpia”, moderna y orientada al futuro. La innovación tecnológica se convierte en la llave que promete resolver problemas, trasladando debates complejos (como los impactos del monocultivo, el uso de la tierra o las desigualdades laborales) a un terreno donde la técnica parece neutral y suficiente para corregir cualquier desbalance.
            </p>

            <p className="axis-text">
              De este modo, la mecanización se enmarca no como un proceso que desplaza trabajadores, sino como un paso inevitable hacia la modernización. La tecnología funciona, así como argumento moral y estético: signo de progreso, precisión y responsabilidad, incluso cuando sus efectos sociales y territoriales siguen siendo motivo de preocupación.
            </p>

            <h4 className="axis-subtitle">3.4. Paisaje cañero</h4>
            <FigureBlock
              files={[
                "Figura30-3.4Paisaje_1.png",
                "Figura31-3.4Paisaje_2.png",
              ]}
            />

            <p className="axis-text">
              Este apartado aborda una narrativa menos explícita, pero profundamente poderosa: la del paisaje cañero como paisaje del progreso. Las imágenes de campos extensos, verdes y perfectamente ordenados funcionan como soporte visual para mensajes sobre desarrollo, crecimiento y oportunidades. El monocultivo aparece representado como un territorio “correcto”, moderno y controlado, donde todo parece estar en su lugar.
            </p>

            <p className="axis-text">
              Aquí se activa con fuerza la idea del blanqueamiento del paisaje<sup><a href="#fn9" id="ref-9" className="footnote-ref">9</a></sup> (<Link to="/archivos#refs-analisis-narrativo" className="ref-inline">Perafán, 2025</Link>). Estas imágenes producen una versión del Valle “limpia” y homogénea. Desde la perspectiva de Ochy Curiel, el blanqueamiento no es solo un proceso racial, sino un proyecto político y estético que busca imponer modelos de modernidad asociados a lo blanco, lo ordenado y lo productivo (<Link to="/archivos#refs-analisis-narrativo" className="ref-inline">Curiel, 2013</Link>). Aplicado al territorio, implica representar como deseable un paisaje alineado con valores hegemónicos, mientras se silencian las presencias, prácticas y estéticas que no encajan en ese ideal.
            </p>

            <p className="axis-text">
              En este proceso, los paisajes campesinos, afrodescendientes o indígenas (con su diversidad de cultivos, patios, monte, ritmos propios y materialidades desordenadas para la lógica industrial) quedan fuera del encuadre. El monocultivo entonces no solo domina la tierra: domina la mirada, invisibilizando otras formas de habitar y significar el territorio.
            </p>

            <p className="axis-text">
              De este modo, el paisaje cañero no es un simple fondo visual. Funciona como una tecnología simbólica que consolida las jerarquías del desarrollo. Cada fotografía de campos de caña acompañada de frases sobre progreso activa asociaciones que conectan ese paisaje con la idea de futuro. El territorio se narra, así, desde la lógica de la industria, desplazando memorias, saberes y paisajes que desobedecen al monocultivo.
            </p>

            <p className="axis-text axis-close">
               En conjunto, estas narrativas de progreso consolidan una imagen de la agroindustria como motor indispensable del desarrollo regional, capaz de generar empleo, modernizar el territorio y sostener la economía del Valle y el Cauca. Al articular cifras, tecnología, inclusión y paisajes ordenados, la industria produce un relato donde el monocultivo aparece como inevitable y deseable, asociado al futuro y al bienestar colectivo. Sin desconocer los avances reales, este discurso opera como una gramática que despolitiza tensiones socioambientales, suaviza desigualdades históricas y naturaliza un modelo productivo que sigue siendo disputado por múltiples actores y memorias territoriales. En su conjunto, prioriza una visión económica por encima de las dimensiones sociales, culturales y ecológicas, y prolonga la lógica de la Revolución Verde: la creencia de que más tecnología, más eficiencia y más productividad son sinónimo de desarrollo, desplazando debates profundos sobre tierra, poder y justicia ambiental.
            </p>
          <div className="metodologia-footnotes" aria-label="Notas al pie">
              <hr />
              <ol start={8}>
                <li id="fn8">
                   T. Lorek, propone en sus estudios de “Making the green revolution”  como la revolución verde no quedo solo dentro del contexto histórico de los años 60 si no que se puede ver como actualmente sigue una gran influencia de esta idea y narrativa adaptas dentro de las necesidades actuales y es necesario revisar la historia con lentes actuales para estudiar narrativas como la seguridad alimentaria y soberania alimentaria.<a href="#ref-8" className="footnote-back">↩</a>
                </li>
                <li id="fn9">
                   Concepto propuesto de Lorena Almario en una entrevista y dentro de la conversa con  Aceneth Perafán en casa cultural Fronteriza disputado por múltiples actores y memorias territoriales. En su conjunto, prioriza una visión económica por encima de las dimensiones sociales, culturales y ecológicas, y prolonga la lógica de la Revolución Verde: la creencia de que más tecnología, más eficiencia y más productividad son sinónimo de desarrollo, desplazando debates profundos sobre tierra, poder y justicia ambiental. <a href="#ref-9" className="footnote-back">↩</a>
                </li>
              </ol>
            </div>
          </AxisArticle>
        ),
      },

      {
        id: "socioambiental",
        label: "4. Denuncias socioambientales",
        pos: { top: "55%", left: "35%" },
        content: (
          <AxisArticle>
            <h3 className="axis-title">4. Criticas socio ambientales</h3>
            <FigureBlock files={["Figura32-4.avif"]} />

            <p className="axis-text">
              La narrativa socioambiental emerge como una contra narrativa <sup><a href="#fn10" id="ref-10" className="footnote-ref">10</a></sup> frente a los discursos de progreso, sostenibilidad e identidad promovidos por los ingenios y sus plataformas de comunicación. Desde la ecología política, esta contra narrativa revela cómo los impactos ambientales del monocultivo no pueden entenderse únicamente como problemas ecológicos, sino como procesos profundamente sociales, donde las transformaciones del agua, la tierra y el aire afectan modos de vida, economías locales, relaciones comunitarias y formas de habitar el territorio.
            </p>

            <p className="axis-text">
              Como advierte la ecología política, los conflictos ambientales son conflictos de poder, distribuyen de manera desigual las cargas y los beneficios, y expresan disputas por el territorio, la vida y la toma de decisiones (<Link to="/archivos#refs-analisis-narrativo" className="ref-inline">Escobar, 1996</Link>) (<Link to="/archivos#refs-analisis-narrativo" className="ref-inline">Martínez Alier, 2004</Link>). Por esto, las contra narrativas socioambientales se enuncian desde experiencias locales que muestran otra lectura del paisaje cañero: no como símbolo de desarrollo, sino como escenario de despojo, vulnerabilidad e injusticia ambiental.
            </p>

            <h4 className="axis-subtitle">4.1. Tierra</h4>
            <FigureBlock
              files={[
                "Figura33-4.1Tierra_1.jpg",
                "Figura34-4.1Tierra_2.png",
                "Figura35-4.1Tierra_3.png",
              ]}
            />

            <p className="axis-text">
              El uso del suelo aparece como uno de los puntos más fuertes de esta contra-narrativa. El monocultivo es señalado como motor de acaparamiento, expansión territorial y concentración de tierras fértiles, en contraste con las demandas históricas de comunidades campesinas por acceso, restitución y diversificación productiva. En grafitis, afiches y consignas circula la tensión de fondo: “Más tierra para la caña que para los campesinos”, “La tierra es para quien la trabaja”, “El Valle no es solo caña”.
            </p>

            <p className="axis-text">
              A esta crítica se suman investigaciones y testimonios que señalan degradación de suelos, pérdida de cobertura vegetal, disminución de cultivos tradicionales y desplazamiento (histórico y reciente) de comunidades rurales. Aunque en algunos casos estos procesos se vivieron con mayor intensidad en el norte del Cauca, en el Valle persiste la lectura de que el monocultivo ha operado como un actor que reordena y despoja territorialmente.
            </p>

            <p className="axis-text">
              En este escenario, la disputa por la tierra se vincula directamente con la soberanía alimentaria: la región produce caña en abundancia, pero no garantiza autosuficiencia alimentaria. Esta preocupación contrasta con la narrativa de la industria de “soberanía energética”, mostrando cómo el énfasis en producir energía a partir de caña convive con déficits en la producción de alimentos. La contra-narrativa, así, articula una crítica que no es solo agraria, sino territorial y política, donde la tierra aparece como espacio de disputa entre monocultivo, comunidades y futuros posibles.
            </p>

            <h4 className="axis-subtitle">4.2. Agua</h4>
            <FigureBlock files={["Figura36-4.2Agua_1.jpeg", "Figura37-4.2Agua_2.png"]} />

            <p className="axis-text">
              El agua emerge como uno de los núcleos más potentes de la contra-narrativa. Frente a los discursos institucionales que hablan de “cuidar la biodiversidad” o “ser parte del ecosistema”, estas voces denuncian la sobreexplotación de ríos, la contaminación por agroquímicos y la desviación de caudales para sostener el monocultivo. Los ríos Cauca, Sonso y Palo, así como las madres viejas y humedales, aparecen nombrados como cuerpos vulnerados, acompañados de memorias colectivas sobre procesos como la represa de La Salvajina o la desecación de zonas húmedas para ampliar la frontera cañera. La pregunta crítica se repite: ¿cómo hablar de biodiversidad cuando una sola especie domina el paisaje?
            </p>

            <p className="axis-text">
              En el plano visual, estas contra-imágenes muestran ríos con espumas químicas, mapas de modificaciones hidráulicas, gotas simbólicas que representan contaminación y flyers que documentan marchas y protestas contra la extracción intensiva de aguas superficiales y subterráneas. En conjunto, revelan que el “costo hídrico” del monocultivo no es solo un problema ambiental, sino una disputa territorial por el control y el sentido del agua en la región
            </p>

            <h4 className="axis-subtitle">4.3. Quemas</h4>
            <FigureBlock files={["Figura38-4.3Quemas_1.jpg", "Figura39-4.3Quemas_2.jpg"]} />

            <p className="axis-text">
              Las quemas (aunque hoy más reguladas por leyes) siguen siendo uno de los puntos más visibles y sensibles de la crítica ciudadana. En zonas rurales y urbanas persisten relatos sobre la “nieve negra”, el tizne que cubre techos y piel, los problemas respiratorios y el desplazamiento de fauna. Pero más allá del daño ambiental, lo que está contra-narrativa subraya es la experiencia corporal del humo: una presencia de la que no se puede escapar. El humo atraviesa puertas y ventanas, oscurece las casas, irrita la piel, obliga a cerrar todo y a modificar rutinas. Es un actor invasor que arrincona, tal como se muestra en La tierra y la sombra, donde el aire mismo se vuelve una forma de despojo cotidiano.
            </p>

            <p className="axis-text">
              Aunque la agroindustria afirma haber reducido y rechazado esta práctica, las quemas nocturnas continúan registrándose, especialmente en predios de proveedores, manteniendo viva la memoria de un territorio marcado por el fuego. Esta contra-narrativa circula con fuerza en redes sociales, grafitis, comentarios a publicaciones de los ingenios y en investigaciones locales, pero encuentra un espacio especialmente potente en el arte. Artistas del Valle utilizan el humo, la quema y el tizne como símbolos críticos del monocultivo: algunos representan visualmente la expansión cañera a través del fuego; otros incorporan el tizne como material, convirtiendo la contaminación en denuncia tangible. De este modo, el arte opera como archivo sensible de la violencia del monocultivo y como contra-imagen que desestabiliza la narrativa institucional.
            </p>

            <p className="axis-text">
              Las preguntas centrales giran siempre en torno al costo de estas prácticas: ¿qué implica sostener un método que, aunque históricamente facilitó el corte de la caña, genera afectaciones ambientales y deteriora la calidad del aire? Sus consecuencias recaen de manera directa e indirecta sobre las poblaciones que viven cerca de los cultivos, evidenciando que una acción productiva localizada termina expandiéndose hacia cuerpos, casas y modos de vida enteros.
            </p>

            <h4 className="axis-subtitle">4.4. Trabajo</h4>
            <FigureBlock
              files={[
                "Figura40-4.4Laboral_1.png",
                "Figura41-4.4Laboral_2.jpg",
                "Figura42-4.4Laboral_3.jpg",
              ]}
            />

            <p className="axis-text">
              El eje laboral retoma memorias como el paro de corteros de 2008, cuando salieron a la luz las condiciones de explotación, los bajos salarios, la tercerización y la ausencia de garantías básicas como la seguridad social. Estos problemas no se limitan al corte: aunque tradicionalmente la figura del cortero ha sido la más visible, el trabajo manual en el monocultivo de caña incluye múltiples tareas igualmente exigentes (deshierbe, abonado, riego, limpieza de canales, fumigación manual, mantenimiento de caminos internos) que también han sido históricamente precarizadas. Sin embargo, estas labores suelen quedar fuera de la mirada pública reduciéndolo únicamente al acto de cortar caña.
            </p>

            <p className="axis-text">
              Aunque la tecnificación ha reducido la demanda de mano de obra para el corte, también ha transformado el mundo laboral dentro del monocultivo. Hoy, la industria ofrece principalmente empleos para ingenieros, técnicos y personal calificado, mientras se reduce el espacio para quienes han vivido por generaciones del trabajo manual. El campo laboral se cierra, se especializa y se tecnifica, dejando a muchos trabajadores históricamente vinculados a la caña sin posibilidades reales de reubicación ni acceso a los nuevos perfiles que demanda la agroindustria. Esto ha generado nuevas tensiones.
            </p>

            <p className="axis-text">
              Las imágenes que circulan como contra-narrativa recogen precisamente estas transformaciones. Estas representaciones revelan que el paisaje cañero no es solo una extensión verde homogénea, sino un territorio atravesado por conflictos ecológicos, disputas laborales y desigualdades persistentes.
            </p>

            <p className="axis-text">
              Estas representaciones no buscan romantizar el oficio ni sugerir un sentido de orgullo; más bien evidencian que, para muchas personas, cortar caña es la única opción laboral disponible en un territorio moldeado por el monocultivo. Al visibilizar la figura del trabajador cañero restituyen un rostro y una historia a quienes han sostenido por décadas el monocultivo, pero que pocas veces aparecen en el relato oficial de la industria
            </p>

            <p className="axis-text">
              En este sentido, centrar la mirada en el trabajador de la caña se convierte en un gesto político: permite comprender que el paisaje cañero también es un paisaje de trabajo marcado por la precarización y la tecnificación excluyente. Al hacerlo, estas contra-narrativas señalan las tensiones sociales que la narrativa hegemónica prefiere mantener fuera del encuadre.
            </p>

            <p className="axis-text axis-close">
             Esta contra-narrativa no busca romantizar la vida rural ni idealizar prácticas del pasado; busca mostrar que el paisaje cañero es un paisaje profundamente político, hecho de disputas por el acceso al agua, la tierra, el aire y el trabajo. Al poner en primer plano las voces, imágenes y experiencias que el discurso del progreso suele invisibilizar, estas narrativas permiten comprender que el monocultivo no es un horizonte inevitable, sino un territorio en tensión donde se negocian, día a día, formas de vida, justicia ambiental y posibilidades de futuro.
            </p>
            <div className="metodologia-footnotes" aria-label="Notas al pie">
              <hr />
              <ol start={10}>
                <li id="fn10">
                   Una contra-narrativa es un relato alternativo que cuestiona y desestabiliza la narrativa dominante al visibilizar experiencias, memorias y voces silenciadas por los discursos hegemónicos; no solo propone otra versión de la realidad, sino que evidencia las relaciones de poder que determinan qué historias se legitiman y cuáles se borran. Puede estar compuesta por contraimágenes, representaciones que desafían las imágenes oficiales para abrir la posibilidad de mirar, interpretar y habitar el territorio desde perspectivas críticas y resistentes. (<Link to="/archivos#refs-analisis-narrativo" className="ref-inline">Mignolo, 2011</Link>) (<Link to="/archivos#refs-analisis-narrativo" className="ref-inline">Martínez Hernández, 2018</Link>).<a href="#ref-10" className="footnote-back">↩</a>
                </li>
        
              </ol>
            </div>
          </AxisArticle>
        ),
      },

      {
        id: "disputa",
        label: "5. La caña en disputa",
        pos: { top: "52%", left: "78%" },
        content: (
          <AxisArticle>
            <h3 className="axis-title">5. La caña en disputa</h3>
            <FigureBlock files={["Figura43-5.png"]} />

            <p className="axis-text">
              Este eje reúne un conjunto de contra narrativas que cuestionan la hegemonía visual, simbólica y política de la industria cañera en el Valle del Cauca. A diferencia del eje anterior (centrado en los impactos concretos del monocultivo sobre el ambiente, el territorio y la vida cotidiana) aquí predominan narrativas que operan desde la retórica, la ironía y el uso subversivo de los propios lenguajes del poder. Aunque circulan en múltiples formatos, su presencia es especialmente fuerte en expresiones callejeras y efímeras, se reescriben los mensajes oficiales para mostrar sus fisuras. Esta narrativa no necesariamente busca una denuncia directa, sino que funcionan como gestos críticos que fracturan la imagen del valle “dulce”, “productivo” o “moderno”, exponiendo los silencios que sostienen esas promesas. Al apropiarse de los mismos repertorios visuales y discursivos de la industria, las contra-narrativas revelan la distancia entre la retórica hegemónica y las experiencias locales, invitando a mirar el paisaje cañero como un territorio donde también se ensayan otras formas de interpretar, habitar y contar el Valle.
            </p>

            <h4 className="axis-subtitle">5.1. El amargo saber del azúcar</h4>
            <FigureBlock
              files={[
                "Figura44-5.1Elamargosaberdelazucar_1.jpg",
                "Figura45-5.1Elamargosaberdelazucar_2.gif",
              ]}
            />

            <p className="axis-text">
              La crítica emerge a través de una retórica precisa: el juego entre el dulzor del azúcar y la amargura de las violencias que lo sostienen. “Lo amargo” opera como una metáfora que fisura la suavidad del discurso oficial y permite ver aquello que suele quedar eclipsado: despojo territorial, condiciones laborales injustas, daños ambientales y memorias de violencia histórica. En este registro cobran fuerza referencias a casos como Llano Verde, donde la violencia urbana conecta con desigualdades estructurales y dinamicas de racialización profundamente arraigados en la región. También aparecen denuncias sobre conflictos agrarios, así como la imagen del “monstruo verde” para nombrar críticamente al monocultivo de caña y su capacidad de expandirse sobre otros usos del territorio.
            </p>

            <p className="axis-text">
              La expresión visual de esta contra narrativa es diversa: testimonios, fotografías crudas, grafitis, notas de prensa, intervenciones artísticas y metáforas visuales que subrayan una contradicción central: el producto dulce que circula globalmente está anclado en historias locales marcadas por el dolor. A diferencia de las críticas socioambientales más técnicas, este registro introduce una dimensión afectiva, ética y política que desestabiliza la estetización del progreso, recordando que detrás del paisaje uniforme hay vidas, cuerpos y memorias atravesadas por profundas desigualdades.
            </p>

            <h4 className="axis-subtitle">5.2. Mas allá de la caña, otros paisajes</h4>
            <FigureBlock
              files={[
                "Figura46-5.2Masalladelacana,otrospaisajes_1.webp",
                "Figura47-5.2Masalladelacana,otrospaisajes_2.webp",
                "Figura48-5.2Masalladelacana,otrospaisajes_4.jpg",
                "Figura49-5.2Masalladelacana,otrospaisajes_4.png",
              ]}
            />

            <p className="axis-text">
              Esta narrativa no solo critica el monocultivo: propone ampliar el campo visual del territorio. Surge como respuesta directa a la homogenización del Valle, donde la caña aparece como si fuera el único paisaje posible. Su fuerza radica en abrir el lente para mostrar que el territorio es múltiple, diverso y complejo.
            </p>

            <p className="axis-text">
              Movimientos como “Cali es Cali y también es Loma” (que reivindican las montañas, las zonas rurales y los bordes urbanos) rompen con la idea de una ciudad contenida entre cañaduzales. Lo mismo hacen proyectos artísticos como India Taller, que contrapone “verdes” fértiles con “desiertos verdes”, introduciendo la noción de que la monocromía vegetal es una forma de desierto ecológico.
            </p>

            <p className="axis-text">
              Esta contra-narrativa trae al centro otros paisajes silenciados: los bosques secos, el Pacífico, los humedales, las madres viejas, los ríos, las agriculturas campesinas, las especies nativas. Al hacerlo, no solo disputa la hegemonía visual de la caña, sino que recupera la relación entre paisaje y justicia ambiental: muestra que lo visible determina lo que se preserva, se cuida o se olvida.
            </p>

            <h4 className="axis-subtitle">5.3. Desenmascarar el poder: críticas a la élite cañera</h4>
            <FigureBlock
              files={[
                "Figura50-5.3.Desenmascararelpoder_1.webp",
                "Figura51-5.3Desenmascararelpoder_2.jpg",
                "Figura52-5.3Desenmascararelpoder_3.jpg",
              ]}
            />

            <p className="axis-text">
              Aquí las contra-narrativas se orientan a evidenciar los regímenes de poder detrás de la industria y sus discursos. No se limitan a denunciar daños, sino que señalan cómo ciertos actores (élites familiares, gremios, coaliciones empresariales e incluso eventos internacionales) moldean el paisaje y la imaginación pública del territorio.
            </p>

            <p className="axis-text">
              Frases como “Tu desierto cañero no es mi paisaje cultural”, o acciones gráficas como “Eder no nos des más caña”, funcionan como intervenciones directas que desnaturalizan la idea de que el monocultivo es el destino inevitable del Valle. Asimismo, críticas a eventos como la COP16, resumidas en expresiones como “no copies a la COP16”, cuestionan cómo estas plataformas pueden operar más como vitrinas de poder que como espacios de transformación real.
            </p>

            <p className="axis-text">
              Esta narrativa expone el carácter político del paisaje: lo que se muestra, lo que se oculta y quién tiene autoridad para definirlo.
            </p>

            <p className="axis-text">
              A través de grafitis, campañas digitales, parodias y mensajes irónicos, estas contra-narrativas hacen visible que la construcción del paisaje cañero no es un proceso natural, sino una imposición estética, económica y simbólica que favorece a ciertos grupos sociales.
            </p>

            <p className="axis-text axis-close">
             Este eje de contra-narrativas opera no solo como denuncia, sino como un ejercicio de desmontaje simbólico del relato hegemónico cañero. Al poner en primer plano la amargura que contrasta con el dulzor del azúcar, los paisajes que existen más allá del monocultivo y las estructuras de poder que definen lo visible y lo decible del territorio, estas narrativas rompen la armonía artificial del “Valle dulce” y exponen las tensiones que lo sostienen. Aquí, las imágenes y mensajes no buscan reemplazar un paisaje por otro, sino revelar las fisuras éticas, políticas y estéticas que el discurso oficial intenta suavizar. Señalan que detrás del producto que circula globalmente existen historias locales de dolor, silencios sobre la diversidad territorial y actores que han moldeado el valle según sus propios intereses. Por eso estas narraciones se vuelven “contra”: no porque sean puramente opositoras, sino porque desacomodan la mirada, interrumpen la naturalización del monocultivo y restituyen la posibilidad de imaginar un territorio que no esté capturado por una sola versión del progreso.
            </p>

            <h3 className="axis-title">Conclusión</h3>

            <p className="axis-text">
              Este análisis no pretende ofrecer una lectura definitiva, sino trazar un mapa provisional de las narrativas y contra-narrativas que configuran la manera en que se imagina, se discute y se disputa la industria cañera en el Valle del Cauca. Las representaciones aquí revisadas —institucionales, comunitarias, artísticas, digitales— están en permanente transformación, cambiando según los actores, los medios desde los cuales se emiten y las tensiones sociales que las atraviesan.
            </p>

            <p className="axis-text">
              La intención ha sido ordenar y hacer visible cómo se construyen estos relatos, qué versiones del territorio buscan consolidar y cuáles intentan cuestionarlas. Al poner en relación estos discursos, emergen las fricciones que estructuran el campo narrativo: disputas por el paisaje, por la memoria, por la justicia socioambiental y por la posibilidad de imaginar futuros más allá del monocultivo. Más que cerrar la conversación, este análisis invita a seguir observando cómo estas narrativas se reconfiguran y qué nuevas formas de contar —y de ver— el Valle se abren en el camino.
            </p>
          </AxisArticle>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item');
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15,
      }
    );

    items.forEach((it, idx) => {
      // apply optional stagger delay
      it.style.setProperty('--delay', `${(idx % 6) * 80}ms`);
      observer.observe(it);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to hash fragment when location changes (e.g., /metodologia#tallerescolaborativos)
  const location = useLocation();
  useEffect(() => {
    if (location && location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [location]);

  const [activeAxis, setActiveAxis] = useState(null);

  const selected = activeAxis ? axes.find((a) => a.id === activeAxis) : null;

  return (
    <main className="metodologia-page">
      {/* ================= HERO ================= */}
      <section className="metodologia-hero">
        <p className="metodologia-overline">Metodología</p>
        <h1 className="metodologia-title">Análisis narrativo</h1>
         <p className="metodologia-intro">
          Escrito por Gabriela Cobo <br /><br />

          La narrativa es entendida como una forma fundamental de construir sentido.<sup><a href="#fn1" id="ref-1" className="footnote-ref">1</a></sup> No se trata solo de contar historias, sino de organizar la experiencia, dar coherencia al mundo social y establecer relaciones entre hechos, memorias y emociones.<br /><br />
          Más que describir hechos, una narrativa interpreta lo que ocurre, resalta ciertos elementos, oculta otros y propone una manera particular de ver el mundo. Por eso, producen marcos de significado que influyen en cómo se recuerdan los eventos, cómo se construyen identidades y cómo se legitiman ciertas visiones sobre la vida social.<br /><br />
          Las narrativas dominantes tienden a establecer una versión autorizada de la realidad, mientras que otras narrativas, buscan contar aquello que no encaja dentro de ese marco hegemónico. Estas contra narrativas permiten hacer visibles tensiones, desigualdades o memorias silenciadas.<br /><br />
          Este análisis general examina cómo ha sido narrada la industria cañera en el Valle del Cauca, especialmente desde los grandes actores que han producido y reforzado las narrativas hegemónicas (los ingenios, Asocaña y los medios de comunicación tradicionales). Al mismo tiempo, explora las contra narrativas que emergen desde medios alternativos, artistas, prácticas de arte urbano, afiches y otros discursos visuales que tensionan o cuestionan esa mirada dominante.<sup><a href="#fn2" id="ref-2" className="footnote-ref">2</a></sup><br /><br />
          El análisis no pretende ser una clasificación cerrada ni definitiva; por el contrario, reconoce que entre los ejes existen múltiples interrelaciones. Sin embargo, esta estructura permite comprender de manera general cómo se configuran, circulan y disputan las narrativas alrededor de la caña de azúcar en la región.<br /><br />

         </p>

         {/* Notas al pie */}
         <div className="metodologia-footnotes" aria-label="Notas al pie">
           <hr />
           <ol>
             <li id="fn1">
               La comprensión dentro de los estudios culturales y antropología. <a href="#ref-1" className="footnote-back">↩</a>
             </li>
             <li id="fn2">
               La mayor parte del trabajo se basó en una revisión de las redes sociales, especialmente Instagram, de estos actores, asín como de las páginas web de los ingenios. A esto se suma un componente etnográfico en la ciudad de Cali, donde interesaba observar cómo la caña aparece, se oculta o se materializa dentro del espacio urbano. <a href="#ref-2" className="footnote-back">↩</a>
             </li>
           </ol>
         </div>
      </section>

      {/* ================= VALLA ================= */}
      <section className="axes-section">
        <div className="billboard-wrap">
          <div className="billboard-stage">
            <img className="billboard-img" src={vallaImg} alt="Valla de ejes" />

            <div className="billboard-overlay">
              {axes.map((axis) => {
                const isActive = activeAxis === axis.id;

                return (
                  <button
                    key={axis.id}
                    className={"billboard-point " + (isActive ? "billboard-point-active" : "")}
                    style={{
                      top: axis.pos.top,
                      left: axis.pos.left,
                    }}
                    onClick={() => setActiveAxis(isActive ? null : axis.id)}
                    aria-expanded={isActive}
                    type="button"
                  >
                    <span className="billboard-point-dot" />
                    <span className="billboard-point-chip">
                      <span className="billboard-point-chipTitle">{axis.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {selected && (
  <div className="axis-panel">
    <button
      type="button"
      className="axis-scrollTop"
      onClick={() => {
        const el = document.querySelector(".axis-panel");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      aria-label="Subir al inicio"
      title="Subir"
    >
      ↑
    </button>

    <div className="axis-panel-inner">{selected.content}</div>
  </div>
)}

      </section>

      {/* ================= TIMELINE ================= */}
      <section className="metodologia-hero metodologia-hero--afterBillboard">
        <h1 className="metodologia-title">Línea del tiempo del paisaje cultural cañero</h1>
      </section>

      <section className="timeline-section">
        <div className="timeline-line" />
        <div className="timeline-items">
          {timelineItems.map((item, index) => (
            <article
              key={item.period}
              className={"timeline-item " + (index % 2 === 0 ? "timeline-left" : "timeline-right")}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-period">{item.period}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= TALLERES ================= */}
      <section id="tallerescolaborativos">
        <TalleresColaborativosSection />
      </section>
    </main>
  );
}

export default Metodologia;
