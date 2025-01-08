import React from 'react';
import SectionTitle from '../../../components/shared/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className='my-8 py-4 px-10 featured-bg'>
            <SectionTitle title={"From Our Menu"} subTitle={"---Check it out---"}></SectionTitle>
            <div className='flex flex-col md:flex-row justify-center items-center px-10 gap-6'>
                <img className='w-[550px]' src={featuredImg} alt="" />
                <div>
                    <p>Aug 20, 2027</p>
                    <p>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline my-4 text-white">Default</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;