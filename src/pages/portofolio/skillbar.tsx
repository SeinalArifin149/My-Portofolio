export function SkillBar() {
  return (
    <div
      className="
        col-span-12
        md:col-span-3 md:col-start-7
        flex flex-col gap-4
      "
    >
      <h3 className="text-lg md:text-xl text-gray-200 font-semibold text-center">
        Skill Focus
      </h3>

      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="w-full text-sm text-gray-300">
          <thead className="bg-white/5 text-gray-200">
            <tr>
              <th className="px-4 py-3 text-left">Skill</th>
              <th className="px-4 py-3 text-center">Tech</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/10">
            <tr className="hover:bg-white/5 transition">
              <td className="px-4 py-3">Web Development</td>
              <td className="px-4 py-3">
                <div className="flex justify-center gap-3 text-xl">
                  <i className="devicon-react-original colored"></i>
                  <i className="devicon-laravel-original colored"></i>
                  <i className="devicon-nodejs-original colored"></i>
                  <i className="devicon-tailwindcss-original colored"></i>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-white/5 transition">
              <td className="px-4 py-3">Data Science</td>
              <td className="px-4 py-3">
                <div className="flex justify-center gap-3 text-xl">
                  <i className="devicon-python-plain colored"></i>
                  <i className="devicon-mysql-plain colored"></i>
                  <i className="devicon-mongodb-plain colored"></i>
                  <i className="devicon-kaggle-plain colored"></i>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-white/5 transition">
              <td className="px-4 py-3">AI & ML</td>
              <td className="px-4 py-3">
                <div className="flex justify-center gap-3 text-xl">
                  <i className="devicon-python-plain colored"></i>
                  <i className="devicon-tensorflow-original colored"></i>
                  <i className="devicon-streamlit-plain colored"></i>
                  <i className="devicon-flask-original colored"></i>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-white/5 transition">
              <td className="px-4 py-3">Contribution</td>
              <td className="px-4 py-3">
                <div className="flex justify-center text-xl">
                  <i className="devicon-github-original text-white"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
