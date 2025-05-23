import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Heading from './Heading';
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { addFavorites, getAllFavorites } from '../Utils';

const Details = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [gadgets, setGadgets] = useState({})
    const [isDisable, setIsDisable] = useState(false)

    useEffect(() => {
        const finded = [...data].find(dt => dt.id === parseInt(id))
        setGadgets(finded)
        const favorites = getAllFavorites()
        const isExist = favorites.find(fav => fav.id === finded.id)
        if(isExist){
            setIsDisable(true)
        }
    }, [id, data])

    const { name, image, price, description, rating } = gadgets

    const HandleCart = (gadgets) => {
        addFavorites(gadgets)
        setIsDisable(true)
    }

    return (
        <div className='mb-80 '>
            <Heading title='Product Details' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Heading>
            <div className='flex w-[950px] bg-white gap-5 rounded-lg p-4 lg:absolute bottom-[-100px] left-[200px]'>
                <div>
                    <img className='h-[350px] rounded-lg' src={image} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>{name}</h1>
                    <h1 className='text-xl font-semibold my-4'>Price: {price}</h1>
                    <h1 className='font-semibold text-lg'>{description}</h1>
                    <h1 className='font-bold text-xl mt-3'>Specification:</h1>
                    <li className='ml-4'>6.7-inch LTPO OLED, 120Hz</li>
                    <li className='ml-4'>Google Tensor G3</li>
                    <li className='ml-4'>12GB</li>
                    <h1 className='font-bold text-xl mt-3'>Rating:</h1>
                    <h1 className='border rounded-2xl w-10 text-center border-[#9538E2] text-lg mt-1'>{rating}</h1>

                    <div className='flex gap-4 items-center'>
                        <button onClick={() => HandleCart(gadgets)} disabled={isDisable} className='flex items-center gap-2 bg-[#9538E2] p-2 rounded-md mt-3 text-white'>Add to Cart <TiShoppingCart disabled={isDisable} className='text-2xl' /></button>
                        <button className='text-2xl text-[#9538E2] mt-3 p-2 rounded-full border-[#9538E2] border'><FaRegHeart /></button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Details;