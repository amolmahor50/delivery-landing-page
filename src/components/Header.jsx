import { useState } from "react";

export default function Header() {
    const [toggleOpen, setToggleOpen] = useState(false);

    const links = [
        { name: "home", href: "#home" },
        { name: "services", href: "#service" },
        { name: "about", href: "#about" },
        { name: "how it works", href: "#work" },
        { name: "testimonials", href: "#testimonials" },
    ];

    return (
        <>
            <div className="h-20 py-6 px-4 shadow-lg bg-white fixed top-0 w-full z-50">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* Logo */}
                    <div>
                        <img src="/assets/logo.svg" alt="Logo" />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden block" onClick={() => setToggleOpen(!toggleOpen)}>
                        {toggleOpen ? (
                            <img src="/assets/close.svg" alt="close menu" className="h-9 cursor-pointer transition-transform duration-300 ease-in-out rotate-180" />
                        ) : (
                            <img src="/assets/menu.svg" alt="open menu" className="h-9 cursor-pointer transition-transform duration-300 ease-in-out" />
                        )}
                    </div>

                    {/* Navigation Links for Large Screens */}
                    <div className="sm:flex gap-8 items-center hidden">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="capitalize text-lg"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector(link.href);
                                    if (target) {
                                        window.scrollTo({
                                            top: target.offsetTop - 120,
                                            behavior: "smooth",
                                        });
                                    }
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sliding Mobile Menu */}
            <div
                className={`sm:hidden fixed top-20 right-0 w-64 h-screen bg-white border-l shadow-md transition-all duration-300 ${toggleOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col gap-6 p-6">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="capitalize text-lg"
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.querySelector(link.href);
                                if (target) {
                                    window.scrollTo({
                                        top: target.offsetTop - 120,
                                        behavior: "smooth",
                                    });
                                }
                                setToggleOpen(false);
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
