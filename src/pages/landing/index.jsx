import Navbar from "../../components/navbar"
import { Link } from "react-router-dom";
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { FaBullseye, FaEye, FaCheckCircle } from 'react-icons/fa';
import { FaShieldAlt, FaTools, FaPeopleCarry, FaChartLine } from 'react-icons/fa';
import academy from "../../assets/images/academy.jpg"
import advisory from "../../assets/images/advisory.jpg"
import approach from "../../assets/images/approach.jpg"
import capacity from "../../assets/images/capacity.jpg"
import technical from "../../assets/images/technical.jpg"
import impact from "../../assets/images/impact.jpg"
import { image } from "motion/react-client";
import Footer from "../../components/footer";



const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};



const services = [
    {
        icon: <FaShieldAlt className="text-white" size={20} />,
        title: 'Digital Policy & Strategic Advisory Services',
        desc: 'We provide expert guidance on cybersecurity policy, digital rights governance, and regulatory compliance to governments, institutions, and private sector partners.',
        image: advisory,
        link: '/services#advisory-services',
    },
    {
        icon: <FaTools className="text-white" size={20} />,
        title: 'Technical Solutions',
        desc: 'Our team designs and implements innovative technology-based solutions, including digital forensics, incident response frameworks, secure platforms, and risk management systems.',
        image: technical,
        link: '/services#technical-services',
    },
    {
        icon: <FaTools className="text-white" size={20} />,
        title: 'Capacity Building',
        desc: 'Through ACDRO Academy and specialized programs, we deliver targeted training, skills development, and knowledge transfer to empower stakeholders across civil society, law enforcement, and industry.',
        image: capacity,
        link: '/services#capacity-building',
    },
    {
        icon: <FaPeopleCarry className="text-white" size={20} />,
        title: 'Our Approach',
        desc: 'People-first. Evidence-based. Partnership-driven. We build sustainable cybersecurity and digital rights ecosystems.',
        image: approach,
        link: '/services#approach',
    },
    {
        icon: <FaChartLine className="text-white" size={20} />,
        title: 'Our Selected Engagements & Impact',
        desc: 'We’ve delivered national strategies, CSIRTs, IGFs, and digital rights reforms across African nations.',
        image: impact,
        link: '/services#impact',
    },
];




const HeroHeading = () => {
    const fullText = "Africa Cybersecurity and\nDigital Rights Organization (ACDRO)";
    const [displayedText, setDisplayedText] = useState('');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let index = 0;
            const interval = setInterval(() => {
                setDisplayedText(fullText.slice(0, index + 1));
                index++;
                if (index === fullText.length) clearInterval(interval);
            }, 30); 
        }
    }, [isInView]);
    

    return (
        <h1
            ref={ref}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight whitespace-pre-line"
        >
            {displayedText}
            <span className="text-[#0792FB] animate-pulse">|</span>
        </h1>
    );
};



