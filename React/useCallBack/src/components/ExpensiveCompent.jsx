import React, { useCallback, useState } from 'react'

const ExpensiveCompent = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const expensiveCalculation = useCallback(() => {
        console.log("Running expensive calculation...");
        let result = 0;
        for (let i = 0; i < 100000000; i++) {
            result += i;
        }
        return result;
    },[count]);

    

    return (
        <div>
            <input type="number" value={text} placeholder='Type something' onChange={(e) => setText(e.target.value)} />

            <p>Expensive calculation result : {expensiveCalculation()}</p>

            <button onClick={() => setCount(count + 1)}>increment</button>



        </div>
    )
}

export default ExpensiveCompent