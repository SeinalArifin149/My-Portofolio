export function SkillBar() {
  return (
    <div
      className="
        col-span-12 col-start-1
        md:col-span-3 md:col-start-7
        flex flex-col gap-4
      "
    >
      <h3 className="text-lg md:text-xl text-gray-200">
        Skill Level
      </h3>

      {/* Skill 1 */}
      <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
        <div className="bg-blue-500 h-full w-[80%] transition-all"></div>
      </div>

      {/* Skill 2 */}
      <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
        <div className="bg-green-500 h-full w-[65%] transition-all"></div>
      </div>
    </div>
  )
}
