import laptop from "../../assets/illustration-laptop-mobile.svg";

const FreeOpenImage = () => {
  return (
    <div className="desktop:hidden">
      <img src={laptop} alt="laptop" className="mx-auto" />
    </div>
  );
};

export default FreeOpenImage;
