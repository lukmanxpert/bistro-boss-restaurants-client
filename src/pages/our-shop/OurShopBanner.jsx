import React from 'react';
import "./OurShop.css"
const OurShopBanner = () => {
    return (
        <div className='our-shop-section'>
            <div className='px-10 py-32 md:p-40'>
                <div className='bg-[#000000] bg-opacity-40 p-10 text-center text-white'>
                    <h1 className='font-cinzel font-bold text-6xl uppercase'>Our Shop</h1>
                    <p className='capitalize font-cinzel text-xl py-2'>Would you like to try a dish?</p>
                </div>
            </div>
        </div>
    );
};

export default OurShopBanner;