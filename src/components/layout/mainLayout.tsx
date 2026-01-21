import { Navbar } from './navbar/Navbar'

export function Main() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      <div className="absolute top-0 left-1/4 w-[600px] h-[300px]
                      bg-blue-500/30 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px]
                      bg-purple-600/40 blur-[140px] rounded-full" />
     <div className="relative z-10">
        <Navbar />
      </div>
    </div>
  )
}
