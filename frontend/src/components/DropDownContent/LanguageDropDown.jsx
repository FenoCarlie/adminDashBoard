import { useLanguage } from "../../contexts/LanguageContext";

function LanguageDropDown() {
  const { changeLanguage } = useLanguage();

  const languageList = [
    {
      name: "English",
      value: "En",
    },
    {
      name: "French",
      value: "Fr",
    },
  ];

  const handleChangeLanguage = (language) => {
    changeLanguage(language);
  };
  return (
    <div className="dropDownContent flex w-full h-[300px]">
      <ul className="w-full flex items-start flex-col overflow-auto h-full">
        {languageList.map((language) => (
          <li
            className="item px-[1.25rem] py-[0.7rem] block"
            key={language.value}
            onClick={() => handleChangeLanguage(`${language.value}`)}
          >
            {language.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageDropDown;
