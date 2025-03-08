import React from "react";

export default function ServicesSubmenu({ services, isOpen, onMouseEnter, onMouseLeave }) {
    if (!isOpen) return null;

    return (
        <div
            className="absolute left-1/2 -translate-x-1/2 mt-5 bg-white shadow-2xl rounded-2xl p-6 grid grid-cols-2 gap-6 w-[90vw] max-w-4xl border border-gray-100
                      opacity-0 group-hover:opacity-100 transition-all duration-300 transform origin-top
                      backdrop-blur-sm"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ transform: 'translateX(-50%)' }}
        >
            {/* Top pointer arrow */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200"></div>

            {services.map(service => (
                <div
                    key={service.title}
                    className=" sbmenuItem group p-5 bg-white rounded-xl transition-all duration-300 
                    hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-600 hover:shadow-lg
                    border border-gray-100 hover:border-transparent cursor-pointer hover:text-white"
                >
                    <div className="subMenuItem flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-pink-100 group-hover:bg-white/20 flex items-center justify-center
                                       transition-colors duration-300">
                            <svg className="w-4 h-4 text-pink-600 group-hover:text-white" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <div>
                            {/* Remove group-hover:text-white to keep text visible */}
                            <h3 className="subMenuText text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="subMenuText text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}