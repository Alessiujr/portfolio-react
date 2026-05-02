import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import { ContactProvider } from "./context/ContactContext";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import LiberaUscita from "./sections/LiberaUscita";
import OverExposed from "./sections/OverExposed";

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
      </Routes>

    </ContactProvider>

  </BrowserRouter>
);