// src/pages/VinetaDetalle.jsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./vinetaDetalle.css";

const vinetasContent = {
  "paisajecanero": {
    /* ====== VIÑETA: paisaje cañero (con links a Archivos) ====== */
    title: "Paisaje cañero",
    intro: "Escrito por Gabriela Cobo",
    body: [
      <>
        Hablar de paisaje es hablar de una relación: la del individuo con su entorno, pero también la de una
        mirada con aquello que decide ver{" "}
        (<Link to="/archivos#refs-paisaje-canero" className="ref-inline">Martínez de Pisón, 2010</Link>). Esa
        mirada nunca es neutra; está hecha de recuerdos, experiencias, saberes y afectos que transforman el
        territorio en algo más que un fondo. En ese gesto, cuando la tierra deja de ser solo superficie útil y
        empieza a hablarnos, es cuando nace el paisaje. No como una imagen, sino como un modo de estar en el
        mundo.
      </>,

      <>
        Por eso se dice que el paisaje es expresión del territorio: un tejido que reúne lo ecológico, lo
        histórico, lo sensible y lo geográfico{" "}
        (<Link to="/archivos#refs-paisaje-canero" className="ref-inline">Martínez de Pisón, 2018</Link>). El
        paisaje es una suma de todo eso, pero también un lenguaje. Una forma de nombrar lo que, sin ser dicho,
        ya nos afecta. Aprender a ver un paisaje implica aprender a leerlo, a reconocer en él las huellas del
        pasado y las tensiones del presente{" "}
        (<Link to="/archivos#refs-paisaje-canero" className="ref-inline">Ingold, 1993</Link>).
      </>,

      <>
        Desde esta mirada, los paisajes no son escenarios pasivos sino construcciones culturales. Surgen de la
        interacción entre las relaciones sociales y el mundo natural; entre la memoria y la práctica cotidiana{" "}
        (<Link to="/archivos#refs-paisaje-canero" className="ref-inline">Andermann, 2008</Link>). Todo paisaje
        es político: encarna decisiones, silencios y formas de ordenar lo visible{" "}
        (<Link to="/archivos#refs-paisaje-canero" className="ref-inline">Delgado, 2010</Link>). Naturaliza modos
        de habitar, de valorar la vida, de imaginar el progreso. Y al mismo tiempo es sensible, cualitativo,
        heterogéneo: una experiencia en la que percepción, emoción y memoria se trenzan.
      </>,

      "Fue desde allí que comenzó mi interés por el paisaje. Me llamó la atención esa intersección entre lo material y lo ideológico, entre el espacio real y lo que proyectamos sobre él. Siempre he sentido que el espacio habla de lo que somos y de aquello que nos habita. Por eso, cuando empecé a pensar en el paisaje cañero, el interés vino acompañado de dudas.",

      "¿La caña puede considerarse un paisaje? ¿O es simplemente un cultivo? ¿Cómo la ven los demás? ¿Qué significa retomar esta categoría en un lugar donde la caña suele asociarse más a la política, a las élites y al conflicto que a la materialidad misma de la planta?",

      "Me di cuenta de que algo escapaba a la conversación pública: aunque la caña define gran parte de la visualidad del Valle y de Cali, se habla poco de ella como paisaje. La normalizamos, la pasamos de largo. Asumimos que siempre ha estado ahí, como si fuera un telón fijo, un fondo naturalizado. Pero ¿qué hace que algo sea paisaje? Si el paisaje es expresión del territorio, ¿qué expresa la caña en este valle? ¿Cómo leer un monocultivo que ha sido símbolo del extractivismo y del neocolonialismo?",

      "Con el tiempo entendí que aquello que me inquietaba tenía que ver con un supuesto muy extendido: que un paisaje debe ser bello. Y el paisaje cañero, más que bello, suele ser repetitivo, monótono, abrumador. Pero eso no lo excluye de ser paisaje; al contrario, lo vuelve aún más significativo. Dentro de la ciudad, la caña se vuelve difusa, aparece en fragmentos; pero en muchas zonas de Cali, o en los municipios del Valle y el Cauca, es un vecino constante y en algunos contextos hasta violento. Y, aun así, hay una distancia: la ciudad convive con la caña, pero no siempre la reconoce.",

      <>
        Fue entonces cuando entendí que el paisaje no es solo material: es, sobre todo, narrado{" "}
        (<Link to="/archivos#refs-paisaje-canero" className="ref-inline">Bravo, 2010</Link>). Existe en la forma
        en que lo representamos, en cómo se institucionaliza, en cómo se cuela en lo cotidiano. El paisaje
        cañero no es evidente a primera vista, pero sí es un campo de conflicto. Cali, una ciudad atravesada
        por migraciones, memorias diversas y profundas desigualdades, ha construido su relación con la caña
        desde múltiples lugares. La pedagogía, la industria, la política, la cultura y la infraestructura han
        moldeado esta imagen que hoy, aunque parezca natural, es resultado de decisiones históricas concretas.
      </>,

      <>
        Aquí aparece una idea clave: el paisaje cañero como paisaje de blanqueamiento, donde el territorio se
        reconfigura para parecer moderno, productivo, “civilizado”. Se instala un discurso de desarrollo y de
        riqueza que no solo ordena el territorio, sino que borra otros paisajes posibles: paisajes campesinos,
        indígenas, afrodescendientes; paisajes de montaña, de agua, de borde{" "}
        (<Link to="/archivos#refs-paisaje-canero" className="ref-inline">Perafán, 2025</Link>).
      </>,

      <>
        En nombre del progreso, se pule la imagen del Valle hasta hacerla homogénea. Y con esa homogeneidad
        viene la distancia: ya no es un espacio para todos, sino para los ingenieros, los técnicos, los
        expertos. Una tierra administrada desde arriba, donde muchos habitantes terminan sintiéndose foráneos
        en su propio territorio. Ese blanqueamiento territorial no solo reconfigura el espacio; también produce
        desarraigo{" "}
        (<Link to="/archivos#refs-paisaje-canero" className="ref-inline">Perafán, 2025</Link>).
      </>,

      "Mirar este paisaje es mirar una historia de regulación del territorio basada, muchas veces, en ver el entorno como un recurso a explotar. Es también enfrentarse a tensiones contemporáneas: debates ambientales, patrimonialización del paisaje, eventos internacionales como la COP16, la soberanía alimentaria y energética, los recursos naturales, el conflicto por la tierra. La caña está ahí, en el lente.",

      "Pero preguntarse por el paisaje cañero no significa quedarse atrapada en el monocultivo ni en el pesimismo que suele generar. También es recordar que Cali no es solo caña: “Cali también es loma”, es río, borde, cerro, barrio, humedad, y en el Valle es una diversidad de paisajes y formas de relacionarse con este mismo paisaje cañero. Ver más allá de esa planicie verde es volver a preguntarnos cómo queremos habitar este territorio. ¿Qué otros paisajes podemos imaginar? ¿Qué relaciones con el entorno queremos construir? ¿Cómo abrir espacio a otros verdes, otras memorias, otras formas de estar?",

      "Reconocer el paisaje cañero, incluso como símbolo de ideologías hegemónicas, no es aceptarlo pasivamente. Es entenderlo como parte de la historia de la región, de las luchas sociales y de las maneras diversas de habitar. Sobre todo, es una posibilidad para pensar otras imágenes y otras formas de ver.",

      "Porque el paisaje no es algo que simplemente se contempla: es algo que se pregunta, se discute y se transforma.",

      "Y si este paisaje cañero se impuso como futuro, como horizonte posible, como promesa “blanca”, entonces cabe preguntarse: ¿qué otras formas de resistencia, de imaginación y de creación ciudadana pueden abrirse para reclamar otros paisajes y otras maneras de habitar el territorio?",
    ],
  },

  "distintos-tonos-de-verde": {
    title: "Distintos tonos de verde",
    intro: "Escrito por Gabriela Cobo.",
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
      "En esas prácticas cotidianas se gesta una transición local, que no busca acabar directamente con la agroindustria, pero sí desmontar su monopolio simbólico y material. Porque mantener la finca llena de verdes, olores y seres es también un acto político.",
    ],
  },

  "hablar-desde-un-lugar": {
    title: "Hablar desde un lugar",
    intro: "Escrito por Gabriela Cobo.",
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
      "La caña es caña, sí, pero a la vez simboliza muchos ideales. Se interpreta de maneras diversas, porque encierra significados, prácticas, memorias, ideales y sensibilidades que oscilan entre glorificación, despojos y olvidos.",
    ],
  },

  "cuando-la-brisa-llega": {
    title: "Cuando la brisa llega y el sol se queda",
    intro: "Escrito por Gabriela Cobo.",
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
      "Adentrarse en el cañal es ver la antropología en aquello que la velocidad desdibuja: los miles de verdes que parecen iguales, pero que guardan mundos distintos.",
    ],
  },

  "gestovisual": {
    title: "Gesto visual",
    intro: "",
    body: [
      "“Muy potente que traigan esto a la ciudad”. Transeúnte en Cali",
      "“Yo fui cortero de caña y ver esto me hace sentir que la labor fue y es reconocida”. Transeúnte en Cali",
      "“Pongámoslo aquí, junto a la mujer indígena”. Participante del taller",
      "“O acá (señalando debajo de un grafiti que dice la tierra para la gente), como si se estuvieran reafirmando… bello”. Participante del taller",

      <>
        La serigrafía es una técnica de impresión que consiste en trasladar una imagen al papel mediante un procedimiento
        manual, repetido un número determinado de veces. En este caso, se imprimieron 200 copias.
      </>,

      <>
        Tras tomar las fotografías, se eligieron aquellas imágenes capaces de transmitir los rostros detrás de la caña: una
        mirada, una cotidianidad, un rostro sin rostro y, a la vez, profundamente rostro. Dos imágenes pensadas no solo como
        representación, sino como gesto.
      </>,

      <>
        El proceso pasó de la fotografía a la matriz, de los llenos y los vacíos. Desde un trabajo artesanal, se grabaron ambas
        imágenes en una malla. Papel ubicado, baja el marco, pintura. Una pasada para recargar, otra para imprimir. Retirar el
        papel, poner a secar, y seguir con el siguiente. Repetir el gesto.
      </>,

      <>
        Las dos imágenes buscaban lo mismo: darle un rostro a la caña. Mostrar que, aunque la caña esté presente (a veces de
        manera invasiva), detrás de ese paisaje hay personas, actividades, presencias visibles y otras borradas.
      </>,

      <>
        Que las calles hablan. Porque el artivismo es una forma de convertir el arte en un acto político: la imagen como gesto
        intencionado, capaz de activar algo en la ciudad. También como una manera de traer al espacio urbano una pregunta
        insistente: ¿Cómo vemos el paisaje cañero?
      </>,

      <>
        Pegarlos rápido: en pósteres, muros, distintas superficies. Que algunos volteen a mirar; que a otros les gane el chisme;
        que sigan de largo pero regresen la mirada. Que haya quienes se quejen, quienes prohíban, quienes lo vean feo, quienes
        pregunten, a quienes les guste y quienes apoyen. Caminamos por la ciudad del ocaso, mientras pegamos en colectivo esas
        dos serigrafías, ahí mientras caminamos nos dimos cuenta que Cali es gigante. Y ojalá pudiéramos caminar todos los
        kilómetros para llegar a cada rincón.
      </>,

      <>
        Con los días, el papel pasa de blanco a amarillo. Se rasga. Lo quitan o se despega. Las expresiones urbanas pueden ser
        profundamente efímeras. Por eso no se trata de un solo día. Es volver a pegar, volver a caminar, volver a hacer el gesto,
        incluso sabiendo que al día siguiente quizá ya no esté.
      </>,

      <>
        Porque en la ciudad la velocidad no se detiene, pero la imagen queda en discusión. No es un gesto que lo cambie todo,
        pero funciona como un cadáver exquisito: una palabra más que nutre un texto mayor.
      </>,
    ],
  },

  "paisaje": {
    title: "Paisaje",
    intro: "Escrito por JHUCONHACHE.",
    body: [
      "Separar la obra del artista, es como separar la piel de la carne humana, aun sabiendo que “las cosas no son de apariencia sino de esencia” como afirma Le Corbusier, es ver el sutil detalle de las diferentes estéticas.",
      "¿Separar el paisaje de lo humano?",
      "Contemplado, replicado, mutilado, distante, sereno, colorido, tarareado, ilustrado, enmarcado, árido, productivo, recorrido, silenciado, proclamado, antiguo, abandonado.",
      "Yace el paisaje en la piel humana, en lo cotidiano sin contemplación, una situación que para los simples ojos no reflexivos del detalle, han convertido la palabra en un hecho efímero sin importancia. En la actualidad es común escuchar que “las cosas hacen o se han vuelto un paisaje” pero no se cuestiona dicha afirmación, pues los objetos y el contexto se convierte en paisaje cuando se pierde la relación íntima del yo en la gran escala, pues la pérdida de dicha escala hace que se olvide el valor de lo íntimo, de la historia, de la piel habitada, piel que ya no es piel y del ritmo que conlleva la contemplación del paisaje que es similar al ritmo que marca la vida en la posmodernidad, una mirada sin contemplación, sin cuestionamientos, pues el contexto construido ser paisaje se vuelve genérico, sin contexto, producto de un capitalismo tardío o sobreescalado, pero como luchar con este abandono, cuando dicho paisaje ha marcado una huella romántica para muchos y dolorosa para pocos, es entonces que el bienestar común prima sobre el dolor individual.",
      "Entonces: ¿Debemos callar el dolor de los otros?",
      "Contemplamos el dolor del otro, lo cantamos, lo vanagloriamos, lo olvidamos porque no es nuestro porque lo convertimos en paisaje; es así que el paisaje cañero calla y mutila la historia de sus trabajadores, una tierra del olvido, un dolor paisajístico que ha sido promovido sin rostro, sin voz, sin huella.",
    ],
  },

  "cmezcla": {
    title: "La cínica mezcla de lo dulce y barato",
    intro: "Escrito por Manuela Cobo",
    body: [
      <>
        La caña, el azúcar, los dulces no son productos inocentes. Detrás de ellos toda una industria mortífera que se
        esconde detrás de slogans, imágenes coloridas, leyes que rozan la inmoralidad. No olvidemos las mascotas de la
        comida chatarra: el Osito Bimbo, el Tigre Toño, el gallo Cornelio o Melvin. ¡No por nada las prohibieron! Hacían
        ver inocente un producto extremadamente malo para la salud. Pero, sobre todo, formaban parte de una técnica
        publicitaria que manipulaba abiertamente a los niños (
        <Link to="/archivos#refs-cmezcla" className="ref-inline">
          OPS, 2011; Hastings et al., 2006
        </Link>
        ).
      </>,

      <>
        Aunque algunos estados han puesto límites, siguen existiendo muchas formas de permisividad: bebidas azucaradas en
        escuelas públicas, publicidad digital casi sin control dirigida a menores, lobby constante contra impuestos al
        azúcar o etiquetas de advertencia. Todo esto, pese a la evidencia clara que vincula el consumo de azúcares añadidos
        con obesidad, diabetes tipo 2 y enfermedades cardiovasculares, especialmente en niños y poblaciones vulnerables (
        <Link to="/archivos#refs-cmezcla" className="ref-inline">
          OMS, 2015; Lustig et al., 2012; Moodie et al., 2013
        </Link>
        ).
      </>,

      <>
        Y esto solo es una ínfima parte de los miles de escándalos en torno a esta industria. En países como Colombia, la
        expansión de los monocultivos de caña se presentó como progreso, modernización y desarrollo. Pero también trajo
        empobrecimiento de campesinos, daños ambientales y un deterioro profundo de la salud pública, tanto a nivel nacional
        como global. Todo para producir en masa alimentos ultraprocesados cuyos efectos siguen siendo ampliamente
        subestimados.
      </>,

      <>
        Algunos investigadores incluso comparan estos productos con drogas, en la medida en que pueden generar consumo
        compulsivo. La OMS define una droga como “una sustancia que altera el funcionamiento del organismo y puede generar
        dependencia.” Sin forzar la analogía, muchos estudios muestran que el azúcar, sobre todo en productos
        ultraprocesados, activa intensamente los circuitos de recompensa del cerebro, lo que favorece el consumo repetido y
        dificulta parar.
      </>,

      <>
        Lo más grave es que este daño es lento, silencioso y socialmente banalizado. Nadie dice que alguien murió por sobredosis
        de azúcar. Se dice que murió de un infarto, de un ACV o de diabetes, enfermedades comunes que esconden las causas
        estructurales detrás de ellas.
      </>,

      <>
        ¿Y cómo llegamos a crear prácticamente drogas a partir de comida? Con técnicas culinarias y químicas basadas en un
        conocimiento profundo de nuestro sistema de recompensa y mecanismos de saciedad. Estudios probaron que:
      </>,

      <>
        “Los alimentos ultraprocesados se caracterizan por ser hiperpalatables. Este término hace referencia a la anulación de
        los mecanismos de la saciedad que funcionan habitualmente en el cuerpo y el cerebro. Las combinaciones sensoriales de
        estos alimentos los hacen, por tanto, menos saciantes, llevando a un consumo excesivo de los mismos.”
        (
        <Link to="/archivos#refs-cmezcla" className="ref-inline">
          Martí del Moral, Calvo &amp; Martínez, 2021, p. 178
        </Link>
        )
      </>,

      <>
        Las consecuencias son claras: solo en 2021, la diabetes causó directamente alrededor de 1,6 millones de muertes en el
        mundo, sin contar todas las complicaciones asociadas.
      </>,

      <>
        Aun así, estas dinámicas siguen siendo legitimadas por discursos neoliberales que ponen toda la responsabilidad en
        el individuo, incluso cuando se trata de niños. Las industrias presentan el daño como resultado de malas elecciones
        personales, lo que permite evitar regulaciones reales (
        <Link to="/archivos#refs-cmezcla" className="ref-inline">
          Moodie et al., 2013
        </Link>
        ).
      </>,

      'These industries frame harm as the result of individual choice rather than corporate practices, thereby resisting effective regulation (Moodie et al., 2013).',

      <>
        Lo más preocupante es que este discurso ha sido interiorizado por mucha gente. Se piensa que comer demasiado azúcar
        es cuestión de falta de voluntad, descuido personal o incluso debilidad psicológica, sin tener en cuenta el contexto
        social, económico y cultural en el que se forman nuestros hábitos. Se olvida también que muchos crecimos rodeados de
        azúcar, sin educación nutricional real y con una normalización constante del riesgo.
      </>,

      <>
        Esto se traduce, además, en culpabilizar a las familias. Aunque padres y cuidadores tienen un rol importante, su margen
        de acción está limitado por la oferta disponible, los precios, la publicidad y sus propias trayectorias alimentarias,
        muchas veces marcadas por los mismos productos que hoy se cuestionan.
      </>,

      <>
        La responsabilidad es colectiva, pero no está distribuida de forma justa. Recae sobre todo en la agroindustria, en los
        equipos de marketing, los políticos. Los sellos octagonales negros en América Latina o el nutri-score en Europa son
        importantes pero no pueden ser la única medida que se aplique. Tiene que haber un esfuerzo colectivo. De otro modo,
        los industriales más “responsables” van a seguir cayendo en quiebra o van a seguir vendiendo sus productos a un precio
        exorbitante. Tienen que haber regulaciones nacionales y hasta internacionales de la venta de productos nocivos para
        la salud. No solo de prohibir sino de transformar el valor de los productos, no en función del potencial número de
        ventas, sino según el aporte nutricional.
      </>,

      <>
        Y no toca hacerlo solo por la salud humana, sino también por la salud ambiental. Si continuamos explotando la tierra
        como lo hacemos la vamos a agotar hasta matarla y con ella toda posibilidad de seguridad alimentaria.
      </>,

      <>
        Claro está, no se pueden hacer tales cambios estructurales sin continuar combatiendo el problema en todas las
        escalas. De otro modo hay el riesgo de desplazamiento hacia mercados informales o de reforzamiento de desigualdades
        sociales. Por ello, deben mantenerse y reforzarse los programas de prevención y educación desde la escuela.
      </>,

      <>
        Y digo y denuncio todo esto porque me choca, cada vez que llego a Cali, ver la caña ahí: omnipresente, tranquila, sin
        ningún ruido alrededor. Como si no pasara nada detrás de esos campos interminables. Pero víctimas sí que las hay,
        solo que no siempre se ven.
      </>,
    ],
  },

  /* ====== NUEVA VIÑETA ====== */
  "diario-de-campo": {
    title: "Diario de campo de una tesis",
    intro: "Escrito por Gabriela Cobo.",
    body: [
      <>
        <strong>Acto #1: Un verde no tan verde: problematizando un paisaje pintado de estable</strong>
      </>,
      "Nací y crecí en Cali, durante toda mi vida, la caña de azúcar estuvo ahí, presente, pero no me percataba de ella. Era un paisaje normalizado, algo que no generaba preguntas porque siempre había sido lo que veía. En mi contexto social tampoco era un tema de conversación ni de cuestionamiento: viviendo en la ciudad, sin un contacto directo, la caña aparecía como algo lejano.",
      "Recuerdo momentos puntuales en los que su presencia se hacía evidente. Cuando íbamos al pueblo de mi mamá, mi mamita barría y recogía la ropa apurada a las seis de la tarde porque caía el tizne. “Están quemando caña”, decía.",
      "Cada vez que regresaba al Valle, los extensos cultivos eran una señal clara de que ya estábamos allí. Pero los veía siempre desde una ventana, como si fueran un paisaje neutro, casi decorativo.",
      "Mientras avanzaba durante la carrera, ese verde empezó a adquirir otros significados. Un punto de quiebre fue mi semestre de intercambio en la Universidad Icesi. Estudiar antropología y vivir en Cali durante ese tiempo me permitió comprender que ese paisaje no era tan neutral como había creído. Descubrí historias de personas desplazadas por la caña, relatos de quienes la sienten asfixiante, el poder de las elites, la historia misma de Cali…",
      "Comencé entonces a pensar la relación con la tierra desde otros lugares. A ver la caña no solo como cultivo, sino como símbolo. La historia del departamento se ha configurado en torno a esta agroindustria, y ese proceso ha marcado profundamente el territorio. Notar cómo, este paisaje se vive de tan diferentes maneras me llevó a mirar este verde desde otros tonos.",

      <>
        <strong>Acto #2: Y ¿cómo veremos este verde?</strong>
      </>,
      "Llegué a este tema de interés hace tiempo. Siempre que podía, leía sobre la caña; si había un trabajo en el que pudiera abordarla, lo hacía. Poco a poco fui sumergiéndome en el tema. Cuando llegué a PTG, sin embargo, la experiencia fue abrumadora. Sabía que quería hablar de esto, no solo por afinidad personal, sino también porque lo sentía como una forma de incidencia: algo necesario dentro de las discusiones y los sucesos que han marcado al Valle del Cauca en torno a la caña.",
      "Al mismo tiempo, me sentía desmotivada. Todo parecía ya dicho. Cada texto que leía me dejaba la sensación de no saber qué podía aportar yo ahora. Y creo que esa sensación es común en cualquier proceso de investigación: rara vez se dice algo completamente nuevo, pero sí importa desde dónde y cómo se dice.",
      "Sobre la caña de azúcar existen múltiples investigaciones que la problematizan, y durante un tiempo no sabía por dónde entrar ni qué más podía decir. Fue entonces cuando volví a mis gustos personales por la creación y me permití pensar que podía juntar ambas cosas. En el fondo, esa decisión me resultó más honesta.",
      "Algo que también fue nutriendo mi formación como antropóloga fue el arte: ir al cine, a exposiciones, a talleres. En cada película o evento encontraba preguntas antropológicas. A partir de ahí comencé a pensar cómo se ha mostrado visualmente el paisaje cañero y a interesarme por el poder de las narrativas.",
      "Como yo, seguramente muchas personas construyen su percepción de la realidad a partir de lo que escuchan, de las historias que circulan y de lo que ven en su cotidianidad. Comprender esto me llevó a querer abordar esta investigación desde las narrativas visuales del paisaje cañero. “Porque el espacio se produce”, jamás olvidaré esa clase y una de esas producciones es como nos cuentan las historias",

      <>
        <strong>Acto #3: ¿Porque detenerse a ver?: un motivo de incidencia</strong>
      </>,
      "Y el IMCA…no quiero dejar esta etapa aparte porque fue reveladora. Durante mi pasantía en Buga, mi pre-proyecto comenzó a desconfigurarse. “está lloviendo sobre mojado”.",
      "Me recalcaban que la caña de azúcar ya había sido ampliamente estudiada y que hacen falta investigaciones que visibilizan otros paisajes del Valle del Cauca. Al inicio fue un golpe, porque era cierto. Pero también fue una oportunidad para comprender algo fundamental: el Valle no es solo caña.",
      "Conocer el IMCA fue acercarme a otras historias y a otras formas de mirar el territorio. Fue entrar en contacto con procesos de campesinado, con luchas y resistencias que rara vez ocupan el centro del relato regional. Ese encuentro me ayudó a pensar cómo abordar el tema sin caer en la redundancia y, al mismo tiempo, a reconocer que incluso yo seguía siendo, de alguna forma, ciega ante la caña: ahora la veía y la problematizaba, pero también me encerraba en ella.",
      "Mirar el Valle desde los procesos campesinos amplió mi campo de visión más allá del monocultivo. Y, aun así, decidí seguir con la caña. “Al que quiera más, que le piquen caña”. No por terquedad, sino porque, después de todo, seguía viéndole una enorme potencialidad. ¿Por qué persiste el imaginario de que en el Valle solo hay caña? ¿Por qué algunas narrativas circulan con más fuerza que otras? Estas preguntas me llevaron a profundizar en cómo se han configurado el Valle del Cauca y la ciudad de Cali en torno al paisaje cañero, cuando en realidad no siempre fue así y cuando existen otros paisajes que, aunque menos visibles, siguen presentes y en lucha.",

      <>
        <strong>Acto #4: Otrxs también lo ven: estado de arte de contra imágenes del paisaje cañero</strong>
      </>,
      "En un punto de la investigación entendí que no podía hacerlo sola. Pensar en narrativas es pensar en historias, y eso implicaba necesariamente salir a hablar con la gente. Exponerse. Escuchar.",
      "El inicio de esta etapa fue difícil. No le encontraba sentido a lo que estaba haciendo y me sentía perdida. Sin embargo, una recomendación se repetía constantemente: sal, habla con la gente. Fue a través de las entrevistas que la caña comenzó a hacerse más presente. En cada conversación aparecían vínculos distintos: personas que la ven a diario, otras que trabajan en ella, algunas que la admiran y otras que la cuestionan. Descubrí que casi todxs tienen una historia con la caña, y que esas historias no son homogéneas.",
      "Hubo un momento en el que me sentí abrumada. Tenía demasiada información, demasiadas aristas, y no sabía por dónde seguir avanzando. Me costaba soltar: todo me parecía importante. Pero, como suele pasar en los procesos de investigación, al abrir una puerta aparecían diez más. Nunca era suficiente; siempre hacía falta algo más.",
      "Tal vez por una inseguridad científica (esa sensación de que, para ser creíble, hay que abarcarlo todo) llegué a sentir que para que mi investigación fuera coherente debía saberlo todo sobre la caña. Y si bien es necesario conocer, no se trata de volverse experta en cómo se siembra o en cómo se repartieron las antiguas haciendas de trapiche. Se trata de elegir caminos y aprender a soltar.",
      "En ese punto, la idea de la bitácora me sostuvo. No se trataba de desechar lo que no entraba, sino de registrar: llevar un diario de investigación. Como en un proceso creativo, donde bocetos y borradores son parte fundamental de la obra. Cuando entendí eso, me enamoré del proceso: enredarme, detenerme, soltar, obsesionarme. Tomar distancia y comprender que no es una lógica de todo o nada, sino de confiar en el ritmo propio de la investigación",

      <>
        <strong>Acto #5: ¿Podremos acercarnos? Como cuestionar un paisaje</strong>
      </>,
      "Los talleres fueron mi salvación. Fue el momento en el que más acompañada me sentí. Desde el inicio tuve claro que no quería cerrarlos a una sola población: la caña de azúcar atraviesa de maneras distintas a quienes habitan Cali, y por eso la convocatoria fue abierta. La compartí en grupos diversos de WhatsApp, en perfiles de Instagram, entre amistades, en universidades y en la calle. No fue fácil. Al comienzo pensaba que asistirá mucha gente, pero el compromiso es difícil de mantener. Querer llegar a todo el mundo también es una ilusión. La experiencia humana es limitada, y reconocer esos límites fue parte del aprendizaje. Quienes llegaron fueron, en su mayoría, estudiantes, investigadores y artistas.",
      "Los talleres también me enseñaron que investigar solo es muy duro. Investigar no es solo pensar y escribir: es registrar, organizar, comunicar, sistematizar, planear... Cuando se trabaja sola, todo recae sobre una misma. Preparar los talleres fue exigente: coordinar personas, pensar actividades, conseguir refrigerios, organizar el espacio, hacer registro fotográfico, presentar el proyecto. Muchas cosas, seguramente, quedaron por fuera. La mente de una sola persona no alcanza para todo.",
      "Y, aun así, fueron los espacios más enriquecedores del proceso. Compartir pensamientos, formular preguntas, debatir, conversar, hacer parche, crear juntxs. Me permitieron aterrizar la investigación: aquello que estaba disperso en mi mente y en mis materiales empezó a tomar forma. Escuchar a otras personas, confrontar opiniones, reflexionar colectivamente sobre conceptos y entrar en crisis juntxs porque si nos hicimos muchas preguntas, cómo: ¿para qué hacer esto si no va a cambiar nada?",
      "Pero incluso en la duda había sentido. Los talleres inspiraban porque, en sí mismos, ya estaban creando preguntas. Por eso me quedo con esa idea:",
      "¿cómo se resignifica un paisaje?",
      "Haciéndole preguntas",

      <>
        <strong>Acto #6: Y ¿qué hacemos con todo esto?: La materialidad de una bitácora</strong>
      </>,
      "Pero no todo es tan romántico. Lo colectivo pierde fuerza. No sé si tenga que ver con los ritmos sociales actuales o con la individualización, pero el momento de crear la contra-imagen no fue sencillo. Poner a todxs de acuerdo no es fácil, y tampoco lograr que todxs puedan (o quieran) sostener el compromiso que un proceso así exige.",
      "Hubo una frase que me marcó: “¿pero ¿qué es lo que necesitas para tu proyecto?”. Me marcó, porque no se trataba de mi proyecto, sino de crear juntxs. Yo sentía que estábamos en el mismo barco, pero también entendí que dedicar tiempo, recursos y energía a un proceso colectivo es difícil, especialmente cuando implica responsabilidades concretas.",
      "En el último taller la idea era llegar a un borrador de una contra-imagen, pero no fue posible. En medio de la conversación entendí que antes de definir una imagen era más importante preguntarnos qué queríamos transmitir. Decidimos entonces recolectar ideas, sensaciones y afectos, y dejar para después la decisión sobre el formato y la materialidad.",
      "De ahí surgió la página web. No era algo que tuviera planeado desde el inicio, pero con el tiempo entendí que era una forma coherente de recoger la mayoría de las ideas y, sobre todo, de no desechar lo trabajado en los talleres. La web funciona como un juego de perspectivas: no presenta respuestas cerradas, sino un proceso de cómo preguntarse por un paisaje.",
      "La contra-imagen debía ser potente y directa…Y la serigrafía, fue algo que me propuse hacer, porque durante los talleres fue algo que se habló mucho, los rostros del paisaje cañero. Así que quería que fuera como ese gesto de no solo recoger lo discutido sino un gesto performático. Además, que recibí el apoyo de un gran artista, y fue este trabajo en colectivo que me permitió comprender que tampoco es tan desesperanzador. Trabajar con Jhu fue tener choques de metodologías, él tan libre, y yo a veces tan metodológica. Me permitió romper ciertas barreras académicas, explorar sin tanto miedo y que la creatividad también sea social.",
      "Nos lanzamos a la carretera, a entrar al cañaduzal, a no temerle a la fotografía (con consentimiento, sí, pero sin la arrogancia del formalismo), a crear, a insistir, a creer en la imagen. Tal vez lo colectivo no siempre se logra de manera ideal, pero a veces basta con mirar el detalle. Esta serigrafía fue el ejercicio que me devolvió la fe en lo colectivo.",
      "Las imágenes no fueron fáciles de resolver. Una imagen debería hablar por sí sola, pero para que eso ocurra se necesita un trabajo previo profundo, que a veces no se logra. En este caso fue especialmente difícil porque la imagen debía tener un impacto fuerte: iba a circular como una forma de artivismo. No podía ser demasiado metafórica ni restringida a un público específico, pero tampoco podía quedarse en una fotografía sin tensión.",
      "El artivismo ocurre en el espacio público, y su público potencial es cualquiera que transite la ciudad. En las serigrafías aparece la caña, un rostro, una bicicleta: un trazo humano que rompe la monotonía. El gesto no era mostrar la caña ordenada y perfecta, sino insistir en que entre esa caña abrumadora hay otras realidades.",
      "“¡Cali es muy grande!”",
      "Esa frase apareció en distintas etapas del proceso.",
      "La idea era pegar las serigrafías en varios puntos de la ciudad. Como siempre, uno quiere hacerlo en grande, pero no es tan fácil. Pegar afiches en la calle implica logística, tiempo, materiales, recursos y ayuda. Los dos recorridos que hicimos fueron de aproximadamente cinco kilómetros, en grupo, y fueron físicamente desgastantes. Hacerlo en distintos sectores de Cali requiere aún más tiempo, recursos y disposición. Cali, efectivamente, es muy grande.",
      "Pegar tampoco es sencillo: hay personas que se enojan, que prohíben, que observan. Todo eso hace parte del proceso, aunque no deja de sentirse como un gesto ilegal. Hay que hacerlo rápido. Pero también vale la pena, porque hay gente que se interesa, pregunta, que piden unos para llevar.",
      "Es un gesto efímero, los afiches se arrancan, se rasgan, se caen. No es algo de un solo día, sino de insistencia. La serigrafía puede verse como algo profundamente metafórico: es repetir, pegar y repasar; el artivismo es resistir.",

      <>
        <strong>Acto de inicio: Un trabajo más de un camino de interés</strong>
      </>,
      "Sé que podría pensarse que este proyecto termina con la entrega de la tesis, pero para mí es apenas el inicio de un proceso. Seguir con la intención, difundir la página web, conversar con más personas, no dejar de crear. Todo eso continúa.",
      "Al mismo tiempo, tomar distancia también es necesario. Alejarse un poco permite no caer en la normalización, volver a mirar con otros ojos. Sé que el proceso de difusión sigue, pero también sé que, en el camino, aparecieron muchos temas que me encantaron: otros verdes dentro de este gran paisaje. Puertas que se abrieron y que, para poder cerrar este proyecto, tuve que dejar momentáneamente de lado.",
      "Algo fundamental que me llevo es la certeza de que no estoy sola. Y si una de mis luchas personales es ser más humana, no hay mejor forma de intentarlo que sensibilizando junto a otras personas. Lo colectivo es difícil, sí, pero también es volver a caminar, hacer el gesto y regresar al día siguiente para ver qué quedó.",
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
