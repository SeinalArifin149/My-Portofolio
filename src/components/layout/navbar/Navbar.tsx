// import './navbar.css'
import { Link } from 'react-router-dom'
export function Navbar() {
  return (
    <nav className="navbar">
        <div className="font-bold text-lg text-white">
            Seinal Logos
        </div>

        <ul className="flex gap-6">
            <li><a href="" className=" text-gray-100 hover:text-blue-500">Home</a></li>
            <li><a href="" className="hover:text-blue-500 text-gray-100">Portofolio</a></li>
            <li><a href="" className="hover:text-blue-500 text-gray-100">Contact</a></li>
            <li><a href="" className="hover:text-blue-500 text-gray-100">About</a></li>
        </ul>
      
    </nav>
  )
}
