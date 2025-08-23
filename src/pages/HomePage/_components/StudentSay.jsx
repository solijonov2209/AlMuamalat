import React from 'react';
import Slider from 'react-slick';
import studentPicture from '../../../assets/say-student-pic.png';
import { useTranslation } from 'react-i18next';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StudentSay = () => {
  const { t } = useTranslation();

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
      job: t('studentSay.comments.0.job'),
      comment: t('studentSay.comments.0.comment'),
      img: studentPicture,
    },
    {
      name: 'Aisha Yusuf',
      job: t('studentSay.comments.1.job'),
      comment: t('studentSay.comments.1.comment'),
      img: studentPicture,
    },
    {
      name: 'John Doe',
      job: t('studentSay.comments.2.job'),
      comment: t('studentSay.comments.2.comment'),
      img: studentPicture,
    },
    {
      name: 'Fatima Ali',
      job: t('studentSay.comments.3.job'),
      comment: t('studentSay.comments.3.comment'),
      img: studentPicture,
    },
  ];

  return (
    <section className="py-10">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Top section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('studentSay.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            {t('studentSay.subtitle')}
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
