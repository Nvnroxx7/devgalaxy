import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 relative"
      style={{ backgroundImage: "url('/mnt/data/107c3ea2-9a48-41a1-96c7-f22331e52567.png')" }} // <-- your uploaded galaxy image path
    >
      {/* Soft black gradient overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm pointer-events-none" />

      {/* Hero Section */}
      <section className="relative text-center flex flex-col items-center z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          Welcome to
        </h1>

        {/* DevGalaxy + Floating Animation */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 animate-float">
          DevGalaxy
        </h1>

        {/* Rocket exactly below DevGalaxy with launch animation */}
        <div className="mt-2 animate-rocket text-4xl">
          🚀
        </div>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
          A universe of ideas, projects, and blogs built by developers for developers.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex space-x-4 justify-center">
          <Link href="/projects">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
              🌌 Explore Projects
            </button>
          </Link>
          <Link href="/blogs">
            <button className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow-lg hover:bg-gray-900 transition">
              ✍️ Read Blogs
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative mt-20 w-full max-w-5xl z-10">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          ✨ Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white bg-opacity-80 rounded-2xl shadow-md hover:shadow-xl transition text-black">
            <h3 className="text-xl font-semibold"> 🔐 PhishSentinel</h3>
            <p className="text-gray-700 mt-2">
              Coming soon: Advanced phishing detection tool to keep your emails safe.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-80 rounded-2xl shadow-md hover:shadow-xl transition text-black">
            <h3 className="text-xl font-semibold">💡 SkillForge</h3>
            <p className="text-gray-700 mt-2">
              Coming soon: An interactive platform to forge your coding skills through projects.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-80 rounded-2xl shadow-md hover:shadow-xl transition text-black">
            <h3 className="text-xl font-semibold"> 🎓 EduVision Platform</h3>
            <p className="text-gray-700 mt-2">
              A platform to enhance learning experiences through interactive educational tools.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes rocket {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-40px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-rocket {
          animation: rocket 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
