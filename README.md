# Optics Simulation Web App

A React-based interactive web application to simulate optics concepts including **mirrors, lenses, and refraction**. Users can input parameters and see dynamic solutions with step-by-step explanations.

## Features

- **Mirror Simulation**
  - Choose concave or convex mirror
  - Set object distance, focal length, and object height
  - Dynamic calculation of image distance, magnification, and image height
  - Detailed step-by-step solution with sign conventions

- **Lens Simulation**
  - Choose convex or concave lens
  - Set object distance, focal length, and object height
  - Dynamic calculation of image distance, magnification, and image height
  - Detailed solution with step-by-step explanation and sign conventions

- **Refraction Simulation**
  - Set angle of incidence (0°–90°)
  - Input refractive indices of two media (1–10)
  - Dynamic calculation of refracted angle
  - Step-by-step solution and interpretation
  - Handles Total Internal Reflection (TIR) cases

- **Quiz Section**
  - Assess understanding of optics concepts

## Technologies Used

- React.js
- React Router
- Tailwind CSS
- JavaScript (ES6+)

## Folder Structure

optics-module/<br>
│── public/ # Static assets (favicon, images, etc.)<br>
│ └── vite.svg<br>
│<br>
│── src/<br>
│ ├── assets/ # Custom images, icons, diagrams<br>
│ │ └── logo.png<br>
│ │<br>
│ ├── components/ # Reusable UI & Simulation components<br>
│ │ ├── MirrorSimulation.jsx<br>
│ │ ├── LensSimulation.jsx<br>
│ │ ├── RefractionSimulation.jsx<br>
│ │ └── Quiz.jsx<br>
│ │<br>
│ ├── pages/ # Full pages (linked via router)<br>
│ │ ├── Home.jsx<br>
│ │ ├── Simulation.jsx<br>
│ │ ├── MirrorSolution.jsx<br>
│ │ ├── LensSolution.jsx<br>
│ │ ├── RefractionSolution.jsx<br>
│ │ └── QuizPage.jsx<br>
│ │<br>
│ ├── App.jsx # Root React component<br>
│ ├── main.jsx # Entry point (instead of index.js in Vite)<br>
│ └── index.css # Tailwind + global styles<br>
│<br>
│── .gitignore<br>
│── index.html # Vite entry HTML<br>
│── package.json # Dependencies & scripts<br>
│── postcss.config.js # Tailwind config helper<br>
│── tailwind.config.js # Tailwind configuration<br>
│── vite.config.js # Vite config (Vercel uses this)<br>
│── README.md # Documentation<br>

## Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/optics-module.git
```
2. Navigate to the project folder:
```bash
cd optics-module
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
5. Open your browser and go to the URL shown in the terminal

## Usage

- Navigate to Simulation from the homepage.
- Choose a concept: Mirror, Lens, or Refraction.
- Adjust input parameters using sliders or radio buttons.
- Click Give Solution to view detailed step-by-step calculations.
- Use the Quiz section to test your understanding.

##

