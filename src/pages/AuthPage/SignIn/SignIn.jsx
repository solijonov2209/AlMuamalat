// project sign up
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../../assets/svg/Logo';
import SignImage from '../../../assets/signinimg.png';
import './signin.css';
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
    <div className="sign-in">
      <div className="signin-container">
        <div className="signin-wrapper">
          <div className="sign-left">
            <Link className="sign-logo" to="/">
              <Logo />
            </Link>
            <h1 className="sign-title">Get started</h1>
            <form className="sign-form" onSubmit={handleSubmit(onSubmit)}>
              {/* Enter your Phone Number  */}
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
              {/* Enter your Password */}
              <input
                className="sign-input"
                type="password"
                name="password"
                {...register('password')}
                placeholder="Password"
              />

              <button className="sign-button" type="submit">
                Sign In
              </button>
              <Link to="/register" className="sign-subtitle">
                Create a new account !
              </Link>
            </form>
          </div>

          <div className="sign-right">
            <img className="sign-image" src={SignImage} alt="image" />
            <p className="sign-text">
              Welcome to Al Muamalat – Empowering Your Journey in Islamic
              Finance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
