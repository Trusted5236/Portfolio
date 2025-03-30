
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:trustagbata@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail size={24} />
            </a>
            
            <div>
              <a
                href="tel:+2347036529366"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Phone size={24} />
              </a>
            
            </div>
          </div>
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Trust Agbata, Lagos Nigeria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;