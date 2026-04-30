import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openContact = () => setOpen(true);
  const closeContact = () => setOpen(false);

  return (
    <ContactContext.Provider value={{ open, openContact, closeContact }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  return useContext(ContactContext);
}