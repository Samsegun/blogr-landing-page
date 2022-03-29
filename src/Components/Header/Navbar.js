import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 pt-12">
      <div className="">
        <img src={logo} alt="blogger logo" />
      </div>

      <div>
        <img src={hamburger} alt="blogger logo" />
      </div>
    </nav>
  );
};

export default Navbar;
