import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">💻</span>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CodeMaster A-Z
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/')
                  ? 'bg-purple-500/20 text-purple-300'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>
            <Link
              to="/interactive"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/interactive')
                  ? 'bg-green-500/20 text-green-300'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              🎮 Interactive
            </Link>
            <Link
              to="/school"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/school')
                  ? 'bg-blue-500/20 text-blue-300'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              📚 School Mode
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
