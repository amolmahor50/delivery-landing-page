import { version } from "../../package.json";

const footerData = [
    {
        title: "About Us",
        links: [
            { name: "Home", href: "#home" },
            { name: "Services", href: "#service" },
            { name: "About Us", href: "#about" },
            { name: "Contact", href: "#contact" }
        ]
    },
    {
        title: "About",
        links: [
            { name: "Partners", href: "#partners" },
            { name: "Terms of Service", href: "#terms" },
            { name: "Privacy Policy", href: "#privacy" },
            { name: "Refund Policy", href: "#refund" }
        ]
    },
    {
        title: "Support",
        links: [
            { name: "Open Ticket", href: "#ticket" },
            { name: "Community", href: "#community" },
            { name: "Return Policy", href: "#return" },
            { name: "Accessibility", href: "#accessibility" }
        ]
    }
];

export default function Footer() {
    return (
        <div className='w-full bg-[#263238] py-28 text-[#fff]'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:pl-0 pl-4 gap-6'>
                <div>
                    <img src='/assets/logo-2.svg' alt="Logo" />
                    <button className="border border-white rounded-lg px-6 py-2 flex items-center gap-4 mt-4 hover:bg-[#E8505B] hover:border-none w-[200px]">
                        <img src='/assets/apple-app.svg' className="h-8" alt="App Store" />
                        <p className="grid">
                            <span className="text-xs">Download on the</span>
                            <span>App Store</span>
                        </p>
                    </button>
                    <button className="border border-white rounded-lg px-6 py-2 flex items-center gap-4 mt-4 hover:bg-[#E8505B] hover:border-none w-[200px]">
                        <img src='/assets/play-store.svg' className="h-8" alt="Play Store" />
                        <p className="grid">
                            <span className="text-xs">GET IT ON</span>
                            <span>Play Store</span>
                        </p>
                    </button>
                </div>

                {footerData.map((section, index) => (
                    <div key={index} className="flex flex-col gap-3 mt-4 sm:mt-0">
                        <h2 className='font-semibold text-2xl sm:text-3xl'>
                            {section.title}
                        </h2>
                        <ul className="space-y-2">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a
                                        href={link.href}
                                        className="hover:text-[#E8505B] sm:text-base font-normal cursor-pointer"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <p className="text-center subHeading sm:mt-20 mt-10">
                Copyright © {new Date().getFullYear()} amol.mahor. All rights reserved. Version : {version}
            </p>
        </div>
    );
}
