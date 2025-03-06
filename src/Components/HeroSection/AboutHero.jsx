
import LiveProjectsInfo from "./LiveProjectinfo";

export default function AboutHero(params) {
    return(
        <section className="aboutHero px-5  h-auto md:h-auto lg:pt-0 md:pt-0 lg:px-[15%] ">
            <div className="lg:flex lg:items-center md:pt-20 pt-44 lg:pt-20 justify-between bg-gray-100 ">
            <div className="aboutHeroText lg:min-w-[440px] text-center  md:text-left  md:w-[450px]">
                <h1 className="text-6xl py-5  md:text-7xl font-bold ">Our Team is Your Team</h1>
                <p className=" text-xl">Experience, Rigor, and a User-Centric Approach.</p>
            </div>
            <div className="aboutHeroImage pt-14 lg:min-w-[600px] lg:w-[700px]">
                <img src="https://altar.io/wp-content/uploads/2024/01/cta-colors-about-us-1024x816.png.webp" alt="" />
            </div>
            </div>
            <LiveProjectsInfo/>
            
        </section>
    )
}