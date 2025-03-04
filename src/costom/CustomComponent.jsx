import React from 'react'

export default function CustomComponent({ headline, subHeadline, description }) {
    return (
        <div className='flex flex-col sm:gap-6 gap-3 my-10'>
            <p className='text-[#E8505B] text-2xl font-medium tracking-tight'>{headline}</p>
            <h1 className='heading font-bold text-3xl sm:text-5xl'>{subHeadline}</h1>
            <p className="subHeading sm:text-lg text-sm">
                {description}
            </p>
        </div>
    )
}
