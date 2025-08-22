import React, { useState, useEffect } from "react";

// Full question pool
const quizData = [
  { question: "What type of mirror is used to focus sunlight?", options: ["Plane", "Concave", "Convex", "None"], answer: "Concave" },
  { question: "Light bends when it passes from one medium to another. This is called?", options: ["Reflection", "Refraction", "Diffraction", "Dispersion"], answer: "Refraction" },
  { question: "Convex lens is also called?", options: ["Diverging lens", "Converging lens", "Plano mirror", "None"], answer: "Converging lens" },
  { question: "Which lens is used to correct myopia?", options: ["Concave", "Convex", "Plano", "None"], answer: "Concave" },
  { question: "Which color bends most in a prism?", options: ["Red", "Blue", "Violet", "Green"], answer: "Violet" },
  { question: "The focal length of a concave mirror is?", options: ["Positive", "Negative", "Zero", "Infinite"], answer: "Negative" },
  { question: "Total internal reflection occurs when?", options: ["Angle < critical", "Angle > critical", "Any angle", "None"], answer: "Angle > critical" },
  { question: "Unit of refractive index?", options: ["Meter", "No unit", "Second", "Joule"], answer: "No unit" },
  { question: "Power of a lens is?", options: ["1/f", "f", "f^2", "None"], answer: "1/f" },
  { question: "Which mirror is used in headlights?", options: ["Plane", "Concave", "Convex", "None"], answer: "Concave" },
];

const Quiz = () => {
  const [questionIndices, setQuestionIndices] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([null, null, null]);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // Pick 3 random questions on mount
  useEffect(() => {
    const indices = [];
    while (indices.length < 3) {
      const rand = Math.floor(Math.random() * quizData.length);
      if (!indices.includes(rand)) indices.push(rand);
    }
    setQuestionIndices(indices);
  }, []);

  const handleOptionSelect = (option) => {
    const updated = [...selectedOptions];
    updated[current] = option;
    setSelectedOptions(updated);
  };

  const handleNext = () => {
    if (current < 2) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleFinish = () => {
    let finalScore = 0;
    questionIndices.forEach((qIndex, i) => {
      if (selectedOptions[i] === quizData[qIndex].answer) finalScore++;
    });
    setScore(finalScore);
    setShowScore(true);
  };

  if (questionIndices.length === 0) return null; // wait for random selection

  if (showScore) {
    return (
      <div className="text-center text-white text-2xl font-bold">
        You scored {score} / 3
      </div>
    );
  }

  const currentQuestion = quizData[questionIndices[current]];

  return (
    <div className="flex flex-col gap-6">
      {/* Question */}
      <h3 className="text-white text-2xl font-semibold mb-4">{currentQuestion.question}</h3>

      {/* Options */}
      <div className="flex flex-col gap-4">
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionSelect(option)}
            className={`flex items-center gap-3 px-4 py-3 border-2 rounded-full transition-colors duration-300 ${
              selectedOptions[current] === option
                ? "bg-pink-600 border-pink-500 text-white"
                : "border-white/50 text-white hover:bg-white/10"
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                selectedOptions[current] === option ? "bg-white" : "border-white"
              }`}
            ></span>
            <span className="text-lg">{option}</span> {/* Slightly bigger text */}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4">
        {current > 0 && (
          <button
            onClick={handlePrev}
            className="px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-full transition-transform transform hover:scale-105"
          >
            Previous Question
          </button>
        )}
        {current < 2 ? (
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-full transition-transform transform hover:scale-105"
          >
            Next Question
          </button>
        ) : (
          <button
            onClick={handleFinish}
            className="px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-full transition-transform transform hover:scale-105"
          >
            Finish
          </button>
        )}
        <button
          onClick={() => {
            const updated = [...selectedOptions];
            updated[current] = null;
            setSelectedOptions(updated);
          }}
          className="px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-full transition-transform transform hover:scale-105"
        >
          Clear Option
        </button>
      </div>
    </div>
  );
};

export default Quiz;
