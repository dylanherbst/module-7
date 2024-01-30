import { useState, useEffect } from 'react';

function StatefulCounter () {
    const [counter, setCounter] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);


    function hanldeIncClick () {
       setCounter(counter + 1) 
       setIsTimerActive(true);
    }


    function hanldeDecClick () {
      setCounter(counter - 1) 
      setIsTimerActive(true);
   }


   useEffect(() => {
    let intervalId;

    if (isTimerActive) {

    intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
  }

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if(intervalId) clearInterval(intervalId);
}; 
}, [isTimerActive]); 





    return (
      <div>

        <button onClick={hanldeDecClick}> - </button>
        <button onClick={hanldeIncClick}> + </button>
        <h2>COUNT: {counter}</h2>
        <h2>Timer: {seconds}</h2>
      </div>


    )
}

export default StatefulCounter 


