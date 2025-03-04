import img1 from './images/image.png'
import img2 from './images/image1.png'
import img3 from './images/image2.png'
import img4 from './images/image3.png'
import img5 from './images/image4.png'
import img6 from './images/image5.png'


import Card from "./Card/Card"
export default function Services(props) {
    console.log(img1)
    return(
        <section className=" services md:mx-0 lg:mx-48 "
     
        >
            <div className="serviceInfo lg:w-2/4 ">
                <h1 
                    className=" text-4xl font-bold py-6 lg:ml-[3%] "
                >What we do</h1>
                <p
                className="text-gray-700 text lg:ml-[3%] text-xl leading-tight"
                >
                We help entrepreneurs and business leaders build and launch innovative custom software solutions to the market across a range of verticals & industries. We can help you turn your vision into a successful product together, whether it’s in the form of a Minimum Viable Product, UX/UI services, full product custom software development or help to scale your company.
            
                </p>
            </div>
            <div className="cards flex flex-wrap lg:justify-center lg:gap-3 items-center mt-10 " >
                <Card
                    imgURL={img1}
                    name="Product Scope"
                    description="A structured 15 day process to align your product vision with your business goals."
                />
                <Card
                    imgURL={img2}
                    name="Product Scope"
                    description="A structured 15 day process to align your product vision with your business goals."
                />
                <Card
                    imgURL={img3}
                    name="Product Scope"
                    description="A structured 15 day process to align your product vision with your business goals."
                />
                <Card
                    imgURL={img4}
                    name="Product Scope"
                    description="A structured 15 day process to align your product vision with your business goals."
                />
                <Card
                    imgURL={img5}
                    name="Product Scope"
                    description="A structured 15 day process to align your product vision with your business goals."
                />
                <Card
                    imgURL={img6}
                    name="Product Scope"
                    description="A structured 15 day process to align your product vision with your business goals."
                />
            </div>         
        </section>
    )
}