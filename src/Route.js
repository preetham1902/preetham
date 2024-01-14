import React, { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./Cart";
import Timer from "./Timer";

export const MyContext = createContext("");

export default function Sai() {
    const [cartItems, setCartItems] = useState([]);
    const [time, setTime] = useState(2*60*1000);

    return (
        <MyContext.Provider value={{ cartItems, setCartItems, time, setTime }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="timer" element={<Timer />} />
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>
    )

}
