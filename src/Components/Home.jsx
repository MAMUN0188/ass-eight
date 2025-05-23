import React from 'react';
import Heading from './Heading';
import Banner from './Banner';
import Categories from './Categories';
import { Outlet, useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()

    return (
        <div>
            <Heading title='Upgrade Your Tech Accessorize with Gadget Heaven Accessories' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Heading>
            <Banner></Banner>
            <div className=''>
                <h1 className='text-3xl font-semibold text-center mb-6'>Explore Cutting-Edge Gadgets</h1>
                <div className='flex'>
                    <Categories data={data}></Categories>
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;