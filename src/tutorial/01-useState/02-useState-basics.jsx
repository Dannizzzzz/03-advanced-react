import { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState('hello')[0];
  // const func = useState('hello')[1];
  // console.log(value);
  // console.log(func);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // setCount(10); // set to a new value
    setCount(count + 1);
  };
  return (
    <>
      <h2>You clicked {count} times</h2>
      <button type="button" onClick={handleClick} className="btn">
        click me
      </button>
    </>
  );
};

export default UseStateBasics;
