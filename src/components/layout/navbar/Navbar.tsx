import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoZayn from "./logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50
                 backdrop-blur-md
                 px-6 min-h-[96px]
                 flex items-center justify-between"
    >
      <LogoZayn />

      {/* Hamburger */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: open ? 90 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </motion.button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-100">
        {["Home", "Portofolio", "Contact", "About"].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a className="hover:text-blue-500 transition" href="#">
              {item}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-full left-0 w-full
                       bg-black/80 backdrop-blur-md
                       md:hidden overflow-hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="flex flex-col gap-4 px-6 py-6 text-gray-100"
            >
              {["home", "portofolio", "activity"].map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { y: -10, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                >
                  <a href="#" onClick={() => setOpen(false)}>
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
