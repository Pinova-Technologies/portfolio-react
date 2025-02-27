

function NavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 bg-transparent z-10">
      <div className="flex items-center">
        <img src="/public/logo.svg"alt="Logo" className="h-15 mr-3" />
        {/* <div className="text-white text-2xl font-bold" style={{ fontFamily: "'Anta', sans-serif" }}>My Portfolio</div> */}
      </div>
      <div className="flex space-x-4">
        <a href="#home" className="text-white hover:text-gray-300" style={{ fontFamily: "'Anta', sans-serif" }}>Home</a>
        <a href="#about" className="text-white hover:text-gray-300" style={{ fontFamily: "'Anta', sans-serif" }}>About</a>
        <a href="#projects" className="text-white hover:text-gray-300" style={{ fontFamily: "'Anta', sans-serif" }}>Projects</a>
        <a href="#tools" className="text-white hover:text-gray-300" style={{ fontFamily: "'Anta', sans-serif" }}>Tools</a>
        <a href="#why-me" className="text-white hover:text-gray-300" style={{ fontFamily: "'Anta', sans-serif" }}>Why Me</a>
        <a href="#contact" className="text-white hover:text-gray-300" style={{ fontFamily: "'Anta', sans-serif" }}>Contact</a>
      </div>
    </nav>
  );
}

export default NavBar;