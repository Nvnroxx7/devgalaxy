// components/BlogCard.jsx
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md 
                 transform transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      {/* Blog Image */}
      <img
        src={blog.image || "https://via.placeholder.com/600x400?text=Blog+Image"}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />

      {/* Blog Content */}
      <div className="p-5">
        <Link href={`/blogs/${blog.slug}`}>
          <h2 className="text-2xl font-bold mb-2 text-indigo-600 hover:text-indigo-800 cursor-pointer dark:text-indigo-400">
            {blog.title}
          </h2>
        </Link>
        <p className="text-gray-600 dark:text-gray-300">{blog.description}</p>
      </div>
    </div>
  );
}
