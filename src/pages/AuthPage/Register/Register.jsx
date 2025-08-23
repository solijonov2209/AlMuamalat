import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from '../../../assets/svg/Logo';
import SignImage from '../../../assets/signinimg.png';
import useRegister from '../../../hook/useRegister';
import { Controller, useForm } from 'react-hook-form';

export const Register = () => {
  const { t } = useTranslation();
  const { control, register, handleSubmit } = useForm();
  const { handleRegister } = useRegister();

  const onSubmit = (data) => {
    const { full_name, password, phone_number } = data;
    handleRegister({ full_name, password, phone_number });
  };

  return (
    <div className="py-5">
      <div className="max-w-[1400px] w-full px-5 mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-[100px]">
            <Link to="/" className="max-w-[240px] w-full h-[56px] block">
              <Logo />
            </Link>

            <h1 className="mt-10 lg:mt-[105px] mb-0 font-inter font-normal text-[40px] lg:text-[86px] leading-[100%] tracking-[4%]">
              {t('register.title')}
            </h1>

            <p className="font-inter text-[18px] lg:text-[26px] font-normal leading-[100%] text-[#8f8f8f] mb-10 lg:mb-20 mt-0">
              {t('register.haveAccount')}{' '}
              <Link
                to="/signin"
                className="font-inter text-[18px] lg:text-[26px] font-bold leading-[100%] text-[#009688] no-underline"
              >
                {t('register.signIn')}
              </Link>
            </p>

            <form
              className="max-w-[454px] w-full mt-6 lg:mt-10 flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Full name */}
              <input
                type="text"
                {...register('full_name')}
                placeholder={t('register.name')}
                className="w-full h-[50px] rounded-md border border-gray-300 px-4 pr-12 bg-[url('../../assets/svg/user.svg')] bg-no-repeat bg-[length:24px] bg-[position:calc(100%-18px)_center] text-base"
              />

              {/* Password */}
              <input
                type="password"
                {...register('password')}
                placeholder={t('register.password')}
                className="px-4 py-[18px] border border-[#8f8f8f] rounded-lg bg-[url('../../assets/svg/EmailIcon.svg')] bg-no-repeat bg-[length:24px] bg-[position:calc(100%-18px)_center]"
              />

              {/* Phone Number */}
              <Controller
                name="phone_number"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country={'uz'}
                    inputStyle={{
                      width: '100%',
                      height: '50px',
                      fontSize: '16px',
                    }}
                    placeholder={t('register.phone')}
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />

              {/* Submit */}
              <button
                type="submit"
                className="py-[18px] bg-[#009688] text-white rounded-lg text-center outline-none border-none"
              >
                {t('register.submit')}
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex w-1/2 mt-[10px] p-[60px_30px] xl:p-[132px_75px_70px_79px] rounded-[40px] bg-[#009688] text-white flex-col items-center justify-center">
            <img
              className="w-[280px] h-[280px] xl:w-[545px] xl:h-[535px] object-contain"
              src={SignImage}
              alt={t('register.imageAlt')}
            />
            <p className="font-inter font-bold text-[22px] xl:text-[36px] leading-[32px] xl:leading-[50px] tracking-[5%] text-center mt-6">
              {t('register.welcomeMessage')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
