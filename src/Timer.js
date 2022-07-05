import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TimerWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;
  justify-items: center;
  max-width: 400px;
  font-size: 40px;
  color: blue;
  margin: "30px auto";
`;

const TimerTime = styled.div`
  min-width: 200px;
  text-align: left;
  font-size: 52px;
`;

const TimerActions = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
  color: gray;
`;

function Timer(props) {
  const { randomInput, setrandomInput } = useState();
  const [isPaused, setIsPaused] = useState();
  console.log("randomInput", randomInput);

  useEffect(() => {
    let interval = null;
    if (randomInput === -1) {
      setrandomInput(props.initialTime);
    }

    if (!isPaused && randomInput > 0) {
      interval = setInterval(() => {
        console.log("Updating time");
        setrandomInput(randomInput - 1);
      }, 1000);
    } else if (isPaused || randomInput === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, []);

  const deleteTimerHandler = () => {
    //deleteTimer(id);
  };

  const toggleTimer = () => {
    const newState = !isPaused;
    setIsPaused(newState);
  };

  return (
    <TimerWrapper>
      <TimerTime className="timer__time-left">{randomInput}</TimerTime>
      <TimerActions className="timer--actions">
        {isPaused ? (
          <i className="fa-solid fa-play" onClick={toggleTimer}></i>
        ) : (
          <i className="fa-solid fa-circle-pause" onClick={toggleTimer}></i>
        )}
        <i className="fa-solid fa-trash" onClick={deleteTimerHandler}></i>
      </TimerActions>
    </TimerWrapper>
  );
}

export default Timer;
