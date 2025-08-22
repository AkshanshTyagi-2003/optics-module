import React from "react";
import MirrorSimulation from "../components/MirrorSimulation";
import LensSimulation from "../components/LensSimulation";
import RefractionSimulation from "../components/RefractionSimulation";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Simulation = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden p-6 flex flex-col items-center">
      
      {/* Subtle squares overlay */}
      <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 opacity-10">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border border-white/20"></div>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold italic mb-8 z-10 text-center">
        Optics Simulations
      </h1>

      {/* Simulations container */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col gap-12">
        <MirrorSimulation />
        <LensSimulation />
        <RefractionSimulation />
      </div>

      {/* Back to Home button (same style as Give Solution) */}
      <Link
        to="/"
        className="mt-10 flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-2xl italic font-semibold shadow-md transform hover:scale-105 transition-all duration-300 z-10"
      >
        <FaHome className="mr-2" />
        Back to Home
      </Link>
    </div>
  );
};

export default Simulation;
