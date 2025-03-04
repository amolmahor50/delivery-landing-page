import CustomComponent from '../costom/CustomComponent'

const services = [
    {
        icon: "/services/service-icon-1.svg",
        name: "Food",
        description: "Get fresh and delicious food delivered to your doorstep in no time. From daily essentials to your favorite meals, enjoy hassle-free and quick delivery!"
    },
    {
        icon: "/services/service-icon-2.svg",
        name: "Grocery",
        description: "Get fresh fruits, vegetables, and daily essentials delivered hassle-free. Shop from trusted stores and save time!"
    },
    {
        icon: "/services/service-icon-3.svg",
        name: "Furniture",
        description: "Upgrade your home with stylish furniture delivered right to you. From sofas to tables, find everything you need with ease!"
    },
    {
        icon: "/services/service-icon-4.svg",
        name: "Medicine",
        description: "Order medicines and healthcare essentials from trusted pharmacies. Get them delivered quickly for your convenience and well-being!"
    },
    {
        icon: "/services/service-icon-5.svg",
        name: "Electronics",
        description: "From smartphones to home appliances, shop the latest electronics online. Enjoy fast and secure delivery to your doorstep!"
    },
    {
        icon: "/services/service-icon-6.svg",
        name: "Clothes",
        description: "Stay trendy with the latest fashion delivered to your home. Shop stylish outfits for every occasion, hassle-free!"
    },
]

export default function Service() {
    return (
        <div className='sm:my-40 my-12' id='service'>
            <div className='text-center'>
                <CustomComponent
                    headline="Delivery Services"
                    subHeadline="All Essentials You Need"

                />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {
                    services?.map((service, index) => (
                        <div
                            key={index}
                            className='flex flex-col gap-5 border px-4 py-2 rounded-md shadow-sm cursor-pointer 
                                   hover:shadow-lg transition-transform duration-300 delay-150 ease-in-out 
                                   hover:scale-105'
                        >
                            <img
                                src={service.icon}
                                alt={service.name}
                                className='sm:h-20 h-16 sm:w-20 w-16'
                            />
                            <h2 className='heading font-semibold text-2xl sm:text-3xl'>
                                {service.name}
                            </h2>
                            <p className='subHeading sm:text-base font-normal'>
                                {service.description}
                            </p>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}
