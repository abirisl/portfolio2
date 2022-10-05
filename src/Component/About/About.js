import React from 'react';

const About = () => {
    return (
        <div className='lg:px-28 px-10 py-10 mt-60 grid grid-cols-1 lg:grid-cols-2 gap-24'>
            <div>
                <h1 className='text-4xl font-bold mb-8 font-serif'>ABOUT MYSELF</h1>
                <p className='text-slate-500'>I am a web developer from Mehedi Hasan and currently living in Chittagong, I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here.</p>
                <div className='grid lg:grid-cols-3 grid-cols-2 gap-2 mt-5'>
                    <div class="card w-40 bg-base-100 shadow-xl">
                        <div class="card-body">
                           <p className='font-bold text-2xl'>10+</p>
                           <p>Happy Clients</p>
                           
                        </div>
                    </div>

                    <div class="card w-40 bg-base-100 shadow-xl">
                    <div class="card-body">
                           <p className='font-bold text-2xl'>42</p>
                           <p>Project Complete</p>
                           
                        </div>
                    </div>

                    <div class="card w-40 bg-base-100 shadow-xl">
                    <div class="card-body">
                           <p className='font-bold text-2xl'>2+</p>
                           <p>Years of Experience</p>
                           
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <p className='font-medium text-xl'>Html/CSS 90%</p>
                <progress class="progress progress-success lg:w-[500px]" value="90" max="100"></progress>
                <p className='font-medium text-xl mt-5'>Javascript 50%</p>
                <progress class="progress progress-success lg:w-[500px]" value="50" max="100"></progress>
                <p className='font-medium text-xl mt-5'>ReactJS 88%</p>
                <progress class="progress progress-success lg:w-[500px]" value="88" max="100"></progress>
                <p className='font-medium text-xl mt-5'>Bootstrap 90%</p>
                <progress class="progress progress-success lg:w-[500px]" value="90" max="100"></progress>
                <p className='font-medium text-xl mt-5'>Tailwind CSS 100%</p>
                <progress class="progress progress-success lg:w-[500px]" value="100" max="100"></progress>
            </div>

        </div>
    );
};

export default About;