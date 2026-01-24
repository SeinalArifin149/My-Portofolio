import type { ReactNode } from "react"
import { Navbar } from "../navbar/Navbar"

type MainProps = {
  children: ReactNode
}

export function Main({ children }: MainProps) {
  return (
    <div className="bg pt-27">
      <Navbar />
      {children}
    </div>
  )
}