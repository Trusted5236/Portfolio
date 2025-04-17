import { useState } from 'react';
import { ExternalLink, Github, Palette, Code2 } from 'lucide-react';
import img1 from '../assets/Public/MacBook Pro 16_ - 6 (1).png';
import img2 from '../assets/Public/Image2.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const frontendProjects = [
    {
      title:"Factory Website",
      description: "A modern, responsive website built for a manufacturing company, showcasing their services, vision, and client success through clean design and interactive features.",
      image: img2,
      technologies: ["React", "Tailwind CSS", "Redux"],
      liveLink: "https://factory-6jf4.vercel.app/",
      githubLink: "https://github.com/Trusted5236/factory.git"
    },
    {
      title: "Pedmonie ",
      description: "Pedmonie is a simple and secure payment platform designed for businesses. It streamlines transactions, making payments fast and hassle-free.",
      image: img1,
      technologies: ["React", "Javascript", "Chakra UI"],
      liveLink: "https://www.pedmonie.com.ng",
      githubLink: "https://github.com/InternPulse/pedmonie-frontend"
    },
    {
      title: "Portfolio Website",
      description: "A custom portfolio website showcasing my work and skills, built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            My Work
          </span>
        </h2>

        {/* Project Category Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('frontend')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
              activeTab === 'frontend'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
            }`}
          >
            <Code2 size={20} />
            Frontend Development
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
              activeTab === 'design'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
            }`}
          >
            <Palette size={20} />
            UI/UX Design
          </button>
        </div>

        {/* Frontend Projects */}
        <div className={`transition-all duration-500 ${activeTab === 'frontend' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendProjects.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Projects - Coming Soon */}
        <div className={`transition-all duration-500 ${activeTab === 'design' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="relative rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-16">
            <div className="text-center">
              <Palette size={64} className="mx-auto mb-6 text-purple-400" />
              <h3 className="text-3xl font-bold mb-4">UI/UX Design Projects</h3>
              <p className="text-2xl text-gray-300 mb-4">Coming Soon</p>
              <p className="text-gray-400 max-w-2xl mx-auto">
                I'm currently curating my best design work to showcase my UI/UX projects. 
                Check back soon to see my design portfolio featuring web and mobile applications, 
                brand identities, and user experience case studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;