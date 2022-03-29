import DesignImage from "./DesignImage";
import DesignText from "./DesignText";

const DesignFuture = () => {
  return (
    <section className="my-24 text-center font-overpass">
      <h2 className="text-2xl font-black text-headings">
        Designed for the future
      </h2>

      <div>
        <DesignImage />
        <DesignText />
      </div>
    </section>
  );
};

export default DesignFuture;
