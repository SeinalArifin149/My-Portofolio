import { GitHubCalendar } from "react-github-calendar";

export function GithubActivity() {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">
        My GitHub Activity
      </h2>

      <div className="overflow-x-auto">
        <GitHubCalendar
          username="seinalarifin149"
          blockSize={15}
          blockMargin={5}
          fontSize={14}
          colorScheme="dark"
        />
      </div>
    </div>
  );
}
