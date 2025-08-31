import { useRouter } from "next/router";
import projects from "../../data/projects.json";

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-center mt-20 text-xl">❌ Project Not Found</div>;
  }

  const isComingSoon = ["phishsentinel", "skillforge"].includes(slug);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <button
        className="text-blue-600 hover:underline mb-6"
        onClick={() => router.push("/projects")}
      >
        ← Back to Projects
      </button>

      {/* Card-like highlight for Coming Soon projects */}
      <div
        className={`p-6 rounded-2xl shadow-lg border ${
          isComingSoon ? "bg-yellow-50 border-yellow-300" : "bg-white"
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-600 mb-4">{project.category}</p>

        <p className="text-lg text-gray-700 mb-6">{project.description}</p>

        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        {/* 🚧 Coming Soon Banner */}
        {isComingSoon && (
          <div className="bg-yellow-200 text-yellow-900 text-center font-bold py-3 rounded-lg shadow-md">
            🚧 This project is under development – Coming Soon 🚧
          </div>
        )}
      </div>
    </div>
  );
}
