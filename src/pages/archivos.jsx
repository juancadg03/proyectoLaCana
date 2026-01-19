// src/pages/Archivos.jsx
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./archivos.css";

function Archivos() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // pequeño delay para asegurar render/layout
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [location.hash]);

  return (
    <main className="archivos-page">
      {/* HERO */}
      <section className="archivos-hero">
        <p className="archivos-overline">Archivos</p>
        <h1 className="archivos-title">Archivos y referencias</h1>
        <p className="archivos-intro">
          Colección de materiales de archivo, fotografías etnográficas y referencias usadas en la investigación y creación del proyecto.
        </p>
      </section>

      {/* DOS TARJETAS (DASHBOARDS) */}
      <section className="archivos-sections">
        <Link to="/archivos/archivos-dashboard" className="archivos-card">
          <div className="archivos-card-inner">
            <h2 className="archivos-card-title">Archivos</h2>
            <p className="archivos-card-text">
              Galería de imagenes historicas relacionadas con el cultivo de caña de azúcar en el Valle del Cauca.
            </p>
            <span className="archivos-card-cta">Abrir</span>
          </div>
        </Link>

        <Link to="/archivos/etnografia-dashboard" className="archivos-card">
          <div className="archivos-card-inner">
            <h2 className="archivos-card-title">Fotos etnográficas</h2>
            <p className="archivos-card-text">
              Registro fotográfico por talleres, recorridos y escenas.
            </p>
            <span className="archivos-card-cta">Abrir</span>
          </div>
        </Link>
      </section>

      {/* REFERENCIAS */}
      <section className="refs-wrap">
        <header className="refs-header">
          <h2 className="refs-title">Referencias</h2>
          <p className="refs-subtitle">
            Organizadas por sección.
          </p>
        </header>

        {/* ====== ANÁLISIS NARRATIVO ====== */}
        <article className="refs-block" id="refs-analisis-narrativo">
          <div className="refs-block-head">
            <h3 className="refs-block-title">Análisis narrativo</h3>
          </div>

          <ol className="refs-list">
            <li className="refs-item">
              Acethen Perafán. (2025, 29 de agosto). Conversa con Acethen Perafán:
              Paisaje cañero como amestizamiento. Juntanzas de las dudas mestizas.
              [Conferencia]. Cali, Colombia.
            </li>

            <li className="refs-item">
              Alfonsi, V. (2024). Greenwashing: qué es y por qué es una trampa para los
              consumidores responsables. Greenpeace Colombia.
              <a href="https://www.greenpeace.org/colombia/blog/campanas/contaminacion/greenwashing-que-es-y-por-que-es-una-trampa-para-los-consumidores-responsables/" target="_blank" rel="noreferrer">https://www.greenpeace.org/colombia/blog/campanas/contaminacion/greenwashing-que-es-y-por-que-es-una-trampa-para-los-consumidores-responsables/</a>
            </li>

            <li className="refs-item">
              Banerjee, S. B. (2012). Corporate Social Responsibility: The Good, the Bad and
              the Ugly. Critical Sociology, 34(1), 51–79.
              <a href="https://doi.org/10.1177/0896920507084623" target="_blank" rel="noreferrer">https://doi.org/10.1177/0896920507084623</a> (Trabajo original publicado en 2008)
            </li>

            <li className="refs-item">
              Curiel, O. (2013). La Nación Heterosexual. Análisis del discurso jurídico y el
              régimen heterosexual desde la Antropología de la dominación. Brecha lésbica y en
              la frontera.
            </li>

            <li className="refs-item">
              Escobar, A. (1996). La ecología política de la globalización y el desarrollo. En
              F. P. Leff (Ed.), Los problemas del desarrollo: Sustentabilidad y racionalidad
              ambiental (pp. 63–95). Siglo XXI Editores.
            </li>

            <li className="refs-item">
              Escobar, A. (2007). La invención del Tercer Mundo: Construcción y deconstrucción
              del desarrollo. Colonialidad/modernidad/descolonialidad. Caracas, Venezuela.
            </li>

            <li className="refs-item">
              FUNIBER. (2025, 3 de enero). Social washing: ¿compromiso social o solo una
              estrategia de marketing? Funiber Blogs.
              <a href="https://blogs.funiber.org/direccion-empresarial/2025/01/03/social-washing-compromiso-social-o-solo-una-estrategia-de-marketing/" target="_blank" rel="noreferrer">https://blogs.funiber.org/direccion-empresarial/2025/01/03/social-washing-compromiso-social-o-solo-una-estrategia-de-marketing/</a>
            </li>

            <li className="refs-item">
              Lorek, T. W. (2023). Making the Green Revolution: Agriculture and Conflict in
              Colombia. University of North Carolina Press.
              <a href="http://www.jstor.org/stable/10.5149/9781469673844_lorek" target="_blank" rel="noreferrer">http://www.jstor.org/stable/10.5149/9781469673844_lorek</a>
            </li>

            <li className="refs-item">
              Martínez Hernández, R. (2018). Contraimágenes infiltradas. Estrategias artísticas
              para la creación de dispositivos de acción política. Revista Científica de
              Información y Comunicación, 15, 63–87.
              <a href="https://www.redalyc.org/journal/328/32865415006/" target="_blank" rel="noreferrer">https://www.redalyc.org/journal/328/32865415006/</a>
            </li>

            <li className="refs-item">
              Martínez-Alier, J. (2004). El ecologismo de los pobres: Conflictos ambientales y
              lenguajes de valoración. Icaria Editorial.
            </li>

            <li className="refs-item">
              Mignolo, W. (2011). Estéticas decoloniales: Senderos hacia el futuro y hacia el
              pasado. En Estéticas decoloniales (pp. 9–41). Universidad Distrital Francisco
              José de Caldas.
            </li>
          </ol>
        </article>

        <article id="refs-linea-del-tiempo" className="refs-block">
        <header className="refs-block-head">
          <h2 className="refs-block-title">Línea del tiempo</h2>
        </header>

        <ol className="refs-list">
          <li className="refs-item">
            Castaño Rico, A. (2016). Esclavitud y libertad en el valle del Río Cauca.
            <em> Eutopia</em>, (9), 129–132. <a href="http://dx.doi.org/10.17141/eutopia.9.2016.2167" target="_blank" rel="noreferrer">http://dx.doi.org/10.17141/eutopia.9.2016.2167</a>
          </li>

          <li className="refs-item">
            Castillo, L. C. (2020, 11 de junio). Síntesis de una historia brillante.
            Universidad del Valle. <a href="https://www.univalle.edu.co/resena-historica-75-aniversario/sintesis-de-una-historia-brillante" target="_blank" rel="noreferrer">https://www.univalle.edu.co/resena-historica-75-aniversario/sintesis-de-una-historia-brillante</a>
          </li>

          <li className="refs-item">
            Centro de Investigación de la Caña de Azúcar de Colombia – CENICAÑA. (1995).
            <em> El cultivo de la caña en la zona azucarera de Colombia</em> [PDF]. Cali, Colombia: CENICAÑA.
            <a href="https://www.cenicana.org/pdf_privado/documentos_no_seriados/libro_el_cultivo_cana/libro_p3-394.pdf" target="_blank" rel="noreferrer">https://www.cenicana.org/pdf_privado/documentos_no_seriados/libro_el_cultivo_cana/libro_p3-394.pdf</a>
          </li>

          <li className="refs-item">
            Colmenares, G. (1983). <em>Cali. Terratenientes, mineros y comerciantes – siglo XVIII</em> (tomo 1).
            Talleres gráficos del Banco Popular.
          </li>

          <li className="refs-item">
            Delgadillo, O. L., &amp; Valencia, V. H. (2020). Misión Chardon y la modernización agrícola
            en el valle geográfico del río Cauca (Colombia). <em>Historia Agraria</em>, (80), 145–175.
            <a href="https://doi.org/10.26882/histagrar.080e02d" target="_blank" rel="noreferrer">https://doi.org/10.26882/histagrar.080e02d</a>
          </li>

          <li className="refs-item">
            Delgadillo, O. L., &amp; Valencia, V. H. (2024). La misión Lilienthal y sus impactos
            en el desarrollo regional de Colombia. <em>Historia Agraria</em>, (93), 181–209.
            <a href="https://doi.org/10.26882/histagrar.093e07d" target="_blank" rel="noreferrer">https://doi.org/10.26882/histagrar.093e07d</a>
          </li>

          <li className="refs-item">
            Enciclopedia Banrepcultural. (s.f.). Lauchlin Currie. En <em>Enciclopedia | La Red Cultural del Banco de la República</em>.
            Recuperado el 19 de diciembre de 2025, de <a href="https://enciclopedia.banrepcultural.org/index.php?title=Lauchlin_Currie" target="_blank" rel="noreferrer">https://enciclopedia.banrepcultural.org/index.php?title=Lauchlin_Currie</a>
          </li>

          <li className="refs-item">
            Farné, S. (2008). Las cooperativas de trabajo asociado en Colombia: Balance de la política gubernamental, 2002–2007.
            <em>Revista de Economía Institucional</em>, 10(18), 261–285. Recuperado el 19 de diciembre de 2025, de
            <a href="http://www.scielo.org.co/scielo.php?script=sci_arttext&amp;pid=S0124-59962008000100011&amp;lng=en&amp;tlng=es" target="_blank" rel="noreferrer">http://www.scielo.org.co/scielo.php?script=sci_arttext&amp;pid=S0124-59962008000100011&amp;lng=en&amp;tlng=es</a>
          </li>

          <li className="refs-item">
            Llanos Vargas, H. (1979). Japio: modelo de hacienda colonial en el Valle del Cauca.
            <em>Historia y Espacio</em>, (2), 9–73. <a href="https://doi.org/10.25100/hye.v0i2.4714" target="_blank" rel="noreferrer">https://doi.org/10.25100/hye.v0i2.4714</a>
          </li>

          <li className="refs-item">
            Malagón Gómez, N. E. (2015). <em>Tiempos de cosecha: Instituto Mayor Campesino: 52 años cultivando líderes y sostenibilidad</em>
            (Trabajo de grado, Pontificia Universidad Javeriana, Facultad de Ciencias Sociales). IMCA.
            <a href="https://www.imca.org.co/wp-content/uploads/2025/10/HISTORIA-DEL-IMCA-def.pdf" target="_blank" rel="noreferrer">https://www.imca.org.co/wp-content/uploads/2025/10/HISTORIA-DEL-IMCA-def.pdf</a>
          </li>

          <li className="refs-item">
            Mina, M. (1975). <em>Esclavitud y libertad en el Valle del río Cauca</em>. Publicaciones de la Rosca.
          </li>

          <li className="refs-item">
            Montoya Duque, G. I. (2011). El paro de corteros de caña en el Valle del Cauca – Colombia:
            Una acción colectiva de cara al modelo económico. <em>Entramado</em>, 7(1), 104–113. Recuperado el 19 de diciembre de 2025, de
            <a href="http://www.scielo.org.co/scielo.php?script=sci_arttext&amp;pid=S1900-38032011000100007&amp;lng=en&amp;tlng=es" target="_blank" rel="noreferrer">http://www.scielo.org.co/scielo.php?script=sci_arttext&amp;pid=S1900-38032011000100007&amp;lng=en&amp;tlng=es</a>
          </li>

          <li className="refs-item">
            Motta González, N., &amp; Perafán Cabrera, A. (2017). <em>Historia ambiental del Valle del Cauca. Geo espacialidad, cultura y género</em>.
            Universidad del Valle, Programa Editorial. <a href="https://doi.org/10.25100/peu.84" target="_blank" rel="noreferrer">https://doi.org/10.25100/peu.84</a>
          </li>

          <li className="refs-item">
            PROCAÑA. (s.f.). Historia de la caña. <a href="https://procana.org/site/historia-de-la-cana/" target="_blank" rel="noreferrer">https://procana.org/site/historia-de-la-cana/</a>
          </li>

          <li className="refs-item">
            Ripoll Echeverría, M. T. (2020). El desarrollo de la industria azucarera en el Valle del Cauca, Colombia, 1901–2015.
            <em>Economía &amp; Región</em>, 13(1), 87–143. <a href="https://doi.org/10.32397/er.vol13.n1.3" target="_blank" rel="noreferrer">https://doi.org/10.32397/er.vol13.n1.3</a>
          </li>

          <li className="refs-item">
            Sánchez Mejía, H. R., &amp; Santos Delgado, A. Y. (2025). La Estación Experimental Agrícola de Palmira (Valle del Cauca, Colombia):
            Innovaciones biológicas, fitomejoramiento y difusión científica, 1928–1944. <em>Historia Agraria</em>, (96), 37–69.
            <a href="https://doi.org/10.26882/histagrar.096e04h" target="_blank" rel="noreferrer">https://doi.org/10.26882/histagrar.096e04h</a>
          </li>

          <li className="refs-item">
            Sánchez Ángel, R. (2008). Las iras del azúcar: la huelga de 1976 en el Ingenio Riopaila.
            <em>Historia Crítica</em>, (35), 34–57. Recuperado el 19 de diciembre de 2025, de
            <a href="http://www.scielo.org.co/scielo.php?script=sci_arttext&amp;pid=S0121-16172008000100004&amp;lng=en&amp;tlng=es" target="_blank" rel="noreferrer">http://www.scielo.org.co/scielo.php?script=sci_arttext&amp;pid=S0121-16172008000100004&amp;lng=en&amp;tlng=es</a>
          </li>

          <li className="refs-item">
            TuBarco Noticias. (2023, 21 de diciembre). ¿Cómo nació la Feria de Cali? La historia que daría a su creación.
            <a href="https://tubarco.news/como-nacio-la-feria-de-cali-la-historia-que-daria-a-su-creacion/" target="_blank" rel="noreferrer">https://tubarco.news/como-nacio-la-feria-de-cali-la-historia-que-daria-a-su-creacion/</a>
          </li>
        </ol>
      </article>

      <article id="refs-talleres-colaborativos" className="refs-block">
          <header className="refs-block-head">
            <h2 className="refs-block-title">Talleres colaborativos</h2>
          </header>

          <ul className="refs-list">
            <li className="refs-item"> 
              Aladro-Vico, E., Jivkova-Semova, D., &amp; Bailey, O. (2018).{" "}
              <em>Artivism: A new educative language for transformative social action</em> [Artivismo: Un nuevo lenguaje
              educativo para la acción social transformadora]. <em>Comunicar</em>, 57, 09-18.{" "}
              <a href="https://doi.org/10.3916/C57-2018-01" target="_blank" rel="noreferrer">
                https://doi.org/10.3916/C57-2018-01
              </a>
            </li>

            <li className="refs-item">
              Alfonsi, V. (2024). <em>Greenwashing: qué es y por qué es una trampa para los consumidores responsables</em>.
              Greenpeace Colombia.{" "}
              <a
                href="https://www.greenpeace.org/colombia/blog/campanas/contaminacion/greenwashing-que-es-y-por-que-es-una-trampa-para-los-consumidores-responsables/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.greenpeace.org/colombia/blog/campanas/contaminacion/greenwashing-que-es-y-por-que-es-una-trampa-para-los-consumidores-responsables/
              </a>
            </li>

            <li className="refs-item">
              ATLAS. (2010, noviembre 3). <em>Entrevista a Georges Didi-Huberman</em> [Video]. Vimeo.{" "}
              <a href="https://vimeo.com/18063038?fl=pl&fe=vl" target="_blank" rel="noreferrer">
                https://vimeo.com/18063038?fl=pl&amp;fe=vl
              </a>
            </li>

            <li className="refs-item">
              Curiel, O. (2013). <em>La Nación Heterosexual. Análisis del discurso jurídico y el régimen heterosexual desde la
              Antropología de la dominación</em>. Brecha lésbica y en la frontera.
            </li>

            <li className="refs-item">
              Delgado, T. C., Beltrán, E. M., Ballesteros, M., &amp; Salcedo, J. P. (2015).{" "}
              <em>La investigación-creación como escenario de convergencia entre modos de generación de conocimiento</em>.{" "}
              <em>Iconofacto</em>, 11(17), 10-28.
            </li>

            <li className="refs-item">
              Rozen, S. (1924, junio 3). <em>Atlas Mnemosyne</em>. IDIS.{" "}
              <a href="https://proyectoidis.org/atlas-mnemosyne/" target="_blank" rel="noreferrer">
                https://proyectoidis.org/atlas-mnemosyne/
              </a>
            </li>

            <li className="refs-item">
              Tartás-Ruiz, C. &amp; Guridi-García, R. (2013). <em>Cartografías de la memoria: Aby Warburg y el Atlas Mnemosyne</em>{" "}
              (INVE_MEM_2013_155825). Universidad Politécnica de Madrid.{" "}
              <a href="https://oa.upm.es/23211/1/INVE_MEM_2013_155825.pdf" target="_blank" rel="noreferrer">
                https://oa.upm.es/23211/1/INVE_MEM_2013_155825.pdf
              </a>
            </li>
          </ul>
        </article>

        <article id="refs-paisaje-canero" className="refs-block">
          <header className="refs-block-head">
            <h2 className="refs-block-title">Paisaje cañero</h2>
          </header>

          <ul className="refs-list">
                <li className="refs-item">
                  Acethen Perafán, (2025. 29 de agosto). <em>Conversa con Acethen Perfán: Paisaje cañero como amestizamiento</em>.
              Juntanzas de las dudas mestizas. [Conferencia]. Cali, Colombia.
            </li>

            <li className="refs-item">
              Andermann, J. (2008) <em>Paisaje: Imagen, entorno, ensamble</em>. Orbis Tertius, 13(14). En Memoria Académica.
              Disponible en:{" "}
              <a
                href="http://www.fuentesmemoria.fahce.unlp.edu.ar/art_revistas/pr.3749/pr.3749.pdf"
                target="_blank"
                rel="noreferrer"
              >
                http://www.fuentesmemoria.fahce.unlp.edu.ar/art_revistas/pr.3749/pr.3749.pdf
              </a>
            </li>

            <li className="refs-item">
              BRAVO F., C., (2010). <em>Contribuciones de la perspectiva narrativa al estudio del paisaje</em>. Sociedad Hoy, (18),
              55-64.
            </li>

            <li className="refs-item">
              Delgado, J. D. (2010). <em>La construcción social del paisaje de la Sabana de Bogotá: 1880–1890</em>. Recuperado de:{" "}
              <a href="https://repositorio.unal.edu.co/handle/unal/70523" target="_blank" rel="noreferrer">
                https://repositorio.unal.edu.co/handle/unal/70523
              </a>
            </li>

            <li className="refs-item">
              Ingold, T. (1993). <em>The Temporality of the Landscape</em>. World Archaeology, 25(2), 152–174.{" "}
              <a href="http://www.jstor.org/stable/124811" target="_blank" rel="noreferrer">
                http://www.jstor.org/stable/124811
              </a>
            </li>

            <li className="refs-item">
              Martínez de Pisón, E. (2010). <em>Saber ver el paisaje</em>. Estudios Geográficos, 71(269), 395–414.{" "}
              <a href="https://doi.org/10.3989/estgeogr.201013" target="_blank" rel="noreferrer">
                https://doi.org/10.3989/estgeogr.201013
              </a>
            </li>

            <li className="refs-item">
              Martínez de Pisón, E. (2018). <em>Paisaje, cultura y sostenibilidad</em>. Comunicacion para el cambio,{" "}
              <a
                href="https://reds-sdsn.es/wp-content/uploads/2018/02/smart_acciona_es-PISON-Paisaje-cultura-y-sostenibilidad.pdf"
                target="_blank"
                rel="noreferrer"
              >
                https://reds-sdsn.es/wp-content/uploads/2018/02/smart_acciona_es-PISON-Paisaje-cultura-y-sostenibilidad.pdf
              </a>
            </li>
          </ul>
        </article>

      <article id="refs-figuras-metodologia" className="refs-block">
        <header className="refs-block-head">
          <h2 className="refs-block-title">Figuras (Metodología)</h2>
        </header>

        <ul className="refs-list">
          <li className="refs-item">
            <strong>Figura 1.</strong> Incauca [incauca.co]. (18 de agosto 2025). En 3 días revelaremos una nueva era para
            Incauca 💙Un nuevo sentir, con más energía y propósito para los colombianos 🇨🇴 [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DNgJnNqtvI8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DNgJnNqtvI8/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 2.</strong> Manuelita. (s.f.). Portada sitio web [Fotografía]. Manuelita.{" "}
            <a href="https://www.manuelita.com/" target="_blank" rel="noreferrer">
              https://www.manuelita.com/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 3.</strong> Asocaña [asocanaoficial]. (12 de noviembre 2021). Somos azúcar...somos protección del
            medio ambiente [Storie destacada de Nosotros]. Instagram.{" "}
            <a
              href="https://www.instagram.com/stories/highlights/18129181459117559/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/stories/highlights/18129181459117559/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 4.</strong> Asocaña [asocanaoficial]. (4 de noviembre 2024). En estos campos crece más que caña
            [Video]. Instagram.{" "}
            <a
              href="https://www.instagram.com/reel/DB9tGwGyLYB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/reel/DB9tGwGyLYB/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 5.</strong> Presentación de Asocaña en la semana de la biodiversidad en Cali, Colombia. Fotografía
            Gabriela Cobo, octubre 2025.
          </li>

          <li className="refs-item">
            <strong>Figura 6.</strong> Manuelita [manuelitaagroindustria]. (24 de mayo 2025). Usamos el #bagazo, subproducto
            de caña de azúcar [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DKC_KPMuS4C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DKC_KPMuS4C/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 7.</strong> Asocaña [asocanaoficial]. (29 de septiembre 2025). Gracias al convenio entre Asocaña,
            @minagriculturacol y las comunidades, la dedicación de productoras como María Yuly se transforman en progreso
            [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DPM1fnXkh5b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DPM1fnXkh5b/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 8.</strong> Manuelita [manuelitaagroindustria]. (29 de agosto 2025). Con apoyo al emprendimiento,
            la salud, la cultura y el deporte, trabajamos por el bienestar de las comunidades. [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DN9EFUKEeQ5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DN9EFUKEeQ5/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 9.</strong> Fundación Caicedo González Riopaila Castilla. (s. f.). Portada del sitio web FCGRC
            [Fotografía]. FCGRC.{" "}
            <a href="https://fcgriopailacastilla.org/site/" target="_blank" rel="noreferrer">
              https://fcgriopailacastilla.org/site/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 10.</strong> Asocaña [asocanaoficial]. (8 de agosto 2025). El @petronico es más que un festival: es
            un homenaje a las tradiciones del Pacifico colombiano [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DNGSugcp6EP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DNGSugcp6EP/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 11.</strong> Asocaña [asocanaoficial]. (13 de agosto 2025). ¡Hoy inicia el @petronioco! 🥳🧡 Y
            nosotros ya te estamos esperando en nuestro stand de #CorazónDeCaña [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DNTKjfaPez1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DNTKjfaPez1/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 12.</strong> Alejandro Eder [alejoeder]. (18 de agosto 2025). Alegria y mucho amor en esta foto.
            Gracias por gozar el #Petronio2025 tanto como yo [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DNggAt-p09b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DNggAt-p09b/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 13.</strong> Valla en Cali, Colombia. Fotografía Joshua Ruiz, diciembre 2025.
          </li>

          <li className="refs-item">
            <strong>Figura 14.</strong> Letrero de negoción en Festival de petronio en Cali, Colombia. Fotografía Gabriela
            Cobo, octubre 2025.
          </li>

          <li className="refs-item">
            <strong>Figura 15.</strong> Ríos, M. (2019, mayo 22). Museo de la Caña de Azúcar [Fotografía]. OurGuía.{" "}
            <a href="https://www.ourguia.com/blog/museo-de-la-cana-de-azucar" target="_blank" rel="noreferrer">
              https://www.ourguia.com/blog/museo-de-la-cana-de-azucar
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 16.</strong> Providencia [providencia.col]. (26 de noviembre 2025). No mires los comentarios [Foto].
            Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DRh_xUFjWrb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DRh_xUFjWrb/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 17.</strong> Manuelita [manuelitaagroindustria]. (13 de marzo 2025). El dulce progreso del primer
            ingenio del país ha sido impulsado por las #mujeres!🚀 [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DHKC6IXuCyw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DHKC6IXuCyw/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 18.</strong> Ingenio Pichichi [ingenio_pichichi]. (1 de abril 2025). ¡84 años transformando la caña
            de azúcar en dulzura, soluciones sostenibles y energía limpia! [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DH54bZYxvxm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DH54bZYxvxm/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 19.</strong> Asocaña [asocanaoficial]. (17 de agosto 2025). En nuestro stand vivimos la fiesta del
            Pacifico con toda la alegria [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DNeoy1uuIOs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DNeoy1uuIOs/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 20.</strong> Ingenio Mayagüez y Ingenio San Carlos [ingeniomayaguez] y [ingeniosancarlos]. (12 de
            agosto 2025). El @petronioco no solo se vive, se siente en cada rincón del Pacifico: en su música, en su estilo,
            en sus bebidas, en sus historias [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DNRtGcOpE63/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DNRtGcOpE63/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 21.</strong> Manuelita [manuelitaagroindustria]. (29 de junio 2024). Hay un lazo que endulza a
            cientos de familias. Padrinos y ahijados que comparten macetas hacen palpitar con fuerza nuestro #CorazónDeCaña.
            [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/C8zXe8AMGLJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/C8zXe8AMGLJ/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 22.</strong> Asocaña [asocanaoficial]. (20 de agosto 2025). ¡Nos llena de orgullo saber que
            #DondeHayCañaHayProgreso! 🌱 [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DNlTK9qT0lQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DNlTK9qT0lQ/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 23.</strong> Manuelita [manuelitaagroindustria]. (8 de noviembre 2025). En la #agroindustria de la
            caña impulsamos el desarrollo del Suroccidente colombiano, gracias al trabajo de más de 286.000 personas que hacen
            parte de esta cadena productiva. [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DP9rRJ_EWVk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DP9rRJ_EWVk/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 24.</strong> Manuelita [manuelitaagroindustria]. (8 de noviembre 2025). Trabajamos con amor y
            compromiso por el progreso y bienestar de esta región. ¡Aquí te contamos cómo lo hacemos! ¡Somos #CorazónDeCaña!
            [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DQzzjH1kTbU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DQzzjH1kTbU/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 25.</strong> Manuelita [manuelitaagroindustria]. (8 de octubre 2025). #OrgulloManuelita es ser parte
            de las 100 empresas más grandes y exitosas de Colombia [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DPj-g3pkXpn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DPj-g3pkXpn/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 26.</strong> Asocaña [asocanaoficial]. (8 de septiembre 2025). En el Valle del Cauca, Cauca y
            Risaralda esta agroindustria significa trabajo, estabilidad y futuro para miles de familias [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DOWEH43E2UG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DOWEH43E2UG/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 27.</strong> Ingenio Mayagüez [ingeniomayaguez]. (29 de mayo 2025). Aquí crecemos todos. 🌱 Impulsamos
            historias de orgullo, compromiso y liderazgo que fortalecen nuestro campo y nuestras comunidades. [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DKQHwKXpars/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DKQHwKXpars/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 28.</strong> Asocaña [asocanaoficial]. (10 de septiembre 2025). ¿Sabías que en los municipios en donde
            estamos, 6 de cada 10 personas están conectadas económicamente con nuestro sector? [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DOb7ELrE727/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DOb7ELrE727/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 29.</strong> Ingenio Pichichi [ingenio_pichichi]. (25 de septiembre 2025). En @ingenio_pichichi
            avanzamos con fuerza... [Video]. Instagram.{" "}
            <a
              href="https://www.instagram.com/reel/DPCgVs5EgVU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/reel/DPCgVs5EgVU/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 30.</strong> Asocaña [asocanaoficial]. (5 de agosto 2025). POV: Vas por carretera tipo 5:30 de la tarde
            y te encuentras con esta postal... [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DM-gtTivrVd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DM-gtTivrVd/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 31.</strong> Ingenio Mayagüez [ingeniomayaguez]. (30 de marzo 2025). Inspiración #Ghibli... [Foto].
            Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DH1TBqhJw3D/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DH1TBqhJw3D/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 32.</strong> Narváez Cedeño, W. A. (2014–2016). Atmósferas [Obra de arte]. William Narváez Cedeño.{" "}
            <a
              href="https://williamnarvaezc.wixsite.com/william-narvaez/atmosferas?lightbox=dataItem-j1mttws22"
              target="_blank"
              rel="noreferrer"
            >
              https://williamnarvaezc.wixsite.com/william-narvaez/atmosferas
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 33.</strong> Grafiti Av las Americas en Cali, Colombia. Fotografía Gabriela Cobo, septiembre 2025.
          </li>

          <li className="refs-item">
            <strong>Figura 34.</strong> Acosta, J. (2024, octubre 28). El monocultivo de caña en el Valle [Video]. Facebook.{" "}
            <a href="https://www.facebook.com/watch/?v=583164404145383" target="_blank" rel="noreferrer">
              https://www.facebook.com/watch/?v=583164404145383
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 35.</strong> Possú, E. (2019, noviembre 12). “¡Caña no más! a sembrar comida” (Mural colectivo, Parque
            central Padilla) [Fotografía]. CESYCMÉ.{" "}
            <a
              href="http://cesycme.org/index.php/2019/11/12/caravana-artivista-por-el-cauca-encuentros-interculturales-por-la-defensa-de-la-vida-y-el-territorio/"
              target="_blank"
              rel="noreferrer"
            >
              http://cesycme.org/index.php/2019/11/12/...
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 36.</strong> Afiche de movilización por el cuidado del agua, Universidad del Valle en Cali, Colombia.
            Fotografía Gabriela Cobo, octubre 2025.
          </li>

          <li className="refs-item">
            <strong>Figura 37.</strong> Enramada [en_ramada]. (21 de octubre 2024). Durante más de 80 años hemos sido testigos del
            despojo de tierras y aguas. [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DBZw3v4St5r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DBZw3v4St5r/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 38.</strong> Mural calle de la escopeta en Cali, Colombia. Fotografía Gabriela Cobo, septiembre 2025.
          </li>

          <li className="refs-item">
            <strong>Figura 39.</strong> Acevedo, C. A. (2015). La tierra y la sombra [Fotograma]. Proimágenes Colombia.{" "}
            <a
              href="https://www.proimagenescolombia.com/secciones/cine_colombiano/peliculas_colombianas/pelicula_plantilla.php?id_pelicula=2116"
              target="_blank"
              rel="noreferrer"
            >
              https://www.proimagenescolombia.com/.../id_pelicula=2116
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 40.</strong> Producción Agrícola Vallecaucana. (2020, enero 4). Corteros de caña de azúcar (22.000)
            machetazos [Video]. YouTube.{" "}
            <a href="https://www.youtube.com/watch?v=K_ea7ntPh3Q" target="_blank" rel="noreferrer">
              https://www.youtube.com/watch?v=K_ea7ntPh3Q
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 41.</strong> Guerrero, F. (Director). (2014). Corta [Fotograma]. Proimágenes Colombia.{" "}
            <a
              href="https://www.proimagenescolombia.com/secciones/cine_colombiano/peliculas_colombianas/pelicula_plantilla.php?id_pelicula=2012"
              target="_blank"
              rel="noreferrer"
            >
              https://www.proimagenescolombia.com/.../id_pelicula=2012
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 42.</strong> Mural en Guacarí, Colombia. Fotografía Gabriela Cobo, agosto 2025.
          </li>

          <li className="refs-item">
            <strong>Figura 43.</strong> Palenke Alto Cauca del Proceso de Comunidades Negras, Enramada: Espacios de Acción, &
            Forest Peoples Programme. (2024). No todo lo verde es biodiverso: Impactos del monocultivo de la caña de azúcar en
            la biodiversidad y los modos de vida del pueblo negro en el Valle del Río Cauca [Portada del informe]. Forest
            Peoples Programme.{" "}
            <a
              href="https://www.forestpeoples.org/publications-resources/reports/article/no-todo-lo-verde-es-biodiverso-impactos-del-monocultivo-de-la-cana-de-azucar-en-la-biodiversidad-y-los-modos-de-vida-del-pueblo-negro-en-el-valle-del-rio-cauca/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.forestpeoples.org/.../no-todo-lo-verde-es-biodiverso...
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 44.</strong> Afiche en la calle en Cali, Colombia. Fotografía Gabriela Cobo, septiembre 2025.
          </li>

          <li className="refs-item">
            <strong>Figura 45.</strong> Rey, D. (2022, agosto 28). Amargo sabor a caña: Así se ejecutó la masacre en Llano Verde
            [Imagen principal del artículo]. Infobae.{" "}
            <a
              href="https://www.infobae.com/america/colombia/2022/08/28/amargo-sabor-a-cana-asi-se-ejecuto-la-masacre-en-llano-verde/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.infobae.com/.../amargo-sabor-a-cana...
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 46.</strong> MUTANTE. (2024). Impactos negativos de la industria de la caña de azúcar [Infografía].
            MUTANTE.{" "}
            <a
              href="https://mutante.org/contenidos/impactos-negativos-de-la-industria-de-la-cana-de-azucar/"
              target="_blank"
              rel="noreferrer"
            >
              https://mutante.org/.../impactos-negativos...
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 47.</strong> La Linterna Cali. (s. f.). Cali es Cali y también es Loma [Póster]. La Linterna Cali.{" "}
            <a
              href="https://lalinternacali.com/producto/cali-es-cali-y-tambien-es-loma-1-2/"
              target="_blank"
              rel="noreferrer"
            >
              https://lalinternacali.com/producto/cali-es-cali-y-tambien-es-loma-1-2/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 48.</strong> Grafiti en Universidad del Valle en Cali, Colombia. Fotografía Gabriela Cobo, septiembre
            2025.
          </li>

          <li className="refs-item">
            <strong>Figura 49.</strong> India Taller [india.taller]. (18 de noviembre 2024). De ciertos verdes Desiertos verdes
            [Foto]. Instagram.{" "}
            <a
              href="https://www.instagram.com/p/DChUpDkRmAw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/p/DChUpDkRmAw/
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 50.</strong> Pik, A. (2022, enero 13). Azúcar: los números de una industria que se hizo rica con el
            Estado [Infografía]. Vorágine.{" "}
            <a
              href="https://voragine.co/historias/infografia/azucar-los-numeros-de-una-industria-que-se-hizo-rica-con-el-estado/"
              target="_blank"
              rel="noreferrer"
            >
              https://voragine.co/.../azucar-los-numeros...
            </a>
          </li>

          <li className="refs-item">
            <strong>Figura 51.</strong> Grafiti en Universidad del Valle en Cali, Colombia. Fotografía Gabriela Cobo, septiembre
            2025.
          </li>

          <li className="refs-item">
            <strong>Figura 52.</strong> Afiche en Cali, Colombia. Fotografía Gabriela Cobo, agosto 2025.
          </li>
        </ul>
      </article>

      </section>
    </main>
  );
}

export default Archivos;
