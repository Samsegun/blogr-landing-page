import StateofArtImage from "./StateofArtImage";
import StateofArtText from "./StateofArtText";

const StateofArt = () => {
  return (
    <section className="relative mb-16 bg-no-repeat mt-52 bg-dark-gray-blue bg-circles-bg bg-StateofArt h-StateofArt rounded-tr-header rounded-bl-header">
      <StateofArtImage />
      <StateofArtText />
    </section>
  );
};

export default StateofArt;
