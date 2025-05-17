import React from 'react';
import Navbar from '../../components/navbar';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Footer from '../../components/footer';


const ContactPage = () => {
   
    
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-[#0792FB] text-white py-32 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4">Get in Touch</h3>
          <p className="text-gray-300 text-lg">
            Whether you’re seeking cybersecurity policy support, technical expertise, or a training partnership — ACDRO is ready to collaborate.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-[#050B1E] text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#0792FB]">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0792FB]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0792FB]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0792FB]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#0792FB] hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded shadow-lg transition"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#0792FB]">Contact Information</h2>
            <ul className="text-sm text-gray-300 space-y-4">
              <li>
                <strong>Address:</strong> P.O. Box CT 9412, Cantonments, Accra, Ghana
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@acdro.org" className="text-[#0792FB] hover:underline">
                  info@acdro.org
                </a>
              </li>
              <li>
                <strong>Phone:</strong> +233 246 339 296 / +233 203 774 281
              </li>
              <li>
                <strong>Website:</strong>{' '}
                <a href="https://www.acdro.org" className="text-[#0792FB] hover:underline" target="_blank" rel="noopener noreferrer">
                  www.acdro.org
                </a>
              </li>
              <li className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <ul className="flex gap-4 text-[#0792FB] text-xl">
                  <li><a href="https://x.com/acdro2" target="_blank" rel="noreferrer">X</a></li>
                  <li><a href="https://facebook.com/acdro2" target="_blank" rel="noreferrer">Facebook</a></li>
                  <li><a href="https://linkedin.com/company/acdro" target="_blank" rel="noreferrer">LinkedIn</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map or CTA */}
      <section className="bg-[#0792FB] text-white py-20 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">We’re Building Africa’s Cyber Future</h2>
          <p className="mb-6">
            Reach out to partner, inquire, or request a custom solution.
          </p>
          <a
            href="mailto:info@acdro.org"
            className="inline-block bg-white text-[#0792FB] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Email Us Directly
          </a>
        </div>
      </section>


    </>
  );
};

export default ContactPage;
