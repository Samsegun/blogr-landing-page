const StateofArtText = () => {
  return (
    <div className="h-full">
      {/* this div creates space between image and article */}
      <div className="w-full h-2/5 sm:h-1/2"></div>
      <article className="mx-auto text-center text-white font-overpass ms:w-4/5 sm:text-xl">
        <h2 className="text-4xl font-semibold">
          State of the Art Infrastructure
        </h2>
        <p className="px-10 mt-5">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </article>
    </div>
  );
};

export default StateofArtText;
