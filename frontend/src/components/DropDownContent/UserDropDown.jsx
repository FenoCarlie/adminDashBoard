import { FiUser, FiKey, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function UserDropDown() {
  const { translate } = useLanguage();
  const { changeTheme } = useContext(ThemeContext);

  return (
    <div className="dropDownContent w-auto h-auto py-1 flex flex-col">
      <section className="w-full">
        <Link className="item w-[200px] flex flex-row items-center px-[1.25rem] py-[0.7rem]">
          <FiUser />
          <label className="ml-2">{translate("my_profile")}</label>
        </Link>
        <Link className="item w-[200px] flex flex-row items-center px-[1.25rem] py-[0.7rem]">
          <FiKey />
          <label className="ml-2">{translate("change_password")}</label>
        </Link>
        <Link className="item w-[200px] flex flex-row items-center px-[1.25rem] py-[0.7rem]">
          <FiSettings />
          <label className="ml-2">{translate("my_preferences")}</label>
        </Link>
      </section>
      <span className="divider"></span>
      <section className="w-full p-[1.25rem] grid grid-cols-6 gap-4">
        <span
          onClick={() => changeTheme("light")}
          className="block w-[15px] h-[15px] mt-[2px] mr-[10px] bg-[#F2F2F2] transform transition-transform duration-300 hover:scale-125"
        />
        <span
          onClick={() => changeTheme("dark")}
          className="block w-[15px] h-[15px] mt-[2px] mr-[10px] bg-[#1E202D] transform transition-transform duration-300 hover:scale-125"
        />
      </section>
      <span className="divider"></span>
      <section className="w-full">
        <Link className="item w-[200px] flex flex-row items-center px-[1.25rem] py-[0.7rem]">
          <FiUser />
          <label className="ml-2">{translate("my_profile")}</label>
        </Link>
      </section>
    </div>
  );
}

export default UserDropDown;
