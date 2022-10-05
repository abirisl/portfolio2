import React from 'react';
import Navbar from '../Shared/Navbar';
import img from '../../images/image1.png';
import fb from '../../images/fb.jpg';
import linkdin from '../../images/linkdin.png';
import { IoCallOutline } from 'react-icons/io5';
import {HiOutlineMail } from 'react-icons/hi';
import {AiOutlineHome } from 'react-icons/ai';

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 to-cyan-300 lg:px-28 lg:py-10 lg:h-[680px] w-full">
        <Navbar/>

            <div class="card lg:m-5 bg-base-100 top-20 shadow-2xl">
                <div class="card-body">
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div>
                            <img src={img} style={{width: "600px", height: "570px", backgroundColor:'#87CEFA'}}  alt='' />
                        </div>
                        <div className='lg:ml-20 py-5'>
                            <h3>HELLO EVERYBODY, I AM</h3>
                            <h1 className='text-upperCase text-4xl font-bold mt-4'>Mohammad <span className='block'>Mehedi Hasan</span></h1>
                            <p className='mt-5 text-xl font-mono'>Web Developer</p>
                            <p className='w-72 mt-3 text-slate-500'>I'm a frontend developer with basic knowledge in designing great User interface and develop real life interactions .</p>
                            <p className='mt-10 flex gap-5 text-slate-500'><IoCallOutline className='text-2xl'/>01872900536</p>
                            <p className='mt-5 flex  gap-5 text-slate-500'><HiOutlineMail className='text-2xl'/>mohammadmehedihasan84@gmail.com</p>
                            <p className='mt-5 flex  gap-5 text-slate-500'><AiOutlineHome className='text-2xl'/>South Middle Halishahar, Bondar, Chattagram</p>

                            <div className='flex  ml-10 mt-7'>
                               <a href=''> <img src={fb} width={50} alt=''/></a>
                                <a href=''><img src={linkdin} width={50} alt=''/></a>
                            
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;