import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Academy = () => {
      const [showScrollButton, setShowScrollButton] = useState(false);
// Handle scroll events to toggle button visibility
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top logic
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return (
        <>
            <Navbar />
            <div className='bg-[#050B1E]'>
            <section className=" bg-gradient-to-br from-gray-900 via-black to-[#0792FB] text-white py-32 px-6 md:px-12 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Welcome to <span className="text-[#0792FB]">ACDRO Academy</span>
                    </h1>
                    <p className="italic text-lg text-[#79c7ff] mb-4">
                        “Developing Capacity for the Emerging Africa Cybersecurity Workforce”
                    </p>
                    <p className="text-gray-300">
                        We’re building Africa’s cyber talent through training, research, and policy innovation.
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className=" text-white py-24 px-6 md:px-12">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                    <p className="text-gray-300 leading-relaxed">
                        ACDRO Academy is the training and research division of ACDRO, equipping individuals, institutions, and governments
                        with knowledge in cybersecurity, data protection, and digital rights advocacy. We’re shaping a resilient Africa
                        through hands-on, inclusive learning.
                    </p>
                </div>
            </section>

            {/* What We Do */}
            <section className=" text-white py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10">What We Do</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            {
                                title: 'Capacity Building & Training',
                                desc: 'Targeted training, Skills Development and Workshops across sectors, empowering professionals, law enforcement, and educators, and civil society.',
                            },
                            {
                                title: 'Certification Programs',
                                desc: 'High-impact courses in cybersecurity, digital rights, and AI governance.',
                            },
                            {
                                title: 'Fellowships & Internships',
                                desc: 'Grooming Africa’s next digital leaders through real-world learning.',
                            },
                            {
                                title: 'Research & Policy',
                                desc: 'Influencing policy via reports, indexes, and briefs across Africa.',
                            },
                            {
                                title: 'Innovation Labs & Competitions',
                                desc: 'Hackathons, challenges and digital inclusion events for youth.',
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 hover:shadow-xl transition">
                                <h3 className="font-semibold text-lg text-[#0792FB] mb-2">{item.title}</h3>
                                <p className="text-gray-300 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className=" text-white py-24 px-6 md:px-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Featured Courses</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left mt-10">
                        {[
                            'Cybersecurity Policy & Strategy',
                            'Cyber Threat Intelligence & Analysis',
                            'Incident Response & Management',
                            'Digital Forensics & Evidence Analysis',
                            'Data Protection & Privacy Law',
                            'Internet Governance & Digital Rights',
                            'Ethical Hacking & Penetration Testing',
                            'Cybercrime Investigation Techniques',
                            'National & Sectoral CERT Operations',
                            'Cyber Diplomacy & International Cooperation',
                            'Cybersecurity Awareness for Communities',
                            'Digital Literacy for Teachers and Parents',
                            'Online Safety for Students and Youth Groups',
                        ].map((course, index) => (
                            <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:shadow-lg transition">
                                <p className="text-sm text-gray-300">{course}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#0792FB] text-white py-20 px-6 md:px-12 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Learn Anytime, Anywhere</h2>
                    <p className="mb-6">
                        Access our on-demand courses and live webinars via the ACDRO Learning Portal.
                        Join us in building Africa’s cyber capacity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#" className="bg-white text-[#0792FB] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                            Enroll Now
                        </a>
                        <a href="#" className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#0792FB] transition">
                            Partner With Us
                        </a>
                    </div>
                </div>
            </section>
            </div>
             {/* Scroll to Top Button */}
            {showScrollButton && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-[#0792FB] text-white p-4 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                >
                    ↑
                </motion.button>
            )}

            <Footer/>
        </>

    )
}

export default Academy