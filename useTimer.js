import  { useState, useEffect } from 'react';

const useTimer = () => {
  const [timer, setTimer] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);  

  
  const startTimer = () => {
    setIsRunning(true);
  };

   
  const stopTimer = () => {
    setIsRunning(false);
  };

   
  const resetTimer = () => {
    setIsRunning(false);
    setTimer(0);
  };

  useEffect(() => {
    let intervalId;

     
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);  
      }, 1000);  
    } else {
       
      clearInterval(intervalId);
    } 
    return () => clearInterval(intervalId);
  }, [isRunning]); 

  
  return {
    timer,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer
  };
};

export default useTimer;
