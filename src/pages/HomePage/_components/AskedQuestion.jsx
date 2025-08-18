import React from 'react';

const data = [
  {
    question: 'Will I receive lifetime access to the courses?',
    answer:
      '"Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively."',
  },
  {
    question: 'Can I use the materials for community teaching?',
    answer:
      'Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.',
  },
  {
    question: 'Is there a free trial for the courses?',
    answer: 'Yes, we offer a 7-day free trial for all new users.',
  },
  {
    question: 'Who can benefit from these courses?',
    answer: 'Teachers, students, and lifelong learners across all levels.',
  },
  {
    question: 'Are there certification options?',
    answer: 'Yes, certificates are awarded upon course completion.',
  },
];

export const AskedQuestion = () => {
  return (
    <section className="py-12">
      <div className="container">
        {/* Top section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            If you have any further questions, please contact us
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="flex flex-col sm:flex-row gap-6 ">
          {/* Left Column: 2 items */}
          <div className=" flex flex-col gap-4 flex-1">
            {data.slice(0, 2).map((faq, index) => (
              <details
                key={index}
                open={index === 0} // faqat birinchi elementga "open"
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
                key={index + 2} // offset index for uniqueness
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
