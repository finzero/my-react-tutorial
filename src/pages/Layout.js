import React from 'react';
import '../css/layout.scss';

const LayoutTwitter = () => {
  return (
    <div className="layout-container">
      <div className="fixed-container">Fixed COntainer</div>
      <div className="content-right">
        <div className="absolute-container">Absolute Container</div>
        <div className="absolute-container-2">Absolute Container-2</div>
      </div>
    </div>
  );
};

export default LayoutTwitter;
