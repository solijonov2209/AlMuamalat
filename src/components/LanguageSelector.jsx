import React, { useState } from "react";
import uz_logo from "../assets/svg/uz.svg";
import gb_logo from "../assets/svg/gb.svg";

const languages = [
  {
    code: "uz",
    label: "UZB",
    flag: uz_logo,
  },
  {
    code: "en",
    label: "ENG",
    flag: gb_logo,
  },
];

const LanguageSwitcher = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setOpen(false);
    console.log("Tanlangan til:", lang.code);
    // i18n.changeLanguage(lang.code);
  };

  return (
    <div className="relative">
      {/* Selected language */}
      <div
        className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md px-2 py-1 bg-white hover:bg-gray-100"
        onClick={() => setOpen(!open)}
      >
        <img src={selectedLang.flag} alt={selectedLang.code} className="w-5 h-5" />
        <span className="text-sm font-medium">{selectedLang.label}</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 rounded-md shadow-md z-20">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(lang)}
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
