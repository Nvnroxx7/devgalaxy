import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-white text-gray-800 px-6 py-4 flex items-center justify-between shadow">
      <div className="flex items-center">
        <img src="/logo.svg" alt="DevGalaxy" className="h-8 w-8 mr-2" />
        <span className="font-bold text-lg">DevGalaxy</span>
      </div>
      <div className="flex space-x-6">
        <Link
          href="/"
          className={`${
            router.pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-800"
          } hover:text-blue-400 transition`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`${
            router.pathname === "/projects" ? "text-blue-600 font-semibold" : "text-gray-800"
          } hover:text-blue-400 transition`}
        >
          Projects
        </Link>
        <Link
          href="/blogs"
          className={`${
            router.pathname === "/blogs" ? "text-blue-600 font-semibold" : "text-gray-800"
          } hover:text-blue-400 transition`}
        >
          Blogs
        </Link>
      </div>
    </nav>
  );
}
