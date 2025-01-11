import React from 'react';
import Nav from '../pages/home/Nav/Nav'
import Footer from '../pages/home/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
    const location = useLocation()
    const pathname = location.pathname;
    const disabledNavFooter = pathname.includes("login") || pathname.includes("register")

    return (
        <div className=''>
            {disabledNavFooter || <Nav></Nav>}
            <Outlet></Outlet>
            {disabledNavFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;