import { ExitToApp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const data = [
    {
        number: <Timer/>,//80
        name: "Projects Completed",
    },
    {
        number: <Timer2/>, //40
        name: "In-house specialists",
    },
    {
        number: <Timer3/>, //4.8
        name: "Our Clutch score",
    },
];

function Timer2() {
    // const [projectNumber, setProjects] = useState(0);
    const [specialists, setSpecialists] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            if (specialists !== 40) {
                
                setSpecialists((projectNumber) =>projectNumber + 1);
            }
   
        }, 20);
    });  
    return <span>{specialists}</span>;
  }



function Timer() {
    const [projectNumber, setProjects] = useState(0);
  
    useEffect(() => {
        setTimeout(() => {
            if (projectNumber !== 80) {
                
                setProjects((projectNumber) =>projectNumber + 1);
            }

        }, 20);
    });  
    return <span>{projectNumber}</span>;
  }


  function Timer3() {
    const [clutch, setclutch] = useState(0.1);
  
    useEffect(() => {
        setTimeout(() => {
            if (clutch <= 4) {
                
                setclutch((clutch) => (clutch + 1));
            }

            
        }, 90);
    }); 
    return <span>{Math.round(clutch)}</span>;
  }

export default function ServicesHero() {
    return (
        <section className="servicesHero px-5 lg:mx-56">
            <div className="text">
                <h1 className="text-5xl font-bold pt-20 md:text-7xl">We design & build innovative products focused on user’s needs</h1>
                <p className="font-semibold text-[18px] text-gray-800 pt-14">Together, we can transform your vision into a thriving business, be it through a Minimum Viable Product, UX/UI services, or scaling support for your company.</p>    
            </div>
            <div className="projectData pt-14 md:flex md:justify-around">
                {data.map((item, index) => (
                    <div key={index} className="Data py-5 flex">
                        <div className="number text-4xl  pr-3 md:text-5xl">
                            {item.number}{index===2 && '.9'} <span className="text-pink-500 font-semibold">{index!==2 && '+'}</span>
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