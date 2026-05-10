import "../layouts/Mdw26.css";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* VIDEO */
import Video from "../assets/mdw26/Mdw26.mp4";

/* IMMAGINI */
import Img1 from "../assets/mdw26/mdw1.jpg";
import Img2 from "../assets/mdw26/mdw2.jpg";
import Img3 from "../assets/mdw26/mdw3.jpg";
import Img4 from "../assets/mdw26/mdw4.jpg";
import Img5 from "../assets/mdw26/mdw5.jpg";
import Img6 from "../assets/mdw26/mdw6.jpg";
import Img7 from "../assets/mdw26/mdw7.jpg";
import Img8 from "../assets/mdw26/mdw8.jpg";
import Img9 from "../assets/mdw26/mdw9.jpg";
import Img10 from "../assets/mdw26/mdw10.jpg";
import Img11 from "../assets/mdw26/mdw11.jpg";
import Img12 from "../assets/mdw26/mdw12.jpg";
import Img13 from "../assets/mdw26/mdw13.jpg";
import Img14 from "../assets/mdw26/mdw14.jpg";
import Img15 from "../assets/mdw26/mdw15.jpg";
import Img16 from "../assets/mdw26/mdw16.jpg";
import Img17 from "../assets/mdw26/mdw17.jpg";

function Mdw26() {
  useEffect(() => {
    document.title = "MDW 2026";
  }, []);

  const sections = [
    {
      images: [Img1, Img2],
      caption: "Gucci/Milano - Drama Queen",
    },
    {
      images: [Img3, Img4],
      caption: "Milano - MXP/Milano",
    },
    {
      images: [Img5, Img6],
      caption: "John Blond/Milano",
    },
    {
      images: [Img7, Img8],
      caption: "McDonald/Milano",
    },
    {
      images: [Img9, Img10],
      caption: "FraDesign/Milano",
    },
    {
      images: [Img11, Img12],
      caption: "Metro/Milano",
    },
    {
      images: [Img13, Img14],
      caption: "Gucci/Milano - Fashion Icon",
    },
    {
      images: [Img15, Img16],
      caption: "Metro/Milano",
    },
    {
      images: [Img17],
      caption: "Studio Pantera/Milano",
    },
  ];

  return (
    <div className="mdw-page">
      {/* NAVBAR FULL-WIDTH */}
      <Navbar />

      <div className="mdw-wrapper">
        {/* TITLE */}
        <div className="mdw-title">
          Malano Scanner Week26
        </div>

        {/* VIDEO */}
        <div className="intro-gif">
          <video autoPlay muted loop>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* LINEA ROSSA */}
        <div className="red-line" />

        {/* SEZIONI IMMAGINI */}
        <div className="mdw-sections">
          {sections.map((section, index) => (
            <div className="mdw-block" key={index}>
              
              <div
                className={`mdw-images ${
                  section.images.length === 1 ? "single" : ""
                }`}
              >
                {section.images.map((img, i) => (
                  <div className="mdw-image" key={i}>
                    <img src={img} alt={`mdw-${index}-${i}`} />
                  </div>
                ))}
              </div>

              <div className="mdw-caption">
                {section.caption}
              </div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Mdw26;