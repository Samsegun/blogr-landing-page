import Navbar from "./Navbar";
import Hero from "./Hero";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header
      role="banner"
      className={
        "rounded-bl-header h-header-height desktop:bg-desktop-bg " +
        styles.header
      }
    >
      <div className="h-full max-w-[1580px] mx-auto">
        <Navbar />
        <Hero />
      </div>
    </header>
  );
};

export default Header;
