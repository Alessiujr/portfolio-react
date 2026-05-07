import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import { ContactProvider } from "./context/ContactContext";

import Hero from "./webpages/Hero";
import Projects from "./webpages/Projects";
import LiberaUscita from "./webpages/LiberaUscita";
import OverExposed from "./webpages/OverExposed";
import NoteKiller from "./webpages/NoteKiller";
import AttaccoManoide from "./webpages/AttaccoManoide";
import Mdw26 from "./webpages/Mdw26";

import ContactModal from "./components/ContactModal";
import EmailModal from "./components/EmailModal";

import TermsOfService from "./webpages/TermsOfService";
import PrivacyPolicy from "./webpages/PrivacyPolicy";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <ContactProvider>

      {/* MODALI GLOBALI */}
      <ContactModal />
      <EmailModal />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/libera-uscita" element={<LiberaUscita />} />
        <Route path="/over-exposed" element={<OverExposed />} />
        <Route path="/note-killer" element={<NoteKiller />} />
        <Route path="/attacco-manoide" element={<AttaccoManoide />} />
        <Route path="/mdw-26" element={<Mdw26 />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>

    </ContactProvider>

  </BrowserRouter>
);