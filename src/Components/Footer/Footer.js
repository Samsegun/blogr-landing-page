import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="h-auto text-center text-white py-14 font-ubuntu bg-footer-bg rounded-tr-header">
      <h2 className="text-4xl">Blogr</h2>
      <FooterLinks />
    </footer>
  );
};

export default Footer;
