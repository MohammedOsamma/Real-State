// CountUp.js
import React, { useState, useEffect } from "react";

const CountUp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default CountUp;
