import { motion } from "framer-motion"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Sosmed_Icons() {
  return (
    <div className="space-y-4 text-center md:text-left">

      <h3 className="text-white text-lg md:text-xl font-semibold">
        Follow Me
      </h3>

      <motion.div
        className="flex flex-wrap justify-center md:justify-start gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15 }}
      >

        <a href="https://github.com/SeinalArifin149" target="_blank" rel="noopener noreferrer" className="text-white text-2xl md:text-3xl hover:text-gray-400 transition">
          <FaGithub/>
        </a>

        <a href="https://www.linkedin.com/in/seinal-arifin-9968b8354" target="_blank" rel="noopener noreferrer" className="text-white text-2xl md:text-3xl hover:text-blue-400 transition">
          <FaLinkedin/>
        </a>

        <a href="https://www.facebook.com/share/1CJv5sjRf7/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl md:text-3xl hover:text-blue-500 transition">
          <FaFacebook/>
        </a>

        <a href="https://www.instagram.com/mr.z_332" target="_blank" rel="noopener noreferrer" className="text-white text-2xl md:text-3xl hover:text-pink-400 transition">
          <FaInstagram/>
        </a>

        <a href="https://wa.me/6287889817650" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:scale-105 transition">
          <FaWhatsapp className="text-2xl md:text-3xl"/>
          <span className="text-sm md:text-base">Whatsapp</span>
        </a>

      </motion.div>

    </div>
  );
}