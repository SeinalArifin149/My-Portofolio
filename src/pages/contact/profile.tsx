import { motion } from "framer-motion"
import profileImg from "./anim.png";

export function Profile_Contact() {
  return (
    <div className="flex justify-center md:justify-end">

      <motion.img
        src={profileImg}
        alt="Seinal Arifin"
        className="w-48 sm:w-60 md:w-72 lg:w-80"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

    </div>
  );
}