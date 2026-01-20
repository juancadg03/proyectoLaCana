// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu.jsx";
import Home from "./pages/home.jsx";
import Metodologia from "./pages/metodologia.jsx";
import Vinetas from "./pages/vinetas.jsx"; 
import VinetaDetalle from "./pages/vinetaDetalle.jsx";
import ContraImagen from "./pages/contra-imagen.jsx";
import Archivos from "./pages/archivos.jsx";
import "./App.css";
import ArchivosDashboard from "./components/archivos-dashboard.jsx";
import EtnografiaDashboard from "./components/etnografia-dashboard.jsx";
import ContactoDashboard from "./pages/contacto-dashboard.jsx";

function App() {
  return (
    <div className="app-root">
      <MainMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metodologia" element={<Metodologia />} />
        <Route path="/vinetas" element={<Vinetas />} />  
        <Route path="/vinetas/:id" element={<VinetaDetalle />} /> 
        <Route path="/contra-imagen" element={<ContraImagen />} /> 
        <Route path="/archivos" element={<Archivos />} />
        <Route path="/archivos/archivos-dashboard" element={<ArchivosDashboard />} />
        <Route path="/archivos/etnografia-dashboard" element={<EtnografiaDashboard />} />
        <Route path="/contacto" element={<ContactoDashboard />} /> 
      </Routes>
    </div>
  );
}

export default App;
