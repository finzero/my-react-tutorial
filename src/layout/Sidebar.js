import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rightCarret from '../assets/right-caret.png';

export default function Sidebar() {
  const location = useLocation();

  const [menu, setMenu] = useState([
    {
      link: 'login',
      text: 'Login',
      isActive: true,
    },
    {
      link: 'use-reducer',
      text: 'Use Reducer',
      isActive: false,
    },
    {
      link: 'use-context',
      text: 'Use Context',
      isActive: false,
    },
    {
      link: 'use-memo',
      text: 'Use Memo',
      isActive: false,
    },
    {
      link: 'use-callback',
      text: 'Use Callback',
      isActive: false,
    },
    {
      link: 'debounce',
      text: 'Debounce',
      isActive: false,
    },
  ]);

  const setActiveMenu = (propMenu) => {
    const newMenu = menu.map((m) => ({
      ...m,
      isActive: propMenu.link === m.link,
    }));
    setMenu(newMenu);
  };

  useEffect(() => {
    const activeMenu = menu.find((m) => location.pathname.indexOf(m.link) >= 0);
    if (activeMenu) {
      setActiveMenu(activeMenu);
    }
  }, []);

  return (
    <div className="sidebar">
      {menu.map((m) => (
        <Link
          key={m.link}
          className={'menu-item' + (m.isActive ? ' active' : '')}
          onClick={() => setActiveMenu(m)}
          to={m.link}
        >
          {m.isActive && <img src={rightCarret} />} {m.text}
        </Link>
      ))}
    </div>
  );
}
