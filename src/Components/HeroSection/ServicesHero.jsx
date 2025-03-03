import React from "react";

const data = [
    {
        number: 80,
        name: "Projects Completed",
    },
    {
        number: 40,
        name: "In-house specialists",
    },
    {
        number: 4.9,
        name: "Our Clutch score",
    },
];

export default function ServicesHero() {
    return (
        <section className="servicesHero">
            <div className="text">
                <h1 className="text-4xl font-bold py-5">We design & build innovative products focused on user’s needs</h1>
                <p className="font-semibold text-gray-800">Together, we can transform your vision into a thriving business, be it through a Minimum Viable Product, UX/UI services, or scaling support for your company.</p>
            </div>
            <div className="projectData">
                {data.map((item, index) => (
                    <div key={index} className="Data py-5 flex">
                        <div className="number text-4xl  pr-3">
                            {item.number} <span className="text-pink-500 font-semibold">{index!==2 && '+'}</span>
                        </div>
                        <div className="name w-24 text-gray-700 font-semibold">
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}