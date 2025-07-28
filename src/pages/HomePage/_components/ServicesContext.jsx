// components/ServicesContext.jsx
import React, { createContext } from 'react';
import servicesData from './ServicesData';

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  return (
    <ServicesContext.Provider value={{ services: servicesData }}>
      {children}
    </ServicesContext.Provider>
  );
};
