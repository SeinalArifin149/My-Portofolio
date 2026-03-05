import { motion } from "framer-motion"
import { Profile_Contact } from "./profile"
import { Text_Contact } from "./text"
import { Sosmed_Icons } from "./sosmed";

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-16"
    >
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full items-center">

        {/* TEXT + SOSMED */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 order-2 md:order-1"
        >
          <Text_Contact />
          <Sosmed_Icons />
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <Profile_Contact />
        </motion.div>

      </div>
    </section>
  );
}