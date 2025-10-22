import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#03152b] text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
       
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4">
        
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/assets/logo.png" alt="Hero.io Logo" className="w-8 h-8 mr-2" />
            <span className="font-bold text-white text-lg">HERO.IO</span>
          </div>
          <div className="text-right">
            <span className="block font-medium mb-2">Social Links</span>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="#" aria-label="X (Twitter)">
                <img src="/icons/x-icon.png" alt="X icon" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src="/icons/linkedin-icon.png" alt="LinkedIn icon" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src="/icons/facebook-icon.png" alt="Facebook icon" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-4">
          Copyright © 2025 - All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
