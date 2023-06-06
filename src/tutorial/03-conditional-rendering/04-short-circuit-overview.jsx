import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('Susan');

  const codeExample = text || 'hello world';

  return (
    <div>
      {/* The && operator (logical AND) returns the first operand if it is "falsy", or the second operand if the first operand is "truthy". */}
      {/* The || operator (logical OR) returns the first operand if it is "truthy", or the second operand if the first operand is "falsy". */}
      <h4>Falsy OR: {text || 'hello world'}</h4>
      <h4>Falsy AND: {text && 'hello world'}</h4>
      <h4>Truthy OR: {name || 'hello world'}</h4>
      <h4>Truthy AND: {name && 'hello world'}</h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;
