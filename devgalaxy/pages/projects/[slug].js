import projects from "../../data/projects.json";
import Link from "next/link";
import Image from "next/image";

// Slugify helper (keep consistent)
const slugify = (text) =>
  text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: slugify(project.title) },
  }));

  return {
    paths,
    fallback: false, // no fallback; show 404 if no match
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => slugify(p.title) === params.slug);

  return {
    props: { project: project || null },
  };
}

export default function ProjectDetails({ project }) {
  if (!project) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-500">Project not found ❌</h1>
        <Link href="/projects" className="text-blue-600 underline mt-4 block">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <Link href="/projects" className="text-blue-600 underline mb-4 block">
        ← Back to Projects
      </Link>

      <div className="relative w-full h-64 mb-6 rounded-2xl shadow overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          priority
        />
      </div>

      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-500 mb-4">{project.category}</p>
      <p className="text-gray-700 mb-6">{project.description}</p>

      {project.techStack && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-600">
            {project.techStack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          View Project 🚀
        </a>
      )}
    </div>
  );
}
