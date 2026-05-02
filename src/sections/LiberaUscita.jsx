import "./LiberaUscita.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* GIF */
import Gif from "../assets/liberauscita/LiberaUscita.gif";

/* IMMAGINI */
import Img1 from "../assets/liberauscita/Rebecca Red 1.jpg";
import Img2 from "../assets/liberauscita/Rebecca Red 2.jpg";
import Img3 from "../assets/liberauscita/Rebecca Red 3.jpg";
import Img4 from "../assets/liberauscita/Rebecca Red 4.jpg";
import Img5 from "../assets/liberauscita/Rebecca Red 5.jpg";
import Img6 from "../assets/liberauscita/Rebecca Red 6.jpg";
import Img7 from "../assets/liberauscita/Rebecca Red 7.jpg";
import Img8 from "../assets/liberauscita/Rebecca Red 8.jpg";
import Img9 from "../assets/liberauscita/Rebecca Red 9.jpg";

function LiberaUscita() {
  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
  ];

  return (
    <div className="libera-page">
      <div className="libera-wrapper">

        <Navbar active="projects" />

        {/* TITLE BADGE */}
        <div className="libera-title">
          LIBERA USCITA VOL.1
        </div>

        {/* GIF */}
        <div className="intro-gif">
          <img src={Gif} alt="Libera Uscita" />
        </div>

        {/* RED LINE */}
        <div className="red-line" />

        {/* IMAGES GRID */}
        <div className="images-grid">
          {images.map((img, i) => (
            <div key={i} className="image-card">
              <img src={img} alt={`Rebecca Red ${i + 1}`} />
            </div>
          ))}
        </div>

        {/* CREDIT */}
        <div className="credits">
            <p>Credit:</p>
            <p>Photographer: Simone Sanfilippo</p>
            <p>Model: Rebecca Intermite</p>
            </div>

      </div>
      <Footer />
    </div>
  );
}

export default LiberaUscita;