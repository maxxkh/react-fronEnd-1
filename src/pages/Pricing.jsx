import React from 'react'
import PricingCard from '../Components/SiteAssets/Cards/PricingCard'


const projects = [
    {
      name: "Community Management Platform",
      duration: "3 months",
      cost: "€40k",
      description: "An MVP for a Q&A platform for the beauty industry.",
    },
    {
      name: "Arts Marketplace",
      duration: "2 months",
      cost: "€18k",
      description: "Marketplace built to serve the specific needs of an Art’s niche.",
    },
    {
      name: "API Middleware Connector",
      duration: "5 months",
      cost: "€90k",
      description: "Software to seamlessly integrate several different third parties in a drag and drop interface.",
    },
    {
      name: "Proptech Cloud",
      duration: "5 months",
      cost: "€350k",
      description: "AI tool that analyses several data-points related to a certain geographic area and outputs the forward-looking value of real estate assets (by category – residential/commercial – type – compound/villa/flat – and size – 1/2/n bedrooms) in that area.",
    },
    {
      name: "Legaltech",
      duration: "2 months",
      cost: "€100k",
      description: "An MVP for a complex AI tool that analyses public rules on securities and advises front-office bankers on their sales choices towards the different client’s profiles.",
    },
    {
      name: "Social Network Mobile App",
      duration: "5 months",
      cost: "€50k",
      description: "A gamified fandom centric community where humans can engage in a closer and richer way.",
    },
    {
      name: "Massive Data Ingestion System",
      duration: "3 months",
      cost: "€160k",
      description: "A robust system constantly ingesting ~5TB of new data per day, keeping consistency and allowing immediate queries to all the data set.",
    },
    {
      name: "MAdTech Platform",
      duration: "2 months",
      cost: "€18k",
      description: "SaaS for FMCGs to create & manage integrated complex online and offline promotion campaigns, reaching each customer in an (almost) personalised way.",
    },
    {
      name: "API Middleware Connector",
      duration: "5 months",
      cost: "€60k",
      description: "Software to seamlessly integrate several different third parties in a drag and drop interface.",
    },
  ];

const Pricing = () => {
  return (
    <div>
        <PricingCard
            planName=''
            price=''
            duration=''
            description=''
        />
    </div>
  )
}

export default Pricing