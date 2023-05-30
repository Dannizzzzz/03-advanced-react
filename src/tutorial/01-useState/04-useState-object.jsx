import { useState } from 'react';

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: 'Peter',
    age: '23',
    hobby: 'read books',
  });
  const handleChange = () => {
    // setPeople({
    //   name: 'John',
    //   age: '24',
    //   hobby: 'scream at computer',
    // });
    setPeople({ ...people, name: 'Susan' });
  };
  return (
    <>
      <h2>{people.name}</h2>
      <h2>{people.age}</h2>
      <h3>Enjoys: {people.hobby}</h3>
      <button type="button" onClick={handleChange} className="btn">
        show John
      </button>
    </>
  );
};

export default UseStateObject;
