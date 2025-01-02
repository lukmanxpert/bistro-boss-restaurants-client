import React from 'react';
import Banner from '../Banner/Banner';
import SectionTitle from '../../../components/shared/SectionTitle';
import Category from '../category/Category';

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