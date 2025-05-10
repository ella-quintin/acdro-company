// components/Accordion.jsx
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Accordion = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 bg-white/10 text-left hover:bg-white/20 transition"
      >
        <h3 className="text-white font-semibold text-sm md:text-base">{title}</h3>
        <FaChevronDown
          className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'} text-[#0792FB]`}
        />
      </button>

      {open && (
        <ul className="px-6 pb-4 pt-2 text-sm text-gray-300 list-disc list-inside space-y-1">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
