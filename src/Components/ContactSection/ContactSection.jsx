import React from "react";

const Contact = ({ title, buttonText, locations }) => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg">
          {buttonText}
        </button>
      </div>
      
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">{location.city}</h3>
            <p className="text-sm opacity-75">{location.address}</p>
            <p className="text-sm text-pink-400 mt-2">{location.phone}</p>
            <p className="text-sm text-blue-400">{location.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Example Usage
const locationsData = [
  {
    city: "Lisbon",
    address: "R. Adriano C. de Oliveira 4A, 1600-312",
    phone: "+351 930944995",
    email: "lisbon@altar.io",
  },
  {
    city: "London",
    address: "36 Wharf Road, N1 7GR",
    phone: "+44 7802685611",
    email: "london@altar.io",
  },
  {
    city: "Milan",
    address: "Via Orti 14, 20122",
    phone: "+39 3318853562",
    email: "milan@altar.io",
  },
];

export default function ContactSection() {
  return (
    <Contact
      title="Let’s talk about your project"
      buttonText="SCHEDULE A CALL"
      locations={locationsData}
    />
  );
}
