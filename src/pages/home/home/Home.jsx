import React from 'react';
import Banner from '../../../components/Banner/Banner';
import Category from '../../../components/category/Category';
import SectionTitle from '../../../components/shared/SectionTitle';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionTitle subTitle={"---From 11:00am to 10:00pm---"} title={"ORDER ONLINE"}></SectionTitle>
            <Category></Category>
        </div>
    );
};

export default Home;