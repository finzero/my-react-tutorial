import React from 'react';
import Grandchild from './Grandchild';
import { useEffect } from 'react';

export default function Child() {
  useEffect(() => {
    // console.log('child rerender');
  });

  return (
    <div className="card">
      <div className="card-body">
        Child Component
        <Grandchild />
      </div>
    </div>
  );
}
