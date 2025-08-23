import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from 'react-icons/fa';
import Person from '../../../assets/team-expert-man.png';
import Person1 from '../../../assets/team-expert-man.png';
import Person2 from '../../../assets/team-expert-man.png';

export const Expert = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: t('expert.members.0.name'),
      description: t('expert.members.0.description'),
      icons: [FaTelegram, FaInstagram, FaFacebook, FaLinkedin],
      image: Person,
    },
    {
      id: 2,
      name: t('expert.members.1.name'),
      description: t('expert.members.1.description'),
      icons: [FaTelegram, FaInstagram, FaFacebook, FaLinkedin],
      image: Person1,
    },
    {
      id: 3,
      name: t('expert.members.2.name'),
      description: t('expert.members.2.description'),
      icons: [FaTelegram, FaInstagram, FaFacebook, FaLinkedin],
      image: Person2,
    },
  ];

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const navigate = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1;
      }
      return prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  // Calculate adjacent indices for side cards
  const prevIndex = (activeIndex - 1 + teamMembers.length) % teamMembers.length;
  const nextIndex = (activeIndex + 1) % teamMembers.length;

  return (
    <div className="py-8 md:py-16 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8">
          {t('expert.title')}
        </h1>
        <p className="text-center text-gray-600 mb-8 md:mb-16 max-w-3xl mx-auto text-sm md:text-lg px-4">
          {t('expert.subtitle')}
        </p>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative md:h-[500px] flex items-center justify-center gap-4 md:gap-8">
            {/* Previous Member Card (Desktop only) */}
            <DesktopSideCard
              member={teamMembers[prevIndex]}
              position="left"
              isEdge={activeIndex === 0}
              onClick={() => navigate('prev')}
            />

            {/* Active Member Card */}
            <div className="z-10 max-w-7xl overflow-hidden md:w-[980px] transition-all duration-500 px-4 md:px-0">
              <div className="relative">
                {/* Mobile Navigation Buttons */}
                <div className="md:hidden absolute inset-0 flex items-center justify-between px-2 z-20">
                  <NavigationButton
                    direction="prev"
                    onClick={() => navigate('prev')}
                  />
                  <NavigationButton
                    direction="next"
                    onClick={() => navigate('next')}
                  />
                </div>

                {/* Main Card Content */}
                <div className="bg-[#D2E6E4] p-4 md:p-8 rounded-2xl shadow-xl border border-gray-200 h-full md:h-[445px] flex flex-col">
                  <div className="flex flex-col md:flex-row h-full">
                    <MemberImage
                      image={teamMembers[activeIndex].image}
                      name={teamMembers[activeIndex].name}
                    />
                    <MemberInfo
                      name={teamMembers[activeIndex].name}
                      description={teamMembers[activeIndex].description}
                      icons={teamMembers[activeIndex].icons}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Next Member Card (Desktop only) */}
            <DesktopSideCard
              member={teamMembers[nextIndex]}
              position="right"
              isEdge={activeIndex === teamMembers.length - 1}
              onClick={() => navigate('next')}
            />
          </div>

          {/* Indicators - Consistent elongated style */}
          <div className="flex justify-center mt-6 md:mt-12 gap-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`h-2 w-8 md:w-12 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-[#009688]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const DesktopSideCard = ({ member, position, isEdge, onClick }) => (
  <div
    className={`hidden md:block absolute ${
      position === 'left' ? 'left-[-80px]' : 'right-[-80px]'
    } w-[200px] md:w-[280px] transition-all duration-500 transform ${
      isEdge ? 'opacity-30 blur-sm' : 'opacity-70 blur-sm'
    } ${
      position === 'left'
        ? '-translate-x-4 hover:translate-x-0'
        : 'translate-x-4 hover:translate-x-0'
    } hover:opacity-90 hover:blur-none cursor-pointer`}
    onClick={onClick}
  >
    <div className="bg-[#D2E6E4] p-4 md:p-6 rounded-xl shadow-md h-[350px] md:h-[400px] flex flex-col">
      <div className="h-40 md:h-48 w-full mb-4 overflow-hidden rounded-t-lg">
        <img src={member.image} alt={member.name} className="w-full h-full " />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4 px-2">
        {member.name}
      </h3>
      <p className="text-gray-600 text-xs md:text-sm line-clamp-4 mb-4 md:mb-6 px-2">
        {member.description}
      </p>
      <div className="mt-auto flex space-x-2 md:space-x-4 px-2 pb-2 md:pb-4">
        {member.icons.map((Icon, i) => (
          <Icon
            key={i}
            className="text-gray-500 hover:text-[#009688] text-lg md:text-xl"
          />
        ))}
      </div>
    </div>
  </div>
);

const NavigationButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-600/90 hover:bg-blue-700 text-white p-2 rounded-full shadow-md transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction === 'prev' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
      />
    </svg>
  </button>
);

const MemberImage = ({ image, name }) => (
  <div className="w-full md:w-2/5 h-48 md:h-full overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-contain md:object-cover"
    />
  </div>
);

const MemberInfo = ({ name, description, icons }) => (
  <div className="w-full md:w-3/5 p-4 md:p-8 flex flex-col">
    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
      {name}
    </h2>
    <p className="text-gray-700 text-sm md:text-lg mb-6 md:mb-8 flex-grow">
      {description}
    </p>
    <div className="flex space-x-4 md:space-x-6">
      {icons.map((Icon, i) => (
        <Icon
          key={i}
          className="text-[#141B34] hover:text-[#009688] text-xl md:text-2xl transition-colors cursor-pointer"
        />
      ))}
    </div>
  </div>
);
