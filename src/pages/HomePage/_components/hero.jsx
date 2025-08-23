import React from 'react';
import heroImg from '../../../assets/hero-img.png';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-left">
            <p className="hero-subtitle">{t('hero_subtitle')}</p>
            <h1 className="hero-title">{t('hero_title')}</h1>
            <button className="hero-btn">{t('hero_button')}</button>
          </div>
          <div className="hero-right">
            <div className="hero-student">
              <p className="hero-studentp">
                <span className="hero-student_span">
                  {t('hero_student_count')}
                </span>{' '}
                <br />
                <span className="hero-student_text">
                  {t('hero_student_text')}
                </span>
              </p>
            </div>
            <img
              className="hero-img"
              src={heroImg}
              width="504"
              height="572"
              alt="hero Img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
