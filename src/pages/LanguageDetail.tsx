import { useParams, Link } from 'react-router-dom';
import { languages } from '../data/languages';

export default function LanguageDetail() {
  const { letter } = useParams<{ letter: string }>();
  const lang = languages.find((l) => l.letter === letter?.toUpperCase());

  if (!lang) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Language Not Found</h1>
          <Link to="/" className="text-purple-400 hover:text-purple-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = languages.findIndex((l) => l.letter === lang.letter);
  const prevLang = currentIndex > 0 ? languages[currentIndex - 1] : null;
  const nextLang = currentIndex < languages.length - 1 ? languages[currentIndex + 1] : null;

  const difficultyColor = 
    lang.difficulty === 'Beginner' ? 'from-green-400 to-emerald-500' :
    lang.difficulty === 'Intermediate' ? 'from-yellow-400 to-orange-500' :
    'from-red-400 to-pink-500';

  const difficultyBg = 
    lang.difficulty === 'Beginner' ? 'bg-green-500/10 border-green-500/20' :
    lang.difficulty === 'Intermediate' ? 'bg-yellow-500/10 border-yellow-500/20' :
    'bg-red-500/10 border-red-500/20';

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-purple-300 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-purple-300">{lang.name}</span>
        </div>

        {/* Header Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  {lang.letter}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">{lang.name}</h1>
                  <p className="text-gray-400">Est. {lang.yearCreated}</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{lang.description}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className={`px-4 py-2 rounded-lg border ${difficultyBg}`}>
              <span className={`text-sm font-medium bg-gradient-to-r ${difficultyColor} bg-clip-text text-transparent`}>
                {lang.difficulty}
              </span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <span className="text-sm text-blue-300">📅 {lang.yearCreated}</span>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
            <span>🎯</span>
            <span>Common Use Cases</span>
          </h2>
          <p className="text-gray-300">{lang.useCase}</p>
        </div>

        {/* Code Example */}
        <div className="bg-gray-800 border border-white/10 rounded-2xl overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm">{lang.name.toLowerCase()}_example</span>
          </div>
          <pre className="p-6 text-gray-200 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
            {lang.example}
          </pre>
        </div>

        {/* Fun Fact */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-purple-300 mb-2 flex items-center space-x-2">
            <span>🎉</span>
            <span>Fun Fact</span>
          </h2>
          <p className="text-gray-300 text-lg">{lang.funFact}</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {prevLang ? (
            <Link
              to={`/language/${prevLang.letter}`}
              className="flex items-center space-x-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-colors"
            >
              <span>←</span>
              <div>
                <div className="text-xs text-gray-400">Previous</div>
                <div className="font-medium">{prevLang.name}</div>
              </div>
            </Link>
          ) : <div />}
          
          <Link
            to="/"
            className="px-4 py-3 bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-300 hover:bg-purple-500/30 transition-colors text-sm"
          >
            All Languages
          </Link>

          {nextLang ? (
            <Link
              to={`/language/${nextLang.letter}`}
              className="flex items-center space-x-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-colors"
            >
              <div className="text-right">
                <div className="text-xs text-gray-400">Next</div>
                <div className="font-medium">{nextLang.name}</div>
              </div>
              <span>→</span>
            </Link>
          ) : <div />}
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/interactive"
            className="group bg-green-500/5 border border-green-500/20 rounded-xl p-4 hover:bg-green-500/10 transition-all"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎮</span>
              <div>
                <div className="text-green-300 font-medium">Practice {lang.name}</div>
                <div className="text-gray-400 text-sm">Try interactive challenges</div>
              </div>
            </div>
          </Link>
          <Link
            to="/school"
            className="group bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 hover:bg-blue-500/10 transition-all"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📚</span>
              <div>
                <div className="text-blue-300 font-medium">Study {lang.name}</div>
                <div className="text-gray-400 text-sm">Read structured lessons</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
