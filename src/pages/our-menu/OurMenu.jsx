import React, { useEffect, useState } from 'react';
import OurMenuBanner from './OurMenuBanner';
import SectionTitle from '../../components/shared/SectionTitle'
import OurMenuTitle from '../../components/shared/OurMenuTitle';
import Menu from '../../components/shared/Menu'
import axios from 'axios';
const OurMenu = () => {
    const [popularMenus, setPopularMenus] = useState([])
    const [dessertMenus, setDessertMenu] = useState([])
    const [pizzaMenus, setPizzaMenu] = useState([])
    const [saladMenus, setSaladMenu] = useState([])
    const [soupMenus, setSoupMenu] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:9000/menus`).then(response => {
            const popularMenus = response.data.filter((menu) => menu.category === "popular");
            const dessertMenus = response.data.filter(menu => menu.category === "dessert")
            const pizzaMenus = response.data.filter(menu => menu.category === "pizza")
            const saladMenus = response.data.filter(menu => menu.category === "salad")
            const soupMenus = response.data.filter(menu => menu.category === "soup")
            setPopularMenus(popularMenus)
            setDessertMenu(dessertMenus)
            setPizzaMenu(pizzaMenus)
            setSaladMenu(saladMenus)
            setSoupMenu(soupMenus)
        })
    }, [])

    return (
        <div>
            <OurMenuBanner></OurMenuBanner>
            <SectionTitle title={"Today's Offer"} subTitle={"---Don't Miss---"}></SectionTitle>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 w-11/12 mx-auto'>
                {
                    popularMenus.map((menu, idx) => <Menu key={idx} menu={menu}></Menu>)
                }
            </div>
            <div className='flex justify-center items-center my-4'>
                <button className='uppercase border-b-4 rounded-b-2xl p-4 border-[#1F2937] font-bold'>order your favourite food</button>
            </div>
            <OurMenuTitle title={"dessert"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} section={"dessert-section"}></OurMenuTitle>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 w-11/12 mx-auto'>
                {
                    dessertMenus.map((menu, idx) => <Menu key={idx} menu={menu}></Menu>)
                }
            </div>
            <div className='flex justify-center items-center my-4'>
                <button className='uppercase border-b-4 rounded-b-2xl p-4 border-[#1F2937] font-bold'>order your favourite food</button>
            </div>
            <OurMenuTitle title={"pizza"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} section={"pizza-section"}></OurMenuTitle>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 w-11/12 mx-auto'>
                {
                    pizzaMenus.map((menu, idx) => <Menu key={idx} menu={menu}></Menu>)
                }
            </div>
            <div className='flex justify-center items-center my-4'>
                <button className='uppercase border-b-4 rounded-b-2xl p-4 border-[#1F2937] font-bold'>order your favourite food</button>
            </div>
            <OurMenuTitle title={"salads"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} section={"salad-section"}></OurMenuTitle>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 w-11/12 mx-auto'>
                {
                    saladMenus.map((menu, idx) => <Menu key={idx} menu={menu}></Menu>)
                }
            </div>
            <div className='flex justify-center items-center my-4'>
                <button className='uppercase border-b-4 rounded-b-2xl p-4 border-[#1F2937] font-bold'>order your favourite food</button>
            </div>
            <OurMenuTitle title={"soups"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} section={"soups-section"}></OurMenuTitle>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 w-11/12 mx-auto'>
                {
                    soupMenus.map((menu, idx) => <Menu key={idx} menu={menu}></Menu>)
                }
            </div>
            <div className='flex justify-center items-center my-4'>
                <button className='uppercase border-b-4 rounded-b-2xl p-4 border-[#1F2937] font-bold'>order your favourite food</button>
            </div>
        </div>
    );
};

export default OurMenu;