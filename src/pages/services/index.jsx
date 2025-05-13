import React from 'react';
import Navbar from '../../components/navbar';
import Accordion from '../../components/accordion';


const advisoryServices = [
    'Cybersecurity Policy Development',
    'Alignment with NIST, ISO 27001, GDPR, AU Convention',
    'National Cybersecurity Strategy Formulation',
    'Cybersecurity Governance Frameworks',
    'Legal & Regulatory Advisory (Digital rights, cybercrime laws)',
    'Cyber Risk Management & Resilience Planning',
    'Capacity Building & Policy Training',
    'Cyber Diplomacy & International Cooperation',
    'Cybersecurity Metrics & Evaluation',
    'Public-Private Partnerships & Ecosystem Development',
    'Strategic Communication & Policy Advocacy',
];

const technicalServices = [
    'Cybersecurity Risk Assessment & Profiling',
    'Security Architecture Design (Zero Trust, Cloud)',
    'GRC (ISO 27001, GDPR) & Compliance Frameworks',
    'Vulnerability Assessment & Penetration Testing (VAPT)',
    'SOC Advisory & SIEM/SOAR Integration',
    'Incident Response & Breach Management',
    'Digital Forensics & Evidence Analysis',
    'Awareness, Training & Role-Based Simulations',
    'Data Protection, Encryption & DPIAs',
    'Threat Intelligence & Dark Web Monitoring',
    'IAM, SSO, PAM Deployment',
    'Managed Cybersecurity Services (MDR)',
    'Business Continuity & Disaster Recovery',
];

const ServicesPage = () => {


    return (
        <>
            <Navbar />

            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 via-black to-[#0792FB] text-white py-32 px-6 md:px-12 text-center">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
                    <p className="text-gray-300 text-lg">
                        Expert-led advisory and technical cybersecurity services trusted across Africa.
                    </p>
                </div>
            </section>

            <div className='bg-[#00050F]'>
            {/* Accordion Sections */}
            <section className=" text-white py-24 px-6 md:px-12 mx-auto">
                <div className="scroll-mt-32">
                    <h2 className="text-3xl font-bold mb-8 text-[#0792FB]">Advisory Services</h2>
                    <Accordion title="Cybersecurity Policy & Strategy Advisory" items={advisoryServices} />
                </div>

                {/* Technical Services */}
                <div className="mt-20 scroll-mt-32">
                    <h2 className="text-3xl font-bold mb-8 text-[#0792FB]">Technical Cybersecurity Services</h2>
                    <Accordion title="Technical Cybersecurity Solutions & Capacity" items={technicalServices} />
                </div>
            </section>

            {/* Our Approach */}
            <section id="approach" className=" text-white py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-left">Our Approach</h2>
                    <ul className="text-gray-300 list-disc list-inside text-sm space-y-2">
                        <li><strong>People-Centric</strong>: Trust, privacy, and rights above all.</li>
                        <li><strong>Partnership-Driven</strong>: Collaborating with public & private sectors.</li>
                        <li><strong>Evidence-Based</strong>: Grounded in standards, research & intelligence.</li>
                        <li><strong>Sustainability-Oriented</strong>: Long-term national and institutional capacity building.</li>
                    </ul>
                </div>
            </section>

            {/* Impact */}
            <section className=" text-white py-24 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-[#0792FB]">Selected Engagements & Impact</h2>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                        <li>Advised on the formulation of cybersecurity strategies in multiple African nations.</li>
                        <li>Supported the development of the National Cybersecurity Strategy in Ghana and Sierra Leone.</li>
                        <li>Supported legal reforms for digital privacy and data protection.</li>
                        <li>Delivered cybersecurity training to public sector officers, security agencies and civil society stakeholders across Africa.</li>
                        <li>Rolled out Computer Security Incidents Response Team(s)</li>
                        <li>Organized Internet Right and Cyber Security Awareness workshops</li>
                        <li>Organized National Cyber Security Awareness Week</li>
                        <li>Organized National Internet Governance Forums (IGF)</li>
                        <li>Rolled Out Open Data Initiative</li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#0792FB] text-white py-20 px-6 md:px-12 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Cyber Defenses?</h2>
                    <p className="mb-6">We partner with governments, institutions, and organizations across Africa. Let’s build resilience together.</p>
                    <a
                        href="/contact-us"
                        className="bg-white text-[#0792FB] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Contact Us Today
                    </a>
                </div>
            </section>
            </div>
        </>
    );
};

export default ServicesPage;
