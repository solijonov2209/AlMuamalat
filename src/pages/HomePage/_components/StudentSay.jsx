import React from 'react';
import Slider from 'react-slick';
import studentPicture from '../../../assets/say-student-pic.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StudentSay = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // md: 768-1023
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // sm: 640-767
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const studentComments = [
    {
      name: 'Finlay Kirk',
      job: 'Web designer',
      comment:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.',
      img: studentPicture,
    },
    {
      name: 'Aisha Yusuf',
      job: 'UX researcher',
      comment:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.',
      img: studentPicture,
    },
    {
      name: 'John Doe',
      job: 'Frontend Developer',
      comment:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.',
      img: studentPicture,
    },
    {
      name: 'Fatima Ali',
      job: 'Product Manager',
      comment:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.',
      img: studentPicture,
    },
  ];

  return (
    <section className="py-10">
      <div className=" container max-w-7xl mx-auto px-4">
        {/* Top section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What students say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Our team consists of seasoned professionals with extensive
            experience in Islamic finance and management.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {studentComments.map((item, index) => (
            <div
              key={index}
              className="p-6 max-w-[366px] mx-auto bg-[#F6F8F9] rounded-xl shadow-md mb-8"
            >
              <p className="text-[#686868] text-[17px] leading-[26px] mb-5">
                {item.comment}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt="student avatar"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-black font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.job}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
