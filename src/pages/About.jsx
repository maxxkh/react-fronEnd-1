import Founder from "../Components/FounderInfo/FounderInfo";
import AboutHero from "../Components/HeroSection/AboutHero";
import FounderImages from "../Components/FounderInfo/FounderImages";
import MeetFounders from "../Components/FounderInfo/MeetFounders";
import Altoration from "../Components/Altoration/Altoration";
export default function About() {
    return (
        <section className="aboutPage">
            <AboutHero/>
            <Founder
                title="Hello we're Altar."
                description='Our DNA is made of ex-startup founders and the top talent in Product, UX/UI, Software development and Machine & Deep Learning. We came together from various backgrounds with one vision: to bring a lean, user-centric approach to product innovation and software development by completely understanding the business needs before building anything.'
                founderImage="https://altar.io/wp-content/uploads/2024/01/gallery-image-7-1024x682.jpg.webp"
            />
            <FounderImages/>
            <MeetFounders/>
            <Altoration/>
        </section>
    )
}