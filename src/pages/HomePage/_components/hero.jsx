import React from 'react';
import heroImg from '../../../assets/hero-img.png';
export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-left">
              <p className="hero-subtitle">
                Seeking Knowledge is an Obligation in Islam
              </p>
              <h1 className="hero-title">
                Enhance Your Understanding of Islamic Ethics with Al-Muamalat
              </h1>
              <button className="hero-btn">Students’ opnion</button>
            </div>
            <div className="hero-right">
              <div className="hero-student">
                <p className="hero-studentp">
                  <span className="hero-student_span"> 250k</span> <br />
                  <span className="hero-student_text">Assisted Student</span>
                </p>
              </div>
              <img
                className="hero-img"
                src={heroImg}
                width={'504px'}
                height={'572px'}
                alt="hero Img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
