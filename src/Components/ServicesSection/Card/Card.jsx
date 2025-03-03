
export default function Card(props) {
    return(
        <section className="card cursor-pointer serviceCards shadow-2xl p-5 h-64 bg-white rounded-xl" 
        >
            <img src={props.imgURL} alt="service" srcset=""  />
            <div className="info">
                <h4 className=" font-bold text-2xl">{props.name}</h4>
                <p className="text-gray-600 font-semibold">{props.description}</p>
            </div>
        </section>
    )
}