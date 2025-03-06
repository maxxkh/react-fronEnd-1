import React from "react"
import BasicButton from "../SiteAssets/Buttons/BasicButton"

export default function TeamCard(props) {
    return(
        <section className="teamcard mx-3 min-h-96">
            <div  className="w-full flex items-center justify-center flex-col">
                <div className="w-full px-5 -mb-10 relative z-40">
                    <img src={props.imgSrc} alt="team member" className="w-full h-full rounded-md" />
                </div>
                <div className="flex justify-center flex-col gap-5 px-10 pb-8 pt-14 bg-white items-center rounded-md lg:px-20 w-full">
                    <p className="text-xl font-semibold leading-5 text-center text-black">{props.title}</p>
                    <p className="text-base leading-4 mt-2 text-center text-black ">{props.info}</p>
                    <BasicButton ButtonText="Contact Me" filled={true} />
                </div>
            </div>
        </section>
    )
}

