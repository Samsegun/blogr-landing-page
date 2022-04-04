import FreeOpenImage from "./FreeOpenImage";
import FreeOpenText from "./FreeOpenText";

const FreeOpen = () => {
  return (
    <section
      className="flex flex-col gap-8 mt-48 mb-20 text-center desktop:mt-20
     desktop:flex-row desktop:h-[800px] desktop:items-center"
    >
      <div className="hidden w-full h-full desktop:block desktop:bg-free-open desktop:basis-full desktop:bg-no-repeat"></div>
      <FreeOpenImage />
      <FreeOpenText />
    </section>
  );
};

export default FreeOpen;
