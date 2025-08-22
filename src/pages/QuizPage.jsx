import React from "react";
import Quiz from "../components/Quiz";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const QuizPage = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-pink-500 via-pink-400 to-purple-500 text-white overflow-hidden flex flex-col items-center py-12 px-6">
      
      {/* Subtle square pattern overlay */}
      <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 opacity-10">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border border-white/20"></div>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold italic mb-8 z-10 text-center">
        Optics Quiz
      </h1>

      {/* Quiz container */}
      <div className="relative z-10 w-full max-w-4xl bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
        <Quiz />
      </div>

      {/* Back to Home button */}
      <Link
        to="/"
        className="mt-10 flex items-center px-8 py-4 bg-pink-600 hover:bg-pink-500 rounded-full text-2xl italic font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 z-10"
      >
        <FaHome className="mr-2" />
        Back to Home
      </Link>
    </div>
  );
};

export default QuizPage;
