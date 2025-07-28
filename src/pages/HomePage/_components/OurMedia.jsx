import React from 'react';
import Women from '../../../assets/Rectangle4.png';
import Man from '../../../assets/Rectangle5.png';
import Boy from '../../../assets/Rectangle6.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
export const OurMedia = () => {
  const cards = [
    {
      id: 1,
      title: 'Why Islamic finance?',
      imageUrl: Women,
    },
    {
      id: 2,
      title: 'What makes Islamic finance unique?',
      imageUrl: Man,
    },
    {
      id: 3,
      title: 'How is risk managed in Islamic finance?',
      imageUrl: Boy,
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className=" max-w-7xl mx-auto container">
        {/* Our Media section - Centered */}
        <div className="mb-12  text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Media</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team consists of seasoned professionals with extensive
            experience in Islamic finance and management. Each member brings a
            unique set of skills and expertise.
          </p>
        </div>

        {/* Title and arrows */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h3 className="text-3xl font-bold text-gray-900">
            Our media showcase
          </h3>
          <div className="flex space-x-3 ">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#009688] transition bg-[#ECF3F6] hover:text-white text-[#000000] cursor-pointer">
              {/* Triangle arrow pointing left */}
              <FaArrowLeft />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#009688] transition bg-[#ECF3F6] hover:text-white text-[#000000] cursor-pointer">
              {/* Triangle arrow pointing right */}
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group w-full h-[516px] rounded-[10px] border border-gray-300 overflow-hidden relative cursor-pointer"
            >
              {/* Image with zoom on hover */}
              <div className="w-full h-full overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 z-0" />

              {/* Title with padding to avoid button overlap */}
              <div className="absolute bottom-5 left-5 pr-30 text-white text-lg font-semibold z-10">
                {card.title}
              </div>

              {/* Play button */}
              <button
                className="absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center z-10 
                  bg-white group-hover:bg-[#2198FF] transition-all duration-300 cursor-pointer
                  hover:scale-110 hover:ring-2 hover:ring-[#2198FF]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#2198FF] group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5v14l11-7z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
