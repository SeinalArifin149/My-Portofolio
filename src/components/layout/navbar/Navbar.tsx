export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">

        <div className="font-bold text-lg text-white">
            Seinal Logos
        </div>

        <ul className="flex gap-5 px-6 py-4">
            <li><a href="#" className=" text-gray-100 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 text-gray-100">Portofolio</a></li>
            <li><a href="#" className="hover:text-blue-500 text-gray-100">Contact</a></li>
            <li><a href="#" className="hover:text-blue-500 text-gray-100">About</a></li>
        </ul>
      
    </nav>
  )
}
export function NavbarDev() {
  return(
    <h1>ini navbar dev</h1>
  )
}
