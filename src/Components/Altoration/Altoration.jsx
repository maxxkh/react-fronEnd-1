import React from 'react'
import BasicButton from '../SiteAssets/Buttons/BasicButton'
import ContactSection from '../ContactSection/ContactSection'
const Altoration = () => {
  return (
    <div className='text-center'>
        <div className="text px-5 mb-5 lg:flex lg:flex-col lg:mt-40 items-center">

        <h1 className=' text-4xl font-bold py-5 lg:text-5xl'>Become an Altarion</h1>
        <p className=' text-gray-700 mb-5 lg:w-[40%] '> Expect endless challenges and rewards. Opportunities to work with people from all over the world. A team of life-long learners, fueled by collaboration. A culture that fosters innovation and values a happy workplace.</p>
        <BasicButton
        ButtonText='SEE THE OPENINGS'
        filled={true}
        />
        </div>
        <div className='md:w-[100%]'>
            <img width={'100%'} src="https://altar.io/wp-content/uploads/2024/01/altar-beach-event-team-768x486.jpg.webp" alt="" srcset="" />
        </div>
        <ContactSection/>
    </div>
  )
}

export default Altoration