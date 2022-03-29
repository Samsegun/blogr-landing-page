import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className="bg-no-repeat rounded-bl-header h-header-height bg-mobile-bg bg-top-4 bg-cta-mobilenav-lightred font-ubuntu">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
