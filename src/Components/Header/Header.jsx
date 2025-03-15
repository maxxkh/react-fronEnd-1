
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Added for navigation
import BasicButton from "../SiteAssets/Buttons/BasicButton";
import ServicesSubmenu from "./SubMenu";

import MobileMenu from "./MobileMenu";
import SignupLoginCard from "./SignupLoginCard";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoggedOutModalOpen, setIsLoggedOutModalOpen] = useState(false);

    const [isServicesOpen, setIsServicesOpen] = useState(false);
    
    const location = useLocation();  // Get current page URL
    const navigate = useNavigate();  // For redirecting

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleAuthAction = () => {
        if (user) {
            signOut(auth).then(() => {
                setIsLoggedOutModalOpen(true); // Show modal
                if (location.pathname === "/dashboard") {
                    setTimeout(() => {
                        navigate("/"); // Redirect to home after logout
                    }, 1500); // Small delay for better UX
                }
            });
        } else {
            setIsSignupOpen(!isSignupOpen);
        }
    };

    // Define menu links, add "Dashboard" only if user is logged in
    const menuLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" },
        { name: "About", href: "/about" },
        { name: "Careers", href: "/career" },
        { name: "Tech", href: "/tech" },
        { name: "Blog", href: "/blog" },
        ...(user ? [{ name: "DashBoard", href: "/dashboard" }] : []) // Only add Dashboard if logged in
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
        <section className="PrimaryHeader sticky top-0 lg:h-20 z-50 px-3 flex items-center justify-between lg:px-60 bg-white shadow-md">
            <img src={props.imgURL} alt="Logo" className="py-7 w-20 logo lg:w-32" />
            <div className="flex items-center justify-between flex-row gap-5">
                <div className="menu lg:flex hidden lg:py-5 lg:font-semibold justify-between lg:items-end lg:w-3/1 relative">
                {menuLinks.map((link) => (
                <div className="relative group" key={link.name}>
                    <a 
                        className="hover:text-red-600 lg:m-2 transition-all duration-300 lg:py-5 px-2" 
                        href={link.href}
                        onMouseEnter={() => link.name === "Services" && setIsServicesOpen(true)}
                        onMouseLeave={() => link.name === "Services" && setIsServicesOpen(false)}
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
                <div className="flex items-center gap-5">
                    <BasicButton ButtonText="Book a Call" filled={true} handleClick={() => {}} />
                    
                    <button
                        onClick={handleAuthAction}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 relative"
                    >
                        {user ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        )}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <div
                        className="flex flex-col justify-between w-6 h-5 cursor-pointer lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className={`h-1 bg-pink-600 rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <div className={`h-1 bg-pink-600 w-4 rounded transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <div className={`h-1 bg-pink-600 rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </div>
            </div>

            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} menuLinks={menuLinks} />
            {isSignupOpen && <SignupLoginCard onClose={() => setIsSignupOpen(false)} />}

            {/* Logout Modal */}
            {isLoggedOutModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                        <h2 className="text-lg font-semibold text-gray-900">Messege</h2>
                        <p className="text-gray-600 mt-2">You have successfully signed out.</p>
                        <button
                            onClick={() => setIsLoggedOutModalOpen(false)}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
