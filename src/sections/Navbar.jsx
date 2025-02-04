import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import clsx from "clsx";

const Navbar = () => {
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.6,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
          <a
            href="/"
            className=" left-5 sm:left-10 font-bold text-2xl hover:text-gray-600 transition-colors"
          >
            Andrew
          </a>

          <div className="hidden sm:flex items-center justify-center gap-7">
            {navItems.map((item) => (
              <nav key={item.name}>
                <a
                  href={item.href}
                  className={clsx(
                    "text-foreground cursor-pointer font-semibold text-lg transition-colors",
                    activeSection === item.href.substring(1)
                      ? "text-blue-500"
                      : "hover:text-blue-500"
                  )}
                >
                  {item.name}
                </a>
              </nav>
            ))}
          </div>

          <Sheet open={openCartSheet} onOpenChange={setOpenCartSheet}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-5 right-5 sm:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle header menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-64 p-4 bg-white shadow-lg">
              <div className="flex flex-col gap-6 mt-10">
                {navItems.map((item, index) => (
                  <motion.nav
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={item.href}
                      className={clsx(
                        "text-foreground cursor-pointer hover:text-blue-500 font-semibold text-lg transition-colors",
                        activeSection === item.href.substring(1)
                          ? "text-blue-500"
                          : ""
                      )}
                      onClick={() => setOpenCartSheet(false)}
                    >
                      {item.name}
                    </a>
                  </motion.nav>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
