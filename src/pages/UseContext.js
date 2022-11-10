import React, { useState } from 'react';
import Parent from '../components/Parent';

function UseContext() {
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <strong>Use Context</strong>
      <hr />
      <ol>
        <li>
          I Have To prop theme that have value: <b>{theme}</b>
        </li>
        <li>I want grandchild component render the theme props</li>
      </ol>
      <Parent />
    </div>
  );
}

export default UseContext;
