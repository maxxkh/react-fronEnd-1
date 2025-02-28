import Img from '../SiteAssets/ImagesAssets/cta-colors-philip-still-919x1024.png.webp'
import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carousel() {
return (
<div className="px-4 py-9 md:px-6 md:py-12 bg-gray-50  lg:flex lg:flex-col lg:justify-center" style={{ height: "700px" }}>
<div className="container mx-auto hidden lg:block py-8 px-5 max-w-screen-md h-full">
<h1 className="text-4xl font-semibold text-center text-gray-800">News</h1>
</div>
<div className="container mx-auto px-4 md:px-24 bg-gray-50">
<CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} infinite={true}>
<div className="slider lg:hidden py-6 md:py-12">
<h1 className="text-3xl font-semibold text-center text-gray-800">News</h1>
<div className="slide-ana lg:relative mt-8 md:mt-20">
<Slider>
<Slide index={0}>
<div className="flex">
<div className="flex items-center justify-center w-full flex-col">
    <img src={Img} className="w-16 object-center object-cover sm:h-full" />
    <div className="flex justify-start flex-col w-full">
        <h3 className="font-bold text-2xl ">Altar.io & Dr. Rumman Chowdhury Collaborate on Ethical AI Feedback System
        </h3>
    <p className="text-base leading-4 text-gray-800 mb-2 text-left">Altar.io partnered with Dr. Rumman Chowdhury to develop a public feedback system that empowers communities to evaluate AI ethics and […]</p>
    </div>
</div>
</div>
</Slide>

<Slide index={1}>
<div className="flex">
<div className="flex items-center justify-center w-full flex-col">
    <img src={Img} className="w-16 object-center object-cover sm:h-full" />
    <div className="flex justify-start flex-col w-full">
        <h3 className="font-bold text-2xl">Altar.io & Dr. Rumman Chowdhury Collaborate on Ethical AI Feedback System
        </h3>
    <p className="text-base leading-4 text-gray-800 mb-2 text-left">Altar.io partnered with Dr. Rumman Chowdhury to develop a public feedback system that empowers communities to evaluate AI ethics and […]</p>
    </div>
</div>
</div>
</Slide>





<Slide index={2}>
<div className="flex ">
<div className="flex items-center justify-center w-full flex-col ">
    <img src={Img} className="w-16 object-center object-cover sm:h-full " />
    <div className="flex justify-start flex-col w-full">
        <h3 className="font-bold text-2xl lg:text-xl ">Altar.io & Dr. Rumman Chowdhury Collaborate on Ethical AI Feedback System
        </h3>
    <p className="text-base leading-4 text-gray-800 mb-2 text-left">Altar.io partnered with Dr. Rumman Chowdhury to develop a public feedback system that empowers communities to evaluate AI ethics and […]</p>
    </div>
</div>
</div>
</Slide>
</Slider>
</div>
</div>
<div className="flex justify-between w-full py-8 lg:px-24 lg:mt-20">
<ButtonBack aria-label="go next" className="transform rotate-180 border rounded-full border-gray-600 p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
<svg width={23} height={24} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.79102 12H18.2077" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
<path d="M14.375 16L18.2083 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
<path d="M14.375 8L18.2083 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</ButtonBack>
<ButtonNext aria-label="go next" className="border rounded-full border-gray-600 p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
<svg width={23} height={24} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.79102 12H18.2077" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
<path d="M14.375 16L18.2083 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
<path d="M14.375 8L18.2083 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</ButtonNext>
</div>
</CarouselProvider>
</div>

<style>
{`
#item-1:checked ~ .cards #song-3,
#item-2:checked ~ .cards #song-1,
#item-3:checked ~ .cards #song-2 {
transform: translatex(-40%) scale(0.8);
opacity: 0.4;
z-index: 0;
}

#item-1:checked ~ .cards #song-2,
#item-2:checked ~ .cards #song-3,
#item-3:checked ~ .cards #song-1 {
transform: translatex(40%) scale(0.8);
opacity: 0.4;
z-index: 0;
}

#item-1:checked ~ .cards #song-1,
#item-2:checked ~ .cards #song-2,
#item-3:checked ~ .cards #song-3 {
transform: translatex(0) scale(1);
opacity: 1;
z-index: 1;
}

.slider {
width: 100%;
height: 610px;
position: relative;
overflow: hidden;
}

// .slide-ana {
// height: 500px;
// }

Slide > div {
width: 100%;
height: 100%;
position: absolute;
transition: all 1s;
}

@media (min-width: 640px) and (max-width: 1023px) {
.slider {
height: 750px;
}
}
@media (min-width: 200px) and (max-width: 639px) {
.slider {
height: 450px;
}
}
`}
</style>
</div>
);
}