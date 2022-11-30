import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

const Display = React.memo(({ name, value }) => {
  console.count(`Display ${name} rerender`);
  return (
    <div className="card">
      <div className="card-body">{JSON.stringify(value)}</div>
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

export default function UseMemo() {
  const [theme, setTheme] = useState('light');
  const [counter, setCounter] = useState(0);
  const inputNama = useRef('');

  const [nama, setNama] = useState('');

  useEffect(() => {
    console.log('use effect running');
  }, [counter]);

  const toggleTheme = () =>
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));

  const addCounter = () => {
    setCounter((counter) => counter + 1);
  };

  const name = {
    firstName: 'anwar',
    lastname: 'joko',
  };

  const updatedName = useMemo(() => {
    name.firstName = nama;
    return name;
  }, [nama]);

  const themeDescription = useMemo(() => {
    let i = 1000000000;
    while (i !== 0) i--;
    return theme === 'light' ? 'theme is light' : 'theme is dark';
  }, [theme]);

  // render 1 : call function => light > theme is light
  // render 2 : theme = 'light > theme is light
  return (
    <div>
      <Display name="Theme" value={themeDescription} />
      <Button label={'Toggle Theme'} onClick={toggleTheme} />
      <Display name="Counter" value={counter} />
      <Button label={'Add Counter'} onClick={addCounter} />
      <input
        type="text"
        name="nama"
        id=""
        onChange={(e) => setNama(e.target.value)}
      />
      <Display name="Nama" value={updatedName} />
    </div>
  );
}
