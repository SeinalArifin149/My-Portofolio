// import { Navbar, Main } from '../../components'
import { ActivityCard } from "./card"

export function Activity() {
    return(
        <div className="container mx-auto px-6 py-10">
          <h2 className="text-white text-3xl font-bold mb-8">My Activities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ActivityCard 
              title="Project 1"
              category="Web Development"
              image="/path/to/image.jpg"
            />
            <ActivityCard 
              title="Project 2"
              category="AI/ML"
              image="/path/to/image2.jpg"
            />
            <ActivityCard 
              title="Project 3"
              category="Mobile App"
              image="/path/to/image3.jpg"
            />
          </div>
        </div>
    )
}