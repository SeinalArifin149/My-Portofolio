export function Text() {
    return (
        <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
          <div>
            <h2 className="text-5xl text-gray-300 mb-2 px-10 py-2">Software Development</h2>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
               <span className="border-b-4 border-amber-50 -500/80 pb-1 text-white">Seinal Arifin</span>
            </h1>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm  sm:text-base 
  md:text-lg 
  lg:text-lg px-2">
            Mahasiswa Teknik Informatika Universitas Trunojoyo Madura, 
            kelahiran Bangkalan, yang memiliki minat dan ketertarikan 
            besar pada bidang pengembangan perangkat lunak, khususnya Website, 
            Artificial Intelligence,
          </p>

          <a href="#" className="inline-flex items-center justify-center lg:justify-start gap-2 text-yellow-500 hover:text-yellow-400 font-medium transition mt-4 group">
            <span>Masih ragu? Tanyakan langsung ke AI.</span>
            <span className="transform group-hover:translate-x-1 transition">→</span>
          </a>
        </div>
    )
}