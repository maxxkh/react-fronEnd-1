import React from "react";
import LiveProjectsInfo from "./LiveProjectinfo";

export default function ServicesHero() {
    return (
        <section className="servicesHero px-5 lg:mx-56">
            <div className="text">
                <h1 className="text-5xl font-bold pt-20 md:text-7xl">We design & build innovative products focused on user’s needs</h1>
                <p className="font-semibold text-[18px] text-gray-800 pt-14">Together, we can transform your vision into a thriving business, be it through a Minimum Viable Product, UX/UI services, or scaling support for your company.</p>    
            </div>
            <LiveProjectsInfo/>
        </section>
    );

}