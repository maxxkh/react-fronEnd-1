import React from "react";
import Services from "../Components/ServicesSection/Services";
import Founder from "../Components/FounderInfo/FounderInfo";
import Awards from "../Components/Awards/Awards";
import FeedbackForm from "../Components/Form/FeedbackForm";
import ContactSection from "../Components/ContactSection/ContactSection";
import ServicesHero from "../Components/HeroSection/ServicesHero";

export default function ServicesPage() {
    return (
        <section className="servicesPage px-5">
            <ServicesHero/>
            <Services/>
            <Founder
            title="How we work"
            description='We believe there are no excuses to build anything less than great technology products. The core of our operations lies in helping you craft and launch tailored, innovative solutions designed to delight your users. To achieve this, we combine a lean approach with tried-and-tested frameworks and our extensive experience in creating products that successfully hit the market. This blend of agility, knowledge, and practical know-how sets the stage for our collaboration. Our ethos mirrors the dynamics of an in-house team, ensuring a partnership rooted in complete transparency, alignment with your objectives, and a shared business vision. You’ll be working hand-in-hand with our committed, highly efficient team of in-house specialists.'
            // founder="John Doe"
            founderImage="https://altar.io/wp-content/uploads/2024/01/gallery-image-7-1024x682.jpg.webp"
            />
            <Awards/>
            <FeedbackForm/>
            <ContactSection/>
        </section>
    );
}