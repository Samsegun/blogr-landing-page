const FooterLinks = () => {
  return (
    <div className="mt-12 desktop:flex desktop:mt-0 desktop:basis-[70%] desktop:justify-evenly desktop:text-left">
      <section className="mb-10 ">
        <h3 className="text-lg">Product</h3>
        <ul className="flex flex-col mt-5 text-lg ">
          <li className="mb-2 text-footer-text hover:underline hover:cursor-pointer">
            Overview
          </li>
          <li className="mb-2 text-footer-text hover:underline hover:cursor-pointer">
            Pricing
          </li>
          <li className="mb-2 text-footer-text hover:underline hover:cursor-pointer">
            Marketplace
          </li>
          <li className="mb-2 text-footer-text hover:underline hover:cursor-pointer">
            Features
          </li>
          <li className="mb-2 text-footer-text hover:underline hover:cursor-pointer">
            Integrations
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-lg">Company</h3>
        <ul className="flex flex-col mt-5 text-lg">
          <li className="mb-2 text-footer-text hover:underline hover:cursor-pointer">
            About
          </li>
          <li className="mb-2 text-footer-text hover:underline hover:cursor-pointer">
            Team
          </li>
          <li className="mb-2 text-footer-text hover:underline hover:cursor-pointer">
            Blog
          </li>
          <li className="mb-2 text-footer-text hover:underline hover:cursor-pointer">
            Careers
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-lg">Connect</h3>
        <ul className="flex flex-col mt-5 text-lg">
          <li className="mb-2 text-footer-text hover:underline hover:cursor-pointer">
            Contact
          </li>
          <li className="mb-2 text-footer-text hover:underline hover:cursor-pointer">
            Newsletter
          </li>
          <li className="mb-2 text-footer-text hover:underline hover:cursor-pointer">
            LinkedIn
          </li>
        </ul>
      </section>
    </div>
  );
};

export default FooterLinks;
