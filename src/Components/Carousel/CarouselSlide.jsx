import React from "react";

export default function CarouselSlide({ imgSrc, title, description }) {
    return (
        <div className="flex lg:justify-center lg:bg-white  ">
            <div className="flex items-center justify-center lg:justify-center w-full flex-col">
                <img src={imgSrc} className="w-16 object-center object-cover sm:h-full lg:w-52" />
                <div className="flex justify-start flex-col w-72  ">
                    <h3 className="font-bold text-2xl">{title}</h3>
                    <p className="text-base leading-4 text-gray-800 mb-2 text-left">{description}</p>
                </div>
            </div>
        </div>
    );
}