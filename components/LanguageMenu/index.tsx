import React from "react";
import { useTranslation } from "next-i18next";
import Select from "react-select";
import { useRouter } from "next/router";

const lngs: ILngs = {
  en: { label: "EN", value: "en" },
  fr: { label: "FR", value: "fr" },
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
  const { i18n } = useTranslation("common");

  const router = useRouter();

  const handleChange = (option: any) => {
    router.push(router.route, router.asPath, {
      locale: option.value,
    });
  };

  return (
    <div>
      <Select
        // styles={customStyles}
        options={Object.keys(lngs).map((lng) => (lngs as any)[lng])}
        onChange={handleChange}
        value={{
          label: i18n.language?.toLocaleUpperCase(),
          value: i18n.language,
        }}
      />
    </div>
  );
};

export default LanguageMenu;
