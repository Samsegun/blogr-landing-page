import StateofArtImage from "./StateofArtImage";
import StateofArtText from "./StateofArtText";

const StateofArt = () => {
  return (
    <section
      className="relative
     after:absolute after:w-full after:h-[90%] after:bg-dark-gray-blue after:-z-[1] after:top-[28%]
     after:bg-circles-bg after:bg-StateofArt after:bg-no-repeat
     after:rounded-tr-header after:rounded-bl-header
     desktop:after:bg-desktop-soa
     desktop:after:h-[72%]
     desktop:after:top-[12%]"
    >
      <div className="flex flex-col items-center w-full gap-4 max-w-[1580px] mx-auto desktop:flex-row desktop:gap-0">
        <StateofArtImage />
        <StateofArtText />
      </div>
    </section>
  );
};

export default StateofArt;
