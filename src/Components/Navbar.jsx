import React from 'react';
import { NavLink, useLocation } from 'react-router';

const Navbar = () => {  
    const {pathname} = useLocation()

    return (
        <div className={`${pathname === '/' ? 'text-white navbar bg-[#9538E2] rounded-t-lg pt-4' : 'text-black navbar bg-white rounded-t-lg pt-4'}`}>
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <NavLink to='/' className={`${pathname === '/' ? 'bg-[#9538E2] text-2xl font-black' : 'bg-white text-2xl font-black'}`}>Gadget Heaven</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-4 font-semibold text-xl px-1">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/statics'>Statics</NavLink>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;