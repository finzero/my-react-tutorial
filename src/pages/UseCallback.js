import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

const Display = React.memo(({ name, value, themeDescription }) => {
  console.count(`Display ${name} rerender`);
  return (
    <div className="card">
      <div className="card-body">{value}</div>
      {themeDescription && <div>{themeDescription()}</div>}
    </div>
  );
});

const Button = ({ label, onClick }) => {
  console.count(`button ${label} rerender`);
  return (
    <button className="btn btn-sm btn-primary" onClick={onClick}>
      {label}
    </button>
  );
};

export default function UseCallback() {
  const [theme, setTheme] = useState('light');
  const [counter, setCounter] = useState(0);
  const [toggleName, setToggleName] = useState('Toggle Theme');

  const toggleTheme = () =>
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));

  const addCounter = () => {
    setCounter((counter) => counter + 1);
  };

  useEffect(() => {
    // setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }, []);

  const themeDescription = useCallback(() => {
    console.log('theme description is rerendered');
    let i = 1000000000;
    while (i !== 0) i--;
    return theme === 'light' ? 'theme is light' : 'theme is dark';
  }, [theme]);

  /* render 1 : call function => light > cache function () => {
    console.log('theme description is rerendered');
    let i = 1000000000;
    while (i !== 0) i--;
    return theme === 'light' ? 'theme is light' : 'theme is dark';  
  } */
  // render 2 : theme = previous theme > return function from cache

  return (
    <div>
      <Display name="Theme" value={theme} themeDescription={themeDescription} />
      <Button label={toggleName} onClick={toggleTheme} />
      <Display name="Counter" value={counter} />
      <Button label={'Add Counter'} onClick={addCounter} />
    </div>
  );
}
