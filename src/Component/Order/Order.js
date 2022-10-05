import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Order = () => {
    return (
        <div className='flex justify-between lg:p-24 p-5 bg-sky-800 text-white gap-10 mt-48'>
            <p className='w-60'>HAVE A PROJECT ?</p>
            <h1 className='lg:text-3xl font-serif'>
                I WORK WITH CREATIVE BRANDS.
                AND LOVE BUILDING SOMETHING INCREDIBLE TOGETHER.</h1>
            <BsArrowRight className='text-2xl w-32 cursor-pointer hover:text-green-400'/>
        </div>
    );
};

export default Order;