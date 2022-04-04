import editorMobile from "../../assets/illustration-editor-mobile.svg";
// import editorDesktop from "../../assets/illustration-editor-desktop.svg";

const DesignImage = () => {
  return (
    <div className="order-1 my-9 desktop:basis-full desktop:hidden">
      <div>
        <img
          src={editorMobile}
          alt="editor pics"
          className="mx-auto desktop:hidden"
        />
        {/* <img
          src={editorDesktop}
          alt="editor pics"
          className="hidden mx-auto desktop:block"
        /> */}
      </div>
    </div>
  );
};

export default DesignImage;
