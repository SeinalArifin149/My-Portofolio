import type { ReactNode } from "react"
import { Navbar } from "../navbar/Navbar"

type MainProps = {
  children: ReactNode
}

export function Main({ children }: MainProps) {
  return (
    <div className="relative min-h-screen bg-[url('/Background.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10">
        <Navbar />
        {children}
      </div>
    </div>
  )
}


// <div className="relative min-h-screen bg-black overflow-hidden">

//   <div className="absolute top-0 left-1/4 w-[600px] h-[300px]
//                   bg-blue-500/30 blur-[120px] rounded-full" />

//   <div className="absolute bottom-0 left-0 w-[400px] h-[400px]
//                   bg-purple-600/40 blur-[140px] rounded-full" />
//  <div className="relative z-10">
//     <Navbar />
//   </div>
// </div>
