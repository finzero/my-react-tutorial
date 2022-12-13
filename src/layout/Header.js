import React from 'react';
import img from '../assets/logo192.png';

export default function Header() {
  return (
    <header className="header">
      <img style={{ width: '50px' }} src={img} alt="" />
      <div>ReactJS Tutorial</div>
    </header>
  );
}
