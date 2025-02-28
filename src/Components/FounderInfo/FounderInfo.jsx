import founderImage from '../SiteAssets/ImagesAssets/cta-colors-philip-still-919x1024.png.webp'
export default function Founder(props) {
    return(
        <section className="founder px-5 py-16 lg:flex lg:flex-row-reverse lg:content-center lg:items-center">
            <div className='lg:w-2/4 '>
                
                <h2 className=" text-5xl mb-8 ">APIAX</h2>
                <p className=" text-gray-700  text-xl leading-tight lg:w-2/3 ">We are very happy to work with Altar.io. The collaboration goes far beyond a standard IT service: with Altar.io we have a sparring partner that challenges us in our product decisions and is truly passionate about the results developed. The level of professionalism and dedication is exceptional in this industry and we are eager to strengthen our collaboration in the future.
                </p>
                <h3 className="text-blue-500 font-bold text-xl my-5"> Philip Schoch – Apiax, Co-Founder</h3>
            </div>
           
            <img className='lg:w-96' src={founderImage} alt="" srcset="" />
        </section>
    )
}



