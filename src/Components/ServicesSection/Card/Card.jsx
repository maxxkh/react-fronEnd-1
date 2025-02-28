


export default function Card(props) {
    // console.log(props.imgURL)
    return(
        <section className="card my-10 shadow-2xl p-5 lg:h-72 lg:w-1/4 lg:bg-white lg:rounded-xl ">
            
            <img src={props.imgURL} alt="service" srcset=""  />
   
            <div className="info">
                <h4 className=" font-bold text-2xl">{props.name}</h4>
                <p className="text-gray-600 font-semibold">{props.description}</p>
            </div>
        </section>
    )
}