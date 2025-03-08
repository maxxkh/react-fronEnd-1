import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const CareerHero = () => {
  return (
    <div>
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-[#0e0525] to-[#2a0a5e] text-white relative overflow-hidden">
        {/* Animated Background */}
        <div
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] bg-cover opacity-10 animate-moveBackground"
        ></div>

        <div className="container mx-auto text-center px-4 relative z-10">
          {/* Tags */}
          <div className="flex justify-center space-x-2 mb-6">
            <span className="bg-pink-600 text-white text-xs px-3 py-1 rounded-full hover:scale-105 transition-transform">
              ENGINEERING
            </span>
            <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full hover:scale-105 transition-transform">
              MULTIPLE LOCATIONS
            </span>
            <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full hover:scale-105 transition-transform">
              FULLY REMOTE
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Lead Fullstack Developer <br />
            <span className="text-pink-600">(Node.JS / Angular)</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fadeIn delay-100">
            8+ years of experience with Node, Angular/React, Mongo/PostgreSQL, TailwindCSS, Unit Tests, Python/GO, and GCP/AWS. Portugal-based, remote-first, 54-58k Euros.
          </p>

          {/* Apply Button */}
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center mx-auto animate-fadeIn delay-200">
            <a href="#ApplyForJob">Apply for this job</a>  <ArrowRightIcon className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-x-1" />
          </button>


          {/* Additional CTA */}
          <p className="mt-4 text-gray-400 text-sm animate-fadeIn delay-300">
            Not sure?{' '}
            <a href="#learn-more" className="text-pink-600 hover:underline">
              Learn more about the role
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default CareerHero;