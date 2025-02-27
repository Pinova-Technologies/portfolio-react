

const Footer = () => {
  return (
    <div className="bg-[#292929] w-full min-h-9/10 flex justify-around" >
      <div className=" shadow-md rounded-lg" style={{ backgroundColor: '#292929' }}>
        <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus: focus:border-indigo-500 bg-[#292929] text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[#292929] text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[#292929]text-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#292929] text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
        <div className="mt-6 text-right">
          <h3 className="text-lg font-medium text-gray-300">Social Media</h3>
          <div className="flex justify-end space-x-4 mt-2">
            {/* Add your social media icons/links here */}
            <a href="#" className="text-gray-400 hover:text-indigo-600">
              {/* Example: Twitter icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            {/* Add more social media icons/links as needed */}
          </div>
        </div>
      </div>

      <div>
        <h1>
          jhasjdfh
        </h1>
      </div>
    </div>
  );
};

export default Footer;