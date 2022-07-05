import React, { useState } from "react";
import App from "./App";

function TimerList() {
  const [timerList, setTimerList] = useState([]);
  const [inputTime, setInputTime] = useState(0);

  const createTimer = () => {
    setTimerList([
      ...timerList,
      {
        timerId: Math.random(),
        inputTime
      }
    ]);
    // setInputTime("");
  };

  return (
    <>
      <>
        {timerList.length < 10 &&
          timerList.map((timer) => {
            return <App key={timer.timerId} randominput={inputTime} />;
          })}
      </>

      <button onClick={createTimer}>add Timer</button>
    </>
  );
}

export default TimerList;
