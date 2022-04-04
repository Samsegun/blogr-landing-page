import StateofArtImage from "./StateofArtImage";
import StateofArtText from "./StateofArtText";

const StateofArt = () => {
  return (
    <section
      className="relative flex flex-col items-center w-full z-2 gap-4
     after:absolute after:w-full after:h-[90%] after:bg-dark-gray-blue after:-z-[1] after:top-[28%]
     after:bg-circles-bg after:bg-StateofArt after:bg-no-repeat
     after:rounded-tr-header after:rounded-bl-header
     desktop:flex-row
     desktop:gap-0
     desktop:after:bg-desktop-soa
     desktop:after:h-[72%]
     desktop:after:top-[12%]"
    >
      <StateofArtImage />
      <StateofArtText />
    </section>

    // <section className="relative w-full mt-64 mb-16 bg-no-repeat bg-dark-gray-blue bg-circles-bg bg-StateofArt h-StateofArt rounded-tr-header rounded-bl-header">
    //   <StateofArtImage />
    //   <StateofArtText />
    // </section>
  );
};

export default StateofArt;
