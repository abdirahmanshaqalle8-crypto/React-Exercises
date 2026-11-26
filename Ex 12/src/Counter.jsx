import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
      if (count > 0) setCount(count - 1);
    }

    const handleIncrement = () => setCount(count + 1);


    return (
    <div>
        <h2>Count: </h2>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>increment</button>
    </div>
    )
}

export default Counter;