import React from 'react';
import { RxCross2 } from "react-icons/rx";

const Cart = ({ gad, HandleRemove }) => {
    const { name, image, price, rating, id, description } = gad
    return (
        <div className='border p-3 rounded-lg'>
            <div className='flex items-center'>
                <div className='mr-10'>
                    <img className='w-48 h-20 rounded-lg' src={image} alt="" />
                </div>
                <div className='mr-10'>
                    <h1 className='font-bold text-xl'>{name}</h1>
                    <h1 className='font-thin text-lg'>{description}</h1>
                    <h1 className='font-bold text-xl'>Price:{price}</h1>
                </div>
                <button onClick={()=>HandleRemove(id)} className='font-bold text-2xl text-red-700 border-red-700 border p-1 rounded-full'><RxCross2 /></button>
            </div>
        </div>
    );
};

export default Cart;