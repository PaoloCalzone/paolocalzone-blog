import { useState } from "react";
import { useRouter } from "next/router";

const SwitchLang = () => {
  const router = useRouter();
  const [lang, setLang] = useState("en");

  const switchLang = () => {
    console.log("SWITCH LANG", lang);
    if (lang === "en") {
      setLang("fr");
      router.push("/", "/fr", { locale: "fr" });
    } else {
      setLang("en");
      router.push("/fr", "/", { locale: "en" });
    }
  };

  return (
    <div className="pointer-events-auto">
      <button
        className="pointer-events-auto"
        onClick={switchLang}
        tw="bg-white text-black font-bold py-2 px-4 rounded-full"
      >
        {lang === "en" ? "FR" : "EN"}
      </button>
    </div>
  );
};

export default SwitchLang;
