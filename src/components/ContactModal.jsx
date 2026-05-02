import { useContact } from "../context/ContactContext";
import ContactImg from "../assets/contact/Contact.png";
import "./ContactModal.css";

function ContactModal() {
  const { open, closeContact } = useContact();

  if (!open) return null;

  return (
    <div className="contact-overlay" onClick={closeContact}>
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* immagine */}
        <img src={ContactImg} alt="Contact" />

        {/* box bianco sotto */}
        <div className="contact-info">
          <a
            href="https://www.instagram.com/gaabrieledimauro?igsh=NTRxOG5ldzZ5cGFi&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;