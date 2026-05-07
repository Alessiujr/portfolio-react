import { useContact } from "../context/ContactContext";
import ContactImg from "../assets/contact/Contact.png";
import "./ContactModal.css";

function ContactModal() {
  const { open, closeContact, openEmail } = useContact();

  if (!open) return null;

  const handleEmailClick = () => {
    closeContact();
    openEmail();
  };

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
          <button
            onClick={handleEmailClick}
            className="email-link"
            type="button"
          >
            Send email
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;