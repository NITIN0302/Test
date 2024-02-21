import React from 'react'
import {Outlet} from 'react-router-dom';
import Header from './component/Header/Header.jsx';
import Footer from './component/Footer/Footer.jsx';

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout