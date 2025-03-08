import React from "react";
import HeroSection from "./components/TechHero"; // Adjust the import path as needed
import TechToolkit from "./components/TechToolKit"; // Adjust the import path as needed
import CarouselV2 from "../Carousel";
import FeedbackForm from '../Form/FeedbackForm'
import TechInfo from '../Tech/TechInfo'
import ContactSection from '../ContactSection/ContactSection'

export default function Tech() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <HeroSection />
      {/* Tech Toolkit Section */}
      <TechInfo/>
      <TechToolkit />
      {/* Rest of the Page */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What we excel at</h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Full-Stack Applications */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Full-Stack Applications"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-4 text-pink-600">Full-Stack Applications</h3>
              <p className="text-gray-600">
                When you need a comprehensive full-stack web application, we handle everything from Kubernetes Cluster setup to frontend and backend development, including advanced features like micro-services and security assessment.
              </p>
            </div>

            {/* Artificial Intelligence */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Artificial Intelligence"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-4 text-pink-600">Artificial Intelligence</h3>
              <p className="text-gray-600">
                We develop sophisticated algorithms and integrate machine learning techniques. This process includes data gathering, model training, and deploying intelligent systems, focusing on creating smart, adaptive solutions that meet specific AI challenges.
              </p>
            </div>

            {/* Data-Intensive Applications */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Data-Intensive Applications"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-4 text-pink-600">Data-Intensive Applications</h3>
              <p className="text-gray-600">
                We adeptly manage large-scale databases and integrate cutting-edge analytics and machine learning, ensuring your application is both reliable and scalable to meet your most challenging data needs.
              </p>
            </div>

            {/* Mobile Applications */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Mobile Applications"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-4 text-pink-600">Mobile Applications (iOS & Android)</h3>
              <p className="text-gray-600">
                We design user-friendly interfaces, ensure optimal performance, and integrate cross-platform compatibility. We focus on crafting engaging, responsive mobile experiences, tailored to meet diverse user needs and device specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">The projects we’ve brought to life</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Cards */}
          {[
            {
              title: "E-Commerce Platform",
              description: "A scalable e-commerce platform built with React and Node.js.",
              image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "AI Chatbot",
              description: "An intelligent chatbot powered by NLP and machine learning.",
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Data Analytics Dashboard",
              description: "A real-time data analytics dashboard for business insights.",
              image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            },
          ].map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-4 text-pink-600">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
        <CarouselV2/>
        <FeedbackForm/>
      </section>
        <ContactSection/>
    </div>
  );
}