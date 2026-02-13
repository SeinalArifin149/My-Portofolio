import { Devicon_Left } from "./devicon_left"
import { Devicon_Right } from "./devicon_right"
import { HardSkill } from "./hardskill"
import { SkillBar } from "./skillbar"

export function Portofolio() {
  return (
    <section className="container mx-auto px-6 py-7" id="portofolio">
      <div className="grid grid-cols-12 gap-6 items-start">

        {/* KIRI */}
        <Devicon_Left />

        {/* TENGAH */}
        <HardSkill />
        <SkillBar/>

        <Devicon_Right/>

        {/* (kalau nanti ada kanan, tinggal tambah) */}

      </div>
    </section>
  )
}
