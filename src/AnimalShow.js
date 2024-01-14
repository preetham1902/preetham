import './AnimalShow.css'
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import { BiCartDownload } from "react-icons/bi";
import { MdVerified } from "react-icons/md";



const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
};

function AnimalShow({ type,setCartItems }) {
    const [clicks, setClicks] = useState(0);
    const [showVerified, setVerified] = useState(false);
    
    const changeSymbol = (animal) => {
        setCartItems(current => [...current, animal]);
        setVerified(true);
    }


    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <div className='animal-show' onClick={handleClick}>
            <img className='animal' alt="animal" src={svgMap[type]} />
            {/* <img className='heart' alt="heart" src={heart} style={{ width: 10 + 10*clicks +'px'}} /> */}
            <div onClick={() => changeSymbol(svgMap[type])}>
                {showVerified ? <MdVerified /> : <BiCartDownload />}
            </div>

        </div>
    );
}

export default AnimalShow;