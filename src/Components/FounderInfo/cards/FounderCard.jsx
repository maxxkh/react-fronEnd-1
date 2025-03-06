import React from 'react'

const FounderCard = (props) => {
  return (
    <div className='p-5 md:w-72'>
        <img className='rounded-xl' src={props.imgURL} alt="" srcset="" />
        <h3 className="name text-xl font-bold text-gray-700">{props.name}</h3>  
        <p className="tile py-2 text-gray-700 font-semibold">{props.title}</p>
        <a href="https://www.linkedin.com/in/danielcastroruivo/" target="_blank" class="inline-flex self-start no-underline text-inherit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V4C24 1.79086 22.2091 0 20 0H4ZM5.21875 18H8.125V8.65625H5.21875V18ZM5 5.6875C5 6.625 5.75 7.40625 6.65625 7.40625C7.59375 7.40625 8.34375 6.625 8.34375 5.6875C8.34375 5.09375 8.03125 4.53125 7.5 4.25C7 3.9375 6.34375 3.9375 5.8125 4.25C5.3125 4.53125 5 5.09375 5 5.6875ZM16.0938 13.4688V18H19V12.875C19 10.375 18.4375 8.4375 15.5 8.4375C14.0938 8.4375 13.1562 9.21875 12.75 9.9375H12.7188V8.65625H9.9375V18H12.8438V13.375C12.8438 12.1562 13.0625 11 14.5625 11C16.0625 11 16.0938 12.375 16.0938 13.4688Z" fill="#141C25"></path>
            </svg>
        </a>
  </div>
  )
}

export default FounderCard