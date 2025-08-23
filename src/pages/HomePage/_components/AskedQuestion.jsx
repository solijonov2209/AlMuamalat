import React from 'react';
import { useTranslation } from 'react-i18next';

export const AskedQuestion = () => {
  const { t } = useTranslation();

  const data = t('askedQuestions.faqs', { returnObjects: true });

  return (
    <section className="py-12">
      <div className="container">
        {/* Top section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('askedQuestions.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            {t('askedQuestions.subtitle')}
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Left Column: 2 items */}
          <div className="flex flex-col gap-4 flex-1">
            {data.slice(0, 2).map((faq, index) => (
              <details
                key={index}
                open={index === 0}
                className="group border rounded-lg p-4 transition-all duration-300 open:shadow-lg open:border-green-400 bg-white"
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer text-gray-900">
                  {faq.question}
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">×</span>
                </summary>
                <div className="overflow-hidden transition-all duration-300 ease-in-out">
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* Right Column: 3 items */}
          <div className="flex flex-col gap-4 flex-1">
            {data.slice(2).map((faq, index) => (
              <details
                key={index + 2}
                className="group border rounded-lg p-4 transition-all duration-300 open:shadow-lg open:border-green-400 bg-white"
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer text-gray-900">
                  {faq.question}
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">×</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
