import React from 'react';

const OurMenuTitle = ({ title, subtitle, section }) => {
    return (
        <div className={`${section} my-8`}>
            <div className='px-10 py-32 md:p-40'>
                <div className='bg-[#000000] bg-opacity-40 p-10 text-center text-white'>
                    <h1 className='font-cinzel font-bold text-6xl uppercase'>{title}</h1>
                    <p className='capitalize font-cinzel text-xl py-2'>{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default OurMenuTitle;