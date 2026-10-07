import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Internships", href: "#internship" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      let currentSection = "home";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-header px-6 py-4 transition-all duration-300'>
      {/* Logo */}
      <a
        href='#home'
        className='font-outfit text-2xl font-extrabold tracking-tight text-heading transition-opacity duration-300 hover:opacity-90'>
        Kamalesh{" "}
        <span className='font-black text-accent transition-colors duration-300 hover:text-accent-light'>
          - Portfolio
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav className='hidden md:block'>
        <ul className='flex items-center space-x-8 text-sm font-medium tracking-wide text-heading'>
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`border-b-2 py-1.5 transition-all duration-200 ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-transparent hover:border-accent hover:text-accent"
                  }`}>
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className='block text-heading transition-colors duration-300 hover:text-accent focus:outline-none md:hidden'
        aria-label='Toggle navigation menu'>
        {toggleMenu ? (
          <FiX className='h-6 w-6' />
        ) : (
          <FiMenu className='h-6 w-6' />
        )}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {toggleMenu && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className='fixed left-0 top-[72px] z-50 w-full border-b border-muted bg-primary md:hidden'>
            <ul
              onClick={() => setToggleMenu(false)}
              className='flex flex-col items-center py-4 font-medium text-body'>
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <li key={link.name} className='w-full text-center'>
                    <a
                      href={link.href}
                      className={`block border-l-4 py-3 transition-all duration-200 ${
                        isActive
                          ? "border-accent bg-surface/50 text-accent"
                          : "border-transparent hover:bg-surface/50 hover:text-accent"
                      }`}>
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
