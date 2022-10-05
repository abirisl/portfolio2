import React from 'react';
import { Link } from 'react-router-dom';


const Blog = () => {
    return (
        <div>
            <div className='text-center pt-8 mt-10'>
            <p className='text-slate-500 font-mono text-xl'>
                CORPORATE BLOG
            </p>
            <h1 className='text-4xl font-bold mt-3 font-serif'>OUR LATEST NEWS</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-center m-20 gap-4'>
            <div class="card max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div class="card max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div class="card max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            </div>
            <div className='flex justify-center'>
            <Link className=' border border-2 w-48 p-4 text-center hover:text-green-500 uppercase font-bold font-mono' to='/'>view more post</Link>
            </div>
        </div>
    );
};

export default Blog;