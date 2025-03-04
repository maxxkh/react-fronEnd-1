


import React from "react";
import BasicButton from '../SiteAssets/Buttons/BasicButton'
const webFrameworks = {
    frontend: {
      frameworks: [
        {
          name: "React",
          image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
        {
          name: "Angular",
          image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
        },
        {
          name: "Vue.js",
          image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
        },
        {
          name: "Svelte",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
        },
        {
          name: "Ember.js",
        image: "https://imgs.search.brave.com/F1AWR84yjqSDJ3sjR4axKf8MYUQOuhpjERMr_be2f4w/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYzgxY2Y1YjE2/MjE1ZTJjOWZmOTY2/YmUxZDg0ODQ3MzI5/MDhlOGE1YjcwYjIx/MTMxNmNmY2UzNjA4/YTk4NjVmZi9lbWJl/cmpzLmNvbS8",

        },
        {
          name: "Solid.js",
        image: "https://imgs.search.brave.com/AyfMCAG0sM5vYi-269GvWtNnFJxivfk-NH4iGRw8Suo/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNTlhMzEwZmZh/MGYzMzU4ZGJkNTY1/NWQ0NjdhMDE0NzQ5/NzQ0N2NmYjZhNDY3/ZTljYjhmNGNkN2Mz/NzFlNThhMC93d3cu/c29saWRqcy5jb20v",
        },
      ],
    },
    backend: {
      frameworks: [
        {
          name: "Express.js",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        },
        {
          name: "Django",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
        },
        {
          name: "Spring Boot",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
        },
        {
          name: "Flask",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
        },
        {
          name: "NestJS",
          image: "https://nestjs.com/img/logo-small.svg",
        },
        {
          name: "FastAPI",
          image: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
        },
      ],
    },
    aiDataScience: {
      frameworks: [
        {
          name: "TensorFlow",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
        },
        {
          name: "PyTorch",
          image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png",
        },
        {
          name: "Scikit-learn",
          image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        },
        {
          name: "Keras",
          image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
        },
        {
          name: "Pandas",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg",
        },
        {
          name: "NumPy",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
        },
      ],
    },
  };
  
  const onClick = () => {
    console.log("Button Click");
};

  export default function TechInfo() {
    return (
      <section className="techinfo lg:px-56 bg-gray-50 py-10 px-5">
     <div className="text">
         <h3 className=" text-6xl font-bold ">The tech behind our products</h3>
         <p className="text-gray-700 mt-5 text-[16px] font-semibold lg:w-[600px]">
           Our team of experts is proficient in a wide range of technologies,
           ensuring we can deliver the best possible solution for your project. We
           work with the latest tools and frameworks to create high-quality,
           scalable, and secure products that meet your requirements.
        </p>
       </div>
        <div className="techList">
          <div className="mainsection">
            <h3 className="text-xl text-gray-800 py-5" >Front End</h3>
            <div className="itemsList flex flex-wrap gap-5 justify-start">
              {webFrameworks.frontend.frameworks.map((item, index) => (
                <div
                  key={index}
                  className="hover:bg-gray-300 cursor-pointer flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-6 h-6"
                  />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mainsection mt-10">
            <h3 className="text-xl text-gray-800 py-5"> Back End</h3>
            <div className="itemsList flex flex-wrap gap-5 justify-start">
              {webFrameworks.backend.frameworks.map((item, index) => (
                <div
                  key={index}
                  className="hover:bg-gray-300 cursor-pointer flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-6 h-6"
                  />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mainsection mt-10">
            <h3 className="text-xl text-gray-800 py-5">AI/Data Science</h3>
            <div className="itemsList flex flex-wrap gap-5 justify-start">
              {webFrameworks.aiDataScience.frameworks.map((item, index) => (
                <div
                  key={index}
                  className="hover:bg-gray-300 cursor-pointer flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-6 h-6"
                  />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-10">

        <BasicButton ButtonText="MORE ABOUT OUR TECH STACK" filled={false} handleClick={onClick} />
        </div>

      </section>
    );
  }