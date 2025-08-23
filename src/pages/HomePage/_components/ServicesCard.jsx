import React from 'react';
import { useTranslation } from 'react-i18next';

const Card = ({ titleKey, descriptionKey, icon }) => {
  const { t } = useTranslation();

  return (
    <div className="service-card">
      <div className="services-card-top">
        <img src={icon} alt={t(titleKey)} className="icon" />
        <h3 className="service-card_title">{t(titleKey)}</h3>
      </div>
      <p className="service-description">{t(descriptionKey)}</p>
      <button className="learn-more">{t('services.learnMore')}</button>
    </div>
  );
};

export default Card;
