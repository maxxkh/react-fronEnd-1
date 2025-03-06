import React from 'react'
import BasicButton from '../../SiteAssets/Buttons/BasicButton'

const onClick = ()=>{
    console.log('Feature Button Clicked')
}


const Featurecard = (props) => {
  return (
    <div>
        <div className={`Features  lg:py-10 lg:flex lg:items-center lg:justify-around ${props.onRight ?'lg:flex-row-reverse' :'lg:flex-row' }  `}>
                <img className={`FeatureImage ${props.caseStudyLink ? 'lg:w-2/3' : 'lg:w-[600px]'} my-10 `} src={props.imgSrc} alt="" srcset="" />
                <div className='min-w-5600px]'>
                    <h3 className="text-cyan-500">{props.type}</h3>
                    <h2  className={`text-4xl font-bold ${props.caseStudyLink? 'lg:text-white':'text-black' } mb-5  lg:mb-5`}>{props.name}</h2>
                    <h1 className= {`text-gray-500 mb-4 leading-tight ${props.caseStudyLink? 'lg:w-96': 'lg:w-[400px]' }  lg:text-xl`}>
                        {props.description}
                    </h1>
                    {props.caseStudyLink && <BasicButton
                            ButtonText={props.caseStudyLink}
                            filled={false}
                            handleClick={onClick}
                     />
                    }
                </div>
            </div>
    </div>
  )
}

export default Featurecard