import { useState } from 'react';
import { Link } from 'react-router-dom';
import { languages } from '../data/languages';

interface Challenge {
  id: number;
  language: string;
  letter: string;
  question: string;
  starterCode: string;
  hint: string;
  solution: string;
  explanation: string;
}

const challenges: Challenge[] = [
  {
    id: 1,
    language: 'Python',
    letter: 'P',
    question: 'Write a Python function that returns the sum of two numbers.',
    starterCode: 'def add_numbers(a, b):\n    # Your code here\n    pass',
    hint: 'Use the + operator to add a and b, then return the result.',
    solution: 'def add_numbers(a, b):\n    return a + b',
    explanation: 'The function takes two parameters and returns their sum using the + operator.'
  },
  {
    id: 2,
    language: 'JavaScript',
    letter: 'J',
    question: 'Create a JavaScript function that reverses a string.',
    starterCode: 'function reverseString(str) {\n    // Your code here\n    return str;\n}',
    hint: 'Use split(""), reverse(), and join("") methods.',
    solution: 'function reverseString(str) {\n    return str.split("").reverse().join("");\n}',
    explanation: 'We split the string into characters, reverse the array, then join it back.'
  },
  {
    id: 3,
    language: 'Go',
    letter: 'G',
    question: 'Write a Go function that checks if a number is even.',
    starterCode: 'func isEven(n int) bool {\n    // Your code here\n    return false\n}',
    hint: 'Use the modulo operator (%) to check if n is divisible by 2.',
    solution: 'func isEven(n int) bool {\n    return n%2 == 0\n}',
    explanation: 'The modulo operator returns the remainder. If n%2 equals 0, the number is even.'
  },
  {
    id: 4,
    language: 'Rust',
    letter: 'R',
    question: 'Write a Rust function that finds the maximum of two numbers.',
    starterCode: 'fn max_of_two(a: i32, b: i32) -> i32 {\n    // Your code here\n    0\n}',
    hint: 'Use an if expression or the .max() method.',
    solution: 'fn max_of_two(a: i32, b: i32) -> i32 {\n    if a > b { a } else { b }\n}',
    explanation: 'We compare a and b using an if expression and return the larger value.'
  },
  {
    id: 5,
    language: 'TypeScript',
    letter: 'T',
    question: 'Create a TypeScript function that filters even numbers from an array.',
    starterCode: 'function filterEven(numbers: number[]): number[] {\n    // Your code here\n    return numbers;\n}',
    hint: 'Use the .filter() method with a condition checking n % 2 === 0.',
    solution: 'function filterEven(numbers: number[]): number[] {\n    return numbers.filter(n => n % 2 === 0);\n}',
    explanation: 'The filter method creates a new array with elements that pass the test.'
  },
  {
    id: 6,
    language: 'Swift',
    letter: 'S',
    question: 'Write a Swift function that counts vowels in a string.',
    starterCode: 'func countVowels(_ text: String) -> Int {\n    // Your code here\n    return 0\n}',
    hint: 'Define a set of vowels and filter the string characters.',
    solution: 'func countVowels(_ text: String) -> Int {\n    let vowels: Set<Character> = ["a", "e", "i", "o", "u"]\n    return text.lowercased().filter { vowels.contains($0) }.count\n}',
    explanation: 'We create a set of vowels, convert to lowercase, filter matching characters, and count them.'
  },
  {
    id: 7,
    language: 'Kotlin',
    letter: 'K',
    question: 'Write a Kotlin function that generates a Fibonacci sequence of n numbers.',
    starterCode: 'fun fibonacci(n: Int): List<Int> {\n    // Your code here\n    return emptyList()\n}',
    hint: 'Start with [0, 1] and keep adding the sum of the last two elements.',
    solution: 'fun fibonacci(n: Int): List<Int> {\n    if (n <= 0) return emptyList()\n    if (n == 1) return listOf(0)\n    val result = mutableListOf(0, 1)\n    for (i in 2 until n) {\n        result.add(result[i-1] + result[i-2])\n    }\n    return result\n}',
    explanation: 'We build the sequence iteratively, each number being the sum of the previous two.'
  },
  {
    id: 8,
    language: 'C',
    letter: 'C',
    question: 'Write a C function that swaps two integers using pointers.',
    starterCode: 'void swap(int *a, int *b) {\n    // Your code here\n}',
    hint: 'Use a temporary variable to hold one value while swapping.',
    solution: 'void swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}',
    explanation: 'We dereference the pointers and use a temp variable to exchange the values.'
  }
];

