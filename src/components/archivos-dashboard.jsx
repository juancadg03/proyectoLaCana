// src/pages/archivos-dashboard.jsx
import React, { useEffect, useMemo, useState } from "react";
import "./archivos-dashboard.css";

var RAW_FILENAMES = [
  "1.jpg",
  "10.jpeg",
  "100.jpeg",
  "101.jpeg",
  "102.jpeg",
  "103.jpeg",
  "104.jpeg",
  "105.jpeg",
  "106.jpeg",
  "107.jpeg",
  "108.jpeg",
  "109.jpeg",
  "11.jpeg",
  "110.jpeg",
  "111.jpeg",
  "112.jpeg",
  "113.jpeg",
  "114.jpeg",
  "115.jpeg",
  "116.jpeg",
  "117.jpeg",
  "118.jpeg",
  "119.jpeg",
  "12.jpg",
  "120.jpeg",
  "121.jpeg",
  "122.jpeg",
  "123.jpeg",
  "124.jpeg",
  "125.jpeg",
  "126.jpeg",
  "127.jpeg",
  "128.jpeg",
  "129.jpeg",
  "13.jpg",
  "130.jpeg",
  "131.jpeg",
  "132.jpeg",
  "133.jpeg",
  "134.jpeg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "2.jpg",
  "20.jpeg",
  "21.jpg",
  "22.jpg",
  "23.jpeg",
  "24.jpeg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.jpg",
  "29..jpg",
  "3.jpg",
  "30.jpg",
  "31.jpg",
  "32..jpg",
  "33.jpg",
  "34.jpg",
  "35.jpg",
  "36.jpg",
  "37.jpg",
  "38.jpg",
  "39.jpg",
  "4.jpg",
  "40.jpg",
  "41.jpg",
  "42.jpg",
  "43.jpeg",
  "44.jpg",
  "45.png",
  "46.jpg",
  "47.jpeg",
  "48.jpg",
  "49.jpg",
  "5.jpg",
  "50.jpg",
  "51.jpg",
  "52.webp",
  "53.jpg",
  "54.jpg",
  "55.jpg",
  "56.jpg",
  "57.jpeg",
  "58.jpeg",
  "59.jpeg",
  "6.jpg",
  "60.jpeg",
  "61.jpeg",
  "62.jpeg",
  "63.jpeg",
  "64.jpeg",
  "65.jpeg",
  "66.jpeg",
  "67.jpeg",
  "68.jpeg",
  "69.jpeg",
  "7.jpg",
  "70.jpeg",
  "71.jpeg",
  "72.jpeg",
  "73.jpeg",
  "74.jpeg",
  "75.jpeg",
  "76.jpeg",
  "77.jpeg",
  "78.jpeg",
  "79.jpeg",
  "8.jpg",
  "80.jpeg",
  "81.jpeg",
  "82.jpeg",
  "83.jpeg",
  "84.jpeg",
  "85.jpeg",
  "86.jpeg",
  "87.jpeg",
  "88.jpeg",
  "89.jpeg",
  "9.jpg",
  "90.jpeg",
  "91.jpeg",
  "92.jpeg",
  "93.jpeg",
  "94.jpeg",
  "95.jpeg",
  "96.jpeg",
  "97.jpeg",
  "98.jpeg",
  "99.jpeg"
];

function fileToUrl(filename) {
  return new URL("../assets/fotosArchivo/" + filename, import.meta.url).href;
}

function numericIdFromFilename(filename) {
  // "134.jpeg" -> 134 ; "29..jpg" -> 29
  var m = filename.match(/^(\d+)/);
  if (!m) return 0;
  return parseInt(m[1], 10);
}

function sanitizeFilename(filename) {
  // "29..jpg" -> "29.jpg" ; "32..jpg" -> "32.jpg"
  return filename.replace("..", ".");
}

function renderRefWithLink(text) {
  // Si hay un link, lo vuelve <a>, si no deja texto normal.
  var idx = text.indexOf("http://");
  var idx2 = text.indexOf("https://");
  var start = -1;

  if (idx !== -1 && idx2 !== -1) start = Math.min(idx, idx2);
  else if (idx !== -1) start = idx;
  else if (idx2 !== -1) start = idx2;

  if (start === -1) return text;

  var before = text.slice(0, start);
  var url = text.slice(start).trim();

  return (
    <>
      {before}
      <a className="ad-ref-link" href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
    </>
  );
}

