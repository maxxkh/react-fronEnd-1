import React from "react";
import Services from "../Components/ServicesSection/Services";
import Founder from "../Components/FounderInfo/FounderInfo";
import Awards from "../Components/Awards/Awards";
import FeedbackForm from "../Components/Form/FeedbackForm";
import ContactSection from "../Components/ContactSection/ContactSection";
import ServicesHero from "../Components/HeroSection/ServicesHero";
import Qualities from "../Components/Qualities/Qualities";
import AccordionExpandIcon from "../Components/Accordion/Accordion";
import ClientInfo from "../Components/Clients/ClientInfo";
import TechInfo from "../Components/Tech/TechInfo";

import founderImage from '../Components/SiteAssets/ImagesAssets/cta-colors-philip-still-919x1024.png.webp'
import CarouselV2 from "../Components/Carousel";

export default function ServicesPage() {
    return (
        <section className="servicesPage ">
            <ServicesHero/>
            <Founder
            title="How we work"
            description='We believe there are no excuses to build anything less than great technology products. To achieve this, we combine a lean approach with tried-and-tested frameworks and our extensive experience in creating products that successfully hit the market. Our ethos mirrors the dynamics of an in-house team, ensuring a partnership rooted in complete transparency, alignment with your objectives, and a shared business vision. You’ll be working hand-in-hand with our committed, highly efficient team of in-house specialists.'
            founderImage="https://altar.io/wp-content/uploads/2024/01/gallery-image-7-1024x682.jpg.webp"
            />
            <Services/>
            <Qualities/>
            <AccordionExpandIcon/>
            <ClientInfo/>
            <CarouselV2/>
            <Awards/>
            <TechInfo/>
            <Founder
                title='APIAX'
                description='We are very happy to work with Altar.io. The collaboration goes far beyond a standard IT service: with Altar.io we have a sparring partner that challenges us in our product decisions and is truly passionate about the results developed. The level of professionalism and dedication is exceptional in this industry and we are eager to strengthen our collaboration in the future.'
                founder='Philip Schoch – Apiax, Co-Founder'
                founderImage={founderImage}
            />
            <FeedbackForm/>
            <ContactSection/>
        </section>
    );
}