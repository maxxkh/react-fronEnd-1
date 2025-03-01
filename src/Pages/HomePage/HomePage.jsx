
import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Services from '../../Components/ServicesSection/Services';
import Founder from '../../Components/FounderInfo/FounderInfo';
import Feature from '../../Components/Features/Features';
import Awards from '../../Components/Awards/Awards';
import Team from '../../Components/TeamSection/Team';
import NewsCarousel from '../../Components/Carousel/Carousel';
import FeedbackForm from '../../Components/Form/FeedbackForm';
import ContactSection from '../../Components/ContactSection/ContactSection';
import Clients from '../../Components/Clients/Clients';




const newsItems = [
  {
    id: '1',
    title: 'Global Markets Reach New Highs',
    description: 'International stock indices surge amid positive economic indicators...',
    imageUrl: '',
  },
  {
    id: '2',
    title: 'Tech Innovation Summit 2024',
    description: 'Leaders gather to discuss future of artificial intelligence in business...',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1740708549031-fd00d8821c5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
  },
];





function HomePage() {
  return (
    <>

    <HeroSection
      name='WE ARE ALTAR.IO'
      mainText ='Custom Product & Software Development Focused On Your Success'
    />
    <Services/>
    <Founder />
    <Feature/>
    <Team/>
    <Awards/>
    <Clients/>
    <NewsCarousel
      items={newsItems}
      autoPlay={true}
      interval={6000}
    />
    <FeedbackForm/>
    <ContactSection/>
    </>
  );
}

export default HomePage;