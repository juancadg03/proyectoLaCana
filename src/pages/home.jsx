// src/pages/home.jsx
import React from "react";
import MainMenu from "../components/MainMenu.jsx";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img11 from "../assets/img11.png";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.jpeg";

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
          <img src={img11} alt="Máquina cosechadora" className="collage-img collage-img-11" />
          <img src={img6}  alt="Camión cañero"       className="collage-img collage-img-6"  />
          <img src={img5}  alt="Tractor"             className="collage-img collage-img-5"  />
          <img src={img1}  alt="Machete"             className="collage-img collage-img-1"  />
          <img src={img4}  alt="Trabajador actual"   className="collage-img collage-img-4"  />
          <img src={img2}  alt="Carrito de guarapo"  className="collage-img collage-img-2"  />
          <img src={img3}  alt="Bus Cañaveral"       className="collage-img collage-img-3"  />
          <img src={img10} alt="Cortero antiguo"     className="collage-img collage-img-10" />
          <img src={img9}  alt="Cruce de tren cañero" className="collage-img collage-img-9" />
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