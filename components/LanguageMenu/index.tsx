import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Select from "react-select";

const lngs: ILngs = {
  en: { label: "ENG", value: "eng" },
  ua: { label: "UA", value: "ua" },
};

const LanguageMenu: React.FC = (): JSX.Element => {
  const [currentLng, setCurrentLng] = useState("");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const ISSERVER = typeof window === "undefined";

    if (!ISSERVER) {
      const current = localStorage.getItem("i18nextLng") || i18n.language;
      setCurrentLng(current);
    }
  }, []);
  console.log(currentLng);

  return (
    <div>
      <Select
        options={Object.keys(lngs).map((lng) => {
          return (lngs as any)[lng];
        })}
        onChange={(option) => i18n.changeLanguage((option as any).value)}
        defaultValue={{ label: currentLng, value: currentLng }}
      />
    </div>
  );
};

export default LanguageMenu;
