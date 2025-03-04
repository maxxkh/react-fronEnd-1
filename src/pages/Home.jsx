
import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import Services from '../Components/ServicesSection/Services';
import Founder from '../Components/FounderInfo/FounderInfo';
import Feature from '../Components/Features/Features';
import Awards from '../Components/Awards/Awards';
import Team from '../Components/TeamSection/Team';
import FeedbackForm from '../Components/Form/FeedbackForm';
import ContactSection from '../Components/ContactSection/ContactSection';
import Clients from '../Components/Clients/Clients';
import founderImage from '../Components/SiteAssets/ImagesAssets/cta-colors-philip-still-919x1024.png.webp'
import CarouselV2 from '../Components/Carousel';



const newsItems = [
  {
    id: '1',
    title: 'Tech Summit 2024',
    description: 'International stock indices surge amid positive economic indicators...',
    imageUrl: 'https://images.unsplash.com/photo-1738255594069-76385a01a31d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    title: 'Tech Innovation Summit 2024',
    description: 'Leaders gather to discuss future of artificial intelligence in business...',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1740708549031-fd00d8821c5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
  },
  {
    id: '2',
    title: 'Global Markets Reach New Highs',
    description: 'Leaders gather to discuss future of artificial intelligence in business...',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1736392070194-530edb275b36?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];


function Home() {
  return (
    <section className='pageBody' > 
      <HeroSection
        name='WE ARE ALTAR.IO'
        mainText ='Custom Product & Software Development Focused On Your Success'
      />

      <Services/>
      <Founder
        title='APIAX'
        description='We are very happy to work with Altar.io. The collaboration goes far beyond a standard IT service: with Altar.io we have a sparring partner that challenges us in our product decisions and is truly passionate about the results developed. The level of professionalism and dedication is exceptional in this industry and we are eager to strengthen our collaboration in the future.'
        founder='Philip Schoch – Apiax, Co-Founder'
        founderImage={founderImage}
      />
      <Feature/>
      <Team/>
      <Awards/>
      <Clients/>

      <CarouselV2/>
      <FeedbackForm/>
      <ContactSection/>
    </section>
  );
}

export default Home;