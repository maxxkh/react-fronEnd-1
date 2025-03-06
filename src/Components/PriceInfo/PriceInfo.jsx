import React from 'react'
import Featurecard from '../Features/card/Featurecard'

const PriceInfo = () => {
  return (
    <div className=''>
    <section className="bg-white py-16 px-5 ">
      <div className="max-w-4xl mx-auto text-left ">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          How We Get to Our Pricing
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Our pricing is reflected by our lean, user-centric approach to product innovation and software development. This, combined with top industry talent, means our small focused teams deliver projects on time and on budget.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-col items-start gap-6">
          <a
            href="#priceArea" 
            className=" text-black px-8 py-4 rounded-lg  transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn more about our Seed Program
          </a>
          <a
            href="#priceArea"
            className=" text-black px-8 py-4 rounded-lg  transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn more about our Structured Process
          </a>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm">
            We’re committed to transparency and delivering value at every step of the process.
          </p>
        </div>
      </div>
    </section>
      <div id='priceArea' className='lg:px-56 bg-white px-5'>
      <Featurecard
          onRight={true}
          imgSrc='https://altar.io/wp-content/uploads/2023/09/Group-3417.png.webp'
          name='Seed Project Explained'
          description='Our Seed program is a purpose-agnostic app with a highly modular microservices architecture composed by a group of components that, when combined, can be the foundation of a project. With the seed in place, the project starts with ~50% of the code already done, while we can focus on developing the CORE: custom functionalities and all the interfaces.'
        
        />
        <Featurecard
          onRight={true}
          imgSrc='https://altar.io/wp-content/uploads/2023/11/Group-3416.png.webp'
          name='Seed Modules'
          description='Most projects have a common ground, a list of functionalities/modules that are always necessary: i.e. email services, signup with email/social networks, password recovery, email validation fluxes, etc. That is exactly what the seed covers and is reflected in our pricing.'

        />


      </div>
    </div>
  )
}

export default PriceInfo