import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center h-auto text-center text-white py-14 font-ubuntu bg-footer-bg rounded-tr-header desktop:flex-row">
      <h2 className="text-4xl desktop:self-start desktop:basis-1/5">Blogr</h2>
      <FooterLinks />
    </footer>
  );
};

export default Footer;
