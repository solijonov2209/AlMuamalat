import React from 'react';
import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import { request } from '../../services/Request';
import { CheckCircle2 } from 'lucide-react';
import { CoursesCarousel } from './PopularCourseCard';
import { Payment } from './Payment';
import { Consultation } from '../HomePage/_components/Consultation';
export const International = () => {
  const { id } = useParams();

  const { data, isloading, error } = useQuery({
    queryKey: 'courseData',
    queryFn: async () => {
      const data = await request.get('/courses/main');
      return data?.data?.data;
    },
  });
  const courseAboutData = data?.find((item) => item?.course_id === id);


  return (
    <div>
      <div className="container">
        {/* PROGRAMS HERO START  */}
        <div className=" py-10 px-4 mb-3">
          <div className="rounded-lg">
            <div className="p-1 ">
              <h1 className="text-[30px] md:text-[40px] font-bold text-center text-gray-800 mb-4 ">
                {courseAboutData?.name_en}
              </h1>
              <p
                className="text-[20px] text-[#686868] mb-6"
                dangerouslySetInnerHTML={{
                  __html:
                    courseAboutData?.description_en &&
                    courseAboutData?.description_uz.trim() !== `""`
                      ? courseAboutData.description_en
                      : "Al Muamalat Education's international study programs offer an in-depth learning experience at leading Islamic financial institutions around the world.",
                }}
              ></p>
            </div>
            {/* PROGRAMS HERO FINISH */}

            {/* --- Course info  Section --- START  */}
            <div className=" px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Side - What you'll learn */}
              <div className="bg-[#F3F8FF]  shadow-md rounded-2xl p-6">
                <h3 className="text-2xl  text-center font-semibold mb-6">
                  What you’ll learn
                </h3>
                <ul className="space-y-4 text-gray-700">
                  {[
                    'Gain a comprehensive understanding of Islamic finance principles and ethics.',
                    'Build a portfolio with 10+ real-world projects in Islamic financial services.',
                    'Learn to develop and manage Sharia-compliant financial products.',
                    'Master key concepts in Islamic banking, investment, and wealth management.',
                    'Understand the fundamentals of risk management in Islamic finance.',
                    'Develop skills to work as an Islamic finance consultant.',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side - Why study at AL-MUAMALAT */}
              <div className="bg-[#F3F8FF] shadow-md rounded-2xl p-6">
                <h3 className="text-2xl flex  font-semibold mb-6 text-center">
                  Why should you study at{' '}
                  <span className="">"AL-MUAMALAT"?</span>
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Lifetime access</li>
                  <li>Video lessons</li>
                  <li>Tests</li>
                  <li>Projects</li>
                  <li>Downloadable resources</li>
                  <li>Access via mobile device</li>
                </ul>
              </div>
            </div>

            <div className="px-4 py-12">
              <h2 className="text-3xl font-bold text-[#0a2d3c] mb-8">
                What is the order of the course?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div>
                  <h3 className="text-xl font-semibold text-red-500 mb-2">
                    Video Lessons
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Darslar video shaklida platformaga joylangan bo‘lib, ularni
                    xohlagan paytda va istalgan joyda ko‘rish mumkin.
                    Videodarslar yangilanib boriladi.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-500 mb-2">
                    Assignments
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Modul oxirida test topshiriqlari berilgan. Testdan
                    muvaffaqiyatli o‘tgan o‘quvchilargina keyingi moduldagi
                    darslarga kirish imkoniyatiga ega bo‘ladi.
                  </p>
                </div>
              </div>
              {/* --- Course info  Section --- FINISH*/}
              <CoursesCarousel /> {/* MOST POPULATION CARDS */}
              <Payment  id = {id} price={courseAboutData?.price}/>
              <Consultation/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
