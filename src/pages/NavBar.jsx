import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // close menu on click (for mobile)
    }
  };

  return (
    <nav className="w-11/12 mx-auto absolute top-5 left-0 right-0 flex flex-col md:flex-row gap-4 justify-between items-center py-6 bg-transparent z-10 rounded-lg shadow-lg">
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="flex items-center">
          <img src="logo.svg" alt="Logo" className="h-12 mr-3" />
          {/* <div className="text-white text-2xl font-bold" style={{ fontFamily: "'Anta', sans-serif" }}>My Portfolio</div> */}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-5">
        <button onClick={() => scrollToSection('about')} className="text-white anta hover:text-gray-300">About</button>
        <button onClick={() => scrollToSection('projects')} className="text-white anta hover:text-gray-300">Projects</button>
        <button onClick={() => scrollToSection('tools')} className="text-white anta hover:text-gray-300">Tools</button>
        <button onClick={() => scrollToSection('why-me')} className="text-white anta hover:text-gray-300">Why Me</button>
        <button onClick={() => scrollToSection('contact')} className="text-white anta hover:text-gray-300">Contact</button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 w-full items-start bg-black bg-opacity-70 p-4 rounded-md">
          <button onClick={() => scrollToSection('about')} className="text-white anta hover:text-gray-300 w-full text-left">About</button>
          <button onClick={() => scrollToSection('projects')} className="text-white anta hover:text-gray-300 w-full text-left">Projects</button>
          <button onClick={() => scrollToSection('tools')} className="text-white anta hover:text-gray-300 w-full text-left">Tools</button>
          <button onClick={() => scrollToSection('why-me')} className="text-white anta hover:text-gray-300 w-full text-left">Why Me</button>
          <button onClick={() => scrollToSection('contact')} className="text-white anta hover:text-gray-300 w-full text-left">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
