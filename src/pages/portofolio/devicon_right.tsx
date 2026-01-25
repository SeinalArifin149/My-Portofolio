// import React from "react";

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
    // FIX UTAMA: 
    // 1. col-span-12 (Default/Mobile) -> Biar full width di HP
    // 2. md:col-span-2 (Desktop) -> Biar balik jadi kolom kecil di kanan
    // 3. md:justify-end -> Biar di desktop mepet kanan
    <aside className="col-span-12 md:col-span-2 flex justify-center md:justify-end overflow-hidden">
      
      {/* --- DESKTOP VIEW (Vertical Scroll Down) --- */}
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

      {/* --- MOBILE VIEW (Horizontal Scroll Left) --- */}
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
    </aside>
  )
}