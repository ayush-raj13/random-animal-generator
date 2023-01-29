import AnimalShow from './AnimalShow'
import { useState } from 'react';

function App() {
    const animalArray = ['cow', 'bird', 'cat', 'dog', 'gator', 'horse'];

    function randomAnimal() {
        return animalArray[Math.floor(Math.random() * animalArray.length)];
    }

    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, randomAnimal()]);
    }

    const renderedAnimals = animals.map((animal, index) => {return <AnimalShow type={animal} key={index} />});


    return (
        <div className='flex flex-col space-y-8 bg-rose-300 min-h-screen'>
            <div className='mx-auto py-8'>
                <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Click Me!</button>
            </div>
            <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1'>
                {renderedAnimals}
            </div>
        </div>
        
    );
}

export default App