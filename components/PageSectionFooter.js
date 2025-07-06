import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function PageSectionFooter() {
  const currentYear = new Date().getFullYear();
  const [selectedCountry, setSelectedCountry] = useState('int-en');

  const countries = [
    { value: 'int-en', label: 'International', dir: 'ltr' },
    { value: 'al-sq', label: 'Albania', dir: 'ltr' },
    { value: 'dz-fr', label: 'Algeria', dir: 'ltr' },
    { value: 'ar-es', label: 'Argentina', dir: 'ltr' },
    { value: 'au-en', label: 'Australia', dir: 'ltr' },
    { value: 'at-de', label: 'Austria', dir: 'ltr' },
    { value: 'az-az', label: 'Azerbaijan', dir: 'ltr' },
    { value: 'be-fr', label: 'Belgium (fr)', dir: 'ltr' },
    { value: 'be-nl', label: 'Belgium (nl)', dir: 'ltr' },
    { value: 'ba-bs', label: 'Bosnia and Herzegovina', dir: 'ltr' },
    { value: 'br-pt', label: 'Brazil', dir: 'ltr' },
    { value: 'bg-bg', label: 'Bulgaria', dir: 'ltr' },
    { value: 'ca-en', label: 'Canada (en)', dir: 'ltr' },
    { value: 'ca-fr', label: 'Canada (fr)', dir: 'ltr' },
    { value: 'car-es', label: 'Caribbean', dir: 'ltr' },
    { value: 'cl-es', label: 'Chile', dir: 'ltr' },
    { value: 'cn-zh', label: 'China', dir: 'ltr' },
    { value: 'co-es', label: 'Colombia', dir: 'ltr' },
    { value: 'hr-hr', label: 'Croatia', dir: 'ltr' },
    { value: 'cz-cs', label: 'Czech Republic', dir: 'ltr' },
    { value: 'dk-da', label: 'Denmark', dir: 'ltr' },
    { value: 'eg-en', label: 'Egypt', dir: 'ltr' },
    { value: 'ee-et', label: 'Estonia', dir: 'ltr' },
    { value: 'fi-fi', label: 'Finland', dir: 'ltr' },
    { value: 'fr-fr', label: 'France', dir: 'ltr' },
    { value: 'de-de', label: 'Germany', dir: 'ltr' },
    { value: 'gr-el', label: 'Greece', dir: 'ltr' },
    { value: 'hk-zh', label: 'Hong Kong', dir: 'ltr' },
    { value: 'hu-hu', label: 'Hungary', dir: 'ltr' },
    { value: 'in-en', label: 'India', dir: 'ltr' },
    { value: 'id-id', label: 'Indonesia', dir: 'ltr' },
    { value: 'ie-en', label: 'Ireland', dir: 'ltr' },
    { value: 'it-it', label: 'Italy', dir: 'ltr' },
    { value: 'jp-ja', label: 'Japan', dir: 'ltr' },
    { value: 'kz-ru', label: 'Kazakhstan', dir: 'ltr' },
    { value: 'kr-ko', label: 'Korea', dir: 'ltr' },
    { value: 'lv-lv', label: 'Latvia', dir: 'ltr' },
    { value: 'lt-lt', label: 'Lithuania', dir: 'ltr' },
    { value: 'my-en', label: 'Malaysia', dir: 'ltr' },
    { value: 'mx-es', label: 'Mexico', dir: 'ltr' },
    { value: 'mea-en', label: 'Middle East & Africa', dir: 'ltr' },
    { value: 'nl-nl', label: 'Netherlands', dir: 'ltr' },
    { value: 'nz-en', label: 'New Zealand', dir: 'ltr' },
    { value: 'mk-mk', label: 'North Macedonia', dir: 'ltr' },
    { value: 'no-no', label: 'Norway', dir: 'ltr' },
    { value: 'pe-es', label: 'Peru', dir: 'ltr' },
    { value: 'pl-pl', label: 'Poland', dir: 'ltr' },
    { value: 'pt-pt', label: 'Portugal', dir: 'ltr' },
    { value: 'ro-ro', label: 'Romania', dir: 'ltr' },
    { value: 'rs-sr', label: 'Serbia', dir: 'ltr' },
    { value: 'sk-sk', label: 'Slovakia', dir: 'ltr' },
    { value: 'si-sl', label: 'Slovenia', dir: 'ltr' },
    { value: 'za-en', label: 'South Africa', dir: 'ltr' },
    { value: 'es-es', label: 'Spain', dir: 'ltr' },
    { value: 'se-sv', label: 'Sweden', dir: 'ltr' },
    { value: 'ch-de', label: 'Switzerland (de)', dir: 'ltr' },
    { value: 'ch-fr', label: 'Switzerland (fr)', dir: 'ltr' },
    { value: 'tw-zh', label: 'Taiwan', dir: 'ltr' },
    { value: 'tr-tr', label: 'Turkey', dir: 'ltr' },
    { value: 'us-en', label: 'USA', dir: 'ltr' },
    { value: 'ua-uk', label: 'Ukraine', dir: 'ltr' },
    { value: 'ae-en', label: 'United Arabic Emirates', dir: 'ltr' },
    { value: 'gb-en', label: 'United Kingdom', dir: 'ltr' }
  ];

  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    // In a real implementation, you might redirect or update content based on locale
    window.location.href = `https://www.redbull.com/${newCountry}`;
  };

  // Get country code for flag
  const getCountryCode = (locale) => {
    const parts = locale.split('-');
    if (parts[0] === 'int') return 'INT';
    return parts[0].toUpperCase();
  };

  return (
    <footer className="bg-white py-12 border-t font-['Bull_Text',_'Helvetica',_sans-serif] antialiased">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column */}
          <div className="space-y-4 md:mb-0 mb-8">
            <Link href="https://www.redbull.com/company" className="block font-semibold text-gray-800 hover:text-red-600 no-underline text-sm">
              Products & Company
            </Link>
            <Link href="https://www.redbull.com/int-en/energydrink/contact-us" className="block font-semibold text-gray-800 hover:text-red-500 no-underline text-sm">
              Contact Us
            </Link>
            <Link href="https://jobs.redbull.com/" className="block font-semibold text-gray-800 hover:text-red-500 no-underline text-sm">
              Jobs
            </Link>
            <Link href="https://www.redbull.com/int-en/mediacentre" className="block font-semibold text-gray-800 hover:text-red-500 no-underline text-sm">
              Media
            </Link>
            <Link href="https://www.redbullshop.com/" className="block font-semibold text-gray-800 hover:text-red-500 no-underline text-sm">
              Red Bull Shop
            </Link>
          </div>

          {/* Second Column */}
          <div className="space-y-4 md:mb-0 mb-8">
            <Link href="https://www.redbull.com/int-en/cookie-settings" className="block font-semibold text-gray-800 hover:text-red-500 no-underline text-sm">
              Cookie Settings
            </Link>
            <Link href="https://www.redbull.com/int-en/energydrink/privacy-policy" className="block font-semibold text-gray-800 hover:text-red-500 no-underline text-sm">
              Privacy Policy
            </Link>
            <Link href="https://www.redbull.com/int-en/energydrink/terms-of-use" className="block font-semibold text-gray-800 hover:text-red-500 no-underline text-sm">
              Terms of Use
            </Link>
            <Link href="https://www.redbull.com/int-en/energydrink/imprint" className="block font-semibold text-gray-800 hover:text-red-500 no-underline text-sm">
              Imprint
            </Link>
            <Link href="https://www.redbull.com/int-en/energydrink/brand-protection" className="block font-semibold text-gray-800 hover:text-red-500 no-underline text-sm">
              Brand Protection
            </Link>
            <Link href="https://www.redbull.com/int-en/energydrink/fraud-warning" className="block font-semibold text-gray-800 hover:text-red-500 no-underline text-sm">
              Fraud Warning
            </Link>
            <Link href="https://www.redbull.com/int-en/energydrink/ccpa-privacy-policy" className="block font-semibold text-gray-800 hover:text-red-500 no-underline text-sm">
              Do Not Sell/Share My Personal Information
            </Link>
            <Link href="https://www.redbull.com/int-en/energydrink/ccpa-privacy-policy" className="block font-semibold text-gray-800 hover:text-red-500 no-underline text-sm">
              Limit Use of My Sensitive Personal Information
            </Link>
          </div>

          {/* Third Column */}
          <div className="flex flex-col md:justify-between">
            <div className="text-left md:text-right mb-4 md:mb-0">
              <p className="text-gray-600">© {currentYear} Red Bull</p>
            </div>

            <div className="mt-auto md:ml-auto">
              <div className="relative inline-block w-full md:w-auto border border-gray-300 rounded-md focus-within:border-red-500">
                <div className="flex items-center">
                  <div className="absolute left-3 top-0 bottom-0 flex items-center pointer-events-none">
                    <img 
                      src={`https://resources.redbull.com/icons/flags/v2/${getCountryCode(selectedCountry)}@2x.png`}
                      srcSet={`https://resources.redbull.com/icons/flags/v2/${getCountryCode(selectedCountry)}.png 1x, https://resources.redbull.com/icons/flags/v2/${getCountryCode(selectedCountry)}@2x.png 2x`}
                      alt={`${getCountryCode(selectedCountry)} Country flag`}
                      className="h-5 w-5"
                    />
                  </div>
                  <select
                    className="appearance-none bg-transparent w-full py-3 pl-10 pr-10 text-gray-800 leading-tight focus:outline-none"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    aria-label="select country locale"
                  >
                    {countries.map(country => (
                      <option key={country.value} value={country.value} dir={country.dir}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-0 bottom-0 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PageSectionFooter; 