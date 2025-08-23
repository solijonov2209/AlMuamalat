import React from 'react';
import Footerlogo from '../../assets/svg/footer_logo.svg';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className=" pt-[38px] pb-[38px] mt-5 flex flex-col bg-teal-600 text-white">
      <div className="container">
        {/* Footer Logo */}
        <Link to="/" className="py-4 px-6">
          <img
            src={Footerlogo}
            alt="Footer Logo"
            className="m-auto max-w-[150px] md:max-w-[200px]"
          />
        </Link>

        {/* Navigation */}
        <nav className="py-4 px-6">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-14 justify-center">
            <li className="hover:text-black  cursor-pointer text-center">
              <Link to="/" className="text-decoration-[none]">
                {t('footer.home')}
              </Link>
            </li>
            <li className="hover:text-black cursor-pointer text-center">
              <Link to="/" className="text-decoration-[none]">
                {t('footer.about')}
              </Link>
            </li>
            <li className="hover:text-black cursor-pointer text-center">
              <Link to="/finance-tools" className="text-decoration-[none]">
                {t('footer.financeTools')}
              </Link>
            </li>
            <li className="hover:text-black cursor-pointer text-center">
              <Link to="/contact" className="text-decoration-[none]">
                {t('footer.contact')}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main content would go here */}
        <main className="flex-grow p-6">
          {/* Your main content would be placed here */}
        </main>

        {/* Footer */}
        <footer className="py-4 text-center">
          <div className="flex justify-center space-x-4 mb-2">
            <Link to="https://telegram.com" className="text-xl">
              <FaYoutube className="text-xl text-[24px] hover:text-[#cc000a] transition duration-300 ease-in-out" />
            </Link>
            <Link to="https://telegram.com" className="text-xl">
              <FaFacebook className="text-xl text-[24px] hover:text-[#0a00cc] transition duration-300 ease-in-out" />
            </Link>
            <Link to="https://twitter.com" className="text-xl">
              <FaTwitter className="text-xl text-[24px]  hover:text-[#1DA1F2] transition duration-300 ease-in-out" />
            </Link>
            <Link to="https://instagram.com" className="text-xl">
              <FaInstagram className="text-xl text-[24px]  hover:text-[#cc000a] transition duration-300 ease-in-out" />
            </Link>
          </div>
          <hr className="border-gray-300 my-2 max-w-7xl mx-auto mt-[48px] mb-[48px]" />
          <p className="text-sm ">{t('footer.copyright')}</p>
        </footer>
      </div>
    </div>
  );
};
