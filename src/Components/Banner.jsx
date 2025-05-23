import React from 'react';
import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='mb-56'>
            <img className='w-[800px] h-[300px] lg:bottom-[-30px] lg:left-[260px] rounded-2xl bg-white/30 backdrop-blur-xl lg:absolute  z-50 p-3' src={banner} alt="" />
        </div>
    );
};

export default Banner;