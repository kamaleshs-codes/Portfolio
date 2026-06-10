import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="glass-header px-6 py-4 flex justify-between items-center transition-all duration-300">
      <a className="font-outfit font-extrabold text-2xl tracking-tight text-white hover:opacity-90 transition-opacity" href="#home">
        Kamalesh<span className="text-accent font-black">.</span>
      </a>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-8 text-sm font-medium tracking-wide text-slate-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="hover:text-accent border-b-2 border-transparent hover:border-accent py-1.5 transition-all duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden text-white hover:text-accent transition-colors focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        {toggleMenu ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Navigation Drawer */}
      {toggleMenu && (
        <nav className="md:hidden fixed top-[69px] left-0 w-full bg-secondary/95 border-b border-slate-800 animate-fadeIn">
          <ul 
            onClick={() => setToggleMenu(false)} 
            className="flex flex-col items-center py-4 text-slate-300 font-medium"
          >
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <a 
                  href={link.href} 
                  className="block py-3 hover:bg-slate-800/50 hover:text-accent transition-all duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
