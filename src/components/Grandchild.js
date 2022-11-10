import React from 'react';
import { useEffect } from 'react';

export default function Grandchild() {
  useEffect(() => {
    // console.log('grandchild rerender');
  });

  return (
    <div className="card">
      <div className="card-body">Grandchild Component</div>
    </div>
  );
}
