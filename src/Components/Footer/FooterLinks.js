const FooterLinks = () => {
  return (
    <div className="mt-12 desktop:flex desktop:mt-0 desktop:basis-[70%] desktop:justify-evenly desktop:text-left">
      <section className="mb-10 ">
        <h3 className="text-lg">Product</h3>
        <ul className="flex flex-col mt-5 text-lg ">
          <a href="/" className="mb-2 text-footer-text hover:underline">
            Overview
          </a>
          <a href="/" className="mb-2 text-footer-text hover:underline">
            Pricing
          </a>
          <a href="/" className="mb-2 text-footer-text hover:underline">
            Marketplace
          </a>
          <a href="/" className="mb-2 text-footer-text hover:underline">
            Features
          </a>
          <a href="/" className="mb-2 text-footer-text hover:underline">
            Integrations
          </a>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-lg">Company</h3>
        <ul className="flex flex-col mt-5 text-lg">
          <a href="/" className="mb-2 text-footer-text hover:underline">
            About
          </a>
          <a href="/" className="mb-2 text-footer-text hover:underline">
            Team
          </a>
          <a href="/" className="mb-2 text-footer-text hover:underline">
            Blog
          </a>
          <a href="/" className="mb-2 text-footer-text hover:underline">
            Careers
          </a>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-lg">Connect</h3>
        <ul className="flex flex-col mt-5 text-lg">
          <a href="/" className="mb-2 text-footer-text hover:underline">
            Contact
          </a>
          <a href="/" className="mb-2 text-footer-text hover:underline">
            Newsletter
          </a>
          <a href="/" className="mb-2 text-footer-text hover:underline">
            LinkedIn
          </a>
        </ul>
      </section>
    </div>
  );
};

export default FooterLinks;
