import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import TaskDropDown from "../DropDownContent/TaskDropDown";
import DropdownMenu from "../common/DropDownMenu";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function SearchModal() {
  const { translate } = useLanguage();
  const [taskIsOpen, setTaskIsOpen] = useState(false);
  const toggleDropdown = (setState) => {
    setState((prevState) => !prevState);
  };
  return (
    <div className="flex w-auto h-auto flex-row justify-center items-center">
      <button
        className="flex items-center justify-center relative mr-1"
        onClick={() => toggleDropdown(setTaskIsOpen)}
      >
        <span className="flex flex-row w-full h-full">
          <h2 className="mr-4">{translate("task")}</h2>
          {!taskIsOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </span>
        <DropdownMenu
          isOpen={taskIsOpen}
          toggleDropdown={() => toggleDropdown(setTaskIsOpen)}
          childStyle={`w-full p-3 flex`}
          contentStyle={`absolute `}
        >
          <TaskDropDown />
        </DropdownMenu>
      </button>
      <input
        type="text"
        placeholder="Search..."
        className="py-[6px] px-[8px] bg-transparent"
      />
    </div>
  );
}

export default SearchModal;
