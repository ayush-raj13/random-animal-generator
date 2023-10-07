import React, { useState, useRef, useEffect } from "react";
import "../styles/App.css";
import AnimalShow from "./AnimalShow";

function App() {
  const animalArray = ["cow", "bird", "cat", "dog", "gator", "horse"];
  const containerRef = useRef(null);

  function randomAnimal() {
    const randomIndex = Math.floor(Math.random() * animalArray.length);
    return animalArray[randomIndex];
  }
  const [animals, setAnimals] = useState([]);

  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'dark' : false;
  });

  // Function to toggle the dark mode icon visibility
  const toggleIconVisibility = (newDarkMode) => {
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    if (darkIcon && lightIcon) {
      darkIcon.style.display = newDarkMode ? 'inline' : 'none';
      lightIcon.style.display = newDarkMode ? 'none' : 'inline';
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');

    // Toggle the visibility of the dark and light mode icons
    toggleIconVisibility(newDarkMode);

    // Toggle dark mode class on the document element
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

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
    <div className="animal-card " key={index}>
      <AnimalShow type={animal} darkMode={darkMode} />
    </div>
  ));

  useEffect(() => {
    // Set the icon visibility when the component mounts
    toggleIconVisibility(darkMode);

    // Toggle dark mode class on the document element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Apply different CSS classes based on the darkMode state
  const containerClass = localStorage.theme === 'dark' ? 'bg-gray-900' : 'bg-rose-300';

  return (
    <div className={`${containerClass} transition-all min-h-screen`}>
      <div className="absolute top-4 right-4">
        <button
          id="theme-toggle"
          type="button"
          class="text-gray-500 transition-all bg-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm flex items-center justify-center h-10 w-10"
          onClick={toggleDarkMode}>
          <svg
            id="theme-toggle-dark-icon"
            class="w-5 h-5 hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            class="w-5 h-5 hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="app-container">
        <header className="app-header bg-red-400 transition-all dark:bg-slate-800 rounded-tr-md rounded-tl-md">
          <h1 className="header-text">Random Animal Viewer</h1>
        </header>
        <main className="app-main dark:bg-slate-500">
          <div className="button-container">
            <button onClick={handleClick}>
              <button className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white dark:bg-black border-2 border-black dark:border-white group-hover:bg-black"></span>
                <span className="relative text-black dark:text-white group-hover:text-white">
                  Show me a random animal
                </span>
              </button>
            </button>
          </div>
          <div className="animal-grid" ref={containerRef}>
            {renderedAnimals}
          </div>
          {/* Additional Elements */}
          <div className="additional-elements">
            <div className="svg-container">{/* Add SVG icons or illustrations here */}</div>
            <div className="additional-text mt-5">
              {/* Add additional text or information here */}
              <p>Explore the amazing world of animals!</p>
            </div>
          </div>
        </main>
        <footer className="footer-text">
          &copy; {new Date().getFullYear()} Your App Name
        </footer>
      </div>
    </div>
  );
}

export default App;
