import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />

      <div className='content'>
        <Outlet />
      </div>
      
      <Footer />
    </>
  )
}

export default Layout;