import React from 'react';
import { Bus, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Bus className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">SmartBus Buddy</span>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>Built for Smart Cities & Infrastructure Ideathon</p>
            <p className="mt-1">smartbusbuddy@prototype.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col items-center">
          <p className="text-gray-500 text-sm mb-2">We make public transport smarter — one bus stop at a time.</p>
          <div className="flex items-center text-gray-600 text-xs mt-2">
            <span>Made with</span>
            <Heart className="w-3 h-3 mx-1 text-red-500 fill-current" />
            <span>by Students</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;