import { useState } from 'react';

const WebsiteProjectPlans = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectPlans = [
    {
      type: 'AI Application',
      price: '$20,000 - $50,000',
      timeline: '3-6 months',
      features: ['Machine Learning Integration', 'Natural Language Processing', 'Predictive Analytics', 'Custom AI Algorithms'],
      description: 'Build cutting-edge AI applications tailored to your business needs, with advanced data processing and automation capabilities.',
      bestFor: 'Businesses looking to automate processes and leverage data-driven insights.'
    },
    {
      type: 'Blockchain Platform',
      price: '$30,000 - $80,000',
      timeline: '4-8 months',
      features: ['Smart Contracts', 'Decentralized Applications (DApps)', 'Tokenization', 'Immutable Ledger'],
      description: 'Develop secure and scalable blockchain solutions for decentralized applications, financial systems, and more.',
      bestFor: 'Startups and enterprises aiming for transparency and security in transactions.'
    },
    {
      type: 'Health App',
      price: '$15,000 - $40,000',
      timeline: '2-5 months',
      features: ['Telemedicine Integration', 'Health Tracking', 'Appointment Scheduling', 'HIPAA Compliance'],
      description: 'Create user-friendly health applications for patients and healthcare providers, with features like remote consultations and health monitoring.',
      bestFor: 'Healthcare providers and fitness enthusiasts.'
    },
    {
      type: 'Travel & Sport App',
      price: '$10,000 - $35,000',
      timeline: '2-4 months',
      features: ['GPS Integration', 'Event Booking', 'Social Sharing', 'Real-Time Updates'],
      description: 'Design engaging travel and sports apps with features like location tracking, event management, and community engagement.',
      bestFor: 'Travel agencies, sports clubs, and event organizers.'
    },
    {
      type: 'Lifestyle App',
      price: '$12,000 - $30,000',
      timeline: '2-4 months',
      features: ['Personalized Recommendations', 'Social Media Integration', 'E-commerce Support', 'User Analytics'],
      description: 'Build lifestyle apps that enhance user experiences with personalized content, social connectivity, and seamless shopping.',
      bestFor: 'Fashion, wellness, and entertainment industries.'
    },
    {
      type: 'Mining Software',
      price: '$25,000 - $60,000',
      timeline: '3-7 months',
      features: ['Resource Management', 'Data Visualization', 'Automated Reporting', 'IoT Integration'],
      description: 'Develop robust mining software for resource tracking, operational efficiency, and real-time data analysis.',
      bestFor: 'Mining companies and resource management firms.'
    }
  ];

  const handleProjectChange = (e) => {
    const selectedPlan = projectPlans.find(plan => plan.type === e.target.value);
    setSelectedProject(selectedPlan || null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 ">
      <div className="titeText py-10 w-[500px] md:hidden lg:block">
        <h1 className='text-5xl font-bold ' >Pick your type of project.</h1>
      </div>
      <select
        onChange={handleProjectChange}
        className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 shadow-sm"
      >
        <option value="" className="text-gray-400">Select a project type</option>
        {projectPlans.map((plan) => (
          <option key={plan.type} value={plan.type} className="p-2">
            {plan.type}
          </option>
        ))}
      </select>

      <div className={`my-4 mb-20  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
        ${selectedProject ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {selectedProject && (
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedProject.type}</h2>
            <p className="text-gray-600 mb-6">{selectedProject.description}</p>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  <span className="font-semibold text-gray-700">Price Range:</span>
                </div>
                <p className="text-lg text-gray-800">{selectedProject.price}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  <span className="font-semibold text-gray-700">Timeline:</span>
                </div>
                <p className="text-lg text-gray-800">{selectedProject.timeline}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                <span className="font-semibold text-gray-700">Key Features:</span>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {selectedProject.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-center bg-gray-50 p-3 rounded-lg transition-colors hover:bg-blue-50"
                  >
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                <span className="font-semibold text-gray-700">Best For:</span>
              </div>
              <p className="text-gray-700 mt-2">{selectedProject.bestFor}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebsiteProjectPlans;