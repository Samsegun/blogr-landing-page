import phones from "../../assets/illustration-phones.svg";

const StateofArtImage = () => {
  return (
    <div className="max-h-[450px] w-full">
      <img
        src={phones}
        alt="phones"
        className="mx-auto min-w-[250px] xs:max-w-[440px]"
      />
    </div>
  );
};

export default StateofArtImage;
