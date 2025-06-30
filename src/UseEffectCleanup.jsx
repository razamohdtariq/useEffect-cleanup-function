import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Interval Cleared!");
    };
  }, []);

  return (
    <>
      <h1>This is my youtube subscribers : {count}</h1>
    </>
  );
}

export default Timer;
