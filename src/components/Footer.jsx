import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/slices/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants/constants";
import lang from "../utils/constants/languageConstants";
import { Link } from "react-router-dom";

const Footer = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="relative">
      <div className="w-full absolute bottom-0 bg-black/60 text-white flex flex-col gap-10 py-14 px-[15%]">
        <div>{lang[langKey].footer.questionsCall}</div>
        <ul className="flex lg:justify-start justify-between flex-wrap text-sm text-gray-300 underline">
          <li className="w-36 h-8 text-sm md:w-64 sm:h-12">
            <span className="cursor-pointer">{lang[langKey].footer.faq}</span>
          </li>
          <li className="w-36 h-8 text-sm md:w-64 sm:h-12">
            <span className="cursor-pointer">
              {lang[langKey].footer.helpCenter}
            </span>
          </li>
          <li className="w-36 h-8 text-sm md:w-64 sm:h-12">
            <span className="cursor-pointer">
              {lang[langKey].footer.termsOfUse}
            </span>
          </li>
          <li className="w-36 h-8 text-sm md:w-64 sm:h-12">
            <span className="cursor-pointer">
              {lang[langKey].footer.privacy}
            </span>
          </li>
          <li className="w-36 h-8 text-sm md:w-64 sm:h-12">
            <span className="cursor-pointer">
              {lang[langKey].footer.cookiePreferences}
            </span>
          </li>
          <li className="w-36 h-8 text-sm md:w-64 sm:h-12">
            <span className="cursor-pointer">
              {lang[langKey].footer.corporateInformation}
            </span>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <select
            className="bg-gray-900 text-white p-2 m-2"
            onChange={handleLanguageChange}
            value={langKey}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>   
        </div>
      </div>
    </div>
  );
};

export default Footer;
