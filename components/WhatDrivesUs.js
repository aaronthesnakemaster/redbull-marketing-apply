import React from 'react';

const WhatDrivesUs = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center font-inter">
      <p className="text-red-600 font-bold text-sm uppercase mb-2 relative inline-block after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-0.5 after:bg-red-600">
        What drives us
      </p>
      <div className="text-5xl text-red-600 leading-none mb-2.5">”</div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-5">
        Chasing our potential
      </h2>
      <p className="text-base sm:text-lg text-gray-600 max-w-xl md:max-w-2xl mx-auto mb-10 leading-relaxed">
        Since the early days of Red Bull, an entrepreneurial mindset has always guided our
        approach to work and the environment we create:
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-5 lg:gap-8">
        {/* Card 1: Meaning */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md lg:w-1/3 text-left">
          <span className="block text-red-600 font-bold text-xs uppercase mb-2.5">
            Meaning
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
            Find your meaning and use your strengths to achieve it!
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-normal">
            The bigger reason why you work. To contribute and add value to something or someone.
          </p>
        </div>

        {/* Card 2: Freedom & Responsibility */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md lg:w-1/3 text-left">
          <span className="block text-red-600 font-bold text-xs uppercase mb-2.5">
            Freedom & Responsibility
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
            Take real responsibility for yourself and your work.
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-normal">
            To have the freedom to work on something the way you want to.
          </p>
        </div>

        {/* Card 3: Mastery */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md lg:w-1/3 text-left">
          <span className="block text-red-600 font-bold text-xs uppercase mb-2.5">
            Mastery
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
            Love life, love work, love to challenge yourself!
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-normal">
            Turn your talents into strengths to become excellent at what you do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs; 