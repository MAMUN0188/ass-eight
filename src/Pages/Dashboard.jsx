import React, { useEffect, useState } from 'react';
import HeadingTwo from '../Components/HeadingTwo';
import { NavLink } from 'react-router';
import CartCompo from '../Components/CartCompo';
import WishCompo from '../Components/WishCompo';
import { getAllFavorites, removeFav } from '../Utils';

const Dashboard = () => {
    const [isActive, setIsActive] = useState(true)
    const [gadgets, setGadgets] = useState([])

    useEffect(()=>{
        const favorites = getAllFavorites()
        setGadgets(favorites)
    }, [])
    
    const HandleCartWish = (gadget) => {
        if(gadget === 'cart'){
            setIsActive(true)
        }
        else{
            setIsActive(false)
        }
    }

    const HandleRemove = (id) =>{
        removeFav(id)
        const favorites = getAllFavorites()
        const remaining = favorites.filter(fav => fav.id !==id)
        setGadgets(remaining)
    }
   
    return (
        <div className=''>
            <HeadingTwo title='Dashboard' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></HeadingTwo>
            <div className='bg-[#9538E2] pb-3'>
                <div className='flex w-44 mx-auto gap-4 bg-[#9538E2] pt-4'>
                    <NavLink onClick={()=>HandleCartWish('cart')} className='btn bg-[#9538E2] rounded-2xl'>Cart</NavLink>
                    <NavLink onClick={()=>HandleCartWish('wishlist')} className='btn rounded-2xl bg-[#9538E2]'>Wishlist</NavLink>
                </div>
            </div>
            {isActive ? <CartCompo HandleRemove={HandleRemove} gadgets={gadgets}></CartCompo> : <WishCompo></WishCompo>}
        </div>
    );
};

export default Dashboard;