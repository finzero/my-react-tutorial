import React, { useState, createContext } from 'react';
import Parent from '../components/Parent';
import RandomComp from '../components/RandomComp';

export const ThemeContext = createContext('');

function UseContext() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <strong>Use Context</strong>
      <hr />
      <ol>
        <li>
          I Have To prop theme that have value: <b>{theme}</b>
        </li>
        <li>I want grandchild component render the theme props</li>
      </ol>
      <ThemeContext.Provider value={theme}>
        <Parent />
        <RandomComp />
      </ThemeContext.Provider>
    </div>
  );
}

export default UseContext;
