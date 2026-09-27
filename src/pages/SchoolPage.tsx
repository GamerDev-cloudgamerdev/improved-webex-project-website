import { useState } from 'react';
import { Link } from 'react-router-dom';
import { languages } from '../data/languages';

interface Lesson {
  chapter: number;
  title: string;
  language: string;
  letter: string;
  objectives: string[];
  content: string[];
  keyConcepts: string[];
  vocabulary: { term: string; definition: string }[];
  summary: string;
}

const lessons: Lesson[] = [
  {
    chapter: 1,
    title: 'Introduction to Python',
    language: 'Python',
    letter: 'P',
    objectives: [
      'Understand what Python is and why it\'s popular',
      'Learn basic Python syntax and structure',
      'Write your first Python program',
      'Understand variables and data types'
    ],
    content: [
      'Python is a high-level, interpreted programming language created by Guido van Rossum in 1991. It emphasizes code readability with its use of significant indentation.',
      'Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented, and functional programming.',
      'Python\'s simple syntax makes it an excellent choice for beginners. Its vast standard library and active community make it powerful for professionals.',
      'Common uses include web development (Django, Flask), data science (NumPy, Pandas), machine learning (TensorFlow, PyTorch), automation, and scientific computing.'
    ],
    keyConcepts: [
      'Indentation defines code blocks (no curly braces needed)',
      'Variables don\'t need type declarations',
      'The print() function outputs text to the console',
      'Python uses # for single-line comments'
    ],
    vocabulary: [
      { term: 'Interpreter', definition: 'A program that executes code line by line without compiling' },
      { term: 'Dynamic Typing', definition: 'Variable types are determined at runtime, not compile time' },
      { term: 'PEP 8', definition: 'The official style guide for Python code' },
      { term: 'Virtual Environment', definition: 'An isolated environment for Python projects' }
    ],
    summary: 'Python is a versatile, beginner-friendly language used in web development, data science, AI, and more. Its clean syntax and massive ecosystem make it one of the most popular languages in the world.'
  },
  {
    chapter: 2,
    title: 'Getting Started with JavaScript',
    language: 'JavaScript',
    letter: 'J',
    objectives: [
      'Understand JavaScript\'s role in web development',
      'Learn about variables, functions, and DOM manipulation',
      'Understand event-driven programming',
      'Write interactive web page code'
    ],
    content: [
      'JavaScript is the programming language of the web. Created by Brendan Eich in 1995 in just 10 days, it has grown to become one of the most widely-used programming languages in the world.',
      'JavaScript runs in every web browser and can also run on servers using Node.js. It\'s an event-driven, functional, and prototype-based language.',
      'Modern JavaScript (ES6+) includes features like arrow functions, template literals, destructuring, classes, modules, and async/await for asynchronous programming.',
      'JavaScript is essential for front-end web development and is increasingly used for back-end development, mobile apps (React Native), and desktop apps (Electron).'
    ],
    keyConcepts: [
      'Variables declared with let, const, or var',
      'Functions are first-class objects',
      'The DOM (Document Object Model) connects JS to HTML',
      'Asynchronous programming with Promises and async/await'
    ],
    vocabulary: [
      { term: 'DOM', definition: 'Document Object Model - a tree representation of HTML' },
      { term: 'Callback', definition: 'A function passed as an argument to another function' },
      { term: 'Closure', definition: 'A function that has access to its outer scope variables' },
      { term: 'Promise', definition: 'An object representing eventual completion of an async operation' }
    ],
    summary: 'JavaScript is the language that powers the interactive web. From simple animations to complex single-page applications, JavaScript is essential for modern web development.'
  },
  {
    chapter: 3,
    title: 'Systems Programming with Rust',
    language: 'Rust',
    letter: 'R',
    objectives: [
      'Understand Rust\'s ownership system',
      'Learn about memory safety without garbage collection',
      'Understand the borrow checker',
      'Write safe and efficient systems code'
    ],
    content: [
      'Rust is a systems programming language focused on safety, speed, and concurrency. Created by Graydon Hoare at Mozilla, it was first released in 2010 and has since gained massive popularity.',
      'Rust\'s unique ownership system ensures memory safety without a garbage collector. Every value has exactly one owner, and when the owner goes out of scope, the value is dropped.',
      'The borrow checker enforces rules at compile time: you can have either one mutable reference or any number of immutable references, but not both simultaneously.',
      'Rust is used in operating systems (parts of Linux), browsers (Firefox), game engines, CLI tools, WebAssembly, and anywhere performance and safety matter.'
    ],
    keyConcepts: [
      'Ownership: each value has exactly one owner',
      'Borrowing: references allow access without taking ownership',
      'Lifetimes: the compiler tracks how long references are valid',
      'Pattern matching with match expressions'
    ],
    vocabulary: [
      { term: 'Ownership', definition: 'The system that tracks who owns each value in memory' },
      { term: 'Borrow Checker', definition: 'The compiler component that enforces borrowing rules' },
      { term: 'Lifetime', definition: 'A construct that tracks how long references are valid' },
      { term: 'Zero-Cost Abstraction', definition: 'High-level features with no runtime overhead' }
    ],
    summary: 'Rust provides the performance of C/C++ with memory safety guarantees at compile time. Its ownership system is revolutionary, eliminating entire classes of bugs like null pointer dereferences and data races.'
  },
  {
    chapter: 4,
    title: 'Mobile Development with Swift',
    language: 'Swift',
    letter: 'S',
    objectives: [
      'Understand Swift\'s design philosophy',
      'Learn about optionals and type safety',
      'Explore Swift\'s modern syntax features',
      'Understand the Apple development ecosystem'
    ],
    content: [
      'Swift is Apple\'s modern programming language for iOS, macOS, watchOS, and tvOS development. Created by Chris Lattner and released in 2014, it was designed to be safe, fast, and expressive.',
      'Swift combines the best features of modern languages: type inference, closures, generics, protocol-oriented programming, and optional types for null safety.',
      'Swift uses Automatic Reference Counting (ARC) for memory management and features a powerful type system that catches many errors at compile time.',
      'With SwiftUI and Combine frameworks, Swift enables developers to build beautiful, responsive user interfaces with minimal code using declarative syntax.'
    ],
    keyConcepts: [
      'Optionals handle the absence of a value safely',
      'Type inference reduces verbosity',
      'Protocol-oriented programming over class inheritance',
      'Value types (structs) vs reference types (classes)'
    ],
    vocabulary: [
      { term: 'Optional', definition: 'A type that represents either a value or nil (absence of value)' },
      { term: 'ARC', definition: 'Automatic Reference Counting for memory management' },
      { term: 'Protocol', definition: 'A blueprint of methods, properties, and requirements' },
      { term: 'Guard Statement', definition: 'A way to exit early if conditions aren\'t met' }
    ],
    summary: 'Swift is a modern, safe, and fast language designed for Apple platforms. Its emphasis on safety and expressiveness makes it a joy to write while catching bugs at compile time.'
  },
  {
    chapter: 5,
    title: 'Cloud-Native Development with Go',
    language: 'Go',
    letter: 'G',
    objectives: [
      'Understand Go\'s design principles',
      'Learn about goroutines and channels',
      'Explore Go\'s simplicity and efficiency',
      'Build concurrent programs'
    ],
    content: [
      'Go (Golang) was created at Google by Robert Griesemer, Rob Pike, and Ken Thompson. First released in 2009, it was designed to be simple, efficient, and scalable.',
      'Go features built-in concurrency through goroutines (lightweight threads) and channels (communication between goroutines). This makes concurrent programming much simpler.',
      'Go compiles directly to machine code, resulting in fast execution. Its garbage collector is optimized for low latency, making it suitable for network services.',
      'Go is widely used for cloud infrastructure (Docker, Kubernetes), microservices, CLI tools, and web servers. Companies like Google, Uber, and Twitch use Go extensively.'
    ],
    keyConcepts: [
      'Goroutines: lightweight concurrent functions',
      'Channels: typed conduits for communication',
      'Interfaces: implicit implementation (duck typing)',
      'Error handling with explicit error returns'
    ],
    vocabulary: [
      { term: 'Goroutine', definition: 'A lightweight thread managed by the Go runtime' },
      { term: 'Channel', definition: 'A conduit for communication between goroutines' },
      { term: 'Interface', definition: 'A type that specifies a method set (implicitly implemented)' },
      { term: 'Slice', definition: 'A dynamically-sized, flexible view of array elements' }
    ],
    summary: 'Go is a simple, fast language ideal for cloud services and concurrent programming. Its minimal syntax and powerful standard library make it productive for building reliable systems.'
  },
  {
    chapter: 6,
    title: 'Functional Programming with Haskell',
    language: 'Haskell',
    letter: 'H',
    objectives: [
      'Understand pure functional programming',
      'Learn about lazy evaluation',
      'Explore type classes and polymorphism',
      'Write declarative code'
    ],
    content: [
      'Haskell is a purely functional programming language with strong static typing and lazy evaluation. First defined in 1990, it has influenced many modern languages.',
      'In Haskell, functions are pure — they always produce the same output for the same input and have no side effects. This makes reasoning about code much easier.',
      'Haskell\'s type system is one of the most powerful in any language. Type classes enable ad-hoc polymorphism, and the compiler can catch many bugs at compile time.',
      'Haskell is used in financial systems, compilers, academic research, and anywhere correctness is critical. Companies like Facebook, Standard Chartered, and Intel use Haskell.'
    ],
    keyConcepts: [
      'Pure functions: no side effects, same input = same output',
      'Lazy evaluation: expressions are computed only when needed',
      'Type classes: ad-hoc polymorphism through interfaces',
      'Monads: a way to structure computations with effects'
    ],
    vocabulary: [
      { term: 'Pure Function', definition: 'A function with no side effects and deterministic output' },
      { term: 'Lazy Evaluation', definition: 'Expressions are not evaluated until their values are needed' },
      { term: 'Type Class', definition: 'A type system construct for ad-hoc polymorphism' },
      { term: 'Monad', definition: 'A design pattern for chaining computations with context' }
    ],
    summary: 'Haskell teaches you to think differently about programming. Its emphasis on purity, types, and mathematical foundations makes you a better programmer in any language.'
  }
];

