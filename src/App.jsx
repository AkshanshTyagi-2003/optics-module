// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Simulation from "./pages/Simulation";
import QuizPage from "./pages/QuizPage";
import MirrorSolution from "./pages/MirrorSolution"; // Mirror solution page
import LensSolution from "./pages/LensSolution";     // Lens solution page
import RefractionSolution from "./pages/RefractionSolution"; // Refraction solution page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simulation" element={<Simulation />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/mirror-solution" element={<MirrorSolution />} />   {/* Mirror route */}
      <Route path="/lens-solution" element={<LensSolution />} />       {/* Lens route */}
      <Route path="/refraction-solution" element={<RefractionSolution />} /> {/* Refraction route */}
    </Routes>
  );
}

export default App;
