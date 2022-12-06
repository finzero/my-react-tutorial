import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import rightCarret from '../assets/right-caret.png';

export default function Sidebar() {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [menu, setMenu] = useState([
    {
      link: 'login',
      text: 'Login',
      isActive: true,
      isProtected: false,
    },
    {
      link: 'use-reducer',
      text: 'Use Reducer',
      isActive: false,
      isProtected: true,
    },
    {
      link: 'use-context',
      text: 'Use Context',
      isActive: false,
      isProtected: true,
    },
    {
      link: 'use-memo',
      text: 'Use Memo',
      isActive: false,
      isProtected: true,
    },
    {
      link: 'use-callback',
      text: 'Use Callback',
      isActive: false,
      isProtected: true,
    },
    {
      link: 'debounce',
      text: 'Debounce',
      isActive: false,
      isProtected: true,
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
      {menu.map(
        (m) =>
          (!m.isProtected || isAuthenticated) && (
            <Link
              key={m.link}
              className={'menu-item' + (m.isActive ? ' active' : '')}
              onClick={() => setActiveMenu(m)}
              to={m.link}
            >
              {m.isActive && <img src={rightCarret} />} {m.text}
            </Link>
          )
      )}
    </div>
  );
}
