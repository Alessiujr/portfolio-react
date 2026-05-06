import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../layouts/LegalPages.css";

function TermsOfService() {
  return (
    <div className="legal-page">
      <Navbar />

      <div className="legal-container">
        <h1>Terms of Service</h1>

        <p>
          All content on this website, including designs, images, branding,
          project materials, and text content, is the intellectual property of
          Gabriele Di Mauro unless otherwise stated.
        </p>

        <p>
          Unauthorized reproduction, distribution, or commercial use is
          prohibited without written permission.
        </p>

        <p>
          This website is provided for informational and portfolio purposes
          only.
        </p>

        <p>
          While every effort is made to keep information accurate and updated,
          no guarantees are made regarding completeness or availability.
        </p>

        <p>
          External links, if present, are provided for convenience and their
          content is not under direct control.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default TermsOfService;