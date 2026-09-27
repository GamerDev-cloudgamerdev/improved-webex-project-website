export interface Language {
  letter: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  yearCreated: number;
  useCase: string;
  example: string;
  funFact: string;
}

export const languages: Language[] = [
  {
    letter: 'A',
    name: 'Assembly',
    description: 'A low-level programming language that provides a direct representation of machine code instructions. It gives programmers fine-grained control over hardware.',
    difficulty: 'Advanced',
    yearCreated: 1949,
    useCase: 'Operating systems, embedded systems, device drivers, and performance-critical applications.',
    example: 'section .text\nglobal _start\n_start:\n    mov eax, 1\n    mov edi, 1\n    mov rsi, msg\n    mov edx, 13\n    syscall\nsection .data\n    msg db "Hello!", 10',
    funFact: 'Assembly language is one of the oldest programming languages, dating back to the 1940s!'
  },
  {
    letter: 'B',
    name: 'Bash',
    description: 'A Unix shell and command language used for writing shell scripts. It\'s the default shell on most Linux distributions and macOS.',
    difficulty: 'Beginner',
    yearCreated: 1989,
    useCase: 'System administration, automation, file manipulation, and command-line operations.',
    example: '#!/bin/bash\necho "Hello, World!"\nfor i in {1..5}; do\n    echo "Count: $i"\ndone',
    funFact: 'Bash stands for "Bourne-Again SHell" — a pun on the original Bourne shell!'
  },
  {
    letter: 'C',
    name: 'C',
    description: 'A general-purpose programming language that has been widely used for system programming, operating systems, and embedded systems since the 1970s.',
    difficulty: 'Intermediate',
    yearCreated: 1972,
    useCase: 'Operating systems, embedded systems, game engines, compilers, and system software.',
    example: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
    funFact: 'C is the language that Unix was rewritten in, and it influenced almost every modern programming language!'
  },
  {
    letter: 'D',
    name: 'Dart',
    description: 'A client-optimized language for fast apps on any platform. Developed by Google, it\'s the language behind Flutter.',
    difficulty: 'Beginner',
    yearCreated: 2011,
    useCase: 'Mobile apps (Flutter), web applications, server-side development, and desktop applications.',
    example: "void main() {\n  print('Hello, World!');\n  \n  var languages = ['Dart', 'Flutter', 'Web'];\n  for (var lang in languages) {\n    print('Learning $lang');\n  }\n}",
    funFact: 'Dart powers Flutter, which is used by Google, BMW, Toyota, and Alibaba for their apps!'
  },
  {
    letter: 'E',
    name: 'Elixir',
    description: 'A functional, concurrent programming language that runs on the Erlang VM. Known for building scalable and maintainable applications.',
    difficulty: 'Intermediate',
    yearCreated: 2011,
    useCase: 'Web applications, distributed systems, real-time applications, and telecommunications.',
    example: 'defmodule HelloWorld do\n  def greet do\n    IO.puts "Hello, World!"\n  end\n  \n  def count(n) when n > 0 do\n    IO.puts(n)\n    count(n - 1)\n  end\nend',
    funFact: 'Elixir is used by Discord to handle millions of concurrent connections!'
  },
  {
    letter: 'F',
    name: 'Fortran',
    description: 'One of the oldest programming languages, designed for scientific and engineering computations. Still widely used in high-performance computing.',
    difficulty: 'Intermediate',
    yearCreated: 1957,
    useCase: 'Scientific computing, weather forecasting, financial modeling, and engineering simulations.',
    example: "program hello\n    implicit none\n    print *, 'Hello, World!'\n    \n    integer :: i\n    do i = 1, 5\n        print *, 'Number:', i\n    end do\nend program hello",
    funFact: 'Fortran is still used by NASA for complex simulations and is over 65 years old!'
  },
  {
    letter: 'G',
    name: 'Go',
    description: 'A statically typed, compiled language designed at Google. Known for its simplicity, concurrency support, and fast compilation.',
    difficulty: 'Beginner',
    yearCreated: 2009,
    useCase: 'Cloud services, microservices, CLI tools, web servers, and distributed systems.',
    example: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n    \n    names := []string{"Go", "Rust", "Python"}\n    for _, name := range names {\n        fmt.Printf("Learning %s\\n", name)\n    }\n}',
    funFact: 'Go was created by the same people who designed Unix and the UTF-8 character encoding!'
  },
  {
    letter: 'H',
    name: 'Haskell',
    description: 'A purely functional programming language with strong static typing and lazy evaluation. Known for its mathematical foundations.',
    difficulty: 'Advanced',
    yearCreated: 1990,
    useCase: 'Financial systems, compilers, academic research, and concurrent programming.',
    example: 'main :: IO ()\nmain = do\n    putStrLn "Hello, World!"\n    let numbers = [1..5]\n    let doubled = map (*2) numbers\n    print doubled',
    funFact: 'Haskell influenced features in Swift, Rust, Python, and many other modern languages!'
  },
  {
    letter: 'I',
    name: 'Idris',
    description: 'A dependently typed functional programming language that emphasizes correctness. Types can depend on values for powerful verification.',
    difficulty: 'Advanced',
    yearCreated: 2007,
    useCase: 'Formal verification, theorem proving, type-safe programming, and academic research.',
    example: 'module Main\n\nmain : IO ()\nmain = do\n    putStrLn "Hello, World!"\n    let nums : List Integer\n        nums = [1, 2, 3, 4, 5]\n    printLn (sum nums)',
    funFact: 'Idris lets you prove that your programs are correct at compile time using dependent types!'
  },
  {
    letter: 'J',
    name: 'JavaScript',
    description: 'The language of the web. It runs in browsers and on servers (Node.js), making it one of the most versatile and widely-used languages.',
    difficulty: 'Beginner',
    yearCreated: 1995,
    useCase: 'Web development, mobile apps, server-side applications, games, and desktop apps.',
    example: '// Hello World in JavaScript\nconsole.log("Hello, World!");\n\n// Array methods\nconst languages = ["JS", "Python", "Go"];\nlanguages.forEach(lang => {\n    console.log("Learning " + lang);\n});',
    funFact: 'JavaScript was created in just 10 days and is now used by 98% of all websites!'
  },
  {
    letter: 'K',
    name: 'Kotlin',
    description: 'A modern, concise language that runs on the JVM. It\'s Google\'s preferred language for Android development.',
    difficulty: 'Beginner',
    yearCreated: 2011,
    useCase: 'Android apps, server-side development, multiplatform apps, and data science.',
    example: 'fun main() {\n    println("Hello, World!")\n    \n    val languages = listOf("Kotlin", "Java", "Swift")\n    languages.forEach { lang ->\n        println("Learning $lang")\n    }\n}',
    funFact: 'Kotlin was named after an island near St. Petersburg, just like Java was named after coffee!'
  },
  {
    letter: 'L',
    name: 'Lua',
    description: 'A lightweight, embeddable scripting language designed for extending applications. Popular in game development and embedded systems.',
    difficulty: 'Beginner',
    yearCreated: 1993,
    useCase: 'Game scripting (Roblox, WoW), embedded systems, web applications, and configuration.',
    example: '-- Hello World in Lua\nprint("Hello, World!")\n\nlocal languages = {"Lua", "Python", "Ruby"}\nfor i, lang in ipairs(languages) do\n    print("Learning " .. lang)\nend',
    funFact: 'Lua is used in Roblox, World of Warcraft, and even in the Adobe Photoshop Lightroom!'
  },
  {
    letter: 'M',
    name: 'MATLAB',
    description: 'A high-level language for numerical computing, visualization, and algorithm development. Widely used in engineering and science.',
    difficulty: 'Intermediate',
    yearCreated: 1984,
    useCase: 'Signal processing, control systems, image processing, machine learning, and mathematics.',
    example: "% Hello World in MATLAB\ndisp('Hello, World!');\n\n% Matrix operations\nA = [1 2 3; 4 5 6; 7 8 9];\ndisp('Matrix:');\ndisp(A);",
    funFact: 'MATLAB is used by over 5 million engineers and scientists worldwide!'
  },
  {
    letter: 'N',
    name: 'Nim',
    description: 'A systems programming language that combines the performance of C with the elegance of Python. Compiles to C, C++, or JavaScript.',
    difficulty: 'Intermediate',
    yearCreated: 2008,
    useCase: 'Systems programming, web development, game development, and scientific computing.',
    example: '# Hello World in Nim\necho "Hello, World!"\n\nlet languages = @["Nim", "Rust", "Go"]\nfor lang in languages:\n    echo "Learning " & lang',
    funFact: 'Nim compiles to C, giving you Python-like syntax with C-like performance!'
  },
  {
    letter: 'O',
    name: 'Objective-C',
    description: 'A general-purpose language that adds Smalltalk-style messaging to C. It was the primary language for macOS and iOS development.',
    difficulty: 'Intermediate',
    yearCreated: 1984,
    useCase: 'iOS/macOS applications, frameworks, and legacy Apple platform development.',
    example: '#import <Foundation/Foundation.h>\n\nint main() {\n    NSLog(@"Hello, World!");\n    \n    NSArray *languages = @[@"ObjC", @"Swift", @"Java"];\n    for (NSString *lang in languages) {\n        NSLog(@"Learning %@", lang);\n    }\n    return 0;\n}',
    funFact: 'Objective-C was used to build the original iPhone OS and many early iOS apps!'
  },
  {
    letter: 'P',
    name: 'Python',
    description: 'A versatile, high-level language known for its readable syntax. It\'s the go-to language for data science, AI, web development, and automation.',
    difficulty: 'Beginner',
    yearCreated: 1991,
    useCase: 'Data science, AI/ML, web development, automation, scripting, and scientific computing.',
    example: '# Hello World in Python\nprint("Hello, World!")\n\n# List comprehension\nlanguages = ["Python", "Rust", "Go"]\nfor lang in languages:\n    print(f"Learning {lang}")',
    funFact: 'Python is named after Monty Python\'s Flying Circus, not the snake!'
  },
  {
    letter: 'Q',
    name: 'Q#',
    description: 'A domain-specific programming language by Microsoft for quantum computing. It lets you write quantum algorithms.',
    difficulty: 'Advanced',
    yearCreated: 2018,
    useCase: 'Quantum computing, quantum algorithms, cryptography research, and quantum simulation.',
    example: 'open Microsoft.Quantum.Intrinsic;\nopen Microsoft.Quantum.Canon;\n\noperation HelloWorld() : Unit {\n    Message("Hello, Quantum World!");\n    \n    use qubit = Qubit();\n    H(qubit);\n    let result = M(qubit);\n    Reset(qubit);\n}',
    funFact: 'Q# is one of the first languages designed specifically for quantum computers!'
  },
  {
    letter: 'R',
    name: 'Rust',
    description: 'A systems programming language focused on safety, speed, and concurrency. It prevents memory bugs at compile time without a garbage collector.',
    difficulty: 'Advanced',
    yearCreated: 2010,
    useCase: 'Operating systems, game engines, browsers, CLI tools, and performance-critical systems.',
    example: 'fn main() {\n    println!("Hello, World!");\n    \n    let languages = vec!["Rust", "Go", "C++"];\n    for lang in &languages {\n        println!("Learning {}", lang);\n    }\n}',
    funFact: 'Rust has been Stack Overflow\'s most loved language for 7+ years running!'
  },
  {
    letter: 'S',
    name: 'Swift',
    description: 'Apple\'s modern programming language for iOS, macOS, watchOS, and tvOS. It\'s designed to be safe, fast, and expressive.',
    difficulty: 'Beginner',
    yearCreated: 2014,
    useCase: 'iOS/macOS/watchOS apps, server-side development, and Apple platform ecosystem.',
    example: 'import Foundation\n\nprint("Hello, World!")\n\nlet languages = ["Swift", "Kotlin", "Dart"]\nfor lang in languages {\n    print("Learning \\(lang)")\n}',
    funFact: 'Swift was designed by Chris Lattner in secret for years before its public release!'
  },
  {
    letter: 'T',
    name: 'TypeScript',
    description: 'A typed superset of JavaScript that compiles to plain JavaScript. It adds static types to help catch errors early and improve developer experience.',
    difficulty: 'Beginner',
    yearCreated: 2012,
    useCase: 'Large-scale web applications, enterprise software, full-stack development, and Node.js.',
    example: '// Hello World in TypeScript\nconsole.log("Hello, World!");\n\ninterface Language {\n    name: string;\n    level: string;\n}\n\nconst languages: Language[] = [\n    { name: "TypeScript", level: "Static" },\n    { name: "JavaScript", level: "Dynamic" }\n];\n\nlanguages.forEach(lang => \n    console.log("Learning " + lang.name)\n);',
    funFact: 'TypeScript was created by Anders Hejlsberg, who also created C# and Turbo Pascal!'
  },
  {
    letter: 'U',
    name: 'UnrealScript',
    description: 'A scripting language used in the Unreal Engine for game development. It provides high-level access to game logic and mechanics.',
    difficulty: 'Intermediate',
    yearCreated: 1998,
    useCase: 'Game development, game logic scripting, level design automation, and game AI.',
    example: 'class HelloWorld extends Actor;\n\nfunction BeginPlay()\n{\n    log("Hello, World!");\n    \n    local array<string> Languages;\n    Languages[0] = "UnrealScript";\n    Languages[1] = "Blueprint";\n    \n    local int i;\n    for (i = 0; i < 2; i++)\n        log("Learning " $ Languages[i]);\n}',
    funFact: 'UnrealScript powered games like Unreal Tournament and Gears of War!'
  },
  {
    letter: 'V',
    name: 'V',
    description: 'A simple, fast, compiled language for building maintainable software. It aims to combine the simplicity of Go with the performance of Rust.',
    difficulty: 'Intermediate',
    yearCreated: 2019,
    useCase: 'Systems programming, web development, GUI applications, and cross-platform tools.',
    example: "fn main() {\n    println('Hello, World!')\n    \n    languages := ['V', 'Go', 'Rust']\n    for lang in languages {\n        println('Learning ' + lang)\n    }\n}",
    funFact: 'V compiles 1 million lines of code in less than a second!'
  },
  {
    letter: 'W',
    name: 'Wolfram',
    description: 'The programming language of Mathematica and the Wolfram Alpha engine. Used for symbolic computation, data analysis, and visualization.',
    difficulty: 'Intermediate',
    yearCreated: 1988,
    useCase: 'Mathematical computation, data visualization, machine learning, and knowledge-based computing.',
    example: '(* Hello World in Wolfram *)\nPrint["Hello, World!"]\n\n(* Mathematical operations *)\nlanguages = {"Wolfram", "MATLAB", "R"};\nDo[Print["Learning " <> languages[[i]]], \n   {i, Length[languages]}]',
    funFact: 'Wolfram Alpha, powered by this language, answers questions using curated data and algorithms!'
  },
  {
    letter: 'X',
    name: 'XQuery',
    description: 'A query and functional programming language designed to query and transform XML data. It\'s the XML equivalent of SQL for databases.',
    difficulty: 'Intermediate',
    yearCreated: 2007,
    useCase: 'XML data processing, document transformation, database queries, and content management.',
    example: '(: Hello World in XQuery :)\nlet $message := "Hello, World!"\nreturn $message\n\nlet $languages := ("XQuery", "XSLT", "XPath")\nfor $lang in $languages\nreturn concat("Learning ", $lang)',
    funFact: 'XQuery is often called the "SQL of XML" — it queries XML documents like SQL queries databases!'
  },
  {
    letter: 'Y',
    name: 'YAML',
    description: 'A human-friendly data serialization language. While not a traditional programming language, it\'s essential for configuration and DevOps.',
    difficulty: 'Beginner',
    yearCreated: 2001,
    useCase: 'Configuration files (Docker, Kubernetes), data serialization, CI/CD pipelines, and infrastructure as code.',
    example: '# YAML Configuration Example\napp:\n  name: "CodeMaster"\n  version: "1.0"\n  languages:\n    - name: "YAML"\n      type: "Configuration"\n    - name: "Python"\n      type: "Programming"\n  settings:\n    debug: true\n    port: 8080',
    funFact: 'YAML stands for "YAML Ain\'t Markup Language" — it\'s a recursive acronym!'
  },
  {
    letter: 'Z',
    name: 'Zig',
    description: 'A modern systems programming language designed to be a better C. It focuses on simplicity, performance, and safety without hidden control flow.',
    difficulty: 'Advanced',
    yearCreated: 2016,
    useCase: 'Systems programming, embedded systems, game development, and performance-critical applications.',
    example: 'const std = @import("std");\n\npub fn main() !void {\n    const stdout = std.io.getStdOut().writer();\n    try stdout.print("Hello, World!\\n", .{});\n    \n    const languages = [_][]const u8{\n        "Zig", "Rust", "C"\n    };\n    for (languages) |lang| {\n        try stdout.print("Learning {s}\\n", .{lang});\n    }\n}',
    funFact: 'Zig can compile C and C++ code, acting as a drop-in replacement for C compilers!'
  }
];
