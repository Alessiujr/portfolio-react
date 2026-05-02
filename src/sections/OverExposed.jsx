import "./OverExposed.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* IMMAGINI */
import Img0 from "../assets/overexposed/Luca post bonus.jpg";
import Img1 from "../assets/overexposed/Luca post bonus 1.jpg";
import Img2 from "../assets/overexposed/Luca post bonus 2.jpg";
import Img3 from "../assets/overexposed/Luca post bonus 3.jpg";
import Img4 from "../assets/overexposed/Luca post bonus 4.jpg";
import Img5 from "../assets/overexposed/Luca post bonus 5.jpg";
import Img6 from "../assets/overexposed/Luca post bonus 6.jpg";
import Img7 from "../assets/overexposed/Luca post bonus 7.jpg";

function OverExposed() {
  const images = [
    Img0,
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
  ];

  return (
    <div className="over-page">
      <div className="over-wrapper">

        <Navbar active="projects" />

        {/* TITLE */}
        <div className="project-label">
          OVEREXPOSED
        </div>

        {/* GIF PLACEHOLDER */}
        <div className="intro-gif empty-gif" />

        {/* RED LINE */}
        <div className="red-line" />

        {/* GRID */}
        <div className="images-grid">
          {images.map((img, i) => (
            <div key={i} className="image-card">
              <img src={img} alt={`over-${i}`} />
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default OverExposed;