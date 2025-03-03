export default function Founder(props) {
    return(
        
        <section className="founder  flex justify-around items-center flex-col px-5 pt-10  lg:flex lg:flex-row-reverse lg:justify-center lg:items-center">
            <div className='lg:w-[600px]'>
                <h2 className=" text-5xl mb-8 font-bold ">{props.title}</h2>
                <p className=" text-gray-700  text-xl leading-tight lg:w-2/2 ">{props.description} </p>
                <h3 className="text-blue-500 font-bold text-xl my-5">{props.founder} </h3>
            </div>
            <img className='founderimg lg:mr-32 rounded-xl' style={{width:'500px'}} src={props.founderImage} alt="founder imge" srcset="" />
        </section>
    )
}