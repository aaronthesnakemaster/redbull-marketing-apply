import React, { useState, useEffect } from "react";
// import Image from 'next/image'; // Removed unused import
import GlobeSvgAsComponent from "../public/globe.svg";
import PinSvg from "../public/pin.svg";

const MapSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slideWidth, setSlideWidth] = useState(325);
  const [globeRotation, setGlobeRotation] = useState(0);

  // Adjust slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
        setSlideWidth(290);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
        setSlideWidth(300);
      } else {
        setSlidesToShow(3);
        setSlideWidth(325);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update globe rotation when current slide changes
  useEffect(() => {
    // Rotate 10 degrees per slide
    setGlobeRotation(currentSlide * 10);
  }, [currentSlide]);

  const locations = [
    {
      id: 1,
      name: "Red Bull Global Headquarters",
      country: "Austria",
      flag: "https://resources.redbull.com/icons/flags/v2/AT@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/b7tnso7znufxdwxr8sgu/red-bull-headquarter-austria-fuschl-am-see-salzburg",
    },
    {
      id: 2,
      name: "Red Bull Austria",
      country: "Austria",
      flag: "https://resources.redbull.com/icons/flags/v2/AT@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/wad6zxq8krzmmyzzfvmj/filename",
    },
    {
      id: 3,
      name: "Red Bull Germany",
      country: "Germany",
      flag: "https://resources.redbull.com/icons/flags/v2/DE@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/juuhtulpl6bh9ox0a10b/red-bull-germany-job-locations",
    },
    {
      id: 4,
      name: "Red Bull Switzerland",
      country: "Switzerland",
      flag: "https://resources.redbull.com/icons/flags/v2/CH@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/pjliiwsgljryxybc24zm/filename",
    },
    {
      id: 5,
      name: "Red Bull France",
      country: "France",
      flag: "https://resources.redbull.com/icons/flags/v2/FR@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/bflg6zxlgfvvhn4zgeic/filename",
    },
    {
      id: 6,
      name: "Red Bull UK",
      country: "United Kingdom",
      flag: "https://resources.redbull.com/icons/flags/v2/GB@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/xrvaj2x5yzbws9mxhnxu/filename",
    },
    {
      id: 7,
      name: "Red Bull Italy",
      country: "Italy",
      flag: "https://resources.redbull.com/icons/flags/v2/IT@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/ebsv91su0jp6hssgjaxs/filename",
    },
    {
      id: 8,
      name: "Red Bull Spain",
      country: "Spain",
      flag: "https://resources.redbull.com/icons/flags/v2/ES@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/woz1qc7u2owbfzfukdpx/filename",
    },
    {
      id: 9,
      name: "Red Bull Portugal",
      country: "Portugal",
      flag: "https://resources.redbull.com/icons/flags/v2/PT@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/nwlz9cfosyivubfngoif/filename",
    },
    {
      id: 10,
      name: "Red Bull Netherlands",
      country: "Netherlands",
      flag: "https://resources.redbull.com/icons/flags/v2/NL@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/env6yxr7ak323nf4semc/filename",
    },
    {
      id: 11,
      name: "Red Bull Sweden",
      country: "Sweden",
      flag: "https://resources.redbull.com/icons/flags/v2/SE@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/f6uwqxpfnlkjb0fwu3ry/filename",
    },
    {
      id: 12,
      name: "Red Bull Denmark",
      country: "Denmark",
      flag: "https://resources.redbull.com/icons/flags/v2/DK@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/dp0rgn1y4ctidkwd1qlv/filename",
    },
    {
      id: 13,
      name: "Red Bull Norway",
      country: "Norway",
      flag: "https://resources.redbull.com/icons/flags/v2/NO@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/oz4itpju8vpxnmq2obge/filename",
    },
    {
      id: 14,
      name: "Red Bull Finland",
      country: "Finland",
      flag: "https://resources.redbull.com/icons/flags/v2/FI@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/g5ovwl54c77dmfpxhbx9/filename",
    },
    {
      id: 15,
      name: "Red Bull Czech Republic",
      country: "Czech Republic",
      flag: "https://resources.redbull.com/icons/flags/v2/CZ@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/t739mn4wnogajaddw8tk/filename",
    },
    {
      id: 16,
      name: "Red Bull Slovakia",
      country: "Slovakia",
      flag: "https://resources.redbull.com/icons/flags/v2/SK@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/xv9x7vxonqzrf7ujkkmr/Cover",
    },
    {
      id: 17,
      name: "Red Bull Poland",
      country: "Poland",
      flag: "https://resources.redbull.com/icons/flags/v2/PL@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/x65pteeh907xclgpcpjm/filename",
    },
    {
      id: 18,
      name: "Red Bull Croatia",
      country: "Croatia",
      flag: "https://resources.redbull.com/icons/flags/v2/HR@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/n4uiumwfcfizjvuk8rlb/filename",
    },
    {
      id: 19,
      name: "Red Bull Turkey",
      country: "Turkey",
      flag: "https://resources.redbull.com/icons/flags/v2/TR@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/hprfcwmwfiq3zah2m6fy/filename",
    },
    {
      id: 20,
      name: "Red Bull Kazakhstan",
      country: "Kazakhstan",
      flag: "https://resources.redbull.com/icons/flags/v2/KZ@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/lqx8kdtpqioaul0xc69g/filename",
    },
    {
      id: 21,
      name: "Red Bull South Africa",
      country: "South Africa",
      flag: "https://resources.redbull.com/icons/flags/v2/ZA@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/vq9a9embnbp5kgyo0dr0/filename",
    },
    {
      id: 22,
      name: "Red Bull Japan",
      country: "Japan",
      flag: "https://resources.redbull.com/icons/flags/v2/JP@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/f47gfh5pafgqcdqoili8/filename",
    },
    {
      id: 23,
      name: "Red Bull Australia",
      country: "Australia",
      flag: "https://resources.redbull.com/icons/flags/v2/AU@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/kwcf3qzjbdvbgah5vk2v/filename",
    },
    {
      id: 24,
      name: "Red Bull New Zealand",
      country: "New Zealand",
      flag: "https://resources.redbull.com/icons/flags/v2/NZ@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/gwxeqfzplzkw8c06c797/filename",
    },
    {
      id: 25,
      name: "Red Bull Canada",
      country: "Canada",
      flag: "https://resources.redbull.com/icons/flags/v2/CA@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/ng6jdla8f4yh9offowoq/filename",
    },
    {
      id: 26,
      name: "Red Bull North America",
      country: "United States",
      flag: "https://resources.redbull.com/icons/flags/v2/US@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/mbpadfdta4pfslldgilx/filename",
    },
    {
      id: 27,
      name: "Red Bull Mexico",
      country: "Mexico",
      flag: "https://resources.redbull.com/icons/flags/v2/MX@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/oagkr8zodagsgdgp3fhb/filename",
    },
    {
      id: 28,
      name: "Red Bull Argentina",
      country: "Argentina",
      flag: "https://resources.redbull.com/icons/flags/v2/AR@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/wi8dkeuv4frcnz4rr8y8/filename",
    },
    {
      id: 29,
      name: "Red Bull Colombia",
      country: "Colombia",
      flag: "https://resources.redbull.com/icons/flags/v2/CO@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/dvkeqkkulps7kqwfzyit/filename",
    },
    {
      id: 30,
      name: "Red Bull Brazil",
      country: "Brazil",
      flag: "https://resources.redbull.com/icons/flags/v2/BR@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/yti3fut2odvivknf6hhv/filename",
    },
    {
      id: 31,
      name: "Red Bull Ukraine",
      country: "Ukraine",
      flag: "https://resources.redbull.com/icons/flags/v2/UA@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/axvvlm7kq8i3akbxpuyi/filename",
    },
    {
      id: 32,
      name: "Red Bull Russia",
      country: "Russia",
      flag: "https://resources.redbull.com/icons/flags/v2/RU@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/hntwr7zwbzsqrvsxfcaa/iuulcee5boo4nnhip9bo.jpg",
    },
    {
      id: 33,
      name: "Red Bull India",
      country: "India",
      flag: "https://resources.redbull.com/icons/flags/v2/IN@2x.png",
      image:
        "https://img.redbull.com/images/w_400,q_auto,f_auto/rbjobs/staging/hyr5wy3fmuywvw8savfb/filename",
    },
  ];

  const scrollNext = () => {
    if (currentSlide < locations.length - slidesToShow) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const scrollPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Updated to match design */}
        <div className="text-center mb-8">
          <span className="uppercase text-sm font-semibold text-red-600 block mb-2 tracking-wider">
            OUR LOCATIONS
            <div className="h-1 w-32 bg-red-600 mx-auto mt-1"></div>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl mx-auto mt-6">
            Join the team. We're more than 19,000 people in over 172 countries.
          </h2>
        </div>

        {/* Map with Location Marker - Updated to match design */}
      
        {/* Locations Slider - Updated card styling */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-5 transition-all duration-500 ease-in-out will-change-transform"
            style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}
          >
            {locations.map((location) => (
              <a 
                key={location.id} 
                href="#" 
                className="min-w-[300px] sm:min-w-[290px] md:min-w-[300px] lg:min-w-[320px] bg-no-repeat bg-cover bg-center rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex-shrink-0 no-underline relative"
                style={{ backgroundImage: `url(${location.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70"></div>
                <div className="flex flex-col h-full justify-end p-5 relative z-10">
                  <div className="flex items-center mb-1">
                    <div className="w-6 h-4 mr-2">
                      <img 
                        src={location.flag} 
                        alt={`${location.country} flag`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-white font-medium">
                      {location.country}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {location.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Navigation Controls - Moved below slider */}
        <div className="flex justify-center items-center mt-6">
          <div className="flex gap-2">
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                currentSlide === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
              onClick={scrollPrev}
              disabled={currentSlide === 0}
              aria-label="Previous slide"
            >
              <span className="text-white">&larr;</span>
            </button>
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                currentSlide >= locations.length - slidesToShow
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
              onClick={scrollNext}
              disabled={currentSlide >= locations.length - slidesToShow}
              aria-label="Next slide"
            >
              <span className="text-white">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSlider;
