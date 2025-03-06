import React from "react";
import BasicButton from "../SiteAssets/Buttons/BasicButton";
import TeamCard from "./TeamCard";

const teamData = [
    {
        imgSrc: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        title: 'Need a team',
        info :'I can help you find the right technical requirements for your product.',
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: 'Talk to tech',
        info :'Looking to build fast and reduce your time to market? Drop me a message.',
    },
    {
        imgSrc: "https://plus.unsplash.com/premium_photo-1674507925205-79ae9d27fbe0?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        title: 'Building MVP?',
        info :'I will help you build a team of top talent to reach your business goals.',
    }
];

export default function TeamSection() {
    return (
        <div className="mx-auto container lg:px-20 md:px-6 px-4 py-12">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pb-12 pt-20">
                {teamData.map((team, index) => (

                    <TeamCard
                        imgSrc={team.imgSrc}
                        title={team.title}
                        info={team.info}
                    />
                
                ))}
            </div>
        </div>
    );
}
