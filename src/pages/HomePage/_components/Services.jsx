// components/Services.jsx
import React, { useContext } from 'react';
import { ServicesContext } from './ServicesContext';
import Card from './ServicesCard';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { services } = useContext(ServicesContext);
  const { t } = useTranslation();

  return (
    <div className="services">
      <div className="container">
        <div className="services-title_wrapper">
          <h2 className="services-title">{t('services.sectionTitle')}</h2>
          <p className="services-subtitle">{t('services.sectionSubtitle')}</p>
        </div>

        <div className="services-bottom">
          <div className="services-card_wrapper">
            {services.map((service, index) => (
              <Card
                key={index}
                titleKey={service.titleKey}
                descriptionKey={service.descriptionKey}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
