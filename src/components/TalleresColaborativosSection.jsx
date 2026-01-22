// TalleresColaborativosSection.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function InlineSlider({ images, label }) {
  const [i, setI] = useState(0);

  function prev() {
    if (!images || images.length === 0) {
      return;
    }
    setI((x) => (x - 1 + images.length) % images.length);
  }

  function next() {
    if (!images || images.length === 0) {
      return;
    }
    setI((x) => (x + 1) % images.length);
  }

  if (!images || images.length === 0) {
    return (
      <div className="inl-slider inl-slider-empty" aria-label={label}>
        <div className="inl-empty">Agrega imágenes en public/assets/…</div>
      </div>
    );
  }

  return (
    <div className="inl-slider" aria-label={label}>
      <div className="inl-frame">
        <img className="inl-img" src={images[i].src} alt={images[i].alt} />
      </div>

      <div className="inl-controls">
        <button type="button" className="inl-btn" onClick={prev} aria-label="Anterior">
          ←
        </button>

        <div className="inl-dots" aria-label="Indicadores">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={"inl-dot " + (idx === i ? "inl-dot-active" : "")}
              onClick={() => setI(idx)}
              aria-label={"Ir a imagen " + (idx + 1)}
            />
          ))}
        </div>

        <button type="button" className="inl-btn" onClick={next} aria-label="Siguiente">
          →
        </button>
      </div>
    </div>
  );
}

