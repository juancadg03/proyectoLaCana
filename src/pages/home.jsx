// src/pages/home.jsx
import React from "react";
import { Link } from "react-router-dom";
import MainMenu from "../components/MainMenu";

const img1 = "/assets/img1.png";
const img2 = "/assets/img2.png";
const img3 = "/assets/img3.png";
const img4 = "/assets/img4.png";
const img5 = "/assets/img5.png";
const img6 = "/assets/img6.png";

const img9 = "/assets/img9.png";
const img10 = "/assets/img10.jpeg";

function Home() {
  return (
    <main className="home">
      <MainMenu />

      {/* Sección de inicio / héroe */}
      <section className="hero" id="inicio">
        <div className="hero-title-wrapper">
          <h1 className="title title-small title-first special-gothic-expanded-one-regular">
            <span className="title-word">La</span>
            <span className="title-word">caña</span>
            <span className="title-word">se</span>
            <span className="title-word">ve</span>
          </h1>

          <h1 className="title title-big title-second special-gothic-expanded-one-regular">
            <span className="title-word">Y</span>
            <span className="title-word">se</span>
            <span className="title-word">contra</span>
            <span className="title-word">ve</span>
          </h1>
        </div>
      </section>

      {/* Collage libre de imágenes */}
      <section className="image-collage-free">
        <div className="collage-layer">
          <Link to="/metodologia#tallerescolaborativos">
            <img
              src={img6}
              alt="Camión cañero"
              className="collage-img collage-img-6"
              loading="lazy"
            />
          </Link>

          <Link to="/contra-imagen#trabajadores">
            <img
              src={img5}
              alt="Tractor"
              className="collage-img collage-img-5"
              loading="lazy"
            />
          </Link>

          <img
            src={img1}
            alt="Machete"
            className="collage-img collage-img-1"
            loading="lazy"
          />

          <Link to="/vinetas">
            <img
              src={img4}
              alt="Trabajador actual"
              className="collage-img collage-img-4"
              loading="lazy"
            />
          </Link>

          <Link to="/contra-imagen#artivismo">
            <img
              src={img2}
              alt="Carrito de guarapo"
              className="collage-img collage-img-2"
              loading="lazy"
            />
          </Link>

          <Link to="/archivos/etnografia-dashboard">
            <img
              src={img3}
              alt="Bus Cañaveral"
              className="collage-img collage-img-3"
              loading="lazy"
            />
          </Link>

          <Link to="/archivos/archivos-dashboard">
            <img
              src={img10}
              alt="Cortero antiguo"
              className="collage-img collage-img-10"
              loading="lazy"
            />
          </Link>

          <Link to="/metodologia#analisisnarrativo">
            <img
              src={img9}
              alt="Cruce de tren cañero"
              className="collage-img collage-img-9"
              loading="lazy"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;

/* img1: machete 
   img2: carrito de guarapo
   img3: bus cañaveral
   img4: trabajador actual
   img5: tractor
   img6: camión cañero
   img9: Cruce de tren Cañero
   img10: cortero antiguo
   img11: maquina cosechadora
*/
