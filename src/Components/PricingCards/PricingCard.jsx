import React from 'react'

const PricingCard = (props) => {
  return (
        <div className="pricecard p-5 w-[100%] h-[350px]  bg-white shadow-lg rounded-xl lg:min-w-[350px] lg:w-[32%] ">
           <h3 className='text-2xl font-semibold'>{props.name}</h3> 
           <p className='text-xl font-semibold text-gray-400 pb-5'>{props.duration}</p>
           <h2 className='text-3xl lg:text-5xl font-bold pb-5'>{props.cost}</h2>
           <p className='text-md font-semibold text-gray-600 '>{props.description}</p>
        </div>
  )
}
export default PricingCard

