import cow from '../svg/cow.svg'
import bird from '../svg/bird.svg'
import cat from '../svg/cat.svg'
import dog from '../svg/dog.svg'
import gator from '../svg/gator.svg'
import heart from '../svg/heart.svg'
import horse from '../svg/horse.svg'
import { useState } from 'react'

const animalMapper = {
    cow,
    bird,
    cat,
    dog,
    gator,
    horse
};

function AnimalShow({type}) {
    const [heartSize, setHeartSize] = useState(0);

    function handleClick() {
        setHeartSize(heartSize+1);
    }

    return (
        <div onClick={handleClick} className='shadow-xl rounded-lg inline-block relative bg-rose-100'>
            <img src={animalMapper[type]} alt='animal' className='h-64' />
            <img src={heart} alt='heart' style={{ width: 10 + 10*heartSize + 'px' }} className='absolute bottom-0 right-0 max-h-64' />
        </div>
    );
}

export default AnimalShow