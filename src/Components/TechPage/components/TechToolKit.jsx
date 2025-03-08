import React from "react";

export default function TechToolkit() {
  const techCategories = [
    {
      title: "FRONT-END",
      items: ["Angular", "React", "Vue", "Next.js", "Single-Spa", "Alpine.js", "Flutter"],
      icon: "", // Emoji or icon for front-end
    },
    {
      title: "BACK-END & DATABASES",
      items: ["Node.js", "Express.js", "NestJS", "Python", "FastAPI", "MongoDB", "PostgreSQL", "Redis", "AWS", "Cloudflare", "RabbitMQ"],
      icon: "", // Emoji or icon for back-end
    },
    {
      title: "INFRASTRUCTURE",
      items: ["Amazon EKS", "Google Cloud", "AWS", "Microsoft Azure", "Digital Ocean", "Kubernetes", "Red Hat", "Cloudflare"],
      icon: "", // Emoji or icon for infrastructure
    },
    {
      title: "AI DATA FRAMEWORKS",
      items: ["LlammaIndex", "AutoGen", "Langchain", "Hugging Face Transformers", "DeepSpeed", "AutoGPT", "Semantic Kernel", "Haystack", "PrivateGPT"],
      icon: "", // Emoji or icon for AI
    },
  ];

  return (
    <section id="TechStack" className="bg-white py-16 pt-36">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Our tech toolkit at a glance
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We dive deep into your project’s needs to ensure we select the best tools and frameworks for your product. Most of the projects we work on fall into the following tech stack.
        </p>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-pink-600">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 hover:text-pink-400 transition-colors duration-200 cursor-pointer flex items-center"
                  >
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}