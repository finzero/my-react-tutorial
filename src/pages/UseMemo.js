import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

const Display = ({ name, value }) => {
  console.count(`Display ${name} rerender`);
  return (
    <div className="card">
      <div className="card-body">{value}</div>
    </div>
  );
};

const Button = ({ label, onClick }) => {
  console.count(`button ${label} rerender`);
  return (
    <button className="btn btn-sm btn-primary" onClick={onClick}>
      {label}
    </button>
  );
};

export default function UseMemo() {
  const [theme, setTheme] = useState('light');
  const [counter, setCounter] = useState(0);

  const toggleTheme = () =>
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));

  const addCounter = () => {
    setCounter((counter) => counter + 1);
  };

  const themeDescription = () => {
    let i = 1000000000;
    while (i !== 0) i--;
    return theme === 'light' ? 'theme is dark' : 'theme is light';
  };

  return (
    <div>
      <Display name="Theme" value={themeDescription()} />
      <Button label={'Toggle Theme'} onClick={toggleTheme} />
      <Display name="Counter" value={counter} />
      <Button label={'Add Counter'} onClick={addCounter} />
    </div>
  );
}