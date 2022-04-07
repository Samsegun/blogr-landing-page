import ReactDOM from "react-dom";
import { useReducer, useState } from "react";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import closeBtn from "../../assets/icon-close.svg";
import arrow from "../../assets/icon-arrow-light.svg";
import MobileNav from "./MobileNav";

const initialState = { product: false, company: false, connect: false };
const reducer = (state, action) => {
  switch (action.type) {
    case "product":
      return { product: !state.product, company: false, connect: false };
    case "company":
      return { company: !state.company, product: false, connect: false };
    case "connect":
      return { connect: !state.connect, product: false, company: false };
    default:
      return;
  }
};

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [curState, dispatchFn] = useReducer(reducer, initialState);

  const mobileMenuHandler = () => {
    setShowNav(!showNav);
  };

  return (
    <nav
      role="navigation"
      className="relative z-0 flex items-center justify-between gap-6 px-5 pt-12 mx-auto pb-28 desktop:w-4/5 desktop:justify-start"
    >
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

      {/* main navigation */}
      <div className="hidden text-white desktop:w-full desktop:flex desktop:justify-between desktop:items-center">
        <ul className="flex justify-evenly basis-2/4">
          <li
            className="relative"
            onClick={() => dispatchFn({ type: "product" })}
          >
            <span className="hover:border-b hover:cursor-pointer">Product</span>
            <img
              src={arrow}
              alt="arrow down"
              className={
                curState.product
                  ? "hidden ml-2 desktop:inline rotate-180 transition-all duration-300 hover:cursor-pointer"
                  : "hidden ml-2 desktop:inline transition-all duration-300"
              }
            />
            <div
              className={
                curState.product
                  ? "absolute rounded-md bg-white text-headings h-[163px] text-sm opacity-100 transition-all duration-300"
                  : "absolute rounded-md overflow-hidden h-0 opacity-0 transition-all duration-300"
              }
            >
              <ul className="flex flex-col items-center">
                <li className="px-2 my-4 hover:font-medium hover:cursor-pointer">
                  Designs
                </li>
                <li className="px-2 my-4 hover:font-medium hover:cursor-pointer">
                  Infrastructure
                </li>
                <li className="px-2 my-4 hover:font-medium hover:cursor-pointer">
                  Tools
                </li>
              </ul>
            </div>
          </li>

          <li
            className="relative"
            onClick={() => dispatchFn({ type: "company" })}
          >
            <span className="hover:border-b hover:cursor-pointer">Company</span>
            <img
              src={arrow}
              alt="arrow down"
              className={
                curState.company
                  ? "hidden ml-2 desktop:inline rotate-180 transition-all duration-300 hover:cursor-pointer"
                  : "hidden ml-2 desktop:inline transition-all duration-300"
              }
            />

            <div
              className={
                curState.company
                  ? "absolute rounded-md bg-white text-headings h-[163px] text-sm w-full opacity-100 transition-all duration-300"
                  : "absolute rounded-md overflow-hidden h-0 opacity-0 transition-all duration-300"
              }
            >
              <ul className="flex flex-col items-center">
                <li className="px-2 my-4 hover:font-medium hover:cursor-pointer">
                  Resources
                </li>
                <li className="px-2 my-4 hover:font-medium hover:cursor-pointer">
                  Team
                </li>
                <li className="px-2 my-4 hover:font-medium hover:cursor-pointer">
                  Culture
                </li>
              </ul>
            </div>
          </li>

          <li
            className="relative "
            onClick={() => dispatchFn({ type: "connect" })}
          >
            <span className="hover:border-b hover:cursor-pointer">Connect</span>
            <img
              src={arrow}
              alt="arrow down"
              className={
                curState.connect
                  ? "hidden ml-2 desktop:inline rotate-180 transition-all duration-300 hover:cursor-pointer"
                  : "hidden ml-2 desktop:inline transition-all duration-300"
              }
            />

            <div
              className={
                curState.connect
                  ? "absolute rounded-md bg-white text-headings h-[163px] text-sm opacity-100 transition-all duration-300"
                  : "absolute rounded-md overflow-hidden h-0 opacity-0 transition-all duration-300"
              }
            >
              <ul className="flex flex-col items-center">
                <li className="px-2 my-4 hover:font-medium hover:cursor-pointer">
                  Contact
                </li>
                <li className="px-2 my-4 hover:font-medium hover:cursor-pointer">
                  Newsletter
                </li>
                <li className="px-2 my-4 hover:font-medium hover:cursor-pointer">
                  LinkedIn
                </li>
              </ul>
            </div>
          </li>
        </ul>

        {/* ctas */}
        <div className="flex items-center justify-end text-lg font-black basis-2/4">
          <button className="mr-7">Login</button>
          <button className="px-8 py-1 font-semibold transition-all duration-300 bg-white rounded-full text-cta-mobilenav-lightred hover:bg-cta-mobilenav-vlightred hover:text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
