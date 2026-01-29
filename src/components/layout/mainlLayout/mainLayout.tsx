import type { ReactNode } from "react"
import { Navbar } from "../navbar/Navbar"

type MainProps = {
  children: ReactNode
}

export function Main({ children }: MainProps) {
  return (
   <div
  className="min-h-screen pt-27 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Background.png')" }}
>
  <Navbar />
  {children}
</div>

  )
}