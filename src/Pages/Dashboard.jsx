import React, { useEffect, useState } from 'react';
import HeadingTwo from '../Components/HeadingTwo';
import { NavLink } from 'react-router';
import CartCompo from '../Components/CartCompo';
import WishCompo from '../Components/WishCompo';
import { getAllFavorites, removeFav } from '../Utils';
import { getAllWish, handleRemove } from '../Utils/wish';
import './dashboard.css'

const Dashboard = () => {
    const [isActive, setIsActive] = useState(true)
    const [gadgets, setGadgets] = useState([])
    const [wishData, setWishData] = useState([])

    useEffect(()=>{
        const favorites = getAllFavorites()
        setGadgets(favorites)
    }, [])
    useEffect(()=>{
        const wish = getAllWish()
        setWishData(wish)
    }, [])
    
    const HandleCartWish = (gadget) => {
        if(gadget === 'cart'){
            setIsActive(true)
        }
        else{
            setIsActive(false)
        }
    }

    const HandleCartRemove = (id) =>{
        removeFav(id)
        const favorites = getAllFavorites()
        const remaining = favorites.filter(fav => fav.id !==id)
        setGadgets(remaining)
    }
    const HandleWishRemove = (id) =>{
        handleRemove(id)
        const wish = getAllWish()
        const remaining = wish.filter(w => w.id !== id)
        setWishData(remaining)
    }
   
    return (
        <div className=''>
            <HeadingTwo title='Dashboard' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></HeadingTwo>
            <div className='bg-[#9538E2] pb-3'>
                <div className='flex w-44 mx-auto gap-4 bg-[#9538E2] pt-4'>
                    <NavLink onClick={()=>HandleCartWish('cart')} className={isActive ? 'activ' : 'non-activ'}>Cart</NavLink>
                    <NavLink onClick={()=>HandleCartWish('wishlist')} className={isActive ? 'non-activ' : 'activ'}>Wishlist</NavLink>
                </div>
            </div>
                {isActive ? <CartCompo HandleCartRemove={HandleCartRemove} gadgets={gadgets}></CartCompo> : <WishCompo wishData={wishData} HandleWishRemove={HandleWishRemove}></WishCompo>}
        </div>
    );
};

export default Dashboard;