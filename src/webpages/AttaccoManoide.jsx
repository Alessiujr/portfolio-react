import "../layouts/AttaccoManoide.css";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ASSETS */
import Video from "../assets/attaccomanoide/AttaccoManoide.mp4";
import Mano2 from "../assets/attaccomanoide/Mano2.png";
import Mano1 from "../assets/attaccomanoide/Mano1.png";

function AttaccoManoide() {
  useEffect(() => {
    document.title = "Attacco Manoide";
  }, []);

  return (
    <div className="amano-page">
      {/* NAVBAR FULL-WIDTH */}
      <Navbar active="projects" />

      <div className="amano-wrapper">
        {/* TITLE */}
        <div className="amano-title">
          ATTACCO MANOIDE
        </div>

        {/* VIDEO */}
        <div className="intro-gif">
          <video autoPlay muted loop>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* LINE */}
        <div className="red-line" />

        {/* IMAGE 1 */}
        <div className="amano-image">
          <img src={Mano2} alt="Mano 2" />
        </div>

        <div className="amano-caption">
          Attacco Manoide - Simone Sanfilippo
        </div>

        {/* IMAGE 2 */}
        <div className="amano-image">
          <img src={Mano1} alt="Mano 1" />
        </div>

        <div className="amano-caption">
          Attacco Manoide - Gabriele Di Mauro
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default AttaccoManoide;