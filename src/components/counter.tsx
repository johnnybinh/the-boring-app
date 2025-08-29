import { Button } from "@heroui/button";
import { useState } from "react";

const Counter = () => {
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hr: 0,
  });

  const [intervalId, setIntervalId]: any = useState();

  const updateTimer = () => {
    setTime((prev) => {
      let newTime = { ...prev };

      // update sec and see if we need to increase min
      if (newTime.sec < 59) newTime.sec += 1;
      else {
        newTime.min += 1;
        newTime.sec = 0;
      }
      // min has increased in *newTime* by now if it was updated, see if it has crossed 59
      if (newTime.min === 60) {
        newTime.min = 0;
        newTime.hr += 1;
      }

      return newTime;
    });
  };

  const [running, setRunning] = useState(false);

  const pauseOrResume = () => {
    setRunning((running) => !running);
    if (!intervalId) {
      let id = setInterval(updateTimer, 1000);

      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId("");
    }
  };

  const reset = () => {
    clearInterval(intervalId);
    // const historyString = localStorage.getItem("history");
    // let oldHistory = historyString ? JSON.parse(historyString) : [];
    // let today = Date.now();
    // let letNewHistory = { today, time };

    // [letNewHistory].concat(oldHistory);
    // localStorage.setItem("history", JSON.stringify(oldHistory));
    setTime({
      sec: 0,
      min: 0,
      hr: 0,
    });
  };

  return (
    <div>
      <h2 className="text-3xl py-2">{`${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${time.min} : ${time.sec < 10 ? 0 : ""}${time.sec}`}</h2>
      <div className="grid grid-col-2 grid-rows-1 gap-2">
        {running ? (
          <Button color="warning" onClickCapture={pauseOrResume}>
            Stop
          </Button>
        ) : (
          <Button color="success" onClickCapture={pauseOrResume}>
            Start/Resume
          </Button>
        )}
        {running === false ? (
          <>
            <Button color="danger" onClickCapture={reset}>
              Reset/Saved
            </Button>
          </>
        ) : (
          <>
            <Button color="danger" isDisabled={true} onClickCapture={reset}>
              Reset/Saved
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Counter;
