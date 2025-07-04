import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-3 text-left text-white hover:text-neutral-300 no-underline"
      >
        <span className="text-xl font-semibold">{title}</span>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isOpen && <div className="pl-4 pb-2">{children}</div>}
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const energyDrinksLinks = [
    { href: 'https://www.redbull.com/energydrink', label: 'All Red Bull Energy Drinks' },
    { href: 'https://www.redbull.com/energydrink/red-bull-energy-drink', label: 'Red Bull Energy Drink' },
    { href: 'https://www.redbull.com/zero', label: 'Red Bull Zero' },
    { href: 'https://www.redbull.com/sugarfree', label: 'Red Bull Sugarfree' },
    { href: 'https://www.redbull.com/editions', label: 'Red Bull Editions' },
  ];

  const redBullTVLinks = [
    { href: 'https://www.redbull.com/discover', label: 'Discover' },
    { href: 'https://www.redbull.com/live-events', label: 'Live' },
    { href: 'https://www.redbull.com/films', label: 'Films' },
    { href: 'https://www.redbull.com/shows', label: 'Shows' },
    { href: 'https://www.redbull.com/clips', label: 'Clips' },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 md:hidden" onClick={onClose}>
      <div
        className="fixed inset-0 bg-[#0C1B32] text-white p-6 shadow-xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
      >
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <button onClick={onClose} className="text-white hover:text-neutral-300 p-1 -ml-1 no-underline">
              <X size={24} />
            </button>
            <Link href="#" onClick={onClose} className="no-underline">
              <Image src="/rblogo.svg" alt="Red Bull Logo" width={36} height={18} className="h-4 w-auto" />
            </Link>
          </div>
          <div className="flex justify-start">
            <Link href="#" onClick={onClose} className="no-underline">
              <Image src="/rblogotext.svg" alt="Red Bull Company Logo" width={180} height={32} />
            </Link>
          </div>
        </div>

        <nav className="flex flex-col space-y-2">
          <Link href="#" className="text-xl font-semibold py-3 text-white hover:text-neutral-300 no-underline" onClick={onClose}>
            Home
          </Link>

          <AccordionItem title="Energy Drinks" defaultOpen={true}>
            <div className="flex flex-col space-y-1">
              {energyDrinksLinks.map((link) => (
                <Link key={link.label} href={link.href} className="block py-2 text-neutral-200 hover:text-white no-underline" onClick={onClose}>
                  {link.label}
                </Link>
              ))}
            </div>
          </AccordionItem>

          <Link href="https://www.redbull.com/events" className="text-xl font-semibold py-3 text-white hover:text-neutral-300 no-underline" onClick={onClose}>
            Events
          </Link>
          <Link href="https://www.redbull.com/athletes" className="text-xl font-semibold py-3 text-white hover:text-neutral-300 no-underline" onClick={onClose}>
            Athletes
          </Link>
          
          <AccordionItem title="Red Bull TV">
            <div className="flex flex-col space-y-1">
              {redBullTVLinks.map((link) => (
                <Link key={link.label} href={link.href} className="block py-2 text-neutral-200 hover:text-white no-underline" onClick={onClose}>
                  {link.label}
                </Link>
              ))}
            </div>
          </AccordionItem>

          <Link href="https://jobs.redbull.com/" className="text-xl font-semibold py-3 text-white hover:text-neutral-300 no-underline" onClick={onClose}>
            Jobs
          </Link>

          <Link href="https://www.redbull.com/company" className="text-xl font-semibold py-3 text-white hover:text-neutral-300 no-underline" onClick={onClose}>
            Company
          </Link>
          
          <hr className="border-neutral-700 my-4" />
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu; 