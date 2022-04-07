const DesignText = () => {
  return (
    <div className="sm:w-small-screen sm:m-small-screen desktop:basis-full desktop:self-center desktop:text-left desktop:w-full">
      <div className="desktop:w-[80%] desktop:mx-auto">
        <article>
          <h2 className="px-12 mb-4 text-3xl font-black text-headings desktop:px-0">
            Introducing an extensible editor
          </h2>

          <p className="font-semibold px-9 desktop:px-0 text-body-copy desktop:text-base">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </article>

        <article className="mt-9 desktop:mt-14">
          <h2 className="px-12 mb-4 text-3xl font-black text-headings desktop:px-0">
            Robust content management
          </h2>

          <p className="font-semibold px-9 text-body-copy desktop:px-0 desktop:text-base">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </article>
      </div>
    </div>
  );
};

export default DesignText;
