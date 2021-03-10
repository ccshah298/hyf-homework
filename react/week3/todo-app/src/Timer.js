import React, { useEffect, useState } from "react";

function Timer() {
    const [timer, setTimer] = useState(0);
  
    useEffect(() => {
      const setTiming = setTimeout(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(setTiming);
    });
  
    return(
        <div>
        <h2>
            To do list
        </h2>
        <p>
            You have spent {timer} second on this page
        </p>

        </div>
    )
};
export default Timer;