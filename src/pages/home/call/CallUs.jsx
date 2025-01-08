import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

const CallUs = () => {
    useEffect(()=>{
        Aos.init()
    }, [])
    return (
        <div data-aos="fade-up" className='flex justify-center items-center w-11/12 mx-auto bg-black text-white p-20'>
            <h1 className='text-3xl'>Call Us: +8801646864286</h1>
        </div>
    );
};

export default CallUs;