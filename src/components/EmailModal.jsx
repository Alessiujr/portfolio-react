import { useState } from "react";
import { useContact } from "../context/ContactContext";
import emailjs from "@emailjs/browser";
import "./EmailModal.css";

// IMPORTANTE: Inizializza EmailJS con la tua PUBLIC_KEY
// Ottieni le credenziali su https://www.emailjs.com/
emailjs.init("xO9hh0O4c_KUq8LSA"); // Sostituisci con la tua PUBLIC_KEY

function EmailModal() {
  const { emailOpen, closeEmail } = useContact();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    senderEmail: "",
    subject: "",
    body: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Nome è obbligatorio";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Cognome è obbligatorio";
    }

    if (!formData.senderEmail.trim()) {
      newErrors.senderEmail = "Email è obbligatoria";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.senderEmail)) {
      newErrors.senderEmail = "Email non valida";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject è obbligatorio";
    }

    if (!formData.body.trim()) {
      newErrors.body = "Messaggio è obbligatorio";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Rimuovi errore quando l'utente inizia a digitare
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Invia l'email tramite EmailJS
      await emailjs.send(
        "service_korx14j", // Sostituisci con il tuo SERVICE_ID
        "template_9epa3z8", // Sostituisci con il tuo TEMPLATE_ID
        {
          to_email: "ctalect11@gmail.com",
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.senderEmail,
          subject: formData.subject,
          message: formData.body,
        }
      );

      setSuccess(true);
      setFormData({ firstName: "", lastName: "", senderEmail: "", subject: "", body: "" });

      // Chiudi la modale dopo 2 secondi
      setTimeout(() => {
        closeEmail();
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Errore nell'invio dell'email:", error);
      setErrors({
        submit:
          "Errore nell'invio dell'email. Controlla la console per i dettagli.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!emailOpen) return null;

  return (
    <div className="email-overlay" onClick={closeEmail}>
      <div className="email-modal" onClick={(e) => e.stopPropagation()}>
        <button className="email-modal-close" onClick={closeEmail}>
          ✕
        </button>

        <h2 className="email-modal-title">Inviami un messaggio</h2>

        {success ? (
          <div className="success-message">
            <p>✓ Email inviata con successo!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="email-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Nome *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={errors.firstName ? "input-error" : ""}
                />
                {errors.firstName && (
                  <span className="error-text">{errors.firstName}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Cognome *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={errors.lastName ? "input-error" : ""}
                />
                {errors.lastName && (
                  <span className="error-text">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="senderEmail">Email *</label>
              <input
                type="email"
                id="senderEmail"
                name="senderEmail"
                value={formData.senderEmail}
                onChange={handleChange}
                placeholder="your@email.com"
                className={errors.senderEmail ? "input-error" : ""}
              />
              {errors.senderEmail && (
                <span className="error-text">{errors.senderEmail}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Email subject"
                className={errors.subject ? "input-error" : ""}
              />
              {errors.subject && (
                <span className="error-text">{errors.subject}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="body">Messaggio *</label>
              <textarea
                id="body"
                name="body"
                value={formData.body}
                onChange={handleChange}
                placeholder="Your message..."
                rows="6"
                className={errors.body ? "input-error" : ""}
              />
              {errors.body && (
                <span className="error-text">{errors.body}</span>
              )}
            </div>

            {errors.submit && (
              <div className="error-submit">{errors.submit}</div>
            )}

            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? "Invio in corso..." : "Invia Email"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default EmailModal;
