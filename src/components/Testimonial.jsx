import React from 'react'
import CustomComponent from '../costom/CustomComponent'
import { Rating } from '@mui/material'

const testimonials = [
    {
        name: "Amit Sharma",
        role: "Software Engineer",
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
        comment: "Amazing service! My order arrived faster than expected. The food was fresh, well-packed, and still warm. Highly recommended!"
    },
    {
        name: "Priya Verma",
        role: "Marketing Manager",
        picture: "https://randomuser.me/api/portraits/women/2.jpg",
        comment: "I love how seamless the ordering process is. The app is easy to use, and delivery is always on time. It has made my life so much easier!"
    },
    {
        name: "Rahul Singh",
        role: "Entrepreneur",
        picture: "https://randomuser.me/api/portraits/men/3.jpg",
        comment: "Best delivery service I’ve used so far! Whether it's groceries, electronics, or daily essentials, everything arrives in perfect condition!"
    },
    {
        name: "Sneha Patel",
        role: "Doctor",
        picture: "https://randomuser.me/api/portraits/women/4.jpg",
        comment: "Fast and reliable! I often order medicines for my parents, and they are always delivered on time. The customer support is also excellent!"
    },
    {
        name: "Vikram Joshi",
        role: "Graphic Designer",
        picture: "https://randomuser.me/api/portraits/men/5.jpg",
        comment: "A smooth shopping experience with super quick delivery. The quality of groceries is always fresh, and the furniture I ordered was amazing!"
    },
    {
        name: "Megha Kapoor",
        role: "HR Manager",
        picture: "https://randomuser.me/api/portraits/women/6.jpg",
        comment: "I was amazed by how quickly my order arrived! Clothes, electronics, and even medicines were delivered safely and right on time."
    },
    {
        name: "Anil Mehta",
        role: "Business Owner",
        picture: "https://randomuser.me/api/portraits/men/7.jpg",
        comment: "A fantastic experience every time! The prices are competitive, and I never have to worry about delays. A must-try service for busy people!"
    },
    {
        name: "Pooja Das",
        role: "Student",
        picture: "https://randomuser.me/api/portraits/women/8.jpg",
        comment: "Super convenient! I can get everything I need with just a few taps. The delivery is always fast, and the items are of great quality!"
    },
    {
        name: "Rohan Malhotra",
        role: "Freelancer",
        picture: "https://randomuser.me/api/portraits/men/9.jpg",
        comment: "Fastest delivery I’ve ever seen! I appreciate the care taken in packaging fragile items. Will definitely continue using this service!"
    }
];

export default function Testimonial() {
    return (
        <div className='sm:my-40 my-12' id='testimonials'>
            <div className='text-center'>
                <CustomComponent
                    headline="Testimonials"
                    subHeadline="What Our Users Says"
                />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {
                    testimonials?.map((user, index) => (
                        <div key={index} className='flex flex-col gap-5 border p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-lg'>
                            <Rating size='small' name="half-rating" defaultValue={5} precision={5} />

                            <p className='subHeading text-sm font-normal'>
                                {user.comment}
                            </p>

                            <div className='flex gap-4 items-center'>
                                <img
                                    src={user.picture}
                                    alt={user.name}
                                    className='h-12 w-12 rounded-full'
                                />
                                <div >
                                    <h2 className='heading font-semibold sm:text-xl test-lg'>
                                        {user.name}
                                    </h2>
                                    <p className='subHeading text-base font-normal'>
                                        {user.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
