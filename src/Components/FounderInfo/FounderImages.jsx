export default function founderImages(params) {
    return(
        <section className="lg:px-56 FounderImges px-5 md:flex md:flex-wrap md:gap-5 ">
            <img className="rounded-xl my-5 md:w-[50%] md:h-[600px] object-cover" src="https://altar.io/wp-content/uploads/2024/01/gallery-image-6-768x512.jpg.webp" alt="" srcset="" />
            <div className="flex justify-center md:flex md:justify-between md:w-[40%] gap-5">
                <img className="rounded-xl my-5 w-[48%] md:h-[600px] md:w-[55%] object-cover " src="https://altar.io/wp-content/uploads/2024/06/All-Hands-Winter-42-1-656x1024.jpg.webp" alt="" srcset="" />
                <img className="rounded-xl my-5 w-[48%] md:h-[600px] md:w-[55%] object-cover" src="https://altar.io/wp-content/uploads/2024/01/gallery-image-4.jpg.webp" alt="" srcset="" />
            </div>
            <div className="md:flex  items-center justify-start">
            <img className=" lg:mr-32 md:mr-10 lg:w-[550px] rounded-xl my-5 object-cover md:w-[450px]  md:h-[550px] " src="https://altar.io/wp-content/uploads/2024/06/Spring-2024-All-Hands-Lunch-768x512.jpg.webp" alt="" srcset="" />
            <div className="workText md:w-[40%] ">
                <h1 className='text-5xl font-bold'>Beyond work</h1>
                <p className='py-5 font-semibold text-gray-700'>We regularly organize all-hand events to meet as a team and do fun stuff together. We also lunch together or go out to listen to our favourite music (random fact: many of our Altarions play in a band 🎸 🥁)</p>
            </div>
        </div>
        <div className="wordImages flex flex-col md:flex-row gap-5 ">
            <img className='rounded-xl md:w-[25%] md:h-[500px] object-cover' src="https://altar.io/wp-content/uploads/2024/01/gallery-image-2-768x512.jpg.webp" alt="" srcset="" />
            <img className='rounded-xl md:w-[45%] md:h-[500px] object-cover' src="https://altar.io/wp-content/uploads/2024/01/gallery-image-1-768x512.jpg.webp" alt="" srcset="" />
            <img className='rounded-xl md:w-[25%] md:h-[500px] object-cover' src="https://altar.io/wp-content/uploads/2024/09/Events-Altar-HighRes-Mobile-Version-768x549.jpg.webp" alt="" srcset="" />
        </div>
        </section>
    )
}