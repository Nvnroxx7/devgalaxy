import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-gray-800 rounded-xl px-3 py-2 w-full max-w-md shadow-md"
    >
      <Search className="text-gray-400 mr-2" size={20} />
      <input
        type="text"
        placeholder="Search projects..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent outline-none text-white placeholder-gray-400 flex-1"
      />
      <button
        type="submit"
        className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-lg"
      >
        Go
      </button>
    </form>
  );
}
