const DesignText = () => {
  return (
    <div>
      <article>
        <h2 className="px-12 mb-4 text-3xl font-black text-headings">
          Introducing an extensible editor
        </h2>

        <p className="font-semibold px-9 text-body-copy">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
      </article>

      <article className="mt-9">
        <h2 className="px-12 mb-4 text-3xl font-black text-headings">
          Robust content management
        </h2>

        <p className="font-semibold px-9 text-body-copy">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </article>
    </div>
  );
};

export default DesignText;
