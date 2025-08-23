import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Consultation } from '../HomePage/_components/Consultation';

export const Contact = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log('Form data:', data);
      reset();
    } catch (error) {
      console.error(error);
      alert(t('contact.form.error'));
    }
  };

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
          {/* Chap taraf */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{t('contact.title')}</h1>
            <p className="text-gray-600 mb-6">{t('contact.description')}</p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold">
                {t('contact.email.title')}
              </h2>
              <p className="text-gray-700">beebs@gmail.com</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                {t('contact.socials.title')}
              </h2>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.socials.instagram')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.socials.twitter')}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.socials.facebook')}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* O‘ng tarafdagi forma */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              placeholder={t('contact.form.name')}
              {...register('name', { required: true })}
              className="border border-[#009688] p-3 rounded-md focus:border-[#009688] focus:ring-1 focus:ring-[#009688] outline-none"
            />
            {errors.name && (
              <span className="text-red-500">
                {t('contact.form.errors.name')}
              </span>
            )}

            <input
              type="email"
              placeholder={t('contact.form.email')}
              {...register('email', { required: true })}
              className="border border-[#009688] p-3 rounded-md focus:border-[#009688] focus:ring-1 focus:ring-[#009688] outline-none"
            />
            {errors.email && (
              <span className="text-red-500">
                {t('contact.form.errors.email')}
              </span>
            )}

            <select
              {...register('service', { required: true })}
              className="border border-[#009688] p-3 rounded-md focus:border-[#009688] focus:ring-1 focus:ring-[#009688] outline-none"
            >
              <option value="">{t('contact.form.servicePlaceholder')}</option>
              <option value="CPSS">CPSS</option>
              <option value="Practical Understanding">
                Practical Understanding
              </option>
              <option value="CIPA">CIPA</option>
            </select>
            {errors.service && (
              <span className="text-red-500">
                {t('contact.form.errors.service')}
              </span>
            )}

            <select
              {...register('budget', { required: true })}
              className="border border-[#009688] p-3 rounded-md focus:border-[#009688] focus:ring-1 focus:ring-[#009688] outline-none"
            >
              <option value="">{t('contact.form.budgetPlaceholder')}</option>
              <option value="1000-3000">$1000 - $3000</option>
              <option value="3000-5000">$3000 - $5000</option>
              <option value="5000+">$5000+</option>
            </select>
            {errors.budget && (
              <span className="text-red-500">
                {t('contact.form.errors.budget')}
              </span>
            )}

            <textarea
              placeholder={t('contact.form.message')}
              {...register('message', { required: true })}
              className="border border-[#009688] p-3 rounded-md h-32 focus:border-[#009688] focus:ring-1 focus:ring-[#009688] outline-none"
            />
            {errors.message && (
              <span className="text-red-500">
                {t('contact.form.errors.message')}
              </span>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#009688] text-white py-3 rounded-md hover:bg-emerald-700 transition"
            >
              {isSubmitting
                ? t('contact.form.submitting')
                : t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>

      <Consultation />
    </section>
  );
};
