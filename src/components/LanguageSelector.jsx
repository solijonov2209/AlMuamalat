import React, { useState, useEffect, useRef } from 'react';
import uz_logo from '../assets/svg/uz.svg';
import gb_logo from '../assets/svg/gb.svg';
import i18n from '../i18n';

const languages = [
  { code: 'uz', label: 'UZB', flag: uz_logo },
  { code: 'en', label: 'ENG', flag: gb_logo },
];

const LanguageSwitcher = () => {
  const [selectedLang, setSelectedLang] = useState(
    languages.find((l) => l.code === i18n.language) || languages[0]
  );
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // LocalStorage dan tilni yuklash
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      const lang = languages.find((l) => l.code === savedLang);
      if (lang) {
        setSelectedLang(lang);
        i18n.changeLanguage(savedLang);
      }
    }
  }, []);

  // Tashqariga bosilganda dropdown yopiladi
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setOpen(false);
    i18n.changeLanguage(lang.code);
    localStorage.setItem('lang', lang.code);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Selected language */}
      <div
        className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md px-2 py-1 bg-white hover:bg-gray-100 focus:ring-2 focus:ring-blue-400"
        role="button"
        tabIndex={0}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
      >
        <img
          src={selectedLang.flag}
          alt={selectedLang.code}
          className="w-5 h-5"
        />
        <span className="text-sm font-medium">{selectedLang.label}</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 rounded-md shadow-md z-20">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
              role="button"
              tabIndex={0}
              onClick={() => handleSelect(lang)}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(lang)}
            >
              <img src={lang.flag} alt={lang.code} className="w-5 h-5" />
              <span className="text-sm font-medium">{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
