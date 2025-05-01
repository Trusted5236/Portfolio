
import { Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReaveal from './components/ScrollReaveal';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Trust Agbata
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/Trusted5236" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/agbata-trust?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:trustagbata@gmail.com" className="hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
       <ScrollReaveal> <Hero /></ScrollReaveal>
        <ScrollReaveal> <About /></ScrollReaveal> 
        <ScrollReaveal> <Skills /></ScrollReaveal>
        <ScrollReaveal> <Projects /></ScrollReaveal>
        <ScrollReaveal> <Contact /></ScrollReaveal>
      </main>

      <Footer />
    </div>
  );
}

export default App;