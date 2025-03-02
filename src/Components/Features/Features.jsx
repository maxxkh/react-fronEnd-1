import Img1 from '../SiteAssets/ImagesAssets/fave-cover.png'
import img2 from '../SiteAssets/ImagesAssets/General-Snapshot-2048x972.png.webp'
import img3 from '../SiteAssets/ImagesAssets/Group-2448.png.webp'
import BasicButton from "../SiteAssets/Buttons/BasicButton"
export default function Feature(props) {
    const onClick = () =>{
        console.log('Feature Button Clicked')
    }
    return(
        <section className='FeatureSection px-5 lg:px-60' >
            <div className="Features  lg:py-10 lg:flex lg:items-center lg:justify-between lg:flex-row-reverse ">
                <img className='FeatureImage lg:w-2/3' src={Img1} alt="" srcset="" />
                <div>

                    <h3 className="text-cyan-500">SOCIAL MEDIA</h3>
                    <h2  className="text-4xl font-bold lg:text-white lg:mb-5">Fave</h2>
                    <h1 className=" text-gray-300 mb-4 leading-tight lg:w-96 lg:text-xl">
                        Fave is a fandom-centric community with highly engaging content where fans can create deeper and lasting connections. The vision to nurture and grow the community is centered on rewarding positive and meaningful engagement with points that can be redeemed for discounts and exclusive experiences.
                    </h1>

                    <BasicButton
                            ButtonText="SEE CASE STUDY"
                            filled={false}
                            handleClick={onClick}
                        />
                </div>
            </div>




            <div className="Features lg:py-10 px-4 lg:px-20 lg:flex lg:justify-around lg:items-center lg:flex-row ">
                <img className='FeatureImage lg:w-2/3 lg:mr-32' src={img2} alt="" srcset="" />
                <div>

                    <h3 className="text-cyan-500">FINTECH</h3>
                    <h2  className="text-4xl font-bold lg:text-white lg:mb-5">Apiax</h2>
                    <h1 className=" text-gray-300 mb-4 leading-tight lg:w-96 lg:text-xl">
                    Apiax is a Swiss Company that operates in the Regulation Technology market and serves major Banks an API to seamlessly adapt to the always changing financial regulations.
                    </h1>

                    <BasicButton
                            ButtonText="SEE CASE STUDY"
                            filled={false}
                            handleClick={onClick}
                        />
                </div>
            </div>






            <div className="Features lg:py-10 px-4 lg:px-20 lg:flex lg:items-center lg:flex-row-reverse ">
                <img className='FeatureImage lg:w-2/3' src={img3} alt="" srcset="" />
                <div>

                    <h3 className="text-cyan-500">FINTECH</h3>
                    <h2  className="text-4xl font-bold lg:text-white lg:mb-5">Synch</h2>
                    <h1 className=" text-gray-300 mb-4 leading-tight lg:w-96 lg:text-xl">
                    Synch is a single, curated ecosystem for bond professionals to source and analyse bonds with relevant, reliable and up-to-date data.

                    </h1>

                    <BasicButton
                            ButtonText="SEE CASE STUDY"
                            filled={false}
                            handleClick={onClick}
                        />
                </div>
            </div>
       
        </section>
    )
}





