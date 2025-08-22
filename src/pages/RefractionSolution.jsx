// src/components/RefractionSolution.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RefractionSolution = () => {
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

  const { incidentAngle, n1, n2 } = location.state;

  // Calculate refracted angle using Snell's law
  let refractedAngle = null;
  let totalInternalReflection = false;
  try {
    const sinTheta2 = (n1 * Math.sin((incidentAngle * Math.PI) / 180)) / n2;
    if (Math.abs(sinTheta2) > 1) {
      totalInternalReflection = true;
    } else {
      refractedAngle = (Math.asin(sinTheta2) * 180) / Math.PI;
    }
  } catch (err) {
    totalInternalReflection = true;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 p-6">
      <div className="bg-blue-800/60 p-8 rounded-3xl shadow-2xl backdrop-blur-md text-white w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Refraction Solution</h2>

        {/* Sign conventions */}
        <div className="mb-8 bg-white/10 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3">Sign Conventions</h3>
          <ul className="list-disc list-inside text-lg text-gray-200 space-y-1">
            <li>Incident angle θ₁: measured from normal, positive</li>
            <li>Refracted angle θ₂: measured from normal, positive</li>
            <li>n₁: Refractive index of first medium</li>
            <li>n₂: Refractive index of second medium</li>
            <li>Total internal reflection occurs if sin(θ₂) &gt; 1</li>
          </ul>
        </div>

        {/* Step-by-step solution */}
        <h3 className="text-3xl font-extrabold mb-6 text-center text-yellow-300">
          Step-by-Step Solution
        </h3>

        <p className="text-2xl mb-3">Given values:</p>
        <ul className="ml-6 mb-6 text-2xl space-y-1">
          <li>Incident angle θ₁ = <b>{incidentAngle.toFixed(2)}°</b></li>
          <li>Refractive index n₁ = <b>{n1.toFixed(2)}</b></li>
          <li>Refractive index n₂ = <b>{n2.toFixed(2)}</b></li>
        </ul>

        {totalInternalReflection ? (
          <p className="text-red-300 text-2xl font-semibold">
            Total Internal Reflection occurs! No refraction possible.
          </p>
        ) : (
          <div className="space-y-3 text-2xl text-white">
            <p>Using Snell's Law: <b>n₁ × sin(θ₁) = n₂ × sin(θ₂)</b></p>
            <p>⇒ sin(θ₂) = n₁ × sin(θ₁) / n₂</p>
            <p>⇒ sin(θ₂) = {n1.toFixed(2)} × sin({incidentAngle.toFixed(2)}°) / {n2.toFixed(2)}</p>
            <p>
              ⇒ θ₂ = <b>{refractedAngle.toFixed(2)}°</b>
            </p>
            <p className="mt-4 font-extrabold text-2xl text-white">
              Interpretation: Light bends {n1 < n2 ? "towards" : "away from"} the normal.
            </p>
          </div>
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

export default RefractionSolution;
