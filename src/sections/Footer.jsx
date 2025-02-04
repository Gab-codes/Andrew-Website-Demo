import { Facebook, Instagram, Linkedin, Mail, PhoneCall } from "lucide-react";

const Footer = () => {
  const footerItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-xl font-bold text-white">Andrew Kikkert</h3>
          <p className="mt-2 text-sm">
            Claim Specialist at State Farm Insurance
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {footerItems.map((item) => (
              <li key={item.name}>
                <a href="#home" className="hover:text-white transition-colors">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Follow Me</h3>
          <div className="flex items-center space-x-4 mt-3">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Facebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram size={28} />
            </a>
            <a
              href="http://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:example@email.com"
              className="hover:text-white transition-colors"
            >
              <Mail size={28} />
            </a>
            <a
              href="tel:302-555-1234"
              className="hover:text-white transition-colors"
            >
              <PhoneCall size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-700 pt-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Andrew Kikkert | Claim Specialist at
          State Farm Insurance. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
