import React from 'react'

export default function Home() {
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 items-center mt-32' id='home'>
            <div className='flex flex-col gap-8'>
                <p className='sm:text-5xl text-3xl heading leading-tight'>
                    <span className='font-medium sm:text-6xl text-4xl leading-tight text-[#E8505B]'> Home Delivery</span> From Stores Near You
                </p>
                <p className='subHeading'>
                    Get your essentials delivered straight to your doorstep from trusted stores nearby. Enjoy fast, reliable, and hassle-free home delivery for groceries,
                    daily needs, and more. Shop locally and get what you need, when you need it!
                </p>
                <button className='w-fit px-6 py-3 border btn'>
                    Download App
                </button>
            </div>
            <div>
                <img src='/assets/hero-img.svg' />
            </div>
        </div>
    )
}
