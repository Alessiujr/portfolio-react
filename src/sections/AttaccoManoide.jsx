import "./AttaccoManoide.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ASSETS */
import Gif from "../assets/attaccomanoide/AttaccoManoide.gif";
import Mano2 from "../assets/attaccomanoide/Mano2.png";
import Mano1 from "../assets/attaccomanoide/Mano1.png";

function AttaccoManoide() {
  return (
    <div className="amano-page">
      <div className="amano-wrapper">

        <Navbar active="projects" />

        {/* TITLE */}
        <div className="amano-title">
          ATTACCO MANOIDE
        </div>

        {/* GIF */}
        <div className="intro-gif">
          <img src={Gif} alt="Attacco Manoide" />
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

        <Footer />

      </div>
    </div>
  );
}

export default AttaccoManoide;