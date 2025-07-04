import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "./ui/Button";

const DesktopMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [energyDrinksOpen, setEnergyDrinksOpen] = useState(true);
  const [tvOpen, setTvOpen] = useState(false);

  const toggleEnergyDrinks = () => {
    setEnergyDrinksOpen(!energyDrinksOpen);
  };

  const toggleTv = () => {
    setTvOpen(!tvOpen);
  };

  const energyDrinkLinks = [
    { name: 'All Red Bull Energy Drinks', link: 'https://www.redbull.com/energydrink' },
    { name: 'Red Bull Energy Drink', link: 'https://www.redbull.com/energydrink/red-bull-energy-drink' },
    { name: 'Red Bull Zero', link: 'https://www.redbull.com/zero' },
    { name: 'Red Bull Sugarfree', link: 'https://www.redbull.com/sugarfree' },
    { name: 'Red Bull Editions', link: 'https://www.redbull.com/editions' },
  ];

  const energyDrinks = [
    { 
      name: 'Red Bull Energy Drink', 
      image: 'https://img.redbull.com/images/e_trim/c_limit,w_200/q_auto,f_auto/redbullcom/2023/8/17/akq6opoi8io1nlwdj7ft/red-bull-energy-drink',
      link: 'https://www.redbull.com/energydrink/red-bull-energy-drink'
    },
    { 
      name: 'Red Bull Sugarfree', 
      image: 'https://img.redbull.com/images/e_trim/c_limit,w_200/q_auto,f_auto/redbullcom/2025/1/22/ur0mvj1wdnzik0jceu0l/red-bull-sugarfree',
      link: 'https://www.redbull.com/sugarfree'
    },
    { 
      name: 'Red Bull Zero', 
      image: 'https://img.redbull.com/images/e_trim/c_limit,w_200/q_auto,f_auto/redbullcom/2025/1/13/qiw0vax5yuhc1fiernfj/red-bull-zero-energy-drink',
      link: 'https://www.redbull.com/zero'
    },
  ];

  const tvLinks = [
    { name: 'Discover', link: 'https://www.redbull.com/discover' },
    { name: 'Live', link: 'https://www.redbull.com/live-events' },
    { name: 'Films', link: 'https://www.redbull.com/films' },
    { name: 'Shows', link: 'https://www.redbull.com/shows' },
    { name: 'Clips', link: 'https://www.redbull.com/clips' },
  ];

  const interests = [
    { 
      name: 'Motorsports', 
      image: 'https://img.redbull.com/images/c_fill,g_auto,w_200,h_300/q_auto,f_auto/redbullcom/2020/11/12/nzivw33oddom7jhuxtag/red-bull-racing-pit-stop',
      link: 'https://www.redbull.com/int-en/hubs/motorsports'
    },
    { 
      name: 'Bike', 
      image: 'https://img.redbull.com/images/c_crop,x_1423,y_0,h_2130,w_1278/c_fill,w_200,h_300/q_auto,f_auto/redbullcom/2017/10/30/9aac00b1-5674-4f90-9b0f-eaef36941713/carson-storch-red-bull-rampage-2017-finals',
      link: 'https://www.redbull.com/int-en/hubs/bike'
    },
    { 
      name: 'Gaming', 
      image: 'https://img.redbull.com/images/c_crop,x_1174,y_0,h_4912,w_2947/c_fill,w_200,h_300/q_auto,f_auto/redbullcom/2020/4/7/toipc01g5slcqrr2abiv/fujimura-and-filipino-champ',
      link: 'https://www.redbull.com/int-en/hubs/gaming'
    },
    { 
      name: 'Skateboarding', 
      image: 'https://img.redbull.com/images/c_crop,x_593,y_0,h_1365,w_819/c_fill,w_200,h_300/q_auto,f_auto/redbullcom/2020/10/5/hffagobqehfylfmf9osp/jean-pantaleo-frontside-air-red-bull-bowl-rippers-2020',
      link: 'https://www.redbull.com/int-en/hubs/skateboarding'
    },
    { 
      name: 'Surfing', 
      image: 'https://img.redbull.com/images/c_crop,x_1397,y_0,h_3000,w_1800/c_fill,w_200,h_300/q_auto,f_auto/redbullcom/2019/05/14/56a40547-4b33-41cb-ae84-fcb90d74bf75/mikey-brennan-red-bull-cape-fear-2019-shipstern-bluff',
      link: 'https://www.redbull.com/int-en/hubs/surfing'
    },
  ];

  const tenantCards = [
    {
      title: 'AlphaTauri',
      subtitle: 'Fits body and mind',
      image: 'https://img.redbull.com/images/w_360/q_auto,f_auto/redbullcom/2018/08/10/07e64b85-5b3c-4b8f-986f-d40de1adf629/alphatauri-logo',
      link: 'https://alphatauri.com/?utm_source=redbull.com&utm_medium=referral&utm_campaign=navi&utm_content=hamburgermenu'
    },
    {
      title: 'Cartoons',
      subtitle: 'Cartoon spots from around the globe',
      image: 'https://img.redbull.com/images/w_360/q_auto,f_auto/redbullcom/2024/5/28/v6ccraezuoemrif4otca/red-bull-cartoons-car',
      link: 'https://cartoons.redbull.com/'
    },
    {
      title: 'Red Bull Cliff Diving',
      subtitle: 'Incredible aerial acrobatics from up to 27m',
      image: 'https://img.redbull.com/images/e_trim:10:transparent/w_360/bo_5px_solid_rgb:00000000/q_auto:best,f_auto/redbullcom/2021/4/15/hlhpiw3rxailat6ru3qa/cliffdivinglogo',
      link: 'https://www.redbull.com/cliffdiving'
    },
    {
      title: 'Red Bull Junior Team',
      subtitle: 'Searching for future Formula 1 Champions',
      image: 'https://img.redbull.com/images/e_trim:10:transparent/w_360/bo_5px_solid_rgb:00000000/q_auto:best,f_auto/redbullcom/2020/4/7/m69wdz36krznx7pcek80/red-bull-junior-team-logo',
      link: 'https://www.redbull.com/int-en/juniorteam'
    },
    {
      title: 'Red Bull Racing',
      subtitle: 'Formula One Team',
      image: 'https://img.redbull.com/images/e_trim:10:transparent/w_360/bo_5px_solid_rgb:00000000/q_auto:best,f_auto/redbullcom/2022/2/10/nhzwcy8ouv8jonuxscfx/red-bull-racing-tenant-logo',
      link: 'https://www.redbullracing.com/int-en'
    },
    {
      title: 'Red Bull Rookies Cup',
      subtitle: 'Searching for future MotoGP Champions',
      image: 'https://img.redbull.com/images/e_trim:10:transparent/w_360/bo_5px_solid_rgb:00000000/q_auto:best,f_auto/redbullcom/2021/4/8/ubad6zop1r0upr0ocgil/red-bull-rookies-cup-logo',
      link: 'https://www.redbull.com/rookiescup'
    },
    {
      title: 'Red Bull X-Alps',
      subtitle: 'The world\'s toughest adventure race.',
      image: 'https://img.redbull.com/images/e_trim:10:transparent/w_360/bo_5px_solid_rgb:00000000/q_auto:best,f_auto/redbullcom/2024/4/17/zmxzseoehjhmesv3ynrp/red-bull-x-alps-logo',
      link: 'https://www.redbullxalps.com'
    },
    {
      title: 'Shop',
      subtitle: 'Be part of the action',
      image: 'https://img.redbull.com/images/e_trim:10:transparent/w_360/bo_5px_solid_rgb:00000000/q_auto:best,f_auto/redbullcom/2020/2/17/f8qpjaq6jiqmbnro2y05/red-bull-shop',
      link: 'https://www.redbullshop.com/?utm_source=redbull.com&utm_medium=project&utm_campaign=navi&utm_content=hamburgermenu'
    },
    {
      title: 'Sounds of Red Bull',
      subtitle: 'Our production music catalog',
      image: 'https://img.redbull.com/images/w_360/q_auto,f_auto/redbullcom/2023/12/19/mzmot8jbddwwd53b8eqb/sounds-of-red-bull',
      link: 'https://www.soundsofredbull.com'
    },
    {
      title: 'Sustainability',
      subtitle: 'A can has more than one life',
      image: 'https://img.redbull.com/images/w_360/q_auto,f_auto/redbullcom/2020/3/16/q5w78w1j9jp2q5vzvab5/red-bull-cartoons-sustainability',
      link: 'https://www.redbull.com/int-en/energydrink/red-bull-can-lifecycle'
    },
    {
      title: 'Wingfinder',
      subtitle: 'Discover your strengths',
      image: 'https://img.redbull.com/images/e_trim:10:transparent/w_360/bo_5px_solid_rgb:00000000/q_auto:best,f_auto/redbullcom/2018/09/03/597a3155-3fbc-4cf2-be85-ffe631fc627d/red-bull-wing-finder',
      link: 'https://www.wingfinder.com/'
    },
    {
      title: 'Wings For Life',
      subtitle: 'One team, one mission',
      image: 'https://img.redbull.com/images/e_trim:10:transparent/w_360/bo_5px_solid_rgb:00000000/q_auto:best,f_auto/redbullcom/2020/1/21/kznnpyfuauhxk7emuxly/wings-for-life-logo',
      link: 'https://www.wingsforlife.com/'
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-[#051427] overflow-y-auto">
      <div className=" mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <Button
            variant="ghost"
            size="icon"
            className="text-white transition-all duration-200 hover:bg-white/20 hover:scale-110"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
              <path fill="currentColor" d="m19.18 5.18-.35-.36a.51.51 0 0 0-.71 0L12 10.94 5.89 4.82a.51.51 0 0 0-.71 0l-.35.36a.48.48 0 0 0 0 .7L11 12l-6.17 6.12a.48.48 0 0 0 0 .7l.35.36a.51.51 0 0 0 .71 0L12 13.06l6.11 6.12a.51.51 0 0 0 .71 0l.35-.36a.48.48 0 0 0 0-.7L13.07 12l6.11-6.12a.48.48 0 0 0 0-.7z"></path>
            </svg>
          </Button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Navigation */}
          <div className="col-span-3">
            <nav className="flex flex-col space-y-6">
              <Link href="https://www.redbull.com" className="text-4xl font-bold text-white hover:text-red-500 transition-colors no-underline">
                Home
              </Link>
              <div>
                <button 
                  onClick={toggleEnergyDrinks}
                  className="text-4xl font-bold text-white hover:text-red-500 transition-colors flex items-center gap-2 no-underline w-full text-left bg-transparent border-0"
                >
                  Energy Drinks {energyDrinksOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                </button>
                {energyDrinksOpen && (
                  <div className="mt-4 ml-4 flex flex-col space-y-3">
                    {energyDrinkLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.link} 
                        className="text-lg text-neutral-300 hover:text-white transition-colors no-underline"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="https://www.redbull.com/events" className="text-4xl font-bold text-white hover:text-red-500 transition-colors no-underline">
                Events
              </Link>
              <Link href="https://www.redbull.com/athletes" className="text-4xl font-bold text-white hover:text-red-500 transition-colors no-underline">
                Athletes
              </Link>
              <div>
                <button 
                  onClick={toggleTv}
                  className="text-4xl font-bold text-white hover:text-red-500 transition-colors flex items-center gap-2 no-underline w-full text-left bg-transparent border-0"
                >
                  Red Bull TV {tvOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                </button>
                {tvOpen && (
                  <div className="mt-4 ml-4 flex flex-col space-y-3">
                    {tvLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.link} 
                        className="text-lg text-neutral-300 hover:text-white transition-colors no-underline"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="https://jobs.redbull.com/" className="text-4xl font-bold text-white hover:text-red-500 transition-colors no-underline">
                Jobs
              </Link>
              <Link href="https://www.redbull.com/company" className="text-4xl font-bold text-white hover:text-red-500 transition-colors no-underline">
                Company
              </Link>
            </nav>
          </div>

          {/* Right Content */}
          <div className="col-span-9">
            {energyDrinksOpen && (
              <div className="mb-16">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Red Bull Energy Drinks</h2>
                  <Link href="https://www.redbull.com/energydrink" className="text-sm text-white bg-transparent border border-white rounded-full px-4 py-1 hover:bg-white hover:text-[#051427] transition-colors no-underline">
                    View all
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {energyDrinks.map((drink) => (
                    <Link href={drink.link} key={drink.name} className="bg-white rounded-lg group transition-transform hover:scale-105 no-underline">
                      <div className="flex flex-col items-center">
                        <div className="text-center mb-4">
                          <h3 className="text-lg font-bold text-[#051427]">
                            {drink.name.split(' ').map((part, i) => 
                              i === 0 ? <span key={i}>Red Bull<br/></span> : <span key={i}>{part} </span>
                            )}
                          </h3>
                        </div>
                        <div className="relative h-48 w-32">
                          <Image
                            src={drink.image}
                            alt={drink.name}
                            fill
                            className="object-contain"
                            unoptimized={true}
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {tvOpen && (
              <div className="mb-16">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Red Bull TV</h2>
                  <Link href="https://www.redbull.com/discover" className="text-sm text-white bg-transparent border border-white rounded-full px-4 py-1 hover:bg-white hover:text-[#051427] transition-colors no-underline">
                    View all
                  </Link>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {tvLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.link} 
                      className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg flex items-center justify-center no-underline"
                    >
                      <span className="text-xl font-bold text-white">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Browse by Interests</h2>
                <Link href="https://www.redbull.com" className="text-sm text-white bg-transparent border border-white rounded-full px-4 py-1 hover:bg-white hover:text-[#051427] transition-colors no-underline">
                  View all
                </Link>
              </div>
              <div className="grid grid-cols-5 gap-4">
                {interests.map((interest) => (
                  <Link href={interest.link} key={interest.name} className="group relative rounded-lg overflow-hidden h-64 no-underline">
                    <Image
                      src={interest.image}
                      alt={interest.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                      unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <span className="text-white font-medium">
                        {interest.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* More from Red Bull section */}
            <div className="mt-16">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">More from Red Bull</h2>
              </div>
              <div className="grid grid-cols-4 gap-6">
                {tenantCards.map((card) => (
                  <Link 
                    href={card.link}
                    key={card.title} 
                    target="_blank" 
                    rel="noopener" 
                    className="bg-[#1a2b44] rounded-lg p-4 transition-transform hover:scale-105 no-underline flex flex-col"
                  >
                    <div className="relative h-20 w-full mb-4 flex items-center justify-center">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={100}
                        height={60}
                        className="object-contain max-h-full"
                        unoptimized={true}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-white mb-1">{card.title}</h3>
                      <p className="text-sm text-gray-300">{card.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu; 