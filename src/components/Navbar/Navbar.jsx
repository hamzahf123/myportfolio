import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  // Glass strength + reading progress
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 50);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Scroll spy: highlight the section currently in the middle of the viewport
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    menuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <nav
        aria-label="Primary"
        className={`pointer-events-auto relative w-full max-w-[62rem] rounded-full border transition-all duration-700 ease-silk ${
          isScrolled
            ? "border-white/[0.09] bg-ink-900/70 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl backdrop-saturate-150"
            : "border-white/[0.05] bg-ink-900/30 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between py-2.5 pl-6 pr-3 sm:pl-7 sm:pr-4">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group cursor-pointer text-[1.05rem] font-medium tracking-[-0.02em]"
            aria-label="Back to top"
          >
            <span className="text-gold-400 transition-transform duration-500 ease-silk group-hover:-translate-x-0.5 inline-block">&lt;</span>
            <span className="text-platinum">Hamza</span>
            <span className="text-platinum">Feroze</span>
            <span className="text-gold-400 transition-transform duration-500 ease-silk group-hover:translate-x-0.5 inline-block">&gt;</span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-1 md:flex">
            {menuItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleMenuItemClick(item.id)}
                    aria-current={active ? "true" : undefined}
                    className={`relative rounded-full px-4 py-2 text-[0.88rem] transition-all duration-500 ease-silk ${
                      active
                        ? "bg-white/[0.07] text-gold-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                        : "text-mist hover:text-platinum"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Social Icons */}
          <div className="hidden items-center gap-1 md:flex">
            <a
              href="https://github.com/hamzahf123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full text-mist transition-all duration-500 ease-silk hover:bg-white/[0.06] hover:text-gold-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hamxa-feroze/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full text-mist transition-all duration-500 ease-silk hover:bg-white/[0.06] hover:text-gold-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-gold-400 transition-colors hover:bg-white/[0.06] md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>

        {/* Reading progress, drawn along the bottom edge of the pill */}
        <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px overflow-hidden rounded-full">
          <div
            className="h-full origin-left bg-gradient-to-r from-gold-600 via-gold-300 to-gold-500"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="glass absolute left-0 right-0 top-[calc(100%+0.6rem)] animate-modal-in rounded-3xl bg-ink-900/90 p-3 md:hidden">
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full rounded-2xl px-5 py-3.5 text-left text-base transition-colors ${
                      activeSection === item.id
                        ? "bg-white/[0.06] text-gold-300"
                        : "text-mist hover:text-platinum"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex gap-2 border-t border-white/[0.07] px-2 pt-3">
              <a
                href="https://github.com/hamzahf123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full text-mist transition-colors hover:bg-white/[0.06] hover:text-gold-300"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/hamxa-feroze/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full text-mist transition-colors hover:bg-white/[0.06] hover:text-gold-300"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
