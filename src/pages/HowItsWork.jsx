import CustomComponent from '../costom/CustomComponent'

export default function HowItsWork() {
    return (
        <>
            <div className="sm:my-40 my-12 grid grid-cols-1 md:grid-cols-2 sm:gap-32" id='work'>
                <div className="order-2 md:order-1">
                    <CustomComponent
                        headline="Fast Delivery"
                        subHeadline="Order Now, Recieve Within 30mins"
                        description="Enjoy lightning-fast delivery with your essentials arriving in just 30 minutes.
                         We ensure speed, reliability,
                         and freshness with every order. Place your order now and experience hassle-free delivery! "
                    />
                    <button className='w-fit px-6 py-3 border btn'>
                        Download App
                    </button>
                </div>

                <div className="order-1 md:order-2">
                    <img src="/assets/delivery-img.svg" />
                </div>
            </div>

            <div className="sm:my-40 my-12 grid grid-cols-1 md:grid-cols-2 sm:gap-32">
                <div>
                    <img src="/assets/received-img.svg" />
                </div>
                <div className="flex items-center">
                    <CustomComponent
                        headline="Contactless Delivery"
                        subHeadline="On-time Delivery to Your Doorstep"
                        description="Enjoy safe and contactless delivery right at your doorstep,
                         ensuring hygiene and convenience. Our on-time service guarantees your essentials arrive swiftly and securely. 
                        Experience a hassle-free way to receive your orders with complete peace of mind!"
                    />
                </div>

            </div>

        </>
    )
}