export default function InteractivePage() {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [code, setCode] = useState(challenges[0].starterCode);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);

  const challenge = challenges[currentChallenge];

  const handleRun = () => {
    // Simulate running code
    setOutput(`✅ Code compiled successfully!\n\nYour ${challenge.language} code looks good.\n\n${challenge.explanation}`);
    if (!completedChallenges.includes(challenge.id)) {
      setCompletedChallenges([...completedChallenges, challenge.id]);
    }
  };

  const handleNext = () => {
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(currentChallenge + 1);
      setCode(challenges[currentChallenge + 1].starterCode);
      setShowHint(false);
      setShowSolution(false);
      setOutput(null);
    }
  };

  const handlePrev = () => {
    if (currentChallenge > 0) {
      setCurrentChallenge(currentChallenge - 1);
      setCode(challenges[currentChallenge - 1].starterCode);
      setShowHint(false);
      setShowSolution(false);
      setOutput(null);
    }
  };

  const handleReset = () => {
    setCode(challenge.starterCode);
    setShowHint(false);
    setShowSolution(false);
    setOutput(null);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            🎮 Interactive Coding Challenges
          </h1>
          <p className="text-gray-400">
            Practice coding in different languages with hands-on challenges
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">
              Progress: {completedChallenges.length}/{challenges.length} challenges completed
            </span>
            <span className="text-sm text-green-400">
              {Math.round((completedChallenges.length / challenges.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(completedChallenges.length / challenges.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Challenge */}
          <div className="space-y-4">
            {/* Challenge Info */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                    {challenge.language}
                  </span>
                  <span className="text-gray-400 text-sm">
                    Challenge {currentChallenge + 1} of {challenges.length}
                  </span>
                </div>
                {completedChallenges.includes(challenge.id) && (
                  <span className="text-green-400">✓ Completed</span>
                )}
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{challenge.question}</h2>
              <Link
                to={`/language/${challenge.letter}`}
                className="text-purple-400 text-sm hover:text-purple-300 transition-colors"
              >
                Learn more about {challenge.language} →
              </Link>
            </div>

            {/* Hint & Solution */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex space-x-3 mb-4">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 rounded-lg text-sm hover:bg-yellow-500/20 transition-colors"
                >
                  💡 {showHint ? 'Hide' : 'Show'} Hint
                </button>
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-300 rounded-lg text-sm hover:bg-red-500/20 transition-colors"
                >
                  🔑 {showSolution ? 'Hide' : 'Show'} Solution
                </button>
              </div>
              
              {showHint && (
                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4 mb-3">
                  <p className="text-yellow-200 text-sm">💡 {challenge.hint}</p>
                </div>
              )}
              
              {showSolution && (
                <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-200 text-sm font-mono whitespace-pre-wrap">{challenge.solution}</p>
                </div>
              )}
            </div>

            {/* Output */}
            {output && (
              <div className="bg-gray-800 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-green-400 font-bold mb-2">📤 Output</h3>
                <pre className="text-green-200 text-sm whitespace-pre-wrap font-mono">{output}</pre>
              </div>
            )}
          </div>

          {/* Right Panel - Code Editor */}
          <div className="space-y-4">
            <div className="bg-gray-800 border border-white/10 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm">{challenge.language.toLowerCase()}_challenge.txt</span>
                <button
                  onClick={handleReset}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  ↺ Reset
                </button>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-80 bg-transparent text-gray-200 p-4 font-mono text-sm resize-none focus:outline-none"
                spellCheck={false}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handleRun}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                ▶ Run Code
              </button>
              <button
                onClick={handlePrev}
                disabled={currentChallenge === 0}
                className="px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                disabled={currentChallenge === challenges.length - 1}
                className="px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Challenge Navigation */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-white font-bold mb-4">All Challenges</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {challenges.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => {
                  setCurrentChallenge(idx);
                  setCode(ch.starterCode);
                  setShowHint(false);
                  setShowSolution(false);
                  setOutput(null);
                }}
                className={`p-3 rounded-lg text-sm text-left transition-all ${
                  idx === currentChallenge
                    ? 'bg-purple-500/20 border border-purple-500/30 text-purple-300'
                    : completedChallenges.includes(ch.id)
                    ? 'bg-green-500/10 border border-green-500/20 text-green-300'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="font-medium">{ch.language}</div>
                <div className="text-xs opacity-70 mt-1">
                  {completedChallenges.includes(ch.id) ? '✓ Done' : `Challenge ${idx + 1}`}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
