"use client";
import Image from "next/image";
import '../i18n';
import { useTranslation } from "react-i18next";

export default function Home() {
  const {t, i18n} = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // i18
  return (
    <div>
    <select className="language-select" onChange={(e) => changeLanguage(e.target.value)}>
  <option value="en">English</option>
  <option value="hi">Hindi</option> 
</select>

<h1>{t('welcome')}</h1>

        
    </div>
  );
}
