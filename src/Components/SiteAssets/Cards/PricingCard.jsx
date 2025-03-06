import React from 'react'

const PricingCard = (props) => {
  return (
    <div className='bg-gray-100 px-5'>
        <div className="pricecard w-[100%] h-[250px] bg-white shadow-lg rounded-xl">
           <h3>{props.planName}</h3> 
           <p>{props.duration}</p>
           <h2>{props.price}</h2>
           <p>{props.description}</p>
        </div>
    </div>
  )
}
export default PricingCard
