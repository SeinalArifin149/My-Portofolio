import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoZayn from "./logo";

const menuNavbar = [
  { label: "Home", id: "home" },
  { label: "Portofolio", id: "portofolio" },
  { label: "My Project", id: "project" },
  { label: "My Activity", id: "activity" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50
                 backdrop-blur-md
                 px-6 
                 min-h-[96px]
                 flex items-center justify-between"
    >
      <LogoZayn />

      {/* Hamburger */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: open ? 90 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden text-white text-3xl relative z-[100]"
        onClick={() => setOpen(!open)}
      >
        ☰
      </motion.button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-100 font-medium">
        {menuNavbar.map((item) => (
          <motion.li
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button
              onClick={() => handleScroll(item.id)}
              className="hover:text-blue-500 transition duration-300"
            >
              {item.label}
            </button>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[96px] left-0 right-0 
                       bg-black/65 backdrop-blur-md
                       md:hidden
                       z-[9999]"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 },
                },
              }}
              className="flex flex-col gap-2 px-6 py-6 text-gray-100 font-medium"
            >
              {menuNavbar.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    show: { x: 0, opacity: 1 },
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleScroll(item.id)}
                    className="block w-full text-left py-3 px-4 
                               hover:bg-white/10 hover:text-blue-500 
                               transition rounded-lg cursor-pointer"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}