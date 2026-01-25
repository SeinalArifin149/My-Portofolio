// import React from "react";

const techStack = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "PHP", icon: "devicon-php-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "GitHub", icon: "devicon-github-original text-white" }, 
  { name: "NodeJS", icon: "devicon-nodejs-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Laravel", icon: "devicon-laravel-original colored" },
  { name: "Linux", icon: "devicon-linux-plain text-white" },
  { name: "Streamlit", icon: "devicon-streamlit-plain colored" },
];

export function Devicon_Left() {
  return (
    // UBAH: col-span-12 (Mobile Full Width) -> md:col-span-2 (Desktop Sempit)
    // UBAH: md:justify-start (Biar mepet kiri di desktop, seimbang sama yang kanan)
    <aside className="col-span-12 md:col-span-2 flex justify-center md:justify-start items-center overflow-hidden">
      
      {/* --- DESKTOP VIEW (Vertical Scroll UP) --- */}
      <div
        className="hidden md:block relative overflow-hidden"
        style={{ height: 48 * 5 }}
      >
        {/* Pakai 'animate-scroll' (arah default/naik) */}
        <div className="flex flex-col animate-scroll">
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={`left-desk-${index}`}
              className="h-12 flex items-center justify-center w-16"
            >
              <i className={`${tech.icon} text-3xl`}></i>
            </div>
          ))}
        </div>
      </div>

      {/* --- MOBILE VIEW (Horizontal Scroll Left) --- */}
      <div className="md:hidden w-full relative overflow-hidden py-4">
        {/* Pakai w-max dan animate-scroll-left */}
        <div className="flex w-max animate-scroll-left">
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={`left-mob-${index}`}
              // Pakai Padding (px-3) menggantikan gap parent
              className="flex items-center justify-center flex-shrink-0 w-16 px-3"
            >
              <i className={`${tech.icon} text-3xl`}></i>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}