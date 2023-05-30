import { data } from '../../data';
import React from 'react';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeOne = (id) => {
    setPeople(people.filter((p) => p.id !== id));
  };
  const removeAll = () => {
    setPeople([]);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button type="button" onClick={() => removeOne(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: '2rem' }}
        className="btn"
        onClick={removeAll}
      >
        remove all
      </button>
    </>
  );
};

export default UseStateArray;
