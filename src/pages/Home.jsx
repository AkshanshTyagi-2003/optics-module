import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa"; // Lens/eye icon

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-pink-400 to-purple-500 text-white relative overflow-hidden">
      
      {/* Subtle squares background */}
      <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 opacity-10">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border border-white/20"></div>
        ))}
      </div>

      {/* Logo + Title */}
      <div className="flex flex-col items-center mb-12 z-10">
        {/* Circle background for the logo */}
        <div className="w-28 h-28 flex items-center justify-center rounded-full bg-white/20 mb-6 shadow-lg">
          <FaRegEye className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-8xl font-bold text-white italic">Optica</h1>
      </div>

      {/* Buttons */}
      <div className="flex space-x-6 z-10">
        <button
          onClick={() => navigate("/simulation")}
          className="px-10 py-5 rounded-full bg-blue-600 hover:bg-blue-500 text-2xl italic font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Go to Simulations
        </button>
        <button
          onClick={() => navigate("/quiz")}
          className="px-10 py-5 rounded-full bg-pink-600 hover:bg-pink-500 text-2xl italic font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Go to Quiz
        </button>
      </div>
    </div>
  );
}

export default Home;
