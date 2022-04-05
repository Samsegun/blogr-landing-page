import arrow from "../../assets/icon-arrow-dark.svg";

const MobileNav = () => {
  return (
    <div
      aria-label="hidden"
      className="absolute z-20 top-[20%] left-1/2 flex flex-col justify-between
     w-11/12 bg-white h-[50vh] shadow-2xl pt-4 pb-8
    rounded-lg text-xl font-semibold font-overpass text-body-copy
    animate-slide-in"
    >
      <nav className="w-4/5 mx-auto border-b-[1px] border-footer-text">
        <ul className="flex flex-col items-center">
          <a href="/" className="my-4">
            Product
            <img src={arrow} alt="arrow down" className="inline ml-2" />
          </a>
          <a href="/" className="my-4">
            Company
            <img src={arrow} alt="arrow down" className="inline ml-2" />
          </a>
          <a href="/" className="my-4">
            Connect
            <img src={arrow} alt="arrow down" className="inline ml-2" />
          </a>
        </ul>
      </nav>

      <div className="flex flex-col items-center">
        <button className="my-4 text-xl font-semibold">Login</button>
        <button className="px-8 py-1 font-semibold text-white rounded-full bg-button-gradient font-ubuntu">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
