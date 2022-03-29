const Hero = () => {
  return (
    <article className="w-11/12 mx-auto text-center text-white mt-28">
      <h1 className="px-4 text-4xl text-white font-overpass">
        A modern publishing platform
      </h1>
      <p className="px-6 mt-3 mb-8 text-lg">
        Grow your audience and build your online brand
      </p>
      <div className="flex justify-between w-11/12 mx-auto">
        <button className="p-3 font-extrabold bg-white rounded-full text-cta-mobilenav-lightred">
          Start for Free
        </button>
        <button className="w-1/2 p-3 font-semibold text-white border-2 border-white rounded-full">
          Learn More
        </button>
      </div>
    </article>
  );
};

export default Hero;
