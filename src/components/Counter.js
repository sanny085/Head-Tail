import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((preCount) => (preCount += 1));
  };
  function handleDecrease() {
    setCount((preCount) => (preCount -= 1));
  }
  return (
    <>
      <button onClick={handleDecrease}>-</button>
      {count}
      <button onClick={handleIncrease}>+</button>
    </>
  );
};

export default Counter;
