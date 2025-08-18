// CoursesCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import coursePhoto1 from '../../assets/course-1.svg';
import coursePhoto2 from '../../assets/course-2.svg';
import coursePhoto3 from '../../assets/course-3.svg';
const courses = [
  {
    id: 1,
    title: 'Design',
    rating: 4,
    reviews: 20,
    price: 500,
    category: 'Design',
    image: coursePhoto1, // You can replace with actual image
  },
  {
    id: 2,
    title: 'Business',
    rating: 5,
    reviews: 102,
    price: 500,
    category: 'Business',
    image: coursePhoto2,
  },
  {
    id: 3,
    title: 'Business',
    rating: 5,
    reviews: 102,
    price: 500,
    category: 'Business',
    image: coursePhoto3,
  },
];
const bgColors = ['bg-[#A9A8F6]', 'bg-[#FF7F5080]', 'bg-[#CCB4FF80]'];
export const CoursesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 px-4 md:px-20">
      <h2 className="text-2xl font-bold text-center">Most Popular Course</h2>
      <p className=" max-w-md  text-center mx-auto text-gray-500 mt-2 mb-5">
        Expert guidance for managing funds in alignment with Islamic principles,
        helping you make informed, halal investment decisions.
      </p>

      <Slider {...settings} className="mt-10">
        {courses.map((course) => (
          <div key={course.id} className="px-4">
            <div className="bg-white rounded-lg p-4 shadow-md mt-3 mb-5">
              <div
                className={`w-full h-40  flex items-center justify-center ${bgColors[course.id % 3]} rounded`}
              >
                <img src={course.image} alt={course.title} className="h-24" />
              </div>
              <div className="mt-4">
                <span className="text-xs  bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                  {course.category}
                </span>
                <h3 className="font-semibold text-lg mt-2">
                  Various versions have evolved...
                </h3>
                <div className="flex items-center text-yellow-500 mt-2">
                  {'★'.repeat(course.rating)}
                  {'☆'.repeat(5 - course.rating)}
                  <span className="text-gray-600 ml-2">({course.reviews})</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold">${course.price}</span>
                  <button className="text-teal-500 border border-teal-500 px-2 py-1 rounded-full hover:bg-teal-500 hover:text-white transition">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
