import Navbar from "../../components/navbar"
import { Link } from "react-router-dom";
import { FaBullseye, FaEye, FaCheckCircle } from 'react-icons/fa';
import { FaShieldAlt, FaTools, FaPeopleCarry, FaChartLine } from 'react-icons/fa';
import about from "../../assets/images/about-image.jpg"

const services = [
    {
        icon: <FaShieldAlt size={24} />,
        title: 'Cybersecurity Policy & Strategy Advisory',
        description: 'From policy development to international alignment, we craft secure, resilient frameworks across Africa.',
        link: '#',
    },
    {
        icon: <FaTools size={24} />,
        title: 'Technical Cybersecurity Solutions',
        description: 'End-to-end services like VAPT, forensics, SOC setup, and incident response for institutional resilience.',
        link: '#',
    },
    {
        icon: <FaPeopleCarry size={24} />,
        title: 'Our Approach',
        description: 'People-first, evidence-based, partnership-driven and sustainable — that’s how we build trust and impact.',
        link: '#',
    },
    {
        icon: <FaChartLine size={24} />,
        title: 'Engagements & Impact',
        description: 'Cyber laws, IGFs, CSIRTs and more. We’ve delivered across nations — from Ghana to Sierra Leone and beyond.',
        link: '#',
    },
];

