"use client";
import {useState} from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0);
    
    function handlePlus () {
        let plus = counter + 1;
        setCounter(plus);
    }
    function handleMinus () {
        let minus = counter- 1;
        setCounter(minus);
    }
    return(
   <div>
    <h1>Counter</h1>
    <div id="counter">
    <button onClick={handleMinus}>-</button>
    <p>{counter}</p>
     <button onClick={handlePlus}>+</button>
</div>
</div>
)
};