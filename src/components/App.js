// App.js
import React, { useState } from "react";
import "../styles/App.css";
import AnimalShow from "./AnimalShow";

function App() {
  const animalArray = ["cow", "bird", "cat", "dog", "gator", "horse"];

  function randomAnimal() {
    return animalArray[Math.floor(Math.random() * animalArray.length)];
  }

  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, randomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <div className="animal-card" key={index}>
      <AnimalShow type={animal} />
    </div>
  ));

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="header-text">Random Animal Viewer</h1>
      </header>
      <main className="app-main">
        <div className="button-container">
          <button className="custom-button" onClick={handleClick}>
            Click Me!
          </button>
        </div>
        <div className="animal-grid">{renderedAnimals}</div>
      </main>
      <footer className="footer-text">
        &copy; {new Date().getFullYear()} Your App Name
      </footer>
    </div>
  );
}

export default App;
