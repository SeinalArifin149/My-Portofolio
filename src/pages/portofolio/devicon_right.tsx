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
    <aside className="col-span-2 flex justify-end">
      <div
        className="relative overflow-hidden"
        style={{ height: 48 * 5 }} // 5 logo kelihatan
      >
        <div className="flex flex-col animate-scroll-down">
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="h-12 flex flex-col items-center justify-center gap-1"
            >
              <i className={`${tech.icon} text-3xl`}></i>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

