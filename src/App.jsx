// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu.jsx";
import Home from "./pages/home.jsx";
import Metodologia from "./pages/metodologia.jsx";
import Vinetas from "./pages/vinetas.jsx";   // ⬅️ NUEVO
import VinetaDetalle from "./pages/vinetaDetalle.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <MainMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metodologia" element={<Metodologia />} />
        <Route path="/vinetas" element={<Vinetas />} />  
        <Route path="/vinetas/:id" element={<VinetaDetalle />} /> 
      </Routes>
    </div>
  );
}

export default App;
