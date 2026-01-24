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
  { name: "Linux", icon: "devicon-linux-plain text-white" }, // Linux penguin biasanya hitam-putih
  { name: "Streamlit", icon: "devicon-streamlit-plain colored" },
];

// const VISIBLE_COUNT = 10

// const ITEM_HEIGHT = 48

export function Devicon_Left() {
  return (
    <aside className="col-span-2 flex justify-center">
      <div
        className="relative overflow-hidden"
        style={{ height: 48 * 5 }} // 5 logo kelihatan
      >
        <div className="flex flex-col animate-scroll">
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

