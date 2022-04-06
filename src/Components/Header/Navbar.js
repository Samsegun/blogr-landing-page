import ReactDOM from "react-dom";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import closeBtn from "../../assets/icon-close.svg";
import arrow from "../../assets/icon-arrow-light.svg";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const mobileMenuHandler = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="relative z-0 flex items-center justify-between gap-6 px-5 pt-12 mx-auto pb-28 desktop:w-4/5 desktop:justify-start">
      {/* brand icon */}
      <div>
        <img src={logo} alt="blogger logo" />
      </div>

      {/* hamburger icon */}
      {!showNav && (
        <div
          className="desktop:hidden hover:cursor-pointer hover:bg-footer-text animate-open-nav"
          onClick={mobileMenuHandler}
        >
          <img src={hamburger} alt="menu" />
        </div>
      )}

      {/* close icon */}
      {showNav && (
        <div
          className="animate-close-nav hover:cursor-pointer desktop:hidden"
          onClick={mobileMenuHandler}
        >
          <img src={closeBtn} alt="close icon" />
        </div>
      )}

      {/* mobile navigation */}
      {showNav &&
        ReactDOM.createPortal(
          <MobileNav />,
          document.getElementById("mobile-nav")
        )}

      <div className="hidden text-white desktop:w-full desktop:flex desktop:justify-between desktop:items-center">
        <ul className="flex justify-evenly basis-2/4">
          <a href="/" className="">
            Product
            <img
              src={arrow}
              alt="arrow down"
              className="hidden ml-2 desktop:inline"
            />
          </a>
          <a href="/">
            Company
            <img
              src={arrow}
              alt="arrow down"
              className="hidden ml-2 desktop:inline"
            />
          </a>
          <a href="/">
            Connect
            <img
              src={arrow}
              alt="arrow down"
              className="hidden ml-2 desktop:inline"
            />
          </a>
        </ul>

        <div className="flex items-center justify-end text-lg font-black basis-2/4">
          <button className="mr-7">Login</button>
          <button className="px-8 py-1 font-semibold bg-white rounded-full text-cta-mobilenav-lightred">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
