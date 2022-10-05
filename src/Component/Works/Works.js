import React from 'react';
import {BsArrowRight } from 'react-icons/bs';

const Works = () => {
    return (
        <div className='lg:px-28 mt-8 bg-slate-100 py-10 px-8'>
            <p>RECENT WORKS</p>
            <h1 className='font-bold text-4xl mt-4 font-serif'>My Complete Projects</h1>
            <h4 className='ml-[900px] my-8 font-mono text-xl flex gap-3 text-slate-500 cursor-pointer hover:text-green-600'>VIEW ALL PROJECTS <BsArrowRight className='mt-1'/></h4>
            <div className='grid lg:grid-cols-3 gap-5'>
                <div class="card max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div class="card max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div class="card max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div class="card max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div class="card max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;