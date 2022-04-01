const Hero = () => {
  return (
    <article className="w-11/12 mx-auto text-center text-white">
      <h1 className="px-4 text-4xl text-white font-overpass desktop:text-[3.5rem]">
        A modern publishing platform
      </h1>
      <p className="px-6 mt-3 mb-8 text-lg font-overpass desktop:mt-6">
        Grow your audience and build your online brand
      </p>
      <div
        className="flex justify-between w-11/12 max-w-xl mx-auto 
      font-ubuntu sm:max-w-[525px] 
      desktop:w-1/2 desktop:justify-evenly"
      >
        <button className="p-3 font-extrabold bg-white rounded-full text-cta-mobilenav-lightred desktop:w-4/12">
          Start for Free
        </button>
        <button className="w-1/2 p-3 font-semibold text-white border-2 border-white rounded-full desktop:w-4/12">
          Learn More
        </button>
      </div>
    </article>
  );
};

export default Hero;
