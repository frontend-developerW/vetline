import React from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/actions/globalActions";
import { useGlobal } from "../redux/selectors";
import { ContactMan } from "./Svgs";

function Navbar() {
  const { language, currentLang } = useGlobal();
  const dispatch = useDispatch();
  const changeLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
  };
  return (
    <div>
      <nav className="px-[4vw] py-[2vw] bg-[#E94B4B] rounded-b-[3vw] fixed w-full top-0 right-0 z-50">
        <ul className="flex items-center justify-between">
          <li>
            <a href="/" className="text-[1.2vw] text-[#fff] hover:opacity-60">
              {language['1']}
            </a>
          </li>
          <li>
            <a href="/" className="text-[1.2vw] text-[#fff] hover:opacity-60">
            {language['2']}
            </a>
          </li>
          <li>
            <a href="/" className="text-[1.2vw] text-[#fff] hover:opacity-60">
            {language['3']}
            </a>
          </li>
          <li>
            <a href="/" className="text-[1.2vw] text-[#fff] hover:opacity-60">
              <img
                className="w-[10vw]"
                src={require("../assets/img/logo.png")}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="/" className="text-[1.2vw] text-[#fff] hover:opacity-60">
            {language['4']}
            </a>
          </li>
          <li>
            <button className="flex items-center gap-[.4vw] bg-[#ffffff46] p-[.4vw] rounded-[.3vw]">
              <img
                src={`assets/img/${currentLang}.png`}
                className="w-[1.8vw] h-[1.3vw] object-cover"
                alt=""
              />
              <select
                name=""
                id=""
                onClick={changeLanguage}
                className="text-[#fff] text-[1vw] bg-transparent outline-none"
              >
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
                <option value="en">En</option>
              </select>
            </button>
          </li>
          <li>
            <button className="flex items-center gap-[.4vw] bg-[#ffffff46] p-[.4vw] px-[1vw] rounded-[.3vw] text-[1vw] text-[#fff]">
              <ContactMan />
              {language['5']}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
