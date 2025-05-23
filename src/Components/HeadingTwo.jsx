import React from 'react';

const HeadingTwo = ({title, subtitle}) => {
    return (
        <div className='text-white text-center bg-[#9538E2] mt-4 py-3'>
            <h1 className='font-bold text-3xl pb-2'>{title}</h1>
            <h1 className='font-thin max-w-4xl mx-auto text-xl'>{subtitle}</h1>
            
        </div>
    );
};

export default HeadingTwo;