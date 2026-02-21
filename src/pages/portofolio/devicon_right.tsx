// import React from "react";
import { motion } from "framer-motion"

const techStack = [
  { name: "Streamlit", icon: "devicon-streamlit-plain colored" },
  { name: "Linux", icon: "devicon-linux-plain text-white" },
  { name: "Laravel", icon: "devicon-laravel-original colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "NodeJS", icon: "devicon-nodejs-plain colored" },
  { name: "GitHub", icon: "devicon-github-original text-white" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "PHP", icon: "devicon-php-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
]

export function Devicon_Right() {
  return (
    <motion.aside
      className="col-span-12 md:col-span-2 flex justify-center md:justify-end overflow-hidden"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Desktop: Vertical Scroll */}
      <div
        className="hidden md:block relative overflow-hidden"
        style={{ height: 48 * 5 }}
      >
        <div className="flex flex-col animate-scroll-down">
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={`desk-right-${index}`}
              className="h-12 flex items-center justify-center w-16"
            >
              <i className={`${tech.icon} text-3xl`}></i>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden relative overflow-hidden w-full h-12">
        <div className="flex w-max animate-scroll-left">
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={`mob-right-${index}`}
              className="flex items-center justify-center flex-shrink-0 w-16 px-3"
            >
              <i className={`${tech.icon} text-3xl`}></i>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  )
}