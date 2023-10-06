import React, { useState, useRef } from "react";
import "../styles/App.css";
import AnimalShow from "./AnimalShow";

function App() {
  const animalArray = ["cow", "bird", "cat", "dog", "gator", "horse"];
  const containerRef = useRef(null);

  function randomAnimal() {
    return animalArray[Math.floor(Math.random() * animalArray.length)];
  }

  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    const newAnimal = randomAnimal();
    setAnimals([...animals, newAnimal]);

    if (containerRef.current) {
      const animalCards = containerRef.current.querySelectorAll(".animal-card");
      const lastAnimalCard = animalCards[animalCards.length - 1];
  
      lastAnimalCard.scrollIntoView({
        behavior: "smooth",
        block: "start", 
        inline: "nearest", 
      });;
    }
  };

  const renderedAnimals = animals.map((animal, index) => (
    <div className="animal-card" key={index}>
      <AnimalShow type={animal} />
    </div>
  ));

  return (
    <div className="app-container">
      <header className="app-header bg-slate-800">
        <h1 className="header-text">Random Animal Viewer</h1>
      </header>
      <main className="app-main">
        <div className="button-container">
          <button onClick={handleClick}>
            <a className="relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Show me a random animal
              </span>
            </a>
          </button>
        </div>
        <div className="animal-grid" ref={containerRef}>
          {renderedAnimals}
        </div>
        {/* Additional Elements */}
        <div className="additional-elements">
          <div className="svg-container">{/* Add SVG icons or illustrations here */}</div>
          <div className="additional-text">
            {/* Add additional text or information here */}
            <p>Explore the amazing world of animals!</p>
          </div>
        </div>
      </main>
      <footer className="footer-text">
        &copy; {new Date().getFullYear()} Your App Name
      </footer>
    </div>
  );
}

export default App;
