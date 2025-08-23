import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const UserProfile = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container">
        <ul className="flex gap-3 mb-5">
          <li>
            <NavLink
              to="info"
              className={({ isActive }) =>
                `w-[157px] block text-center border-1 rounded-2xl font-medium no-underline py-2 px-4 ${
                  isActive
                    ? 'bg-[#009688] text-white'
                    : 'bg-white text-[#686868]'
                }`
              }
            >
              {t('userProfile.profile')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="courses"
              className={({ isActive }) =>
                `w-[157px] block text-center border-1 rounded-2xl font-medium no-underline py-2 px-4 ${
                  isActive
                    ? 'bg-[#009688] text-white'
                    : 'bg-white text-[#686868]'
                }`
              }
            >
              {t('userProfile.courses')}
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};
