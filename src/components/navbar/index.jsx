
import { useState, useEffect } from 'react';
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAcademyOpen, setMobileAcademyOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (mobileOpen) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
        setMobileAcademyOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);



  return (
    <nav className={`fixed top-0 w-full z-50 text-white transition-all duration-300 
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
              <Link to="/" className="hover:text-gray-300" >Home</Link>

            </div>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>


            <div className="relative group">
              <button className="hover:text-gray-300 flex items-center gap-1">
                Services ▾
              </button>

              <div className="absolute top-full left-0 mt-2 w-56 md:w-80 bg-gray-500/50 backdrop-blur-md rounded-xl shadow-xl text-sm text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300 z-50">
                <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto scroll-smooth">
                  <div>
                    <ul className="space-y-1 list-disc list-inside text-gray-200 text-xs">
                      <li>Digital Policy & Strategic Advisory Services</li>
                      <li>Technical Solutions</li>
                      <li>Capacity Building & Training</li>
                      {/* <li>Cyber Diplomacy & Public-Private Models</li> */}
                    </ul>
                  </div>
                  <hr className="border-white/20" />
                  <div>
                    {/* <h4 className="font-semibold text-[#0792FB] mb-1">Technical Solutions</h4>
                    <ul className="space-y-1 list-disc list-inside text-gray-200 text-xs">
                      <li>Risk Assessment & VAPT</li>
                      <li>Incident Response & Forensics</li>
                      <li>GRC, IAM & SOC Setup</li>
                      <li>Cyber Intel, Awareness & BC/DR</li>
                    </ul> */}
                  </div>
                  <Link
                    to="/services"
                    className="block mt-4 text-left text-[#0792FB] font-semibold hover:underline"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-gray-300 flex items-center gap-1">
                Academy ▾
              </button>

              <div className="absolute top-full left-0 mt-2 w-56 md:w-56 bg-gray-500/50 backdrop-blur-md rounded-xl shadow-xl text-sm text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300 z-50">
                <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto scroll-smooth">
                  <div>
                    <ul className="space-y-1 list-disc list-inside text-gray-200 text-xs">
                      <li>Capacity Building & Training</li>
                      <li>Certification Programs</li>
                      <li>Fellowships & Internships</li>
                      <li>Research & Policy</li>
                      <li>Innovation Labs & Competitions</li>

                    </ul>
                  </div>
                  <hr className="border-white/20" />
                  <div>
                    {/* <h4 className="font-semibold text-[#0792FB] mb-1">Technical Solutions</h4>
                    <ul className="space-y-1 list-disc list-inside text-gray-200 text-xs">
                      <li>Risk Assessment & VAPT</li>
                      <li>Incident Response & Forensics</li>
                      <li>GRC, IAM & SOC Setup</li>
                      <li>Cyber Intel, Awareness & BC/DR</li>
                    </ul> */}
                  </div>
                  <Link
                    to="/academy"
                    className="block mt-4 text-left text-[#0792FB] font-semibold hover:underline"
                  >
                    View All Programmes →
                  </Link>
                </div>
              </div>
            </div>
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
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
              className="p-2 rounded-md border border-white/10 hover:bg-white/10 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-8 py-6 space-y-2 bg-[#050B1E] text-white divide-y divide-white/10">
          <a href="/" className="block pb-2 hover:text-gray-300">Home</a>
          <a href="/#about" className="block py-2 hover:text-gray-300">About</a>

          {/* Services Toggle */}
          <div>
            <button
              onClick={() => {
                setMobileServicesOpen(!mobileServicesOpen);
                setMobileAcademyOpen(false); // Close others
              }}
              className="w-full text-left pb-2 flex items-center justify-between hover:text-gray-300"
            >
              <span>Services</span>
              <span>{mobileServicesOpen ? "▲" : "▼"}</span>
            </button>
            {mobileServicesOpen && (
              <div className="mt-2 ml-4 space-y-2">
                <ul className="space-y-1 list-disc list-inside text-gray-300 text-sm">
                  <li>Digital Policy & Strategic Advisory</li>
                  <li>Technical Cybersecurity Solutions</li>
                  <li>Capacity Building & Training</li>
                </ul>
                <Link
                  to="/services"
                  className="block text-[#0792FB] font-medium text-sm pb-2 hover:underline pt-2"
                >
                  View All Services →
                </Link>
              </div>
            )}
          </div>

          {/* Academy Toggle */}
          <div>
            <button
              onClick={() => {
                setMobileAcademyOpen(!mobileAcademyOpen);
                setMobileServicesOpen(false); // Close others
              }}
              className="w-full text-left pb-2 flex items-center justify-between hover:text-gray-300"
            >
              <span>Academy</span>
              <span>{mobileAcademyOpen ? "▲" : "▼"}</span>
            </button>
            {mobileAcademyOpen && (
              <div className="mt-2 ml-4 space-y-2">
                <ul className="space-y-1 list-disc list-inside text-gray-300 text-sm">
                  <li>Capacity Building & Training</li>
                  <li>Certification Programs</li>
                  <li>Fellowships & Internships</li>
                  <li>Research & Policy</li>
                  <li>Innovation Labs & Competitions</li>
                </ul>
                <Link
                  to="/academy"
                  className="block text-[#0792FB] font-medium text-sm pb-2 hover:underline pt-2"
                >
                  View All Programmes →
                </Link>
              </div>
            )}
          </div>

          <a href="/contact-us" className="block pt-2 hover:text-gray-300">Contact</a>
        </div>
      )}


    </nav>
  );
}
