import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

function CarouselV2() {
  const carouselData = [
    {
      image: "https://altar.io/wp-content/uploads/2024/11/Screenshot-2024-11-06-at-18.22.40-1024x565.png.webp",
      title: "Capital One",
      description:
        "Capital One Shopping looks for better offers, instantly searches for and applies available coupon codes at checkout.",
    },
    {
      image: "https://altar.io/wp-content/uploads/2023/12/SYNAPSE-1-1024x533.png.webp",
      title: "Another Title",
      description:
        "This is another example description for the carousel item.",
    },
    {
      image: "https://altar.io/wp-content/uploads/2023/11/Ovvio-Cover-1024x584.png.webp",
      title: "Yet Another Title",
      description:
        "This is yet another example description for the carousel item.",
    },
  ];

  return (
    <div className="py-14 px-3 relative">
      <div className="max-w-[1280px] container mx-auto relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mySwiper"
        >
          {carouselData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center bg-white px-6 py-7">
                {/* Title on top */}
                <div className="w-full text-center">
                  <p className="text-4xl font-semibold leading-10">
                    {item.title}
                  </p>
                  <p className="text-gray-600 text-base mt-4">
                    {item.description}
                  </p>
                </div>
                {/* Image at the bottom */}
                <div className="w-full  mt-8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation buttons */}
        <div className="p-2 -mt-16">
          <div className="w-full">
            {/* <button
              aria-label="previous"
              className="text-white p-2 rounded text-sm w-auto float-right swiper-button-prev"
            >    
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.46766 0.973157C5.74841 0.675614 6.20361 0.675614 6.48437 0.973157L10.7979 5.54459C11.0787 5.84213 11.0787 6.32454 10.7979 6.62208L6.48437 11.1935C6.20361 11.4911 5.74841 11.4911 5.46766 11.1935C5.1869 10.896 5.1869 10.4136 5.46766 10.116L8.55393 6.84524H0.943535C0.546483 6.84524 0.224609 6.50412 0.224609 6.08333C0.224609 5.66255 0.546483 5.32143 0.943535 5.32143H8.55393L5.46766 2.05065C5.1869 1.75311 5.1869 1.2707 5.46766 0.973157Z"
                  fill="#6B7280"
                />
              </svg>
            </button>
            <button
              aria-label="next"
              className="text-white p-2 ml-6 rounded text-sm w-auto float-right swiper-button-next"
            >
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.53234 0.973157C6.25159 0.675614 5.79639 0.675614 5.51563 0.973157L1.20208 5.54459C0.921318 5.84213 0.921318 6.32454 1.20208 6.62208L5.51563 11.1935C5.79639 11.4911 6.25159 11.4911 6.53234 11.1935C6.8131 10.896 6.8131 10.4136 6.53234 10.116L3.44607 6.84524H11.0565C11.4535 6.84524 11.7754 6.50412 11.7754 6.08333C11.7754 5.66255 11.4535 5.32143 11.0565 5.32143H3.44607L6.53234 2.05065C6.8131 1.75311 6.8131 1.2707 6.53234 0.973157Z"
                  fill="#6B7280"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselV2;