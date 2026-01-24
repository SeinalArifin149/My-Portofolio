export function SkillBar() {
  return (
    <div className="col-span-3 col-start-7 flex flex-col gap-4">
      <h3 className="text-xl text-gray-200">Skill Level</h3>

      <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
        <div className="bg-blue-500 h-full w-[80%]"></div>
      </div>

      <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
        <div className="bg-green-500 h-full w-[65%]"></div>
      </div>
    </div>
  )
}