const Landing = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#00050F]">
                <section className="relative bg-gradient-to-br from-gray-900 via-black to-[#0792FB] text-white py-40 px-6 md:px-12 lg:px-24 overflow-hidden">
                    {/* Background Glow/Blob */}
                    <div className="absolute -top-40 -left-14 w-[500px] h-[500px] bg-[#0792FB]/30 rounded-full blur-3xl opacity-25 animate-pulse" />

                    <div className="max-w-7xl mx-auto relative z-10 text-left">
                        <span className="inline-block bg-blue-950 text-[#0792FB] text-sm px-4 py-1 rounded-full mb-6 shadow">
                            Welcome to
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            Africa Cybersecurity and <br />
                            Digital Rights Organization <span className="text-[#0792FB]">(ACDRO)</span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
                            Empowering Africa’s Digital Future through Policy, Protection, and Partnership.
                        </p>

                        <a
                            href="#"
                            className="mt-8 inline-block bg-[#0792FB] hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg transition duration-300"
                        >
                            Get Started
                        </a>
                    </div>
                </section>

                <section id="about" className="relative text-white py-32 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
                        {/* Left Content */}
                        <div className="lg:w-1/2 text-left">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Who We Are</h2>
                            <p className="text-gray-300 leading-relaxed max-w-xl">
                                ACDRO is a leading African non-governmental organization advancing cybersecurity resilience, digital rights, and governance.
                                We offer expert advisory services, practical solutions, and strategic support across the continent.
                            </p>
                        </div>

                        {/* Right Cards */}
                        <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
                            {/* Vision */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl relative hover:shadow-2xl transition-all">
                                <div className="text-[#0792FB] mb-3"><FaEye size={20} /></div>
                                <h3 className="font-semibold mb-2">Our Vision</h3>
                                <p className="text-sm text-gray-300">
                                    To be Africa’s leading force for cybersecurity and digital rights through innovation and inclusive governance.
                                </p>
                            </div>

                            {/* Mission */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl relative hover:shadow-2xl transition-all">
                                <div className="text-[#0792FB] mb-3"><FaBullseye size={20} /></div>
                                <h3 className="font-semibold mb-2">Our Mission</h3>
                                <p className="text-sm text-gray-300">
                                    Strengthen Africa’s cyber ecosystem via policy, advisory, training, and digital rights advocacy.
                                </p>
                            </div>

                            {/* Core Values */}
                            <div className="sm:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl relative hover:shadow-2xl transition-all">
                                <div className="text-[#0792FB] mb-3"><FaCheckCircle size={20} /></div>
                                <h3 className="font-semibold mb-2">Core Values</h3>
                                <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                                    <li>Integrity</li>
                                    <li>Partnership</li>
                                    <li>Professionalism</li>
                                    <li>Trustworthiness</li>
                                    <li>Quality</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" text-white py-20 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">What We Do</h2>
                        <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
                            ACDRO delivers comprehensive, multi-sectoral services categorized under two major streams: strategic advisory and technical solutions.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Card 1: Policy Advisory */}
                            <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] transition-transform transform hover:scale-[1.015] hover:shadow-2xl group">
                                <div className="bg-gray-900 rounded-2xl p-6 h-full text-left relative overflow-hidden z-10">
                                    {/* Image */}
                                    <img
                                        src={about}
                                        alt="Cyber Policy"
                                        className="w-full h-36 object-cover rounded-xl mb-4"
                                    />
                                    <div className="flex items-center gap-3 mb-4">
                                        <FaShieldAlt className="text-[#0792FB] group-hover:rotate-6 transition-transform duration-300" size={22} />
                                        <h3 className="text-lg md:text-xl font-semibold text-white">Cybersecurity Policy & Strategy Advisory</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        From policy development to international alignment, we craft secure, resilient frameworks across Africa.
                                    </p>
                                    <Link to="/services" className="inline-block text-sm font-medium text-[#0792FB] hover:text-blue-400 transition">
                                        See more →
                                    </Link>
                                    {/* Ambient glow */}
                                    <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[#0792FB]/30 to-transparent blur-xl opacity-30 group-hover:opacity-50 transition duration-300 pointer-events-none" />
                                </div>
                            </div>


                            {/* Card 2: Technical Services */}
                            <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] transition-transform transform hover:scale-[1.015] hover:shadow-2xl group">
                                <div className="bg-gray-900 rounded-2xl p-6 h-full text-left relative overflow-hidden z-10">
                                    {/* Image */}
                                    <img
                                        src={about}
                                        alt="Cyber Policy"
                                        className="w-full h-36 object-cover rounded-xl mb-4"
                                    />
                                    <div className="flex items-center gap-3 mb-4">
                                        <FaTools className="text-[#0792FB] group-hover:rotate-6 transition-transform duration-300" size={22} />
                                        <h3 className="text-lg md:text-xl font-semibold text-white">Technical Cybersecurity Solutions</h3>
                                    </div>
                                    <ul className="text-sm text-gray-300 list-disc list-inside mb-4 space-y-1">
                                        <li>Vulnerability Assessment & Penetration Testing (VAPT)</li>
                                        <li>Incident Response & Digital Forensics</li>
                                        <li>GRC, IAM & SOC Advisory</li>
                                        <li>Cybersecurity Training & Managed Services</li>
                                    </ul>
                                    <a
                                        href="/services#technical-services"
                                        className="inline-block text-sm font-medium text-[#0792FB] hover:text-blue-400 transition"
                                    >
                                        See more →
                                    </a>
                                    <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[#0792FB]/30 to-transparent blur-xl opacity-30 group-hover:opacity-50 transition duration-300 pointer-events-none" />
                                </div>
                            </div>

                            {/* Card 3: Our Approach */}
                            <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] transition-transform transform hover:scale-[1.015] hover:shadow-2xl group">
                                <div className="bg-gray-900 rounded-2xl p-6 h-full text-left relative overflow-hidden z-10">
                                    {/* Image */}
                                    <img
                                        src={about}
                                        alt="Cyber Policy"
                                        className="w-full h-36 object-cover rounded-xl mb-4"
                                    />
                                    <div className="flex items-center gap-3 mb-4">
                                        <FaPeopleCarry className="text-[#0792FB] group-hover:rotate-6 transition-transform duration-300" size={22} />
                                        <h3 className="text-lg md:text-xl font-semibold text-white">Our Approach</h3>
                                    </div>
                                    <ul className="text-sm text-gray-300 list-disc list-inside mb-4 space-y-1">
                                        <li>People-Centric & Partnership-Driven</li>
                                        <li>Evidence-Based & Globally Aligned</li>
                                        <li>Sustainability-Oriented Capacity Building</li>
                                    </ul>
                                    <a
                                        href="/services#approach"
                                        className="inline-block text-sm font-medium text-[#0792FB] hover:text-blue-400 transition"
                                    >
                                        See more →
                                    </a>
                                    <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[#0792FB]/30 to-transparent blur-xl opacity-30 group-hover:opacity-50 transition duration-300 pointer-events-none" />
                                </div>
                            </div>

                            {/* Card 4: Impact */}
                            <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] transition-transform transform hover:scale-[1.015] hover:shadow-2xl group">
                                <div className="bg-gray-900 rounded-2xl p-6 h-full text-left relative overflow-hidden z-10">
                                    {/* Image */}
                                    <img
                                        src={about}
                                        alt="Cyber Policy"
                                        className="w-full h-36 object-cover rounded-xl mb-4"
                                    />
                                    <div className="flex items-center gap-3 mb-4">
                                        <FaChartLine className="text-[#0792FB] group-hover:rotate-6 transition-transform duration-300" size={22} />
                                        <h3 className="text-lg md:text-xl font-semibold text-white">Engagements & Impact</h3>
                                    </div>
                                    <ul className="text-sm text-gray-300 list-disc list-inside mb-4 space-y-1">
                                        <li>National Cybersecurity Strategies (Ghana, Sierra Leone)</li>
                                        <li>Cyber Law Reforms & IGF Hosting</li>
                                        <li>Awareness Weeks, CSIRTs, Open Data Initiatives</li>
                                    </ul>
                                    <a
                                        href="/services#impact"
                                        className="inline-block text-sm font-medium text-[#0792FB] hover:text-blue-400 transition"
                                    >
                                        See more →
                                    </a>
                                    <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[#0792FB]/30 to-transparent blur-xl opacity-30 group-hover:opacity-50 transition duration-300 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-gray-900 via-black to-[#0792FB] text-white py-24 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
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
                                <a
                                    href="#"
                                    className="inline-block text-sm font-medium text-[#0792FB] hover:underline"
                                >
                                    Partner With Us →
                                </a>
                            </div>
                        </div>

                        {/* Right Visual (Image or Illustration) */}
                        <div className="relative">
                            <img
                                src={about}
                                alt="ACDRO Academy"
                                className="w-full rounded-2xl shadow-2xl object-cover"
                            />
                            <div className="absolute inset-0 bg-[#0792FB]/10 backdrop-blur-sm rounded-2xl pointer-events-none"></div>
                        </div>
                    </div>
                </section>


            </div>

        </>
    )
}

export default Landing