import { useRef } from 'react';
import Footer from './Footer';
import NavBar from './pages/NavBar';
import Projects from './pages/Projects';
import WhyWork from './pages/WhyWork';
import { FaArrowDown } from 'react-icons/fa';

function App() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div>
        {/* <Button variant="default">Ghost</Button> */}
        <div className="relative w-full min-h-screen flex justify-center items-center text-white font-anta">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/public/m1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* nav start */}
          <NavBar />
          {/* end nav */}

          {/* Overlay for readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

          {/* Content */}
          <div id='about' className="relative xl py-10 mt-30 lg:mt-20 w-11/12 mx-auto">
            <h1 className='anta text-7xl lg:text-[128px] font-bold leading-[1]'>
              Humira <br /><span>Alam</span>
            </h1>
            <p className="text-xl lg:text-4xl mt-4">Detailed-oriented <br /> Frontend Developer</p>
            <div className='flex flex-col md:flex-row justify-between items-center gap-5 lg:gap-20 mt-10 w-full'>
              <span className='w-full md:w-1/6 lg:w-2/6 hidden md:block'>
                <FaArrowDown className='text-7xl' />
                </span>
              <p
              className="text-gray-300 lato text-lg leading-6 font-normal w-full md:w-3/6 lg:w-2/6 text-justify"
              
            >
              I am a frontend developer who builds intuitive 
              and efficient web interfaces with precision and independence.
              Focused on clean code and seamless user experiences, I transform ideas into bold digital solutions.
            </p>
            <div className="space-y-4 w-full md:w-2/6 flex flex-col items-start">
              <button
                className="bg-[#E6D62D] text-black px-6 py-3 font-semibold rounded-md shadow-md"
                onClick={scrollToFooter}
              >
                GET IN TOUCH
              </button>
              <a href="/public/CV-Humira-Dev.pdf" download className="bg-gray-200 text-black px-6 py-3 font-semibold rounded-md shadow-md">
                RESUME
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <WhyWork />
      <Footer ref={footerRef} />
    </>
  );
}

export default App;
