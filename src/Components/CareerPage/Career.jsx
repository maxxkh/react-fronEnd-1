import React, { useState } from "react";
import { ArrowRightIcon } from "lucide-react";

import CareerHero from "./CareerHero";

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("job-details");

  return (
    <div className="min-h-[200vh] bg-[#0e0525]">

      <CareerHero/>
      {/* Hero Section */}
      <section id="ApplyForJob" className="container mx-auto py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Join Our Team</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Help entrepreneurs and business leaders build innovative products that transform their industries
        </p>
      </section>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Custom Tabs */}
        <div>
          {/* Tabs List */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              className={`px-6 py-3 rounded-lg text-lg font-medium ${
                activeTab === "job-details"
                  ? "bg-pink-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("job-details")}
            >
              Job Details
            </button>
            <button
              className={`px-6 py-3 rounded-lg text-lg font-medium ${
                activeTab === "application"
                  ? "bg-pink-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("application")}
            >
              Application Form
            </button>
          </div>

          {/* Tabs Content */}
          <div>
            {activeTab === "job-details" && (
              <div className="space-y-8">
                {/* Job Details Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Job Details */}
                  <div className="lg:col-span-2">
                    <div className="p-8 bg-[#1a1035] border-none text-white rounded-lg shadow-lg">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="bg-pink-600 text-white text-xs px-3 py-1 rounded-full">ENGINEERING</span>
                        <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">MULTIPLE LOCATIONS</span>
                        <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">FULLY REMOTE</span>
                      </div>

                      <h2 className="text-3xl font-bold mb-2">Lead Fullstack Developer (Node.JS / Angular)</h2>
                      <p className="text-gray-300 mb-6">
                        8+y Node, Angular/React, Mongo/PostgreSQL, TailwindsCSS, Unit Tests, Python/GO, GCP/AWS.
                        Portugal-based, remote first, 54-58k Euros
                      </p>

                      <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition-colors">
                        Apply for this job <ArrowRightIcon className="ml-2 h-4 w-4 inline-block" />
                      </button>

                      {/* Additional Content to Expand Height */}
                      <div className="mt-8 space-y-6">
                        <h3 className="text-2xl font-bold">About the Role</h3>
                        <p className="text-gray-300">
                          As a Lead Fullstack Developer, you will be responsible for designing, developing, and maintaining web applications. You will work closely with cross-functional teams to deliver high-quality software solutions.
                        </p>

                        <h3 className="text-2xl font-bold">Responsibilities</h3>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                          <li>Develop and maintain web applications using Node.js and Angular.</li>
                          <li>Collaborate with designers and product managers to implement new features.</li>
                          <li>Write clean, maintainable, and efficient code.</li>
                          <li>Optimize applications for maximum speed and scalability.</li>
                          <li>Mentor junior developers and conduct code reviews.</li>
                        </ul>

                        <h3 className="text-2xl font-bold">Requirements</h3>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                          <li>8+ years of experience in web development.</li>
                          <li>Proficiency in JavaScript, Node.js, and Angular.</li>
                          <li>Experience with databases like MongoDB and PostgreSQL.</li>
                          <li>Strong understanding of RESTful APIs and microservices architecture.</li>
                          <li>Excellent problem-solving and communication skills.</li>
                        </ul>

                        <h3 className="text-2xl font-bold">Benefits</h3>
                        <ul className="list-disc pl-6 text-gray-300 space-y-2">
                          <li>Competitive salary and performance bonuses.</li>
                          <li>Flexible working hours and remote work options.</li>
                          <li>Health insurance and wellness programs.</li>
                          <li>Professional development opportunities.</li>
                          <li>Team-building events and company retreats.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div>
                    <div className="p-6 bg-[#1a1035] border-none text-white rounded-lg shadow-lg mb-6">
                      <h3 className="text-xl font-bold mb-4">Job Details</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-gray-400 text-sm">Department</p>
                          <p className="text-white">Engineering</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Locations</p>
                          <p className="text-white">Multiple locations</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Remote status</p>
                          <p className="text-white">Fully Remote</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Yearly salary</p>
                          <p className="text-white">€54,000 - €58,000</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Employment type</p>
                          <p className="text-white">Full-time</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-[#1a1035] border-none text-white rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold mb-4">Available Positions</h3>
                      <div className="space-y-4">
                        <div className="p-4 border border-gray-700 rounded-lg hover:border-pink-500 cursor-pointer transition-all">
                          <div className="flex items-center space-x-2 mb-2 text-xs">
                            <span className="text-pink-500">Engineering</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-400">Multiple locations</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-400">Fully Remote</span>
                          </div>
                          <h4 className="font-bold">Fullstack Developer (Node.JS / Angular)</h4>
                        </div>

                        <div className="p-4 border border-gray-700 rounded-lg hover:border-pink-500 cursor-pointer transition-all">
                          <div className="flex items-center space-x-2 mb-2 text-xs">
                            <span className="text-pink-500">Engineering</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-400">Multiple locations</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-400">Fully Remote</span>
                          </div>
                          <h4 className="font-bold">Senior Fullstack Developer (Node.JS / Angular)</h4>
                        </div>

                        <div className="p-4 border border-gray-700 rounded-lg hover:border-pink-500 cursor-pointer transition-all">
                          <div className="flex items-center space-x-2 mb-2 text-xs">
                            <span className="text-pink-500">Engineering</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-400">Multiple locations</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-400">Fully Remote</span>
                          </div>
                          <h4 className="font-bold">Backend Developer & Data Specialist</h4>
                        </div>

                        <button className="w-full px-4 py-2 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-500 hover:text-white transition-colors">
                          More jobs
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "application" && (
              <div className="space-y-8">
                {/* Application Form Content */}
                <div  className="p-8 bg-[#1a1035] border-none text-white rounded-lg shadow-lg">
                  <h2 className="text-3xl font-bold mb-6">Apply for this job</h2>

                  <form className="space-y-6">
                    <div>
                      <label className="block text-white mb-2">Why would you like to join Altar?*</label>
                      <textarea
                        placeholder="Type an answer…"
                        className="w-full px-4 py-2 bg-[#2a1f45] border border-gray-700 rounded-md text-white focus:outline-none focus:border-pink-500"
                        rows={4}
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2">What are your salary expectations? (EUR - annual/gross)*</label>
                      <input
                        type="number"
                        placeholder="Type a number…"
                        className="w-full px-4 py-2 bg-[#2a1f45] border border-gray-700 rounded-md text-white focus:outline-none focus:border-pink-500"
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2">Have you ever applied for a job at Altar.io?*</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-pink-600 rounded focus:ring-pink-500 border-gray-700"
                          />
                          <span className="text-white">Yes</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-pink-600 rounded focus:ring-pink-500 border-gray-700"
                          />
                          <span className="text-white">No</span>
                        </label>
                      </div>
                    </div>

                    {/* Additional Form Fields */}
                    <div>
                      <label className="block text-white mb-2">Upload CV*</label>
                      <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                        <p className="text-gray-400">Drop your file or upload</p>
                        <input type="file" className="hidden" id="cv-upload" />
                        <label
                          htmlFor="cv-upload"
                          className="mt-2 inline-block bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md cursor-pointer"
                        >
                          Choose file
                        </label>
                        <p className="text-gray-400 mt-2">No file chosen</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white mb-2">Additional files</label>
                      <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                        <p className="text-gray-400">Drop your file or upload</p>
                        <input type="file" className="hidden" id="additional-upload" />
                        <label
                          htmlFor="additional-upload"
                          className="mt-2 inline-block bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md cursor-pointer"
                        >
                          Choose file
                        </label>
                        <p className="text-gray-400 mt-2">No file chosen</p>
                      </div>
                    </div>

                    <button className="w-full bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition-colors">
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0418] py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Footer content */}
          </div>
        </div>
      </footer>
    </div>
  );
}