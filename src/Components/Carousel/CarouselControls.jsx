import React from "react";
import { ButtonBack, ButtonNext } from "pure-react-carousel";

export default function CarouselControls() {
    return (
        <div className="flex justify-between w-full py-8 lg:px-24 lg:mt-20">
            <ButtonBack aria-label="go back" className="transform rotate-180 border rounded-full border-gray-600 p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                <svg width={23} height={24} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.79102 12H18.2077" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.375 16L18.2083 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.375 8L18.2083 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </ButtonBack>
            <ButtonNext aria-label="go next" className="border rounded-full border-gray-600 p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                <svg width={23} height={24} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.79102 12H18.2077" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.375 16L18.2083 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.375 8L18.2083 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </ButtonNext>
        </div>
    );
}