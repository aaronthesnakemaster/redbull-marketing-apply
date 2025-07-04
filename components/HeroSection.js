import React from 'react';

function HeroSection() {
  return (
    <section className="w-full relative h-[60vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-hidden ">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0 ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10  mx-auto px-4 pt-16 pb-8 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16 flex items-end h-full w-full">
        <div className="max-w-5xl">
          <h2 className="text-white text-xl font-semibold uppercase tracking-wider mb-2">Red Bull JOBS</h2>
          <h1 className="text-white text-3xl md:text-4xl lg:text-7xl font-bold leading-tight">
            Your Journey Starts Here
          </h1>
         
        </div>
      </div>
    </section>
  );
}

export default HeroSection; 