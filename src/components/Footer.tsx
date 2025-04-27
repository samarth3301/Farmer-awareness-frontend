import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-400 mr-2" />
              <span className="text-xl font-bold">AgriSmart</span>
            </div>
            <p className="text-green-200 mb-4">
              Helping Indian farmers make informed decisions about pesticides and fertilizers for sustainable agriculture.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/pesticide-effects" className="text-green-200 hover:text-white transition-colors">Effects of Pesticides</Link></li>
              <li><Link to="/ph-testing" className="text-green-200 hover:text-white transition-colors">pH Testing</Link></li>
              <li><Link to="/fertilizer" className="text-green-200 hover:text-white transition-colors">Fertilizer</Link></li>
              <li><Link to="/expert-help" className="text-green-200 hover:text-white transition-colors">Expert Help</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-300">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Agricultural Guides</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Govt. Schemes</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Farming Tips</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-300">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span className="text-green-200">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span className="text-green-200">info@agrismart.in</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span className="text-green-200">123 Agricultural Research Center, New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-6">
          <p className="text-center text-green-300">
            &copy; {currentYear} AgriSmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;