export default function SchoolPage() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showObjectives, setShowObjectives] = useState(true);
  const [showVocabulary, setShowVocabulary] = useState(false);

  const lesson = lessons[currentLesson];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            📚 School Mode — Structured Learning
          </h1>
          <p className="text-gray-400">
            Classic classroom-style lessons with theory, concepts, and key vocabulary
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-4">📋 Table of Contents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {lessons.map((l, idx) => (
              <button
                key={l.chapter}
                onClick={() => setCurrentLesson(idx)}
                className={`p-3 rounded-lg text-left transition-all ${
                  idx === currentLesson
                    ? 'bg-blue-500/20 border border-blue-500/30 text-blue-300'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="text-xs text-gray-400">Chapter {l.chapter}</div>
                <div className="font-medium text-sm mt-1">{l.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Lesson Content */}
        <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-2xl">
          {/* Lesson Header - Chalkboard Style */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 border-b-4 border-yellow-600">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-yellow-400 text-sm font-medium mb-1">
                  Chapter {lesson.chapter}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {lesson.title}
                </h2>
                <div className="mt-2 flex items-center space-x-3">
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm">
                    {lesson.language}
                  </span>
                  <Link
                    to={`/language/${lesson.letter}`}
                    className="text-purple-300 text-sm hover:text-purple-200 transition-colors"
                  >
                    View language details →
                  </Link>
                </div>
              </div>
              <div className="hidden md:block text-6xl opacity-30">📖</div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Learning Objectives */}
            <div>
              <button
                onClick={() => setShowObjectives(!showObjectives)}
                className="flex items-center space-x-2 text-lg font-bold text-blue-800 mb-3 hover:text-blue-600 transition-colors"
              >
                <span>🎯</span>
                <span>Learning Objectives</span>
                <span className="text-sm text-gray-400">({showObjectives ? 'click to collapse' : 'click to expand'})</span>
              </button>
              {showObjectives && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <ul className="space-y-2">
                    {lesson.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-700">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Lesson Content */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <span>📝</span>
                <span>Lesson Content</span>
              </h3>
              <div className="space-y-4">
                {lesson.content.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Concepts */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <span>💡</span>
                <span>Key Concepts to Remember</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {lesson.keyConcepts.map((concept, idx) => (
                  <div key={idx} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-yellow-600 font-bold">{idx + 1}.</span>
                      <span className="text-gray-700 text-sm">{concept}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vocabulary */}
            <div>
              <button
                onClick={() => setShowVocabulary(!showVocabulary)}
                className="flex items-center space-x-2 text-lg font-bold text-purple-800 mb-3 hover:text-purple-600 transition-colors"
              >
                <span>📖</span>
                <span>Key Vocabulary</span>
                <span className="text-sm text-gray-400">({showVocabulary ? 'click to collapse' : 'click to expand'})</span>
              </button>
              {showVocabulary && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-purple-100">
                        <th className="text-left px-4 py-2 text-purple-800 font-medium text-sm">Term</th>
                        <th className="text-left px-4 py-2 text-purple-800 font-medium text-sm">Definition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lesson.vocabulary.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-purple-50/50'}>
                          <td className="px-4 py-2 font-medium text-purple-700 text-sm">{item.term}</td>
                          <td className="px-4 py-2 text-gray-600 text-sm">{item.definition}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center space-x-2">
                <span>📌</span>
                <span>Chapter Summary</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">{lesson.summary}</p>
            </div>
          </div>

          {/* Lesson Navigation */}
          <div className="bg-gray-100 border-t border-gray-200 p-4 flex items-center justify-between">
            <button
              onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
              disabled={currentLesson === 0}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ← Previous Chapter
            </button>
            <span className="text-sm text-gray-500">
              Page {currentLesson + 1} of {lessons.length}
            </span>
            <button
              onClick={() => setCurrentLesson(Math.min(lessons.length - 1, currentLesson + 1))}
              disabled={currentLesson === lessons.length - 1}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Next Chapter →
            </button>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-white font-bold mb-4">🔗 Explore More Languages</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Link
                key={lang.letter}
                to={`/language/${lang.letter}`}
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-purple-300 transition-all"
              >
                {lang.letter}. {lang.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
