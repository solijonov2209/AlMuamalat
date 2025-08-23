import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { useTranslation } from 'react-i18next';

export const Consultation = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container">
        <div className=" bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
          {/* Chap qism */}
          <div className="bg-[#FAE9D3] p-9 md:w-3/5">
            <h2 className="text-2xl font-bold mb-4 text-[#D28527] leading-[100%] tracking-normal font-inter">
              {t('consultation.title')}
            </h2>
            <p className="text-[#D28527] text-base leading-relaxed font-medium text-[22px] tracking-normal font-inter">
              {t('consultation.description')}
            </p>
          </div>

          {/* O‘ng qism */}
          <div className="p-8 md:w-2/5 bg-[#F9F7F3]">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('consultation.formTitle')}
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              {t('consultation.formDescription')}
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder={t('consultation.namePlaceholder')}
                className="w-full bg-white border border-[#68686880] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div>
                <PhoneInput
                  country={'gb'}
                  inputStyle={{
                    width: '100%',
                    height: '50px',
                    fontSize: '16px',
                  }}
                  placeholder={t('consultation.phonePlaceholder')}
                />
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <input type="checkbox" />
                <label>{t('consultation.checkbox')}</label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#009688] text-white rounded py-2 hover:bg-green-700 transition"
              >
                {t('consultation.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
