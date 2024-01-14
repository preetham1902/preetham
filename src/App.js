import './App.css';
import { useContext, useEffect, useState } from "react";
import { useNavigate, redirect } from 'react-router-dom';
import AnimalShow from "./AnimalShow";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { MyContext } from './Route';
import Timer from './Timer';


function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animals, setAnimals] = useState([])

    const {setCartItems} = useContext(MyContext);

    const {cartItems} = useContext(MyContext);

    const {setTime} = useContext(MyContext);
    //useEffect(()=>{
        //setTime(2*60*1000)
    //},[cartItems])
    
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    };
    let navigate = useNavigate();
    const routeChange = () => {
        //return <redirect
        let path = 'cart';
        navigate(path);
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} setCartItems={setCartItems} />
    });

    
    return (
        <div >
            <div className='app'>
                <button className='animal-button' onClick={handleClick}>Add Animal</button>
                <div className='animal-list'>{renderedAnimals}</div>
            </div>

            <button onClick={routeChange} className='shopping-cart'><PiShoppingCartSimpleFill /></button>
            {cartItems.length > 0 ? <Timer duration={2*60*1000} /> : ""}
        </div>

    );
}

export default App;