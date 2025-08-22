// src/components/RefractionSimulation.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RefractionSimulation = () => {
  const [incidentAngle, setIncidentAngle] = useState(30); // in degrees
  const [n1, setN1] = useState(1.0); // refractive index of medium 1
  const [n2, setN2] = useState(1.5); // refractive index of medium 2
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/refraction-solution", {
      state: {
        incidentAngle,
        n1,
        n2,
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 p-6">
      <div className="bg-blue-800/60 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md text-white w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Refraction Simulation</h1>

        {/* Incident Angle */}
        <div className="mb-6">
          <label className="block mb-2 text-lg">
            Incident Angle (0°–90°) (By Default: 30°)
          </label>
          <input
            type="range"
            min="0"
            max="90"
            step="0.1"
            value={incidentAngle}
            onChange={(e) => setIncidentAngle(parseFloat(e.target.value))}
            className="w-full accent-blue-500"
          />
          <p className="mt-2 text-lg">Incident Angle = {incidentAngle.toFixed(1)}°</p>
        </div>

        {/* Refractive Index n1 */}
        <div className="mb-6">
          <label className="block mb-2 text-lg">
            Refractive Index of Medium 1 (By Default: 1.0)
          </label>
          <input
            type="range"
            min="1.0"
            max="10.0"
            step="0.01"
            value={n1}
            onChange={(e) => setN1(parseFloat(e.target.value))}
            className="w-full accent-blue-500"
          />
          <p className="mt-2 text-lg">n1 = {n1.toFixed(2)}</p>
        </div>

        {/* Refractive Index n2 */}
        <div className="mb-6">
          <label className="block mb-2 text-lg">
            Refractive Index of Medium 2 (By Default: 1.5)
          </label>
          <input
            type="range"
            min="1.0"
            max="10.0"
            step="0.01"
            value={n2}
            onChange={(e) => setN2(parseFloat(e.target.value))}
            className="w-full accent-blue-500"
          />
          <p className="mt-2 text-lg">n2 = {n2.toFixed(2)}</p>
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

export default RefractionSimulation;