var REFERENCIAS = [
  "Río Cauca-Vapor Cali. (s.f). [Fotografía]. Archivo de Alberto Lenis Burckand. En Fundema, Santiago de Cali, estampas de ayer imágenes de hoy (p.67). Editorial Feriva, Cali-Colombia",
  "Rio Cauca-Vapor Sucre. (s.f). [Fotografía]. Archivo de Alberto Lenis Burckand. En Fundema, Santiago de Cali, estampas de ayer imágenes de hoy (p.67). Editorial Feriva, Cali-Colombia",
  "Inicio de obras de la carretera al mar, Kilometro 0. (1926). [Fotografía]. Archivo de Alberto Lenis Burckand. En Fundema, Santiago de Cali, estampas de ayer imágenes de hoy (p.103). Editorial Feriva, Cali-Colombia",
  "Facsímil del título valor que expedía la Compañía constructora de la carretera del Pacífico. (1928) [Archivo]. Archivo de Alberto Lenis Burckand. En Fundema, Santiago de Cali, estampas de ayer imágenes de hoy (p.104). Editorial Feriva, Cali-Colombia",
  "Elisa Caicedo Méndez, reina de los carnavales en 1926 y su corte. (1926). [Fotografía] Archivo de Alberto Lenis Burckand. En Fundema, Santiago de Cali, estampas de ayer imágenes de hoy (p.149). Editorial Feriva, Cali-Colombia",
  "S.M. Leonor I. (1922). [Fotografía]. Archivo de Alberto Lenis Burckand. En Fundema, Santiago de Cali, estampas de ayer imágenes de hoy (p.149). Editorial Feriva, Cali-Colombia",
  "Facsímil del afiche de la IX Feria de cali, 1966-67. (1966) [Archivo]. Archivo de Alberto Lenis Burckand. En Fundema, Santiago de Cali, estampas de ayer imágenes de hoy (p.151). Editorial Feriva, Cali-Colombia",
  "Concentración de vivienda de trabajadores en la transformación de hacienda en ingenio azucarero. (s.f). [Fotografía] Archivo Manuelita. En Valle del Cauca. Procesos históricos (p.217). Grupo empresarial Manuelita.",
  "El verano del azúcar. (2012). [Fotografía]. Uriel, F., Mejía, F., Valencia, R. & Arias, A. En Valle del Cauca: procesos históricos. Editorial",
  "F.C. del P. Rio Cali. (s.f). [Fotografía]. Archivo de Alberto Lenis Burckand. En Fundema, Santiago de Cali, estampas de ayer imágenes de hoy (p.75). Editorial Feriva, Cali-Colombia",
  "Carretera Palmira-candelaria-Palmira sobre el rio Cauca. (1920). [Fotografía]. En Fundema, Santiago de Cali, estampas de ayer imágenes de hoy (p.107). Editorial Feriva, Cali-Colombia",
  "Zitzmann,C. (s.f). [Recolección de caña de azúcar] [Fotografía]. En Vega, C. y Zitzmann, C., Valle del Cauca (p.65-66). Gamma.",
  "Zitzmann Betancour, C. (s.f.). [Procesador de caña de azúcar] [Fotografía]. En Vega, C. M. (1990), Valle del Cauca (p. 79-80). Gamma.",
  "Zitzmann Betancour, C. (s.f.). [Braceros estibando azúcar por bultos] [Fotografía]. En Vega, C. M. (1990), Valle del Cauca (p. 83). Gamma.",
  "Zitzmann Betancour, C. (s.f.). [La suerte se enciende por varios costados y arde en pocos minutos] [Fotografía]. En Vega, C. M. (1990), Valle del Cauca (p. 84). Gamma.",
  "Zitzmann Betancour, C. (s.f.). [Agua, lima, trapo] [Fotografía]. En Vega, C. M. (1990), Valle del Cauca (p. 87). Gamma.",
  "Zitzmann Betancour, C. (s.f.). [Cortero] [Fotografía]. En Vega, C. M. (1990), Valle del Cauca (p. 90). Gamma.",
  "Zitzmann Betancour, C. (s.f.). [Preparación de panela] [Fotografía]. En Vega, C. M. (1990), Valle del Cauca (p. 118). Gamma.",
  "Zitzmann Betancour, C. (s.f.). [Jeepados y contrahornero] [Fotografía]. En Vega, C. M. (1990), Valle del Cauca (p. 120). Gamma.",
  "Zitzmann Betancour, C. (s.f.). [Bacacero] [Fotografía]. En Vega, C. M. (1990), Valle del Cauca (p. 121). Gamma.",
  "Zitzmann Betancour, C. (s.f.). [Centro de desarrollo Goodyear] [Fotografía]. En Vega, C. M. (1990), Valle del Cauca (p. 181). Gamma.",
  "Zitzmann Betancour, C. (s.f.). [Acuaparque de la caña] [Fotografía]. En Vega, C. M. (1990), Valle del Cauca (p. 187). Gamma.",
  "Zitzmann Betancour, C. (s.f.). El sendero del desarrollo] [Fotografía]. En Vega, C. M. (1990), Valle del Cauca (p. 7-8). Gamma.",
  "Zitzmann Betancour, C. (s.f.). [Donación de Asocaña] [Fotografía]. En Vega, C. M. (1990), Valle del Cauca (p. 23). Gamma.",
  "25.s. n. & s. n. (1952). Embarcación de la época para la navegación del río Cauca & 200237. OTRO: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/18898",
  "s. n., s. n. & s. n. (1999). Derrumbe por el desbordamiento del río Guabas en la Vereda Regaderos & 602821. GINEBRA: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/18864",
  "s. n., s. n., s. n. & s. n. (1930). Con traje de pescador de la época & 200264. OTRO: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/18842",
  "28. s. n. (1960). Paisaje del río Cauca & 103520. BUGALAGRANDE: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/18807",
  "s. n., s. n. & s. n. (1984). Campesino observando el paisaje & 300810. OTRO: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/18786",
  "PEDRO A. RIASCOS (1900). Cali a la luz de la luna & 501107. OTRO: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/18776",
  "J.I.BORRERO (1990). Bosques de la Reserva Natural de Yotoco a cargo de la C & 700070. YOTOCO: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/18771",
  "s. n., s. n. & s. n. (1956). La madre vieja Videles se constituyó en un lugar tradicional para paseos familiares & 103344. GUACARI: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/18763",
  "LILIANA GARCIA MENESES (1989). Aspecto de los farallones de Cali & 202978. SANTIAGO DE CALI: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/18716",
  "Julio Achuri (1947). Ricardo Padilla Nieto pescando bocachico en el río Cauca, entre Buga y Chabimbal & B014. BUGA: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/18671",
  "s. n. & s. n. (1940). Paisaje del río Cauca & A008. SANTIAGO DE CALI: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/18644",
  "s. n. (1985). Valle Geográfico del río Cauca & 700051. OTRO: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/18529",
  "Alberto Lenis Burckhardt (1935). Pescadores en el río Cauca & 605331. SANTIAGO DE CALI: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/18502",
  "s. n., s. n., s. n. & s. n. (1960). Paseo familiar en canoa por el río Cauca & 102096. SANTIAGO DE CALI: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/18486",
  "s. n. & s. n. (1930). Vapor por el río Cauca entrando a Buga & 603557. BUGA: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/18438",
  "Pedro A. Riascos (1940). Ocaso sobre el río Cali & 501393. OTRO: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/18329",
  "El País. (1954). The Cauca Valley Bible [Caricatura].",
  "INCORA. (1967). Five years of agrarian reform: Report of activities, 1966. Bogotá: INCORA.",
  "CVC. (2004). [Fotografía de Bernardo Garcés Córdoba y un grupo de ingenieros en el sitio de la represa Calima, ca. 1960]. En Génesis y desarrollo de una visión de progreso (p. 133). CVC.",
  "Corporación Autónoma Regional del Valle del Cauca (CVC). (2004). [Imagen “El Valle descentralista adhiero” de la campaña de descentralización posterior a 1968]. En Génesis y desarrollo de una visión de progreso (p. 86). CVC.",
  "Semana. (1951, 30 de junio). Portada de la revista Semana [Portada de revista]. En “Los Eder: la familia más importante del Valle”, artículo recuperado de https://ladob.info/los-eder-la-familia-mas-importante-del-valle/",
  "Manuelita S. A. (s. f.). Busto de Santiago inaugurado en 1940 [Fotografía]. En Historia y memoria: El ingenio Manuelita (pp. —). Recuperado de http://www.scielo.org.co/pdf/histo/v1n1/v1n1a06.pdf",
  "Saffray, C. (1869). Vista de Cali [Grabado, diseño de Delauney a partir de un croquis del autor, 7.9 × 16 cm, blanco y negro]. En Voyage à la Nouvelle-Grenade. Le Tour du Monde (p. 65c). Librería Hachette. https://www.banrepcultural.org/galeria-historica/219.htm",
  "André, É. (1869). Paisaje en el Valle del Cauca, cerca de Cali [Grabado, diseño de E. Riou a partir de un croquis y una fotografía del autor; 11,8 × 15,9 cm; blanco y negro]. En L'Amérique Équinoxiale (Colombie–Équateur–Pérou) (p. 141). Librería Hachette. https://www.banrepcultural.org/galeria-historica/402.htm",
  "André, É. (1869). Interior de un rancho, en Agua Blanca, cerca de Cali [Grabado, diseño de Gautier a partir de un croquis del autor; 11,7 × 15,8 cm; blanco y negro]. En L'Amérique Équinoxiale (Colombie–Équateur–Pérou) (p. 144). Librería Hachette. https://www.banrepcultural.org/galeria-historica/404.htm",
  "Feria de Cali. (1960). Afiche de la 3.ª Feria de Cali [Afiche]. Facebook. Recuperado de https://www.facebook.com/photo/?fbid=10157221694563784&set=a.10157221692308784",
  "Feria de Cali. (1963). Afiche de la 6.ª Feria de Cali [Afiche]. Facebook. Recuperado de https://www.facebook.com/photo/?fbid=10157221693858784&set=a.10157221692308784",
  "Sánchez, I. (1986). Marcha en contra de la construcción de la represa Salvajina [Fotografía]. Recuperado de https://gaceta.co/contenidos/bajo-el-agua-de-la-salvajina/",
  "López, V. (s. f.). Salvajina: una promesa aún incumplida [Fotoensayo fotográfico]. Blog Víctor López. https://phvictorlopez.blogspot.com/p/salvajina-una-promesa-aun-incumplida.html",
  "Cine Colombia. (s. f.). Pura sangre [Afiche de película]. https://www.proimagenescolombia.com/secciones/cine_colombiano/peliculas_colombianas/pelicula_plantilla.php?id_pelicula=147",
  "s. n. & s. n. (1900). Terrenos como el que apreciamos en esta imagen permanecen, todavía, en manos de pequeños propietarios que, no obstante dedicarse a una actividad agrícola diferente a la caña, frutas tropicales, sobreviven económicamente 103519. BUGALAGRANDE: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/18796",
  "Bartelsman, J. (s.f.). Cerro de las tres cruces. Revista Semana Historia contada desde las regiones. Recuperado de https://www.bonbar.co",
  "Martha Ines Ramos (1975). Ingenio Cauca, recolección y corte de caña & B164. OTRO: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/427",
  "s. n. & s. n. (1900). Corteros de caña & 601830. ZARZAL: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/391",
  "s. n., s. n., s. n. & s. n. (1990). Puesto de venta de productos de la UMATA en las fiestas del campesino & 601716. EL DOVIO: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/390",
  "s. n. & s. n. (1954). Extracción del jugo de caña en finca campesina, Palmira, C & 102887. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/189",
  "s. n., s. n. & s. n. (1995). \"Coteros\" o descargadores de bultos & 700084. OTRO: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/90",
  "s. n. (1990). Vista de la fábrica de panela (trapiche) de una de las haciendas del municipio & A416. EL CERRITO: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/422",
  "s. n. & s. n. (1900). Recolección de caña de azúcar & 300046. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/748",
  "s. n. & s. n. (1940). Fotografía aérea-panorámica-del sitio donde quedó ubicada la nueva fábrica azucarera de La Manuelita & 300005. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1090",
  "FOTO MULT (1940). Cortero en el corte de la caña & 300042. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/746",
  "FOTO MULT (1940). Predios del Ingenio Manuelita & 300044. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1208",
  "FOTO MULT (1940). Campesino en la siembra de la caña & 300019. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/729",
  "FOTO MULT (1940). Instalaciones Ingenio Manuelita & 300047. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1112",
  "s. n. & s. n. (1940). Reguladoras hidraúlicas del trapiche, Ingenio Central Castilla & 102106. PRADERA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1224",
  "s. n. (1946). Trabajadores frente a los tractores & 300172. OTRO: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/756",
  "s. n. & s. n. (1946). Panorámica de la nueva fábrica azucarera de La Manuelita & 300013. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1176",
  "s. n., s. n., s. n., s. n. & s. n. (1965). Grua descargadora de la caña de azúcar para luego pasarla a las fábricas & 602626. GUACARI: Biblioteca Departamental Jorge Garces Borrero.https://audiovisuales.icesi.edu.co/handle/123456789/1098",
  "s. n. & s. n. (1985). FOTO QUE NO CORRESPONDE A LA TEMATICA DEL VALLE DEL CAUCA Planta generadora de energia La Salvajina & 500628. OTRO: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1089",
  "FOTO MULT (1940). Otro aspecto de las dependencias del Ingenio Manuelita & 300016. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1168",
  "s. n. & s. n. (1946). Panorámica de la nueva fábrica azucarera de La Manuelita & 300011. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1172",
  "s. n. & s. n. (1946). FILMACIÓN RECOLECCIÓN DE CAÑA DE AZÚCAR & 300071. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/750",
  "s. n. & s. n. (1946). Aspecto de un cortero de caña & 300074. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/754",
  "s. n. & s. n. (1946). Panorámica en la que se observan los avances de la construcción de la nueva fábrica azucarera de La Manuelita & 300003. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/724",
  "s. n. & s. n. (1946). Hombre mostrando terrones de azúcar & 300073. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/753",
  "s. n., s. n. & s. n. (1953). Filmación instalaciones en la nueva fábrica azucarera de La Manuelita & 300079. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1081",
  "FOTO MULT (1953). Tren con carga de azúcar & 300031. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/738",
  "GERMAN PARRA (1999). Paisaje vallecaucano & 701049. BUGA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/31690",
  "s. n. (1980). Inundaciones en esta corregimiento, en los desbordamientos que se presentaron durante 1980- & 101494. ANDALUCIA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/31659",
  "s. n. (1960). Pueblo inundado & 101036. BOLIVAR: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/31655",
  "s. n. (1960). Señoras en medio de la inundación & 101037. BOLIVAR: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/31656",
  "s.n. (1950). Inundaciones en Bolívar & 100958. BOLIVAR: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/31653",
  "Moll Gonzalez (1955). Tren cañero cargado de caña, lista para ser transportada hasta el Ingenio & 400064. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/5093",
  "Moll Gonzalez (1960). Típica casa rural vallecaucana a la orilla de uno de los ríos de la región & 400062. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/5090",
  "PEDRO ANTONIO RIASCOS (1956). Paisaje al occidente & 301025. OTRO: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/5085",
  "s. n. & s. n. (1972). El río Cauca & 400272. JAMUNDI: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/5053",
  "s. n. (1929). Remolques para cargar caña & 400115. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/5053",
  "s. n. (1929). Montones de caña & 400111. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/4542",
  "s. n. (1929). Incendio en el Ingenio & 400105. PALMIRA: Biblioteca Departamental Jorge Garces Borrero.",
  "s. n. (1929). Panorámica del Ingenio & 400104. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/4534",
  "s. n. (1929). Fiestas en el Ingenio & 400101. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/4532",
  "s. n. (1929). Bueyes y recolectores de caña & 400103. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/4533",
  "s. n. (1929). Corte de caña & 400099. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/4531",
  "s. n. (1929). Recolección de caña en bueyes & 400096. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/4527",
  "s. n. (1929). Carretera hacia el Ingenio & 400094. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/4525",
  "MOLL GONZALEZ (1980). Panorémica Ingenio Manuelita & 400077. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/4509",
  "MOLL GONZALEZ (1980). Plantaciones & 400070. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/4501",
  "JORGE TERREROS (1920). Plantío de la Hacienda La Rita, Palmira, 1920 & 102965. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/4474",
  "s. n., s. n., s. n., s. n., s. n., s. n. & s. n. (1960). Trabajadores del Ingenio Providencia en plena tarea & 602707. EL CERRITO: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1239",
  "s. n., s. n. & s. n. (1940). Trapiche del Ingenio Central Castilla, carros transportadores de azúcar & 501496. PRADERA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1514",
  "s. n. (1900). Instalaciones del Ingenio Central Castilla & 501498. PRADERA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1515",
  "s. n. (1900). Ingenio Central Castilla, recolección de caña & 501499. PRADERA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1516",
  "LUIS ALFONSO CORREA (1900). Campamento de los trabajadores del Ingenio Central Castilla & 501493. PRADERA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1511",
  "s. n. (1900). Empaque de azúcar, Ingenio Riopaila & 102123. ZARZAL: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1506",
  "s. n. & s. n. (1937). Antiguo tren cañero & 501454. PRADERA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1497",
  "s. n. & s. n. (1900). Antiguas instalaciones del trapiche, trabajadores & 501459. PRADERA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1499",
  "s. n. (1900). Preparación para el cultivo de la caña, Ingenio de Río Paila & 102124. ZARZAL: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1281",
  "s. n. & s. n. (1935). Trabajadores y bueyes en el corte y recolección de caña & 501504. PRADERA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1284",
  "s. n. & s. n. (1980). Cultivo de caña en el Ingenio Río Paila, fundado por Don Hernando Caicedo el 24 de Septiembre de 1928, cuando adquirió la Hacienda La Paila de 415 fanegadas & 501506. OTRO: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1285",
  "FOTO DR. MOLL GONZALEZ (1900). Ingenio Central Castilla & 501512. PRADERA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1289",
  "s. n. (1900). Panóramica del Ingenio Central Castilla & 102119. PRADERA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1495",
  "s. n. (1940). Tractores en el Ingenio & 500054. CANDELARIA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1489",
  "s. n. (1900). Muestra empresarial de los productos del Ingenio San Antonio & 501447. PRADERA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1491",
  "s. n. (1920). Cotero, trabajando en el Cañaduzal & 401243. LA UNION: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1483",
  "s. n. (1930). Panóramica de terrenos del Ingenio Manuelita S & 400100. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1479",
  "s. n. (1929). Panóramica de plantío de caña & 400098. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1478",
  "OSCAR ARCILA (1961). Trapiche panelero con tracción animal & 400872. ALCALA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1482",
  "s. n. & s. n. (1935). Recolección de la caña & 300067. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1468",
  "FOTO MULT (1940). Plantaciones de caña de azúcar, Ingenio Manuelita & 300043. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1459",
  "s. n. (1900). Trabajadores del Ingenio La Manuelita & 102943. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1434",
  "s. n. (1891). Trabajo Cañaduzales en el ingenio Manuelita, Palmira, 1891 & 102901. BUGA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1414",
  "s. n. & s. n. (1953). Mujeres trabajadoras de la Hacienda Arroyohondo frente a un cañaveral & 604986. YUMBO: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1399",
  "FOTO LINCE (1960). La señora Mercedes Granobles caminando por la carretera que comunica al Ingenio Pichichí con Guacarí & 602600. GUACARI: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1388",
  "s. n. & s. n. (1946). FILMACIÓN CORTE DE CAÑA DE AZÚCAR & 300072. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1364",
  "s. n. & s. n. (1946). FILMACIÓN RECOLECCIÓN DE CAÑA DE AZÚCAR & 300071. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1366",
  "s. n., s. n., s. n. & s. n. (1924). Depósitos de caña del Ingenio de azúcar La Manuelita de propiedad de la familia Eder & 604492. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1352",
  "s. n. & s. n. (1900). Alrededores del Ingenio Central Castilla & 501462. PRADERA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1331",
  "s. n. & s. n. (1953). Trabajadoras y trabajadores de la Hacienda Arroyohondo en los terrenos de cultivo de caña de azúcar & 604985. YUMBO: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1328",
  "s. n. & s. n. (1954). Extracción del jugo de caña en finca campesina, Palmira, C & 102887. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1314",
  "FRANKLIN NAVIA (2000). Plano de los ingenios azucareros del Valle del Cauca en el Parque de la Caña en Palmira & 602406. PALMIRA: Biblioteca Departamental Jorge Garces Borrero. https://audiovisuales.icesi.edu.co/handle/123456789/1310",
];

