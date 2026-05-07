import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);

  const openContact = () => setOpen(true);
  const closeContact = () => setOpen(false);

  const openEmail = () => setEmailOpen(true);
  const closeEmail = () => setEmailOpen(false);

  return (
    <ContactContext.Provider value={{ 
      open, openContact, closeContact,
      emailOpen, openEmail, closeEmail 
    }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  return useContext(ContactContext);
}