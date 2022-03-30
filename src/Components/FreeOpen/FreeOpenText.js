const FreeOpenText = () => {
  return (
    <div className="mt-7 font-overpass text-body-copy">
      <article className="">
        <h2 className="mb-5 text-2xl font-black text-headings">
          Free, open, simple
        </h2>
        <p className="px-8 font-bold">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
      </article>

      <article className="mt-7">
        <h2 className="mb-5 text-2xl font-black text-headings">
          Powerful tooling
        </h2>
        <p className="px-8 font-bold">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </article>
    </div>
  );
};

export default FreeOpenText;
