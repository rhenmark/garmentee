import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight 
} from 'lucide-react';
import { services } from '@/constants/services';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Garmentee Clothing Enterprise</h3>
            <p className="text-sm leading-relaxed">
              Delivering excellence in service and innovation since 1990. 
              We{"'"}re committed to providing the best solutions for our customers.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Products', 'Blog', 'Contact Us', 'Careers', 'Privacy Policy', 'Terms of Service']
                .map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm flex items-center hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {link}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services
                .map((service) => (
                  <li key={service.title}>
                    <a 
                      href="#" 
                      className="text-sm flex items-center hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {service.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1" />
                <p className="text-sm">
                  123 Business Street
                  <br />
                  Suite 100
                  <br />
                  City, State 12345
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <p className="text-sm">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <p className="text-sm">contact@company.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest news and updates</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {year} Garmentee Clothing Enterprise Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;