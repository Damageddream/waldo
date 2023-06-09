import { useState, useEffect } from "react";
import '../styles/timer.css'

const Timer = (props) => {
  const [time, setTime] = useState(null);
  const [passed, setPassed] = useState(null);

  useEffect(() => {
    setPassed(Date.now());
  }, []);
  setInterval(() => {
    setTime(Date.now() - passed);
    props.passTime(time)
  }, 10);
  return (
    <div className="timer">
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
  );
};

export default Timer;
