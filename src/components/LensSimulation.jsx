// src/components/LensSimulation.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LensSimulation = () => {
  const [lensType, setLensType] = useState("convex"); // convex or concave
  const [distance, setDistance] = useState(50); // object distance
  const [focalLength, setFocalLength] = useState(30); // focal length
  const [height, setHeight] = useState(5); // object height
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/lens-solution", {
      state: {
        lensType,
        u: distance,
        f: focalLength,
        h: height,
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 p-6">
      <div className="bg-blue-800/60 p-8 rounded-3xl shadow-2xl backdrop-blur-md text-white w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Lens Simulation</h1>

        {/* Lens Type Selection */}
        <div className="flex gap-6 mb-6 justify-center">
          <label className="flex items-center gap-2 cursor-pointer text-lg">
            <input
              type="radio"
              name="lensType"
              value="convex"
              checked={lensType === "convex"}
              onChange={(e) => setLensType(e.target.value)}
              className="w-5 h-5 accent-blue-500"
            />
            Convex (+)
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-lg">
            <input
              type="radio"
              name="lensType"
              value="concave"
              checked={lensType === "concave"}
              onChange={(e) => setLensType(e.target.value)}
              className="w-5 h-5 accent-blue-500"
            />
            Concave (-)
          </label>
        </div>

        {/* Object Distance */}
        <div className="mb-6">
          <label className="block mb-2 text-lg">Object Distance (u) [1–100 cm]</label>
          <input
            type="range"
            min="1"
            max="100"
            step="0.1"
            value={distance}
            onChange={(e) => setDistance(parseFloat(e.target.value))}
            className="w-full accent-blue-500"
          />
          <p className="mt-2 text-lg">u = {distance.toFixed(1)} cm</p>
        </div>

        {/* Focal Length */}
        <div className="mb-6">
          <label className="block mb-2 text-lg">Focal Length (f) [1–50 cm]</label>
          <input
            type="range"
            min="1"
            max="50"
            step="0.1"
            value={focalLength}
            onChange={(e) => setFocalLength(parseFloat(e.target.value))}
            className="w-full accent-blue-500"
          />
          <p className="mt-2 text-lg">f = {focalLength.toFixed(1)} cm</p>
        </div>

        {/* Object Height */}
        <div className="mb-6">
          <label className="block mb-2 text-lg">Object Height (h) [1–10 cm]</label>
          <input
            type="range"
            min="1"
            max="10"
            step="0.1"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            className="w-full accent-blue-500"
          />
          <p className="mt-2 text-lg">h = {height.toFixed(1)} cm</p>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-lg shadow-md transition-transform transform hover:scale-105"
        >
          Give Solution
        </button>
      </div>
    </div>
  );
};

export default LensSimulation;