const Landing = () => {
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
            <div className="bg-[#00050F] overflow-hidden">
                <section className="relative bg-gradient-to-br from-gray-900 via-black to-[#0792FB] text-white py-48 px-6 md:px-12 lg:px-24 overflow-hidden">
                    {/* Background Glow/Blob */}
                    <div className="absolute -top-40 -left-14 w-[500px] h-[500px] bg-[#0792FB]/30 rounded-full blur-3xl opacity-25 animate-pulse" />

                    <motion.div
                        className="max-w-7xl mx-auto relative z-10 text-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <motion.span
                            variants={fadeUp}
                            className="inline-block bg-blue-950 text-[#0792FB] text-sm px-4 py-1 rounded-full mb-6 shadow"
                        >
                            Welcome to
                        </motion.span>

                        {/* Typing heading */}
                        <HeroHeading />

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed"
                        >
                            Empowering Africa’s Digital Future through Policy, Protection, and Partnership.
                        </motion.p>

                        <motion.a
                            variants={fadeUp}
                            href="/contact-us"
                            className="mt-8 inline-block bg-[#0792FB] hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg transition duration-300"
                        >
                            Contact Us
                        </motion.a>
                    </motion.div>
                </section>

                <section
                    id="about"
                    className="relative bg-[#050B1E] text-white py-32 px-6 md:px-12 lg:px-24"
                >
                    <motion.div
                        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        {/* Left Content */}
                        <motion.div
                            className="lg:w-1/2 text-left"
                            variants={fadeUp}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                                Who We Are
                            </h2>
                            <p className="text-gray-300 leading-relaxed max-w-xl">
                                ACDRO is a leading African non-governmental organization advancing cybersecurity resilience, digital rights, and governance.
                                We offer expert advisory services, practical solutions, and strategic support across the continent.
                            </p>
                        </motion.div>

                        {/* Right Cards */}
                        <motion.div
                            className="lg:w-1/2 grid sm:grid-cols-2 gap-6"
                            variants={staggerContainer}
                        >
                            {/* Vision */}
                            <motion.div
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl relative hover:shadow-2xl transition-all"
                                variants={fadeUp}
                            >
                                <div className="text-[#0792FB] mb-3"><FaEye size={20} /></div>
                                <h3 className="font-semibold mb-2">Our Vision</h3>
                                <p className="text-sm text-gray-300">
                                    To be Africa’s leading force for cybersecurity and digital rights through innovation and inclusive governance.
                                </p>
                            </motion.div>

                            {/* Mission */}
                            <motion.div
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl relative hover:shadow-2xl transition-all"
                                variants={fadeUp}
                            >
                                <div className="text-[#0792FB] mb-3"><FaBullseye size={20} /></div>
                                <h3 className="font-semibold mb-2">Our Mission</h3>
                                <p className="text-sm text-gray-300">
                                    Strengthen Africa’s cyber ecosystem through policy, advisory, capacity-building, and digital rights advocacy.
                                </p>
                            </motion.div>

                            {/* Core Values */}
                            <motion.div
                                className="sm:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl relative hover:shadow-2xl transition-all"
                                variants={fadeUp}
                            >
                                <div className="text-[#0792FB] mb-3"><FaCheckCircle size={20} /></div>
                                <h3 className="font-semibold mb-2">Core Values</h3>
                                <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                                    <li>Integrity</li>
                                    <li>Partnership</li>
                                    <li>Professionalism</li>
                                    <li>Trustworthiness</li>
                                    <li>Quality</li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>

                <section className="bg-[#050B1E] text-white py-24 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto text-center mb-12">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="text-4xl font-bold mb-4"
                        >
                            What We Do
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="text-gray-300 max-w-2xl mx-auto"
                        >
                            ACDRO delivers comprehensive, multi-sectoral services categorized under three major streams: strategic advisory and technical solutions.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
                        {services.map((card, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-[#0F172A] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <img src={card.image} alt={card.title} className="w-full h-44 object-cover" />
                                <div className="p-6 text-left">
                                    <div className="flex items-center gap-3 mb-3">
                                        {card.icon}
                                        <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-300 mb-4">{card.desc}</p>
                                    <a
                                        href={card.link}
                                        className="text-[#0792FB] font-medium text-sm hover:underline"
                                    >
                                        See more →
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <motion.section
                    className="bg-[#050B1E] text-white py-24 px-6 md:px-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div variants={fadeLeft}>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">ACDRO Academy</h2>
                            <p className="text-[#0792FB] font-medium mb-4 italic">
                                “Developing Capacity for the Emerging Africa Cybersecurity Workforce”
                            </p>
                            <p className="text-gray-300 mb-6">
                                ACDRO Academy is the flagship training and research arm of ACDRO, equipping professionals, governments, and youth with hands-on skills in cybersecurity, digital rights, and data protection.
                            </p>

                            <ul className="text-gray-300 text-sm mb-6 list-disc list-inside space-y-1">
                                <li>Capacity Building & Professional Training</li>
                                <li>Certification Programs in Cyber & Digital Rights</li>
                                <li>Cyber Fellowships & Policy Internships</li>
                                <li>Research, Reports & Policy Leadership</li>
                                <li>Hackathons & Innovation Challenges</li>
                            </ul>

                            <div className="flex gap-4">
                                <a
                                    href="/academy"
                                    className="inline-block bg-[#0792FB] hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg transition"
                                >
                                    Visit Academy
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div className="relative" variants={slideRight}>
                            <img
                                src={academy}
                                alt="ACDRO Academy"
                                className="w-full rounded-2xl shadow-2xl object-cover"
                            />
                            <div className="absolute inset-0 bg-[#0792FB]/10 rounded-2xl pointer-events-none"></div>
                        </motion.div>
                    </div>
                </motion.section>
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

export default Landing