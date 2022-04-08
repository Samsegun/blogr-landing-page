import DesignImage from "./DesignImage";
import DesignText from "./DesignText";

const DesignFuture = () => {
  return (
    <section className="my-24 text-center font-overpass max-w-[1960px] mx-auto desktop:my-20 desktop:relative ">
      <h2 className="text-2xl font-black text-headings desktop:text-4xl desktop:absolute desktop:top-[10%] desktop:left-1/2 desktop:-translate-x-1/2">
        Designed for the future
      </h2>

      <div className="desktop:flex desktop:h-[883px]">
        <DesignImage />
        <DesignText />
        <div className="hidden bg-no-repeat desktop:block desktop:basis-full desktop:bg-design-for-future desktop:bg-design-ff"></div>
      </div>
    </section>
  );
};

export default DesignFuture;
