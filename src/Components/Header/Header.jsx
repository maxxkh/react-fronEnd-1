import { useState } from "react";
import BasicButton from "../SiteAssets/Buttons/BasicButton";
import ServicesSubmenu from "./SubMenu"; // Import the new component
import MobileMenu from "./MobileMenu";

export default function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const onClick = () => {
        console.log("Button Click");
    };

    const menuLinks = [
        { name: "Home", href: "/react-fronEnd-1" },
        { name: "Services", href: "/react-fronEnd-1/services" },
        { name: "Pricing", href: "/react-fronEnd-1/pricing" },
        { name: "About", href: "/react-fronEnd-1/about" },
        { name: "Careers", href: "/react-fronEnd-1/career" },
        { name: "Tech", href: "/react-fronEnd-1/tech" },
        { name: "Blog", href: "/react-fronEnd-1/blog" }
    ];

    const services = [
        { title: "Product Scope", desc: "15-day process to align the product with your business goals." },
        { title: "UX / UI", desc: "Design an easy-to-use engaging and functional product." },
        { title: "MVP Builder", desc: "Go to market quickly with a high-quality Minimum Viable Product." },
        { title: "Dedicated Teams", desc: "Build your product with a dedicated team of developers." },
        { title: "Custom Software Development", desc: "Lean frameworks applied to your vision to create an innovative solution." },
        { title: "AI Development & Enablement", desc: "We leverage ML and Generative AI to ensure your business is future-ready." }
    ];

    return (
        <section className="PrimaryHeader sticky top-0 lg:h-20 z-50 px-3 flex items-center justify-between  lg:px-60">
            <img src={props.imgURL} alt="Logo" className="py-7 w-20 logo lg:w-32 " />

            <div className="flex  items-center justify-between flex-row gap-5 ">
                <div className="menu  lg:flex hidden lg:py-5 lg:font-semibold justify-between lg:items-end  lg:w-3/1 relative">
                    {menuLinks.map((link) => (
                        <div
                            className="relative group "
                            key={link.name}
                            onMouseEnter={() => link.name === "Services" && setIsServicesOpen(true)}
                            onMouseLeave={() => link.name === "Services" && setIsServicesOpen(false)}
                        >
                            <a
                                className="hover:text-red-600 lg:w-[10px] lg:m-2  transition-all duration-300 lg:py-5 px-2"
                                href={link.href}
                            >
                                {link.name}
                            </a>
                            {link.name === "Services" && (
                                <ServicesSubmenu
                                    services={services}
                                    isOpen={isServicesOpen}
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-5 ">
                    <BasicButton ButtonText="Book a Call" filled={true} handleClick={onClick} />

                    {/* Toggle Button */}
                    <div
                        className="flex flex-col justify-between  w-6 h-5 cursor-pointer  lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className={`h-1 bg-pink-600 rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <div className={`h-1 bg-pink-600 w-4 rounded transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <div className={`h-1 bg-pink-600 rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} menuLinks={menuLinks} />

        </section>
    );
}