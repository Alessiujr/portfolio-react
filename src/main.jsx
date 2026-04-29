// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ✅ IMPORT CSS GLOBALE (MANCANTE NEL TUO CASO) */
import "./index.css";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>
);