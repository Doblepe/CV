import React from 'react'
import ProjectsSection from '../Components/Hero/ProjectsSection'
import HeroSection from '../Components/Hero/HeroSection'
import ContactBanner from '../Components/Contact/ContactBanner'
import AboutSection from '../Components/Hero/AboutSection'

export default function Home() {
    return (
        <>
            <HeroSection /> 
            <br />
            <AboutSection />
            <br />
            <ProjectsSection />
            <br />
            <ContactBanner />
            {/* <div id="whatsapp-icon" >
                <a href="https://api.whatsapp.com/send?phone=+34662681XXX">
                    <img src="/assets/images/WhatsApp.svg.webp" width="50" height="50" alt='whatsapp icon'/></a>
            </div> */}
        </>
    )
}
