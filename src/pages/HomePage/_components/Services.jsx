// components/Services.jsx
import React, { useContext } from 'react';
import { ServicesContext } from './ServicesContext';
import Card from './ServicesCard';

export const Services = () => {
  const { services } = useContext(ServicesContext);

  return (
    <div className="services">
      <div className="container">
        <div className="services-title_wrapper">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Expert guidance for managing funds in alignment with Islamic
            principles, helping you make informed, halal investment decisions.
          </p>
        </div>

        <div className="services-bottom">
          <div className="services-card_wrapper">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
