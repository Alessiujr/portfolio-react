import "./NoteKiller.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* GIF */
import Gif from "../assets/notekiller/Santini-Gif.gif";

/* IMMAGINI */
import Img1 from "../assets/notekiller/Narcoz.jpg";
import Img2 from "../assets/notekiller/NoteKiller1.jpg";
import Img3 from "../assets/notekiller/Gemitaiz.jpg";
import Img4 from "../assets/notekiller/NoteKiller2.jpg";
import Img5 from "../assets/notekiller/Guesus.jpeg";
import Img6 from "../assets/notekiller/NoteKiller3.jpeg";
import Img7 from "../assets/notekiller/PapaMaurizio.jpeg";
import Img8 from "../assets/notekiller/NoteKiller4.jpeg";
import Img9 from "../assets/notekiller/MadonnaDiEle.jpg";
import Img10 from "../assets/notekiller/NoteKiller5.jpg";

function NoteKiller() {
  const images = [
    Img1, Img2, Img3, Img4, Img5,
    Img6, Img7, Img8, Img9, Img10
  ];

  const captions = {
    0: "ST.Noyz Narcos - Noyz Narcos",
    2: "Cardinale Gem VI - Gemitaiz",
    4: "Guesus - Gue Pequeno",
    6: "Papa Maurizio - Salmo",
    8: "Madonna Di EleA.",
  };

  return (
    <div className="notekiller-page">
      <div className="notekiller-wrapper">

        <Navbar active="projects" />

        {/* TITLE */}
        <div className="nk-title">NOTE KILLER</div>

        {/* GIF */}
        <div className="intro-gif">
          <img src={Gif} alt="Santini Gif" />
        </div>

        {/* LINE */}
        <div className="red-line" />

        {/* SECTION TITLE */}
        <div className="nk-section-title">SANTINI KILLER</div>

        {/* GRID */}
        <div className="nk-grid">
          {images.map((img, i) => (
            <div className="nk-card" key={i}>
              <img src={img} alt={`nk-${i}`} />

              {captions[i] && (
                <div className="nk-caption">
                  {captions[i]}
                </div>
              )}
            </div>
          ))}
        </div>

        <Footer />

      </div>
    </div>
  );
}

export default NoteKiller;