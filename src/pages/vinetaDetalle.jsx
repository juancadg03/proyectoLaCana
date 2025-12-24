// src/pages/VinetaDetalle.jsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./vinetaDetalle.css";

const vinetasContent = {
  paisaje: {
    title: "Paisaje cañero",
    intro:
      "Escrito por Gabriela Cobo",
    body: [
    "Hablar de paisaje es hablar de una relación: la del individuo con su entorno, pero también la de una mirada con aquello que decide ver (Martínez de Pisón, 2010). Esa mirada nunca es neutra; está hecha de recuerdos, experiencias, saberes y afectos que transforman el territorio en algo más que un fondo. En ese gesto, cuando la tierra deja de ser solo superficie útil y empieza a hablarnos, es cuando nace el paisaje. No como una imagen, sino como un modo de estar en el mundo.",
    "Por eso se dice que el paisaje es expresión del territorio: un tejido que reúne lo ecológico, lo histórico, lo sensible y lo geográfico (Martínez de Pisón, 2018). El paisaje es una suma de todo eso, pero también un lenguaje. Una forma de nombrar lo que, sin ser dicho, ya nos afecta. Aprender a ver un paisaje implica aprender a leerlo, a reconocer en él las huellas del pasado y las tensiones del presente (Ingold, 1993).",
    "Desde esta mirada, los paisajes no son escenarios pasivos sino construcciones culturales. Surgen de la interacción entre las relaciones sociales y el mundo natural; entre la memoria y la práctica cotidiana (Anderman, 2008). Todo paisaje es político: encarna decisiones, silencios y formas de ordenar lo visible (Delgado, 2010). Naturaliza modos de habitar, de valorar la vida, de imaginar el progreso. Y al mismo tiempo es sensible, cualitativo, heterogéneo: una experiencia en la que percepción, emoción y memoria se trenzan.",
    "Fue desde allí que comenzó mi interés por el paisaje. Me llamó la atención esa intersección entre lo material y lo ideológico, entre el espacio real y lo que proyectamos sobre él. Siempre he sentido que el espacio habla de lo que somos y de aquello que nos habita. Por eso, cuando empecé a pensar en el paisaje cañero, el interés vino acompañado de dudas.",
    "¿La caña puede considerarse un paisaje? ¿O es simplemente un cultivo? ¿Cómo la ven los demás? ¿Qué significa retomar esta categoría en un lugar donde la caña suele asociarse más a la política, a las élites y al conflicto que a la materialidad misma de la planta?",
    "Me di cuenta de que algo escapaba a la conversación pública: aunque la caña define gran parte de la visualidad del Valle y de Cali, se habla poco de ella como paisaje. La normalizamos, la pasamos de largo. Asumimos que siempre ha estado ahí, como si fuera un telón fijo, un fondo naturalizado. Pero ¿qué hace que algo sea paisaje? Si el paisaje es expresión del territorio, ¿qué expresa la caña en este valle? ¿Cómo leer un monocultivo que ha sido símbolo del extractivismo y del neocolonialismo?",
    "Con el tiempo entendí que aquello que me inquietaba tenía que ver con un supuesto muy extendido: que un paisaje debe ser bello. Y el paisaje cañero, más que bello, suele ser repetitivo, monótono, abrumador. Pero eso no lo excluye de ser paisaje; al contrario, lo vuelve aún más significativo. Dentro de la ciudad, la caña se vuelve difusa, aparece en fragmentos; pero en muchas zonas de Cali, o en los municipios del Valle y el Cauca, es un vecino constante y en algunos contextos hasta violento. Y, aun así, hay una distancia: la ciudad convive con la caña, pero no siempre la reconoce.",
    "Fue entonces cuando entendí que el paisaje no es solo material: es, sobre todo, narrado (Bravo, 2010). Existe en la forma en que lo representamos, en cómo se institucionaliza, en cómo se cuela en lo cotidiano. El paisaje cañero no es evidente a primera vista, pero sí es un campo de conflicto. Cali, una ciudad atravesada por migraciones, memorias diversas y profundas desigualdades, ha construido su relación con la caña desde múltiples lugares. La pedagogía, la industria, la política, la cultura y la infraestructura han moldeado esta imagen que hoy, aunque parezca natural, es resultado de decisiones históricas concretas.",
    "Aquí aparece una idea clave: el paisaje cañero como paisaje de blanqueamiento, donde el territorio se reconfigura para parecer moderno, productivo, “civilizado”. Se instala un discurso de desarrollo y de riqueza que no solo ordena el territorio, sino que borra otros paisajes posibles: paisajes campesinos, indígenas, afrodescendientes; paisajes de montaña, de agua, de borde (Perafán, 2025).",
    "En nombre del progreso, se pule la imagen del Valle hasta hacerla homogénea. Y con esa homogeneidad viene la distancia: ya no es un espacio para todos, sino para los ingenieros, los técnicos, los expertos. Una tierra administrada desde arriba, donde muchos habitantes terminan sintiéndose foráneos en su propio territorio. Ese blanqueamiento territorial no solo reconfigura el espacio; también produce desarraigo (Perafán, 2025).",
    "Mirar este paisaje es mirar una historia de regulación del territorio basada, muchas veces, en ver el entorno como un recurso a explotar. Es también enfrentarse a tensiones contemporáneas: debates ambientales, patrimonialización del paisaje, eventos internacionales como la COP16, la soberanía alimentaria y energética, los recursos naturales, el conflicto por la tierra. La caña está ahí, en el lente.",
    "Pero preguntarse por el paisaje cañero no significa quedarse atrapada en el monocultivo ni en el pesimismo que suele generar. También es recordar que Cali no es solo caña: “Cali también es loma”, es río, borde, cerro, barrio, humedad, y en el Valle es una diversidad de paisajes y formas de relacionarse con este mismo paisaje cañero. Ver más allá de esa planicie verde es volver a preguntarnos cómo queremos habitar este territorio. ¿Qué otros paisajes podemos imaginar? ¿Qué relaciones con el entorno queremos construir? ¿Cómo abrir espacio a otros verdes, otras memorias, otras formas de estar?",
    "Reconocer el paisaje cañero, incluso como símbolo de ideologías hegemónicas, no es aceptarlo pasivamente. Es entenderlo como parte de la historia de la región, de las luchas sociales y de las maneras diversas de habitar. Sobre todo, es una posibilidad para pensar otras imágenes y otras formas de ver.",
    "Porque el paisaje no es algo que simplemente se contempla: es algo que se pregunta, se discute y se transforma.",
    "Y si este paisaje cañero se impuso como futuro, como horizonte posible, como promesa “blanca”, entonces cabe preguntarse: ¿qué otras formas de resistencia, de imaginación y de creación ciudadana pueden abrirse para reclamar otros paisajes y otras maneras de habitar el territorio?"
    ],
  },
  "distintos-tonos-de-verde": {
    title: "Distintos tonos de verde",
    intro:
      "Escrito por Gabriela Cobo.",
    body: [
    "El sereno de las seis de la mañana, salir sin desayunar y montarse al campero para recorrer las vías del valle hasta las faldas de la cordillera central. Los viajes, más que simples distancias de un punto a otro, son lecciones en sí mismos. Basta detenerse a observar, caminar, compartir los trayectos para comprender la magnitud de la vida rural.",
    "Esta es una viñeta de viajes por el Valle del Cauca: carreteras, derrumbes, desvíos, muchos verdes e historias. Entre conversaciones sobre la vida campesina o silencios mirando por la ventana, la geografía se desplegaba diversa, viva y contradictoria.",
    "«¿Pero por qué se asusta?», me decían entre risas, mientras yo me estremecía frente a los abismos, «si estamos en el valle y el valle es plano». (Campesino de Guacarí)",
    "Salir de Buga por la carretera principal era entrar a un desierto verde parejo: caña, nada más que caña. La planicie del valle, cubierta enteramente por el monocultivo, ha despojado a campesinos y a diversos cultivos. El maíz, el algodón y la yuca habían cedido ante el boom cañero de los años ochenta. Y con ellos, también se desplazó la vida rural hacia las montañas.",
    "Al subir más allá de los municipios centrales, el paisaje cambiaba. Aparecían potreros, pequeñas fincas, plátano, café, más vegetación. Las montañas estaban más cerca y la caña ya no era un horizonte sin límites.",
    "«Aquí no puede subir la maquinaria de la caña, por ahora», decía un campesino de Guacarí.",
    "Ese «por ahora» me resonaba como un presentimiento. Y, sin embargo, el cambio de paisaje me confrontaba: seguíamos en el mismo Valle, pero el mapa en mi cabeza —ese que reduce lo rural a un borde periférico del municipio— se desdibujaba. Comprendí que la ruralidad no es un margen, sino la mayor parte del territorio, habitada por personas diversas, esenciales para la vida del departamento y del país.",
    "Conocer la geografía es reconocer que el Valle no es solo caña. Es también páramo, es Pacífico, es montaña. El monocultivo intenta homogeneizar, pero el territorio desborda esa imagen.",
    "«Yo cuando veo ese desierto de caña, solo me lo imagino como hubiera sido antes, lleno de osos palmeros, con plátano, yuca, maíz…», recordaba otro campesino de Guacarí.",
    "Viajar por estas geografías es reconocer las dificultades cotidianas de los campesinos y campesinas para llegar a la ciudad: caminos deteriorados, derrumbes en invierno, trayectos atravesados por la memoria del conflicto armado, cargas pesadas para comercializar productos que se venderán a precios injustos. No son solo desplazamientos físicos: son recorridos con una corporalidad en la experiencia etnográfica. Observar, caminar, escuchar se vuelve una forma de acercarse a las trayectorias de vidas campesinas. Porque los campesinos y campesinas no solo cultivan: también estudian, se enferman, trabajan, viajan, resisten…",
    "«¿Y para ti, qué significa ser campesinx?» La respuesta llegó en fragmentos: la finca tradicional; la semilla como memoria; la semilla como soberanía; la semilla como comunidad.",
    "Con las semillas criollas y nativas entendí esa complejidad. Frente al «desierto de caña», las semillas criollas y nativas se revelaban como archivo vivo, como resistencia heredada.",
    "«Nosotros nunca vamos a poder producir como la industria produce», decía un campesino de Tuluá. Y enseguida matizaba: «No se busca acabar con la industria, eso es imposible. Pero sí al menos tener una soberanía para lo local. Salvaguardando nuestras semillas, sembrando, compartiendo, intercambiando».",
    "Ese discurso, a la vez realista y potente, me mostró que no se trata de luchar contra un gigante en sus propios términos. Pero también allí se asoma una realidad: estas luchas locales no son del todo románticas, son conscientes de sus propios límites, y en esa conciencia se hace visible también el poder desbordante de la industria que delimita el horizonte. Las luchas campesinas tienen limitantes y no por falta de deseo o convicción, sino porque los campesinos y campesinas reconocen que no cuentan con las personas ni los medios para enfrentar directamente a la agroindustria.",
    "Por eso el poder simbólico de reivindicar la vida misma: cuidar la semilla, sostener economías locales, reconstruir la relación con la tierra desde la sinergia con la naturaleza. El acto de cultivar no es solo producir alimento, es una manera de relacionarse con el mundo, con la comunidad, consigo mismx.",
    "Es memoria y futuro; resistencia y cuidado.",
    "En esas prácticas cotidianas se gesta una transición local, que no busca acabar directamente con la agroindustria, pero sí desmontar su monopolio simbólico y material. Porque mantener la finca llena de verdes, olores y seres es también un acto político."
    ],
  },
  "hablar-desde-un-lugar": {
    title: "Hablar desde un lugar",
    intro:
      "Escrito por Gabriela Cobo.",
    body: [
    "Es inevitable no sentir cierta familiaridad al ver ese valle cubierto de caña. ¿Cómo no, si es lo que se ve al llegar a la ciudad? Lo que siempre vi y normalicé.",
    "Un espacio que durante un tiempo hasta el presente solo es un verde monótono.",
    "«Goleada de los azucareros.» «Hinchas de los azucareros.» «El paisaje se tiende a tus plantas y te rinde sus armas el sol, monta guardia la caña de azúcar y es el Valle lección de verdor.»",
    "«Si huele a caña, tabaco y brea usted está en Cali, ¡ay mire, vea!» «Con rico sabor de caña el Cauca dejó la montaña.»",
    "La caña se ve. Se ve de una forma, pero también se oculta de otra.",
    "Porque pensar el paisaje en Cali parece, a primera vista, innecesario: si no nos afecta, si no lo habitamos directamente, si ya está dado, naturalizado.",
    "¿Serán lágrimas blancas cuando intentamos mirar más allá? ¿O solo leña al fuego de discusiones sociales?",
    "Hablar de lo que nos configura es, también, aprender a hacer preguntas sobre lo que nos resulta familiar.",
    "No podemos olvidar que el espacio no se vive igual para todxs: no todos ven el mismo verde. Unos la ven como un verde de duelo, otros como un verde de futuro, otros apenas como un verde sin color.",
    "La caña ha configurado narrativas, memorias y formas de habitar el paisaje. Y no se trata de juzgar, de decidir cuál mirada es más correcta o política. Se trata de entender cómo se ha construido este paisaje cañero: bajo el lente de las intenciones, de la historia, de los hechos, de las imágenes y de los silencios.",
    "Puede que en Cali la caña no parezca importante (o lo sea demasiado). Puede que no estemos en contacto constante con ella, pero la ciudad ha sido un punto clave para narrar y contra-narrar el paisaje cañero.",
    "La caña está presente de muchas maneras, y también ha sido dejada de lado. De ahí el interés por hacernos preguntas: por pensar que desde lo urbano también tiene sentido mirar hacia lo rural, volver la vista a lo que está más allá, pero no es tan allá.",
    "Retomar esa relación con el espacio. Cali no es solo la capital del Valle; es un centro de enunciación, un punto donde confluyen miradas, tensiones y relatos del paisaje cañero.",
    "Hablar desde lo que vemos y vivimos, pero también desde lo que nos fue arrebatado. Un paisaje de duelo y de olvido, pero también de resistencia y producción constante.",
    "La caña es caña, sí, pero a la vez simboliza muchos ideales. Se interpreta de maneras diversas, porque encierra significados, prácticas, memorias, ideales y sensibilidades que oscilan entre glorificación, despojos y olvidos."
    ],
  },
  "cuando-la-brisa-llega": {
    title: "Cuando la brisa llega y el sol se queda",
    intro:
      "Escrito por Gabriela Cobo.",
    body: [
    "Vía Rozo · 12am · Hacienda cañera.",
    "Mientras uno viaja por las carreteras del Valle, lo que domina la mirada es la caña. Extensos cultivos de un verde espeso acompañan todo el trayecto. Son carreteras largas, recorridas a velocidad, donde el paisaje parece repetirse sin fin. Desde allí, desde esa velocidad de 90 km/h, nada se ve detrás de esos muros vegetales: ni casas, ni personas, ni animales.",
    "A veces, alguna máquina; otras, los trabajadores que controlan el tránsito para permitir que los trenes cañeros y los camiones entren o salgan de los cultivos. Pero casi nunca aparece un cuerpo humano sosteniendo ese paisaje.",
    "En una de esas, nos detuvimos. Rompimos con los noventa por hora y entramos a esa carretera de barro. Bastó avanzar unos metros para que la caña dejara de ser una línea a lo lejos y se volviera alta, envolvente, casi una muralla.",
    "«Ellos están allá, en un palo almorzando.» Bajo un pequeño guanábano, sentados sobre un plástico negro y descalzos, almorzaban cinco trabajadores. Cazando la sombra. «Siéntense acá que les pican las hormigas.» Nos recibieron así, entre la caña.",
    "«No, no somos corteros, eso ya casi no se hace. Pero sí somos trabajadores de caña.» Aquella frase abrió una pregunta que había estado rondando durante el trayecto: ¿qué es hoy un trabajo digno en la industria cañera?",
    "La historia pesa: las luchas de los corteros, las movilizaciones en el Valle y el Cauca, especialmente el paro más reciente de corteros de caña del 2008, siguen presentes como memoria social. Pero ahora, gran parte del trabajo ha sido mecanizado. Ellos, los que almorzaban bajo el guanábano, no cortan caña: limpian los surcos, abonan la tierra, siembran.",
    "«Si no fuera por nosotros no habría caña.» En su afirmación se cuela un punto ciego del discurso industrial: la agroindustria se enuncia a sí misma como altamente tecnificada, eficiente, moderna. Sin embargo, todavía depende de cuerpos que trabajan dentro de esos campos. Y tampoco es fácil englobarlo todo en un solo sistema: están los cultivos de los ingenios, sí, pero también los proveedores, fincas que siembran para venderles la materia prima.",
    "«Que se quede lo que sea, menos el jugo.» El sol es un actor constante. A veces sentimos que es el mismo, pero dentro de estos campos se descubre que no pica de la misma manera en todos los espacios. Uno de ellos señaló hacia Rozo: «Mi casa queda como por allá, por donde está el sol.»",
    "El trabajo cañero es pesado: el sol, la búsqueda obsesiva de una sombra, las vías enlodadas cuando llueve, el dilema de sacar las motos entre el barro.",
    "«¿Baño? Jajajá, de aquí que llegue a la hacienda. Eso es abono.» «¿Y es bueno aguantar?» «Sí, porque eso lo hace fuerte a uno, no como las generaciones de ahora que no aguantan ni un día.» Esa idea del “aguante” aparece una y otra vez en los relatos: trabajar duro como virtud, y las nuevas generaciones descritas como frágiles. Pero queda la pregunta abierta: ¿hasta qué punto es “bueno” aguantar? ¿No se trata más de garantizar condiciones dignas, más que de resistirlas?",
    "«Al menos el domingo nos acostamos tranquilos sabiendo que tenemos trabajo el lunes.» Son veintitrés trabajadores para toda la hacienda, un número pequeño para lo que parecen ser muchas hectáreas. Tienen contrato, horarios, prestaciones.",
    "«Claro, pero esa gente debe tener mucha plata.» La frase queda suspendida, como un eco que habla de las distancias: entre quienes trabajan la caña y quienes la administran, entre lo que se ve desde la carretera y lo que no.",
    "«Nosotros nos vamos con la brisa.» Y en efecto, a las cuatro de la tarde el sol empieza a bajar y llega una brisa suave. Las bicicletas se alinean: machetes colgados, gorros, insecticidas, cocas vacías, papel higiénico en una bolsa plástica, alcohol, parches para la bici. Algunos pedalean hacia la hacienda; otros siguen hasta Rozo; otros prenden la moto.",
    "Es tan fácil ver todo esto desde la carretera: un paisaje ordenado, verde, homogéneo. Pero adentro hay trabajo duro, jornadas pesadas, fuerza física y largos desplazamientos. No se trata de romantizar, sino de pensar en los rostros detrás de cada surco.",
    "«Aquí no hay animales… bueno, zorritos cañeros, pero ya.» Y también pensar en los rostros que ya no se ven: animales, árboles, ríos… y los rostros del poder, que se esconden bajo discursos de desarrollo y productividad.",
    "Adentrarse en el cañal es ver la antropología en aquello que la velocidad desdibuja: los miles de verdes que parecen iguales, pero que guardan mundos distintos."
    ],
  },
};

function VinetaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const vineta = vinetasContent[id];

  if (!vineta) {
    return (
      <main className="vineta-detalle-page">
        <section className="vineta-detalle-body">
          <p>No encontramos esta viñeta.</p>
          <button
            type="button"
            className="vineta-back"
            onClick={() => navigate("/vinetas")}
          >
            Volver a viñetas
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="vineta-detalle-page">
      <section className="vineta-detalle-header">
        <p className="vineta-detalle-overline">
          <Link to="/vinetas" className="vineta-detalle-overline-link">
            Viñetas etnográficas
          </Link>{" "}
          · {vineta.title}
        </p>
        <h1 className="vineta-detalle-title">{vineta.title}</h1>
        <p className="vineta-detalle-intro">{vineta.intro}</p>
      </section>

      <section className="vineta-detalle-body">
        {vineta.body.map((paragraph, idx) => (
          <p key={idx} className="vineta-detalle-paragraph">
            {paragraph}
          </p>
        ))}

        <button
          type="button"
          className="vineta-back"
          onClick={() => navigate(-1)}
        >
          ← Volver
        </button>
      </section>
    </main>
  );
}

export default VinetaDetalle;
