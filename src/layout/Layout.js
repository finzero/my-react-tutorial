import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar'

export default function Layout({children}) {

  const theme = 'light';

  return <div className='layout'>
    <Header />
    <div className="bottom-layout">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  </div>;
}
