import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [time, setTime] = useState({ hours: 10, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const { hours, minutes, seconds } = prevTime;

          if (hours === 0 && minutes === 0 && seconds === 0) {
            // Agar vaqt tugasa, sanashni to'xtatamiz
            clearInterval(interval);
            setIsRunning(false);
            return prevTime;
          }

          if (seconds > 0) {
            return { hours, minutes, seconds: seconds - 1 };
          } else if (minutes > 0) {
            return { hours, minutes: minutes - 1, seconds: 59 };
          } else {
            return { hours: hours - 1, minutes: 59, seconds: 59 };
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div style={{ textAlign: "center", fontSize: "20px" }}>
      <div className="flex justify-center dark:text-olcha dark:border-olcha">
        <div className="border border-black/20 rounded-lg w-7 h-7 flex justify-center text-black/65 dark:text-olcha dark:border-olcha">
          {formatTime(time.hours)}
        </div>
        :
        <div className="border border-black/20 rounded-lg w-7 h-7 flex justify-center text-black/65 dark:text-olcha dark:border-olcha">
          {formatTime(time.minutes)}
        </div>
        :{/* <div>{""}</div> */}
        <div className="border border-black/20 rounded-lg w-7 h-7 flex justify-center text-black/65 dark:text-olcha dark:border-olcha">
          {formatTime(time.seconds)}
        </div>
      </div>
      {/* <div style={{ marginTop: "20px" }}>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTime({ hours: 10, minutes: 0, seconds: 0 });
          }}
        >
          Reset
        </button>
      </div> */}
    </div>
  );
};

export default Countdown;
