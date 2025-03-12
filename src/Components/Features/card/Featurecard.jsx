import React from "react";
import BasicButton from "../../SiteAssets/Buttons/BasicButton";

const onClick = () => {
  console.log("Feature Button Clicked");
};

const Featurecard = (props) => {
  return (
    <div className="relative flex flex-col md:h-[350px] lg:h-[40%] items-center my-10 w-full overflow-hidden">
      <div
        className={`Features flex flex-col md:flex-row items-center justify-center md:gap-10 lg:gap-20 xl:gap-28 ${
          props.onRight ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Feature Image (Fixed Overflow & Enlarged + Min Width Applied) */}
        <div className="flex justify-center w-full md:w-[100%] lg:w-[80%] min-w-[250px] md:min-w-[350px] lg:min-w-[450px]">
          <img
            className="FeatureImage w-full md:w-[100%] lg:w-[100%] max-w-[100%] md:max-w-[95%] lg:max-w-[95%] h-auto mt-10 md:mt-16 lg:mt-20 object-cover rounded-xl shadow-lg"
            src={props.imgSrc}
            alt={props.name}
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:mt-[10%] md:text-left max-w-md md:max-w-lg lg:max-w-xl">
          <h3 className="text-cyan-500 text-sm md:text-base uppercase">
            {props.type}
          </h3>
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-bold ${
              props.caseStudyLink ? "lg:text-white" : "text-black"
            } mb-4`}
          >
            {props.name}
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            {props.description}
          </p>

          {/* Case Study Button (Optional) */}
          {props.caseStudyLink && (
            <div className="mt-4">
              <BasicButton
                ButtonText={props.caseStudyLink}
                filled={false}
                handleClick={onClick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Featurecard;
