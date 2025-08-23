import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import coursePhoto1 from '../../../assets/course-1.svg';
import coursePhoto2 from '../../../assets/course-2.svg';
import coursePhoto3 from '../../../assets/course-3.svg';

export const UserCourses = () => {
  const { t } = useTranslation();

  const courses = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    category:
      i % 3 === 0
        ? t('userCourses.categories.design')
        : t('userCourses.categories.business'),
    image:
      i % 3 === 0 ? coursePhoto1 : i % 3 === 1 ? coursePhoto2 : coursePhoto3,
    rating: i % 3 === 0 ? 4 : 3,
    reviews: i % 3 === 0 ? 20 : 102,
    price: 500,
  }));

  const bgColors = ['bg-[#FF7F5080]', 'bg-[#CCB4FF80]', 'bg-[#A9A8F6]'];

  return (
    <div className="p-6 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-2xl p-4 w-full max-w-xs transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image and Category */}
            <div className={`relative ${bgColors[course.id % 3]} rounded-sm`}>
              <span className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded-md shadow">
                {course.category}
              </span>
              <img
                src={course.image}
                alt={t('userCourses.alt')}
                className="rounded-lg w-[189px] h-[189px] center mx-auto"
              />
            </div>

            {/* Content */}
            <div className="mt-4">
              <p className="text-gray-700 text-sm truncate">
                {t('userCourses.description')}
              </p>

              {/* Rating */}
              <div className="flex items-center mt-2 text-yellow-400 border-b-2 pb-3 border-[#b2c1bf]">
                {'★'.repeat(course.rating)}
                {'☆'.repeat(5 - course.rating)}
                <span className="text-gray-500 text-sm ml-2">
                  ({course.reviews})
                </span>
              </div>

              {/* Price and Button */}
              <div className="flex items-center justify-between mt-3">
                <span className="font-semibold text-lg">${course.price}</span>
                <button className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
