import profileImg from "./profile.png";

export function Profile() {
    return (
        <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
          <div className="relative w-55 h-80 md:w-80 md:h-[28rem] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <img 
              src={profileImg}
              alt="Seinal Arifin" 
              className="relative w-64 h-80 md:w-80 md:h-[28rem] rounded-[2.5rem] overflow-hidden"
            />
          </div>
        </div>
    )
}