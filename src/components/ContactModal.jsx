import { useContact } from "../context/ContactContext";
import ContactImg from "../assets/contact/Contact.png";

function ContactModal() {
  const { open, closeContact } = useContact();

  if (!open) return null;

  return (
    <div className="contact-overlay" onClick={closeContact}>
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={ContactImg} alt="Contact" />
      </div>
    </div>
  );
}

export default ContactModal;