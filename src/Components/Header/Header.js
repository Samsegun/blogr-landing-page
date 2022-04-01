import Navbar from "./Navbar";
import Hero from "./Hero";
import mobileBg from "../../assets/bg-pattern-intro-mobile.svg";

const headerStyle = {
  background: `linear-gradient(to top left, 
    rgba(255, 61, 84, 0.3) 20%, rgba(255, 143, 112, 0.8) 80%), 
    url(${mobileBg}) right -38rem bottom -32rem, #ff3d54 no-repeat`,
};

const Header = () => {
  return (
    <header
      className="rounded-bl-header h-header-height desktop:bg-desktop-bg"
      style={headerStyle}
    >
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
