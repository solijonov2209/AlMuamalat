import React, { useState } from 'react';
import uz_logo from '../assets/svg/uz.svg';
import gb_logo from '../assets/svg/gb.svg';

const languages = [
  {
    code: 'uz',
    label: 'UZB',
    flag: uz_logo,
  },
  {
    code: 'en',
    label: 'ENG',
    flag: gb_logo,
  },
];

const LanguageSwitcher = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setOpen(false);
    console.log('Tanlangan til:', lang.code);
    // i18n.changeLanguage(lang.code);
  };

  return (
    <div className="language-switcher" onClick={() => setOpen(!open)}>
      <div className="selected">
        <img src={selectedLang.flag} alt={selectedLang.code} />
        <span>{selectedLang.label}</span>
      </div>
      {open && (
        <div className="dropdown">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="option"
              onClick={() => handleSelect(lang)}
            >
              <img src={lang.flag} alt={lang.code} />
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
