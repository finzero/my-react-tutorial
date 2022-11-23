import React from 'react';
import { useEffect, useContext } from 'react';
import { ThemeContext } from '../pages/UseContext';

export default function Grandchild() {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    // console.log('grandchild rerender');
  });

  return (
    <div className="card">
      <div className="card-body">Grandchild Component: {theme} </div>
    </div>
  );
}
