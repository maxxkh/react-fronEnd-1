import LogoImage from './Components/SiteAssets/ImagesAssets/altar-logo__full__transparent-color-dark.svg'
import HeroSection from './Components/HeroSection/HeroSection';
import Services from './Components/ServicesSection/Services';
import Founder from './Components/FounderInfo/FounderInfo';
import Header from './Components/Header/Header';
import Feature from './Components/Features/Features';
import Awards from './Components/Awards/Awards';
import Team from './Components/TeamSection/Team';
import Footer from './Components/Footer/Footer';
import NewsCarousel from './Components/Carousel/Carousel';

import FeedbackForm from '../src/Components/Form/FeedbackForm';
import ContactSection from '../src/Components/ContactSection/ContactSection';
import './App.css';
import Clients from './Components/Clients/Clients';



// const images = [
//   "https://source.unsplash.com/800x600/?car",
//   "https://source.unsplash.com/800x600/?nature",
//   "https://source.unsplash.com/800x600/?technology",
//   "https://source.unsplash.com/800x600/?architecture",
// ];



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
  // Add more news items
];





function App() {
  return (
    <>
    <Header
      imgURL={LogoImage}

    />
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
    <Footer/>
    </>
  );
}

export default App;