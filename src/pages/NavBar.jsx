import React from 'react';

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-11/12 mx-auto absolute top-5 flex justify-between items-center py-6 bg-transparent z-10 rounded-lg shadow-lg">
      <div className="flex items-center">
        <img src="logo.svg" alt="Logo" className="h-15 mr-3" />
        {/* <div className="text-white text-2xl font-bold" style={{ fontFamily: "'Anta', sans-serif" }}>My Portfolio</div> */}
      </div>
      <div className="flex space-x-5">
        
        <a href="#home" className="text-white anta hover:text-gray-300">Home</a>
        <a href="#about" className="text-white anta hover:text-gray-300" >About</a>
        <button onClick={() => scrollToSection('projects')} className="text-white anta hover:text-gray-300">Projects</button>
        <a href="#tools" className="text-white anta hover:text-gray-300">Tools</a>
        <button onClick={() => scrollToSection('why-me')} className="text-white anta hover:text-gray-300">Why Me</button>
        <button onClick={() => scrollToSection('contact')} className="text-white anta hover:text-gray-300">Contact</button>

      </div>
    </nav>
  );
};

export default NavBar;