import StateofArtImage from "./StateofArtImage";
import StateofArtText from "./StateofArtText";

const StateofArt = () => {
  return (
    <section className="relative w-full mt-64 mb-16 bg-no-repeat bg-dark-gray-blue bg-circles-bg bg-StateofArt h-StateofArt rounded-tr-header rounded-bl-header">
      <StateofArtImage />
      <StateofArtText />
    </section>
  );
};

export default StateofArt;
