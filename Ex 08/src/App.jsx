import { useState, useEffect } from "react";

const Countdown = () => {
  const [initialTime, setInitialTime] = useState(30)
  const [minLeft, setMinLeft] = useState(30);
  const [isRunning, setIsRunning] = useState();

  useEffect(() => {
    let minLeftId;

    if(isRunning && minLeft > 0) {
      minLeftId = setInterval(() => {
        setMinLeft((prev)=> prev - 1)
      }, 1000);
    }

    return ()=> clearInterval(minLeftId);
  }, [isRunning, minLeft])

  const handleStart = () => {
    if (minLeft > 0) {
    setIsRunning(true);
    }
  }

  const handleStop = () => {
    setIsRunning(false);
  }

  const handleReset = () => {
    setIsRunning(false);
    setMinLeft(initialTime);
  }

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setInitialTime(value);
    setMinLeft(value);
    setIsRunning(false);
  };

  return ( 
    <div>
      <h2>Countdown Timer</h2>
      <label >Set Time (seconds):</label>
      <input type="number" value={initialTime} onChange={handleInputChange} />
      <p>Time Left:{minLeft} seconds</p>
      <button disabled={isRunning } onClick={handleStart}>Start</button>
      <button disabled={!isRunning} onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Countdown;