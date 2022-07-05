import { useState, useRef, useEffect } from "react";

function App() {
  const [randomInput, setRandomInput] = useState(0);

  const inputRef = useRef();
  const timerId = useRef();

  const handleChange = (e) => {
    setRandomInput(e.target.value);
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setRandomInput((e) => e - 1);
    }, 1000);

    inputRef.current.focus();
  };

  if (randomInput === 0) {
    clearInterval(timerId.current);
  }

  if (randomInput < 0) {
    clearInterval(timerId.current);
  }

  const stopTimer = () => {
    console.log(randomInput);
    clearInterval(timerId.current);
    timerId.current = 0;
    inputRef.current.focus();
  };

  const resetTimer = () => {
    stopTimer();
    if (randomInput) {
      setRandomInput(0);
    }
    inputRef.current.focus();
  };

  return (
    <main className="App">
      <input
        ref={inputRef}
        type="number"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />

      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
      <p>{randomInput}</p>
      <br></br>
    </main>
  );
}

export default App;
