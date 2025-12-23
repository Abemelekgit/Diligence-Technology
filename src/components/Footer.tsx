import { FiLinkedin, FiMail, FiGlobe, FiMapPin } from 'react-icons/fi';
import { content } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navLinks = ['About', 'Services', 'Partnerships', 'Contact'];

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Diligence Technologies Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="font-bold text-lg">Diligence Technologies</h3>
                <p className="text-sm text-gray-300">{content.company.motto}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading ICT solutions provider in East Africa, serving government, education, and enterprise sectors since 2011.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FiMail className="text-primary mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${content.company.contact.email}`}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {content.company.contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <FiMapPin className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">{content.company.contact.address}</span>
              </li>
              <li className="flex items-start space-x-2">
                <FiGlobe className="text-primary mt-1 flex-shrink-0" />
                <a
                  href={content.company.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {content.company.contact.website}
                </a>
              </li>
              <li>
                <a
                  href={content.company.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <FiLinkedin />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Diligence Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
