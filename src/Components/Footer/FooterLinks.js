const FooterLinks = () => {
  return (
    <div className="mt-12">
      <section className="mb-10">
        <h3 className="text-lg">Product</h3>
        <ul className="flex flex-col mt-5 text-lg">
          <a href="/" className="mb-2 text-footer-text">
            Overview
          </a>
          <a href="/" className="mb-2 text-footer-text">
            Pricing
          </a>
          <a href="/" className="mb-2 text-footer-text">
            Marketplace
          </a>
          <a href="/" className="mb-2 text-footer-text">
            Features
          </a>
          <a href="/" className="mb-2 text-footer-text">
            Integrations
          </a>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-lg">Company</h3>
        <ul className="flex flex-col mt-5 text-lg">
          <a href="/" className="mb-2 text-footer-text">
            About
          </a>
          <a href="/" className="mb-2 text-footer-text">
            Team
          </a>
          <a href="/" className="mb-2 text-footer-text">
            Blog
          </a>
          <a href="/" className="mb-2 text-footer-text">
            Careers
          </a>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-lg">Connect</h3>
        <ul className="flex flex-col mt-5 text-lg">
          <a href="/" className="mb-2 text-footer-text">
            Contact
          </a>
          <a href="/" className="mb-2 text-footer-text">
            Newsletter
          </a>
          <a href="/" className="mb-2 text-footer-text">
            LinkedIn
          </a>
        </ul>
      </section>
    </div>
  );
};

export default FooterLinks;
