import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='max-w-6xl mx-auto '>
            <Toaster />
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-300px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;