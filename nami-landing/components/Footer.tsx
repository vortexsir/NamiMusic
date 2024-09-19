import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 mt-4 rounded-xl border border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-thin">Nami Music</h1>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
            <a href="#" className="hover:text-gray-400">
              Services
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Nami Music. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
