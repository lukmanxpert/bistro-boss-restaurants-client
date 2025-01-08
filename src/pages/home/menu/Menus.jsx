import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/shared/SectionTitle';
import Menu from '../../../components/shared/Menu';
import Aos from 'aos';
import "aos/dist/aos.css"

const Menus = () => {
    const [popularMenu, setPopularMenus] = useState([])
    useEffect(() => {
        Aos.init({})
    }, [])
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularMenus = data.filter(menu => menu.category === "popular")
                setPopularMenus(popularMenus)

            })
    }, [])
    console.log(popularMenu);
    return (
        <div data-aos="zoom-in" className='w-11/12 mx-auto mt-10'>
            <SectionTitle title={"From Our Menu"} subTitle={"---Check it Out---"}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popularMenu ? popularMenu.map(menu => <Menu key={menu._id} menu={menu}></Menu>) : <div><h1>No Data Found!!</h1></div>
                }
            </div>
            <div className='flex justify-center items-center my-6'>
                <button className="btn btn-outline uppercase">View Full Menu</button>
            </div>
        </div>
    );
};

export default Menus;