import { useState } from 'react';
import './Counter.css';
import Count from "./Count";
import Button from './Button';


function Counter() {
    const [count, setCount] = useState(0)

    let feedback = count > 10 ? "It's higher than 10!" : "Keep counting..."

    function increment(step) {
        setCount(prev => prev + step)
    }

    function decrement(step) {
        if (count - step > 0) setCount(prev => prev - step) 
        else setCount(0)
    }

    return (
        <div>
            < Count value={count} />
            < Button setFunc={increment} step={1} name="Increment 1!" /> 
            < Button setFunc={decrement} step={2} name="Decrement 2!" /> 
            <div>{feedback}</div>
        </div>
    )
}

export default Counter;