import blogs from "../../data/blogs.json";

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Blogs</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <li key={blog.id} className="border rounded-lg p-4 shadow-sm bg-white">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full max-h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gfg-dark mb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
