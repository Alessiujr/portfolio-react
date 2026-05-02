import "./Mdw26.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* GIF */
import Gif from "../assets/mdw26/Mdw26.gif";

function Mdw26() {
  return (
    <div className="mdw-page">
      <div className="mdw-wrapper">

        <Navbar active="projects" />

        {/* TITLE */}
        <div className="mdw-title">
          Malano Scanner Week26
        </div>

        {/* GIF */}
        <div className="intro-gif">
          <img src={Gif} alt="MDW26" />
        </div>

        {/* LINE */}
        <div className="red-line" />

        <Footer />

      </div>
    </div>
  );
}

export default Mdw26;