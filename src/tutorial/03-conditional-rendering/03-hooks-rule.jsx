import { useState, useEffect } from 'react';

const Example = () => {
  const [condition, setCondition] = useState(true);
  // if (condition) {
  //   // won't work
  //   // don't place hook inside the condition
  //   const [state, setState] = useState(false);
  // }

  if (condition) {
    return <h2>Hello There</h2>;
  }
  // this will also fail
  // if you have multiple returns, don't place useEffect after that
  useEffect(() => {
    console.log('hello there');
  }, []);
  return <h2>example</h2>;
};

export default Example;
