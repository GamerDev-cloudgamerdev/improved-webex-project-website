import { Link } from 'react-router-dom';
import { languages } from '../data/languages';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium">
              🚀 Learn 26 Programming Languages
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              CodeMaster A-Z
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Master every programming language from Assembly to Zig.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Choose your learning style — interactive hands-on practice or classic school-style lessons.
          </p>

          {/* Two Main Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link
              to="/interactive"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-bold text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="mr-3 text-2xl">🎮</span>
              <span>Interactive Learning</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            <Link
              to="/school"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="mr-3 text-2xl">📚</span>
              <span>School Mode</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6 text-left">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="text-lg font-bold text-green-300 mb-2">Interactive Mode</h3>
              <p className="text-gray-400 text-sm">
                Write code, solve challenges, and get instant feedback. Perfect for hands-on learners who want to practice as they learn.
              </p>
            </div>
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 text-left">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-blue-300 mb-2">School Mode</h3>
              <p className="text-gray-400 text-sm">
                Structured lessons with theory, examples, and key concepts. Like a real classroom — read, study, and understand deeply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Languages from A to Z
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Click any language to explore it in detail
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {languages.map((lang) => (
              <Link
                key={lang.letter}
                to={`/language/${lang.letter}`}
                className="group relative bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="text-3xl font-bold text-purple-400 mb-1">{lang.letter}</div>
                <div className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                  {lang.name}
                </div>
                <div className={`mt-2 inline-block px-2 py-0.5 rounded-full text-xs ${
                  lang.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                  lang.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-red-500/20 text-red-300'
                }`}>
                  {lang.difficulty}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400">26</div>
              <div className="text-sm text-gray-400 mt-1">Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">2</div>
              <div className="text-sm text-gray-400 mt-1">Learning Modes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">100+</div>
              <div className="text-sm text-gray-400 mt-1">Code Examples</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400">∞</div>
              <div className="text-sm text-gray-400 mt-1">Possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm">
          © 2024 CodeMaster A-Z — Learn to code, one language at a time.
        </p>
      </footer>
    </div>
  );
}