function Thumb(props) {
  var photo = props.photo;
  var onOpen = props.onOpen;

  return (
    <button
      type="button"
      className="ad-thumb"
      onClick={function () {
        onOpen(photo);
      }}
      aria-label={"Abrir imagen " + photo.label}
    >
      <div className="ad-thumb-media">
        <img
          src={photo.src}
          alt={photo.label}
          className="ad-thumb-img"
          loading="lazy"
          decoding="async"
          onError={function (e) {
            // fallback si el nombre venía con doble punto
            var fixed = sanitizeFilename(photo.filename);
            if (fixed !== photo.filename) {
              e.currentTarget.src = fileToUrl(fixed);
            }
          }}
        />
      </div>
      <div className="ad-thumb-meta">
        <span className="ad-thumb-id">{photo.label}</span>
        <span className="ad-thumb-sub">{photo.ext.toUpperCase()}</span>
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
  // estado local para rotación
  var _React$useState = React.useState(0),
    rotation = _React$useState[0],
    setRotation = _React$useState[1];

  React.useEffect(
    function () {
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
    <div className="ad-modal" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="ad-modal-content"
        onClick={function (e) {
          e.stopPropagation();
        }}
      >
        <div className="ad-modal-top">
          <div className="ad-modal-title">
            <p className="ad-modal-overline">Archivo visual</p>
            <h2 className="ad-modal-h2">{photo.label}</h2>
            <p className="ad-modal-sub">{indexLabel}</p>
          </div>

          <div className="ad-modal-actions">
            <button type="button" className="ad-icon-btn" onClick={rotateLeft} aria-label="Rotar izquierda">
              ⟲
            </button>
            <button type="button" className="ad-icon-btn" onClick={rotateRight} aria-label="Rotar derecha">
              ⟳
            </button>
            <button type="button" className="ad-icon-btn" onClick={onPrev} aria-label="Anterior">
              ←
            </button>
            <button type="button" className="ad-icon-btn" onClick={onNext} aria-label="Siguiente">
              →
            </button>
            <button type="button" className="ad-close-btn" onClick={onClose} aria-label="Cerrar">
              ✕
            </button>
          </div>
        </div>

        <div className="ad-modal-media">
          <img
            src={photo.src}
            alt={photo.label}
            className="ad-modal-img"
            decoding="async"
            style={{ transform: "rotate(" + rotation + "deg)" }}
            onError={function (e) {
              var fixed = sanitizeFilename(photo.filename);
              if (fixed !== photo.filename) {
                e.currentTarget.src = fileToUrl(fixed);
              }
            }}
          />
        </div>

        <div className="ad-modal-foot">
          <span className="ad-foot-chip">{photo.filename}</span>
          <span className="ad-foot-hint">ESC para cerrar • ←/→ para navegar</span>
        </div>
      </div>
    </div>
  );
}

export default function ArchivosDashboard() {
  var [query, setQuery] = useState("");
  var [visibleCount, setVisibleCount] = useState(36);

  var [isOpen, setIsOpen] = useState(false);
  var [activeIndex, setActiveIndex] = useState(-1);

  var photos = useMemo(function () {
    // dedup + orden numérico
    var map = {};
    var arr = [];
    var i = 0;

    for (i = 0; i < RAW_FILENAMES.length; i = i + 1) {
      var f = RAW_FILENAMES[i];
      if (!map[f]) {
        map[f] = true;
        arr.push(f);
      }
    }

    arr.sort(function (a, b) {
      return numericIdFromFilename(a) - numericIdFromFilename(b);
    });

    return arr.map(function (filename) {
      var id = numericIdFromFilename(filename);
      var ext = "jpg";
      var m = filename.match(/\.([a-zA-Z0-9]+)$/);
      if (m) ext = m[1];

      return {
        id: id,
        filename: filename,
        ext: ext,
        label: "Imagen " + id,
        src: fileToUrl(filename)
      };
    });
  }, []);

  var filtered = useMemo(function () {
    var q = query.trim().toLowerCase();
    if (q.length === 0) return photos;

    // si escriben "12" o "#12" -> filtra por id
    var qNum = q.replace("#", "");
    var asNum = parseInt(qNum, 10);

    return photos.filter(function (p) {
      if (!isNaN(asNum) && ("" + asNum) === qNum) {
        return p.id === asNum;
      }
      return (
        ("" + p.id).indexOf(q) !== -1 ||
        p.filename.toLowerCase().indexOf(q) !== -1 ||
        p.ext.toLowerCase().indexOf(q) !== -1
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
    // encuentra el índice dentro del array filtrado (lo que ve el usuario)
    var i = 0;
    for (i = 0; i < filtered.length; i = i + 1) {
      if (filtered[i].id === photo.id && filtered[i].filename === photo.filename) {
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
    // al cambiar búsqueda, reinicia lotes para que se vea inmediato
    setVisibleCount(36);
  }, [query]);

  var totalLabel = filtered.length;
  var showingLabel = shown.length;

  return (
    <main className="archivos-dashboard-page">
      <header className="ad-hero">
        <p className="ad-overline">Archivo</p>
        <h1 className="ad-title">Archivos — Dashboard</h1>
        <p className="ad-intro">
          Galería visual (134 imágenes). Selecciona una imagen para verla en detalle.
        </p>

        <div className="ad-toolbar">
          <div className="ad-search">
            <span className="ad-search-icon">⌕</span>
            <input
              className="ad-search-input"
              placeholder="Buscar por número (ej: 12) o extensión (jpg, png, webp)..."
              value={query}
              onChange={function (e) {
                setQuery(e.target.value);
              }}
            />
          </div>

          <div className="ad-stats">
            <span className="ad-chip">
              Mostrando <b>{showingLabel}</b> de <b>{totalLabel}</b>
            </span>
          </div>
        </div>
      </header>

      <section className="ad-grid-wrap">
        <div className="ad-grid">
          {shown.map(function (p) {
            return <Thumb key={p.filename} photo={p} onOpen={openPhoto} />;
          })}
        </div>

        {showingLabel < totalLabel && (
          <div className="ad-loadmore">
            <button
              type="button"
              className="ad-loadmore-btn"
              onClick={function () {
                setVisibleCount(visibleCount + 36);
              }}
            >
              Cargar más
            </button>
          </div>
        )}
      </section>

      <section className="ad-refs">
        <div className="ad-refs-head">
          <p className="ad-refs-overline">Referencias</p>
          <h2 className="ad-refs-title">Referencias de los archivos — Imágenes</h2>
          <p className="ad-refs-sub">
            Créditos y fuentes de las piezas visuales incluidas en este dashboard.
          </p>
        </div>

        <div className="ad-refs-block">
          <ol className="ad-refs-list">
            {REFERENCIAS.map(function (r, idx) {
              return (
                <li className="ad-refs-item" key={"ref_" + idx}>
                  {renderRefWithLink(r)}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <Modal
        isOpen={isOpen}
        photo={activePhoto}
        onClose={closeModal}
        onPrev={prev}
        onNext={next}
        indexLabel={
          activeIndex >= 0 && filtered.length > 0
            ? "Imagen " + (activeIndex + 1) + " / " + filtered.length
            : ""
        }
      />
    </main>
  );
}
