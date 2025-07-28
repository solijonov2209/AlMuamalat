import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom';
import { Logo } from '../../../assets/svg/Logo';
import SignImage from '../../../assets/signinimg.png';
import '../SignIn/signin.css';
import './registe.css';
import useRegister from '../../../hook/useRegister';
import { Controller, useForm } from 'react-hook-form';

export const Register = () => {
  const { control, register, handleSubmit } = useForm();

  const { handleRegister } = useRegister();
  const onSubmit = (data) => {
    console.log(data);
    const { full_name, password, phone_number } = data;
    handleRegister({ full_name, password, phone_number });
  };
  return (
    <div className="sign-in">
      <div className="signin-container">
        <div className="signin-wrapper">
          {/* Register hero */}
          <div className="sign-left">
            <Link className="sign-logo" to="/">
              <Logo />
            </Link>
            <h1 className="sign-title">Get started</h1>
            <p className="register-text">
              Already have an account?{' '}
              <Link to="/signin" className="register-link">
                Sign In
              </Link>
            </p>

            <form className="sign-form" onSubmit={handleSubmit(onSubmit)}>
              {/* Enter Full name */}
              <input
                className="sign-input name-input"
                type="text"
                {...register('full_name')}
                placeholder="Enter your name"
              />
              {/* Enter password */}
              <input
                className="sign-input email-input"
                type="password"
                {...register('password')}
                placeholder="Enter your password"
              />
              {/* Enter Phone number */}
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
              {/* Submit form , Log in Button */}
              <button className="sign-button" type="submit">
                Log In
              </button>
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