export default function TalleresColaborativosSection() {
  // ✅ Si tus imágenes están en public/assets, se referencian así:
  // /assets/archivo.jpg
  const cartografiaImgs = useMemo(
    () => [
      { src: "/assets/cartografia_1.JPG", alt: "Taller de cartografía 1" },
      { src: "/assets/cartografia_2.JPG", alt: "Taller de cartografía 2" },
      { src: "/assets/cartografia_3.JPG", alt: "Taller de cartografía 3" },
      { src: "/assets/cartografia_4.JPG", alt: "Taller de cartografía 4" },
      { src: "/assets/cartografia_5.JPG", alt: "Taller de cartografía 5" },
      { src: "/assets/cartografia_6.JPG", alt: "Taller de cartografía 6" },
    ],
    []
  );

  const atlasImgs = useMemo(
    () => [
      { src: "/assets/atlas_1.JPG", alt: "Taller ATLAS 1" },
      { src: "/assets/atlas_2.JPG", alt: "Taller ATLAS 2" },
      { src: "/assets/atlas_3.JPG", alt: "Taller ATLAS 3" },
      { src: "/assets/atlas_4.JPG", alt: "Taller ATLAS 4" },
      { src: "/assets/atlas_5.JPG", alt: "Taller ATLAS 5" },
      { src: "/assets/atlas_6.JPG", alt: "Taller ATLAS 6" },
      { src: "/assets/atlas_7.JPG", alt: "Taller ATLAS 7" },
      { src: "/assets/atlas_8.JPG", alt: "Taller ATLAS 8" },
      { src: "/assets/atlas_9.JPG", alt: "Taller ATLAS 9" },
      { src: "/assets/atlas_10.JPG", alt: "Taller ATLAS 10" },
    ],
    []
  );

  const creacionImgs = useMemo(
    () => [
      { src: "/assets/creacion_1.JPG", alt: "Taller de creación 1" },
      { src: "/assets/creacion_2.JPG", alt: "Taller de creación 2" },
      { src: "/assets/creacion_3.JPG", alt: "Taller de creación 3" },
      { src: "/assets/creacion_4.JPG", alt: "Taller de creación 4" },
      { src: "/assets/creacion_5.JPG", alt: "Taller de creación 5" },
      { src: "/assets/creacion_6.JPG", alt: "Taller de creación 6" },
      { src: "/assets/creacion_7.JPG", alt: "Taller de creación 7" },
    ],
    []
  );

  // ===== Textos =====
  const intro = `Escrito por Gabriela Cobo.
  
Como parte de este proceso de investigación se realizaron tres talleres colaborativos con el propósito de pensar colectivamente la configuración y las narrativas del paisaje cañero en el Valle del Cauca.

Cada encuentro fue un espacio de exploración y creación, donde la imagen, la memoria y la palabra se convirtieron en herramientas para pensar el paisaje cañero. Desde distintos lenguajes (la cartografía, el archivo y la creación visual) buscamos comprender cómo se ha construido este paisaje y cómo podríamos narrarlo de otras formas.`;

  // ✅ Prefijo único para evitar choques con los IDs de Metodología
  const FN = "talleres";

  const comoLoVivimos_1 = (
    <>
      <p className="ws2-text ws2-text-pre">
        El primer taller tuvo como punto de partida una cartografía visual que permitió un acercamiento
        inicial al territorio.
        <br />
        A través de esta herramienta se buscó comprender cómo experimentamos y recordamos el paisaje
        cañero: desde lo visual, lo material, lo sensorial y la memoria.
        <br />
        La cartografía social, más que un ejercicio técnico, fue un espacio de encuentro con el entorno.
        Nos permitió reconocer cómo cada participante se relaciona con el paisaje, qué ve, qué siente y
        qué recuerdos activa al pensar en la caña.
        <br />
        Mirar un mapa del Valle del Cauca fue también preguntarse cómo ha sido narrada, imaginada y
        construida esta región.
        <br />
        Hablar del paisaje no fue sencillo. Persistía la idea de que el paisaje es algo para contemplar,
        una imagen estática que se observa desde lejos —como desde la carretera— y no algo que se vive o
        se produce.
        <br />
        Sin embargo, el diálogo abrió la posibilidad de cuestionar esa mirada distante:
        <br />
        <br />
        “El paisaje no es estático, pero sí puede ser monótono”
        <sup>
          <a href={`#${FN}-fn1`} id={`${FN}-ref-1`} className="footnote-ref">
            1
          </a>
        </sup>
      </p>
    </>
  );

  const comoLoVivimos_2 = (
    <>
      <p className="ws2-text ws2-text-pre">
        Estas diferencias evidenciaron cómo el paisaje se experimenta de maneras diversas: depende del
        lugar desde donde se mira y del vínculo que se tenga con él.
        <br />
        <br />
        La comparación con el paisaje cafetero fue constante.
        <br />
        El paisaje cafetero es percibido como más “cultural” o “comunitario” ya que se asocia a la siembra
        con la familia y la tradición, en cambio que el paisaje cañero fue identificado con la industria,
        el trabajo forzado y la dominación. Podría pensarse en establecer un paralelo con los trapiches,
        pero este vínculo no resulta tan evidente. Por un lado, los trapiches evocan, en un primer
        momento, memorias de esclavitud, control y formas históricas de explotación. Por otro lado,
        muchas fincas tradicionales del Cauca y del Valle del Cauca han sostenido sus economías a través
        de ellos, aunque hoy este método persiste solo en pocas familias, mientras que la mayor parte de
        la caña se destina a la agroindustria. Esta doble lectura —entre memoria de violencia, prácticas
        productivas familiares en declive y el dominio creciente del modelo agroindustrial— evidencia la
        dificultad de comprender esta transformación de la caña como un paisaje cultural coherente o
        unificado.
        <br />
        <br />
        Algunos participantes sentían cierta familiaridad afectiva con el paisaje cañero, asociándolo con
        los viajes al pueblo o con el olor del Valle al llegar por carretera o avión. Para otros, en
        cambio, era un paisaje “aburrido”, “ardiente” y “repetitivo”
        <br />
        <br />
        “un verde que no da sombra”
        <sup>
          <a href={`#${FN}-fn2`} id={`${FN}-ref-2`} className="footnote-ref">
            2
          </a>
        </sup>
        ;
        <br />
        <br />
        Otra noción que emergió fue la del paisaje de ausencias: al recordar relatos familiares o mirar
        fotos antiguas, aparecieron memorias de otros paisajes del Valle (de frutales, algodón.) u otros
        paisajes del rio cauca (pesca, lavado de ropa en el río), paisajes que ya no están en la parte
        plana del valle. Hablar de ellos fue también reconocer ausencias.
        <br />
        <br />
        Al momento de plasmar la cartografía, el ejercicio no fluyó con facilidad, pero dejó huellas
        importantes. Se hizo evidente que no conocemos todos los paisajes del Valle: hay territorios
        sobre los que no se puede hablar porque se desconocen. También se reveló cómo las narrativas del
        paisaje cañero dominan ciertas zonas (Palmira, Yumbo, Jamundí) y cómo en los bordes urbanos de
        Cali persisten esas tensiones entre el campo y la ciudad. La cartografía mostró que no existe un
        solo paisaje, sino muchos superpuestos: el de las élites y el de los trabajadores, el del cultivo
        y el del río, el visible y el silenciado.
        <br />
        <br />
        Una reflexión interesante fue la relación con los ríos, elementos constantes y, al mismo tiempo,
        ignorados. Los ríos aparecen como símbolos de dolor, de extracción, de lo oculto. En ellos se
        condensa buena parte de la historia del Valle: una historia marcada por el agua que:
        <br />
        se controla
        <br />
        se seca
        <br />
        se reprime.
      </p>
    </>
  );

  const comoNosContaron_1 = (
    <>
      <p className="ws2-text ws2-text-pre">
        “No es contar la historia como pasó, sino contar los miles de maneras de abordarla”.
        <br />
        <br />
        No buscábamos revisar los hechos del pasado, sino preguntarnos cómo han sido narrados y qué
        imágenes han sostenido esas narraciones.
        <br />
        La intención era abrir esos espacios vacíos de los objetos, los silencios del archivo, los bordes
        de las imágenes que pocas veces miramos con detenimiento.
        <br />
        El taller propuso un trabajo visual y archivístico, a partir de una curaduría de imágenes
        (fotografías, citas, canciones, películas, afiches...) obtenidas tras un proceso previo de revisión
        de archivo y etnografía.
        <br />
        Más que analizar las imágenes, se trataba de ponerlas a conversar.
        <br />
        Al hacerlo, surge una sensibilidad hacia lo que llamamos narrativas del paisaje cañero, ese
        entramado de discursos, miradas y representaciones que ha configurado no solo la idea de región,
        sino también la manera en que habitamos y comprendemos la ciudad.
        <br />
        Inspirados en la propuesta del Atlas Mnemosyne{" "}
        <sup>
          <a href={`#${FN}-fn3`} id={`${FN}-ref-3`} className="footnote-ref">
            3
          </a>
        </sup>{" "}
        de Aby Warburg, el ejercicio se concibió como una forma de pensar con imágenes.
        <br />
        Warburg proponía un atlas sin texto, una especie de cartografía abierta, donde el sentido no está
        dado, sino que se produce en el montaje.
        <br />
        Así, el acto de recortar, pegar y componer se volvió una forma de reflexión: el pensamiento
        surgía de las relaciones, de los cruces y tensiones entre imágenes que, al ponerse unas junto a
        otras, empezaban a revelar nuevos significados el ejercicio de montaje.
        <br />
        El Atlas, en ese sentido, no busca explicar, sino provocar asociaciones, las imágenes piensan
        entre sí, como hacer una arqueología visual de las narrativas en torno al paisaje cañero.
        <br />
        No son solo representaciones, sino campos de conflicto simbólico, donde se condensan memorias,
        silencios y disputas por el territorio.
        <br />
        Durante el taller, mientras las imágenes se esparcen sobre la mesa (fotografías de ingenios,
        vallas publicitarias, paisajes verdes, obreros cortando caña, afiches turísticos), se abría una
        conversación colectiva sobre cómo ha sido contado este paisaje.
        <br />
        Pronto se hizo evidente que la mayoría de las narrativas son hegemónicas, sostenidas por
        imaginarios de progreso, desarrollo y productividad.
        <br />
        En las imágenes de la caña no hay rostros: el paisaje aparece deshabitado, impersonal, cubierto
        de verde y de industria.
        <br />
        En contraste con el paisaje cafetero (asociado a lo campesino, a lo familiar), el paisaje cañero
        parece pertenecer a una élite, a una economía que oculta sus relaciones humanas.
        <br />
        Entre los participantes surgió una sensación compartida: la de estar frente a un paisaje que no
        se habita.
        <br />
        Y esto puede ser por la misma experiencia de cada uno, esta sensación la vivimos dentro de la
        ciudad, pero cabe resaltar que en otras poblaciones la caña se habita y se vive materialmente.
        <br />
        Tal vez esa sensación de inhabitabilidad esté por el hecho de la forma de relacionarnos con la
        caña, al ser una materialidad que se ve tras en las vías, lejana, como una barrera.
        <br />
        Pero también está el imaginario de la caña como narrativas del miedo (como el monstruo de los
        mangones o que en ese espacio desaparecen personas el caso de llano verde).
      </p>
    </>
  );

  const comoNosContaron_2 = (
    <>
      <p className="ws2-text ws2-text-pre">
        Hay zonas que se eviten, caminos que ya no se recorren.
        <br />
        El paisaje se volvió algo que se mira desde lejos, o que simplemente se deja de mirar.
        <br />
        Otra reflexión recurrente fue sobre la invisibilidad de la caña en la ciudad.
        <br />
        A pesar de su presencia constante (en los equipos de fútbol, la salsa, en los discursos de
        sostenibilidad, en los colores verdes que adornan las vallas), su existencia parece naturalizada.
        <br />
        Se reconoció también la fuerza de lo que algunos llamaron un greenwashing{" "}
        <sup>
          <a href={`#${FN}-fn4`} id={`${FN}-ref-4`} className="footnote-ref">
            4
          </a>
        </sup>
        : un paisaje que se muestra verde, limpio, fértil, pero que oculta sus impactos sociales y
        ecológicos.
        <br />
        A través del montaje, las temporalidades se entremezclaban.
        <br />
        Fotografías en blanco y negro se ubicaban junto a imágenes contemporáneas; escenas del río Cauca
        en épocas de pesca o lavado de ropa se confrontaban con fotografías del mismo río represado, seco
        y controlado.
        <br />
        Esa ruptura del tiempo permitió entender que no hablamos de un pasado cerrado, sino de procesos
        que siguen actuando en el presente.
        <br />
        Hacia el final, la conversación giró en torno a la posibilidad de reconocer la historia sin
        idealizar ni destruirla.
        <br />
        No se trataba de oponerse a la caña solo por oponerse, sino de hacer consciente su carga histórica
        y simbólica, sus presencias y ausencias en la vida cotidiana.
        <br />
        El ejercicio del Atlas permitió ver que las imágenes son más que registros: son huellas de los
        modos en que el poder, la memoria y el territorio se entrelazan.
        <br />
        Quizás el mayor aprendizaje fue comprender que las narrativas del paisaje cañero no están fijas.
        <br />
        Son fragmentos que se reconfiguran cada vez que alguien las observa, las cuestiona o las vuelve a
        montar.
        <br />
        En esa posibilidad de reordenar las imágenes, de interrumpir el flujo de lo dado, se abre un
        espacio para imaginar otras historias, menos lineales, más sensibles.
      </p>
    </>
  );

  const queSeQuiere_1 = (
    <>
      <p className="ws2-text ws2-text-pre">
        Después de los talleres anteriores (donde se exploró el espacio, el paisaje cañero y el poder de
        las imágenes en la configuración de sus narrativas), este último encuentro se pensó como una mesa
        de creación.
        <br />
        La pregunta que nos guiaba era sencilla pero profunda:
        <br />
        ¿Qué queremos contar ahora del paisaje cañero?
        <br />
        La propuesta fue construir colectivamente una contra imagen, entendida no como una oposición,
        sino como otra forma de ver el paisaje de manera sensible y crítica frente a las representaciones
        hegemónicas que han dominado la mirada sobre el territorio.
        <br />
        Para ello, se trabajó a partir de una lluvia de ideas y una conversación abierta sobre el
        artivismo{" "}
        <sup>
          <a href={`#${FN}-fn5`} id={`${FN}-ref-5`} className="footnote-ref">
            5
          </a>
        </sup>{" "}
        y el poder político y afectivo de las imágenes.
        <br />
        “Hablar de contra imagen me hizo pensar desde dónde queremos hablar, y desde dónde se está
        posicionando esta investigación.”
        <br />
        Surgió el temor de hablar desde lugares que no se sienten propios, el miedo de no tener “derecho”
        a narrar ciertas historias.
        <br />
        Pero el diálogo permitió comprender que justamente ahí está el ejercicio político y ético:
        preguntarse por los privilegios, reconocer desde qué lugares se habla, y abrir espacio para tener
        preguntas a lo que nos es familiar.
        <br />
        Retomar estas preguntas en el espacio urbano se volvió una forma de pensar la antropología de la
        dominación{" "}
        <sup>
          <a href={`#${FN}-fn6`} id={`${FN}-ref-6`} className="footnote-ref">
            6
          </a>
        </sup>
        , entendida como un proceso de autocuestionamiento sobre cómo se produce y se distribuye el poder.
        <br />
        Mientras se conversaba apareció la idea del juego de perspectivas: no hay una sola mirada sobre el
        paisaje cañero, sino múltiples puntos de vista que se entrecruzan.
        <br />
        La conversación llevó a imaginar un gran ecosistema de miradas, un espacio donde todas esas voces
        pudieran convivir.
        <br />
        De ahí surgieron las primeras ideas de un mural o una página web, como lugares posibles para
        visualizar esas relaciones, ese tejido de experiencias y posiciones.
        <br />
        Otra línea de reflexión giró en torno a lo oculto: aquello que permanece detrás de las narrativas,
        las historias no contadas o los intereses que sostienen ciertos discursos.
        <br />
        Se reconoció que las imágenes del paisaje cañero (como toda narrativa) están hechas de decisiones
        y silencios.
        <br />
        De ahí emergió una imagen poderosa: la caña como símbolo de jaula, de algo que encierra y a la vez
        oculta.
        <br />
        Pensar así fue una manera de cuestionar las barreras materiales y simbólicas que limitan la mirada
        y el habitar del territorio.
        <br />
        También se retomó la figura del río como un símbolo de memoria y movimiento.
        <br />
        El río apareció como metáfora de diversidad, un cuerpo que guarda las múltiples formas de habitar
        y de recordar el territorio.
        <br />
        Escucharlo, revivirlo, dejarlo fluir, se convirtió en una imagen de resistencia frente a la
        rigidez del monocultivo.
        <br />
        En el diálogo sobre artivismo, se recuperó la idea de intervenir la ciudad, hacer que los muros y
        las calles hablan.
        <br />
        La contra imagen no debía ser algo fijo ni monumental, sino una acción móvil, capaz de desplazarse
        y adaptarse, de aparecer en distintos lugares y convocar nuevas lecturas.
        <br />
        Se pensó entonces en una imagen que sea diciente pero abierta, un gesto visual que interpela sin
        imponer, que invite a mirar el paisaje cañero desde otras sensibilidades.
      </p>
    </>
  );

  const queSeQuiere_2 = (
    <>
      <p className="ws2-text ws2-text-pre">
        El taller cerró con la sensación de que crear una contra imagen no es solo producir una obra, sino
        ensayar una forma distinta de mirar y de estar en el territorio.
        <br />
        No se trata de reemplazar una narrativa por otra, sino de mantener abierto el espacio de la
        pregunta, de seguir preguntándonos qué queremos contar ahora y desde dónde.
        <br />
        …
      </p>
    </>
  );

  const conclusion = (
    <>
      <p className="ws2-text ws2-text-pre ws2-conclusionInline">
        La investigación-creación{" "}
        <sup>
          <a href={`#${FN}-fn7`} id={`${FN}-ref-7`} className="footnote-ref">
            7
          </a>
        </sup>
        , aunque a simple vista parezca un ejercicio abstracto, se revela en el hacer como un proceso
        profundamente complejo y vivo.
        <br />
        Su recorrido no fue lineal: a veces se desvió, otras tomaron caminos inesperados, pero en cada
        giro abrió posibilidades.
        <br />
        En ese movimiento, lo importante no fue llegar a una conclusión cerrada, sino mantener abierta la
        pregunta.
        <br />
        El trabajo colectivo permitió hacer visible lo sensible, volver común lo que usualmente se vive en
        silencio o se da por sentado.
        <br />
        Crear con otros fue también un acto político, un modo de descentrar la autoría y entender que el
        conocimiento no pertenece a una sola voz, sino que se potencia en la multiplicidad.
        <br />
        En la conversación, en la creación compartida, surgieron miradas que se entrelazaron, que se
        enfrentaron, que ampliaron el campo de lo posible.
        <br />
        Este proceso mostró que pensar el paisaje cañero no se limita a representar visualmente, sino a
        interrogar los modos en que ha sido narrado, sentido y habitado.
        <br />
        Las imágenes, más que conclusiones, fueron puntos de partida: superficies donde se proyectaron
        memorias y afectos.
        <br />
        Desde ahí, los talleres abrieron un espacio para imaginar otras formas de relación con el
        territorio, para reconocer su complejidad, sus contradicciones y sus potencias.
        <br />
        En ese sentido, la investigación-creación no sólo permitió reflexionar sobre el paisaje cañero,
        sino habitarlo de otro modo: como un territorio que se piensa colectivamente, donde el
        conocimiento se construye en diálogo, y donde cada imagen, cada pregunta y cada gesto creativo
        invita a mirar de nuevo.
      </p>
    </>
  );

  return (
    <section className="ws2" id="talleres-colaborativos">
      <div className="ws2-header">
        <p className="metodologia-overline">Metodología</p>
        <h2 className="metodologia-title ws2-title-main">Talleres colaborativos</h2>

        <div className="ws2-introProse">
          <p className="ws2-text ws2-text-pre">{intro}</p>
        </div>
      </div>

      <div className="ws2-block">
        <div className="ws2-head">
          <h3 className="ws2-subtitle">¿Cómo lo vivimos?</h3>
        </div>

        <div className="ws2-split ws2-split-rightMedia">
          <div className="ws2-prose">
            {comoLoVivimos_1}
            {comoLoVivimos_2}
          </div>

          <div className="ws2-media">
            <InlineSlider images={cartografiaImgs} label="Fotos del taller de cartografía" />
          </div>
        </div>
      </div>

      <div className="ws2-block">
        <div className="ws2-head ws2-head-right">
          <h3 className="ws2-subtitle">¿Cómo nos contaron la historia?</h3>
        </div>

        <div className="ws2-split ws2-split-leftMedia">
          <div className="ws2-media">
            <InlineSlider images={atlasImgs} label="Fotos del taller ATLAS" />
          </div>

          <div className="ws2-prose">
            <p className="ws2-text ws2-text-pre">
              {comoNosContaron_1}
              {" "}
              (
              <Link to="/archivos#refs-talleres-colaborativos" className="ref-inline">
                Tartás-Ruiz &amp; Guridi-García, 2013
              </Link>
              ).{" "}
              (
              <Link to="/archivos#refs-talleres-colaborativos" className="ref-inline">
                ATLAS, 2010
              </Link>
              )
            </p>

            {comoNosContaron_2}
          </div>
        </div>
      </div>

      <div className="ws2-block">
        <div className="ws2-head">
          <h3 className="ws2-subtitle">¿Que se quiere contar ahora?</h3>
        </div>

        <div className="ws2-split ws2-split-rightMedia">
          <div className="ws2-prose">
            <p className="ws2-text ws2-text-pre">
              {queSeQuiere_1}
              {" "}
              (
              <Link to="/archivos#refs-talleres-colaborativos" className="ref-inline">
                Curiel, 2013
              </Link>
              )
            </p>

            {queSeQuiere_2}

            <div className="ws2-text ws2-text-pre ws2-conclusionInline">
              {conclusion}
              {" "}
              (
              <Link to="/archivos#refs-talleres-colaborativos" className="ref-inline">
                Delgado et al., 2015
              </Link>
              )
            </div>
          </div>

          <div className="ws2-media">
            <InlineSlider images={creacionImgs} label="Fotos de la mesa de creación" />
          </div>
        </div>

        {/* ✅ IDs únicos para que no choquen con los de Metodología */}
        <div className="metodologia-footnotes" aria-label="Notas al pie">
          <hr />
          <ol>
            <li id={`${FN}-fn1`}>
              Cita de participante del taller{" "}
              <a href={`#${FN}-ref-1`} className="footnote-back">
                ↩
              </a>
            </li>
            <li id={`${FN}-fn2`}>
              Cita de participante del taller{" "}
              <a href={`#${FN}-ref-2`} className="footnote-back">
                ↩
              </a>
            </li>
            <li id={`${FN}-fn3`}>
              “El “Atlas Mnemosyne” es una obra del historiador de arte alemán Aby Warburg (1866-1929)
              iniciada en 1924, que quedó incompleta a causa de su muerte en 1929.” Cita de Proyecto IDIS{" "}
              <a href={`#${FN}-ref-3`} className="footnote-back">
                ↩
              </a>
            </li>
            <li id={`${FN}-fn4`}>
              Greenwashing, “las estrategias publicitarias que algunas compañías utilizan para presentarse,
              a ellas y sus productos, como respetuosas con el medioambiente, cuando no lo son”. Definición
              de GreenPeace{" "}
              <a href={`#${FN}-ref-4`} className="footnote-back">
                ↩
              </a>
            </li>
            <li id={`${FN}-fn5`}>
              Artivismo, “El artivismo se basa en la recuperación de la acción artística con fines de inmediata
              intervención social (Expósito, 2013). Como recoge Abarca (2017), tiene unos rasgos específicos
              que lo hacen eminentemente efímero y práctico: en él existe un permanente equilibrio buscado
              entre visibilidad, durabilidad y riesgo.” Cita de Aladro-Vico, E., Jivkova-Semova, D., &amp; Bailey,
              O (2018){" "}
              <a href={`#${FN}-ref-5`} className="footnote-back">
                ↩
              </a>
            </li>
            <li id={`${FN}-fn6`}>
              La antropología de la dominación, según Curiel (Curiel, 2013), es una perspectiva crítica,
              feminista y decolonial que analiza cómo los regímenes históricos de poder —como la raza, el género,
              la heterosexualidad y el Estado-nación— producen jerarquías y desigualdades, y cómo estas se
              naturalizan a través de discursos e instituciones como el derecho. Es una antropología situada y
              política que busca desmantelar las estructuras de dominación y no simplemente describirlas.{" "}
              <a href={`#${FN}-ref-6`} className="footnote-back">
                ↩
              </a>
            </li>
            <li id={`${FN}-fn7`}>
              Investigación-creación: “investigación-creación nos referimos al hecho de otorgar a los procesos
              de creación y producción de obras artísticas, llámense espectáculos escénicos, objetos plástico-visuales,
              actos performáticos, piezas sonoras, etc., la condición de objetos cognitivos.” Cita de (Delgado et al., 2015).{" "}
              <a href={`#${FN}-ref-7`} className="footnote-back">
                ↩
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
