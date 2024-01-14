import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import AnimalShow from "./AnimalShow";
import { MyContext } from "./Route";

const Cart = () => {
    const url = "https://dummyjson.com/carts";
    const [response, setResponse] = useState(0);
    const fetchInfo=()=>{
        axios.get("https://dummyjson.com/carts")
        .then((res) => {
            //res.limit
            //console.log(res.data)
            setResponse(res.data.total);
        })
    }
    const {cartItems} = useContext(MyContext);
    //let response;
    useEffect(() => {
        fetchInfo();
    }
        , []);
        const renderedAnimals = cartItems.map((animal, index) => {
            return <AnimalShow type={animal} key={index} setCartItems={null} />
        });

    return (
        <div >
            {renderedAnimals}
        </div>
    )
}

export default Cart;