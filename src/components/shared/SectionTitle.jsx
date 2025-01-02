import React from 'react';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className='max-w-lg my-8 mx-auto text-center'>
            <p className='text-[#D99904] italic text-lg my-2'>{subTitle}</p>
            <hr className='border-t-4' />
            <p className='my-2 uppercase text-4xl'>{title}</p>
        </div>
    );
};

export default SectionTitle;