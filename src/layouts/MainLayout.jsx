import React from 'react';
import Nav from '../pages/home/Nav/Nav'
import Footer from '../pages/home/Footer/Footer'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;