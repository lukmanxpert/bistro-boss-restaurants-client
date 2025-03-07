import React, { useEffect } from 'react';
import './about.css'
import Aos from 'aos';
import "aos/dist/aos.css"
const About = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div data-aos="fade-up" className='w-11/12 mt-10 mx-auto about-section'>
            <div className='p-20'>
                <div className='bg-white p-10 text-center'>
                    <h1 className='font-cinzel text-3xl uppercase'>Bistro Boss</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default About;