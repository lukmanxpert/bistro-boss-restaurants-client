import React from 'react';
import Banner from '../Banner/Banner';
import SectionTitle from '../../../components/shared/SectionTitle';
import Category from '../category/Category';
import Featured from '../featured/Featured';
import About from '../about/About';
import Menu from '../menu/Menus';
import CallUs from '../call/CallUs';
import Testimonials from '../testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionTitle subTitle={"---From 11:00am to 10:00pm---"} title={"ORDER ONLINE"}></SectionTitle>
            <Category></Category>
            <About></About>
            <Menu></Menu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;