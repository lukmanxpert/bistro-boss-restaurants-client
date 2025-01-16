import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import "./nav.css"
import { FaShoppingCart } from 'react-icons/fa';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const links = <>
        <li><NavLink to={"/home"}>Home</NavLink></li>
        <li><NavLink to={"/our-menu"}>Our Menu</NavLink></li>
        {
            user && <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
        }
        <li><NavLink to={"/our-shop"}>Our Shop</NavLink></li>
        <li><NavLink to={"/carts"} className={`flex md:relative`}><FaShoppingCart /> <span className='badge-secondary rounded-2xl text-xs md:absolute -top-4 -right-4'>+99</span></NavLink></li>
    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Log Out Success")
            })
    }
    return (
        <div className="navbar bg-black bg-opacity-60 text-white fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-slate-900 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={"/home"} className="grid grid-cols-1 font-cinzel font-black text-xl"><h1>Bistro Boss</h1> <h1 className='text-lg'>Restaurant</h1></Link>
            </div>
            <div className='navbar-end gap-4'>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu-horizontal items-center gap-4 px-1">
                        {links}
                    </ul>
                </div>
                <div className="">
                    {user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user.photoURL ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-slate-900 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div> : <Link to={"/login"} className="btn btn-outline text-white mx-4">Login</Link>}
                </div>
            </div>
            <Toaster></Toaster>
        </div >
    );
};

export default Nav;