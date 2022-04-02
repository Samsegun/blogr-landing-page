import Navbar from "./Navbar";
import Hero from "./Hero";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header
      className={
        "rounded-bl-header h-header-height desktop:bg-desktop-bg " +
        styles.header
      }
    >
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
