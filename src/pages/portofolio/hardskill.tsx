export function HardSkill() {
  return (
    <div
      className="
        col-span-12
        px-4
        text-center

        lg:col-span-4
        lg:col-start-3
        lg:px-0
        lg:text-left

        flex flex-col gap-4 lg:gap-6
      "
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-300">
        My <span className="text-white">HardSkill</span>
      </h2>

      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        Profesional IT dengan keahlian Full-stack Web Development (UI Responsif & Sistem Efisien),
        Data Science (Data Mining & Analisis Strategis),
        serta Hardware Service (Troubleshooting & Perbaikan Komprehensif)
      </p>
    </div>
  )
}
