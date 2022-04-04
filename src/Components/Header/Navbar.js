import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import arrow from "../../assets/icon-arrow-light.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-6 px-5 pt-12 mx-auto pb-28 desktop:w-4/5 desktop:justify-start">
      <div className="">
        <img src={logo} alt="blogger logo" />
      </div>

      <div className="desktop:hidden">
        <img src={hamburger} alt="menu" />
      </div>

      <div className="hidden text-white desktop:w-full desktop:flex desktop:justify-between">
        <ul className="flex justify-evenly basis-2/4">
          <a href="/" className="">
            Product
            <img src={arrow} alt="arrow down" />
          </a>
          <a href="/">Company</a>
          <a href="/">Connect</a>
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
