// project sign in
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../../assets/svg/Logo';
import SignImage from '../../../assets/signinimg.png';
import { Controller, useForm } from 'react-hook-form';
import useRegister from '../../../hook/useRegister';
import PhoneInput from 'react-phone-input-2';

export const SignIn = () => {
  const { control, register, handleSubmit } = useForm();
  const { handleLogin } = useRegister();

  const onSubmit = (data) => {
    console.log(data);
    const { password, phone_number } = data;
    handleLogin({ password, phone_number });
  };

  return (
    <div className="py-5">
      <div className="max-w-[1400px] w-full px-5 mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* LEFT */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-[100px]">
            <Link to="/" className="max-w-[240px] w-full h-[56px] block">
              <Logo />
            </Link>

            <h1 className="mt-10 lg:mt-[105px] mb-0 font-inter font-normal text-[40px] lg:text-[86px] leading-[100%] tracking-[4%]">
              Get started
            </h1>

            <form
              className="max-w-[454px] w-full mt-10 flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
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
                    placeholder="Telefon raqam"
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />

              {/* Password */}
              <input
                type="password"
                {...register('password')}
                placeholder="Password"
                className="px-4 py-[18px] border border-[#8f8f8f] rounded-lg"
              />

              {/* Submit */}
              <button
                type="submit"
                className="py-[18px] bg-[#009688] text-white rounded-lg text-center outline-none border-none"
              >
                Sign In
              </button>

              <Link
                to="/register"
                className="block no-underline font-inter font-normal text-[20px] lg:text-[26px] text-[#8f8f8f] leading-[100%] text-center m-0"
              >
                Create a new account !
              </Link>
            </form>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex w-1/2 mt-[10px] p-[80px_40px] xl:p-[132px_75px_70px_79px] rounded-[40px] bg-[#009688] text-white flex-col items-center justify-center">
            <img
              className="w-[300px] h-[300px] xl:w-[545px] xl:h-[535px] object-contain"
              src={SignImage}
              alt="image"
            />
            <p className="font-inter font-bold text-[24px] xl:text-[36px] leading-[34px] xl:leading-[50px] tracking-[5%] text-center mt-6">
              Welcome to Al Muamalat – Empowering Your Journey in Islamic
              Finance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
