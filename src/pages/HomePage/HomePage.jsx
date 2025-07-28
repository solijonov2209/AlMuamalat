import React from 'react';
import './homepage.css';
import { Hero } from './_components/hero';
import { Services } from './_components/Services';
import { ServicesProvider } from './_components/ServicesContext';
import { Expert } from './_components/Expert';
import { Partners } from './_components/Partners';
import { OurMedia } from './_components/OurMedia';
import { StudentSay } from './_components/StudentSay';
import { AskedQuestion } from './_components/AskedQuestion';
import { Consultation } from './_components/Consultation';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesProvider>
        <Services />
      </ServicesProvider>
      <Expert />
      <Partners />
      <OurMedia />
      <StudentSay />
      <AskedQuestion />
      <Consultation />
    </>
  );
};
