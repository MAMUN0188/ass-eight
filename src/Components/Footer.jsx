import React from 'react';

const Footer = () => {
    return (
        <div className='mt-8'>
            <div className='text-center bg-[#dbdbdb] border-b-2 pt-8 pb-5'>
                <h1 className='text-3xl font-bold'>Gadget Heaven</h1>
                <h1 className='font-thin text-lg'>Leading the way in cutting-edge technology and innovation.</h1>
            </div>
            {/* <div className='divider bg-[#dbdbdb]'></div> */}
            <footer className="footer flex justify-between bg-[#dbdbdb] text-neutral-content p-10">
            <nav className='text-black'>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className='text-black'>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className='text-black'>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
        </div>
    );
};

export default Footer;