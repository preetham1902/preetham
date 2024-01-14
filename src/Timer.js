import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "./Route";

const Timer = () => {
    const [timeOut,setTimer]=useState(null);
    var tm = null;
    const { time, setTime, cartItems } = useContext(MyContext);
    useEffect(() => {
        tm = setTimeout(() => {
            if (time !== 0) {
                setTime(time => time - 1000)
            }
        }, 1000)
        setTimer(tm)
    }, [time])

    useEffect(() => {
        clearTimeout(timeOut);
        setTime(time => 2 * 60 * 1000)

    }, [cartItems])


    const getFormattedTime = () => {
        let total_seconds = parseInt(Math.floor(time / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 60);
        return `${hours}:${minutes}:${seconds}`;

    }

    return <div>{getFormattedTime()}</div>
}

export default Timer; 