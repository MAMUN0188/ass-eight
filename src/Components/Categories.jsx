import React from 'react';
import { NavLink, useLocation } from 'react-router';

const Categories = ({ data }) => {
    const { pathname } = useLocation()
   
    return (
        <div className='w-1/5 mt-3'>
            <NavLink className={`${pathname === '/' ? 'bg-[#9538E2] rounded-xl p-2 w-28 ' : ''}`}>All Products</NavLink>
            {
                data.map(dt => <NavLink to={`/gadget/${dt.category}`} className={({ isActive }) => isActive ? 'flex mt-3 bg-[#9538E2] rounded-xl p-2 w-28' : 'flex mt-3'}>{dt.category}</NavLink>)
            }
        </div>
    );
};

export default Categories;