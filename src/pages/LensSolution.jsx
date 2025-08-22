// src/components/LensSolution.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LensSolution = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return (
      <div className="text-white p-6">
        <p className="text-lg">No data provided. Go back to simulation.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-lg font-semibold"
        >
          Back
        </button>
      </div>
    );
  }

  const { lensType, u, f, h } = location.state;

  // Apply sign convention
  const signedF = lensType === "concave" ? -f : f; // concave lens f < 0, convex f > 0
  const signedU = u; // object always positive

  // Lens formula: 1/f = 1/v - 1/u
  let v = null;
  let magnification = null;
  let hImage = null;

  if (signedU !== signedF) {
    v = (signedF * signedU) / (signedU - signedF); // float
    magnification = v / signedU;
    hImage = h * magnification;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 p-6">
      <div className="bg-blue-800/60 p-8 rounded-3xl shadow-2xl backdrop-blur-md text-white w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Lens Solution</h2>

        {/* Sign conventions */}
        <div className="mb-8 bg-white/10 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3">Sign Conventions</h3>
          <ul className="list-disc list-inside text-lg text-gray-200 space-y-1">
            <li>Convex lens: f &gt; 0 (+)</li>
            <li>Concave lens: f &lt; 0 (-)</li>
            <li>Object distance (u) &gt; 0 (+) (object always in front)</li>
            <li>Image distance (v) positive → real image (+)</li>
            <li>Image distance (v) negative → virtual image (-)</li>
            <li>Height positive → upright (+)</li>
            <li>Height negative → inverted (-)</li>
          </ul>
        </div>

        {/* Step-by-step */}
        <h3 className="text-3xl font-extrabold mb-6 text-center text-yellow-300">
          Step-by-Step Solution
        </h3>
        <p className="italic mb-6 text-2xl text-white text-center">
          Lens Formula: <b>1/f = 1/v - 1/u</b>
        </p>

        <p className="text-2xl mb-3">Given values:</p>
        <ul className="ml-6 mb-6 text-2xl space-y-1">
          <li>Lens type = <b>{lensType}</b></li>
          <li>u = <b>{signedU.toFixed(2)} cm</b></li>
          <li>f = <b>{signedF.toFixed(2)} cm</b> (after sign convention)</li>
          <li>h = <b>{h.toFixed(2)} cm</b></li>
        </ul>

        {v !== null ? (
          <div className="space-y-3 text-2xl text-white">
            <p>Substituting: 1/{signedF.toFixed(2)} = 1/v - 1/{signedU.toFixed(2)}</p>
            <p>⇒ v = <b>{v.toFixed(2)} cm</b></p>
            <p>Magnification (M) = v/u = <b>{magnification.toFixed(2)}</b></p>
            <p>Image Height (h′) = M × h = <b>{hImage.toFixed(2)} cm</b></p>
            <p className="mt-4 font-extrabold text-2xl text-white">
              Interpretation: The image is {magnification < 0 ? "inverted" : "upright"} and {Math.abs(magnification) > 1 ? "magnified" : "diminished"}.
            </p>
          </div>
        ) : (
          <p className="text-red-300 text-2xl font-semibold">
            Object at focus → Image at infinity
          </p>
        )}

        {/* Back Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-xl font-semibold shadow-md"
          >
            Back to Simulation
          </button>
        </div>
      </div>
    </div>
  );
};

export default LensSolution;
