import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";

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
          <a href="/">Product</a>
          <a href="/">Company</a>
          <a href="/">Connect</a>
        </ul>

        <div className="flex justify-end basis-2/4">
          <button className="mr-8">Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
