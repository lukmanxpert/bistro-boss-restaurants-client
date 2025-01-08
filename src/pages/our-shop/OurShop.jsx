import React, { useEffect, useState } from 'react';
import OurShopBanner from './OurShopBanner';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';
import axios from 'axios';

const OurShop = () => {
    const [dessertMenus, setDessertMenu] = useState([])
    const [pizzaMenus, setPizzaMenu] = useState([])
    const [saladMenus, setSaladMenu] = useState([])
    const [soupMenus, setSoupMenu] = useState([])
    const [drinksMenus, setDrinksMenu] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:9000/menus`).then(response => {
            const dessertMenus = response.data.filter(menu => menu.category === "dessert")
            const pizzaMenus = response.data.filter(menu => menu.category === "pizza")
            const saladMenus = response.data.filter(menu => menu.category === "salad")
            const soupMenus = response.data.filter(menu => menu.category === "soup")
            const drinksMenus = response.data.filter(menu => menu.category === "drinks")
            setDessertMenu(dessertMenus)
            setPizzaMenu(pizzaMenus)
            setSaladMenu(saladMenus)
            setSoupMenu(soupMenus)
            setDrinksMenu(drinksMenus)
        })
    }, [])

    return (
        <div>
            <OurShopBanner></OurShopBanner>
            <div className='w-11/12 mx-auto my-8'>
                <Tabs>
                    <TabList className={`flex justify-center items-center my-4 font-bold`}>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                            {
                                saladMenus ? saladMenus.map((menu, idx) => <Card key={idx} menu={menu}></Card>) : <h1>No Items Found!</h1>
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                            {
                                pizzaMenus ? pizzaMenus.map((menu, idx) => <Card key={idx} menu={menu}></Card>) : <h1>No Items Found!</h1>
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                            {
                                soupMenus ? soupMenus.map((menu, idx) => <Card key={idx} menu={menu}></Card>) : <h1>No Items Found!</h1>
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                            {
                                dessertMenus ? dessertMenus.map((menu, idx) => <Card key={idx} menu={menu}></Card>) : <h1>No Items Found!</h1>
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                            {
                                drinksMenus ? drinksMenus.map((menu, idx) => <Card key={idx} menu={menu}></Card>) : <h1>No Items Found!</h1>
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;