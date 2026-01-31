import imgQutes from "../home/profile.png"
export function ProfileQuotes() {
    return (
      <div className="col-span-12 md:col-span-3 bg-gray-800 roundde-xl p-6 text-center">
        <img 
        src={imgQutes}
        alt="Seinal Quotes" />

      </div>  
    )
}
export function TextQuotes() {
    return (
            <div className="col-span-12 md:col-span-9
            bg-gray-900 rounded-xl p-8
            flex items-center justify-center">
                <p className="text-xl md:text-2xl
                    text-gray-100
                    leading-relaxed
                    text-center
                    max-w-xl">
            “Kode bukan hanya tentang logika,
            tapi tentang kesabaran, konsistensi,
            dan keberanian untuk terus belajar
            meski sering buntu.”
                 </p>
        </div>
    )
}