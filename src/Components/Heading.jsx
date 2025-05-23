import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className='text-center bg-[#9538E2] text-white py-10 pb-[150px] rounded-b-xl'>
            <h1 className='text-4xl w-[700px] mx-auto'>{title}</h1>
            <p className='text-xl w-[650px] mx-auto font-thin mt-6'>{subtitle}</p>
            <button className='btn rounded-full mt-6 '>Shop Now</button>
        </div>
    );
};

export default Heading;