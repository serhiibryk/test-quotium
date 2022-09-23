import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

// import Select from "react-select";

const lngs: ILngs = {
  en: { label: "en", value: "en" },
  ua: { label: "ua", value: "ua" },
};

const customStyles: any = {
  option: (provided: Object, state: any) => ({
    ...provided,
    border: "none",
    color: state.isSelected ? "black" : "grey",
    padding: 10,
    // height: "40px",
    // width: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  control: () => ({
    position: "relative",
    width: "55px",
    heigth: "55px",
    fontSize: "30px",
    border: "1px solid black",

    "& .css-1okebmr-indicatorSeparator": {
      display: "none",
    },

    "& .css-tj5bde-Svg": {
      display: "none",
    },
  }),
  singleValue: (provided: Object, state: any) => {
    const opacity = state.isDisabled ? 1 : 5;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

const LanguageMenu: React.FC = (): JSX.Element => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const ISSERVER = typeof window === "undefined";
    if (!ISSERVER) {
      console.log(localStorage.getItem("i18nextLng"));

      const current = localStorage.getItem("i18nextLng") || i18n.language;
      console.log("useEffect", current);
      i18n.changeLanguage(current);
    }
  }, [i18n.language]);

  return (
    <div>
      <Select
        styles={customStyles}
        options={Object.keys(lngs).map((lng) => {
          return (lngs as any)[lng];
        })}
        onChange={(option) => i18n.changeLanguage((option as any).value)}
        value={{ label: i18n.language, value: i18n.language }}
      />
      1
    </div>
  );
};

export default LanguageMenu;
