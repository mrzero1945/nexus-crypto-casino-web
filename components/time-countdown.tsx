import React, { useEffect, useState } from "react";

interface MainProps {
  setTheTime: (values: number[]) => void;
}

const CountDownTimer: React.FC<MainProps> = ({ setTheTime }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = time.getUTCHours();
  const minutes = time.getUTCMinutes();
  const seconds = time.getUTCSeconds();
  const times = [];
  times.push(hours);
  times.push(minutes);
  times.push(seconds);
  setTheTime(times);

  // The corrected return type should be 'ReactNode'
  return (
    <div>

    </div>
    // Code to render the timer
  );
};

export { CountDownTimer };