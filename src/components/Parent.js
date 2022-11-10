import React from 'react';
import Child from './Child';
import { useEffect } from 'react';

export default function Parent() {
  useEffect(() => {
    // console.log('parent rerender');
  });

  return (
    <div className="card">
      <div className="card-body">
        Parent Component
        <Child />
      </div>
    </div>
  );
}
