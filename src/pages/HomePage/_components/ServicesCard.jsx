// components/Card.jsx
import React from 'react';

const Card = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="services-card-top">
        <img src={icon} alt={title} className="icon" />
        <h3 className="service-card_title">{title}</h3>
      </div>
      <p className="service-description">{description}</p>
      <button className="learn-more">Learn more</button>
    </div>
  );
};

export default Card;
