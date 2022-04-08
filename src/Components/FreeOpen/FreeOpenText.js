const FreeOpenText = () => {
  return (
    <div className="mt-7 font-overpass text-body-copy sm:w-small-screen sm:m-small-screen desktop:basis-full desktop:text-left desktop:w-4/5">
      <article>
        <h2 role="banner" className="mb-5 text-2xl font-black text-headings">
          Free, open, simple
        </h2>
        <p className="px-8 font-bold desktop:px-0 desktop:w-4/5">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
      </article>

      <article className="mt-7 desktop:mt-20">
        <h2 className="mb-5 text-2xl font-black text-headings">
          Powerful tooling
        </h2>
        <p className="px-8 font-bold desktop:px-0 desktop:w-4/5">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </article>
    </div>
  );
};

export default FreeOpenText;
