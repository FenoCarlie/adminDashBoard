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
function Header() {
  return (
    <div className="header h-full w-full flex fex-row justify-between py-[6.75px] px-[10px]">
      <section className="w-[50%] flex justify-start h-full items-center flex-row">
        <button className="burger">
          <FiMenu />
        </button>
        <button>
          <FiCheckCircle />
        </button>
        <button>
          <FiGrid />
        </button>
        <Link>
          <FiBriefcase />
        </Link>
        <button>
          <FiMonitor />
        </button>
      </section>
      <section className="w-[50%] flex justify-end h-full items-center flex-row">
        <button>
          <FiSearch />
        </button>
        <button>
          <FiPlusCircle />
        </button>
        <button>
          <FiGlobe />
        </button>
        <button>
          <FiClock />
        </button>
        <button>
          <FiBell />
        </button>
        <button>
          <FiMail />
        </button>
        <section className="user flex flex-row justify-center items-center">
          <img
            src="./src/assets/images/_file62ad94f892365-avatar.png"
            className="h-[30px] w-[30px] rounded-full"
            alt=" "
          />
          <label className="ml-[10px]">john Doe</label>
        </section>
      </section>
    </div>
  );
}

export default Header;
