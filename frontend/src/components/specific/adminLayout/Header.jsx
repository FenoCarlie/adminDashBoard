import React, { useState } from "react";
import {
  FiMenu,
  FiCheckCircle,
  FiGrid,
  FiBriefcase,
  FiMonitor,
  FiSearch,
  FiPlusCircle,
  FiGlobe,
  FiClock,
  FiBell,
  FiMail,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import DropdownMenu from "../../common/DropDownMenu";
import ClientDropDown from "../../DropDownContent/ClientDropDown";
import UserDropDown from "../../DropDownContent/UserDropDown";
import Modal from "../../common/Modal";
import SearchModal from "../../modalContent/SearchModal";
import LanguageDropDown from "../../DropDownContent/LanguageDropDown";
import { useLanguage } from "../../../contexts/LanguageContext";

function Header() {
  const { translate } = useLanguage();
  const [layoutIsOpen, setLayoutIsOpen] = useState(false);
  const [clientIsOpen, setClientIsOpen] = useState(false);
  const [dashboardIsOpen, setDashboardIsOpen] = useState(false);
  const [languageIsOpen, setLanguageIsOpen] = useState(false);
  const [plusIsOpen, setPlusIsOpen] = useState(false);
  const [notificationIsOpen, setNotificationIsOpen] = useState(false);
  const [messageIsOpen, setMessageIsOpen] = useState(false);
  const [userIsOpen, setUserIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const toggleDropdown = (setState) => {
    setState((prevState) => !prevState);
  };

  return (
    <div className="header h-full w-full flex flex-row justify-between py-[6.75px] px-[10px]">
      <section className="w-[50%] flex justify-start h-full items-center flex-row">
        <button className="burger">
          <FiMenu />
        </button>
        <Link className="link">
          <FiCheckCircle />
        </Link>
        <button
          className="link relative"
          onClick={() => toggleDropdown(setLayoutIsOpen)}
        >
          <FiGrid />
          <DropdownMenu
            isOpen={layoutIsOpen}
            toggleDropdown={() => toggleDropdown(setLayoutIsOpen)}
            childStyle={`w-full p-3 flex`}
            contentStyle={`absolute`}
          >
            <ClientDropDown />
          </DropdownMenu>
        </button>
        <button
          className="link relative"
          onClick={() => toggleDropdown(setClientIsOpen)}
        >
          <FiBriefcase />
          <DropdownMenu
            isOpen={clientIsOpen}
            toggleDropdown={() => toggleDropdown(setClientIsOpen)}
            childStyle={``}
            contentStyle={`absolute`}
          ></DropdownMenu>
        </button>
        <button
          className="link relative"
          onClick={() => toggleDropdown(setDashboardIsOpen)}
        >
          <FiMonitor />
          <DropdownMenu
            isOpen={dashboardIsOpen}
            toggleDropdown={() => toggleDropdown(setDashboardIsOpen)}
            childStyle={``}
            contentStyle={`absolute`}
          ></DropdownMenu>
        </button>
      </section>
      <section className="w-[50%] flex justify-end h-full items-center flex-row">
        <button onClick={openModal} className="link">
          <FiSearch />
        </button>
        <Modal
          show={showModal}
          onClose={closeModal}
          modalStyle={"rounded-[50px] "}
        >
          <SearchModal />
        </Modal>
        <button
          className="link relative"
          onClick={() => toggleDropdown(setPlusIsOpen)}
        >
          <FiPlusCircle />
          <DropdownMenu
            isOpen={plusIsOpen}
            toggleDropdown={() => toggleDropdown(setPlusIsOpen)}
            childStyle={``}
            contentStyle={`absolute`}
          ></DropdownMenu>
        </button>
        <button
          className="link relative"
          onClick={() => toggleDropdown(setLanguageIsOpen)}
        >
          <FiGlobe />
          <DropdownMenu
            isOpen={languageIsOpen}
            toggleDropdown={() => toggleDropdown(setLanguageIsOpen)}
            childStyle={``}
            contentStyle={`absolute`}
          >
            <LanguageDropDown />
          </DropdownMenu>
        </button>
        <button className="link">
          <FiClock />
        </button>
        <button
          className="link relative"
          onClick={() => toggleDropdown(setNotificationIsOpen)}
        >
          <FiBell />
          <DropdownMenu
            isOpen={notificationIsOpen}
            toggleDropdown={() => toggleDropdown(setNotificationIsOpen)}
            childStyle={``}
            contentStyle={`absolute`}
          ></DropdownMenu>
        </button>
        <button
          className="link relative"
          onClick={() => toggleDropdown(messageIsOpen)}
        >
          <FiMail />
          <DropdownMenu
            isOpen={messageIsOpen}
            toggleDropdown={() => toggleDropdown(setMessageIsOpen)}
            childStyle={``}
            contentStyle={`absolute`}
          ></DropdownMenu>
        </button>

        <button
          className="link relative user flex flex-row justify-center items-center text-[13.5px]"
          onClick={() => toggleDropdown(setUserIsOpen)}
        >
          <img
            src="./src/assets/images/_file62ad94f892365-avatar.png"
            className="h-[30px] w-[30px] rounded-full"
            alt="Avatar"
          />
          <label className="ml-[10px]">John Doe</label>
          <DropdownMenu
            isOpen={userIsOpen}
            toggleDropdown={() => toggleDropdown(setUserIsOpen)}
            childStyle={`text-[13.5px]`}
            contentStyle={`absolute right-0`}
          >
            <UserDropDown />
          </DropdownMenu>
        </button>
      </section>
    </div>
  );
}

export default Header;
