import React from 'react';
import { FaAd, FaAddressBook, FaBook, FaCalendar, FaCartArrowDown, FaHistory, FaHome, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import "./dashboard.css"
import { ImSpoonKnife } from 'react-icons/im';
import { GiSettingsKnobs } from 'react-icons/gi';
const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='max-w-72 min-h-screen w-full bg-[#D1A054] py-2 px-4'>
                <div className='font-cinzel mb-4 flex flex-col font-bold'>
                    <h1 className='text-3xl'>Bistro Boss</h1>
                    <h3 className='text-xl'>Restaurant</h3>
                </div>
                <ul className='dashboard-links flex flex-col gap-4 font-cinzel font-bold'>
                    <li className='text-white'> <NavLink to="/dashboard/user-home" className="flex items-center gap-2"> <FaHome></FaHome>User Home</NavLink></li>
                    <li className='text-white'> <NavLink to="/dashboard/reservation" className="flex items-center gap-2"> <FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li className='text-white'> <NavLink to="/dashboard/payment-history" className="flex items-center gap-2"> <FaHistory></FaHistory>Payment History</NavLink></li>
                    <li className='text-white'> <NavLink to="/dashboard/my-carts" className="flex items-center gap-2"> <FaCartArrowDown></FaCartArrowDown>My Carts</NavLink></li>
                    <li className='text-white'> <NavLink to="/dashboard/add-review" className="flex items-center gap-2"> <FaAd></FaAd>Add Review</NavLink></li>
                    <li className='text-white'> <NavLink to="/dashboard/my-bookings" className="flex items-center gap-2"> <FaBook></FaBook>My Bookings</NavLink></li>
                </ul>
                <div className='border-2 border-white my-6'>

                </div>
                <ul className='dashboard-links flex flex-col gap-4 font-cinzel font-bold'>
                    <li className='text-white'> <NavLink to="/home" className="flex items-center gap-2"> <FaHome></FaHome>Home</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 py-2 px-4 bg-slate-100'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;