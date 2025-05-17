import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300 py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 sm:grid-cols-2">

                {/* Logo & Tagline */}
                <div>
                    <img src={logo} alt="ACDRO Logo" className="h-16 mb-4" />
                    <p className="text-sm leading-relaxed text-gray-400">
                        Empowering Africa’s Digital Future through Policy, Protection, and Partnership.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-[#0792FB]">Home</a></li>
                        <li><a href="/#about" className="hover:text-[#0792FB]">About Us</a></li>
                        <li><a href="/services" className="hover:text-[#0792FB]">Our Services</a></li>
                        <li><a href="/academy" className="hover:text-[#0792FB]">ACDRO Academy</a></li>
                        <li><a href="/contact-us" className="hover:text-[#0792FB]">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-[#0792FB] mt-1" />
                            <span>Cantonments, Accra, Ghana</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#0792FB]" />
                            <a href="tel:+233246339296/">233246339296/ +233203774281</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-[#0792FB]" />
                            <a href="mailto:info@acdrogov.org">info@acdro.org</a>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
                    <div className="flex space-x-4 text-white text-lg">
                        <a href="https://facebook.com/acdro2" className="hover:text-[#0792FB]"><FaFacebookF /></a>
                        <a href="https://x.com/acdro2" className="hover:text-[#0792FB]" aria-label="X (Twitter)">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 1227"
                                fill="currentColor"
                                className="w-4 h-4"
                            >
                                <path d="M1184.3 0L745.7 565.9 1200 1227H943.7L600.7 710.3 183.3 1227H0L464.3 632.8 0 0h267.7l309.7 471.5L972.6 0z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/company/acdro" className="hover:text-[#0792FB]"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} ACDRO. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
