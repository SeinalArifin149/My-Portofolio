import { useState } from "react"
import Logo from "./logo.png"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="
      fixed top-0 left-0 w-full z-50
      backdrop-blur-md
      px-6
      min-h-[96px]
      flex items-center justify-between
    ">
      <img
        src={Logo}
        alt="Seinal Logo"
        className="h-14 md:h-20 w-auto object-contain"
      />

      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <ul className="hidden md:flex gap-6 text-gray-100">
        <li><a className="hover:text-blue-500" href="#">Home</a></li>
        <li><a className="hover:text-blue-500" href="#">Portofolio</a></li>
        <li><a className="hover:text-blue-500" href="#">Contact</a></li>
        <li><a className="hover:text-blue-500" href="#">About</a></li>
      </ul>

      {open && (
        <div className="
          absolute top-full left-0 w-full
          bg-black/80 backdrop-blur-md
          md:hidden
        ">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-100">
            <li><a href="#">Home</a></li>
            <li><a href="#">Portofolio</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
