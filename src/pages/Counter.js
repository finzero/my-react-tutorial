import { useState } from 'react';

const Counter = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);

  const loadGreeting = () => {
    setTimeout(() => {
      return 'Hallo Fazrin';
    }, 1000);
  };

  return (
    <div>
      <h3>Counter</h3>
      <button onClick={loadGreeting}>Load Greeting</button>
      <div style={{ display: 'flex' }}>
        <button
          role={'button'}
          className="btn btn-sm btn-info"
          style={{ width: '40px', height: '40px' }}
          onClick={() => setCounter((counter) => counter - 1)}
        >
          -
        </button>
        <div title="counter" style={{ padding: '10px' }}>
          {counter}
        </div>
        <button
          className="btn btn-sm btn-info"
          style={{ width: '40px', height: '40px' }}
          onClick={() => setCounter((counter) => counter + 1)}
        >
          +
        </button>
      </div>
      <button className="btn btn-sm btn-warning" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
