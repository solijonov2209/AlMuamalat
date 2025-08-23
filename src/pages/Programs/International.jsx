import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { request } from '../../services/Request';
import { CheckCircle2 } from 'lucide-react';
import { Payment } from './Payment';
import { Consultation } from '../HomePage/_components/Consultation';
import { useTranslation } from 'react-i18next';
import { CoursesCarousel } from './PopularCourseCard';

export const International = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language; // 'uz' yoki 'en'

  const { data, isLoading, error } = useQuery({
    queryKey: ['courseData', id],
    queryFn: async () => {
      const res = await request.get('/courses/main');
      return res?.data?.data;
    },
  });

  if (isLoading) {
    return <p className="text-center py-10">{t('loading')}</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{t('error')}</p>;
  }

  const courseAboutData = data?.find((item) => item?.course_id === id);

  // --- Title & Descriptionni til bo‘yicha ajratish ---
  const title =
    currentLang === 'uz' ? courseAboutData?.name_uz : courseAboutData?.name_en;

  const description =
    currentLang === 'uz'
      ? courseAboutData?.description_uz
      : courseAboutData?.description_en;

  return (
    <div>
      <div className="container">
        {/* PROGRAMS HERO START */}
        <div className="py-10 px-4 mb-3">
          <div className="rounded-lg">
            <div className="p-1">
              <h1 className="text-[30px] md:text-[40px] font-bold text-center text-gray-800 mb-4">
                {title || t('international.heroTitle')}
              </h1>
              <p
                className="text-[20px] text-[#686868] mb-6"
                dangerouslySetInnerHTML={{
                  __html:
                    description && description.trim() !== `""`
                      ? description
                      : t('international.heroDescription'),
                }}
              ></p>
            </div>
            {/* --- Course info Section --- START */}
            <div className="px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Side */}
              <div className="bg-[#F3F8FF] shadow-md rounded-2xl p-6">
                <h3 className="text-2xl text-center font-semibold mb-6">
                  {t('international.learnTitle')}
                </h3>
                <ul className="space-y-4 text-gray-700">
                  {t('international.learnList', { returnObjects: true }).map(
                    (item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Right Side */}
              <div className="bg-[#F3F8FF] shadow-md rounded-2xl p-6">
                <h3 className="text-2xl font-semibold mb-6 text-center">
                  {t('international.whyTitle')} <span>"AL-MUAMALAT"</span>
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {t('international.whyList', { returnObjects: true }).map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
            {/* --- Order of Course --- */}
            <div className="px-4 py-12">
              <h2 className="text-3xl font-bold text-[#0a2d3c] mb-8">
                {t('international.orderTitle')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div>
                  <h3 className="text-xl font-semibold text-red-500 mb-2">
                    {t('international.videoTitle')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('international.videoText')}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-500 mb-2">
                    {t('international.assignmentsTitle')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('international.assignmentsText')}
                  </p>
                </div>
              </div>
            </div>
            {/* --- Course info Section --- FINISH */}
            <CoursesCarousel /> {/* MOST POPULATION CARDS */}
            <Payment id={id} price={courseAboutData?.price} />
            <Consultation />
          </div>
        </div>
      </div>
    </div>
  );
};
