import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export function GithubActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 
                 p-8 rounded-3xl shadow-2xl 
                 border border-gray-700 
                 transition duration-300"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl font-bold text-white mb-6 text-center"
      >
        My GitHub Activity
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="overflow-x-auto text-white"
      >
        <GitHubCalendar
          username="seinalarifin149"
          blockSize={17}
          blockMargin={5}
          fontSize={15}
          colorScheme="dark"
        />
      </motion.div>
    </motion.div>
  );
}
