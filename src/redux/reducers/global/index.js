import { createReducer } from "@reduxjs/toolkit";
import { setLanguage } from "../../actions/globalActions";
import langs from "../../../localization/lang.json";

const initialState = {
  language: langs[localStorage["lang"] || "uz"],
  currentLang: localStorage["lang"] || "uz", 
};

const reducer = createReducer(initialState, {
  [setLanguage]: (state, action) => {
    localStorage.setItem("lang", action.payload);
    return {
      ...state,
      language: langs[action.payload],
      currentLang: action.payload
    };
  } 
});

export default reducer;
