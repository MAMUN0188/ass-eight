import React from 'react';
import { NavLink } from 'react-router';

const Card = ({gadget}) => {
    const {name, id, image, price} = gadget
    return (
        <div className='my-3'>
            <img className='h-[155px] w-[270px] rounded-lg' src={image} alt="" />
            <h1 className='text-2xl font-bold'>{name}</h1>
            <h1 className='font-thin text-lg'>Price: {price}</h1>
            <NavLink to={`/details/${id}`} className='rounded-lg border-[#9538E2] border-2 p-1'>View Details</NavLink>
        </div>
    );
};

export default Card;