import { useState } from "react";
import projects from "../../data/projects.json";
import Card from "../../components/Card"; // ✅ Import Card component

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Unique categories from JSON
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8 bg-[#162238] min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-[#F0F0F0]">Projects</h1>
      <p className="mb-6 text-[#B0BEC5]">Here you can explore all the projects 🚀</p>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full md:w-1/2 px-4 py-2 rounded-xl shadow bg-[#2c3e50] border border-gray-600 text-[#F0F0F0] placeholder-[#95a5a6] focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      {/* 📂 Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="ml-4 px-4 py-2 rounded-xl shadow bg-[#2c3e50] border border-gray-600 text-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* ✅ Use Card component here */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))
        ) : (
          <p className="text-gray-500">No projects found 😢</p>
        )}
      </div>
    </div>
  );
}
