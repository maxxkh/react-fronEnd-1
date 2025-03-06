import React from 'react';
import FounderCard from './cards/FounderCard';


const teamMembers2 = [

  {
    imgURL: 'https://altar.io/wp-content/uploads/2024/01/samanta-carvalho-awesome.jpg',
    name: 'Samanta Carvalho',
    title: 'Product Manager',
  },
  {
    imgURL: 'https://altar.io/wp-content/uploads/2024/01/mariana-almeida-awesome.jpg',
    name: 'Mariana Almeida',
    title: 'Product Manager',
  },
  {
    imgURL: 'https://altar.io/wp-content/uploads/2024/01/simon-tadeu-awesome.jpg',
    name: 'Simon Tadeu',
    title: 'Product Manager',
  },
  {
    imgURL: 'https://altar.io/wp-content/uploads/2024/01/lilla.horvath-awesome.jpg',
    name: 'Lilla Horváth',
    title: 'Product Manager',
  },
  {
    imgURL: 'https://altar.io/wp-content/uploads/2024/01/alexandra-morodo-awesome.jpg',
    name: 'Alexandra Morodo',
    title: 'UX Designer',
  },
];

  const teamMembers = [
    {
      imgURL: 'https://altar.io/wp-content/uploads/2024/01/ana-paris-awesome.jpg',
      name: 'Ana Páris',
      title: 'Head of Admin',
    },
    {
      imgURL: 'https://altar.io/wp-content/uploads/2024/01/joao-amaral-awesome.jpg',
      name: 'João Amaral',
      title: 'Chief of Staff',
    },
    {
      imgURL: 'https://altar.io/wp-content/uploads/2024/01/luis-matos-awesome.jpg',
      name: 'Luís Matos',
      title: 'Operations Officer',
    },
    {
      imgURL: 'https://altar.io/wp-content/uploads/2024/01/francisco-pranto.png',
      name: 'Francisco Pranto',
      title: 'Junior Admin/Operations Manager',
    },

  ];

const MeetFounders = () => {
  // Founders data
  const founders = [
    {
      imgURL: 'https://altar.io/wp-content/uploads/2024/01/daniel-castro-awesome.jpg',
      name: 'Daniel de Castro Ruivo',
      title: 'Co-Founder & CEO',
    },
    {
      imgURL: 'https://altar.io/wp-content/uploads/2024/01/andre-lopes-awesome.jpg',
      name: 'André Lopes',
      title: 'Co-Founder',
    },
    {
      imgURL: 'https://altar.io/wp-content/uploads/2024/01/paolo-dotta-awesome.jpg',
      name: 'Paolo Dotta',
      title: 'Co-Founder',
    },
    {
      imgURL: 'https://altar.io/wp-content/uploads/2024/01/joao-ribeiro.png',
      name: 'João Ribeiro',
      title: 'Co-Founder',
    },
    {
      imgURL: 'https://altar.io/wp-content/uploads/2024/01/andre-pinto-awesome.jpg',
      name: 'André Pinto',
      title: 'Partner & VP of Front-End',
    },
  ];

  return (
    <div className="meet-founders lg:mx-56">
      <div className="text px-5 md:w-[70%] lg:w-[50%] lg:mt-32 mt-10">
        <h1 className="text-4xl md: md:text-5xl lg:text-6xl font-bold py-5">Meet the Founders</h1>
        <p className="font-semibold text-gray-600 mb-10">
          Our founding team started their journeys in the corporate world. They then moved on to build their own startups, before coming together to form Altar.io. They studied lean product development through building startups from the ground up with very few resources. This is why, when you build a product with us, it will always be streamlined to the most important features for your user.
        </p>
      </div>
      <div className="imgArea flex flex-wrap justify-center gap-5 md:flex md:flex-wrap md:justify-start">
        {founders.map((founder, index) => (
          <FounderCard
            key={index}
            imgURL={founder.imgURL}
            name={founder.name}
            title={founder.title}
          />
        ))}
      </div>
      <div className="meetTeam px-5 md:w-[70%] mt-10 lg:w-[60%] lg:mt-32">
        <h3 className='text-4xl font-bold my-5 lg:text-6xl lg:inline '>Meet the Team</h3>
        <h4 className='bg-pink-200 px-5 py-2 rounded-2xl inline-block md:mx-0 lg:mx-5 lg:my-5 align-super text-red-600 font-semibold'>WE’RE ALL BASED IN PORTUGAL 🇵🇹</h4>
        <p className='mt-5 font-semibold text-gray-600'>We have a rigorous screening process to identify the best talent, from inception, UX/UI design, and development. We are always on the lookout for great problem solvers with passion and drive; these are the types of people we want to work with and learn from ourselves.</p>
      </div>
      <div className="secondTeam">
      <h3 className="text-2xl font-semibold px-5 py-10">Operations and Management</h3>

      <div className="meet-team ">
      <div className="imgArea flex flex-wrap justify-center md:flex md:flex-wrap md:justify-start  gap-5 ">
        {teamMembers.map((member, index) => (
          <FounderCard
            key={index}
            imgURL={member.imgURL}
            name={member.name}
            title={member.title}
          />
        ))}
      </div>
    </div>

   </div>
   <div className="secondTeam">
      <h3 className="text-2xl font-semibold px-5 py-10">Product</h3>

      <div className="meet-team ">
      <div className="imgArea flex flex-wrap justify-center md:flex md:flex-wrap md:justify-start  gap-5 ">
        {teamMembers2.map((member, index) => (
          <FounderCard
            key={index}
            imgURL={member.imgURL}
            name={member.name}
            title={member.title}
          />
        ))}
      </div>
    </div>

   </div>
      </div>

  );
};

export default MeetFounders;