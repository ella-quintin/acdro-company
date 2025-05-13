
import { useState, useEffect } from 'react';
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <nav className={`fixed top-0 w-full z-50 overflow-hidden text-white transition-all duration-300 
      ${scrolled ? "bg-gray-900/50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mt-8 mb-4 flex items-center">
            <img className='h-24 sm:h-24"' src={logo} alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <div className="relative group">
              <Link to="/" className="hover:text-gray-300" smooth >Home</Link>

            </div>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>


            <Link to="/services" className="hover:text-gray-300">Services</Link>
            <Link to="/academy" className="hover:text-gray-300">Academy</Link>
            {/* <a href="#" className="hover:text-gray-300">Impact</a> */}
            <a href="contact-us" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Auth Buttons
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">Sign in</a>
            <a href="#" className="bg-[#0792FB] hover:bg-blue-400 text-white px-4 py-1 rounded">Sign up</a>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-8 p-9 space-y-2 bg-gray-900">
          <a href="/" className="block hover:text-gray-300">Home</a>
          <a href="/#about" className="block hover:text-gray-300">About</a>
          <a href="/services" className="block hover:text-gray-300">Services</a>
          <a href="/academy" className="block hover:text-gray-300">Academy</a>
          <a href="contact-us" className="block hover:text-gray-300">Contact</a> 
        </div>
      )}
    </nav>
  );
}
