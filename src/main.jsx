import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import { ContactProvider } from "./context/ContactContext";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import LiberaUscita from "./sections/LiberaUscita";
import OverExposed from "./sections/OverExposed";
import NoteKiller from "./sections/NoteKiller";
import AttaccoManoide from "./sections/AttaccoManoide";
import Mdw26 from "./sections/Mdw26";

import ContactModal from "./components/ContactModal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <ContactProvider>

      {/* MODALE GLOBALE */}
      <ContactModal />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/libera-uscita" element={<LiberaUscita />} />
        <Route path="/over-exposed" element={<OverExposed />} />
        <Route path="/note-killer" element={<NoteKiller />} />
        <Route path="/attacco-manoide" element={<AttaccoManoide />} />
        <Route path="/mdw-26" element={<Mdw26 />} />
      </Routes>

    </ContactProvider>

  </BrowserRouter>
);