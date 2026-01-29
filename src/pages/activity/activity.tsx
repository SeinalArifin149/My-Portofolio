// import { Navbar, Main } from '../../components'
import ActifytySection from "./list"

export function Activity() {
    return(
        <div className="container mx-auto px-6 py-10">
          <h2 className="text-white text-3xl font-bold mb-8 text-center">My Activities</h2>
          <ActifytySection />
          
        </div>
    )
}