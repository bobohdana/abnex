import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = () => {
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