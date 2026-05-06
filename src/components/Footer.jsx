import { useContact } from "../context/ContactContext";
import "./Footer.css";

function Footer() {
  const { openContact } = useContact();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT - BRANDING */}
        <div className="footer-section">
          <h3 className="footer-title">Gabriele Di Mauro</h3>
          <p className="footer-subtitle">Packaging Designer & Creative Director</p>
          <p className="footer-description">
            Crafting innovative packaging solutions and visual experiences.
          </p>
        </div>

        {/* CENTER - LINKS */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); openContact(); }}>About</a></li>
          </ul>
        </div>

        {/* RIGHT - SOCIAL */}
        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-social">
            <a href="#" className="social-link" title="LinkedIn" aria-label="LinkedIn">in</a>
            <a href="#" className="social-link" title="Instagram" aria-label="Instagram">@</a>
            <a href="#" className="social-link" title="Email" aria-label="Email">✉</a>
          </div>
        </div>
      </div>

      {/* BOTTOM - COPYRIGHT */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} Gabriele Di Mauro. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span className="divider">•</span>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;