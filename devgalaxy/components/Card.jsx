// components/Card.jsx
import Link from "next/link";
import { Lightbulb } from "lucide-react";

export default function Card({ project }) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <div
      className={`rounded-xl border shadow-sm transition duration-300 
        hover:shadow-lg bg-white dark:bg-gray-800 overflow-hidden`}
    >
      {/* Badge */}
      {isComingSoon && (
        <div className="absolute m-2 bg-yellow-400 text-white px-2 py-0.5 rounded-md text-xs flex items-center">
          <Lightbulb className="mr-1" size={14} />
          Coming Soon
        </div>
      )}

      {/* Image */}
      <Link href={!isComingSoon ? `/details/${project.slug}` : "#"} passHref>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover hover:opacity-90 transition"
        />
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link href={!isComingSoon ? `/details/${project.slug}` : "#"} passHref>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white hover:text-green-600 cursor-pointer transition">
            {project.title}
          </h2>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-3">
          {isComingSoon ? (
            <span className="text-gray-500 text-sm font-medium">
              🚧 Work in Progress 

            </span>
          ) : (
            <Link
              href={`/details/${project.slug}`}
              className="text-green-600 font-medium text-sm hover:underline"
            >
              Read More →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
