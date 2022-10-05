import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSend } from 'react-icons/io';


const Footer = () => {
    return (
        <div>
            <div className='bg-[url("/src/images/footerBg.jpg")] '>
                <div className='grid grid-cols-1 lg:grid-cols-4 p-20 gap-5 justify-center backdrop-brightness-50 bg-zinc-900/90 text-white text-center lg:text-left'>
                    <div>
                        <h1 className='text-4xl font-bold'>Portfolio</h1>
                        <p className='mt-5 text-slate-400'>Welcome to our website design agency. Lore ipsum simply text amet cing elit.</p>
                        <hr className='mt-5' />
                    </div>
                    <div className='lg:ml-10'>
                        <h3 className='text-xl mb-5 font-bold'>Explore</h3>
                        <ul>
                            <li><Link className='text-slate-400' to='/'>About</Link></li>
                            <li className='mt-3'> <Link className='text-slate-400' to='/'>Latest News</Link></li>
                            <li className='mt-3'><Link className='text-slate-400' to='/'>Case News</Link></li>
                            <li className='mt-3'><Link className='text-slate-400' to='/'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='lg:mr-10'>
                        <h3 className='text-xl mb-5 font-bold'>Contact</h3>
                        <p className='text-slate-400 text-'>66 Broklyn Street New York United States of America</p>
                        <p className='text-slate-100 mt-8 text-xl'>+8801872900536</p>
                        <p className='text-orange-400 mt-2'>mohammadmehedihasan84@gmail.com</p>
                    </div>
                    <div class="card w-80 shadow-xl bg-gray-900">
                        <div class="card-body">
                            <h2 class="card-title">Sign up for newsletter</h2>
                            <div className='flex'>
                                <input className='font-bold bg-gray-900 mt-3' placeholder='Email Address' />
                                <IoIosSend className='mt-5 ml-5 text-xl' />
                            </div>
                            <div className='h-1 bg-slate-800' />
                            <p className='mt-5'>I agree to all terms and policies</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-5 bg-gray-900'>
                <p className='text-center text-white'> © Copyright 2022 by mhabir979292.com</p>
            </div>
        </div>

    );
};

export default Footer;