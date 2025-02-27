
import Footer from './Footer'
import NavBar from './pages/NavBar'
import Projects from './pages/Projects'

function App() {

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
          <div className="relative text-left xl p-10">
            <h1
              style={{
                fontFamily: "'Anta', sans-serif",
                fontSize: '8rem',
                fontWeight: 'bold'
              }}
            >
              Humira <br /><span style={{ fontFamily: "'Anta', sans-serif" }}>Alam</span>
            </h1>
            <p className="text-lg mt-4">Detailed-oriented Frontend Developer</p>
            <p
              className="mt-6 text-gray-300 text-center font-normal"
              style={{
                fontFamily: 'Lato',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '25px'
              }}
            >
              I am a frontend developer who builds intuitive <br/>
               and efficient web interfaces with precision and independence.
              Focused on clean code and seamless user experiences, I transform ideas into bold digital solutions.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <button className="bg-[#E6D62D] text-black px-6 py-3 font-semibold rounded-md shadow-md">
                GET IN TOUCH
              </button>
              <button className="bg-gray-200 text-black px-6 py-3 font-semibold rounded-md shadow-md">
                TUTORIALS
              </button>
            </div>
          </div>
        </div>
      </div>
      <Projects/>
      <Footer />
    </>
  )
}

export default App
