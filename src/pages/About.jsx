import { Rating } from "@mui/material";
import CustomComponent from "../costom/CustomComponent";

export default function About() {
    return (
        <>
            <div className="sm:my-40 my-12 grid grid-cols-1 md:grid-cols-2 sm:gap-32" id="about">
                <div>
                    <img src="/assets/about-img.svg" />
                </div>
                <div className="flex flex-col gap-2">
                    <CustomComponent
                        headline="About Us"
                        subHeadline="On-time Delivery and Customer Satisfaction"
                        description=" Experience seamless delivery services with our commitment to on-time delivery and
                        customer satisfaction. We prioritize quality, reliability,
                        and convenience for every order. Your happiness is our top priority!"
                    />
                    <p className="flex items-center gap-3">
                        Ratting 4.8  <Rating name="half-rating" size="small" defaultValue={5} precision={5} />
                    </p>
                    <div className="flex justify-around items-center p-4 bg-[#E8505B] rounded-md text-[#fff]">
                        <div className="flex flex-col items-center gap-1">
                            <span className="sm:text-3xl text-xl font-bold">
                                1M+
                            </span>
                            <span className="sm:text-lg text-base font-semibold">
                                Download
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 sm:border-l-2 sm:pl-10">
                            <span className="sm:text-3xl text-xl font-bold">
                                234K+
                            </span>
                            <span className="sm:text-lg text-base font-semibold">
                                Happy User
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 sm:border-l-2 sm:pl-10">
                            <span className="sm:text-3xl text-xl font-bold">
                                34K+
                            </span>
                            <span className="sm:text-lg text-base font-semibold">
                                Reviews
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
