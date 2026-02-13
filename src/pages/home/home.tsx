import { motion } from "framer-motion";
import { Profile } from "./profile";
import { Text } from "./text";
import { Knowledge } from "./knowledge";

export function Home() {
  return (
    <motion.main
      id="home"
      className="container mx-auto py-10 lg:py-0 lg:h-[calc(100vh-100px)] flex items-center relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">

        {/* Text */}
        <motion.div
          className="lg:col-span-5"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Text />
        </motion.div>

        {/* Profile */}
        <motion.div
          className="lg:col-span-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Profile />
        </motion.div>

        {/* Knowledge */}
        <motion.div
          className="lg:col-span-3"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Knowledge />
        </motion.div>

      </div>
    </motion.main>
  );
}
