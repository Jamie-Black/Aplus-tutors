const departmentSubjects = {
  Science: ["Mathematics", "English", "Physics", "Chemistry", "Biology",],
  Art: ["Mathematics", "English", "Government", "Literature", "CRS"],
  Commercial: ["Mathematics", "English", "Economics", "Accounting", "Commerce"]
};

  // --- Multi-Subject Quiz Data ---
  window.quizData = {
  
    Mathematics: [
  {
    topic: "Numbers and Basic Arithmetic Operations",
    questions: [
  {
    q: "What is the value of 15 × 12 ÷ 3?",
    options: ["45", "50", "55", "60"],
    answer: "60"
  },
  {
    q: "Evaluate: (24 ÷ 3) + (18 ÷ 2).",
    options: ["15", "18", "20", "21"],
    answer: "21"
  },
  {
    q: "Find the LCM of 12 and 15.",
    options: ["45", "50", "60", "75"],
    answer: "60"
  },
  {
    q: "Simplify: 72 ÷ (6 × 2).",
    options: ["3", "4", "5", "6"],
    answer: "6"
  },
  {
    q: "Find the HCF of 42 and 56.",
    options: ["7", "8", "12", "14"],
    answer: "14"
  },
  {
    q: "Simplify: (2/3) + (4/9).",
    options: ["6/9", "10/9", "12/9", "14/9"],
    answer: "10/9"
  },
  {
    q: "Evaluate: (0.25 × 0.4) ÷ 0.1.",
    options: ["0.1", "0.4", "1.0", "1.25"],
    answer: "1.0"
  },
  {
    q: "Simplify: 3⅔ − 1½.",
    options: ["1⅓", "2⅙", "2⅛", "1½"],
    answer: "2⅙"
  },
  {
    q: "Express 0.375 as a fraction in simplest form.",
    options: ["3/8", "5/8", "3/10", "7/10"],
    answer: "3/8"
  },
  {
    q: "Find 15% of 240.",
    options: ["24", "30", "32", "36"],
    answer: "36"
  },
  {
    q: "Simplify: 5² − 3².",
    options: ["9", "10", "16", "20"],
    answer: "16"
  },
  {
    q: "Divide ₦6,000 in the ratio 2:3.",
    options: ["₦2,000 and ₦4,000", "₦2,400 and ₦3,600", "₦3,000 each", "₦1,500 and ₦4,500"],
    answer: "₦2,400 and ₦3,600"
  },
  {
    q: "Find the square root of 196.",
    options: ["12", "13", "14", "15"],
    answer: "14"
  },
  {
    q: "Simplify: (−3) × (−5) × 2.",
    options: ["−30", "15", "30", "−15"],
    answer: "30"
  },
  {
    q: "Evaluate: 8³ ÷ 4².",
    options: ["8", "16", "32", "64"],
    answer: "8"
  },
  {
    q: "Simplify: 2.5 × 0.04.",
    options: ["0.001", "0.01", "0.1", "1"],
    answer: "0.1"
  },
  {
    q: "If a man spends ₦1,200 from ₦4,800, find the fraction of his money remaining.",
    options: ["1/2", "3/4", "1/3", "2/3"],
    answer: "3/4"
  },
  {
    q: "Express 250 as a product of its prime factors.",
    options: ["2 × 5³", "2 × 5²", "2² × 5³", "2 × 5⁴"],
    answer: "2 × 5³"
  },
  {
    q: "Find the value of (2 + 3)² − (4 × 2).",
    options: ["9", "17", "21", "25"],
    answer: "17"
  },
  {
    q: "Evaluate: |−9 + 5|.",
    options: ["−4", "0", "3", "4"],
    answer: "4"
  }
    ]
  },
  {
    topic: "Ratio, Proportion and Averages",
    questions: [
  {
    q: "Divide ₦9,000 among A, B, and C in the ratio 2:3:4.",
    options: ["₦1,800, ₦2,700, ₦4,500", "₦2,000, ₦3,000, ₦4,000", "₦1,500, ₦3,000, ₦4,500", "₦2,200, ₦2,800, ₦4,000"],
    answer: "₦2,000, ₦3,000, ₦4,000"
  },
  {
    q: "If 6 men complete a work in 8 days, how many days will 4 men take to complete it?",
    options: ["10", "11", "12", "16"],
    answer: "12"
  },
  {
    q: "A recipe requires 2 kg of flour for 5 loaves. How much flour is needed for 15 loaves?",
    options: ["4 kg", "5 kg", "6 kg", "7 kg"],
    answer: "6 kg"
  },
  {
    q: "Find the mean of 6, 8, 10, 12, 14.",
    options: ["8", "9", "10", "11"],
    answer: "10"
  },
  {
    q: "The ratio of boys to girls in a class is 3:2. If there are 25 students, how many are girls?",
    options: ["10", "12", "15", "20"],
    answer: "10"
  },
  {
    q: "If ₦5,000 is shared between two people in the ratio 4:1, how much does the smaller share receive?",
    options: ["₦800", "₦900", "₦1,000", "₦1,200"],
    answer: "₦1,000"
  },
  {
    q: "A car travels 240 km in 4 hours. Find its average speed.",
    options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
    answer: "60 km/h"
  },
  {
    q: "The sides of two similar triangles are in the ratio 2:3. What is the ratio of their areas?",
    options: ["2:3", "3:2", "4:9", "9:4"],
    answer: "4:9"
  },
  {
    q: "Find the average of 4, 9, 7, 10, and 5.",
    options: ["6", "7", "8", "9"],
    answer: "7"
  },
  {
    q: "The ratio of sugar to flour is 1:4. If 12 kg of flour is used, how much sugar is needed?",
    options: ["2 kg", "3 kg", "4 kg", "5 kg"],
    answer: "3 kg"
  },
  {
    q: "If 10 workers earn ₦20,000, how much will 15 workers earn at the same rate?",
    options: ["₦25,000", "₦30,000", "₦35,000", "₦40,000"],
    answer: "₦30,000"
  },
  {
    q: "If 5 pens cost ₦250, what is the cost of 8 pens?",
    options: ["₦350", "₦380", "₦400", "₦420"],
    answer: "₦400"
  },
  {
    q: "The mean of five numbers is 18. If four of them are 15, 16, 17, and 19, find the fifth.",
    options: ["20", "21", "22", "23"],
    answer: "23"
  },
  {
    q: "If 3 oranges cost ₦90, how many can be bought with ₦300?",
    options: ["8", "9", "10", "11"],
    answer: "10"
  },
  {
    q: "If x : y = 2 : 5, find y when x = 12.",
    options: ["20", "25", "30", "35"],
    answer: "30"
  },
  {
    q: "A car uses 5 litres of fuel to cover 60 km. How much fuel will it need for 180 km?",
    options: ["10 litres", "12 litres", "15 litres", "18 litres"],
    answer: "15 litres"
  },
  {
    q: "The average of two numbers is 24. If one number is 30, find the other.",
    options: ["16", "18", "20", "22"],
    answer: "18"
  },
  {
    q: "If the ratio of boys to girls is 5:3 and there are 40 students, how many are boys?",
    options: ["20", "25", "30", "35"],
    answer: "25"
  },
  {
    q: "Two pipes can fill a tank in 6 hours and 9 hours respectively. How long will both take together?",
    options: ["3.5 hours", "3.6 hours", "4 hours", "4.5 hours"],
    answer: "3.6 hours"
  },
  {
    q: "Find the mean of the first five even numbers.",
    options: ["4", "5", "6", "7"],
    answer: "6"
  }
    ]
  },
  {
    topic: "Indices",
    questions: [
      { q: "Simplify: 2³ × 2⁴.", options: ["2⁷", "2¹²", "8⁴", "2⁸"], answer: "2⁷" },
      { q: "Simplify: (3²)³.", options: ["3⁵", "3⁶", "9³", "6³"], answer: "3⁶" },
      { q: "If 5ˣ = 125, find x.", options: ["2", "3", "4", "5"], answer: "3" },
      { q: "Simplify: (4⁵ ÷ 4²).", options: ["4³", "4⁷", "8³", "2³"], answer: "4³" },
      { q: "Evaluate: (2³ × 3²).", options: ["36", "24", "18", "12"], answer: "36" },
      { q: "Simplify: (10²)⁰.", options: ["0", "1", "10", "100"], answer: "1" },
      { q: "If 2ˣ = 8, find x.", options: ["1", "2", "3", "4"], answer: "3" },
      { q: "Simplify: (x³)² × x.", options: ["x⁵", "x⁶", "x⁷", "x⁸"], answer: "x⁷" },
      { q: "Simplify: (9⁰).", options: ["0", "1", "9", "∞"], answer: "1" },
      { q: "Evaluate: 5⁻².", options: ["25", "1/25", "1/5", "1/10"], answer: "1/25" },
      { q: "Simplify: (a²b³)².", options: ["a²b⁵", "a⁴b⁶", "a⁶b⁴", "a³b⁶"], answer: "a⁴b⁶" },
      { q: "Simplify: (3⁴ ÷ 3²).", options: ["3²", "3⁴", "3⁶", "9"], answer: "3²" },
      { q: "Simplify: (16)^(1/2).", options: ["2", "3", "4", "5"], answer: "4" },
      { q: "Simplify: (8)^(2/3).", options: ["2", "4", "6", "8"], answer: "4" },
      { q: "If 9ˣ = 81, find x.", options: ["1", "2", "3", "4"], answer: "2" },
      { q: "Simplify: (x⁵ ÷ x²).", options: ["x²", "x³", "x⁵", "x⁷"], answer: "x³" },
      { q: "Simplify: (2⁴ × 4²).", options: ["2⁶", "2⁸", "2¹⁰", "2¹²"], answer: "2⁸" },
      { q: "Simplify: (a⁻³b²)⁻¹.", options: ["a³/b²", "b²/a³", "a²b³", "1/(a³b²)"], answer: "a³/b²" },
      { q: "Simplify: (27)^(1/3).", options: ["2", "3", "4", "9"], answer: "3" },
      { q: "Simplify: (5⁰ × 7⁰).", options: ["0", "1", "5", "7"], answer: "1" }
    ]
  },
  {
    topic: "Logarithms",
    questions: [
      { q: "Evaluate log₁₀(1000).", options: ["1", "2", "3", "4"], answer: "3" },
      { q: "Find log₂(8).", options: ["2", "3", "4", "5"], answer: "3" },
      { q: "If log₃(x) = 2, find x.", options: ["6", "9", "12", "18"], answer: "9" },
      { q: "Simplify: log₅(25) + log₅(4).", options: ["log₅(29)", "log₅(100)", "log₅(20)", "log₅(9)"], answer: "log₅(100)" },
      { q: "Evaluate log₄(64).", options: ["2", "3", "4", "5"], answer: "3" },
      { q: "If log₁₀(x) = 2, find x.", options: ["10", "50", "100", "1000"], answer: "100" },
      { q: "Simplify: log₂(32) − log₂(8).", options: ["1", "2", "3", "4"], answer: "2" },
      { q: "Find log₃(1/9).", options: ["−2", "−1", "1", "2"], answer: "−2" },
      { q: "Evaluate log₁₀(1).", options: ["0", "1", "10", "100"], answer: "0" },
      { q: "If log₅(x) = 0, find x.", options: ["0", "1", "5", "10"], answer: "1" },
      { q: "Simplify log₂(8) + log₂(4).", options: ["log₂(12)", "log₂(32)", "log₂(64)", "log₂(16)"], answer: "log₂(32)" },
      { q: "Find x if log₁₀(x) = 1.5.", options: ["15", "25", "30", "31.6"], answer: "31.6" },
      { q: "Simplify: 2log₁₀(5).", options: ["log₁₀(25)", "log₁₀(10)", "log₁₀(20)", "2.5"], answer: "log₁₀(25)" },
      { q: "Simplify: log₇(49).", options: ["1", "2", "3", "4"], answer: "2" },
      { q: "Simplify: log₂(1/4).", options: ["−1", "−2", "2", "4"], answer: "−2" },
      { q: "Evaluate: log₁₀(10⁴).", options: ["1", "2", "3", "4"], answer: "4" },
      { q: "Simplify: log₅(125) − log₅(5).", options: ["1", "2", "3", "4"], answer: "2" },
      { q: "If log₂(x) = 6, find x.", options: ["32", "64", "128", "256"], answer: "64" },
      { q: "Simplify: log₃(27) + log₃(9).", options: ["log₃(36)", "log₃(81)", "log₃(243)", "log₃(9)"], answer: "log₃(243)" },
      { q: "Evaluate: log₁₀(0.01).", options: ["−1", "−2", "1", "2"], answer: "−2" }
    ]
  },
  {
    topic: "Surds",
    questions: [
      { q: "Simplify √50.", options: ["5√2", "10√5", "25√2", "2√5"], answer: "5√2" },
      { q: "Simplify √18.", options: ["3√2", "3√3", "2√3", "6√2"], answer: "3√2" },
      { q: "Simplify √12 + √27.", options: ["5√3", "6√3", "7√3", "8√3"], answer: "6√3" },
      { q: "Rationalize 1/√3.", options: ["√3/3", "√3", "1/3√3", "3√3"], answer: "√3/3" },
      { q: "Simplify √72.", options: ["6√2", "3√8", "4√3", "8√3"], answer: "6√2" },
      { q: "Simplify 2√5 × 3√2.", options: ["5√6", "6√10", "6√2", "10√6"], answer: "6√10" },
      { q: "Simplify (√5)².", options: ["2√5", "5", "√10", "10"], answer: "5" },
      { q: "Simplify √8 ÷ √2.", options: ["2", "√2", "√4", "4"], answer: "2" },
      { q: "Simplify (√3 + √2)².", options: ["5 + 2√6", "5 + √6", "7 + 2√3", "3 + 2√2"], answer: "5 + 2√6" },
      { q: "Simplify 3√7 − √7.", options: ["2√7", "4√7", "√7", "3√7"], answer: "2√7" },
      { q: "Simplify √48.", options: ["4√3", "3√4", "6√2", "8√2"], answer: "4√3" },
      { q: "Simplify (2√3)².", options: ["2√3", "4√9", "12", "6"], answer: "12" },
      { q: "Simplify √20 + √45.", options: ["7√5", "5√5", "8√5", "9√5"], answer: "7√5" },
      { q: "Simplify √27 − √12.", options: ["√3", "3√3 − 2√3", "√6", "5√3"], answer: "√3" },
      { q: "Rationalize 3 / √5.", options: ["3√5/5", "5√3/3", "√15/3", "15/√3"], answer: "3√5/5" },
      { q: "Simplify √3 × √9.", options: ["√27", "3√3", "6", "9"], answer: "3√3" },
      { q: "Simplify (√2 + 1)(√2 − 1).", options: ["1", "2", "√2", "3"], answer: "1" },
      { q: "Simplify √2 × √8.", options: ["√10", "4", "2√2", "√16"], answer: "4" },
      { q: "Simplify (√5 + 2)².", options: ["9 + 4√5", "5 + 4√5", "5 + 2√5", "7 + 3√5"], answer: "9 + 4√5" },
      { q: "Simplify √0.04.", options: ["0.02", "0.2", "0.4", "2"], answer: "0.2" }
    ]
  },
  {
    topic: "Set Theory and Venn Diagrams — Quiz 1",
    questions: [
      { q: "What is a set?", options: ["A collection of well-defined objects", "A random group of things", "A number line", "An empty diagram"], answer: "A collection of well-defined objects" },
      { q: "Which of these is a finite set?", options: ["Set of even numbers", "Set of students in your class", "Set of all natural numbers", "Set of prime numbers"], answer: "Set of students in your class" },
      { q: "The symbol ∈ means?", options: ["Subset of", "Element of", "Intersection", "Union"], answer: "Element of" },
      { q: "What is the symbol for a universal set?", options: ["U", "E", "S", "V"], answer: "U" },
      { q: "The set with no element is called?", options: ["Finite set", "Empty set", "Infinite set", "Subset"], answer: "Empty set" },
      { q: "If A = {1,2,3} and B = {3,4,5}, what is A ∩ B?", options: ["{1,2,3,4,5}", "{3}", "{1,2,5}", "∅"], answer: "{3}" },
      { q: "If A = {x: x < 5} and B = {x: x > 3}, find A ∩ B.", options: ["x < 3", "x > 5", "3 < x < 5", "x = 5"], answer: "3 < x < 5" },
      { q: "A ⊂ B means?", options: ["A is equal to B", "A is a subset of B", "A is greater than B", "A intersects B"], answer: "A is a subset of B" },
      { q: "If n(A) = 5, n(B) = 7, and A, B are disjoint, find n(A ∪ B).", options: ["12", "35", "2", "7"], answer: "12" },
      { q: "What is the complement of a universal set?", options: ["The set itself", "Empty set", "Subset", "Superset"], answer: "Empty set" },
      { q: "The number of subsets of a set with 3 elements is?", options: ["3", "6", "8", "9"], answer: "8" },
      { q: "What is n(∅)?", options: ["1", "0", "∞", "Undefined"], answer: "0" },
      { q: "If A = {a,b,c} and B = {b,c,d}, find A ∪ B.", options: ["{a,b,c}", "{a,b,c,d}", "{b,c}", "{d}"], answer: "{a,b,c,d}" },
      { q: "If A = {1,2,3}, B = {3,4,5}, find A - B.", options: ["{1,2}", "{3,4,5}", "{1,2,3,4,5}", "{3}"], answer: "{1,2}" },
      { q: "The intersection of two disjoint sets is?", options: ["Empty set", "Union", "Subset", "Complement"], answer: "Empty set" },
      { q: "If A = {x: x is an odd number <10}, how many elements are in A?", options: ["4", "5", "6", "7"], answer: "5" },
      { q: "If n(U)=40, n(A)=25, n(A')=?, find n(A').", options: ["15", "25", "65", "10"], answer: "15" },
      { q: "In a class of 50, 30 study Math, 20 study English, and 10 study both. How many study only Math?", options: ["30", "20", "10", "20"], answer: "20" },
      { q: "If A ⊂ B and B ⊂ C, then A ⊂ ?", options: ["C", "B", "A", "U"], answer: "C" },
      { q: "Which of these diagrams represents disjoint sets?", options: ["Overlapping circles", "Separate circles", "Concentric circles", "One circle"], answer: "Separate circles" }
    ]
  },
  {
    topic: "Set Theory and Venn Diagrams — Quiz 2",
    questions: [
      { q: "The universal set U = {1,2,3,4,5,6,7,8,9,10}. A = {2,4,6,8,10}. Find A'.", options: ["{1,3,5,7,9}", "{2,4,6,8,10}", "∅", "{1,2,3,4,5}"], answer: "{1,3,5,7,9}" },
      { q: "If A and B are equal sets, then?", options: ["A ⊂ B", "B ⊂ A", "A = B", "A ≠ B"], answer: "A = B" },
      { q: "What is n(A ∪ B) = n(A) + n(B) - n(A ∩ B) known as?", options: ["Addition rule", "Intersection law", "Set formula", "Complementary rule"], answer: "Addition rule" },
      { q: "If A = {1,2,3,4}, find the power set P(A).", options: ["8 elements", "16 elements", "4 elements", "2 elements"], answer: "16 elements" },
      { q: "If n(A)=12, n(B)=9, n(A∩B)=4, find n(A∪B).", options: ["25", "17", "21", "16"], answer: "17" },
      { q: "A’ ∪ A = ?", options: ["U", "∅", "A", "A’"], answer: "U" },
      { q: "A’ ∩ A = ?", options: ["∅", "U", "A", "A’"], answer: "∅" },
      { q: "If n(U)=100, n(A)=60, n(A’)=?", options: ["40", "50", "60", "70"], answer: "40" },
      { q: "What does ∅ represent?", options: ["Empty set", "Universal set", "Subset", "Complement"], answer: "Empty set" },
      { q: "In a survey, 40 like football, 30 like basketball, 10 like both. Find total who like at least one.", options: ["60", "70", "50", "40"], answer: "60" },
      { q: "If A and B have no elements in common, they are?", options: ["Equal", "Subset", "Disjoint", "Universal"], answer: "Disjoint" },
      { q: "If n(A)=5, how many subsets does A have?", options: ["25", "10", "15", "32"], answer: "32" },
      { q: "The symbol ∪ means?", options: ["Intersection", "Union", "Complement", "Subset"], answer: "Union" },
      { q: "The symbol ∩ means?", options: ["Union", "Subset", "Intersection", "Difference"], answer: "Intersection" },
      { q: "If A = {x | x ≤ 10}, then x belongs to?", options: ["Infinite set", "Finite set", "Universal set", "Empty set"], answer: "Finite set" },
      { q: "A set with all natural numbers is?", options: ["Finite", "Infinite", "Empty", "Complement"], answer: "Infinite" },
      { q: "If A = {2,4,6}, B = {1,3,5}, then A ∩ B = ?", options: ["∅", "{1,3,5}", "{2,4,6}", "{1,2,3}"], answer: "∅" },
      { q: "Which of these is a subset of {1,2,3,4}?", options: ["{5}", "{1,3}", "{0}", "{5,6}"], answer: "{1,3}" },
      { q: "If n(A∪B)=50 and n(A∩B)=10, and n(A)=30, find n(B).", options: ["30", "40", "20", "50"], answer: "30" },
      { q: "The total number of elements in a universal set is called?", options: ["Cardinal number", "Subset count", "Infinite value", "Power set"], answer: "Cardinal number" }
    ]
  },
  {
    topic: "Set Theory and Venn Diagrams — Quiz 3",
    questions: [
      { q: "If A = {2,3,4,5}, find n(A).", options: ["3", "4", "5", "2"], answer: "4" },
      { q: "If A ⊂ B and B ⊂ A, then A and B are?", options: ["Equal", "Disjoint", "Complementary", "Universal"], answer: "Equal" },
      { q: "If A = {x: x is a vowel}, find A.", options: ["{a,b,c,d}", "{a,e,i,o,u}", "{a,e,i}", "{o,u}"], answer: "{a,e,i,o,u}" },
      { q: "Find n(P(A)) if n(A)=6.", options: ["12", "36", "64", "32"], answer: "64" },
      { q: "If A = {x | x is even ≤ 10}, find A.", options: ["{2,4,6,8,10}", "{1,2,3,4,5}", "{10}", "{4,5,6}"], answer: "{2,4,6,8,10}" },
      { q: "In a class, 60 like tea, 50 like coffee, 20 like both. How many like either tea or coffee?", options: ["110", "70", "90", "60"], answer: "90" },
      { q: "If n(A∪B)=n(A)+n(B)-n(A∩B), what is n(A∩B) = ?", options: ["n(A)+n(B)-n(A∪B)", "n(A)+n(B)", "n(A∪B)-n(A)", "n(B)-n(A)"], answer: "n(A)+n(B)-n(A∪B)" },
      { q: "A and B are disjoint sets, what is n(A∩B)?", options: ["0", "1", "n(A)", "n(B)"], answer: "0" },
      { q: "If n(A)=8, n(B)=5, n(A∩B)=2, find n(A∪B).", options: ["10", "11", "13", "15"], answer: "11" },
      { q: "If n(U)=100, n(A)=70, n(B)=60, n(A∩B)=40, find n(A∪B)'.", options: ["10", "20", "30", "40"], answer: "10" },
      { q: "What is the complement of A ∪ B?", options: ["A' ∩ B'", "A ∩ B", "A' ∪ B'", "U"], answer: "A' ∩ B'" },
      { q: "The intersection of A' and B' equals?", options: ["(A ∪ B)'", "(A ∩ B)'", "U", "A ∪ B"], answer: "(A ∪ B)'" },
      { q: "If A = {1,2}, B = {2,3}, C = {3,4}, find A∪B∪C.", options: ["{1,2,3,4}", "{1,2,3}", "{2,3,4}", "{1,4}"], answer: "{1,2,3,4}" },
      { q: "If A = {x | x is prime ≤ 10}, find A.", options: ["{2,3,5,7}", "{1,3,5,7}", "{2,4,6,8}", "{3,5,7,9}"], answer: "{2,3,5,7}" },
      { q: "A ∪ ∅ = ?", options: ["A", "∅", "U", "A’"], answer: "A" },
      { q: "A ∩ ∅ = ?", options: ["A", "∅", "U", "A’"], answer: "∅" },
      { q: "If A ⊂ U, then A’ is?", options: ["Subset of U", "Complement of A in U", "Equal to A", "Empty"], answer: "Complement of A in U" },
      { q: "If n(U)=200, n(A)=120, n(A')=?", options: ["80", "100", "120", "200"], answer: "80" },
      { q: "If n(A)=60, n(B)=40, n(A∩B)=20, how many are in A only?", options: ["40", "20", "60", "80"], answer: "40" },
      { q: "In a Venn diagram, overlapping regions represent?", options: ["Union", "Intersection", "Complement", "Empty"], answer: "Intersection" }
    ]
  },
  {
    topic: "Number Bases and Fractions — Quiz 1",
    questions: [
      { q: "What is the base of the number 1011₂?", options: ["2", "4", "8", "10"], answer: "2" },
      { q: "Convert 1011₂ to base 10.", options: ["10", "11", "13", "15"], answer: "11" },
      { q: "Convert 25₁₀ to base 2.", options: ["11000₂", "11001₂", "11010₂", "11011₂"], answer: "11001₂" },
      { q: "Convert 72₁₀ to base 8.", options: ["110₈", "107₈", "110₈", "120₈"], answer: "110₈" },
      { q: "Convert 2A₁₆ to base 10.", options: ["32", "40", "42", "50"], answer: "42" },
      { q: "Which of these numbers is not in base 5?", options: ["324", "243", "541", "404"], answer: "541" },
      { q: "Convert 45₈ to base 10.", options: ["37", "38", "39", "40"], answer: "37" },
      { q: "Convert 1111₂ to base 10.", options: ["14", "15", "16", "13"], answer: "15" },
      { q: "Convert 100₁₀ to base 2.", options: ["1100100₂", "1010100₂", "111100₂", "100100₂"], answer: "1100100₂" },
      { q: "Convert 255₁₀ to base 16.", options: ["FF₁₆", "EE₁₆", "AA₁₆", "CC₁₆"], answer: "FF₁₆" },
      { q: "What is 101₂ + 10₂ in base 2?", options: ["111₂", "1001₂", "110₂", "1011₂"], answer: "111₂" },
      { q: "Convert 1001₂ × 10₂ to base 2.", options: ["10010₂", "10100₂", "11000₂", "100100₂"], answer: "10010₂" },
      { q: "What is the value of the digit 3 in 345₆?", options: ["3", "18", "108", "72"], answer: "108" },
      { q: "Convert 11101₂ to base 10.", options: ["28", "29", "30", "31"], answer: "29" },
      { q: "Convert 73₁₀ to base 16.", options: ["48₁₆", "49₁₆", "4A₁₆", "47₁₆"], answer: "49₁₆" },
      { q: "Convert 11011₂ to base 8.", options: ["27₈", "33₈", "32₈", "35₈"], answer: "33₈" },
      { q: "Convert 40₁₀ to base 5.", options: ["120₅", "130₅", "140₅", "200₅"], answer: "130₅" },
      { q: "Convert 212₆ to base 10.", options: ["74", "76", "78", "80"], answer: "80" },
      { q: "Convert 25₁₀ to base 8.", options: ["30₈", "31₈", "32₈", "33₈"], answer: "31₈" },
      { q: "What is 11₂ × 11₂ in base 2?", options: ["101ₐ", "110₂", "1001₂", "111₂"], answer: "1001₂" }
    ]
  },
  {
    topic: "Number Bases and Fractions — Quiz 2",
    questions: [
      { q: "Convert 1010₂ to base 10.", options: ["9", "10", "11", "12"], answer: "10" },
      { q: "Convert 64₁₀ to base 8.", options: ["80₈", "77₈", "100₈", "75₈"], answer: "100₈" },
      { q: "Convert 20₁₀ to base 3.", options: ["200₃", "201₃", "202₃", "210₃"], answer: "202₃" },
      { q: "Convert 3A₁₆ to base 10.", options: ["56", "58", "60", "62"], answer: "58" },
      { q: "Convert 255₁₀ to base 8.", options: ["377₈", "355₈", "375₈", "400₈"], answer: "377₈" },
      { q: "Convert 10101₂ to base 10.", options: ["20", "21", "22", "23"], answer: "21" },
      { q: "Convert 10011₂ to base 8.", options: ["23₈", "24₈", "22₈", "25₈"], answer: "23₈" },
      { q: "Convert 2F₁₆ to base 10.", options: ["45", "46", "47", "48"], answer: "47" },
      { q: "Convert 80₁₀ to base 5.", options: ["300₅", "310₅", "320₅", "400₅"], answer: "310₅" },
      { q: "What is 111₂ + 111₂ in base 2?", options: ["1110₂", "1111₂", "1100₂", "1010₂"], answer: "1110₂" },
      { q: "Convert 111₄ to base 10.", options: ["19", "20", "21", "22"], answer: "21" },
      { q: "Convert 40₁₀ to base 3.", options: ["1111₃", "1121₃", "1201₃", "1211₃"], answer: "1111₃" },
      { q: "Convert 90₁₀ to base 8.", options: ["112₈", "131₈", "132₈", "134₈"], answer: "132₈" },
      { q: "Convert 71₁₀ to base 2.", options: ["1000111₂", "1100111₂", "1110111₂", "1010111₂"], answer: "1000111₂" },
      { q: "Convert 15₁₀ to base 4.", options: ["33₄", "32₄", "34₄", "31₄"], answer: "33₄" },
      { q: "Convert 7A₁₆ to base 10.", options: ["120", "121", "122", "123"], answer: "122" },
      { q: "Convert 11₂ × 101₂ to base 2.", options: ["111ₐ", "1001₂", "1011₂", "1101₂"], answer: "1111₂" },
      { q: "Convert 44₈ to base 10.", options: ["36", "37", "38", "39"], answer: "36" },
      { q: "Convert 11010₂ to base 8.", options: ["32₈", "33₈", "34₈", "35₈"], answer: "32₈" },
      { q: "Convert 27₁₀ to base 3.", options: ["1000₃", "1001₃", "1010₃", "1100₃"], answer: "1000₃" }
    ]
  },
  {
    topic: "Fractions (Advanced Level)",
    questions: [
      {
        q: "Simplify: (3/4 ÷ 2/3) × (5/6).",
        options: ["5/8", "15/24", "15/16", "30/24"],
        answer: "15/16"
      },
      {
        q: "Find the value of x if (x/3) + (2/5) = (19/15).",
        options: ["3", "4", "5", "6"],
        answer: "3"
      },
      {
        q: "Simplify: 1 ÷ (2 + 1/3).",
        options: ["1/2", "3/7", "3/8", "3/5"],
        answer: "3/7"
      },
      {
        q: "Simplify: (5/8 of 16/25) ÷ (2/5).",
        options: ["1", "4/5", "8/5", "2"],
        answer: "1"
      },
      {
        q: "Evaluate: 1/2 + 3/4 × 2/3 ÷ 1/6.",
        options: ["6", "5", "4", "9"],
        answer: "6"
      },
      {
        q: "Simplify: [(2/3)⁻¹ × (9/8)] ÷ (3/4).",
        options: ["2", "3/2", "4/3", "1"],
        answer: "2"
      },
      {
        q: "Find the reciprocal of (1 + 1/2 + 1/3).",
        options: ["6/11", "1/2", "3/11", "11/6"],
        answer: "6/11"
      },
      {
        q: "Simplify: (7/9 ÷ 14/27) × (3/2).",
        options: ["9/4", "9/8", "27/28", "27/14"],
        answer: "9/4"
      },
      {
        q: "If (2/x) + (3/4) = (11/12), find x.",
        options: ["3", "4", "6", "8"],
        answer: "6"
      },
      {
        q: "Simplify: (5/6 of 9/10) ÷ (3/4).",
        options: ["1", "1.1", "1.2", "1.25"],
        answer: "1.25"
      },
      {
        q: "Simplify: (4/7 ÷ 8/21) × (3/4).",
        options: ["3/2", "9/8", "9/4", "7/8"],
        answer: "9/8"
      },
      {
        q: "Find the missing numerator: (x/12) = (5/8).",
        options: ["7.5", "6", "7", "9"],
        answer: "7.5"
      },
      {
        q: "Simplify: (1/3 + 1/4) ÷ (1/2 + 1/6).",
        options: ["7/8", "3/4", "1", "2/3"],
        answer: "1"
      },
      {
        q: "Simplify: [(2/5) ÷ (3/10)] × (4/9).",
        options: ["8/27", "8/15", "16/27", "4/9"],
        answer: "8/27"
      },
      {
        q: "If (x/2) - (1/4) = (5/8), find x.",
        options: ["1", "1.5", "1.75", "2"],
        answer: "1.75"
      },
      {
        q: "Simplify: (1 + 1/2) ÷ (1 + 1/3).",
        options: ["3/4", "4/3", "9/8", "2/3"],
        answer: "9/8"
      },
      {
        q: "Simplify: 3 ÷ (1 + 1/2 + 1/3).",
        options: ["18/11", "11/18", "3/11", "11/6"],
        answer: "18/11"
      },
      {
        q: "Simplify: [(2/3) of (3/5)] ÷ (4/15).",
        options: ["1", "3/2", "5/4", "2"],
        answer: "1"
      },
      {
        q: "Simplify: (7/8 + 5/6) ÷ (3/4).",
        options: ["1.75", "1.5", "2.5", "2.6"],
        answer: "2.5"
      },
      {
        q: "If a = 2/3 and b = 3/4, find (a² + b²)/(a×b).",
        options: ["25/18", "25/12", "25/9", "7/3"],
        answer: "25/18"
      }
    ]
  },
  {
    topic: "Algebraic Expressions",
    questions: [
      {
        q: "Simplify: (2x + 3) + (4x – 5).",
        options: ["6x – 2", "2x – 8", "6x + 8", "2x + 8"],
        answer: "6x – 2"
      },
      {
        q: "Simplify: (3a – 2b) – (4a + 5b).",
        options: ["–a – 7b", "–a + 7b", "7a – b", "a – 7b"],
        answer: "–a – 7b"
      },
      {
        q: "Expand: (x + 2)(x + 5).",
        options: ["x² + 7x + 10", "x² + 10x + 7", "x² + 3x + 7", "x² + 6x + 9"],
        answer: "x² + 7x + 10"
      },
      {
        q: "Expand and simplify: (3x – 2)(2x + 5).",
        options: ["6x² + 11x – 10", "6x² – 11x + 10", "6x² + x – 10", "5x² + 10x – 11"],
        answer: "6x² + 11x – 10"
      },
      {
        q: "Factorize completely: 6x² + 13x + 6.",
        options: ["(3x + 2)(2x + 3)", "(2x + 1)(3x + 6)", "(6x + 1)(x + 6)", "(3x + 3)(2x + 2)"],
        answer: "(3x + 2)(2x + 3)"
      },
      {
        q: "Simplify: 5x(2x – 3) – 3x(4x – 5).",
        options: ["–2x² + 15x", "10x² – 15x – 12x² + 15x", "–2x²", "–2x² + 15x"],
        answer: "–2x² + 15x"
      },
      {
        q: "If x = 3 and y = 2, find the value of 2x²y.",
        options: ["18", "20", "24", "36"],
        answer: "36"
      },
      {
        q: "Simplify: 3(2a – 4b) – 2(3a – 5b).",
        options: ["–2b", "2b", "b", "–b"],
        answer: "2b"
      },
      {
        q: "Simplify: (2x²y – 3xy²) + (5x²y + xy²).",
        options: ["7x²y – 2xy²", "3x²y – 2xy²", "7x²y + 2xy²", "2x²y + 4xy²"],
        answer: "7x²y – 2xy²"
      },
      {
        q: "Simplify: (x – 4)(x – 2).",
        options: ["x² – 6x + 8", "x² – 2x + 6", "x² + 6x – 8", "x² – 4x + 8"],
        answer: "x² – 6x + 8"
      },
      {
        q: "Factorize: x² – 9.",
        options: ["(x – 3)(x + 3)", "(x – 9)(x + 1)", "(x – 3)²", "(x² – 3²)"],
        answer: "(x – 3)(x + 3)"
      },
      {
        q: "Simplify: (a² – b²)/(a – b).",
        options: ["a + b", "a – b", "a² + b²", "2ab"],
        answer: "a + b"
      },
      {
        q: "Simplify: 4x²y ÷ 2xy.",
        options: ["2x", "x", "2y", "4y"],
        answer: "2x"
      },
      {
        q: "Simplify: (x² – 4x + 3) – (2x² – 3x + 5).",
        options: ["–x² – x – 2", "x² – 7x + 8", "–x² – x + 2", "x² + x – 2"],
        answer: "–x² – x – 2"
      },
      {
        q: "Expand: (2x + 3y)(x – 4y).",
        options: ["2x² – 5xy – 12y²", "2x² – 5xy + 12y²", "2x² + 5xy – 12y²", "x² – 8xy + 3y²"],
        answer: "2x² – 5xy – 12y²"
      },
      {
        q: "Simplify: (3x²y³) × (4x³y²).",
        options: ["12x⁵y⁵", "7x⁵y⁵", "12x⁶y⁶", "7x⁶y⁵"],
        answer: "12x⁵y⁵"
      },
      {
        q: "If a = 2 and b = –3, find 2a²b – ab².",
        options: ["–6", "–24", "24", "6"],
        answer: "–6"
      },
      {
        q: "Simplify: (x + y)² – (x – y)².",
        options: ["4xy", "2xy", "x² – y²", "x² + y²"],
        answer: "4xy"
      },
      {
        q: "Factorize: 3x² – 27.",
        options: ["3(x – 3)(x + 3)", "(3x – 9)(x + 1)", "3(x² – 9)", "(x – 9)(x + 9)"],
        answer: "3(x – 3)(x + 3)"
      },
      {
        q: "Simplify: (4x – 5y)².",
        options: ["16x² – 40xy + 25y²", "16x² + 25y² – 40xy", "16x² – 25y² – 40xy", "16x² + 25y² + 40xy"],
        answer: "16x² – 40xy + 25y²"
      }
    ]
  },
  {
    topic: "Polynomial Expressions and Factorization",
    questions: [
      {
        q: "Simplify: (3x³ + 2x² – x + 5) + (2x³ – 4x² + 6x – 3).",
        options: ["5x³ – 2x² + 5x + 2", "5x³ – 6x² + 7x + 8", "5x³ – 2x² + 7x + 2", "x³ – 2x² + 5x + 8"],
        answer: "5x³ – 2x² + 5x + 2"
      },
      {
        q: "Simplify: (x³ – 2x² + x – 4) – (2x³ + x² – 3x + 2).",
        options: ["–x³ – 3x² + 4x – 6", "x³ + 3x² – 4x + 6", "–x³ – 3x² + 2x – 6", "–x³ – 3x² + 4x + 6"],
        answer: "–x³ – 3x² + 4x – 6"
      },
      {
        q: "Find the degree of the polynomial 5x⁴y³ + 3x²y⁵ – 7.",
        options: ["4", "5", "7", "8"],
        answer: "7"
      },
      {
        q: "Simplify: (x² – 3x + 2)(x + 4).",
        options: ["x³ + x² – 10x + 8", "x³ + x² – 10x – 8", "x³ + x² + 10x – 8", "x³ – 3x² + 2x + 8"],
        answer: "x³ + x² – 10x + 8"
      },
      {
        q: "Factorize completely: x² – 9x + 18.",
        options: ["(x – 3)(x – 6)", "(x – 2)(x – 9)", "(x – 9)(x – 18)", "(x – 6)(x + 3)"],
        answer: "(x – 3)(x – 6)"
      },
      {
        q: "Factorize: 3x²y – 9xy².",
        options: ["3xy(x – 3y)", "3xy(x + 3y)", "xy(3x – 9y)", "3y(x² – 3y²)"],
        answer: "3xy(x – 3y)"
      },
      {
        q: "Simplify: (2x² – 3x + 1) – (x² – 5x – 4).",
        options: ["x² + 2x + 5", "x² + 2x + 3", "x² + 2x + 7", "x² + 2x + 6"],
        answer: "x² + 2x + 5"
      },
      {
        q: "If f(x) = x³ – 3x² + 2x + 1, find f(2).",
        options: ["3", "4", "5", "7"],
        answer: "3"
      },
      {
        q: "If (x – 2) is a factor of x³ – kx² + 2x – 4, find k.",
        options: ["4", "3", "2", "5"],
        answer: "4"
      },
      {
        q: "Simplify: (x + 2)(x² + 3x + 4).",
        options: ["x³ + 5x² + 10x + 8", "x³ + 5x² + 10x + 4", "x³ + 5x² + 8x + 8", "x³ + 4x² + 7x + 8"],
        answer: "x³ + 5x² + 10x + 8"
      },
      {
        q: "Factorize completely: 2x³ – 8x² + 6x.",
        options: ["2x(x² – 4x + 3)", "x(2x² – 8x + 6)", "2x(x² – 2x + 3)", "2x(x² – 4x + 2)"],
        answer: "2x(x² – 4x + 3)"
      },
      {
        q: "Find the remainder when x³ + 2x² – 5x + 4 is divided by (x – 2).",
        options: ["–4", "0", "2", "8"],
        answer: "8"
      },
      {
        q: "Simplify: (3x² + 2x – 1) + (x² – 5x + 4).",
        options: ["4x² – 3x + 3", "4x² + 3x + 3", "4x² – 3x – 3", "4x² + 3x – 3"],
        answer: "4x² – 3x + 3"
      },
      {
        q: "Factorize: x³ – 4x² – 7x + 10.",
        options: ["(x – 5)(x² + x – 2)", "(x – 2)(x² – 2x – 5)", "(x – 5)(x² + x – 2)", "(x – 2)(x² – 2x – 5)"],
        answer: "(x – 5)(x² + x – 2)"
      },
      {
        q: "If x = –1, evaluate f(x) = 2x³ + 3x² – x + 5.",
        options: ["9", "7", "5", "11"],
        answer: "11"
      },
      {
        q: "Factorize: x³ – 8.",
        options: ["(x – 2)(x² + 2x + 4)", "(x + 2)(x² – 2x + 4)", "(x – 2)(x² – 2x + 4)", "(x + 2)(x² + 2x + 4)"],
        answer: "(x – 2)(x² + 2x + 4)"
      },
      {
        q: "Simplify: (x² – 2x + 3) – (2x² – x + 1).",
        options: ["–x² – x + 2", "–x² – x + 4", "x² – 3x + 4", "–x² – x – 2"],
        answer: "–x² – x + 2"
      },
      {
        q: "Factorize: 4x³y – 8xy³.",
        options: ["4xy(x² – 2y²)", "4xy(x² + 2y²)", "2xy(2x² – 4y²)", "8xy(x – y)(x + y)"],
        answer: "4xy(x² – 2y²)"
      },
      {
        q: "If a polynomial p(x) is divided by (x – 3) and the remainder is 0, what does this imply?",
        options: ["3 is a root of p(x)", "3 is not a root of p(x)", "Remainder is undefined", "p(3) ≠ 0"],
        answer: "3 is a root of p(x)"
      },
      {
        q: "Factorize completely: x³ + 3x² – 4x – 12.",
        options: ["(x + 3)(x² – 4)", "(x + 2)(x² + x – 6)", "(x + 3)(x + 2)(x – 2)", "(x – 3)(x + 2)(x + 2)"],
        answer: "(x + 3)(x² – 4)"
      }
    ]
  },
  {
    topic: "Quadratic Equations",
    questions: [
      {
        q: "Solve by factorization: x² – 5x + 6 = 0.",
        options: ["x = 2, 3", "x = –2, –3", "x = 1, 6", "x = –1, –6"],
        answer: "x = 2, 3"
      },
      {
        q: "Solve: x² + 7x + 12 = 0.",
        options: ["x = –3, –4", "x = 3, 4", "x = –2, –6", "x = 2, 6"],
        answer: "x = –3, –4"
      },
      {
        q: "Solve using the quadratic formula: x² – 4x – 5 = 0.",
        options: ["x = 5, –1", "x = 1, –5", "x = –5, –1", "x = 5, 1"],
        answer: "x = 5, –1"
      },
      {
        q: "Solve by completing the square: x² + 6x + 5 = 0.",
        options: ["x = –1, –5", "x = 1, 5", "x = –2, –4", "x = 2, 4"],
        answer: "x = –1, –5"
      },
      {
        q: "The roots of 2x² – 7x + 3 = 0 are:",
        options: ["x = 3, 1/2", "x = 1, 3/2", "x = –3, –1/2", "x = 1/2, 3"],
        answer: "x = 3, 1/2"
      },
      {
        q: "Find the discriminant of x² + 4x + 4 = 0.",
        options: ["0", "4", "8", "16"],
        answer: "0"
      },
      {
        q: "If the roots of x² – kx + 12 = 0 are equal, find k.",
        options: ["8", "6", "4", "12"],
        answer: "8"
      },
      {
        q: "Solve: x² – 9 = 0.",
        options: ["x = 3, –3", "x = 9, –9", "x = 0, 9", "x = 0, –9"],
        answer: "x = 3, –3"
      },
      {
        q: "If the sum of the roots of x² – 5x + 6 = 0 is S and the product P, find S + P.",
        options: ["11", "12", "10", "9"],
        answer: "11"
      },
      {
        q: "Solve: 3x² – 12x + 9 = 0.",
        options: ["x = 1, 3", "x = 1, 3", "x = 1, 1", "x = 3, 3"],
        answer: "x = 1, 3"
      },
      {
        q: "Find the roots of x² – x – 6 = 0.",
        options: ["x = 3, –2", "x = 2, –3", "x = 6, –1", "x = 1, –6"],
        answer: "x = 3, –2"
      },
      {
        q: "The roots of 2x² + x – 6 = 0 are:",
        options: ["x = 2, –3/2", "x = 3/2, –2", "x = –2, 3/2", "x = –3/2, 2"],
        answer: "x = 2, –3/2"
      },
      {
        q: "Solve by completing the square: x² – 6x + 5 = 0.",
        options: ["x = 1, 5", "x = –1, 5", "x = 3 ± 2", "x = 2 ± 3"],
        answer: "x = 3 ± 2"
      },
      {
        q: "Solve using the quadratic formula: 2x² – 5x – 3 = 0.",
        options: ["x = 3, –1/2", "x = –3, 1/2", "x = 1, –3/2", "x = 2, –3/2"],
        answer: "x = 3, –1/2"
      },
      {
        q: "Find the vertex of y = x² – 4x + 1.",
        options: ["(2, –3)", "(–2, –3)", "(2, 3)", "(–2, 3)"],
        answer: "(2, –3)"
      },
      {
        q: "The sum of the roots of 4x² – 12x + 9 = 0 is:",
        options: ["3/2", "12/4", "3", "–3"],
        answer: "3/2"
      },
      {
        q: "Solve: x² + 5x + 6 = 0 by factorization.",
        options: ["x = –2, –3", "x = 2, 3", "x = –1, –6", "x = 1, 6"],
        answer: "x = –2, –3"
      },
      {
        q: "If one root of x² – 7x + 12 = 0 is 3, find the other root.",
        options: ["4", "5", "6", "3"],
        answer: "4"
      },
      {
        q: "Solve 5x² – 20x + 15 = 0.",
        options: ["x = 1, 3", "x = 1, 2", "x = 2, 3", "x = 1, 1.5"],
        answer: "x = 1, 3"
      },
      {
        q: "Find the roots of 3x² + 2x – 8 = 0.",
        options: ["x = 2/3, –4", "x = –2/3, 4", "x = 4, –2/3", "x = 8/3, –1"],
        answer: "x = 2/3, –4"
      }
    ]
  },
  {
    topic: "Simultaneous Equations",
    questions: [
      {
        q: "Solve: 2x + y = 7, x – y = 1.",
        options: ["x = 2, y = 3", "x = 3, y = 1", "x = 1, y = 5", "x = 2, y = 5"],
        answer: "x = 2, y = 3"
      },
      {
        q: "Solve: x + y = 10, x – y = 4.",
        options: ["x = 7, y = 3", "x = 6, y = 4", "x = 8, y = 2", "x = 5, y = 5"],
        answer: "x = 7, y = 3"
      },
      {
        q: "Solve using substitution: 3x + 2y = 12, x – y = 1.",
        options: ["x = 2, y = 1.5", "x = 3, y = 1.5", "x = 4, y = 2", "x = 2, y = 2"],
        answer: "x = 2, y = 1.5"
      },
      {
        q: "Solve using elimination: 2x + 3y = 13, 3x – y = 5.",
        options: ["x = 3, y = 2", "x = 2, y = 3", "x = 1, y = 4", "x = 4, y = 1"],
        answer: "x = 3, y = 2"
      },
      {
        q: "Find x and y: x + 2y = 8, 3x – y = 5.",
        options: ["x = 3, y = 2.5", "x = 2, y = 3", "x = 1, y = 4", "x = 4, y = 2"],
        answer: "x = 2, y = 3"
      },
      {
        q: "Solve: 4x – y = 9, 2x + 3y = 1.",
        options: ["x = 3, y = 3", "x = 2, y = –1", "x = 1, y = –1", "x = 2, y = 1"],
        answer: "x = 2, y = –1"
      },
      {
        q: "Solve: x – y = 4, 2x + y = 10.",
        options: ["x = 3, y = –1", "x = 2, y = –2", "x = 4, y = 0", "x = 2, y = 6"],
        answer: "x = 2, y = –2"
      },
      {
        q: "Solve: 3x + y = 10, 2x – y = 3.",
        options: ["x = 3, y = 1", "x = 2, y = 4", "x = 1, y = 7", "x = 4, y = –2"],
        answer: "x = 2, y = 4"
      },
      {
        q: "Solve: 5x – 2y = 4, 3x + y = 7.",
        options: ["x = 2, y = –1", "x = 1, y = 4", "x = 2, y = 3", "x = 3, y = 1"],
        answer: "x = 2, y = –1"
      },
      {
        q: "Solve: x + y = 6, 2x + 3y = 13.",
        options: ["x = 1, y = 5", "x = 2, y = 4", "x = 3, y = 3", "x = 4, y = 2"],
        answer: "x = 2, y = 4"
      },
      {
        q: "Solve: 4x + y = 9, 2x – y = 3.",
        options: ["x = 2, y = 1", "x = 1, y = 5", "x = 3, y = –3", "x = 2, y = 5"],
        answer: "x = 2, y = 1"
      },
      {
        q: "Solve: 2x + 5y = 20, 3x – y = 4.",
        options: ["x = 4, y = 2.4", "x = 5, y = 2", "x = 3, y = 3.2", "x = 2, y = 3.2"],
        answer: "x = 4, y = 2.4"
      },
      {
        q: "Solve using substitution: x + 3y = 11, 2x – y = 3.",
        options: ["x = 4, y = 7/3", "x = 3, y = 4/3", "x = 2, y = 3", "x = 5, y = 2"],
        answer: "x = 4, y = 7/3"
      },
      {
        q: "Solve: 3x – 2y = 7, 4x + y = 10.",
        options: ["x = 2, y = –1", "x = 1, y = 6", "x = 3, y = 1", "x = 2, y = 2"],
        answer: "x = 2, y = 2"
      },
      {
        q: "Solve: x – 2y = –1, 3x + y = 11.",
        options: ["x = 3, y = 2", "x = 5, y = 3", "x = 4, y = 2.5", "x = 2, y = 1.5"],
        answer: "x = 3, y = 2"
      },
      {
        q: "Solve: 5x + 2y = 16, 3x – y = 5.",
        options: ["x = 3, y = 0.5", "x = 2, y = 3", "x = 4, y = 2", "x = 1, y = 5.5"],
        answer: "x = 3, y = 0.5"
      },
      {
        q: "Solve: 2x + y = 7, 3x – 2y = 4.",
        options: ["x = 2, y = 3", "x = 1, y = 5", "x = 3, y = 1", "x = 2, y = 5"],
        answer: "x = 2, y = 3"
      },
      {
        q: "Solve using elimination: x + 4y = 14, 3x – 2y = 4.",
        options: ["x = 4, y = 2.5", "x = 2, y = 3", "x = 5, y = 2", "x = 3, y = 1.5"],
        answer: "x = 4, y = 2.5"
      },
      {
        q: "Solve: x – y = 3, x + y = 9.",
        options: ["x = 6, y = 3", "x = 5, y = 4", "x = 7, y = 2", "x = 4, y = 5"],
        answer: "x = 6, y = 3"
      },
      {
        q: "Solve: 2x + 3y = 13, 4x – y = 7.",
        options: ["x = 3, y = 2", "x = 2, y = 3", "x = 1, y = 4", "x = 4, y = 1"],
        answer: "x = 3, y = 2"
      }
    ]
  },
  {
    topic: "Inequalities",
    questions: [
      {
        q: "Solve for x: 3x + 5 > 11",
        options: ["x > 1", "x > 2", "x > 3", "x > 4"],
        answer: "x > 2"
      },
      {
        q: "Solve: 2x − 7 ≤ 5",
        options: ["x ≤ 6", "x ≤ 5", "x ≤ 4", "x ≤ 3"],
        answer: "x ≤ 6"
      },
      {
        q: "Solve: 5 − x < 2",
        options: ["x > 3", "x < 3", "x > 2", "x < 2"],
        answer: "x > 3"
      },
      {
        q: "Solve for x: 4x + 1 ≥ 9",
        options: ["x ≥ 2", "x ≥ 3", "x ≥ 4", "x ≥ 1"],
        answer: "x ≥ 2"
      },
      {
        q: "Solve: 7x − 2 ≤ 12",
        options: ["x ≤ 2", "x ≤ 3", "x ≤ 4", "x ≤ 5"],
        answer: "x ≤ 2"
      },
      {
        q: "Solve: −3x + 5 > 2",
        options: ["x < 1", "x > 1", "x < −1", "x > −1"],
        answer: "x < 1"
      },
      {
        q: "Solve: 2x − 3 ≥ x + 4",
        options: ["x ≥ 7", "x ≥ −7", "x ≥ 1", "x ≥ −1"],
        answer: "x ≥ 7"
      },
      {
        q: "Solve for x: 5x + 2 < 3x + 10",
        options: ["x < 4", "x < 5", "x < 6", "x < 3"],
        answer: "x < 4"
      },
      {
        q: "Solve: 3(2x − 1) ≥ 9",
        options: ["x ≥ 2", "x ≥ 1", "x ≥ 3", "x ≥ 4"],
        answer: "x ≥ 2"
      },
      {
        q: "Solve for x: 4 − x ≤ 7",
        options: ["x ≥ −3", "x ≤ −3", "x ≥ 3", "x ≤ 3"],
        answer: "x ≥ −3"
      },
      {
        q: "Solve: 2(x + 3) > 10",
        options: ["x > 2", "x > 3", "x > 4", "x > 1"],
        answer: "x > 2"
      },
      {
        q: "Solve: 5 − 2x ≥ 1",
        options: ["x ≤ 2", "x ≥ 2", "x ≤ 3", "x ≥ 3"],
        answer: "x ≤ 2"
      },
      {
        q: "Solve: −4x + 7 < 3",
        options: ["x > 1", "x < 1", "x > −1", "x < −1"],
        answer: "x > 1"
      },
      {
        q: "Solve for x: 3x − 5 ≤ 7",
        options: ["x ≤ 4", "x ≤ 3", "x ≤ 5", "x ≤ 6"],
        answer: "x ≤ 4"
      },
      {
        q: "Solve: 2x + 3 ≥ 7",
        options: ["x ≥ 2", "x ≥ 3", "x ≥ 4", "x ≥ 5"],
        answer: "x ≥ 2"
      },
      {
        q: "Solve: 7 − 3x < 1",
        options: ["x > 2", "x < 2", "x > 1", "x < 1"],
        answer: "x > 2"
      },
      {
        q: "Solve for x: 4x − 5 > 3x + 2",
        options: ["x > 7", "x > 6", "x > 5", "x > 4"],
        answer: "x > 7"
      },
      {
        q: "Solve: 2(3x − 1) ≤ 10",
        options: ["x ≤ 2", "x ≤ 1", "x ≤ 3", "x ≤ 4"],
        answer: "x ≤ 2"
      },
      {
        q: "Solve: −5x + 8 ≥ 3",
        options: ["x ≤ 1", "x ≥ 1", "x ≤ −1", "x ≥ −1"],
        answer: "x ≤ 1"
      },
      {
        q: "Solve: 3x + 7 < 2x + 10",
        options: ["x < 3", "x > 3", "x < 2", "x > 2"],
        answer: "x < 3"
      }
    ]
  },
  {
    topic: "Rational Expressions",
    questions: [
      {
        q: "Simplify: (x² − 9)/(x + 3)",
        options: ["x − 3", "x + 3", "x² − 3", "x² + 3"],
        answer: "x − 3"
      },
      {
        q: "Simplify: (x² + 5x + 6)/(x + 2)",
        options: ["x + 3", "x + 2", "x + 6", "x + 1"],
        answer: "x + 3"
      },
      {
        q: "Simplify: (4x² − 1)/(2x − 1)",
        options: ["2x + 1", "2x − 1", "4x + 1", "4x − 1"],
        answer: "2x + 1"
      },
      {
        q: "Simplify: (x² − 4)/(x − 2)",
        options: ["x + 2", "x − 2", "x² + 2", "x² − 2"],
        answer: "x + 2"
      },
      {
        q: "Simplify: (x² − 2x − 15)/(x − 5)",
        options: ["x + 3", "x − 3", "x + 5", "x − 5"],
        answer: "x + 3"
      },
      {
        q: "Simplify: (x² + 7x + 12)/(x + 3)",
        options: ["x + 4", "x + 3", "x + 5", "x + 6"],
        answer: "x + 4"
      },
      {
        q: "Simplify: (2x² + 7x + 3)/(2x + 1)",
        options: ["x + 3", "x + 1", "x + 2", "x + 4"],
        answer: "x + 3"
      },
      {
        q: "Simplify: (x² − x − 6)/(x − 3)",
        options: ["x + 2", "x − 2", "x + 3", "x − 3"],
        answer: "x + 2"
      },
      {
        q: "Simplify: (x² + 6x + 8)/(x + 2)",
        options: ["x + 4", "x + 3", "x + 2", "x + 1"],
        answer: "x + 4"
      },
      {
        q: "Simplify: (9x² − 16)/(3x − 4)",
        options: ["3x + 4", "3x − 4", "9x + 16", "9x − 16"],
        answer: "3x + 4"
      },
      {
        q: "Simplify: (x² − 16)/(x − 4)",
        options: ["x + 4", "x − 4", "x² + 4", "x² − 4"],
        answer: "x + 4"
      },
      {
        q: "Simplify: (x² + 5x + 6)/(x + 2)",
        options: ["x + 3", "x + 2", "x + 4", "x + 1"],
        answer: "x + 3"
      },
      {
        q: "Simplify: (x² + x − 6)/(x + 3)",
        options: ["x − 2", "x + 2", "x − 3", "x + 3"],
        answer: "x − 2"
      },
      {
        q: "Simplify: (4x² − 9)/(2x − 3)",
        options: ["2x + 3", "2x − 3", "4x + 3", "4x − 3"],
        answer: "2x + 3"
      },
      {
        q: "Simplify: (x² − 5x + 6)/(x − 2)",
        options: ["x − 3", "x + 3", "x − 2", "x + 2"],
        answer: "x − 3"
      },
      {
        q: "Simplify: (x² + 7x + 10)/(x + 5)",
        options: ["x + 2", "x + 5", "x + 3", "x + 4"],
        answer: "x + 2"
      },
      {
        q: "Simplify: (2x² + 5x + 2)/(2x + 1)",
        options: ["x + 2", "x + 1", "x + 3", "x + 4"],
        answer: "x + 2"
      },
      {
        q: "Simplify: (x² − 9x + 20)/(x − 4)",
        options: ["x − 5", "x − 4", "x − 6", "x − 3"],
        answer: "x − 5"
      },
      {
        q: "Simplify: (x² + 3x − 10)/(x + 5)",
        options: ["x − 2", "x + 2", "x − 5", "x + 5"],
        answer: "x − 2"
      },
      {
        q: "Simplify: (x² − 6x + 8)/(x − 4)",
        options: ["x − 2", "x − 4", "x − 1", "x − 3"],
        answer: "x − 2"
      }
    ]
  },
  
    ],
    
    English: [
      
//part of speech   
{ 
  topic: "Part of speech", 
  questions: [
{ 
  q: "Identify the part of speech of the underlined word: The committee issued a <u>comprehensive</u> report on the crisis.",
  options: ["Adjective", "Adverb", "Noun", "Verb"],
  answer: "Adjective"
  },
{ 
  q: "State the type of verb: The new policy <u>appears</u> ineffective.", 
  options: ["Action", "Linking", "Auxiliary", "Transitive"], 
  answer: "Linking" 
  
},
{ 
  q: "Identify the type of adjective: The <u>first</u> batch of candidates has arrived.", 
  options: ["Numeral", "Quantitative", "Descriptive", "Demonstrative"], 
  answer: "Numeral" 
  
},
{ 
  q: "Identify the type of adverb: The system failed <u>abruptly</u> during the trial.", 
  options: ["Manner", "Time", "Place", "Frequency"],
  answer: "Manner" 
  
},
{ 
  q: "What type of conjunction is used? Not only was he late, but he was also unprepared.", 
  options: ["Coordinating", "Subordinating", "Correlative", "None of the above"], 
  answer: "Correlative"
  },
{ 
  q: "Identify the preposition and explain its function: The files were stored <u>within</u> the restricted archive.", 
  options: ["Within (showing location)", "Within (showing time)", "Within (showing manner)", "Within (showing purpose)"], 
  answer: "Within (showing location)" 
  
},
{
  q: "Rewrite the sentence and replace the noun with a suitable pronoun: The female investigator interviewed the suspects.", 
  options: ["He interviewed them.", "She interviewed them.", "They interviewed them.", "It interviewed them."], 
  answer: "He interviewed them."
  },
{ 
  q: "Identify the part of speech of the underlined word: She walked <u>beneath</u> the collapsed structure with extreme caution.", 
  options: ["Preposition", "Adverb", "Conjunction", "Interjection"], 
  answer: "Preposition" 
  
},
{
  q: "Identify the type of noun: The <u>integrity</u> of the team is crucial to their success.", 
  options: ["Abstract", "Common", "Proper", "Collective"], 
  answer: "Abstract" 
  
},
{ 
  q: "Classify the verb: The manager <u>has</u> approved the proposal.", 
  options: ["Action", "Linking", "Auxiliary", "Transitive"], 
  answer: "Auxiliary" 
  
},
{ 
  q: "Identify the type of adjective: The <u>rigorous</u> analysis revealed several flaws.", 
  options: ["Descriptive", "Quantitative", "Demonstrative", "Possessive"],
  answer: "Descriptive" 
  
},
{ 
  q: "Identify the type of adverb: The team worked <u>efficiently</u> to meet the deadline.", 
  options: ["Manner", "Time", "Place", "Frequency"], 
  answer: "Manner" 
  
},
{ 
  q: "What type of conjunction is used? Although it was raining, the game continued.",
  options: ["Coordinating", "Subordinating", "Correlative", "None of the above"], 
  answer: "Subordinating" 
  
},
{ 
  q: "Identify the preposition: The hotel is located <u>near</u> the city centre.", 
  options: ["Near (showing location)", "Near (showing time)", "Near (showing manner)", "Near (showing purpose)"],
  answer: "Near (showing location)"
  
},
{ 
  q: "Identify the part of speech of the underlined word: The <u>volatile</u> reaction caused widespread damage.", 
  options: ["Adjective", "Adverb", "Noun", "Verb"], 
  answer: "Adjective"
  },
{ 
  q: "Classify the verb: The new employee <u>seems</u> confident.", 
  options: ["Action", "Linking", "Auxiliary", "Transitive"], 
  answer: "Linking" 
  
},
{ 
  q: "Identify the type of pronoun: <u>Who</u> is responsible for the project?", 
  options: ["Interrogative", "Demonstrative", "Relative", "Indefinite"], 
  answer: "Interrogative" 
  
},
{ 
  q: "Identify the type of interjection: <u>Wow</u>, what a beautiful view!", 
  options: ["Joy", "Sorrow", "Surprise", "None of the above"], 
  answer: "Surprise" 
  
},
{ 
  q: "Identify the type of pronoun: <u>Who</u> will oversee the project now that the co-ordinator has resigned?", 
  options: ["Interrogative", "Demonstrative", "Relative", "Indefinite"],
  answer: "Interrogative" 
  
},
{ 
  q: "Identify the verb in this sentence: What a beautiful view i had of the tower!",
  options: ["view", "had", "tower", "beautiful"], 
  answer: "had" 
  
}
] },

//tenses

{ topic: "Tenses", questions: [
{ q: "Identify the tense and aspect of the sentence: The research team _______ (work) on the project for the past three years.", options: ["has been working", "have been working", "had been working", "will have been working"], answer: "has been working" },
{ q: "Correct the tense error: By the time I arrived, they _______ (finish) the meeting.", options: ["finished", "had finished", "have finished", "will finish"], answer: "had finished" },
{ q: "Fill in the blank with the correct form of the verb: She _______ (study) at the university for five years by next year.", options: ["will have been studying", "will study", "will be studying", "studies"], answer: "will have been studying" },
{ q: "Identify the tense and aspect: The company _______ (announce) a major restructuring plan last month.", options: ["announced", "has announced", "had announced", "announces"], answer: "announced" },
{ q: "Change the sentence to future perfect: They will complete the project by the end of the week.", options: ["They will have completed the project by the end of the week.", "They will be completing the project by the end of the week.", "They will complete the project by the end of the week.", "They have completed the project by the end of the week."], answer: "They will have completed the project by the end of the week." },
{ q: "Identify the tense error and correct it: She go to the library every day.", options: ["goes", "went", "going", "gone"], answer: "goes" },
{ q: "Fill in the blank with the correct form of the verb: By next year, they _______ (work) together for ten years.", options: ["will have been working", "will work", "will be working", "have been working"], answer: "will have been working" },
{ q: "Identify the tense and aspect: The manager _______ (be) in the office since morning.", options: ["has been", "is", "was", "had been"], answer: "has been" },
{ q: "Correct the tense error: I _______ (finish) my homework before I went to bed.", options: ["finished", "had finished", "have finished", "will finish"], answer: "had finished" },
{ q: "Change the sentence to past perfect continuous: They were working on the project when the power went out.", options: ["They had been working on the project when the power went out.", "They have been working on the project when the power went out.", "They will have been working on the project when the power went out.", "They are working on the project when the power went out."], answer: "They had been working on the project when the power went out." },
{ q: "Identify the tense and aspect: By the time she arrives, we _______ (finish) the report.", options: ["will have finished", "will finish", "finish", "have finished"], answer: "will have finished" },
{ q: "Fill in the blank with the correct form of the verb: The company _______ (operate) in Nigeria for over 20 years.", options: ["has been operating", "operates", "is operating", "will operate"], answer: "has been operating" },
{ q: "Correct the tense error: She have been studying English for five years.", options: ["has been studying", "have studied", "is studying", "studies"], answer: "has been studying" },
{ q: "Identify the tense and aspect: They _______ (live) in Lagos for ten years before they moved to Abuja.", options: ["had lived", "lived", "have lived", "were living"], answer: "had lived" },
{ q: "Change the sentence to future continuous: She will be writing the report tomorrow.", options: ["She will be writing the report tomorrow.", "She is writing the report tomorrow.", "She writes the report tomorrow.", "She will write the report tomorrow."], answer: "She will be writing the report tomorrow." },
{ q: "Identify the tense error and correct it: He _______ (go) to the store yesterday.", options: ["went", "goes", "going", "gone"], answer: "went" },
{ q: "Fill in the blank with the correct form of the verb: By next month, I _______ (study) English for three years.", options: ["will have been studying", "will study", "will be studying", "study"], answer: "will have been studying" },
{ q: "Identify the tense and aspect: The students _______ (write) their exams when the fire alarm went off.", options: ["were writing", "wrote", "have written", "had written"], answer: "were writing" },
{ q: "Correct the tense error: She _______ (be) a teacher for ten years.", options: ["has been", "is", "was", "had been"], answer: "has been" },
{ q: "Change the sentence to present perfect: They started the project two weeks ago.", options: ["They have started the project two weeks ago.", "They started the project two weeks ago.", "They have been working on the project for two weeks.", "They are working on the project for two weeks."], answer: "They have been working on the project for two weeks." }
] },

//sentence structure

{ topic: "Sentence Structure", questions: [
{ q: "Identify the main clause and subordinate clause: She left the laboratory <u>because the chemicals became unstable</u>.", options: ["Main: She left the laboratory, Subordinate: because the chemicals became unstable", "Main: because the chemicals became unstable, Subordinate: She left the laboratory", "Main: She left, Subordinate: because the chemicals became unstable", "Main: the chemicals became unstable, Subordinate: She left the laboratory"], answer: "Main: She left the laboratory, Subordinate: because the chemicals became unstable" },
{ q: "Rewrite this fragment as a complete sentence: <u>While the meeting was in progress</u>.", options: ["While the meeting was in progress, the chairman arrived.", "The meeting was in progress.", "While the meeting was happening.", "The meeting started while the progress was ongoing."], answer: "While the meeting was in progress, the chairman arrived." },
{ q: "Identify the type of sentence: The students revised for hours, but they still felt unprepared.", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: "Compound" },
{ q: "Break this sentence into phrase types: The newly elected president addressed the nation in an emotional tone.", options: ["The newly elected president (Noun Phrase), addressed (Verb Phrase), the nation (Noun Phrase), in an emotional tone (Prepositional Phrase)", "The newly elected president (Noun Phrase), addressed the nation (Verb Phrase), in an emotional tone (Adverbial Phrase)", "The newly elected president (Noun Phrase), addressed (Verb Phrase), the nation (Noun Phrase), in an emotional tone (Adjective Phrase)", "The newly elected president (Noun Phrase), addressed the nation (Verb Phrase), in an emotional tone (Prepositional Phrase)"], answer: "The newly elected president (Noun Phrase), addressed (Verb Phrase), the nation (Noun Phrase), in an emotional tone (Prepositional Phrase)" },
{ q: "Correct the run-on: The generator failed the lights went out immediately.", options: ["The generator failed, the lights went out immediately.", "The generator failed; the lights went out immediately.", "The generator failed, and the lights went out immediately.", "The generator failed. The lights went out immediately."], answer: "The generator failed; the lights went out immediately." },
{ q: "Identify the noun clause: <i>What he observed during the experiment</u> shocked everyone.", options: ["What he observed during the experiment", "shocked everyone", "during the experiment", "he observed"], answer: "What he observed during the experiment" },
{ q: "Classify the sentence: Although the child was exhausted, he continued reading, and he eventually finished the novel.", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: "Compound-Complex" },
{ q: "Identify the adjective clause in the sentence: The officer <u>who investigated the case</u> submitted the final report.", options: ["who investigated the case", "The officer", "submitted the final report", "The officer who investigated the case"], answer: "who investigated the case" },
{ q: "Rewrite using a compound sentence: The rain stopped. We continued the match.", options: ["The rain stopped, and we continued the match.", "The rain stopped, so we continued the match.", "The rain stopped; we continued the match.", "The rain stopped, but we continued the match."], answer: "The rain stopped, and we continued the match." },
{ q: "Point out the misplaced modifier and correct it: She almost drove her children to school every day.", options: ["She drove her children to school almost every day.", "She almost drove her children to school.", "She drove almost her children to school every day.", "She drove her children almost to school every day."], answer: "She drove her children to school almost every day." },
{ q: "Identify the type of sentence: The sun rises in the east.", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: "Simple" },
{ q: "Identify the phrase type: <u>Under the bridge</u> is a good place to hide.", options: ["Noun Phrase", "Verb Phrase", "Prepositional Phrase", "Adverbial Phrase"], answer: "Prepositional Phrase" },
{ q: "Correct the comma splice: The project was difficult, we completed it.", options: ["The project was difficult; we completed it.", "The project was difficult, but we completed it.", "The project was difficult. We completed it.", "The project was difficult, and we completed it."], answer: "The project was difficult, but we completed it." },
{ q: "Identify the subordinate clause: I will go to the party <u>if I finish my work</u>.", options: ["if I finish my work", "I will go to the party", "I finish my work", "to the party"], answer: "if I finish my work" },
{ q: "Classify the sentence: The teacher asked the students to write an essay.", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: "Simple" },
{ q: "Identify the type of phrase: <u>Running quickly</u>, he caught the bus.", options: ["Noun Phrase", "Verb Phrase", "Adverbial Phrase", "Participial Phrase"], answer: "Participial Phrase" },
{ q: "Correct the sentence fragment: <u>Because I forgot my phone</u>.", options: ["Because I forgot my phone, I couldn't call you.", "I forgot my phone.", "Because I forgot.", "I forgot because of my phone."], answer: "Because I forgot my phone, I couldn't call you." },
{ q: "Identify the main clause: <u>Although she was tired</u>, she continued working.", options: ["Although she was tired", "she continued working", "she was tired", "she continued"], answer: "she continued working" },
{ q: "Rewrite the sentence using a complex sentence: The students were happy. They received their results.", options: ["The students were happy because they received their results.", "The students were happy, and they received their results.", "The students were happy; they received their results.", "The students were happy, but they received their results."], answer: "The students were happy because they received their results." },
{ q: "Identify the type of sentence: The company has offices in Lagos and Abuja.", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: "Simple" }
] },

//concord

{ topic: "Concord", 
questions: [
{ 
  q: "Choose the correct verb: Neither the engineers nor the contractor _______ available.", 
  options: ["was", "were", "is", "are"], 
  answer: "was" 
  
},
{ 
  q: "Identify the subject: There are several factors affecting the result.",
  options: ["There", "factors", "result", "several factors"], 
  answer: "several factors" 
  
},
{ 
  q: "Correct the error: The list of candidates <u>were</u> displayed.", 
  options: ["was", "were", "is", "are"], 
  answer: "was" 
  
},
{ 
  q: "Select the correct verb: Each of the students _______ submitted.", options: ["has", "have", "is", "are"], answer: "has" 
  
},
{ 
  q: "Rewrite correctly: The committee are divided in their opinion.", 
  options: ["The committee is divided in its opinion.", "The committee are divided in its opinion.", "The committee is divided in their opinion.", "The committee are divided in opinion."], 
  answer: "The committee is divided in its opinion." 
  
},
{ 
  q: "Which option best completes: The equipment _______ damaged.", 
  options: ["were", "was", "been", "have"],
  answer: "were" 
  
},
{ 
  q: "Choose the correct option: Twenty litres of fuel _______ enough.",
  options: ["is", "are", "was", "were"], 
  answer: "is" 
  
},
{ 
  q: "Complete: Either Ade or his friends _______ wrong.", 
  options: ["is", "are", "was", "were"], 
  answer: "are" 

},
{ 
  q: "State why this is wrong: The United States <u>are</u> powerful.", 
  options: ["The United States is a singular noun", "The United States is a plural noun", "The United States are powerful is correct", "The United States is always plural"],
  answer: "The United States is a singular noun"
  
},
{ 
  q: "Supply the correct verb: All of the water _______ polluted.", 
  options: ["is", "are", "was", "were"], 
  answer: "is" 
  
},
{ 
  q: "Identify the correct sentence:", 
  options: ["The team are playing well.", "The team is playing well.", "The team play well.", "The team playing well."],
  answer: "The team is playing well." 
  
},
{
  q: "Choose the correct verb: The news _______ encouraging.", 
  options: ["is", "are", "was", "were"], 
  answer: "is" 
  
},
{ 
  q: "Correct the error: The scissors <u>is</u> sharp.", 
  options: ["is", "are", "was", "were"], 
  answer: "are" 
  
},
{ q: "Select the correct verb: The manager, along with the employees, <u>(is/are)</u> attending the meeting.", options: ["is", "are", "was", "were"], answer: "is" },
{ q: "Identify the agreement error: The majority of the students <u>was</u> present.", options: ["was", "were", "is", "are"], answer: "was" },
{ q: "Choose the correct option: <u>(Has/Have)</u> either of the candidates been informed?", options: ["Has", "Have", "Is", "Are"], answer: "Has" },
{ q: "Correct this: The police <u>is</u> investigating the case.", options: ["is", "are", "was", "were"], answer: "are" },
{ q: "Identify the subject-verb agreement: The committee <u>(has/have)</u> made a decision.", options: ["has", "have", "is", "are"], answer: "has" },
{ q: "Select the correct verb: Mathematics <u>(is/are)</u> a difficult subject.", options: ["is", "are", "was", "were"], answer: "is" },
{ q: "Rewrite correctly: The staff are attending the workshop.", options: ["The staff is attending the workshop.", "The staff are attending the workshop.", "The staff attends the workshop.", "The staff attended the workshop."], answer: "The staff are attending the workshop." }
] },

//active and passive

{ topic: "Active and Passive Voice", questions: [
{ q: "Change to passive: The drivers obey the rules.", options: ["The rules are obeyed by the drivers.", "The rules were obeyed by the drivers.", "The rules are being obeyed by the drivers.", "The rules will be obeyed by the drivers."], answer: "The rules are obeyed by the drivers." },
{ q: "Rewrite in active: The food was eaten by the children.", options: ["The children ate the food.", "The children eat the food.", "The children are eating the food.", "The children will eat the food."], answer: "The children ate the food." },
{ q: "Change to passive: They are building a house.", options: ["A house is being built by them.", "A house was built by them.", "A house is built by them.", "A house will be built by them."], answer: "A house is being built by them." },
{ q: "Identify the voice: The case will be handled by the judge.", options: ["Active", "Passive", "Both", "None"], answer: "Passive" },
{ q: "Change to active: The prize was awarded to him.", options: ["They awarded him the prize.", "They award him the prize.", "They are awarding him the prize.", "They will award him the prize."], answer: "They awarded him the prize." },
{ q: "Rewrite in passive: Someone stole my bag.", options: ["My bag was stolen.", "My bag is stolen.", "My bag is being stolen.", "My bag will be stolen."], answer: "My bag was stolen." },
{ q: "Correct this: The work is being do by them.", options: ["The work is being done by them.", "The work is being did by them.", "The work is being doing by them.", "The work is being does by them."], answer: "The work is being done by them." },
{ q: "Change to active: The announcement will be made soon.", options: ["They will make the announcement soon.", "They make the announcement soon.", "They are making the announcement soon.", "They made the announcement soon."], answer: "They will make the announcement soon." },
{ q: "Rewrite correctly: The letter <u>wrote</u> by Ade.", options: ["The letter was wrote by Ade.", "The letter was written by Ade.", "The letter is written by Ade.", "The letter will be written by Ade."], answer: "The letter was written by Ade." },
{ q: "Change to passive: She has finished the assignment.", options: ["The assignment has been finished by her.", "The assignment was finished by her.", "The assignment is finished by her.", "The assignment will be finished by her."], answer: "The assignment has been finished by her." },
{ q: "Identify the voice: The new policy has been implemented by the management.", options: ["Active", "Passive", "Both", "None"], answer: "Passive" },
{ q: "Change to active: The ball was thrown by John.", options: ["John threw the ball.", "John throws the ball.", "John is throwing the ball.", "John will throw the ball."], answer: "John threw the ball." },
{ q: "Rewrite in passive: They are conducting an investigation.", options: ["An investigation is being conducted by them.", "An investigation was conducted by them.", "An investigation is conducted by them.", "An investigation will be conducted by them."], answer: "An investigation is being conducted by them." },
{ q: "Change to passive: The teacher is teaching the students.", options: ["The students are being taught by the teacher.", "The students were taught by the teacher.", "The students are taught by the teacher.", "The students will be taught by the teacher."], answer: "The students are being taught by the teacher." },
{ q: "Identify the error: The book was write by a famous author.", options: ["write", "written", "writes", "writing"], answer: "write" },
{ q: "Change to active: The new employee was trained by the HR department.", options: ["The HR department trained the new employee.", "The HR department trains the new employee.", "The HR department is training the new employee.", "The HR department will train the new employee."], answer: "The HR department trained the new employee." },
{ q: "Rewrite in passive: The company will launch a new product next month.", options: ["A new product will be launched by the company next month.", "A new product is launched by the company next month.", "A new product is being launched by the company next month.", "A new product was launched by the company next month."], answer: "A new product will be launched by the company next month." },
{ q: "Change to passive: The chef is preparing the meal.", options: ["The meal is being prepared by the chef.", "The meal was prepared by the chef.", "The meal is prepared by the chef.", "The meal will be prepared by the chef."], answer: "The meal is being prepared by the chef." },
{ q: "Identify the voice: The package will be delivered tomorrow.", options: ["Active", "Passive", "Both", "None"], answer: "Passive" },
{ q: "Change to active: The research paper was written by the team.", options: ["The team wrote the research paper.", "The team writes the research paper.", "The team is writing the research paper.", "The team will write the research paper."], answer: "The team wrote the research paper." }
] },

//direct and indirect speech

{ topic: "Direct and Indirect Speech", questions: [
{ q: "Change to indirect: He said, 'I know the answer.'", options: ["He said that he knew the answer.", "He said that he knows the answer.", "He said that I knew the answer.", "He said that I know the answer."], answer: "He said that he knew the answer." },
{ q: "Change to direct: She said that she was happy.", options: ["She said, 'I am happy.'", "She said, 'I was happy.'", "She said, 'She was happy.'", "She said, 'I have been happy.'" ], answer: "She said, 'I am happy.'" },
{ q: "Report the question: 'When did you arrive?' she asked.", options: ["She asked when did I arrive.", "She asked when I arrived.", "She asked when I had arrived.", "She asked when I have arrived."], answer: "She asked when I arrived." },
{ q: "Change to indirect: The teacher said, 'Work hard.'", options: ["The teacher said to work hard.", "The teacher told to work hard.", "The teacher advised to work hard.", "The teacher told us to work hard."], answer: "The teacher told us to work hard." },
{ q: "Change to direct: He asked me where I lived.", options: ["He asked, 'Where do you live?'", "He asked, 'Where are you living?'", "He asked, 'Where did I live?'", "He asked, 'Where I lived?'" ], answer: "He asked, 'Where do you live?'" },
{ q: "Report the request: 'Please wait for me,' she said.", options: ["She requested me to wait for her.", "She told me to wait for her.", "She asked me to wait for her.", "She begged me to wait for her."], answer: "She requested me to wait for her." },
{ q: "Correct this: He told that to go home.", options: ["He told me to go home.", "He said to go home.", "He told go home.", "He told that go home."], answer: "He told me to go home." },
{ q: "Change to indirect: 'Do you understand?' he asked.", options: ["He asked if I understood.", "He asked if I understand.", "He asked do I understand.", "He asked if I had understood."], answer: "He asked if I understood." },
{ q: "Rewrite in direct: She said that she had finished the task.", options: ["She said, 'I have finished the task.'", "She said, 'I finished the task.'", "She said, 'I had finished the task.'", "She said, 'She had finished the task.'" ], answer: "She said, 'I have finished the task.'" },
{ q: "Change to indirect: He said, 'I can swim.'", options: ["He said that he could swim.", "He said that he can swim.", "He said that I could swim.", "He said that he will swim."], answer: "He said that he could swim." },
{ q: "Identify the error: She said that she go to the market.", options: ["go", "went", "goes", "gone"], answer: "go" },
{ q: "Change to indirect: 'I am going to Lagos tomorrow,' he said.", options: ["He said that he was going to Lagos the next day.", "He said that he is going to Lagos tomorrow.", "He said that he will go to Lagos tomorrow.", "He said that he went to Lagos tomorrow."], answer: "He said that he was going to Lagos the next day." },
{ q: "Report the question: 'Are you coming?' she asked.", options: ["She asked if I was coming.", "She asked if I am coming.", "She asked are you coming.", "She asked if I come."], answer: "She asked if I was coming." },
{ q: "Change to direct: He asked me to help him.", options: ["He said, 'Help me.'", "He said, 'Please help me.'", "He said, 'You help me.'", "He said, 'I need help.'" ], answer: "He said, 'Please help me.'" },
{ q: "Identify the correct sentence:", options: ["She said that she will come.", "She said that she would come.", "She said that she came.", "She said that she is coming."], answer: "She said that she would come." },
{ q: "Change to indirect: 'I have been studying,' she said.", options: ["She said that she had been studying.", "She said that she has been studying.", "She said that she is studying.", "She said that she was studying."], answer: "She said that she had been studying." },
{ q: "Report the command: 'Stand up!' the teacher said.", options: ["The teacher told us to stand up.", "The teacher said to stand up.", "The teacher asked us to stand up.", "The teacher ordered us to stand up."], answer: "The teacher told us to stand up." },
{ q: "Change to direct: He said that he would visit me.", options: ["He said, 'I will visit you.'", "He said, 'I would visit you.'", "He said, 'He would visit me.'", "He said, 'I will visit him.'" ], answer: "He said, 'I will visit you.'" },
{ q: "Identify the error: He said that he can to come.", options: ["can", "could", "come", "to come"], answer: "to come" },
{ q: "Change to indirect: 'Where are you going?' she asked.", options: ["She asked where I was going.", "She asked where I am going.", "She asked where are you going.", "She asked where I go."], answer: "She asked where I was going." }
] },

//vocabulary and word usage

{ topic: "Vocabulary and Word Usage", questions: [
{ q: "Give a synonym of 'terminate'.", options: ["End", "Start", "Continue", "Pause"], answer: "End" },
{ q: "Choose the most suitable antonym of 'scarce'.", options: ["Abundant", "Rare", "Limited", "Plenty"], answer: "Abundant" },
{ q: "Identify the homophone of 'pear'.", options: ["Pair", "Pare", "Pearl", "Paire"], answer: "Pair" },
{ q: "Select the correct word: The bag is too <u>(loose/lose)</u>.", options: ["Loose", "Lose", "Loss", "Lost"], answer: "Loose" },
{ q: "What does the idiom 'once in a blue moon' mean?", options: ["Very often", "Rarely", "Sometimes", "Always"], answer: "Rarely" },
{ q: "Form the noun from 'decide'.", options: ["Decision", "Decide", "Decisive", "Deciding"], answer: "Decision" },
{ q: "Choose the correct phrasal verb: Please <u>(look after/look for)</u> the children.", options: ["Look after", "Look for", "Look at", "Look up"], answer: "Look after" },
{ q: "Identify the context clue: The fortress was impregnable; no enemy could enter it.", options: ["Definition", "Example", "Contrast", "Inference"], answer: "Definition" },
{ q: "Choose the appropriate register for banking: withdrawal or admission?", options: ["Withdrawal", "Admission", "Transaction", "Deposit"], answer: "Withdrawal" },
{ q: "Correct the usage: He is capable <u>to do</u> it.", options: ["To do", "Of doing", "In doing", "For doing"], answer: "Of doing" },
{ q: "Identify the synonym of 'happy'.", options: ["Joyful", "Sad", "Angry", "Tired"], answer: "Joyful" },
{ q: "Choose the antonym of 'big'.", options: ["Small", "Large", "Huge", "Gigantic"], answer: "Small" },
{ q: "What does the phrasal verb 'give up' mean?", options: ["Stop trying", "Continue", "Start", "Pause"], answer: "Stop trying" },
{ q: "Identify the homograph: lead (to guide) / lead (metal)", options: ["Lead", "Guide", "Metal", "To"], answer: "Lead" },
{ q: "Select the correct word: The teacher <u>(advised/adviced)</u> me to study.", options: ["Advised", "Adviced", "Advice", "Advises"], answer: "Advised" },
{ q: "Form the adjective from 'beauty'.", options: ["Beautiful", "Beautify", "Beautious", "Beauteous"], answer: "Beautiful" },
{ q: "What does the idiom 'break a leg' mean?", options: ["Good luck", "Bad luck", "Get injured", "Be careful"], answer: "Good luck" },
{ q: "Choose the correct register: The doctor will <u>(prescribe/prescription)</u> the medicine.", options: ["Prescribe", "Prescription", "Prescribes", "Prescribing"], answer: "Prescribe" },
{ q: "Identify the context clue: The weather was inclement; it was raining heavily.", options: ["Definition", "Example", "Contrast", "Inference"], answer: "Inference" },
{ q: "Correct the sentence: She is interested <u>in</u> politics.", options: ["In", "On", "At", "About"], answer: "In" }
] },

//lexis and structure

{ topic: "Lexis and Structure", questions: [
{ q: "Correct the error: She <u>go</u> to school every day.", options: ["goes", "went", "going", "gone"], answer: "goes" },
{ q: "Choose the correct preposition: We arrived ___ the airport on time.", options: ["at", "in", "on", "to"], answer: "at" },
{ q: "Transform into passive: The teacher praised the students.", options: ["The students were praised by the teacher.", "The students are praised by the teacher.", "The students were praising the teacher.", "The students praised the teacher."], answer: "The students were praised by the teacher." },
{ q: "Fill in the blank with correct form: He made a good ___ (decide/decision).", options: ["decision", "decide", "decisive", "deciding"], answer: "decision" },
{ q: "Identify and correct the confusing word: He accepted everyone <u>excepted</u> John.", options: ["except", "accept", "accepted", "accepting"], answer: "except" },
{ q: "Rewrite correctly: I don’t need no help.", options: ["I don’t need any help.", "I need no help.", "I don’t need help.", "I need any help."], answer: "I don’t need any help." },
{ q: "Combine using a relative clause: I met a woman. She teaches French.", options: ["I met a woman who teaches French.", "I met a woman whom teaches French.", "I met a woman which teaches French.", "I met a woman that teach French."], answer: "I met a woman who teaches French." },
{ q: "Transform to interrogative: They have completed their assignment.", options: ["Have they completed their assignment?", "Do they have completed their assignment?", "They have completed their assignment?", "Have they completing their assignment?"], answer: "Have they completed their assignment?" },
{ q: "Correct the modifier: I <u>almost</u> read ten books last month.", options: ["I read almost ten books last month.", "I almost read ten books.", "I read ten books almost last month.", "I read ten books last month almost."], answer: "I read almost ten books last month." },
{ q: "Fill in the blank with correct conjunction: ___ it was raining, we went to the market.", options: ["Although", "Because", "So", "If"], answer: "Although" },
{ q: "Identify the correct sentence:", options: ["She is good in Math.", "She is good at Math.", "She is good on Math.", "She is good with Math."], answer: "She is good at Math." },
{ q: "Choose the correct word: The <u>(affect/effect)</u> of the rain was obvious.", options: ["affect", "effect", "affects", "effects"], answer: "effect" },
{ q: "Transform into passive: They are building a house.", options: ["A house is being built by them.", "A house was built by them.", "A house is built by them.", "A house will be built by them."], answer: "A house is being built by them." },
{ q: "Correct the error: He don’t need no money.", options: ["He doesn’t need any money.", "He need no money.", "He doesn’t need no money.", "He need any money."], answer: "He doesn’t need any money." },
{ q: "Fill in the blank: She is interested ___ politics.", options: ["in", "on", "at", "about"], answer: "in" },
{ q: "Identify the correct sentence:", options: ["The news are shocking.", "The news is shocking.", "The news were shocking.", "The news been shocking."], answer: "The news is shocking." },
{ 
  q: "Choose the correct phrasal verb: Please ______ the children.", 
  options: ["look after", "look for", "look at", "look up"], 
  answer: "look after" 
},
{ 
  q: "Transform to negative: She is happy.", 
  options: ["She is not happy.", "She is unhappy.", "She isn’t happy.", "She not happy."], 
  answer: "She is not happy." 
},

{ 
  q: "Correct the sentence: He is capable <u>to do</u> it.", 
  options: ["to do", "of doing", "in doing", "for doing"], 
  answer: "of doing" 
  
}
]
}

    ],
  
    Physics: [
      
      //introduction to physics
      
      {
        topic: "Introduction to Physics",
        questions: [
          {
    q: "What is Physics primarily concerned with?",
    options: ["Living things", "Matter, energy and their interactions", "Chemical reactions", "Earth and its layers"],
    answer: "Matter, energy and their interactions"
  },
  {
    q: "The word ‘Physics’ originated from the Greek word ‘physis’ which means:",
    options: ["Life", "Nature", "Light", "Power"],
    answer: "Nature"
  },
  {
    q: "Which of the following is NOT a branch of Physics?",
    options: ["Mechanics", "Optics", "Thermodynamics", "Botany"],
    answer: "Botany"
  },
  {
    q: "The study of motion and the forces that cause motion is called:",
    options: ["Optics", "Mechanics", "Thermodynamics", "Electromagnetism"],
    answer: "Mechanics"
  },
  {
    q: "The branch of Physics that deals with light and its properties is:",
    options: ["Optics", "Electromagnetism", "Thermodynamics", "Nuclear Physics"],
    answer: "Optics"
  },
  {
    q: "Which of the following instruments is used to measure temperature?",
    options: ["Thermometer", "Barometer", "Hygrometer", "Manometer"],
    answer: "Thermometer"
  },
  {
    q: "Which of the following instruments measures mass?",
    options: ["Ammeter", "Thermometer", "Beam balance", "Barometer"],
    answer: "Beam balance"
  },
  {
    q: "Which of these quantities can be measured using a metre rule?",
    options: ["Time", "Temperature", "Length", "Mass"],
    answer: "Length"
  },
  {
    q: "Which of the following is NOT an example of a physical quantity?",
    options: ["Speed", "Temperature", "Pressure", "Color"],
    answer: "Color"
  },
  {
    q: "Which of the following is NOT a reason for studying Physics?",
    options: ["It helps develop technology", "It improves understanding of nature", "It aids in designing machines", "It helps plants to grow faster"],
    answer: "It helps plants to grow faster"
  },
  {
    q: "Physics is closely related to which of the following fields?",
    options: ["Biology", "Chemistry", "Mathematics", "All of the above"],
    answer: "All of the above"
  },
  {
    q: "Which of the following is used to measure time?",
    options: ["Clock", "Thermometer", "Barometer", "Ammeter"],
    answer: "Clock"
  },
  {
    q: "The process of comparing a physical quantity with a standard is called:",
    options: ["Estimation", "Evaluation", "Measurement", "Calculation"],
    answer: "Measurement"
  },
  {
    q: "Which of these scientists formulated the laws of motion?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "James Clerk Maxwell"],
    answer: "Isaac Newton"
  },
  {
    q: "The standard international system of units is called:",
    options: ["CGS", "FPS", "SI", "MKS"],
    answer: "SI"
  },
  {
    q: "The SI base unit of temperature is:",
    options: ["Celsius", "Fahrenheit", "Kelvin", "Centigrade"],
    answer: "Kelvin"
  },
  {
    q: "A good physical measurement must be:",
    options: ["Random and estimated", "Accurate and precise", "Fast and rough", "Easy and approximate"],
    answer: "Accurate and precise"
  },
  {
    q: "Which of the following devices is used to measure electric current?",
    options: ["Voltmeter", "Ammeter", "Galvanometer", "Thermometer"],
    answer: "Ammeter"
  },
  {
    q: "Which of these scientists is known as the father of modern Physics?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Ernest Rutherford"],
    answer: "Galileo Galilei"
  },
  {
    q: "Physics helps explain natural phenomena such as:",
    options: ["Rainfall and lightning", "Photosynthesis", "Digestion", "Respiration"],
    answer: "Rainfall and lightning"
  }
        ]
      },
      
      //fundamental and derived units
      
      {
        topic: "Fundamental and derived quantities.",
        questions: [
     {
    q: "Which of the following is NOT a fundamental quantity?",
    options: ["Mass", "Length", "Time", "Velocity"],
    answer: "Velocity"
  },
  {
    q: "Which of the following is a derived quantity?",
    options: ["Mass", "Length", "Area", "Time"],
    answer: "Area"
  },
  {
    q: "The SI unit of mass is:",
    options: ["Gram", "Kilogram", "Pound", "Tonne"],
    answer: "Kilogram"
  },
  {
    q: "The SI unit of length is:",
    options: ["Meter", "Centimeter", "Kilometer", "Foot"],
    answer: "Meter"
  },
  {
    q: "The SI unit of time is:",
    options: ["Hour", "Minute", "Second", "Millisecond"],
    answer: "Second"
  },
  {
    q: "The quantity derived from mass and volume is:",
    options: ["Density", "Force", "Pressure", "Work"],
    answer: "Density"
  },
  {
    q: "Which of these is NOT a derived quantity?",
    options: ["Area", "Speed", "Energy", "Temperature"],
    answer: "Temperature"
  },
  {
    q: "The SI unit of force is:",
    options: ["Joule", "Newton", "Pascal", "Watt"],
    answer: "Newton"
  },
  {
    q: "The SI unit of pressure is:",
    options: ["Joule", "Watt", "Newton per meter", "Pascal"],
    answer: "Pascal"
  },
  {
    q: "Which of the following is the correct unit of power?",
    options: ["Newton", "Joule", "Watt", "Ampere"],
    answer: "Watt"
  },
  {
    q: "Which of the following quantities is a scalar?",
    options: ["Force", "Velocity", "Acceleration", "Mass"],
    answer: "Mass"
  },
  {
    q: "The SI unit of energy is:",
    options: ["Newton", "Joule", "Watt", "Ohm"],
    answer: "Joule"
  },
  {
    q: "The derived unit of velocity is:",
    options: ["m/s²", "m/s", "m²/s", "s/m"],
    answer: "m/s"
  },
  {
    q: "The derived unit of acceleration is:",
    options: ["m/s²", "m/s", "m²/s²", "s²/m"],
    answer: "m/s²"
  },
  {
    q: "The quantity derived from force and distance is:",
    options: ["Work", "Pressure", "Power", "Energy per second"],
    answer: "Work"
  },
  {
    q: "The SI unit of work is:",
    options: ["Watt", "Newton", "Joule", "Coulomb"],
    answer: "Joule"
  },
  {
    q: "Which of the following is NOT a base (fundamental) quantity?",
    options: ["Current", "Temperature", "Density", "Time"],
    answer: "Density"
  },
  {
    q: "The SI unit of electric current is:",
    options: ["Volt", "Coulomb", "Ampere", "Ohm"],
    answer: "Ampere"
  },
  {
    q: "The SI unit of luminous intensity is:",
    options: ["Candela", "Lumen", "Lux", "Watt"],
    answer: "Candela"
  },
  {
    q: "Which of the following pairs are both derived quantities?",
    options: ["Length and Mass", "Force and Velocity", "Time and Temperature", "Current and Amount of substance"],
    answer: "Force and Velocity"
  }
        ]
      },
      
      //motion
      
      {
        topic:"Motion",
        questions: [
          {
  q: "Which of the following quantities is a vector?",
  options: ["Speed", "Distance", "Velocity", "Time"],
  answer: "Velocity"
  },
  {
  q: "A car moves with a uniform speed of 20 m/s for 10 seconds. What distance does it cover?",
  options: ["100 m", "150 m", "200 m", "250 m"],
  answer: "200 m"
  },
  {
  q: "The rate of change of velocity is called:",
  options: ["Speed", "Acceleration", "Momentum", "Displacement"],
  answer: "Acceleration"
  },
  {
  q: "A body moving at 10 m/s comes to rest in 5 seconds. What is its acceleration?",
  options: ["2 m/s²", "−2 m/s²", "5 m/s²", "−5 m/s²"],
  answer: "−2 m/s²"
  },
  {
  q: "If a car accelerates uniformly from rest to 30 m/s in 10 s, find the distance covered.",
  options: ["150 m", "300 m", "450 m", "600 m"],
  answer: "150 m"
  },
  {
  q: "The slope of a velocity-time graph represents:",
  options: ["Displacement", "Speed", "Acceleration", "Distance"],
  answer: "Acceleration"
  },
  {
  q: "The slope of a distance-time graph gives:",
  options: ["Acceleration", "Velocity", "Force", "Momentum"],
  answer: "Velocity"
  },
  {
  q: "A body moving in a circular path at constant speed has:",
  options: ["Zero velocity", "Changing acceleration", "Constant velocity", "Uniform motion"],
  answer: "Changing acceleration"
  },
  {
  q: "A stone is dropped from a height of 20 m. Find its speed just before hitting the ground (g = 10 m/s²).",
  options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
  answer: "20 m/s"
  },
  {
  q: "What type of motion is exhibited by a pendulum?",
  options: ["Rotational motion", "Linear motion", "Periodic motion", "Random motion"],
  answer: "Periodic motion"
  },
  {
  q: "When a car moves at a constant speed in a straight line, its acceleration is:",
  options: ["Positive", "Zero", "Negative", "Constant"],
  answer: "Zero"
  },
  {
  q: "Which of the following equations of motion is correct?",
  options: ["v = u + at", "v = u − at²", "s = ut + a", "a = s/t"],
  answer: "v = u + at"
  },
  {
  q: "A body travels 10 m in the first second and 30 m in the next second. What type of motion is this?",
  options: ["Uniform motion", "Accelerated motion", "Retarded motion", "Random motion"],
  answer: "Accelerated motion"
  },
  {
  q: "Which instrument is used to measure the speed of a vehicle?",
  options: ["Speedometer", "Odometer", "Barometer", "Thermometer"],
  answer: "Speedometer"
  },
  {
  q: "The area under a velocity-time graph represents:",
  options: ["Acceleration", "Distance", "Speed", "Force"],
  answer: "Distance"
  },
  {
  q: "A car decelerates from 25 m/s to rest in 5 s. Find the retardation.",
  options: ["5 m/s²", "10 m/s²", "−5 m/s²", "−10 m/s²"],
  answer: "−5 m/s²"
  },
  {
  q: "If a ball is thrown vertically upward, its velocity at the highest point is:",
  options: ["Maximum", "Zero", "Equal to g", "Negative"],
  answer: "Zero"
  },
  {
  q: "Which of the following represents uniform motion?",
  options: ["Constant velocity", "Constant acceleration", "Changing speed", "Variable distance"],
  answer: "Constant velocity"
  },
  {
  q: "What is the unit of acceleration?",
  options: ["m/s", "m/s²", "N", "J"],
  answer: "m/s²"
  },
  {
  q: "A car travels at 60 km/h for 2 hours. What is the total distance covered?",
  options: ["60 km", "100 km", "120 km", "150 km"],
  answer: "120 km"
  }
        ]
      },
      
      //newton laws of motion
      {
        topic: "Newtons law of motion",
        questions: [
          {
  q: "Which of Newton’s laws is known as the law of inertia?",
  options: ["First law", "Second law", "Third law", "Law of gravitation"],
  answer: "First law"
  },
  {
  q: "The tendency of a body to resist a change in its state of motion is called:",
  options: ["Momentum", "Inertia", "Force", "Mass"],
  answer: "Inertia"
  },
  {
  q: "Newton’s second law of motion relates force to:",
  options: ["Energy", "Momentum", "Acceleration", "Speed"],
  answer: "Acceleration"
  },
  {
  q: "According to Newton’s third law, every action has:",
  options: ["A smaller reaction", "No reaction", "An equal and opposite reaction", "A positive acceleration"],
  answer: "An equal and opposite reaction"
  },
  {
  q: "A body of mass 2 kg is accelerated at 3 m/s². Find the force applied.",
  options: ["5 N", "6 N", "9 N", "12 N"],
  answer: "6 N"
  },
  {
  q: "Which of the following is an example of Newton’s third law?",
  options: ["A car moving at constant velocity", "A ball thrown upward", "A gun recoiling when fired", "An apple falling from a tree"],
  answer: "A gun recoiling when fired"
  },
  {
  q: "The unit of force is:",
  options: ["Joule", "Newton", "Pascal", "Watt"],
  answer: "Newton"
  },
  {
  q: "A passenger lurches forward when a moving bus suddenly stops due to:",
  options: ["Momentum", "Friction", "Inertia", "Acceleration"],
  answer: "Inertia"
  },
  {
  q: "What is the equation of Newton’s second law of motion?",
  options: ["F = ma", "F = mv", "F = m/a", "F = v/t"],
  answer: "F = ma"
  },
  {
  q: "The weight of a body is the:",
  options: ["Mass of the body", "Gravitational force on the body", "Density of the body", "Volume of the body"],
  answer: "Gravitational force on the body"
  },
  {
  q: "A rocket moves forward by expelling gases backward. This illustrates:",
  options: ["Newton’s first law", "Newton’s second law", "Newton’s third law", "Law of gravitation"],
  answer: "Newton’s third law"
  },
  {
  q: "The force required to give a mass of 1 kg an acceleration of 1 m/s² is:",
  options: ["1 N", "10 N", "0.1 N", "9.8 N"],
  answer: "1 N"
  },
  {
  q: "If the net force acting on a body is zero, the body will:",
  options: ["Accelerate", "Move with uniform velocity", "Change direction", "Increase in mass"],
  answer: "Move with uniform velocity"
  },
  {
  q: "When a body falls freely under gravity, its acceleration is:",
  options: ["Constant", "Decreasing", "Increasing", "Zero"],
  answer: "Constant"
  },
  {
  q: "The action and reaction forces in Newton’s third law:",
  options: ["Act on the same body", "Act on different bodies", "Are unequal", "Cancel each other completely"],
  answer: "Act on different bodies"
  },
  {
  q: "A force acts on a body for a short time and changes its momentum. This is called:",
  options: ["Impulse", "Pressure", "Friction", "Power"],
  answer: "Impulse"
  },
  {
  q: "The SI unit of momentum is:",
  options: ["kg m/s²", "kg m/s", "N/m", "J/s"],
  answer: "kg m/s"
  },
  {
  q: "A car of mass 1000 kg moving with velocity 20 m/s stops in 10 s. Find the force applied.",
  options: ["−2000 N", "−1000 N", "−1500 N", "−2500 N"],
  answer: "−2000 N"
  },
  {
  q: "Which of these devices operates mainly on Newton’s third law?",
  options: ["Pulley", "Rocket", "Screw", "Lever"],
  answer: "Rocket"
  },
  {
  q: "A man pushes a wall with a force of 100 N, but the wall does not move. The wall exerts:",
  options: ["No force", "Equal and opposite 100 N force", "A smaller force", "A greater force"],
  answer: "Equal and opposite 100 N force"
  }
        ]
      }
      
    ],
  
    Chemistry: [
      {
    topic: "Separation Techniques",
    questions: [
      {
        q: "Which of the following methods is used to separate an insoluble solid from a liquid?",
        options: ["Evaporation", "Filtration", "Distillation", "Crystallization"],
        answer: "Filtration"
      },
      {
        q: "What method is used to obtain pure water from sea water?",
        options: ["Decantation", "Distillation", "Evaporation", "Filtration"],
        answer: "Distillation"
      },
      {
        q: "Which technique separates mixtures based on the difference in boiling points?",
        options: ["Chromatography", "Distillation", "Filtration", "Sieving"],
        answer: "Distillation"
      },
      {
        q: "The process of heating a solution to dryness to obtain the solute is called?",
        options: ["Evaporation", "Filtration", "Crystallization", "Condensation"],
        answer: "Evaporation"
      },
      {
        q: "Which separation method is used to separate two immiscible liquids?",
        options: ["Filtration", "Using a separating funnel", "Evaporation", "Distillation"],
        answer: "Using a separating funnel"
      },
      {
        q: "What apparatus is used in simple distillation?",
        options: ["Separating funnel", "Condenser", "Chromatography paper", "Funnel"],
        answer: "Condenser"
      },
      {
        q: "In paper chromatography, the stationary phase is?",
        options: ["Solvent", "Paper", "Mixture", "Water"],
        answer: "Paper"
      },
      {
        q: "Which technique separates colored pigments in ink?",
        options: ["Filtration", "Chromatography", "Distillation", "Crystallization"],
        answer: "Chromatography"
      },
      {
        q: "The process of pouring off a liquid from a sediment is called?",
        options: ["Filtration", "Decantation", "Evaporation", "Distillation"],
        answer: "Decantation"
      },
      {
        q: "Which method is suitable for separating sand and salt mixture?",
        options: ["Distillation", "Filtration and evaporation", "Chromatography", "Sublimation"],
        answer: "Filtration and evaporation"
      },
      {
        q: "What physical property is used in filtration?",
        options: ["Density", "Solubility", "Particle size", "Boiling point"],
        answer: "Particle size"
      },
      {
        q: "Which method is used to obtain pure salt from a salt solution?",
        options: ["Distillation", "Crystallization", "Chromatography", "Filtration"],
        answer: "Crystallization"
      },
      {
        q: "In fractional distillation, separation is based on difference in?",
        options: ["Density", "Boiling point", "Color", "Solubility"],
        answer: "Boiling point"
      },
      {
        q: "Which separation technique involves heating a substance to change it directly from solid to gas?",
        options: ["Sublimation", "Evaporation", "Filtration", "Condensation"],
        answer: "Sublimation"
      },
      {
        q: "Which of the following substances can be purified by sublimation?",
        options: ["Salt", "Sand", "Iodine", "Water"],
        answer: "Iodine"
      },
      {
        q: "The separation of petroleum into fractions is achieved by?",
        options: ["Simple distillation", "Fractional distillation", "Chromatography", "Crystallization"],
        answer: "Fractional distillation"
      },
      {
        q: "Which method would you use to separate iron fillings from sulphur?",
        options: ["Filtration", "Magnetism", "Evaporation", "Crystallization"],
        answer: "Magnetism"
      },
      {
        q: "Which of the following mixtures can be separated by filtration?",
        options: ["Salt and water", "Sand and water", "Alcohol and water", "Sugar solution"],
        answer: "Sand and water"
      },
      {
        q: "In distillation, what happens to the vapor after it rises?",
        options: ["It burns", "It condenses", "It freezes", "It dissolves"],
        answer: "It condenses"
      },
      {
        q: "Which of these is NOT a separation technique?",
        options: ["Chromatography", "Filtration", "Combustion", "Decantation"],
        answer: "Combustion"
      }
    ]
  },
  
      {
    topic: "Compounds and Mixtures",
    questions: [
      {
        q: "What is a mixture?",
        options: [
          "A pure substance made of one kind of atom",
          "A combination of two or more substances not chemically combined",
          "A compound formed by chemical reaction",
          "A substance with fixed composition"
        ],
        answer: "A combination of two or more substances not chemically combined"
      },
      {
        q: "Which of the following is a compound?",
        options: ["Air", "Salt (NaCl)", "Brass", "Soil"],
        answer: "Salt (NaCl)"
      },
      {
        q: "Which of the following statements is TRUE of mixtures?",
        options: [
          "They have fixed melting and boiling points",
          "They can be separated by physical means",
          "They are chemically combined",
          "Their composition is fixed"
        ],
        answer: "They can be separated by physical means"
      },
      {
        q: "Which of the following is NOT a mixture?",
        options: ["Air", "Milk", "Water", "Brine"],
        answer: "Water"
      },
      {
        q: "Which of the following is a homogeneous mixture?",
        options: ["Sand and water", "Salt solution", "Oil and water", "Flour and water"],
        answer: "Salt solution"
      },
      {
        q: "Which of the following is heterogeneous?",
        options: ["Salt water", "Air", "Oil and water", "Vinegar"],
        answer: "Oil and water"
      },
      {
        q: "What type of mixture is air?",
        options: ["Compound", "Homogeneous mixture", "Heterogeneous mixture", "Suspension"],
        answer: "Homogeneous mixture"
      },
      {
        q: "What is the chemical formula of water?",
        options: ["H₂O", "O₂", "H₂", "CO₂"],
        answer: "H₂O"
      },
      {
        q: "What kind of change forms a compound?",
        options: ["Physical change", "Chemical change", "Mechanical change", "Temporary change"],
        answer: "Chemical change"
      },
      {
        q: "Which of these can be separated by filtration?",
        options: ["Salt and water", "Sugar and water", "Sand and water", "Alcohol and water"],
        answer: "Sand and water"
      },
      {
        q: "In a compound, the elements are combined in a ____ ratio.",
        options: ["Variable", "Fixed", "Changing", "Unequal"],
        answer: "Fixed"
      },
      {
        q: "Which of the following is a mixture?",
        options: ["Carbon dioxide", "Hydrogen chloride", "Air", "Ammonia"],
        answer: "Air"
      },
      {
        q: "Which of these is NOT a characteristic of a compound?",
        options: [
          "Its components can be separated by physical means",
          "It has a fixed composition",
          "It has different properties from its elements",
          "It is formed by chemical combination"
        ],
        answer: "Its components can be separated by physical means"
      },
      {
        q: "The components of a mixture retain their ____.",
        options: ["Chemical properties", "Atomic numbers", "Chemical formulas", "Masses"],
        answer: "Chemical properties"
      },
      {
        q: "Which of these is a compound?",
        options: ["Bronze", "Carbon dioxide", "Air", "Petrol"],
        answer: "Carbon dioxide"
      },
      {
        q: "Which method can be used to separate a mixture of sand and iron filings?",
        options: ["Filtration", "Sublimation", "Magnetism", "Crystallization"],
        answer: "Magnetism"
      },
      {
        q: "The smallest particle of a compound is called a ____.",
        options: ["Molecule", "Atom", "Element", "Ion"],
        answer: "Molecule"
      },
      {
        q: "Which of these shows that a chemical change has taken place?",
        options: [
          "No new substance formed",
          "Change is easily reversible",
          "New substance formed",
          "No change in composition"
        ],
        answer: "New substance formed"
      },
      {
        q: "Which of the following can be separated by evaporation?",
        options: ["Salt from salt solution", "Oil from water", "Alcohol from water", "Sand from water"],
        answer: "Salt from salt solution"
      },
      {
        q: "What happens to the properties of elements when they form a compound?",
        options: [
          "They remain the same",
          "They are lost and new ones are formed",
          "They increase in strength",
          "They become metallic"
        ],
        answer: "They are lost and new ones are formed"
      }
    ]
  },
  
      {
    topic: "Carbon and Its Compounds",
    questions: [
      {
        q: "What is the atomic symbol of carbon?",
        options: ["Ca", "Co", "C", "Cr"],
        answer: "C"
      },
      {
        q: "Carbon belongs to which group in the periodic table?",
        options: ["Group I", "Group IV", "Group VI", "Group VII"],
        answer: "Group IV"
      },
      {
        q: "Which of the following is an allotrope of carbon?",
        options: ["Diamond", "Carbon dioxide", "Methane", "Carbon monoxide"],
        answer: "Diamond"
      },
      {
        q: "Which of these is the hardest natural substance?",
        options: ["Iron", "Diamond", "Graphite", "Quartz"],
        answer: "Diamond"
      },
      {
        q: "Which allotrope of carbon conducts electricity?",
        options: ["Diamond", "Graphite", "Charcoal", "Coal"],
        answer: "Graphite"
      },
      {
        q: "Which gas is produced when carbon burns in limited air supply?",
        options: ["Carbon dioxide", "Carbon monoxide", "Methane", "Oxygen"],
        answer: "Carbon monoxide"
      },
      {
        q: "Which gas is produced when carbon burns in excess oxygen?",
        options: ["Carbon dioxide", "Carbon monoxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon dioxide"
      },
      {
        q: "The study of carbon compounds is called?",
        options: ["Physical chemistry", "Inorganic chemistry", "Organic chemistry", "Biochemistry"],
        answer: "Organic chemistry"
      },
      {
        q: "What is the chemical formula of methane?",
        options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        answer: "CH₄"
      },
      {
        q: "What is the main source of hydrocarbons?",
        options: ["Water", "Crude oil", "Air", "Soil"],
        answer: "Crude oil"
      },
      {
        q: "Which of the following is a hydrocarbon?",
        options: ["CO₂", "C₂H₆", "H₂O", "NaCl"],
        answer: "C₂H₆"
      },
      {
        q: "Which of these is NOT an allotrope of carbon?",
        options: ["Graphite", "Charcoal", "Silicon", "Diamond"],
        answer: "Silicon"
      },
      {
        q: "Carbon monoxide is dangerous because it ____.",
        options: [
          "Is explosive",
          "Combines with hemoglobin in the blood",
          "Is heavier than air",
          "Has a sweet smell"
        ],
        answer: "Combines with hemoglobin in the blood"
      },
      {
        q: "Which of these compounds is an acid anhydride of carbon?",
        options: ["CO", "CO₂", "CH₄", "C₂H₆"],
        answer: "CO₂"
      },
      {
        q: "Graphite is used as a lubricant because it ____.",
        options: [
          "Is very hard",
          "Has layers that slide easily over each other",
          "Is metallic",
          "Dissolves in oil"
        ],
        answer: "Has layers that slide easily over each other"
      },
      {
        q: "Which of the following is a product of incomplete combustion of carbon?",
        options: ["Carbon dioxide", "Carbon monoxide", "Water", "Sulphur dioxide"],
        answer: "Carbon monoxide"
      },
      {
        q: "What type of bonding exists in carbon compounds?",
        options: ["Ionic bonding", "Covalent bonding", "Metallic bonding", "Hydrogen bonding"],
        answer: "Covalent bonding"
      },
      {
        q: "Which of these is used in pencils?",
        options: ["Charcoal", "Graphite", "Coal", "Diamond"],
        answer: "Graphite"
      },
      {
        q: "Which compound is used in fire extinguishers?",
        options: ["Carbon dioxide", "Carbon monoxide", "Methane", "Ethene"],
        answer: "Carbon dioxide"
      },
      {
        q: "What is the oxidation state of carbon in carbon dioxide?",
        options: ["+2", "+4", "-2", "0"],
        answer: "+4"
      }
    ]
  },
  
      {
    topic: "Introduction to Chemistry",
    questions: [
      {
        q: "What is the study of the composition, structure, and properties of matter called?",
        options: ["Physics", "Chemistry", "Biology", "Geology"],
        answer: "Chemistry"
      },
      {
        q: "Which of the following is NOT a branch of chemistry?",
        options: ["Organic Chemistry", "Physical Chemistry", "Astrology", "Analytical Chemistry"],
        answer: "Astrology"
      },
      {
        q: "Which of these is a chemical change?",
        options: ["Melting of ice", "Rusting of iron", "Breaking glass", "Dissolving sugar in water"],
        answer: "Rusting of iron"
      },
      {
        q: "Who is regarded as the father of modern chemistry?",
        options: ["Isaac Newton", "Antoine Lavoisier", "John Dalton", "Dmitri Mendeleev"],
        answer: "Antoine Lavoisier"
      },
      {
        q: "Which of these is NOT matter?",
        options: ["Air", "Water", "Sound", "Wood"],
        answer: "Sound"
      },
      {
        q: "Which of the following represents a physical change?",
        options: ["Burning wood", "Cooking rice", "Boiling water", "Rusting iron"],
        answer: "Boiling water"
      },
      {
        q: "Which of the following instruments is used to measure temperature in a chemical reaction?",
        options: ["Burette", "Thermometer", "Pipette", "Voltmeter"],
        answer: "Thermometer"
      },
      {
        q: "Which of the following is an element?",
        options: ["Water", "Carbon", "Salt", "Sugar"],
        answer: "Carbon"
      },
      {
        q: "Which of these is a laboratory rule?",
        options: ["Drink from beakers", "Run inside the lab", "Report spills immediately", "Taste chemicals to identify them"],
        answer: "Report spills immediately"
      },
      {
        q: "The SI unit of temperature is?",
        options: ["Celsius", "Kelvin", "Fahrenheit", "Joule"],
        answer: "Kelvin"
      },
      {
        q: "Which of these is not a chemical apparatus?",
        options: ["Bunsen burner", "Conical flask", "Microscope", "Test tube"],
        answer: "Microscope"
      },
      {
        q: "Which one is a compound?",
        options: ["Iron", "Oxygen", "Water", "Copper"],
        answer: "Water"
      },
      {
        q: "What is the smallest particle of an element?",
        options: ["Molecule", "Compound", "Atom", "Ion"],
        answer: "Atom"
      },
      {
        q: "Which of these is used to measure liquid volume accurately?",
        options: ["Burette", "Tripod stand", "Beaker", "Test tube"],
        answer: "Burette"
      },
      {
        q: "What type of flame is obtained when air holes of a Bunsen burner are open?",
        options: ["Luminous flame", "Non-luminous flame", "Yellow flame", "Red flame"],
        answer: "Non-luminous flame"
      },
      {
        q: "Which of these is a property of metals?",
        options: ["Brittle", "Poor conductors", "Malleable", "Non-lustrous"],
        answer: "Malleable"
      },
      {
        q: "What is chemistry mainly concerned with?",
        options: ["Energy", "Matter and its changes", "Light", "Motion"],
        answer: "Matter and its changes"
      },
      {
        q: "Which branch of chemistry deals with carbon compounds?",
        options: ["Inorganic Chemistry", "Organic Chemistry", "Physical Chemistry", "Analytical Chemistry"],
        answer: "Organic Chemistry"
      },
      {
        q: "Which of these is a non-metal?",
        options: ["Sodium", "Copper", "Sulphur", "Iron"],
        answer: "Sulphur"
      },
      {
        q: "What is the correct symbol for Sodium?",
        options: ["S", "So", "Na", "N"],
        answer: "Na"
      }
    ]
  }
  
    ],
    
    Biology: [
      {
    topic: "Biology as a science",
    questions: [
      {
        q: "Biology is best defined as the study of —",
        options: ["Plants", "Animals", "Living things", "Environment"],
        answer: "Living things"
      },
      {
        q: "The scientist who introduced the term 'Biology' was —",
        options: ["Aristotle", "Lamarck", "Darwin", "Pasteur"],
        answer: "Lamarck"
      },
      {
        q: "Which of the following is NOT a characteristic of living things?",
        options: ["Respiration", "Feeding", "Decay", "Excretion"],
        answer: "Decay"
      },
      {
        q: "The basic unit of life is the —",
        options: ["Tissue", "Organ", "Cell", "Organism"],
        answer: "Cell"
      },
      {
        q: "The study of animals is known as —",
        options: ["Botany", "Ecology", "Zoology", "Anatomy"],
        answer: "Zoology"
      },
      {
        q: "The study of plants is known as —",
        options: ["Botany", "Mycology", "Genetics", "Ecology"],
        answer: "Botany"
      },
      {
        q: "Which of these is an example of a unicellular organism?",
        options: ["Amoeba", "Hydra", "Earthworm", "Fish"],
        answer: "Amoeba"
      },
      {
        q: "The process by which living organisms produce new individuals is called —",
        options: ["Growth", "Reproduction", "Respiration", "Irritability"],
        answer: "Reproduction"
      },
      {
        q: "The ability of living organisms to respond to stimuli is called —",
        options: ["Growth", "Irritability", "Respiration", "Movement"],
        answer: "Irritability"
      },
      {
        q: "A group of similar cells performing the same function is called —",
        options: ["Organ", "Organ system", "Tissue", "Organism"],
        answer: "Tissue"
      },
      {
        q: "Which of these is NOT part of the scientific method?",
        options: ["Observation", "Experiment", "Guessing", "Conclusion"],
        answer: "Guessing"
      },
      {
        q: "Which of the following is a correct sequence of biological organization?",
        options: ["Cell → Organ → Tissue → Organism", "Tissue → Cell → Organ → Organism", "Cell → Tissue → Organ → Organism", "Organ → Organism → Tissue → Cell"],
        answer: "Cell → Tissue → Organ → Organism"
      },
      {
        q: "Which of these instruments is used to observe cells?",
        options: ["Telescope", "Microscope", "Stethoscope", "Periscope"],
        answer: "Microscope"
      },
      {
        q: "Which of the following shows the importance of biology?",
        options: ["Understanding human diseases", "Learning only mathematics", "Building machines", "Writing codes"],
        answer: "Understanding human diseases"
      },
      {
        q: "The study of how organisms interact with their environment is —",
        options: ["Genetics", "Ecology", "Cytology", "Embryology"],
        answer: "Ecology"
      },
      {
        q: "Which of these is NOT a branch of biology?",
        options: ["Botany", "Zoology", "Physics", "Microbiology"],
        answer: "Physics"
      },
      {
        q: "The organism that can live on its own and perform all life processes is called —",
        options: ["Tissue", "Organ", "Organism", "System"],
        answer: "Organism"
      },
      {
        q: "Living things obtain energy through the process of —",
        options: ["Photosynthesis", "Diffusion", "Respiration", "Excretion"],
        answer: "Respiration"
      },
      {
        q: "Which of these scientists developed the theory of evolution by natural selection?",
        options: ["Gregor Mendel", "Louis Pasteur", "Charles Darwin", "Robert Hooke"],
        answer: "Charles Darwin"
      },
      {
        q: "Which of these is a branch of biology that deals with heredity and variation?",
        options: ["Anatomy", "Genetics", "Ecology", "Cytology"],
        answer: "Genetics"
      }
    ]
  },
  
      {
    topic: "Cell and Its Environment",
    questions: [
      {
        q: "The cell is regarded as the basic unit of life because —",
        options: [
          "It contains the nucleus",
          "All living things are made up of cells",
          "It has a definite shape",
          "It is visible to the naked eye"
        ],
        answer: "All living things are made up of cells"
      },
      {
        q: "The part of the cell that controls all activities is the —",
        options: ["Cytoplasm", "Cell membrane", "Nucleus", "Vacuole"],
        answer: "Nucleus"
      },
      {
        q: "Which of these scientists first discovered the cell?",
        options: ["Charles Darwin", "Robert Hooke", "Louis Pasteur", "Anton van Leeuwenhoek"],
        answer: "Robert Hooke"
      },
      {
        q: "The jelly-like substance found inside the cell is called —",
        options: ["Nucleoplasm", "Cytoplasm", "Protoplasm", "Cell sap"],
        answer: "Cytoplasm"
      },
      {
        q: "Which of the following structures is found in plant cells but not in animal cells?",
        options: ["Cell membrane", "Nucleus", "Chloroplast", "Cytoplasm"],
        answer: "Chloroplast"
      },
      {
        q: "The outer boundary of an animal cell is the —",
        options: ["Cell wall", "Cell membrane", "Nuclear membrane", "Vacuole"],
        answer: "Cell membrane"
      },
      {
        q: "The green pigment responsible for photosynthesis is —",
        options: ["Haemoglobin", "Melanin", "Chlorophyll", "Carotene"],
        answer: "Chlorophyll"
      },
      {
        q: "The process by which substances move from a region of higher concentration to a lower concentration is called —",
        options: ["Osmosis", "Diffusion", "Active transport", "Absorption"],
        answer: "Diffusion"
      },
      {
        q: "The process by which water moves through a semi-permeable membrane is called —",
        options: ["Osmosis", "Diffusion", "Evaporation", "Filtration"],
        answer: "Osmosis"
      },
      {
        q: "A plant cell placed in a very strong salt solution will —",
        options: ["Gain water", "Lose water and shrink", "Remain the same", "Burst"],
        answer: "Lose water and shrink"
      },
      {
        q: "A cell that has lost water through osmosis is said to be —",
        options: ["Turgid", "Flaccid", "Plasmolysed", "Rigid"],
        answer: "Plasmolysed"
      },
      {
        q: "The movement of materials in and out of the cell is controlled by the —",
        options: ["Nucleus", "Cell wall", "Cell membrane", "Vacuole"],
        answer: "Cell membrane"
      },
      {
        q: "The part of the cell responsible for respiration and energy release is —",
        options: ["Ribosome", "Mitochondrion", "Chloroplast", "Vacuole"],
        answer: "Mitochondrion"
      },
      {
        q: "Which of these is NOT a component of the cell theory?",
        options: [
          "All living things are made of cells",
          "Cells are the smallest units of life",
          "Cells arise from non-living matter",
          "New cells come from pre-existing cells"
        ],
        answer: "Cells arise from non-living matter"
      },
      {
        q: "Which organelle is responsible for protein synthesis?",
        options: ["Mitochondrion", "Ribosome", "Nucleus", "Lysosome"],
        answer: "Ribosome"
      },
      {
        q: "The fluid part of the cytoplasm that surrounds the organelles is the —",
        options: ["Matrix", "Stroma", "Cytosol", "Cell sap"],
        answer: "Cytosol"
      },
      {
        q: "What happens to a red blood cell placed in distilled water?",
        options: ["It bursts", "It shrinks", "It remains unchanged", "It divides"],
        answer: "It bursts"
      },
      {
        q: "The organelle that stores food and waste in plant cells is the —",
        options: ["Vacuole", "Nucleus", "Ribosome", "Mitochondrion"],
        answer: "Vacuole"
      },
      {
        q: "The living part of the cell enclosed by the cell membrane is called —",
        options: ["Protoplasm", "Cell wall", "Cytoskeleton", "Chromatin"],
        answer: "Protoplasm"
      },
      {
        q: "Which of these controls the passage of materials between the nucleus and the cytoplasm?",
        options: ["Cell wall", "Nuclear membrane", "Nucleolus", "Vacuole"],
        answer: "Nuclear membrane"
      }
    ]
  },
  
      {
    topic: "Classification of Living Things",
    questions: [
      {
        q: "The branch of Biology that deals with the classification of living organisms is called —",
        options: ["Ecology", "Genetics", "Taxonomy", "Cytology"],
        answer: "Taxonomy"
      },
      {
        q: "The system of naming organisms with two names is called —",
        options: ["Monomial system", "Binomial nomenclature", "Trinomial system", "Classification system"],
        answer: "Binomial nomenclature"
      },
      {
        q: "Who introduced the binomial system of naming organisms?",
        options: ["Charles Darwin", "Robert Hooke", "Carl Linnaeus", "Gregor Mendel"],
        answer: "Carl Linnaeus"
      },
      {
        q: "In binomial nomenclature, the first name represents the —",
        options: ["Species", "Genus", "Family", "Order"],
        answer: "Genus"
      },
      {
        q: "In the name *Homo sapiens*, 'sapiens' refers to the —",
        options: ["Genus", "Species", "Family", "Order"],
        answer: "Species"
      },
      {
        q: "The largest group used in the classification of living organisms is —",
        options: ["Class", "Family", "Kingdom", "Species"],
        answer: "Kingdom"
      },
      {
        q: "Which of the following is NOT a kingdom in modern classification?",
        options: ["Plantae", "Animalia", "Fungi", "Virus"],
        answer: "Virus"
      },
      {
        q: "The five-kingdom classification was proposed by —",
        options: ["Carl Linnaeus", "R.H. Whittaker", "Charles Darwin", "Lamarck"],
        answer: "R.H. Whittaker"
      },
      {
        q: "Which kingdom contains unicellular organisms with no true nucleus?",
        options: ["Protista", "Monera", "Fungi", "Plantae"],
        answer: "Monera"
      },
      {
        q: "Which of these organisms belongs to the kingdom Protista?",
        options: ["Mucor", "Paramecium", "Amoeba", "Both Amoeba and Paramecium"],
        answer: "Both Amoeba and Paramecium"
      },
      {
        q: "Fungi obtain their food by —",
        options: ["Photosynthesis", "Absorption", "Ingestion", "Chemosynthesis"],
        answer: "Absorption"
      },
      {
        q: "Which of the following groups is made up of non-green plants?",
        options: ["Bryophytes", "Fungi", "Algae", "Pteridophytes"],
        answer: "Fungi"
      },
      {
        q: "Which of the following has the simplest level of organization?",
        options: ["Protozoa", "Fungi", "Plantae", "Animalia"],
        answer: "Protozoa"
      },
      {
        q: "A group of similar organisms capable of interbreeding to produce fertile offspring is a —",
        options: ["Family", "Species", "Genus", "Order"],
        answer: "Species"
      },
      {
        q: "Which of the following pairs are both vertebrates?",
        options: ["Earthworm and Lizard", "Frog and Snake", "Snail and Crab", "Ant and Spider"],
        answer: "Frog and Snake"
      },
      {
        q: "Insects belong to the phylum —",
        options: ["Chordata", "Arthropoda", "Annelida", "Mollusca"],
        answer: "Arthropoda"
      },
      {
        q: "Which of these characteristics is common to both plants and animals?",
        options: ["Photosynthesis", "Growth", "Motility", "Chlorophyll"],
        answer: "Growth"
      },
      {
        q: "The scientific name of an organism is always written in —",
        options: [
          "Uppercase letters only",
          "Lowercase letters only",
          "Latin with the genus capitalized and species in lowercase",
          "Any language of choice"
        ],
        answer: "Latin with the genus capitalized and species in lowercase"
      },
      {
        q: "Which of these is a correct hierarchical order in classification?",
        options: [
          "Species → Genus → Family → Order → Class → Phylum → Kingdom",
          "Kingdom → Class → Phylum → Order → Family → Genus → Species",
          "Kingdom → Phylum → Class → Order → Family → Genus → Species",
          "Phylum → Kingdom → Class → Order → Family → Species → Genus"
        ],
        answer: "Kingdom → Phylum → Class → Order → Family → Genus → Species"
      },
      {
        q: "The scientific name of man is —",
        options: ["Homo sapien", "Homo sapiens", "Homo sapiens sapiens", "Homo erectus"],
        answer: "Homo sapiens"
      }
    ]
  },
  
  //tissue and supportive system
  
      {
    topic: "Tissues and Supportive System 1",
    questions: [
      {
        q: "Which of the following is NOT a type of animal tissue?",
        options: ["Epithelial", "Muscular", "Connective", "Xylem"],
        answer: "Xylem"
      },
      {
        q: "The tissue that connects muscles to bones is called —",
        options: ["Ligament", "Tendon", "Cartilage", "Bone"],
        answer: "Tendon"
      },
      {
        q: "Which tissue covers body surfaces and lines body cavities?",
        options: ["Epithelial", "Nervous", "Muscular", "Connective"],
        answer: "Epithelial"
      },
      {
        q: "The main function of xylem in plants is —",
        options: ["Transport water and minerals", "Transport food", "Provide support", "Photosynthesis"],
        answer: "Transport water and minerals"
      },
      {
        q: "Which plant tissue is responsible for food transport?",
        options: ["Phloem", "Xylem", "Collenchyma", "Parenchyma"],
        answer: "Phloem"
      },
      {
        q: "Collenchyma tissue in plants primarily provides —",
        options: ["Support", "Photosynthesis", "Water storage", "Respiration"],
        answer: "Support"
      },
      {
        q: "The type of skeleton found in insects is —",
        options: ["Exoskeleton", "Endoskeleton", "Hydrostatic skeleton", "Cartilaginous skeleton"],
        answer: "Exoskeleton"
      },
      {
        q: "Which of these animals has a hydrostatic skeleton?",
        options: ["Earthworm", "Fish", "Bird", "Snake"],
        answer: "Earthworm"
      },
      {
        q: "The axial skeleton consists of —",
        options: ["Skull, vertebral column, rib cage", "Limbs only", "Pelvic and pectoral girdles", "Cartilage and tendons"],
        answer: "Skull, vertebral column, rib cage"
      },
      {
        q: "The appendicular skeleton includes —",
        options: ["Limbs and girdles", "Skull and vertebrae", "Ribs only", "Sternum and cranium"],
        answer: "Limbs and girdles"
      },
      {
        q: "Which type of joint allows free movement in all directions?",
        options: ["Hinge", "Ball and socket", "Pivot", "Fixed"],
        answer: "Ball and socket"
      },
      {
        q: "Ligaments connect —",
        options: ["Bone to bone", "Muscle to bone", "Tissue to bone", "Bone to cartilage"],
        answer: "Bone to bone"
      },
      {
        q: "Which type of muscle tissue is involuntary and non-striated?",
        options: ["Skeletal", "Cardiac", "Smooth", "Striated"],
        answer: "Smooth"
      },
      {
        q: "The rigid outer covering of arthropods is called —",
        options: ["Exoskeleton", "Endoskeleton", "Hydrostatic skeleton", "Cartilage"],
        answer: "Exoskeleton"
      },
      {
        q: "Which connective tissue stores fat in the body?",
        options: ["Adipose tissue", "Cartilage", "Bone", "Ligament"],
        answer: "Adipose tissue"
      },
      {
        q: "Cartilage is found in all the following EXCEPT —",
        options: ["Nose", "Ear", "Vertebral discs", "Brain"],
        answer: "Brain"
      },
      {
        q: "Which tissue in plants is responsible for mechanical strength and flexibility?",
        options: ["Collenchyma", "Parenchyma", "Sclerenchyma", "Xylem"],
        answer: "Collenchyma"
      },
      {
        q: "Parenchyma cells mainly function in —",
        options: ["Photosynthesis, storage, and secretion", "Support only", "Water transport", "Movement"],
        answer: "Photosynthesis, storage, and secretion"
      },
      {
        q: "Which skeleton type is characteristic of vertebrates?",
        options: ["Endoskeleton", "Exoskeleton", "Hydrostatic skeleton", "Dermal skeleton"],
        answer: "Endoskeleton"
      },
      {
        q: "Joints that allow movement in one plane only are called —",
        options: ["Hinge joints", "Ball and socket joints", "Pivot joints", "Fixed joints"],
        answer: "Hinge joints"
      }
    ]
  },
  
      {
    topic: "Tissues and Supportive System 2",
    questions: [
      {
        q: "Which of the following is NOT a plant tissue?",
        options: ["Parenchyma", "Collenchyma", "Sclerenchyma", "Ligament"],
        answer: "Ligament"
      },
      {
        q: "The tissue that protects internal organs and supports the body is —",
        options: ["Bone", "Cartilage", "Muscle", "Tendon"],
        answer: "Bone"
      },
      {
        q: "Which tissue transmits nerve impulses in animals?",
        options: ["Muscular", "Connective", "Nervous", "Epithelial"],
        answer: "Nervous"
      },
      {
        q: "The tissue that provides flexible support in plant stems is —",
        options: ["Collenchyma", "Parenchyma", "Xylem", "Phloem"],
        answer: "Collenchyma"
      },
      {
        q: "Sclerenchyma tissue in plants is primarily for —",
        options: ["Mechanical support", "Food transport", "Photosynthesis", "Water absorption"],
        answer: "Mechanical support"
      },
      {
        q: "Phloem transports —",
        options: ["Food substances", "Water", "Minerals", "Hormones"],
        answer: "Food substances"
      },
      {
        q: "Which animal has an exoskeleton made of chitin?",
        options: ["Crab", "Frog", "Cat", "Human"],
        answer: "Crab"
      },
      {
        q: "Which of these animals has a skeleton made entirely of cartilage?",
        options: ["Shark", "Frog", "Cat", "Bird"],
        answer: "Shark"
      },
      {
        q: "The vertebral column is part of the —",
        options: ["Axial skeleton", "Appendicular skeleton", "Exoskeleton", "Hydrostatic skeleton"],
        answer: "Axial skeleton"
      },
      {
        q: "The pectoral and pelvic girdles are part of the —",
        options: ["Appendicular skeleton", "Axial skeleton", "Cartilage skeleton", "Exoskeleton"],
        answer: "Appendicular skeleton"
      },
      {
        q: "Which joint type allows rotation around a single axis?",
        options: ["Pivot", "Hinge", "Ball and socket", "Fixed"],
        answer: "Pivot"
      },
      {
        q: "Tendons connect —",
        options: ["Muscle to bone", "Bone to bone", "Muscle to muscle", "Ligament to bone"],
        answer: "Muscle to bone"
      },
      {
        q: "Skeletal muscles are —",
        options: ["Voluntary and striated", "Involuntary and striated", "Voluntary and smooth", "Involuntary and smooth"],
        answer: "Voluntary and striated"
      },
      {
        q: "Which skeleton type uses fluid pressure for support?",
        options: ["Hydrostatic skeleton", "Endoskeleton", "Exoskeleton", "Cartilaginous skeleton"],
        answer: "Hydrostatic skeleton"
      },
      {
        q: "Adipose tissue is mainly for —",
        options: ["Fat storage", "Support", "Movement", "Impulse transmission"],
        answer: "Fat storage"
      },
      {
        q: "Cartilage provides —",
        options: ["Flexible support", "Rigid support", "Fat storage", "Impulse conduction"],
        answer: "Flexible support"
      },
      {
        q: "Which plant tissue consists of dead cells with lignified walls for support?",
        options: ["Sclerenchyma", "Collenchyma", "Parenchyma", "Phloem"],
        answer: "Sclerenchyma"
      },
      {
        q: "Parenchyma cells differ from collenchyma because they —",
        options: ["Are thin-walled and mostly for storage", "Provide flexible support", "Transport water", "Form joints in animals"],
        answer: "Are thin-walled and mostly for storage"
      },
      {
        q: "Endoskeletons are characteristic of —",
        options: ["Vertebrates", "Insects", "Worms", "Crustaceans"],
        answer: "Vertebrates"
      },
      {
        q: "Ball and socket joints are found in —",
        options: ["Shoulder and hip", "Elbow and knee", "Neck", "Wrist"],
        answer: "Shoulder and hip"
      }
    ]
  },
  
  // nervous and hormonal coordination 
  
  {
    topic: "Nervous and Hormonal Coordination 1",
    questions: [
      {
        q: "The basic structural and functional unit of the nervous system is —",
        options: ["Neuron", "Axon", "Dendrite", "Nerve"],
        answer: "Neuron"
      },
      {
        q: "Which part of the neuron receives impulses from other neurons?",
        options: ["Axon", "Dendrite", "Cell body", "Myelin sheath"],
        answer: "Dendrite"
      },
      {
        q: "The long fiber of a neuron that conducts impulses away from the cell body is called —",
        options: ["Axon", "Dendrite", "Synapse", "Node of Ranvier"],
        answer: "Axon"
      },
      {
        q: "The gaps in the myelin sheath along the axon are called —",
        options: ["Nodes of Ranvier", "Synapses", "Dendrites", "Axon terminals"],
        answer: "Nodes of Ranvier"
      },
      {
        q: "The junction between two neurons is called —",
        options: ["Synapse", "Axon", "Dendrite", "Receptor"],
        answer: "Synapse"
      },
      {
        q: "Which part of the brain controls voluntary actions and intelligence?",
        options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
        answer: "Cerebrum"
      },
      {
        q: "The part of the brain responsible for balance and coordination is —",
        options: ["Cerebellum", "Cerebrum", "Medulla oblongata", "Hypothalamus"],
        answer: "Cerebellum"
      },
      {
        q: "Reflex action is —",
        options: ["Voluntary and slow", "Involuntary and rapid", "Voluntary and rapid", "Involuntary and slow"],
        answer: "Involuntary and rapid"
      },
      {
        q: "The pathway followed by an impulse in a reflex action is called —",
        options: ["Reflex arc", "Neuron chain", "Synaptic path", "Axonal route"],
        answer: "Reflex arc"
      },
      {
        q: "Which sense organ detects light?",
        options: ["Eye", "Ear", "Skin", "Nose"],
        answer: "Eye"
      },
      {
        q: "The endocrine gland that regulates metabolism is —",
        options: ["Thyroid", "Adrenal", "Pancreas", "Pituitary"],
        answer: "Thyroid"
      },
      {
        q: "Which hormone regulates blood sugar levels?",
        options: ["Insulin", "Adrenaline", "Thyroxine", "Testosterone"],
        answer: "Insulin"
      },
      {
        q: "The 'master gland' of the body is —",
        options: ["Pituitary", "Thyroid", "Adrenal", "Pancreas"],
        answer: "Pituitary"
      },
      {
        q: "Adrenaline is secreted by the —",
        options: ["Adrenal glands", "Thyroid glands", "Pituitary glands", "Pancreas"],
        answer: "Adrenal glands"
      },
      {
        q: "Which hormone is responsible for female secondary sexual characteristics?",
        options: ["Oestrogen", "Testosterone", "Insulin", "Adrenaline"],
        answer: "Oestrogen"
      },
      {
        q: "The part of the nervous system that controls involuntary activities is —",
        options: ["Autonomic nervous system", "Somatic nervous system", "Central nervous system", "Peripheral nervous system"],
        answer: "Autonomic nervous system"
      },
      {
        q: "Which part of the neuron releases neurotransmitters?",
        options: ["Axon terminals", "Dendrites", "Cell body", "Myelin sheath"],
        answer: "Axon terminals"
      },
      {
        q: "The hormone that stimulates water reabsorption in the kidney is —",
        options: ["ADH", "Insulin", "Glucagon", "Adrenaline"],
        answer: "ADH"
      },
      {
        q: "Which hormone triggers the fight-or-flight response?",
        options: ["Adrenaline", "Insulin", "Oestrogen", "Thyroxine"],
        answer: "Adrenaline"
      },
      {
        q: "Which gland regulates calcium levels in the blood?",
        options: ["Parathyroid", "Thyroid", "Pituitary", "Adrenal"],
        answer: "Parathyroid"
      }
    ]
  },
  
  {
    topic: "Nervous and Hormonal Coordination 2",
    questions: [
      {
        q: "Which part of the brain regulates body temperature, hunger, and thirst?",
        options: ["Hypothalamus", "Cerebrum", "Cerebellum", "Medulla oblongata"],
        answer: "Hypothalamus"
      },
      {
        q: "Which neuron carries impulses from the receptor to the CNS?",
        options: ["Sensory neuron", "Motor neuron", "Interneuron", "Connector neuron"],
        answer: "Sensory neuron"
      },
      {
        q: "Which neuron carries impulses from the CNS to the effector?",
        options: ["Motor neuron", "Sensory neuron", "Interneuron", "Connector neuron"],
        answer: "Motor neuron"
      },
      {
        q: "Which part of the eye controls the amount of light entering?",
        options: ["Iris", "Cornea", "Lens", "Retina"],
        answer: "Iris"
      },
      {
        q: "The transparent part of the eye that focuses light onto the retina is —",
        options: ["Lens", "Cornea", "Iris", "Pupil"],
        answer: "Lens"
      },
      {
        q: "The inner layer of the eye that contains light-sensitive cells is —",
        options: ["Retina", "Cornea", "Iris", "Lens"],
        answer: "Retina"
      },
      {
        q: "Which hormone is secreted by the pancreas to increase blood sugar levels?",
        options: ["Glucagon", "Insulin", "Adrenaline", "Thyroxine"],
        answer: "Glucagon"
      },
      {
        q: "The pituitary gland regulates other endocrine glands through —",
        options: ["Hormones", "Nerve impulses", "Reflex actions", "Enzymes"],
        answer: "Hormones"
      },
      {
        q: "Which hormone stimulates growth and development in humans?",
        options: ["Growth hormone", "Adrenaline", "Insulin", "Oestrogen"],
        answer: "Growth hormone"
      },
      {
        q: "Reflex actions are important because they —",
        options: ["Protect the body from injury", "Control digestion", "Regulate hormones", "Control movement voluntarily"],
        answer: "Protect the body from injury"
      },
      {
        q: "Which part of the nervous system is composed of the brain and spinal cord?",
        options: ["Central nervous system", "Peripheral nervous system", "Autonomic nervous system", "Somatic nervous system"],
        answer: "Central nervous system"
      },
      {
        q: "Which part of the nervous system includes nerves outside the brain and spinal cord?",
        options: ["Peripheral nervous system", "Central nervous system", "Autonomic nervous system", "Somatic nervous system"],
        answer: "Peripheral nervous system"
      },
      {
        q: "The speed of impulse transmission along a neuron is increased by —",
        options: ["Myelin sheath", "Dendrites", "Axon terminals", "Cell body"],
        answer: "Myelin sheath"
      },
      {
        q: "Which endocrine gland regulates the metabolic rate of the body?",
        options: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        answer: "Thyroid"
      },
      {
        q: "The fight-or-flight hormone also increases —",
        options: ["Heart rate and blood pressure", "Insulin production", "Calcium absorption", "Reflex arc speed"],
        answer: "Heart rate and blood pressure"
      },
      {
        q: "Which hormone is responsible for milk production in mammals?",
        options: ["Prolactin", "Oestrogen", "Testosterone", "Adrenaline"],
        answer: "Prolactin"
      },
      {
        q: "Which structure in a neuron transmits impulses to another neuron or effector?",
        options: ["Axon terminal", "Dendrite", "Cell body", "Myelin sheath"],
        answer: "Axon terminal"
      },
      {
        q: "The receptor for sound waves in the ear is found in —",
        options: ["Cochlea", "Pinna", "Auditory canal", "Eardrum"],
        answer: "Cochlea"
      },
      {
        q: "Which hormone regulates water balance in the body?",
        options: ["ADH", "Insulin", "Glucagon", "Thyroxine"],
        answer: "ADH"
      },
      {
        q: "The autonomic nervous system controls —",
        options: ["Involuntary actions like heartbeat and digestion", "Voluntary actions like walking", "Reflex arc only", "Muscle growth"],
        answer: "Involuntary actions like heartbeat and digestion"
      }
    ]
  },
  
  //reproduction 
  
  {
    topic: "Reproduction 1",
    questions: [
      {
        q: "Reproduction is the biological process by which —",
        options: ["Organisms produce offspring", "Organisms get energy", "Cells divide for growth", "Organisms move to new habitats"],
        answer: "Organisms produce offspring"
      },
      {
        q: "Which type of reproduction involves only one parent?",
        options: ["Asexual", "Sexual", "Cross-fertilization", "Internal fertilization"],
        answer: "Asexual"
      },
      {
        q: "Binary fission is common in —",
        options: ["Bacteria", "Humans", "Birds", "Fish"],
        answer: "Bacteria"
      },
      {
        q: "Budding is a form of —",
        options: ["Asexual reproduction", "Sexual reproduction", "Fertilization", "Pollination"],
        answer: "Asexual reproduction"
      },
      {
        q: "The fusion of male and female gametes is called —",
        options: ["Fertilization", "Pollination", "Ovulation", "Meiosis"],
        answer: "Fertilization"
      },
      {
        q: "The male gamete in humans is —",
        options: ["Sperm", "Egg", "Zygote", "Pollen"],
        answer: "Sperm"
      },
      {
        q: "The female gamete in humans is —",
        options: ["Ovum", "Sperm", "Zygote", "Embryo"],
        answer: "Ovum"
      },
      {
        q: "Fertilization that occurs inside the female body is —",
        options: ["Internal fertilization", "External fertilization", "Asexual reproduction", "Spore formation"],
        answer: "Internal fertilization"
      },
      {
        q: "Which organ produces sperm in males?",
        options: ["Testes", "Ovaries", "Uterus", "Prostate gland"],
        answer: "Testes"
      },
      {
        q: "Which organ produces eggs in females?",
        options: ["Ovaries", "Testes", "Uterus", "Fallopian tube"],
        answer: "Ovaries"
      },
      {
        q: "The structure that carries sperm from the testes to the urethra is —",
        options: ["Sperm duct", "Vas deferens", "Oviduct", "Ejaculatory duct"],
        answer: "Vas deferens"
      },
      {
        q: "Which hormone triggers ovulation in females?",
        options: ["LH (Luteinizing hormone)", "FSH (Follicle stimulating hormone)", "Testosterone", "Estrogen"],
        answer: "LH (Luteinizing hormone)"
      },
      {
        q: "Which hormone is mainly responsible for the development of male secondary sexual characteristics?",
        options: ["Testosterone", "Oestrogen", "Progesterone", "LH"],
        answer: "Testosterone"
      },
      {
        q: "Which hormone maintains the uterine lining for pregnancy?",
        options: ["Progesterone", "Oestrogen", "Testosterone", "FSH"],
        answer: "Progesterone"
      },
      {
        q: "The tube that connects the ovary to the uterus is called —",
        options: ["Fallopian tube", "Oviduct", "Urethra", "Vas deferens"],
        answer: "Fallopian tube"
      },
      {
        q: "The site where fertilization usually occurs in humans is —",
        options: ["Fallopian tube", "Ovary", "Uterus", "Vagina"],
        answer: "Fallopian tube"
      },
      {
        q: "A zygote develops into an embryo through the process of —",
        options: ["Mitosis", "Meiosis", "Fertilization", "Pollination"],
        answer: "Mitosis"
      },
      {
        q: "Which structure provides nutrients to the developing embryo in humans?",
        options: ["Placenta", "Umbilical cord", "Amniotic sac", "Fallopian tube"],
        answer: "Placenta"
      },
      {
        q: "The period from fertilization to birth in humans is called —",
        options: ["Gestation", "Ovulation", "Fertilization", "Parturition"],
        answer: "Gestation"
      },
      {
        q: "Which of the following is a method of vegetative reproduction in plants?",
        options: ["Cutting", "Pollination", "Fertilization", "Spore formation"],
        answer: "Cutting"
      }
    ]
  },
  
  {
    topic: "Reproduction 2",
    questions: [
      {
        q: "Which reproductive strategy produces genetically identical offspring?",
        options: ["Asexual reproduction", "Sexual reproduction", "Cross-fertilization", "Internal fertilization"],
        answer: "Asexual reproduction"
      },
      {
        q: "In flowering plants, male gametes are found in —",
        options: ["Pollen grains", "Ovules", "Petals", "Sepals"],
        answer: "Pollen grains"
      },
      {
        q: "In flowering plants, female gametes are found in —",
        options: ["Ovules", "Pollen grains", "Stamens", "Sepals"],
        answer: "Ovules"
      },
      {
        q: "Which type of fertilization occurs outside the female body?",
        options: ["External fertilization", "Internal fertilization", "Asexual reproduction", "Pollination"],
        answer: "External fertilization"
      },
      {
        q: "Which part of the male reproductive system stores sperm temporarily?",
        options: ["Epididymis", "Testes", "Seminal vesicle", "Prostate gland"],
        answer: "Epididymis"
      },
      {
        q: "Which hormone stimulates sperm production in males?",
        options: ["FSH", "LH", "Progesterone", "Oestrogen"],
        answer: "FSH"
      },
      {
        q: "The process by which an egg is released from the ovary is called —",
        options: ["Ovulation", "Fertilization", "Menstruation", "Gestation"],
        answer: "Ovulation"
      },
      {
        q: "Fertilization leads to the formation of a —",
        options: ["Zygote", "Embryo", "Fetus", "Placenta"],
        answer: "Zygote"
      },
      {
        q: "The sac that surrounds the developing embryo and contains fluid is —",
        options: ["Amniotic sac", "Placenta", "Umbilical cord", "Fallopian tube"],
        answer: "Amniotic sac"
      },
      {
        q: "Which structure connects the fetus to the placenta?",
        options: ["Umbilical cord", "Fallopian tube", "Cervix", "Vagina"],
        answer: "Umbilical cord"
      },
      {
        q: "Which hormone triggers milk production after childbirth?",
        options: ["Prolactin", "Oestrogen", "Progesterone", "FSH"],
        answer: "Prolactin"
      },
      {
        q: "The endometrium is shed during —",
        options: ["Menstruation", "Ovulation", "Fertilization", "Gestation"],
        answer: "Menstruation"
      },
      {
        q: "Which of these is an advantage of sexual reproduction?",
        options: ["Genetic variation", "Faster reproduction", "No gametes required", "Identical offspring"],
        answer: "Genetic variation"
      },
      {
        q: "Which plant reproduces by spores?",
        options: ["Ferns", "Maize", "Beans", "Mango"],
        answer: "Ferns"
      },
      {
        q: "Which structure in flowering plants becomes the fruit after fertilization?",
        options: ["Ovary", "Ovule", "Stigma", "Anther"],
        answer: "Ovary"
      },
      {
        q: "Which structure in plants produces male gametes?",
        options: ["Anther", "Ovary", "Style", "Stigma"],
        answer: "Anther"
      },
      {
        q: "Which of these is a function of the testes?",
        options: ["Produce sperm and testosterone", "Produce eggs", "Produce progesterone", "Store ova"],
        answer: "Produce sperm and testosterone"
      },
      {
        q: "The female reproductive organ that receives sperm during copulation is —",
        options: ["Vagina", "Uterus", "Ovary", "Fallopian tube"],
        answer: "Vagina"
      },
      {
        q: "Which reproductive method produces large numbers of offspring in a short time?",
        options: ["Asexual reproduction", "Sexual reproduction", "Cross-fertilization", "Pollination"],
        answer: "Asexual reproduction"
      },
      {
        q: "Which plant tissue is responsible for vegetative propagation?",
        options: ["Meristem", "Xylem", "Phloem", "Sclerenchyma"],
        answer: "Meristem"
      }
    ]
  },
  
  //nutrition
  
  {
    topic: "Nutrition 1",
    questions: [
      {
        q: "The process by which living organisms obtain and use food for energy is called —",
        options: ["Nutrition", "Respiration", "Photosynthesis", "Digestion"],
        answer: "Nutrition"
      },
      {
        q: "Which of the following is an example of autotrophic nutrition?",
        options: ["Green plants", "Humans", "Fungi", "Paramecium"],
        answer: "Green plants"
      },
      {
        q: "Heterotrophic nutrition involves —",
        options: ["Obtaining food from other organisms", "Making food from sunlight", "Using inorganic compounds", "Producing own food"],
        answer: "Obtaining food from other organisms"
      },
      {
        q: "The human digestive system begins at the —",
        options: ["Mouth", "Stomach", "Small intestine", "Esophagus"],
        answer: "Mouth"
      },
      {
        q: "Which enzyme in saliva begins the digestion of starch?",
        options: ["Amylase", "Lipase", "Pepsin", "Maltase"],
        answer: "Amylase"
      },
      {
        q: "The stomach secretes —",
        options: ["Hydrochloric acid and pepsin", "Amylase only", "Lipase only", "Bile and maltase"],
        answer: "Hydrochloric acid and pepsin"
      },
      {
        q: "Which organ stores bile produced by the liver?",
        options: ["Gall bladder", "Pancreas", "Small intestine", "Stomach"],
        answer: "Gall bladder"
      },
      {
        q: "Bile helps in —",
        options: ["Emulsification of fats", "Digesting proteins", "Absorption of sugars", "Breaking down starch"],
        answer: "Emulsification of fats"
      },
      {
        q: "Absorption of digested food mainly occurs in the —",
        options: ["Small intestine", "Stomach", "Large intestine", "Mouth"],
        answer: "Small intestine"
      },
      {
        q: "The finger-like projections in the small intestine that aid absorption are —",
        options: ["Villi", "Cilia", "Papillae", "Microtubules"],
        answer: "Villi"
      },
      {
        q: "Which of these nutrients is mainly used for energy?",
        options: ["Carbohydrates", "Proteins", "Vitamins", "Minerals"],
        answer: "Carbohydrates"
      },
      {
        q: "Proteins are mainly used for —",
        options: ["Growth and repair", "Energy", "Transport of gases", "Water balance"],
        answer: "Growth and repair"
      },
      {
        q: "Lipase breaks down —",
        options: ["Fats", "Proteins", "Carbohydrates", "Vitamins"],
        answer: "Fats"
      },
      {
        q: "Which part of the digestive system removes water from undigested food?",
        options: ["Large intestine", "Small intestine", "Stomach", "Rectum"],
        answer: "Large intestine"
      },
      {
        q: "Ruminant animals chew the cud to —",
        options: ["Help digest cellulose", "Drink water", "Absorb vitamins", "Store food"],
        answer: "Help digest cellulose"
      },
      {
        q: "Green plants make food in the presence of —",
        options: ["Sunlight, carbon dioxide, and water", "Oxygen only", "Nitrogen only", "Glucose only"],
        answer: "Sunlight, carbon dioxide, and water"
      },
      {
        q: "The green pigment that traps light energy is —",
        options: ["Chlorophyll", "Carotene", "Xanthophyll", "Haemoglobin"],
        answer: "Chlorophyll"
      },
      {
        q: "Which of these is a deficiency disease caused by lack of Vitamin C?",
        options: ["Scurvy", "Rickets", "Beriberi", "Anaemia"],
        answer: "Scurvy"
      },
      {
        q: "Which mineral is essential for the formation of hemoglobin?",
        options: ["Iron", "Calcium", "Magnesium", "Potassium"],
        answer: "Iron"
      },
      {
        q: "Which of the following organisms feed on dead and decaying matter?",
        options: ["Saprophytes", "Parasites", "Herbivores", "Carnivores"],
        answer: "Saprophytes"
      }
    ]
  },
  
  {
    topic: "Nutrition 2",
    questions: [
      {
        q: "The process of breaking down large food molecules into smaller absorbable units is —",
        options: ["Digestion", "Respiration", "Photosynthesis", "Assimilation"],
        answer: "Digestion"
      },
      {
        q: "The chemical digestion of proteins in the stomach is done by —",
        options: ["Pepsin", "Amylase", "Lipase", "Maltase"],
        answer: "Pepsin"
      },
      {
        q: "Which organ produces digestive enzymes for the small intestine?",
        options: ["Pancreas", "Liver", "Stomach", "Gall bladder"],
        answer: "Pancreas"
      },
      {
        q: "Saliva contains mucus and which enzyme?",
        options: ["Amylase", "Pepsin", "Lipase", "Trypsin"],
        answer: "Amylase"
      },
      {
        q: "Which process moves digested food into the bloodstream?",
        options: ["Absorption", "Assimilation", "Excretion", "Ingestion"],
        answer: "Absorption"
      },
      {
        q: "The breakdown of starch into maltose is catalyzed by —",
        options: ["Amylase", "Lipase", "Pepsin", "Protease"],
        answer: "Amylase"
      },
      {
        q: "Which part of the digestive system connects the mouth to the stomach?",
        options: ["Esophagus", "Small intestine", "Large intestine", "Pharynx"],
        answer: "Esophagus"
      },
      {
        q: "The teeth adapted for cutting and biting are —",
        options: ["Incisors", "Canines", "Molars", "Premolars"],
        answer: "Incisors"
      },
      {
        q: "The teeth adapted for tearing flesh are —",
        options: ["Canines", "Incisors", "Molars", "Premolars"],
        answer: "Canines"
      },
      {
        q: "Which enzyme converts maltose to glucose?",
        options: ["Maltase", "Amylase", "Pepsin", "Lipase"],
        answer: "Maltase"
      },
      {
        q: "Ruminants have a specialized stomach called —",
        options: ["Rumen", "Omasum", "Abomasum", "All of the above"],
        answer: "All of the above"
      },
      {
        q: "Which organ stores undigested food before egestion?",
        options: ["Rectum", "Stomach", "Small intestine", "Large intestine"],
        answer: "Rectum"
      },
      {
        q: "Enzymes are important in digestion because they —",
        options: ["Speed up chemical reactions", "Provide energy", "Absorb food", "Transport nutrients"],
        answer: "Speed up chemical reactions"
      },
      {
        q: "Which vitamin prevents rickets in children?",
        options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B1"],
        answer: "Vitamin D"
      },
      {
        q: "The tissue that helps transport water in plants is —",
        options: ["Xylem", "Phloem", "Parenchyma", "Collenchyma"],
        answer: "Xylem"
      },
      {
        q: "The tissue that helps transport food in plants is —",
        options: ["Phloem", "Xylem", "Parenchyma", "Collenchyma"],
        answer: "Phloem"
      },
      {
        q: "Humans are —",
        options: ["Heterotrophs", "Autotrophs", "Saprophytes", "Parasites"],
        answer: "Heterotrophs"
      },
      {
        q: "Plants that trap and digest insects are —",
        options: ["Insectivorous", "Carnivorous", "Saprophytic", "Parasites"],
        answer: "Insectivorous"
      },
      {
        q: "Which of these is a function of the large intestine?",
        options: ["Water absorption", "Protein digestion", "Carbohydrate digestion", "Fat emulsification"],
        answer: "Water absorption"
      },
      {
        q: "Which of these is a deficiency disease caused by lack of iron?",
        options: ["Anaemia", "Scurvy", "Rickets", "Beriberi"],
        answer: "Anaemia"
      }
    ]
  },
  
  
  //basic ecology concepts
  
  {
    topic: "Basic Ecological Concepts 1",
    questions: [
      {
        q: "The study of interactions between organisms and their environment is called —",
        options: ["Ecology", "Biology", "Zoology", "Botany"],
        answer: "Ecology"
      },
      {
        q: "An ecosystem consists of —",
        options: ["Biotic and abiotic components", "Only plants", "Only animals", "Only microorganisms"],
        answer: "Biotic and abiotic components"
      },
      {
        q: "Which of the following is an abiotic factor?",
        options: ["Sunlight", "Grass", "Rabbit", "Bacteria"],
        answer: "Sunlight"
      },
      {
        q: "Which of the following is a biotic factor?",
        options: ["Trees", "Water", "Temperature", "Soil"],
        answer: "Trees"
      },
      {
        q: "Organisms that make their own food are called —",
        options: ["Producers", "Consumers", "Decomposers", "Herbivores"],
        answer: "Producers"
      },
      {
        q: "Organisms that eat other organisms for food are called —",
        options: ["Consumers", "Producers", "Decomposers", "Autotrophs"],
        answer: "Consumers"
      },
      {
        q: "Organisms that break down dead matter and recycle nutrients are —",
        options: ["Decomposers", "Producers", "Consumers", "Herbivores"],
        answer: "Decomposers"
      },
      {
        q: "A food chain shows —",
        options: ["The flow of energy from one organism to another", "All organisms in a habitat", "Population growth", "Decomposition process"],
        answer: "The flow of energy from one organism to another"
      },
      {
        q: "A food web —",
        options: ["Shows interconnected food chains", "Shows only herbivores", "Shows only carnivores", "Shows nutrient cycles"],
        answer: "Shows interconnected food chains"
      },
      {
        q: "The role of an organism in its habitat is called —",
        options: ["Niche", "Population", "Community", "Ecosystem"],
        answer: "Niche"
      },
      {
        q: "The place where an organism lives is called —",
        options: ["Habitat", "Niche", "Community", "Population"],
        answer: "Habitat"
      },
      {
        q: "All the members of the same species living in an area make up a —",
        options: ["Population", "Community", "Ecosystem", "Biosphere"],
        answer: "Population"
      },
      {
        q: "All the different populations living together in a particular area form a —",
        options: ["Community", "Population", "Ecosystem", "Biome"],
        answer: "Community"
      },
      {
        q: "An adaptation that helps animals survive in hot environments is —",
        options: ["Large ears for heat dissipation", "Thick fur", "Hibernation", "Bright colors"],
        answer: "Large ears for heat dissipation"
      },
      {
        q: "Producers in an ecosystem are usually —",
        options: ["Green plants", "Herbivores", "Carnivores", "Fungi"],
        answer: "Green plants"
      },
      {
        q: "Herbivores feed on —",
        options: ["Plants", "Animals", "Both plants and animals", "Dead matter"],
        answer: "Plants"
      },
      {
        q: "Carnivores feed on —",
        options: ["Other animals", "Plants", "Both plants and animals", "Dead matter"],
        answer: "Other animals"
      },
      {
        q: "Decomposers help to —",
        options: ["Recycle nutrients back to the soil", "Produce food", "Eat living plants", "Prey on herbivores"],
        answer: "Recycle nutrients back to the soil"
      },
      {
        q: "Which of the following shows correct energy flow in a simple food chain?",
        options: ["Grass → Grasshopper → Frog → Snake → Hawk", "Hawk → Snake → Frog → Grasshopper → Grass", "Grass → Frog → Grasshopper → Hawk → Snake", "Snake → Grass → Hawk → Frog → Grasshopper"],
        answer: "Grass → Grasshopper → Frog → Snake → Hawk"
      },
      {
        q: "The part of the ecosystem that provides light, temperature, and water is —",
        options: ["Abiotic component", "Biotic component", "Consumer", "Producer"],
        answer: "Abiotic component"
      }
    ]
  },
  
  {
    topic: "Basic Ecological Concepts 2",
    questions: [
      {
        q: "All the ecosystems on Earth make up the —",
        options: ["Biosphere", "Community", "Habitat", "Population"],
        answer: "Biosphere"
      },
      {
        q: "Organisms that feed on both plants and animals are called —",
        options: ["Omnivores", "Herbivores", "Carnivores", "Decomposers"],
        answer: "Omnivores"
      },
      {
        q: "In a pond ecosystem, which of these is a producer?",
        options: ["Algae", "Fish", "Frog", "Duck"],
        answer: "Algae"
      },
      {
        q: "In a pond ecosystem, which of these is a primary consumer?",
        options: ["Zooplankton", "Algae", "Snake", "Bird"],
        answer: "Zooplankton"
      },
      {
        q: "In a pond ecosystem, which of these is a secondary consumer?",
        options: ["Small fish", "Algae", "Zooplankton", "Duckweed"],
        answer: "Small fish"
      },
      {
        q: "Decomposers in an ecosystem include —",
        options: ["Fungi and bacteria", "Grass and algae", "Herbivores", "Carnivores"],
        answer: "Fungi and bacteria"
      },
      {
        q: "The number of individuals of a species in a given area is —",
        options: ["Population", "Community", "Niche", "Habitat"],
        answer: "Population"
      },
      {
        q: "Which of these is an example of a habitat?",
        options: ["Pond", "Herbivore", "Predator", "Algae"],
        answer: "Pond"
      },
      {
        q: "A community of organisms and their physical environment functioning together is called —",
        options: ["Ecosystem", "Population", "Niche", "Habitat"],
        answer: "Ecosystem"
      },
      {
        q: "An animal adapted to live in water has —",
        options: ["Streamlined body", "Thick fur", "Long neck", "Large ears"],
        answer: "Streamlined body"
      },
      {
        q: "Which term describes all the interacting organisms living in a particular area?",
        options: ["Community", "Population", "Ecosystem", "Biome"],
        answer: "Community"
      },
      {
        q: "The feeding relationship in an ecosystem is called a —",
        options: ["Food chain", "Population", "Habitat", "Niche"],
        answer: "Food chain"
      },
      {
        q: "The web of all interrelated food chains in a community is called a —",
        options: ["Food web", "Niche", "Habitat", "Population"],
        answer: "Food web"
      },
      {
        q: "Decomposers convert —",
        options: ["Dead organic matter into nutrients", "Water into oxygen", "Sunlight into glucose", "Animals into plants"],
        answer: "Dead organic matter into nutrients"
      },
      {
        q: "Plants that trap and digest insects are examples of —",
        options: ["Adaptation to nutrient-poor soils", "Carnivores", "Producers", "Herbivores"],
        answer: "Adaptation to nutrient-poor soils"
      },
      {
        q: "Predators play an important role in —",
        options: ["Controlling prey population", "Producing food", "Recycling nutrients", "Providing shelter"],
        answer: "Controlling prey population"
      },
      {
        q: "A desert ecosystem is characterized by —",
        options: ["Low rainfall and sparse vegetation", "High rainfall and dense vegetation", "High biodiversity", "Abundant water bodies"],
        answer: "Low rainfall and sparse vegetation"
      },
      {
        q: "Which of the following is an example of a decomposer in soil?",
        options: ["Bacteria", "Grass", "Rabbit", "Snake"],
        answer: "Bacteria"
      },
      {
        q: "Which level of the food chain receives the least energy?",
        options: ["Top carnivore", "Primary consumer", "Producer", "Secondary consumer"],
        answer: "Top carnivore"
      },
      {
        q: "The non-living factors of an ecosystem include —",
        options: ["Water, soil, temperature, light", "Plants, animals, fungi", "Predators, prey", "Parasites, decomposers"],
        answer: "Water, soil, temperature, light"
      }
    ]
  },
  
  //functioning ecosystem 
  
  {
    topic: "Functioning Ecosystem 1",
    questions: [
      {
        q: "The movement of energy through an ecosystem is usually represented by a —",
        options: ["Food chain", "Population", "Niche", "Habitat"],
        answer: "Food chain"
      },
      {
        q: "The first trophic level in a food chain is always —",
        options: ["Producers", "Primary consumers", "Secondary consumers", "Decomposers"],
        answer: "Producers"
      },
      {
        q: "Which of these is an example of a primary consumer?",
        options: ["Grasshopper", "Grass", "Frog", "Snake"],
        answer: "Grasshopper"
      },
      {
        q: "The trophic level that feeds on primary consumers is called —",
        options: ["Secondary consumers", "Producers", "Decomposers", "Tertiary consumers"],
        answer: "Secondary consumers"
      },
      {
        q: "Decomposers in an ecosystem —",
        options: ["Break down dead organisms and recycle nutrients", "Produce food", "Consume plants", "Are always herbivores"],
        answer: "Break down dead organisms and recycle nutrients"
      },
      {
        q: "A diagram showing the number of organisms at each trophic level is called —",
        options: ["Pyramid of numbers", "Food chain", "Food web", "Pyramid of energy"],
        answer: "Pyramid of numbers"
      },
      {
        q: "A diagram showing the total biomass at each trophic level is —",
        options: ["Pyramid of biomass", "Pyramid of energy", "Pyramid of numbers", "Food chain"],
        answer: "Pyramid of biomass"
      },
      {
        q: "A pyramid showing the energy content at each trophic level is called —",
        options: ["Pyramid of energy", "Pyramid of numbers", "Pyramid of biomass", "Food web"],
        answer: "Pyramid of energy"
      },
      {
        q: "Energy in an ecosystem flows —",
        options: ["From producers to consumers to decomposers", "From consumers to producers", "From decomposers to producers", "Randomly among organisms"],
        answer: "From producers to consumers to decomposers"
      },
      {
        q: "In most ecosystems, energy transfer between trophic levels is —",
        options: ["About 10%", "50%", "90%", "100%"],
        answer: "About 10%"
      },
      {
        q: "Nitrogen in ecosystems is returned to the soil mainly by —",
        options: ["Decomposers and nitrogen-fixing bacteria", "Producers", "Primary consumers", "Herbivores"],
        answer: "Decomposers and nitrogen-fixing bacteria"
      },
      {
        q: "Carbon dioxide in the atmosphere is absorbed by —",
        options: ["Plants during photosynthesis", "Animals during respiration", "Decomposers", "Herbivores"],
        answer: "Plants during photosynthesis"
      },
      {
        q: "Which of the following is a carnivore?",
        options: ["Snake", "Grasshopper", "Grass", "Algae"],
        answer: "Snake"
      },
      {
        q: "Energy that is not passed on to the next trophic level is lost as —",
        options: ["Heat", "Food", "Water", "Minerals"],
        answer: "Heat"
      },
      {
        q: "In a balanced ecosystem, producers —",
        options: ["Form the largest biomass and provide energy for consumers", "Are fewer than top carnivores", "Consume other producers", "Are decomposers"],
        answer: "Form the largest biomass and provide energy for consumers"
      },
      {
        q: "The total number of organisms at each trophic level is usually largest at —",
        options: ["Producers", "Secondary consumers", "Tertiary consumers", "Decomposers"],
        answer: "Producers"
      },
      {
        q: "Which of these is an example of a tertiary consumer?",
        options: ["Hawk", "Grasshopper", "Frog", "Grass"],
        answer: "Hawk"
      },
      {
        q: "Food webs show —",
        options: ["Interconnected feeding relationships", "Population size", "Niche of each organism", "Habitat types"],
        answer: "Interconnected feeding relationships"
      },
      {
        q: "Succession in an ecosystem leads to —",
        options: ["Climax community", "Decline of producers", "Extinction of consumers", "Loss of energy"],
        answer: "Climax community"
      },
      {
        q: "The cycling of nutrients in ecosystems ensures —",
        options: ["Continuous supply of materials for producers", "Energy loss", "Decrease in biomass", "Random feeding"],
        answer: "Continuous supply of materials for producers"
      }
    ]
  },
  
  {
    topic: "Functioning Ecosystem 2",
    questions: [
      {
        q: "Which of the following organisms is a decomposer?",
        options: ["Fungi", "Grass", "Rabbit", "Snake"],
        answer: "Fungi"
      },
      {
        q: "In a grassland ecosystem, which is a primary consumer?",
        options: ["Grasshopper", "Grass", "Lion", "Eagle"],
        answer: "Grasshopper"
      },
      {
        q: "The top carnivore in a food chain is —",
        options: ["Hawk", "Grasshopper", "Grass", "Frog"],
        answer: "Hawk"
      },
      {
        q: "Pyramids of numbers usually show —",
        options: ["Number of organisms at each trophic level", "Energy at each trophic level", "Biomass at each level", "Nutrient content"],
        answer: "Number of organisms at each trophic level"
      },
      {
        q: "Energy in ecosystems flows in —",
        options: ["One direction from producer to decomposer", "Both directions", "Randomly", "From consumer to producer"],
        answer: "One direction from producer to decomposer"
      },
      {
        q: "Which pyramid is always upright?",
        options: ["Pyramid of energy", "Pyramid of numbers", "Pyramid of biomass", "All pyramids"],
        answer: "Pyramid of energy"
      },
      {
        q: "Which pyramid may be inverted in some ecosystems?",
        options: ["Pyramid of numbers", "Pyramid of energy", "Pyramid of biomass", "None"],
        answer: "Pyramid of numbers"
      },
      {
        q: "The main source of energy for an ecosystem is —",
        options: ["Sunlight", "Soil nutrients", "Water", "Air"],
        answer: "Sunlight"
      },
      {
        q: "Decomposers recycle —",
        options: ["Nutrients from dead organisms", "Energy from producers", "Sunlight into glucose", "Water into oxygen"],
        answer: "Nutrients from dead organisms"
      },
      {
        q: "In an energy pyramid, the smallest energy is at —",
        options: ["Tertiary consumers", "Producers", "Primary consumers", "Secondary consumers"],
        answer: "Tertiary consumers"
      },
      {
        q: "Which of these is a producer in a pond ecosystem?",
        options: ["Algae", "Zooplankton", "Small fish", "Duck"],
        answer: "Algae"
      },
      {
        q: "The feeding relationship in an ecosystem is important because —",
        options: ["It maintains ecological balance", "It increases energy loss", "It reduces biodiversity", "It eliminates producers"],
        answer: "It maintains ecological balance"
      },
      {
        q: "Which of these is an example of secondary consumer?",
        options: ["Small fish", "Algae", "Zooplankton", "Duckweed"],
        answer: "Small fish"
      },
      {
        q: "Energy lost as heat at each trophic level is due to —",
        options: ["Respiration and metabolic activities", "Excretion only", "Absorption of nutrients", "Photosynthesis"],
        answer: "Respiration and metabolic activities"
      },
      {
        q: "Which statement best describes a balanced ecosystem?",
        options: ["Energy flow and nutrient cycling are maintained", "No consumers are present", "Producers are absent", "Decomposers do not exist"],
        answer: "Energy flow and nutrient cycling are maintained"
      },
      {
        q: "The recycling of carbon in ecosystems occurs through —",
        options: ["Respiration, photosynthesis, and decomposition", "Predation only", "Consumption only", "Evaporation"],
        answer: "Respiration, photosynthesis, and decomposition"
      },
      {
        q: "An ecosystem in which energy flow and nutrient cycling are most stable is —",
        options: ["Climax ecosystem", "Pioneer ecosystem", "Artificial ecosystem", "Desert ecosystem"],
        answer: "Climax ecosystem"
      },
      {
        q: "Which of the following shows correct energy transfer?",
        options: ["Grass → Grasshopper → Frog → Snake → Hawk", "Hawk → Grasshopper → Frog → Grass", "Snake → Frog → Grasshopper → Grass → Hawk", "Grass → Snake → Grasshopper → Hawk → Frog"],
        answer: "Grass → Grasshopper → Frog → Snake → Hawk"
      },
      {
        q: "The pyramid of biomass represents —",
        options: ["Total mass of organisms at each trophic level", "Energy at each trophic level", "Number of organisms", "Nutrient content"],
        answer: "Total mass of organisms at each trophic level"
      },
      {
        q: "Which factor affects the functioning of an ecosystem?",
        options: ["Availability of nutrients, light, water, and temperature", "Type of predator only", "Number of herbivores only", "Size of top carnivore only"],
        answer: "Availability of nutrients, light, water, and temperature"
      }
    ]
  },
  
  //energy transformation
  
  {
    "topic": "Energy Transformation in Nature 1",
    "questions": [
      {
        "q": "The ultimate source of energy for all living organisms is —",
        "options": ["The sun", "Glucose", "ATP", "Carbon dioxide"],
        "answer": "The sun"
      },
      {
        "q": "The process by which green plants manufacture food using light energy is called —",
        "options": ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"],
        "answer": "Photosynthesis"
      },
      {
        "q": "The energy currency of the cell is —",
        "options": ["Glucose", "ATP", "ADP", "NADP"],
        "answer": "ATP"
      },
      {
        "q": "In photosynthesis, oxygen is produced from the splitting of —",
        "options": ["Carbon dioxide", "Water", "Glucose", "ATP"],
        "answer": "Water"
      },
      {
        "q": "Which of the following organisms can carry out chemosynthesis?",
        "options": ["Fungi", "Nitrifying bacteria", "Green plants", "Protozoa"],
        "answer": "Nitrifying bacteria"
      },
      {
        "q": "The light-dependent stage of photosynthesis occurs in the —",
        "options": ["Stroma", "Grana", "Cytoplasm", "Nucleus"],
        "answer": "Grana"
      },
      {
        "q": "The correct overall equation for photosynthesis is —",
        "options": [
          "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
          "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
          "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6CO₂",
          "6CO₂ + 6H₂O → 6O₂ + 6CO₂"
        ],
        "answer": "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂"
      },
      {
        "q": "The green pigment responsible for trapping light energy in plants is —",
        "options": ["Chlorophyll", "Carotene", "Xanthophyll", "Anthocyanin"],
        "answer": "Chlorophyll"
      },
      {
        "q": "During the dark stage of photosynthesis, carbon dioxide is —",
        "options": ["Oxidized", "Reduced to glucose", "Absorbed by chlorophyll", "Released as a gas"],
        "answer": "Reduced to glucose"
      },
      {
        "q": "Which of these best explains energy flow in an ecosystem?",
        "options": [
          "It is unidirectional from the sun to producers and consumers",
          "It moves cyclically between organisms",
          "It reverses between trophic levels",
          "It remains constant at all levels"
        ],
        "answer": "It is unidirectional from the sun to producers and consumers"
      },
      {
        "q": "In an ecosystem, energy transfer between trophic levels is —",
        "options": ["100% efficient", "10% efficient", "50% efficient", "0% efficient"],
        "answer": "10% efficient"
      },
      {
        "q": "Which of the following is a product of photosynthesis?",
        "options": ["Carbon dioxide", "Glucose", "ATP", "Water"],
        "answer": "Glucose"
      },
      {
        "q": "The process by which some bacteria produce food using inorganic substances is called —",
        "options": ["Chemosynthesis", "Fermentation", "Respiration", "Decomposition"],
        "answer": "Chemosynthesis"
      },
      {
        "q": "Which of the following best represents a food chain?",
        "options": [
          "Grass → Grasshopper → Frog → Snake",
          "Frog → Grass → Snake → Hawk",
          "Hawk → Snake → Frog → Grasshopper",
          "Snake → Hawk → Grass → Frog"
        ],
        "answer": "Grass → Grasshopper → Frog → Snake"
      },
      {
        "q": "In the pyramid of energy, the largest amount of energy is found at the —",
        "options": ["Producer level", "Tertiary consumer level", "Secondary consumer level", "Decomposer level"],
        "answer": "Producer level"
      },
      {
        "q": "The stage of photosynthesis that involves photolysis of water is —",
        "options": ["Light stage", "Dark stage", "Carbon fixation", "Respiration stage"],
        "answer": "Light stage"
      },
      {
        "q": "Which of these factors does NOT affect the rate of photosynthesis?",
        "options": ["Light intensity", "Carbon dioxide concentration", "Temperature", "Wind speed"],
        "answer": "Wind speed"
      },
      {
        "q": "In an ecosystem, energy losses between trophic levels are mainly due to —",
        "options": ["Respiration and heat", "Photosynthesis", "Condensation", "Evaporation"],
        "answer": "Respiration and heat"
      },
      {
        "q": "The term 'trophic level' refers to —",
        "options": [
          "A feeding level in a food chain",
          "A level of light absorption",
          "The type of habitat of an organism",
          "The process of energy fixation"
        ],
        "answer": "A feeding level in a food chain"
      },
      {
        "q": "The energy released during respiration is used mainly for —",
        "options": ["Growth and movement", "Food storage", "Water absorption", "Oxygen intake"],
        "answer": "Growth and movement"
      }
    ]
  },
  
  {
    "topic": "Energy Transformation in Nature 2",
    "questions": [
      {
        "q": "Gross primary productivity (GPP) refers to —",
        "options": [
          "The total energy captured by producers",
          "The energy available to consumers",
          "Energy lost through respiration",
          "Energy transferred to decomposers"
        ],
        "answer": "The total energy captured by producers"
      },
      {
        "q": "Net primary productivity (NPP) is obtained by —",
        "options": [
          "Subtracting respiration loss from gross productivity",
          "Adding respiration loss to total productivity",
          "Dividing GPP by energy loss",
          "Multiplying GPP by 100"
        ],
        "answer": "Subtracting respiration loss from gross productivity"
      },
      {
        "q": "The process that converts light energy into chemical energy is —",
        "options": ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
        "answer": "Photosynthesis"
      },
      {
        "q": "Which of these gases is essential for photosynthesis?",
        "options": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "answer": "Carbon dioxide"
      },
      {
        "q": "The energy captured by producers is stored in —",
        "options": ["Chemical bonds of glucose", "Chlorophyll molecules", "ATP", "Carbon dioxide"],
        "answer": "Chemical bonds of glucose"
      },
      {
        "q": "The conversion of solar energy into food energy is known as —",
        "options": ["Energy transformation", "Bioconversion", "Photochemical conversion", "Respiratory conversion"],
        "answer": "Photochemical conversion"
      },
      {
        "q": "In a food chain, energy flow is —",
        "options": ["Unidirectional", "Cyclic", "Reversible", "Constant"],
        "answer": "Unidirectional"
      },
      {
        "q": "Energy is lost in a food chain mainly through —",
        "options": ["Respiration and heat", "Decomposition", "Photosynthesis", "Absorption"],
        "answer": "Respiration and heat"
      },
      {
        "q": "In photosynthesis, light energy is trapped by —",
        "options": ["Chlorophyll", "Mitochondria", "Carotene", "Xylem"],
        "answer": "Chlorophyll"
      },
      {
        "q": "Chemosynthetic bacteria differ from green plants in that they —",
        "options": [
          "Use chemical energy instead of light energy",
          "Do not produce glucose",
          "Cannot fix carbon dioxide",
          "Depend on sunlight"
        ],
        "answer": "Use chemical energy instead of light energy"
      },
      {
        "q": "Which of the following best represents the flow of energy in an ecosystem?",
        "options": [
          "Sun → Producer → Consumer → Decomposer",
          "Producer → Decomposer → Consumer",
          "Consumer → Producer → Sun",
          "Decomposer → Producer → Consumer"
        ],
        "answer": "Sun → Producer → Consumer → Decomposer"
      },
      {
        "q": "Energy in food chains decreases progressively because —",
        "options": [
          "Some energy is lost as heat at each level",
          "Producers store excess energy",
          "Decomposers absorb all the energy",
          "Herbivores utilize all energy"
        ],
        "answer": "Some energy is lost as heat at each level"
      },
      {
        "q": "During respiration, glucose is oxidized to produce —",
        "options": ["Carbon dioxide, water, and energy", "Oxygen and energy", "Lactic acid only", "ATP and heat only"],
        "answer": "Carbon dioxide, water, and energy"
      },
      {
        "q": "The rate of energy production in an ecosystem is called —",
        "options": ["Productivity", "Sustainability", "Efficiency", "Diversity"],
        "answer": "Productivity"
      },
      {
        "q": "An organism that derives energy directly from sunlight is a —",
        "options": ["Producer", "Consumer", "Decomposer", "Parasite"],
        "answer": "Producer"
      },
      {
        "q": "The conversion of energy during photosynthesis involves —",
        "options": ["Light energy to chemical energy", "Chemical to mechanical", "Heat to light", "Electrical to chemical"],
        "answer": "Light energy to chemical energy"
      },
      {
        "q": "The percentage of energy transferred from one trophic level to the next is approximately —",
        "options": ["10%", "50%", "25%", "100%"],
        "answer": "10%"
      },
      {
        "q": "Respiration complements photosynthesis in that it —",
        "options": [
          "Releases energy stored in glucose",
          "Produces oxygen for photosynthesis",
          "Uses sunlight to make glucose",
          "Stores light energy as ATP"
        ],
        "answer": "Releases energy stored in glucose"
      },
      {
        "q": "The process by which light energy splits water into hydrogen and oxygen is called —",
        "options": ["Photolysis", "Hydrolysis", "Oxidation", "Reduction"],
        "answer": "Photolysis"
      },
      {
        "q": "In an energy pyramid, the total energy content is greatest at the —",
        "options": ["Producer level", "Primary consumer level", "Secondary consumer level", "Tertiary consumer level"],
        "answer": "Producer level"
      }
    ]
  },
  
  
  
  //respiration and gaseous exchange 
  
  {
    "topic": "Gaseous Exchange and Respiration 1",
    "questions": [
      {
        "q": "The process by which organisms take in oxygen and give out carbon dioxide is called —",
        "options": ["Photosynthesis", "Respiration", "Gaseous exchange", "Transpiration"],
        "answer": "Gaseous exchange"
      },
      {
        "q": "The main organs of gaseous exchange in humans are the —",
        "options": ["Lungs", "Gills", "Trachea", "Skin"],
        "answer": "Lungs"
      },
      {
        "q": "Which of the following is the correct sequence for the passage of air during inhalation?",
        "options": ["Nostrils → Trachea → Bronchi → Bronchioles → Alveoli", "Bronchi → Nostrils → Alveoli → Trachea", "Alveoli → Trachea → Bronchi → Nostrils", "Trachea → Alveoli → Nostrils → Bronchi"],
        "answer": "Nostrils → Trachea → Bronchi → Bronchioles → Alveoli"
      },
      {
        "q": "In fish, gaseous exchange takes place through the —",
        "options": ["Gills", "Lungs", "Skin", "Trachea"],
        "answer": "Gills"
      },
      {
        "q": "The small air sacs in the lungs where gaseous exchange occurs are called —",
        "options": ["Bronchioles", "Alveoli", "Tracheoles", "Cilia"],
        "answer": "Alveoli"
      },
      {
        "q": "Which of these statements is true about inhalation in humans?",
        "options": [
          "The diaphragm contracts and moves downward",
          "The diaphragm relaxes and moves upward",
          "The rib cage moves downward and inward",
          "The volume of the thoracic cavity decreases"
        ],
        "answer": "The diaphragm contracts and moves downward"
      },
      {
        "q": "Which of the following organisms uses spiracles for gaseous exchange?",
        "options": ["Grasshopper", "Fish", "Frog", "Earthworm"],
        "answer": "Grasshopper"
      },
      {
        "q": "In amphibians like frogs, gaseous exchange occurs through the —",
        "options": ["Skin and lungs", "Mouth and gills", "Skin and mouth", "Lungs and gills"],
        "answer": "Skin and lungs"
      },
      {
        "q": "The oxygen-carrying pigment in the blood of mammals is —",
        "options": ["Haemoglobin", "Chlorophyll", "Myoglobin", "Carotene"],
        "answer": "Haemoglobin"
      },
      {
        "q": "In plants, gaseous exchange occurs mainly through the —",
        "options": ["Stomata", "Roots", "Xylem", "Cuticle"],
        "answer": "Stomata"
      },
      {
        "q": "During respiration, glucose is broken down to release —",
        "options": ["Energy, water, and carbon dioxide", "Oxygen and water", "Heat and glucose", "Energy only"],
        "answer": "Energy, water, and carbon dioxide"
      },
      {
        "q": "Which of the following is the main site of gaseous exchange in humans?",
        "options": ["Alveoli", "Bronchioles", "Bronchi", "Larynx"],
        "answer": "Alveoli"
      },
      {
        "q": "The process by which oxygen combines with glucose to produce energy is called —",
        "options": ["Oxidation", "Fermentation", "Reduction", "Hydrolysis"],
        "answer": "Oxidation"
      },
      {
        "q": "The energy released during respiration is stored in the form of —",
        "options": ["ATP", "ADP", "Glucose", "Lactic acid"],
        "answer": "ATP"
      },
      {
        "q": "Which of these statements about anaerobic respiration is correct?",
        "options": [
          "It occurs in the absence of oxygen",
          "It releases more energy than aerobic respiration",
          "It takes place only in plants",
          "It produces only carbon dioxide and water"
        ],
        "answer": "It occurs in the absence of oxygen"
      },
      {
        "q": "The breathing rate of an organism increases with —",
        "options": ["Increased physical activity", "Decreased temperature", "Decreased carbon dioxide", "Sleep"],
        "answer": "Increased physical activity"
      },
      {
        "q": "In yeast, the end products of anaerobic respiration are —",
        "options": ["Alcohol and carbon dioxide", "Water and energy", "Lactic acid and oxygen", "Glucose and carbon dioxide"],
        "answer": "Alcohol and carbon dioxide"
      },
      {
        "q": "The structure that prevents food from entering the trachea during swallowing is the —",
        "options": ["Epiglottis", "Glottis", "Pharynx", "Larynx"],
        "answer": "Epiglottis"
      },
      {
        "q": "Which of the following pairs are respiratory organs in an earthworm?",
        "options": ["Skin and capillaries", "Gills and skin", "Lungs and trachea", "Spiracles and tracheoles"],
        "answer": "Skin and capillaries"
      },
      {
        "q": "In humans, carbon dioxide is transported in the blood mainly as —",
        "options": ["Bicarbonate ions", "Dissolved carbon dioxide", "Carbaminohaemoglobin", "Carbonic acid"],
        "answer": "Bicarbonate ions"
      }
    ]
  },
  
  {
    "topic": "Gaseous Exchange and Respiration 2",
    "questions": [
      {
        "q": "Which of the following processes occurs during exhalation?",
        "options": [
          "The diaphragm relaxes and moves upward",
          "The rib cage moves upward and outward",
          "The volume of the thoracic cavity increases",
          "Air pressure in the lungs decreases"
        ],
        "answer": "The diaphragm relaxes and moves upward"
      },
      {
        "q": "The main function of the respiratory system is —",
        "options": ["Exchange of gases", "Circulation of blood", "Digestion of food", "Absorption of nutrients"],
        "answer": "Exchange of gases"
      },
      {
        "q": "The rate of respiration in plants is highest during —",
        "options": ["Night", "Morning", "Afternoon", "Midday"],
        "answer": "Night"
      },
      {
        "q": "In the human respiratory system, the trachea divides into two —",
        "options": ["Bronchi", "Bronchioles", "Lungs", "Alveoli"],
        "answer": "Bronchi"
      },
      {
        "q": "Which of the following organisms respires through both lungs and skin?",
        "options": ["Frog", "Toad", "Fish", "Lizard"],
        "answer": "Frog"
      },
      {
        "q": "The chemical equation for aerobic respiration is —",
        "options": [
          "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy",
          "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + energy",
          "C₆H₁₂O₆ + O₂ → CO₂ + H₂O + energy",
          "CO₂ + H₂O → C₆H₁₂O₆ + O₂"
        ],
        "answer": "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy"
      },
      {
        "q": "In humans, respiration is controlled by the —",
        "options": ["Medulla oblongata", "Cerebrum", "Cerebellum", "Spinal cord"],
        "answer": "Medulla oblongata"
      },
      {
        "q": "The breathing mechanism in humans is controlled by the —",
        "options": ["Diaphragm and intercostal muscles", "Heart and lungs", "Bronchi and alveoli", "Mouth and nose"],
        "answer": "Diaphragm and intercostal muscles"
      },
      {
        "q": "The respiratory pigment in the blood of insects is —",
        "options": ["Absent", "Haemoglobin", "Haemocyanin", "Chlorocruorin"],
        "answer": "Absent"
      },
      {
        "q": "In humans, oxygen diffuses from the alveoli into the —",
        "options": ["Capillaries", "Bronchioles", "Trachea", "Lymph"],
        "answer": "Capillaries"
      },
      {
        "q": "During anaerobic respiration in muscles, the main product is —",
        "options": ["Lactic acid", "Ethanol", "Carbon dioxide", "Water"],
        "answer": "Lactic acid"
      },
      {
        "q": "Which of these is NOT part of the human respiratory system?",
        "options": ["Oesophagus", "Bronchi", "Lungs", "Trachea"],
        "answer": "Oesophagus"
      },
      {
        "q": "The trachea is supported by —",
        "options": ["C-shaped cartilage rings", "Smooth muscles", "Bone segments", "Elastic tissues"],
        "answer": "C-shaped cartilage rings"
      },
      {
        "q": "In respiration, the energy released is used mainly for —",
        "options": ["Cellular activities", "Reproduction", "Food storage", "Photosynthesis"],
        "answer": "Cellular activities"
      },
      {
        "q": "In insects, air enters the body through —",
        "options": ["Spiracles", "Trachea", "Lungs", "Cuticle"],
        "answer": "Spiracles"
      },
      {
        "q": "In plants, oxygen used for respiration is obtained from the —",
        "options": ["Atmosphere", "Soil", "Roots", "Phloem"],
        "answer": "Atmosphere"
      },
      {
        "q": "Which of the following processes is common to both plants and animals?",
        "options": ["Respiration", "Photosynthesis", "Transpiration", "Nitrogen fixation"],
        "answer": "Respiration"
      },
      {
        "q": "The difference between respiration and breathing is that —",
        "options": [
          "Breathing is a physical process while respiration is chemical",
          "Respiration involves lungs only",
          "Breathing occurs only in plants",
          "Respiration does not release energy"
        ],
        "answer": "Breathing is a physical process while respiration is chemical"
      },
      {
        "q": "Which of the following occurs during inhalation?",
        "options": [
          "Air moves into the lungs",
          "Air moves out of the lungs",
          "The diaphragm moves upward",
          "The rib cage moves inward"
        ],
        "answer": "Air moves into the lungs"
      },
      {
        "q": "The waste product of respiration that is excreted through the lungs is —",
        "options": ["Carbon dioxide", "Water", "Lactic acid", "Oxygen"],
        "answer": "Carbon dioxide"
      }
    ]
  },
  
  //sense organ
  
  {
  "topic": "Sense Organs",
  "questions": [
    {
      "q": "The organ responsible for vision in humans is the —",
      "options": ["Eye", "Ear", "Nose", "Skin"],
      "answer": "Eye"
    },
    {
      "q": "The part of the eye that controls the amount of light entering is the —",
      "options": ["Cornea", "Iris", "Retina", "Lens"],
      "answer": "Iris"
    },
    {
      "q": "The light-sensitive layer of the eye where images are formed is the —",
      "options": ["Cornea", "Lens", "Retina", "Sclera"],
      "answer": "Retina"
    },
    {
      "q": "Which part of the ear is responsible for detecting sound vibrations?",
      "options": ["Cochlea", "Eustachian tube", "Auditory canal", "Semicircular canals"],
      "answer": "Cochlea"
    },
    {
      "q": "The semicircular canals of the ear help in maintaining —",
      "options": ["Hearing", "Balance", "Vision", "Smell"],
      "answer": "Balance"
    },
    {
      "q": "The taste buds are located mainly on the —",
      "options": ["Tongue", "Roof of mouth", "Teeth", "Pharynx"],
      "answer": "Tongue"
    },
    {
      "q": "The olfactory receptors responsible for smell are located in the —",
      "options": ["Nasal cavity", "Tongue", "Throat", "Larynx"],
      "answer": "Nasal cavity"
    },
    {
      "q": "Which type of skin receptor detects pressure and vibration?",
      "options": ["Meissner's corpuscles", "Pacinian corpuscles", "Thermoreceptors", "Nociceptors"],
      "answer": "Pacinian corpuscles"
    },
    {
      "q": "The lens of the eye changes shape during focusing through the action of the —",
      "options": ["Ciliary muscles", "Iris", "Cornea", "Retina"],
      "answer": "Ciliary muscles"
    },
    {
      "q": "The condition in which the eye cannot focus on distant objects is called —",
      "options": ["Myopia", "Hyperopia", "Astigmatism", "Presbyopia"],
      "answer": "Myopia"
    },
    {
      "q": "The transparent, curved structure at the front of the eye that refracts light is the —",
      "options": ["Cornea", "Lens", "Sclera", "Retina"],
      "answer": "Cornea"
    },
    {
      "q": "The part of the ear that equalizes air pressure between the middle ear and the atmosphere is the —",
      "options": ["Eustachian tube", "Cochlea", "Auricle", "Semicircular canals"],
      "answer": "Eustachian tube"
    },
    {
      "q": "Which part of the retina contains the highest concentration of photoreceptors for sharp vision?",
      "options": ["Fovea centralis", "Blind spot", "Macula lutea", "Optic disc"],
      "answer": "Fovea centralis"
    },
    {
      "q": "The auditory ossicles of the middle ear include —",
      "options": ["Malleus, Incus, Stapes", "Cochlea, Malleus, Incus", "Stapes, Cochlea, Semicircular canals", "Malleus, Stapes, Cochlea"],
      "answer": "Malleus, Incus, Stapes"
    },
    {
      "q": "Which type of photoreceptor in the eye is sensitive to dim light?",
      "options": ["Rods", "Cones", "Bipolar cells", "Ganglion cells"],
      "answer": "Rods"
    },
    {
      "q": "Which photoreceptors are responsible for color vision?",
      "options": ["Cones", "Rods", "Ganglion cells", "Amacrine cells"],
      "answer": "Cones"
    },
    {
      "q": "The outer ear that collects sound waves is called the —",
      "options": ["Auricle", "Cochlea", "Pinna", "Eardrum"],
      "answer": "Auricle"
    },
    {
      "q": "The organ responsible for detecting equilibrium and movement in the inner ear is the —",
      "options": ["Semicircular canals", "Cochlea", "Auditory canal", "Eustachian tube"],
      "answer": "Semicircular canals"
    },
    {
      "q": "The sense organ responsible for detecting touch, pain, and temperature is the —",
      "options": ["Skin", "Eye", "Ear", "Tongue"],
      "answer": "Skin"
    },
    {
      "q": "The area of the tongue most sensitive to sweetness is at the —",
      "options": ["Tip", "Sides", "Back", "Middle"],
      "answer": "Tip"
    }
  ]
},

  //
  
  //economical management 
  
  {
    "topic": "Energy Transformation in Nature 1",
    "questions": [
      {
        "q": "The ultimate source of energy for all living organisms is —",
        "options": ["The sun", "Glucose", "ATP", "Carbon dioxide"],
        "answer": "The sun"
      },
      {
        "q": "The process by which green plants manufacture food using light energy is called —",
        "options": ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"],
        "answer": "Photosynthesis"
      },
      {
        "q": "The energy currency of the cell is —",
        "options": ["Glucose", "ATP", "ADP", "NADP"],
        "answer": "ATP"
      },
      {
        "q": "In photosynthesis, oxygen is produced from the splitting of —",
        "options": ["Carbon dioxide", "Water", "Glucose", "ATP"],
        "answer": "Water"
      },
      {
        "q": "Which of the following organisms can carry out chemosynthesis?",
        "options": ["Fungi", "Nitrifying bacteria", "Green plants", "Protozoa"],
        "answer": "Nitrifying bacteria"
      },
      {
        "q": "The light-dependent stage of photosynthesis occurs in the —",
        "options": ["Stroma", "Grana", "Cytoplasm", "Nucleus"],
        "answer": "Grana"
      },
      {
        "q": "The correct overall equation for photosynthesis is —",
        "options": [
          "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
          "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
          "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6CO₂",
          "6CO₂ + 6H₂O → 6O₂ + 6CO₂"
        ],
        "answer": "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂"
      },
      {
        "q": "The green pigment responsible for trapping light energy in plants is —",
        "options": ["Chlorophyll", "Carotene", "Xanthophyll", "Anthocyanin"],
        "answer": "Chlorophyll"
      },
      {
        "q": "During the dark stage of photosynthesis, carbon dioxide is —",
        "options": ["Oxidized", "Reduced to glucose", "Absorbed by chlorophyll", "Released as a gas"],
        "answer": "Reduced to glucose"
      },
      {
        "q": "Which of these best explains energy flow in an ecosystem?",
        "options": [
          "It is unidirectional from the sun to producers and consumers",
          "It moves cyclically between organisms",
          "It reverses between trophic levels",
          "It remains constant at all levels"
        ],
        "answer": "It is unidirectional from the sun to producers and consumers"
      },
      {
        "q": "In an ecosystem, energy transfer between trophic levels is —",
        "options": ["100% efficient", "10% efficient", "50% efficient", "0% efficient"],
        "answer": "10% efficient"
      },
      {
        "q": "Which of the following is a product of photosynthesis?",
        "options": ["Carbon dioxide", "Glucose", "ATP", "Water"],
        "answer": "Glucose"
      },
      {
        "q": "The process by which some bacteria produce food using inorganic substances is called —",
        "options": ["Chemosynthesis", "Fermentation", "Respiration", "Decomposition"],
        "answer": "Chemosynthesis"
      },
      {
        "q": "Which of the following best represents a food chain?",
        "options": [
          "Grass → Grasshopper → Frog → Snake",
          "Frog → Grass → Snake → Hawk",
          "Hawk → Snake → Frog → Grasshopper",
          "Snake → Hawk → Grass → Frog"
        ],
        "answer": "Grass → Grasshopper → Frog → Snake"
      },
      {
        "q": "In the pyramid of energy, the largest amount of energy is found at the —",
        "options": ["Producer level", "Tertiary consumer level", "Secondary consumer level", "Decomposer level"],
        "answer": "Producer level"
      },
      {
        "q": "The stage of photosynthesis that involves photolysis of water is —",
        "options": ["Light stage", "Dark stage", "Carbon fixation", "Respiration stage"],
        "answer": "Light stage"
      },
      {
        "q": "Which of these factors does NOT affect the rate of photosynthesis?",
        "options": ["Light intensity", "Carbon dioxide concentration", "Temperature", "Wind speed"],
        "answer": "Wind speed"
      },
      {
        "q": "In an ecosystem, energy losses between trophic levels are mainly due to —",
        "options": ["Respiration and heat", "Photosynthesis", "Condensation", "Evaporation"],
        "answer": "Respiration and heat"
      },
      {
        "q": "The term 'trophic level' refers to —",
        "options": [
          "A feeding level in a food chain",
          "A level of light absorption",
          "The type of habitat of an organism",
          "The process of energy fixation"
        ],
        "answer": "A feeding level in a food chain"
      },
      {
        "q": "The energy released during respiration is used mainly for —",
        "options": ["Growth and movement", "Food storage", "Water absorption", "Oxygen intake"],
        "answer": "Growth and movement"
      }
    ]
  },
  
  {
    "topic": "Energy Transformation in Nature 2",
    "questions": [
      {
        "q": "Gross primary productivity (GPP) refers to —",
        "options": [
          "The total energy captured by producers",
          "The energy available to consumers",
          "Energy lost through respiration",
          "Energy transferred to decomposers"
        ],
        "answer": "The total energy captured by producers"
      },
      {
        "q": "Net primary productivity (NPP) is obtained by —",
        "options": [
          "Subtracting respiration loss from gross productivity",
          "Adding respiration loss to total productivity",
          "Dividing GPP by energy loss",
          "Multiplying GPP by 100"
        ],
        "answer": "Subtracting respiration loss from gross productivity"
      },
      {
        "q": "The process that converts light energy into chemical energy is —",
        "options": ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
        "answer": "Photosynthesis"
      },
      {
        "q": "Which of these gases is essential for photosynthesis?",
        "options": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "answer": "Carbon dioxide"
      },
      {
        "q": "The energy captured by producers is stored in —",
        "options": ["Chemical bonds of glucose", "Chlorophyll molecules", "ATP", "Carbon dioxide"],
        "answer": "Chemical bonds of glucose"
      },
      {
        "q": "The conversion of solar energy into food energy is known as —",
        "options": ["Energy transformation", "Bioconversion", "Photochemical conversion", "Respiratory conversion"],
        "answer": "Photochemical conversion"
      },
      {
        "q": "In a food chain, energy flow is —",
        "options": ["Unidirectional", "Cyclic", "Reversible", "Constant"],
        "answer": "Unidirectional"
      },
      {
        "q": "Energy is lost in a food chain mainly through —",
        "options": ["Respiration and heat", "Decomposition", "Photosynthesis", "Absorption"],
        "answer": "Respiration and heat"
      },
      {
        "q": "In photosynthesis, light energy is trapped by —",
        "options": ["Chlorophyll", "Mitochondria", "Carotene", "Xylem"],
        "answer": "Chlorophyll"
      },
      {
        "q": "Chemosynthetic bacteria differ from green plants in that they —",
        "options": [
          "Use chemical energy instead of light energy",
          "Do not produce glucose",
          "Cannot fix carbon dioxide",
          "Depend on sunlight"
        ],
        "answer": "Use chemical energy instead of light energy"
      },
      {
        "q": "Which of the following best represents the flow of energy in an ecosystem?",
        "options": [
          "Sun → Producer → Consumer → Decomposer",
          "Producer → Decomposer → Consumer",
          "Consumer → Producer → Sun",
          "Decomposer → Producer → Consumer"
        ],
        "answer": "Sun → Producer → Consumer → Decomposer"
      },
      {
        "q": "Energy in food chains decreases progressively because —",
        "options": [
          "Some energy is lost as heat at each level",
          "Producers store excess energy",
          "Decomposers absorb all the energy",
          "Herbivores utilize all energy"
        ],
        "answer": "Some energy is lost as heat at each level"
      },
      {
        "q": "During respiration, glucose is oxidized to produce —",
        "options": ["Carbon dioxide, water, and energy", "Oxygen and energy", "Lactic acid only", "ATP and heat only"],
        "answer": "Carbon dioxide, water, and energy"
      },
      {
        "q": "The rate of energy production in an ecosystem is called —",
        "options": ["Productivity", "Sustainability", "Efficiency", "Diversity"],
        "answer": "Productivity"
      },
      {
        "q": "An organism that derives energy directly from sunlight is a —",
        "options": ["Producer", "Consumer", "Decomposer", "Parasite"],
        "answer": "Producer"
      },
      {
        "q": "The conversion of energy during photosynthesis involves —",
        "options": ["Light energy to chemical energy", "Chemical to mechanical", "Heat to light", "Electrical to chemical"],
        "answer": "Light energy to chemical energy"
      },
      {
        "q": "The percentage of energy transferred from one trophic level to the next is approximately —",
        "options": ["10%", "50%", "25%", "100%"],
        "answer": "10%"
      },
      {
        "q": "Respiration complements photosynthesis in that it —",
        "options": [
          "Releases energy stored in glucose",
          "Produces oxygen for photosynthesis",
          "Uses sunlight to make glucose",
          "Stores light energy as ATP"
        ],
        "answer": "Releases energy stored in glucose"
      },
      {
        "q": "The process by which light energy splits water into hydrogen and oxygen is called —",
        "options": ["Photolysis", "Hydrolysis", "Oxidation", "Reduction"],
        "answer": "Photolysis"
      },
      {
        "q": "In an energy pyramid, the total energy content is greatest at the —",
        "options": ["Producer level", "Primary consumer level", "Secondary consumer level", "Tertiary consumer level"],
        "answer": "Producer level"
      }
    ]
  },
  
  //ecology of population 
  
  {
    "topic": "Ecology of Population",
    "questions": [
      {
        q: "A population in ecology refers to —",
        options: [
          "All the organisms living in an area",
          "Different species interacting in an area",
          "A group of individuals of the same species living in a habitat",
          "The non-living components of an ecosystem"
        ],
        answer: "A group of individuals of the same species living in a habitat"
      },
      {
        q: "The number of individuals of a species per unit area is called —",
        options: [
          "Population density",
          "Population size",
          "Population distribution",
          "Population growth"
        ],
        answer: "Population density"
      },
      {
        q: "The total number of individuals of a species in a given area is known as —",
        options: ["Population size", "Population density", "Carrying capacity", "Frequency"],
        answer: "Population size"
      },
      {
        q: "Which of the following describes how individuals are arranged in a habitat?",
        options: [
          "Population distribution",
          "Population dynamics",
          "Carrying capacity",
          "Age structure"
        ],
        answer: "Population distribution"
      },
      {
        q: "When a population grows until resources are no longer sufficient, it reaches its —",
        options: [
          "Equilibrium point",
          "Carrying capacity",
          "Climax community",
          "Saturation level"
        ],
        answer: "Carrying capacity"
      },
      {
        q: "The main factors that cause population increase are —",
        options: ["Birth and immigration", "Death and emigration", "Aging and disease", "Competition and predation"],
        answer: "Birth and immigration"
      },
      {
        q: "Population decrease can be caused by —",
        options: ["Birth and immigration", "Death and emigration", "Growth and reproduction", "Symbiosis and parasitism"],
        answer: "Death and emigration"
      },
      {
        q: "Which of these is a biotic factor affecting population size?",
        options: ["Temperature", "Predation", "Rainfall", "Light intensity"],
        answer: "Predation"
      },
      {
        q: "Abiotic factors that can limit population growth include —",
        options: ["Competition and predation", "Temperature and rainfall", "Reproduction and migration", "Symbiosis and disease"],
        answer: "Temperature and rainfall"
      },
      {
        q: "The rate at which a population grows over time is called —",
        options: ["Population dynamics", "Population frequency", "Growth rate", "Birth rate"],
        answer: "Growth rate"
      },
      {
        q: "A graph showing population growth that levels off due to limited resources is —",
        options: ["S-shaped curve", "J-shaped curve", "Linear curve", "Exponential curve"],
        answer: "S-shaped curve"
      },
      {
        q: "A population that grows rapidly without limitation follows a —",
        options: ["J-shaped curve", "S-shaped curve", "Bell-shaped curve", "Decline curve"],
        answer: "J-shaped curve"
      },
      {
        q: "Which of these represents the number of births per 1,000 individuals per year?",
        options: ["Birth rate", "Death rate", "Growth rate", "Carrying rate"],
        answer: "Birth rate"
      },
      {
        q: "The number of deaths per 1,000 individuals in a population per year is called —",
        options: ["Mortality rate", "Natality rate", "Immigration rate", "Carrying capacity"],
        answer: "Mortality rate"
      },
      {
        q: "Overcrowding in a population may lead to —",
        options: ["Increased food supply", "Competition and stress", "Stable ecosystem", "Increase in habitat size"],
        answer: "Competition and stress"
      },
      {
        q: "The introduction of new individuals into a population from another area is —",
        options: ["Immigration", "Emigration", "Birth rate", "Colonization"],
        answer: "Immigration"
      },
      {
        q: "The movement of individuals out of a population is called —",
        options: ["Immigration", "Emigration", "Migration", "Dispersion"],
        answer: "Emigration"
      },
      {
        q: "A stable population occurs when —",
        options: [
          "Birth rate equals death rate",
          "Birth rate is greater than death rate",
          "Immigration is more than emigration",
          "Emigration is greater than immigration"
        ],
        answer: "Birth rate equals death rate"
      },
      {
        q: "The study of population size, structure, and growth is called —",
        options: ["Ecology", "Demography", "Taxonomy", "Population genetics"],
        answer: "Demography"
      },
      {
        q: "The number of species in a given population is referred to as —",
        options: ["Species richness", "Population density", "Species distribution", "Frequency"],
        answer: "Species richness"
      }
    ]
  },
  
  //relevance of biology to agric
  
  {
    "topic": "Relevance of Biology to Agriculture",
    "questions": [
      {
        "q": "Which of the following best explains the relationship between biology and agriculture?",
        "options": [
          "Biology provides knowledge of life processes useful in crop and animal production",
          "Biology focuses only on laboratory work while agriculture focuses on the farm",
          "Agriculture is unrelated to biological science",
          "Biology deals only with humans, not plants or animals"
        ],
        "answer": "Biology provides knowledge of life processes useful in crop and animal production"
      },
      {
        "q": "The study of heredity in biology helps agriculture by —",
        "options": [
          "Improving crop and animal breeds through selection and hybridization",
          "Making animals grow faster without food",
          "Reducing rainfall and pest attack",
          "Increasing soil fertility directly"
        ],
        "answer": "Improving crop and animal breeds through selection and hybridization"
      },
      {
        "q": "Knowledge of ecology is useful in agriculture because it helps farmers —",
        "options": [
          "Understand interactions between crops, animals, and their environment",
          "Increase rainfall in dry areas",
          "Make crops grow without fertilizers",
          "Predict global weather accurately"
        ],
        "answer": "Understand interactions between crops, animals, and their environment"
      },
      {
        "q": "Biology contributes to pest and disease control through —",
        "options": [
          "The study of pathogens and life cycles of pests",
          "The use of random chemicals",
          "Ignoring natural enemies of pests",
          "Planting the same crop continuously"
        ],
        "answer": "The study of pathogens and life cycles of pests"
      },
      {
        "q": "Which of the following biological practices can improve soil fertility?",
        "options": [
          "Nitrogen fixation by bacteria in legumes",
          "Frequent use of pesticides",
          "Burning of crop residues",
          "Continuous cropping"
        ],
        "answer": "Nitrogen fixation by bacteria in legumes"
      },
      {
        "q": "Knowledge of photosynthesis helps farmers to —",
        "options": [
          "Improve crop yield by optimizing light and nutrient conditions",
          "Increase soil acidity",
          "Reduce water intake by crops",
          "Stop plant respiration"
        ],
        "answer": "Improve crop yield by optimizing light and nutrient conditions"
      },
      {
        "q": "The study of animal physiology helps farmers to —",
        "options": [
          "Understand animal nutrition and reproduction",
          "Make animals photosynthesize",
          "Increase animal lifespan without food",
          "Eliminate animal instincts"
        ],
        "answer": "Understand animal nutrition and reproduction"
      },
      {
        "q": "Biotechnology is relevant to agriculture because it —",
        "options": [
          "Produces genetically improved crops and animals",
          "Destroys microorganisms in soil",
          "Reduces soil water-holding capacity",
          "Prevents cross-pollination"
        ],
        "answer": "Produces genetically improved crops and animals"
      },
      {
        "q": "Which of the following biological processes is most important for maintaining soil fertility naturally?",
        "options": [
          "Decomposition of organic matter by microorganisms",
          "Evaporation of soil water",
          "Deforestation",
          "Use of inorganic fertilizers only"
        ],
        "answer": "Decomposition of organic matter by microorganisms"
      },
      {
        "q": "Genetic engineering in agriculture helps to —",
        "options": [
          "Produce disease-resistant and high-yielding crops",
          "Eliminate soil microorganisms",
          "Reduce sunlight absorption by plants",
          "Stop animal reproduction"
        ],
        "answer": "Produce disease-resistant and high-yielding crops"
      },
      {
        "q": "The study of microorganisms in biology is useful to agriculture because —",
        "options": [
          "Some microorganisms improve soil fertility and aid decomposition",
          "All microorganisms cause plant and animal diseases",
          "Microorganisms reduce soil nutrients",
          "They make crops wilt faster"
        ],
        "answer": "Some microorganisms improve soil fertility and aid decomposition"
      },
      {
        "q": "Knowledge of genetics is applied in agriculture mainly to —",
        "options": [
          "Improve crop and livestock varieties",
          "Stop crossbreeding completely",
          "Reduce food production",
          "Destroy weeds"
        ],
        "answer": "Improve crop and livestock varieties"
      },
      {
        "q": "Which of the following helps farmers identify and control livestock diseases?",
        "options": [
          "Veterinary biology",
          "Botany",
          "Plant pathology",
          "Genetic engineering"
        ],
        "answer": "Veterinary biology"
      },
      {
        "q": "Biology helps in fish farming by —",
        "options": [
          "Understanding fish breeding, nutrition, and water ecology",
          "Reducing oxygen in water",
          "Preventing reproduction of fish",
          "Increasing salt content of ponds"
        ],
        "answer": "Understanding fish breeding, nutrition, and water ecology"
      },
      {
        "q": "Which biological principle supports the rotation of leguminous crops with non-leguminous ones?",
        "options": [
          "Nitrogen fixation",
          "Phototropism",
          "Transpiration",
          "Mimicry"
        ],
        "answer": "Nitrogen fixation"
      },
      {
        "q": "The study of soil organisms in biology helps in —",
        "options": [
          "Improving soil structure and fertility",
          "Increasing soil erosion",
          "Decreasing water infiltration",
          "Killing beneficial microbes"
        ],
        "answer": "Improving soil structure and fertility"
      },
      {
        "q": "Knowledge of reproduction in biology helps farmers —",
        "options": [
          "Select better breeding methods for animals and plants",
          "Reduce animal growth",
          "Prevent crop germination",
          "Increase pest population"
        ],
        "answer": "Select better breeding methods for animals and plants"
      },
      {
        "q": "The study of bacteria like *Rhizobium* is important to agriculture because they —",
        "options": [
          "Fix nitrogen in the soil",
          "Cause plant wilting",
          "Absorb oxygen from roots",
          "Reduce soil pH"
        ],
        "answer": "Fix nitrogen in the soil"
      },
      {
        "q": "Biology aids agricultural mechanization by —",
        "options": [
          "Providing knowledge of body structure and function in animals used for labor",
          "Eliminating the need for machines",
          "Causing animal exhaustion",
          "Reducing mechanical efficiency"
        ],
        "answer": "Providing knowledge of body structure and function in animals used for labor"
      },
      {
        "q": "Which of these shows how biology improves food production?",
        "options": [
          "Selective breeding and improved farming techniques",
          "Deforestation and overgrazing",
          "Burning farm residues",
          "Uncontrolled pesticide use"
        ],
        "answer": "Selective breeding and improved farming techniques"
      }
    ]
  },
  
  
  
    ],
    
    Economics: [
      {
        topic: "Meaning, Scope and Nature of Economics",
        questions: [
          {
  q: "Which of the following best defines Economics?",
  options: ["The study of how people make choices to satisfy unlimited wants with limited resources", "The study of how to make profit", "The study of money only", "The study of government policies"],
  answer: "The study of how people make choices to satisfy unlimited wants with limited resources"
  },
  {
  q: "Who is regarded as the father of modern Economics?",
  options: ["John Maynard Keynes", "David Ricardo", "Adam Smith", "Karl Marx"],
  answer: "Adam Smith"
  },
  {
  q: "The book 'The Wealth of Nations' was written by:",
  options: ["David Ricardo", "Adam Smith", "Alfred Marshall", "John Keynes"],
  answer: "Adam Smith"
  },
  {
  q: "Economics is classified as a:",
  options: ["Pure science", "Social science", "Natural science", "Physical science"],
  answer: "Social science"
  },
  {
  q: "Which of the following statements is NOT true of economics?",
  options: ["It deals with human behaviour", "It studies scarcity and choice", "It focuses only on money", "It analyses production and consumption"],
  answer: "It focuses only on money"
  },
  {
  q: "Which branch of Economics studies the behaviour of individual consumers and firms?",
  options: ["Macroeconomics", "Microeconomics", "International Economics", "Development Economics"],
  answer: "Microeconomics"
  },
  {
  q: "The branch of Economics that studies the entire economy is:",
  options: ["Macroeconomics", "Microeconomics", "Applied Economics", "Monetary Economics"],
  answer: "Macroeconomics"
  },
  {
  q: "The main problem of Economics is:",
  options: ["Production", "Distribution", "Scarcity", "Consumption"],
  answer: "Scarcity"
  },
  {
  q: "Which of the following best explains the concept of choice?",
  options: ["Limited resources and unlimited wants", "Unlimited resources and limited wants", "Equal wants and resources", "Government intervention"],
  answer: "Limited resources and unlimited wants"
  },
  {
  q: "The central focus of Economics is to:",
  options: ["Increase government income", "Solve the problem of scarcity", "Promote industrialization", "Study political systems"],
  answer: "Solve the problem of scarcity"
  },
  {
  q: "The study of how human beings satisfy their wants with limited means is called:",
  options: ["Sociology", "Economics", "Political Science", "Accounting"],
  answer: "Economics"
  },
  {
  q: "Which of the following is NOT a basic economic activity?",
  options: ["Production", "Exchange", "Consumption", "Transportation"],
  answer: "Transportation"
  },
  {
  q: "Economics as a science is considered social because it:",
  options: ["Studies human behaviour", "Deals only with experiments", "Involves laboratory tests", "Focuses on chemical reactions"],
  answer: "Studies human behaviour"
  },
  {
  q: "The scarcity of resources in economics implies that:",
  options: ["Resources are unlimited", "Wants are limited", "Choices must be made", "Everything is free"],
  answer: "Choices must be made"
  },
  {
  q: "The three basic economic activities are:",
  options: ["Production, exchange and consumption", "Production, transportation and consumption", "Buying, selling and saving", "Saving, investing and banking"],
  answer: "Production, exchange and consumption"
  },
  {
  q: "Which of these is NOT part of the scope of economics?",
  options: ["Production", "Consumption", "Distribution", "Entertainment"],
  answer: "Entertainment"
  },
  {
  q: "The study of how income and wealth are distributed among people is part of:",
  options: ["Production", "Distribution", "Consumption", "Exchange"],
  answer: "Distribution"
  },
  {
  q: "An economist studies how individuals and societies:",
  options: ["Avoid work", "Use scarce resources to satisfy wants", "Make laws", "Produce entertainment"],
  answer: "Use scarce resources to satisfy wants"
  },
  {
  q: "The main tools used in economics include:",
  options: ["Graphs and tables", "Poems and essays", "Drama and songs", "Charts and novels"],
  answer: "Graphs and tables"
  },
  {
  q: "Which of the following best explains why economics is a social science?",
  options: ["It deals with natural phenomena", "It deals with human behaviour and choices", "It involves chemical experiments", "It studies celestial bodies"],
  answer: "It deals with human behaviour and choices"
  }
        ]
      },
      
      {
        topic: "Basic economical concepts",
        questions: [
          {
  q: "Economics is best defined as the study of:",
  options: ["Money and banking", "Production, distribution and consumption of goods and services", "Business management", "How to make profit"],
  answer: "Production, distribution and consumption of goods and services"
  },
  {
  q: "The fundamental economic problem is:",
  options: ["Inflation", "Scarcity", "Unemployment", "Trade"],
  answer: "Scarcity"
  },
  {
  q: "Which of the following is not a factor of production?",
  options: ["Land", "Labour", "Capital", "Money"],
  answer: "Money"
  },
  {
  q: "Opportunity cost is best described as:",
  options: ["The cost of producing goods", "The next best alternative forgone", "The total cost of production", "The price paid for a commodity"],
  answer: "The next best alternative forgone"
  },
  {
  q: "The study of individual economic units is called:",
  options: ["Macroeconomics", "Microeconomics", "Monetary economics", "Development economics"],
  answer: "Microeconomics"
  },
  {
  q: "Which of the following is a free good?",
  options: ["Water in the ocean", "Electricity", "Food", "Fuel"],
  answer: "Water in the ocean"
  },
  {
  q: "What are goods used to produce other goods called?",
  options: ["Consumer goods", "Capital goods", "Durable goods", "Public goods"],
  answer: "Capital goods"
  },
  {
  q: "In economics, wants are considered to be:",
  options: ["Limited", "Unlimited", "Few", "Fixed"],
  answer: "Unlimited"
  },
  {
  q: "The term 'utility' in economics refers to:",
  options: ["Satisfaction derived from consuming a good", "The usefulness of a product", "Profit made from a business", "The price of a good"],
  answer: "Satisfaction derived from consuming a good"
  },
  {
  q: "What is the reward for the factor of production 'labour'?",
  options: ["Wage", "Rent", "Interest", "Profit"],
  answer: "Wage"
  },
  {
  q: "Economics as a social science mainly deals with:",
  options: ["Human behaviour in relation to scarce resources", "Business organization", "Government budgeting", "Statistics and data"],
  answer: "Human behaviour in relation to scarce resources"
  },
  {
  q: "The reward for the factor of production 'capital' is:",
  options: ["Rent", "Interest", "Wage", "Profit"],
  answer: "Interest"
  },
  {
  q: "Goods that can be touched and seen are called:",
  options: ["Tangible goods", "Intangible goods", "Services", "Public goods"],
  answer: "Tangible goods"
  },
  {
  q: "The main concern of economics is how to:",
  options: ["Increase government revenue", "Allocate scarce resources efficiently", "Produce more goods", "Raise national income"],
  answer: "Allocate scarce resources efficiently"
  },
  {
  q: "A mixed economy is one in which:",
  options: ["Only the government controls production", "Only individuals own resources", "Both private and public sectors coexist", "There is no competition"],
  answer: "Both private and public sectors coexist"
  },
  {
  q: "Public goods are provided mainly because:",
  options: ["They are not profitable to private producers", "They are luxury goods", "They have low demand", "They are expensive"],
  answer: "They are not profitable to private producers"
  },
  {
  q: "The branch of economics that studies the whole economy is called:",
  options: ["Microeconomics", "Macroeconomics", "International economics", "Business economics"],
  answer: "Macroeconomics"
  },
  {
  q: "When resources are used to produce the maximum possible output, it is called:",
  options: ["Efficiency", "Scarcity", "Opportunity cost", "Inflation"],
  answer: "Efficiency"
  },
  {
  q: "Which of the following best explains the concept of choice?",
  options: ["Unlimited resources", "Scarcity of resources", "Abundance of goods", "Inflation"],
  answer: "Scarcity of resources"
  },
  {
  q: "Who is regarded as the father of modern economics?",
  options: ["John Keynes", "Adam Smith", "David Ricardo", "Karl Marx"],
  answer: "Adam Smith"
  }
        ]
      },
      
      {
        topic: "Tools of economic analysis",
        questions: [
          {
  q: "Which of the following is a common tool of economic analysis?",
  options: ["Graphs", "Poems", "Stories", "Plays"],
  answer: "Graphs"
  },
  {
  q: "Which of the following is NOT a tool of economic analysis?",
  options: ["Tables", "Diagrams", "Graphs", "Songs"],
  answer: "Songs"
  },
  {
  q: "A table used to present data in rows and columns is called a:",
  options: ["Graph", "Chart", "Table", "Equation"],
  answer: "Table"
  },
  {
  q: "Which of these best represents data using lines joining plotted points?",
  options: ["Line graph", "Bar chart", "Pie chart", "Histogram"],
  answer: "Line graph"
  },
  {
  q: "The vertical axis in a graph is usually labeled as the:",
  options: ["X-axis", "Y-axis", "Z-axis", "Horizontal axis"],
  answer: "Y-axis"
  },
  {
  q: "The horizontal axis in a graph is called the:",
  options: ["Y-axis", "X-axis", "Diagonal", "Zero line"],
  answer: "X-axis"
  },
  {
  q: "Which of the following charts represents data using circular sectors?",
  options: ["Bar chart", "Pie chart", "Histogram", "Line graph"],
  answer: "Pie chart"
  },
  {
  q: "The total angle of a pie chart is:",
  options: ["90°", "180°", "270°", "360°"],
  answer: "360°"
  },
  {
  q: "In a bar chart, bars are drawn:",
  options: ["Vertically or horizontally", "Only diagonally", "Only horizontally", "Only vertically"],
  answer: "Vertically or horizontally"
  },
  {
  q: "The type of graph used to show changes over time is the:",
  options: ["Line graph", "Pie chart", "Histogram", "Bar chart"],
  answer: "Line graph"
  },
  {
  q: "Which of the following is a major advantage of using graphs?",
  options: ["They make data easier to understand", "They require long explanations", "They reduce accuracy", "They make data confusing"],
  answer: "They make data easier to understand"
  },
  {
  q: "A table that shows the relationship between price and quantity demanded is called:",
  options: ["Demand schedule", "Supply schedule", "Price list", "Budget table"],
  answer: "Demand schedule"
  },
  {
  q: "A histogram differs from a bar chart because:",
  options: ["There are spaces between bars", "Bars are separated", "Bars touch each other", "It uses circles"],
  answer: "Bars touch each other"
  },
  {
  q: "When data are presented in words and figures, it is called:",
  options: ["Qualitative data", "Quantitative data", "Verbal data", "Textual data"],
  answer: "Quantitative data"
  },
  {
  q: "Which type of chart is best used to show parts of a whole?",
  options: ["Pie chart", "Bar chart", "Histogram", "Line graph"],
  answer: "Pie chart"
  },
  {
  q: "Which of these is NOT a reason for using statistical tools in economics?",
  options: ["To simplify data", "To present information clearly", "To analyze relationships", "To confuse students"],
  answer: "To confuse students"
  },
  {
  q: "The tool that shows the distribution of frequency within intervals is called:",
  options: ["Frequency polygon", "Histogram", "Pie chart", "Line graph"],
  answer: "Histogram"
  },
  {
  q: "Which of the following helps economists identify trends and patterns in data?",
  options: ["Graphical presentation", "Random guessing", "Storytelling", "Oral debate"],
  answer: "Graphical presentation"
  },
  {
  q: "A frequency table is used to:",
  options: ["Organize data into classes or groups", "Draw pictures", "Predict outcomes", "Store money"],
  answer: "Organize data into classes or groups"
  },
  {
  q: "Which of the following statements is TRUE about economic data presentation?",
  options: ["Graphs and charts make data easier to interpret", "Graphs make data less accurate", "Tables are not used in economics", "Charts increase confusion"],
  answer: "Graphs and charts make data easier to interpret"
  }
        ]
      },
      
      {
        topic: "Theory of demand and supply",
        questions: [
          {
  q: "What is demand in economics?",
  options: [
    "The desire for a good only",
    "The desire backed by willingness and ability to pay",
    "The ability to produce goods",
    "The total supply of goods in the market"
  ],
  answer: "The desire backed by willingness and ability to pay"
  },
  {
  q: "Which of the following best describes the law of demand?",
  options: [
    "As price increases, demand increases",
    "As price decreases, demand decreases",
    "As price increases, quantity demanded decreases",
    "Demand is not affected by price"
  ],
  answer: "As price increases, quantity demanded decreases"
  },
  {
  q: "The law of demand shows an ______ relationship between price and quantity demanded.",
  options: ["Inverse", "Direct", "Neutral", "Positive"],
  answer: "Inverse"
  },
  {
  q: "A table showing quantities of a good demanded at different prices is called:",
  options: ["Supply schedule", "Demand schedule", "Price list", "Budget table"],
  answer: "Demand schedule"
  },
  {
  q: "A graph showing the relationship between price and quantity demanded is called:",
  options: ["Demand curve", "Supply curve", "Price line", "Budget curve"],
  answer: "Demand curve"
  },
  {
  q: "The demand curve normally slopes:",
  options: ["Upward from left to right", "Downward from left to right", "Vertically", "Horizontally"],
  answer: "Downward from left to right"
  },
  {
  q: "Which of these will cause a movement along the demand curve?",
  options: ["Change in price", "Change in income", "Change in taste", "Change in population"],
  answer: "Change in price"
  },
  {
  q: "A shift of the demand curve to the right indicates:",
  options: ["Increase in demand", "Decrease in demand", "No change in demand", "Excess supply"],
  answer: "Increase in demand"
  },
  {
  q: "A shift of the demand curve to the left shows:",
  options: ["Increase in demand", "Decrease in demand", "No change", "Constant demand"],
  answer: "Decrease in demand"
  },
  {
  q: "Which of the following is NOT a determinant of demand?",
  options: ["Price of the good", "Income of consumers", "Consumer tastes", "Production technology"],
  answer: "Production technology"
  },
  {
  q: "An increase in consumers’ income will likely lead to:",
  options: ["Decrease in demand for normal goods", "Increase in demand for normal goods", "Decrease in all demands", "No effect"],
  answer: "Increase in demand for normal goods"
  },
  {
  q: "A fall in the price of a substitute good will cause the demand for the other to:",
  options: ["Increase", "Decrease", "Remain constant", "Double"],
  answer: "Decrease"
  },
  {
  q: "When two goods are used together, they are said to be:",
  options: ["Substitutes", "Complements", "Inferior goods", "Luxury goods"],
  answer: "Complements"
  },
  {
  q: "Which of these is an example of substitute goods?",
  options: ["Tea and coffee", "Car and petrol", "Pen and ink", "Spoon and plate"],
  answer: "Tea and coffee"
  },
  {
  q: "Which of these is an example of complementary goods?",
  options: ["Bread and butter", "Rice and beans", "Tea and coffee", "Shoe and hat"],
  answer: "Bread and butter"
  },
  {
  q: "When income decreases, demand for inferior goods will:",
  options: ["Increase", "Decrease", "Remain constant", "Vanish"],
  answer: "Increase"
  },
  {
  q: "Which of the following can cause a change in demand?",
  options: ["Change in consumers’ income", "Change in technology", "Change in government", "Change in cost of production"],
  answer: "Change in consumers’ income"
  },
  {
  q: "If the price of a good increases and quantity demanded remains the same, demand is said to be:",
  options: ["Elastic", "Inelastic", "Unitary", "Perfect"],
  answer: "Inelastic"
  },
  {
  q: "The responsiveness of quantity demanded to a change in price is known as:",
  options: ["Elasticity of demand", "Law of supply", "Equilibrium", "Demand schedule"],
  answer: "Elasticity of demand"
  },
  {
  q: "A demand curve that is perfectly vertical indicates:",
  options: ["Perfectly elastic demand", "Perfectly inelastic demand", "Unitary demand", "Inverse demand"],
  answer: "Perfectly inelastic demand"
  }
        ]
      }
    ],
    
    Computer: [
    {
      topic: "Introduction to Computer science",
      questions: [
        {
    q: "Which of the following best defines a computer system?",
    options: ["A machine that only stores data", "A device that accepts data, processes it, stores it and outputs information", "A mobile phone only", "A type of television"],
    answer: "A device that accepts data, processes it, stores it and outputs information"
  },
  {
    q: "Which are the three main constituents of a computer system?",
    options: ["Input, Output, Printer", "Hardware, Software, Human-ware", "Keyboard, Monitor, Mouse", "Database, Spreadsheet, Word-processor"],
    answer: "Hardware, Software, Human-ware"
  },
  {
    q: "Which characteristic is typical of a computer?",
    options: ["Slow speed", "Inaccuracy", "Versatility", "Requires manual calculation for everything"],
    answer: "Versatility"
  },
  {
    q: "Which is a hardware component of a computer system?",
    options: ["Operating system", "Word processing software", "Monitor", "Database design"],
    answer: "Monitor"
  },
  {
    q: "Which is a software component of a computer system?",
    options: ["Mouse", "Printer", "Microsoft Word", "Hard disk drive"],
    answer: "Microsoft Word"
  },
  {
    q: "What does ‘human-ware’ refer to in the context of a computer system?",
    options: ["The brain of the computer", "All the users and operators of the computer", "The software code only", "The hardware circuits"],
    answer: "All the users and operators of the computer"
  },
  {
    q: "Which of these devices is an input device?",
    options: ["Printer", "Scanner", "Monitor", "Speaker"],
    answer: "Scanner"
  },
  {
    q: "Which of these devices is an output device?",
    options: ["Keyboard", "Microphone", "Monitor", "Barcode reader"],
    answer: "Monitor"
  },
  {
    q: "Which of these is NOT part of a typical computer system?",
    options: ["Storage device", "Software application", "Keyboard", "Gas‐powered engine"],
    answer: "Gas‐powered engine"
  },
  {
    q: "What is the primary function of the Central Processing Unit (CPU) in a computer?",
    options: ["To store large files permanently", "To display graphics", "To process instructions and manage operations", "To act as an input device"],
    answer: "To process instructions and manage operations"
  },
  {
    q: "Which type of computer is typically the largest in size and capacity?",
    options: ["Personal desktop", "Laptop", "Mainframe", "Smartphone"],
    answer: "Mainframe"
  },
  {
    q: "Which of the following best describes a microcomputer?",
    options: ["A very large system used by many users simultaneously", "A small computer designed for individual use", "A handheld device only", "A network router"],
    answer: "A small computer designed for individual use"
  },
  {
    q: "Which generation of computers introduced the use of integrated circuits?",
    options: ["First generation", "Second generation", "Third generation", "Fourth generation"],
    answer: "Third generation"
  },
  {
    q: "Which device predates modern digital computers and was used for calculations?",
    options: ["Abacus", "iPad", "Smartphone", "Calculator app"],
    answer: "Abacus"
  },
  {
    q: "Which of the following is NOT a characteristic of a modern computer?",
    options: ["High speed", "Large storage capacity", "Requires no electricity", "Accuracy"],
    answer: "Requires no electricity"
  },
  {
    q: "Which part of the computer system holds data and instructions temporarily while the CPU processes them?",
    options: ["Hard disk", "Random Access Memory (RAM)", "CD-ROM", "Printer buffer"],
    answer: "Random Access Memory (RAM)"
  },
  {
    q: "Which type of software enables the computer hardware to communicate with the operating system?",
    options: ["Application software", "System software", "Malware", "Spreadsheet software"],
    answer: "System software"
  },
  {
    q: "Which of these is an example of system software?",
    options: ["Microsoft Excel", "Adobe Photoshop", "Windows 10 Operating System", "Google Chrome browser"],
    answer: "Windows 10 Operating System"
  },
  {
    q: "Which of the following describes the role of data in a computer system?",
    options: ["Processed information", "Raw facts with little meaning until processed", "The output only", "Always stored on a cloud"],
    answer: "Raw facts with little meaning until processed"
  },
  {
    q: "Which of these best describes information in a computer system context?",
    options: ["Raw data not yet processed", "Users’ personal opinions", "Processed data that is meaningful", "Only pictures"],
    answer: "Processed data that is meaningful"
  }
      ]
    },
    
    {
      topic: "Data and Information",
      questions: [
        {
    q: "What is data?",
    options: ["Processed facts and figures", "Unprocessed raw facts about events", "Meaningful information", "Results of processing"],
    answer: "Unprocessed raw facts about events"
  },
  {
    q: "What is information?",
    options: ["Raw data", "Processed data that has meaning", "Random numbers", "Unverified facts"],
    answer: "Processed data that has meaning"
  },
  {
    q: "Which of the following is NOT a form of data?",
    options: ["Text", "Numbers", "Processed output", "Images"],
    answer: "Processed output"
  },
  {
    q: "Which of the following is an example of information?",
    options: ["Names of students before sorting", "A class list arranged by performance", "Random marks recorded", "Unprocessed survey results"],
    answer: "A class list arranged by performance"
  },
  {
    q: "What is the relationship between data and information?",
    options: ["Data is derived from information", "Information is derived from data", "They mean the same thing", "They are unrelated"],
    answer: "Information is derived from data"
  },
  {
    q: "Which of the following is a characteristic of good information?",
    options: ["Late", "Accurate", "Irrelevant", "Incomplete"],
    answer: "Accurate"
  },
  {
    q: "Which characteristic of good information means it should reach the user when needed?",
    options: ["Completeness", "Timeliness", "Accuracy", "Relevance"],
    answer: "Timeliness"
  },
  {
    q: "Which characteristic of good information ensures it is related to the user's needs?",
    options: ["Timeliness", "Relevance", "Completeness", "Conciseness"],
    answer: "Relevance"
  },
  {
    q: "Which of the following represents data processing?",
    options: ["Input → Processing → Output", "Output → Input → Processing", "Processing → Output → Input", "Storage → Output → Input"],
    answer: "Input → Processing → Output"
  },
  {
    q: "What is the first stage in the data processing cycle?",
    options: ["Output", "Processing", "Input", "Storage"],
    answer: "Input"
  },
  {
    q: "At which stage of the data processing cycle is information produced?",
    options: ["Input", "Processing", "Output", "Storage"],
    answer: "Output"
  },
  {
    q: "Which device is mainly used during the input stage?",
    options: ["Printer", "Keyboard", "Monitor", "Speaker"],
    answer: "Keyboard"
  },
  {
    q: "Which device is mainly used during the output stage?",
    options: ["Mouse", "Printer", "Microphone", "Scanner"],
    answer: "Printer"
  },
  {
    q: "In a data processing system, where are instructions and data temporarily stored?",
    options: ["Hard disk", "RAM", "CD-ROM", "Printer buffer"],
    answer: "RAM"
  },
  {
    q: "What term describes facts and figures collected for reference or analysis?",
    options: ["Output", "Data", "Information", "Knowledge"],
    answer: "Data"
  },
  {
    q: "When data has been organized and given meaning, it becomes?",
    options: ["Information", "Knowledge", "Fact", "Input"],
    answer: "Information"
  },
  {
    q: "Which of the following best describes the value of information?",
    options: ["It is more valuable when incomplete", "Its value depends on its accuracy and relevance", "It is always expensive", "It never loses value over time"],
    answer: "Its value depends on its accuracy and relevance"
  },
  {
    q: "Which of the following is NOT a stage in the data processing cycle?",
    options: ["Input", "Processing", "Calculation", "Output"],
    answer: "Calculation"
  },
  {
    q: "The process of converting raw data into meaningful information is called?",
    options: ["Computation", "Processing", "Transmission", "Coding"],
    answer: "Processing"
  },
  {
    q: "Which of the following correctly shows the order of the data-information hierarchy?",
    options: ["Information → Data → Knowledge", "Data → Information → Knowledge", "Knowledge → Data → Information", "Knowledge → Information → Data"],
    answer: "Data → Information → Knowledge"
  }
      ]
    },
    
    {
      topic: "Component of the computer system",
      questions: [
        {
    q: "Which of the following is NOT a component of a computer system?",
    options: ["Hardware", "Software", "Brainware", "Typewriter"],
    answer: "Typewriter"
  },
  {
    q: "Which of the following best defines hardware?",
    options: ["Programs used to operate a computer", "Physical parts of the computer you can touch", "People who use the computer", "The ideas behind a program"],
    answer: "Physical parts of the computer you can touch"
  },
  {
    q: "Which of the following is an example of hardware?",
    options: ["Microsoft Word", "Operating system", "Keyboard", "Spreadsheet software"],
    answer: "Keyboard"
  },
  {
    q: "Which of the following best defines software?",
    options: ["Electronic circuits", "Set of instructions that direct the computer", "Physical components of a computer", "Input devices only"],
    answer: "Set of instructions that direct the computer"
  },
  {
    q: "Which of these is an example of system software?",
    options: ["MS Excel", "MS Word", "Windows 11", "CorelDraw"],
    answer: "Windows 11"
  },
  {
    q: "Which of these is an example of application software?",
    options: ["Linux OS", "Antivirus program", "Microsoft PowerPoint", "BIOS"],
    answer: "Microsoft PowerPoint"
  },
  {
    q: "Which of these is a type of system software?",
    options: ["Database", "Word processor", "Operating system", "Presentation tool"],
    answer: "Operating system"
  },
  {
    q: "What is the main function of the operating system?",
    options: ["To play games", "To control and manage hardware and software resources", "To design web pages", "To calculate data"],
    answer: "To control and manage hardware and software resources"
  },
  {
    q: "Which type of memory stores data permanently?",
    options: ["RAM", "ROM", "Cache", "Register"],
    answer: "ROM"
  },
  {
    q: "Which type of memory is volatile?",
    options: ["Hard disk", "ROM", "RAM", "CD-ROM"],
    answer: "RAM"
  },
  {
    q: "Which of these devices is used to store data permanently?",
    options: ["RAM", "Cache memory", "Hard disk", "Processor"],
    answer: "Hard disk"
  },
  {
    q: "What is the brain of the computer system?",
    options: ["Motherboard", "Central Processing Unit (CPU)", "Monitor", "Keyboard"],
    answer: "Central Processing Unit (CPU)"
  },
  {
    q: "Which of the following is NOT part of the CPU?",
    options: ["Arithmetic Logic Unit", "Control Unit", "Memory Unit", "Mouse"],
    answer: "Mouse"
  },
  {
    q: "The unit that performs mathematical and logical operations is?",
    options: ["Control Unit", "Arithmetic Logic Unit", "Memory Unit", "Input Unit"],
    answer: "Arithmetic Logic Unit"
  },
  {
    q: "Which component of the CPU controls all other units?",
    options: ["Control Unit", "Memory Unit", "Arithmetic Logic Unit", "Monitor"],
    answer: "Control Unit"
  },
  {
    q: "Which of the following is an example of peripheral hardware?",
    options: ["Processor", "Motherboard", "Printer", "Cache"],
    answer: "Printer"
  },
  {
    q: "Which of the following software types translates high-level language into machine code?",
    options: ["Compiler", "Text editor", "Word processor", "Database software"],
    answer: "Compiler"
  },
  {
    q: "Which type of software helps detect and remove viruses from a computer?",
    options: ["Operating system", "Application software", "Utility software", "Compiler"],
    answer: "Utility software"
  },
  {
    q: "Which of the following is NOT an example of input hardware?",
    options: ["Keyboard", "Mouse", "Scanner", "Monitor"],
    answer: "Monitor"
  },
  {
    q: "What is the function of output devices in a computer system?",
    options: ["To feed data into the computer", "To store data", "To display or produce processed information", "To control the CPU speed"],
    answer: "To display or produce processed information"
  }
      ]
    },
    
    {
      topic: "Basic computer operations",
      questions: [
       {
    q: "Which of the following best represents the basic functions of a computer system?",
    options: ["Processing → Input → Output", "Input → Processing → Output", "Output → Input → Processing", "Storage → Input → Output"],
    answer: "Input → Processing → Output"
  },
  {
    q: "What is the main function of input devices?",
    options: ["Display information", "Store data", "Enter data into the computer", "Process information"],
    answer: "Enter data into the computer"
  },
  {
    q: "Which of the following is NOT an input device?",
    options: ["Keyboard", "Mouse", "Printer", "Scanner"],
    answer: "Printer"
  },
  {
    q: "Which device converts data from human-readable form to machine-readable form?",
    options: ["Output device", "Input device", "Processor", "Monitor"],
    answer: "Input device"
  },
  {
    q: "What is the main function of the Central Processing Unit (CPU)?",
    options: ["To print information", "To control all computer operations", "To enter data", "To store information permanently"],
    answer: "To control all computer operations"
  },
  {
    q: "Which unit of the CPU performs calculations and logical decisions?",
    options: ["Control Unit", "Arithmetic Logic Unit (ALU)", "Memory Unit", "Storage Unit"],
    answer: "Arithmetic Logic Unit (ALU)"
  },
  {
    q: "The Control Unit of the CPU is responsible for?",
    options: ["Performing calculations", "Controlling all other units", "Storing data", "Printing output"],
    answer: "Controlling all other units"
  },
  {
    q: "Which part of the computer holds data and instructions temporarily during processing?",
    options: ["ROM", "RAM", "Hard Disk", "CD-ROM"],
    answer: "RAM"
  },
  {
    q: "Which type of storage retains data after the computer is turned off?",
    options: ["Volatile storage", "Temporary memory", "Permanent storage", "Cache memory"],
    answer: "Permanent storage"
  },
  {
    q: "Which of the following is an example of secondary storage?",
    options: ["RAM", "ROM", "Flash drive", "Register"],
    answer: "Flash drive"
  },
  {
    q: "Which is the correct order of the data processing cycle?",
    options: ["Processing → Output → Input", "Input → Processing → Output → Storage", "Storage → Input → Output", "Output → Input → Processing"],
    answer: "Input → Processing → Output → Storage"
  },
  {
    q: "What is the purpose of storage devices?",
    options: ["To process data", "To store data and information", "To display output", "To enter input"],
    answer: "To store data and information"
  },
  {
    q: "Which of the following devices is used for output?",
    options: ["Mouse", "Keyboard", "Printer", "Scanner"],
    answer: "Printer"
  },
  {
    q: "Which of the following devices displays visual output?",
    options: ["Monitor", "Keyboard", "Speaker", "Mouse"],
    answer: "Monitor"
  },
  {
    q: "Which of these is an example of a processing device?",
    options: ["Central Processing Unit (CPU)", "Printer", "Keyboard", "Speaker"],
    answer: "Central Processing Unit (CPU)"
  },
  {
    q: "Which device is both input and output?",
    options: ["Printer", "Monitor", "Touchscreen", "Speaker"],
    answer: "Touchscreen"
  },
  {
    q: "Which of the following correctly represents an example of data processing?",
    options: ["Typing text into a document", "Printing an image", "Calculating student averages", "Turning on the computer"],
    answer: "Calculating student averages"
  },
  {
    q: "Which unit of the computer is responsible for producing output after processing?",
    options: ["Input Unit", "Output Unit", "Memory Unit", "Control Unit"],
    answer: "Output Unit"
  },
  {
    q: "Which of these devices provides softcopy output?",
    options: ["Printer", "Monitor", "Plotter", "Speaker"],
    answer: "Monitor"
  },
  {
    q: "Which of these provides hardcopy output?",
    options: ["Monitor", "Speaker", "Printer", "Projector"],
    answer: "Printer"
  } 
      ]
    }
    ],
      
    Agriculture: [
    {
      topic: "Meaning, branches and importance of Agriculture",
      questions: [
        {
    q: "What is the meaning of agriculture?",
    options: ["The study of animals only", "The cultivation of crops and rearing of animals for human use", "The building of houses", "The cooking of food"],
    answer: "The cultivation of crops and rearing of animals for human use"
  },
  {
    q: "Which is NOT a branch of agriculture?",
    options: ["Crop production", "Animal husbandry", "Astrology", "Forestry"],
    answer: "Astrology"
  },
  {
    q: "Why is agriculture important to a nation?",
    options: ["Provides food for the people", "Creates jobs", "Supplies raw materials for industry", "All of these"],
    answer: "All of these"
  },
  {
    q: "Which branch of agriculture deals with fish production?",
    options: ["Horticulture", "Animal husbandry", "Aquaculture/Fisheries", "Forestry"],
    answer: "Aquaculture/Fisheries"
  },
  {
    q: "Which of the following is a direct benefit of agriculture to the individual farmer?",
    options: ["Improved satellite TV", "Income generation", "Luxury car", "None of these"],
    answer: "Income generation"
  },
  {
    q: "Which branch of agriculture deals with the cultivation of trees and forest products?",
    options: ["Crop production", "Forestry", "Animal science", "Horticulture"],
    answer: "Forestry"
  },
  {
    q: "Agriculture provides raw materials for industries such as textile and food processing. True or False?",
    options: ["True", "False"],
    answer: "True"
  },
  {
    q: "Which of the following is a purpose of agriculture in the economy?",
    options: ["To increase unemployment", "To reduce food production", "To earn foreign exchange", "To discourage farming"],
    answer: "To earn foreign exchange"
  },
  {
    q: "The branch of agriculture that deals with the production of vegetables and fruits is called:",
    options: ["Horticulture", "Crop production", "Animal husbandry", "Forestry"],
    answer: "Horticulture"
  },
  {
    q: "Which of these statements shows the scope of agriculture?",
    options: ["It includes crop and animal production", "It excludes environmental conservation", "It is only about selling goods", "It is purely theoretical"],
    answer: "It includes crop and animal production"
  },
  {
    q: "Agriculture contributes to rural development by creating",
    options: ["Educational opportunities", "Employment in the rural areas", "Urban congestion", "None of these"],
    answer: "Employment in the rural areas"
  },
  {
    q: "The cultivation of crops mainly for sale and profit is called:",
    options: ["Subsistence agriculture", "Commercial agriculture", "Hobby farming", "Home gardening"],
    answer: "Commercial agriculture"
  },
  {
    q: "An activity of rearing animals like cattle, goats, sheep, poultry is part of which branch?",
    options: ["Crop production", "Animal husbandry", "Forestry", "Aquaculture"],
    answer: "Animal husbandry"
  },
  {
    q: "Which of the following raw materials comes from agriculture?",
    options: ["Rubber", "Cotton", "Palm oil", "All of these"],
    answer: "All of these"
  },
  {
    q: "Agriculture helps to reduce poverty because it",
    options: ["Creates jobs", "Increases food imports", "Decreases exports", "Destroys land"],
    answer: "Creates jobs"
  },
  {
    q: "Which branch of agriculture deals with bees and honey production?",
   options: ["Apiculture", "Horticulture", "Forestry", "Crop science"],
    answer: "Apiculture"
  },
  {
    q: "Which of these is a global significance of agriculture?",
    options: ["Food security", "Industrial raw material", "Foreign exchange", "All of the above"],
    answer: "All of the above"
  },
  {
    q: "Agriculture can be described as the backbone of many economies. True or False?",
    options: ["True", "False"],
    answer: "True"
  },
  {
    q: "Which branch of agriculture is concerned with the study of crop diseases and pests?",
    options: ["Crop production", "Entomology and pathology (within crop science)", "Animal production", "Forestry"],
    answer: "Entomology and pathology (within crop science)"
  },
  {
    q: "Which of these is NOT a direct product of agriculture?",
    options: ["Rice", "Leather", "Wood", "Smartphone"],
    answer: "Smartphone"
  }
      ]
    },
    
    {
      topic: "Types of Agriculture",
      questions: [
        {
    q: "What is subsistence agriculture?",
    options: ["Producing food mainly for one’s own use", "Producing large quantities for export", "Producing luxury goods only", "Producing for entertainment"],
    answer: "Producing food mainly for one’s own use"
  },
  {
    q: "Commercial agriculture is characterised by",
    options: ["Small-scale farming for family", "Large-scale farming for sale and profit", "No use of technology", "Only backyard gardening"],
    answer: "Large-scale farming for sale and profit"
  },
  {
    q: "Which of the following is an advantage of commercial agriculture?",
    options: ["Large export earnings", "Low productivity", "Limited production", "No market access"],
    answer: "Large export earnings"
  },
  {
    q: "A disadvantage of subsistence agriculture is",
    options: ["Risk of crop failure", "High mechanisation", "Large profit", "Wide market access"],
    answer: "Risk of crop failure"
  },
  {
    q: "Which of the following best differentiates subsistence from commercial agriculture?",
    options: ["Use of land only", "Purpose and scale of production", "Use of family labour only", "No difference"],
    answer: "Purpose and scale of production"
  },
  {
    q: "Which type of agriculture mainly uses family labour and simple tools?",
    options: ["Commercial agriculture", "Subsistence agriculture", "Mixed farming", "Agro-industry"],
    answer: "Subsistence agriculture"
  },
  {
    q: "Which type of agriculture uses bigger farms, capital and modern equipment?",
    options: ["Subsistence agriculture", "Commercial agriculture", "Home gardening", "None"],
    answer: "Commercial agriculture"
  },
  {
    q: "Subsistence agriculture is most common in which setting?",
    options: ["Urban high‐tech farms", "Developing rural communities", "Large industrial farms", "None of these"],
    answer: "Developing rural communities"
  },
  {
    q: "Commercial agriculture aims at",
    options: ["Providing food for the farmer alone", "Selling produce for profit", "Growing only one crop for family use", "Renting land only"],
    answer: "Selling produce for profit"
  },
  {
    q: "Which of the following is a characteristic of commercial agriculture?",
    options: ["Use of capital intensive methods", "Focus on self-consumption", "Low technology", "Small scale"],
    answer: "Use of capital intensive methods"
  },
  {
    q: "Which of these is a drawback of commercial agriculture?",
    options: ["Over‐production may lead to waste", "No profit", "Local consumption only", "No labour required"],
    answer: "Over‐production may lead to waste"
  },
  {
    q: "Small scale farming for household consumption is typical of:",
    options: ["Commercial agriculture", "Subsistence agriculture", "Agro-industry", "Plantation farming"],
    answer: "Subsistence agriculture"
  },
  {
    q: "Which type of agriculture is most suitable when there’s a ready market and infrastructure?",
    options: ["Subsistence agriculture", "Commercial agriculture", "Shifting cultivation", "None of these"],
    answer: "Commercial agriculture"
  },
  {
    q: "Which of these is not typical of subsistence agriculture?",
    options: ["Market oriented", "Family labour use", "Simple tools", "Low input"],
    answer: "Market oriented"
  },
  {
    q: "Which type of agriculture is more likely to use improved seed varieties and chemical fertilisers?",
    options: ["Subsistence agriculture", "Commercial agriculture", "Home garden", "Backyard farm"],
    answer: "Commercial agriculture"
  },
  {
    q: "Which type of farming is labour intensive and uses minimal external inputs?",
    options: ["Commercial agriculture", "Subsistence agriculture", "Mixed farming", "Forest farming"],
    answer: "Subsistence agriculture"
  },
  {
    q: "Which of these statements is true about commercial agriculture?",
    options: ["Produces only for the farmer’s family", "Is highly mechanised", "Cannot access markets", "Does not use improved methods"],
    answer: "Is highly mechanised"
  },
  {
    q: "Which of the following is a typical product of commercial agriculture?",
    options: ["Small family garden produce", "Large-scale cash crops like cocoa, cotton", "Home backyard vegetables", "Only animal husbandry for family use"],
    answer: "Large-scale cash crops like cocoa, cotton"
  },
  {
    q: "In a country with poor infrastructure and few markets, which type of agriculture is more likely?",
    options: ["Commercial agriculture", "Subsistence agriculture", "Plantation agriculture", "None"],
    answer: "Subsistence agriculture"
  }
      ]
    },
    
    {
      topic: "Problem of Agricultural development",
      questions: [
        {
    q: "Which of the following is a problem of agricultural development in Nigeria?",
    options: ["Poor access to credit", "Good roads in all areas", "High mechanisation everywhere", "Abundant marketing facilities"],
    answer: "Poor access to credit"
  },
  {
    q: "Which problem is caused by poor storage and processing facilities in agriculture?",
    options: ["Shortage of food", "Food spoilage and wastage", "Excessive export", "Higher yields"],
    answer: "Food spoilage and wastage"
  },
  {
    q: "Lack of good roads to farms causes:",
    options: ["Easy transport of produce", "High cost of moving goods", "Lower production cost", "Better market access"],
    answer: "High cost of moving goods"
  },
  {
    q: "Which of these is a possible solution to low agricultural productivity?",
    options: ["Use of improved seed varieties", "Ignoring pests", "No training for farmers", "No finance"],
    answer: "Use of improved seed varieties"
  },
  {
    q: "Which of the following helps to solve the problem of insufficient fertilizer supply?",
    options: ["Reducing access to credit", "Importing and distributing fertiliser efficiently", "Less extension service", "Removing storage facilities"],
    answer: "Importing and distributing fertiliser efficiently"
  },
  {
    q: "Extension services in agriculture help by:",
    options: ["Training farmers on improved methods", "Removing markets", "Increasing manual transport", "Reducing farm size"],
    answer: "Training farmers on improved methods"
  },
  {
    q: "Poor finance available to farmers means:",
    options: ["Farmers lack access to loans", "Farmers have excess funds", "No need for credit", "All farms have enough money"],
    answer: "Farmers lack access to loans"
  },
  {
    q: "A solution to inadequate irrigation in farming areas is to:",
    options: ["Provide boreholes and canal systems", "Avoid water usage", "Stop farming", "Use less land"],
    answer: "Provide boreholes and canal systems"
  },
  {
    q: "What effect does shortage of farm inputs (like seed, fertiliser) have on agriculture?",
    options: ["Increased yields", "Reduced production", "Better quality goods", "More export"],
    answer: "Reduced production"
  },
  {
    q: "To address the problem of land degradation, one solution is:",
    options: ["Use of crop rotation and soil conservation", "Clear more forest", "Ignore soil erosion", "Use bad methods"],
    answer: "Use of crop rotation and soil conservation"
  },
  {
    q: "Which of these is a major factor hindering agricultural development?",
    options: ["Adequate storage", "High literacy among farmers", "Inadequate market linkages", "Modern techniques"],
    answer: "Inadequate market linkages"
  },
  {
    q: "Investment in rural infrastructure (roads, storage etc) will help solve the problem of:",
    options: ["Labour surplus", "Poor market access", "High mechanisation", "Low population"],
    answer: "Poor market access"
  },
  {
    q: "What is one method to reduce post-harvest losses in agriculture?",
    options: ["Improved storage and processing facilities", "Ignoring harvesting methods", "Using old tools only", "Planting fewer crops"],
    answer: "Improved storage and processing facilities"
  },
  {
    q: "Which of these can help farmers access credit and insurance?",
    options: ["Agricultural finance schemes", "No banking services", "High interest rates only", "No insurance available"],
    answer: "Agricultural finance schemes"
  },
  {
    q: "Which of the following solutions helps with pests and diseases in farming?",
    options: ["Use of pesticides and integrated pest management", "Ignoring pests", "Avoid fertilisers", "Use bad seeds"],
    answer: "Use of pesticides and integrated pest management"
  },
  {
    q: "Poor access to markets results in:",
    options: ["Higher prices for farmers", "Difficulty selling produce", "Surplus export", "Low production cost"],
    answer: "Difficulty selling produce"
  },
  {
    q: "One reason for land shortage in agriculture is:",
    options: ["Urban expansion and industrialisation", "Abundant land", "No roads", "High yields"],
    answer: "Urban expansion and industrialisation"
  },
  {
    q: "To ensure consistent supply of fertiliser, the government can",
    options: ["Establish fertiliser distribution systems", "Ban fertilisers", "Ignore supply", "Increase wastage"],
    answer: "Establish fertiliser distribution systems"
  },
  {
    q: "Improving farmers’ education and extension services helps by:",
    options: ["Increasing ignorance", "Raising productivity and good practices", "Reducing yields", "Lowering profit"],
    answer: "Raising productivity and good practices"
  }
      ]
    },
    
    {
      topic: "Roles of Government and NGOs in Agricultural development",
      questions: [
        {
    q: "Which role does government play in agricultural development?",
    options: ["Providing extension services", "Building rural roads", "Subsidising fertilisers", "All of these"],
    answer: "All of these"
  },
  {
    q: "An NGO working in agriculture may help by:",
    options: ["Training farmers", "Providing improved seed", "Helping with small loans", "All of these"],
    answer: "All of these"
  },
  {
    q: "Government agricultural policy can influence farming by:",
    options: ["Setting import/export rules", "Ignoring markets", "Discouraging fertilizer use", "Staying inactive"],
    answer: "Setting import/export rules"
  },
  {
    q: "Which of these is a function of non‐governmental organisations in agriculture?",
    options: ["Community mobilisation", "Farm input distribution", "Farmer education", "All of the above"],
    answer: "All of the above"
  },
  {
    q: "Government subsidy on fertiliser is meant to:",
    options: ["Increase cost of fertiliser", "Make fertiliser less accessible", "Lower cost and increase usage", "Eliminate fertiliser"],
    answer: "Lower cost and increase usage"
  },
  {
    q: "Which of these shows NGO contribution to agriculture?",
    options: ["Loaning large industrial factories", "Improving farm inputs access for small farmers", "Promoting tobacco only", "Ignoring farmers"],
    answer: "Improving farm inputs access for small farmers"
  },
  {
    q: "What is one way government supports market development for agriculture?",
    options: ["Building storage facilities", "Reducing road access", "Ignoring farmers", "Removing agricultural schools"],
    answer: "Building storage facilities"
  },
  {
    q: "Which organisation type often provides disaster relief and agricultural support after floods or droughts?",
    options: ["Private corporations uninterested in farming", "Government agencies", "NGOs", "Movie studios"],
    answer: "NGOs"
  },
  {
    q: "Government agricultural research institutes help by:",
    options: ["Developing improved seeds", "Stopping seed production", "Making fertiliser obsolete", "Ignoring pests"],
    answer: "Developing improved seeds"
  },
  {
    q: "Which of these is a responsibility of NGOs in agriculture?",
    options: ["Watering plants themselves on every farm", "Lobbying for farmers’ rights", "Banning farming", "Removing extension services"],
    answer: "Lobbying for farmers’ rights"
  },
  {
    q: "Agricultural laws and reforms are usually introduced by which entity?",
    options: ["Farmers alone", "Government", "Children playing", "Television stations"],
    answer: "Government"
  },
  {
    q: "Which of the following is a government initiative to improve agriculture?",
    options: ["Providing rural electrification", "Widening farm-to-market roads", "Offering loans to farmers", "All of these"],
    answer: "All of these"
  },
  {
    q: "An NGO may help farmers adapt to climate change by:",
    options: ["Training them on drought-resistant crops", "Encouraging worse practices", "Discouraging input use", "Ignoring adaptation"], 
    answer: "Training them on drought-resistant crops"
  },
  {
    q: "Which of these actions shows government‐NGO collaboration?",
    options: ["Government builds roads alone without consulting farmers", "NGO and government jointly run farmer training programmes", "NGO ignores farming", "Government bans NGOs"],
    answer: "NGO and government jointly run farmer training programmes"
  },
  {
    q: "Which of these is NOT a function typically performed by government in agriculture?",
    options: ["Setting food safety standards", "Monitoring export/import of farm produce", "Making movies about farming", "Providing extension services"],
    answer: "Making movies about farming"
  },
  {
    q: "Access to credit for smallholder farmers is often improved through:",
    options: ["Government loan schemes", "NGO micro-finance programmes", "High-interest private loans only", "No programmes at all"],
    answer: "NGO micro-finance programmes"
  },
  {
    q: "Which of these shows the role of government in agro-industry development?",
    options: ["Providing incentives to agro-processing companies", "Removing all regulations", "Discouraging agro-allied industry", "None of these"],
    answer: "Providing incentives to agro-processing companies"
  },
  {
    q: "Which of these platforms might an NGO provide to farmers?",
    options: ["Mobile training apps", "Improved seed banks", "Market linkages", "All of these"],
    answer: "All of these"
  },
  {
    q: "A government scheme to insure farmers against crop failure is an example of:",
    options: ["Market distortion", "Risk management support", "Farming prohibition", "None of these"],
    answer: "Risk management support"
  },
  {
    q: "Which of these helps in strengthening value-chains in agriculture through government or NGO action?",
    options: ["Building storage and transport infrastructure", "Increasing harvest losses", "Removing markets", "Discouraging farmers"],
    answer: "Building storage and transport infrastructure"
  },
  {
    q: "Government reform in agriculture may include land tenure systems. True or False?",
    options: ["True", "False"],
    answer: "True"
  }
      ]
    },
    ],
    
    Literature: [
      //introduction to literature 
      {
  "topic": "Introduction to Literature",
  "questions": [
    {
      "q": "What is literature?",
      "options": [
        "A collection of laws and regulations",
        "Written or spoken material considered to have artistic or intellectual value",
        "A set of scientific experiments",
        "A guide for political governance"
      ],
      "answer": "Written or spoken material considered to have artistic or intellectual value"
    },
    {
      "q": "Which of the following BEST describes the scope of literature?",
      "options": [
        "Only novels and plays",
        "All forms of written and oral artistic expression",
        "Only poems",
        "Only historical documents"
      ],
      "answer": "All forms of written and oral artistic expression"
    },
    {
      "q": "Which of these is a major function of literature?",
      "options": [
        "To entertain, educate, and inform",
        "To make laws",
        "To build infrastructure",
        "To enforce discipline"
      ],
      "answer": "To entertain, educate, and inform"
    },
    {
      "q": "Oral literature is primarily transmitted through:",
      "options": [
        "Printed books",
        "The internet",
        "Speech and performance",
        "Television"
      ],
      "answer": "Speech and performance"
    },
    {
      "q": "Prose is a form of literature that:",
      "options": [
        "Is written in ordinary language without metrical structure",
        "Follows strict rhyme and rhythm",
        "Is always fictional",
        "Can only be performed on stage"
      ],
      "answer": "Is written in ordinary language without metrical structure"
    },
    {
      "q": "Poetry differs from prose in that it:",
      "options": [
        "Is always longer than prose",
        "Uses rhythm, rhyme, and figurative language",
        "Contains only factual information",
        "Does not use imagery"
      ],
      "answer": "Uses rhythm, rhyme, and figurative language"
    },
    {
      "q": "Drama is a form of literature that:",
      "options": [
        "Is meant to be performed by actors on a stage",
        "Is only read silently",
        "Contains no dialogue",
        "Cannot convey emotion"
      ],
      "answer": "Is meant to be performed by actors on a stage"
    },
    {
      "q": "An epic is best described as:",
      "options": [
        "A short humorous story",
        "A long narrative poem celebrating heroic deeds",
        "A type of song",
        "A legal document"
      ],
      "answer": "A long narrative poem celebrating heroic deeds"
    },
    {
      "q": "Which of the following is a key characteristic of fiction?",
      "options": [
        "It tells a story that is imaginary or invented",
        "It only reports historical facts",
        "It is written in verse",
        "It always has a moral lesson"
      ],
      "answer": "It tells a story that is imaginary or invented"
    },
    {
      "q": "Literature can be categorized based on:",
      "options": [
        "Form, content, and purpose",
        "Age of the author",
        "Price of the book",
        "Number of pages"
      ],
      "answer": "Form, content, and purpose"
    },
    {
      "q": "Which of the following is an example of non-fiction literature?",
      "options": [
        "Biography",
        "Novel",
        "Short story",
        "Drama"
      ],
      "answer": "Biography"
    },
    {
      "q": "Folk tales, myths, and legends belong to which category of literature?",
      "options": [
        "Oral literature",
        "Modern prose",
        "Scientific literature",
        "Technical writing"
      ],
      "answer": "Oral literature"
    },
    {
      "q": "Literature contributes to society by:",
      "options": [
        "Promoting culture and values",
        "Providing free food",
        "Building roads",
        "Creating laws"
      ],
      "answer": "Promoting culture and values"
    },
    {
      "q": "A short story is characterized by:",
      "options": [
        "Focusing on a single theme and a few characters",
        "Being hundreds of pages long",
        "Always using rhyme",
        "Being performed on stage"
      ],
      "answer": "Focusing on a single theme and a few characters"
    },
    {
      "q": "Satire in literature is used to:",
      "options": [
        "Expose and criticize human vices using humor",
        "Only entertain without any message",
        "Confuse the audience",
        "Provide historical facts"
      ],
      "answer": "Expose and criticize human vices using humor"
    },
    {
      "q": "Which of these is an important skill for studying literature?",
      "options": [
        "Critical thinking and interpretation",
        "Only memorizing facts",
        "Performing physical exercises",
        "Learning multiple languages quickly"
      ],
      "answer": "Critical thinking and interpretation"
    },
    {
      "q": "An author’s style refers to:",
      "options": [
        "The distinctive way they express ideas in writing",
        "The cover design of their book",
        "Their height and age",
        "The length of their work"
      ],
      "answer": "The distinctive way they express ideas in writing"
    },
    {
      "q": "Which of these BEST defines theme in literature?",
      "options": [
        "The central idea or message of a literary work",
        "The name of the main character",
        "The type of font used in a book",
        "The place where the story was written"
      ],
      "answer": "The central idea or message of a literary work"
    },
    {
      "q": "Symbolism in literature is when:",
      "options": [
        "Objects or actions represent ideas beyond their literal meaning",
        "Authors only write long sentences",
        "Events happen randomly without meaning",
        "Stories have no characters"
      ],
      "answer": "Objects or actions represent ideas beyond their literal meaning"
    },
    {
      "q": "Which of the following is NOT a purpose of literature?",
      "options": [
        "To inform, entertain, and educate",
        "To reflect society",
        "To preserve culture",
        "To enforce taxes"
      ],
      "answer": "To enforce taxes"
    }
  ]
},

      //literary devices
      {
  "topic": "Literary Devices (Example-Based)",
  "questions": [
    {
      "q": "Read the sentence: 'Her eyes sparkled like diamonds in the sunlight.' Which literary device is used?",
      "options": [
        "Metaphor",
        "Simile",
        "Personification",
        "Hyperbole"
      ],
      "answer": "Simile"
    },
    {
      "q": "Read the passage: 'The wind howled through the night, rattling the windows and doors.' Identify the literary device.",
      "options": [
        "Personification",
        "Alliteration",
        "Oxymoron",
        "Irony"
      ],
      "answer": "Personification"
    },
    {
      "q": "In the line: 'Time is a thief that steals our moments,' the literary device is:",
      "options": [
        "Simile",
        "Metaphor",
        "Hyperbole",
        "Onomatopoeia"
      ],
      "answer": "Metaphor"
    },
    {
      "q": "Which device is illustrated in: 'I’ve told you a million times not to be late!'?",
      "options": [
        "Hyperbole",
        "Irony",
        "Personification",
        "Metonymy"
      ],
      "answer": "Hyperbole"
    },
    {
      "q": "Read this line from a poem: 'The golden sun dipped below the horizon, painting the sky with fire.' Identify the device.",
      "options": [
        "Imagery",
        "Simile",
        "Alliteration",
        "Oxymoron"
      ],
      "answer": "Imagery"
    },
    {
      "q": "In the sentence: 'The pen is mightier than the sword,' the device is:",
      "options": [
        "Synecdoche",
        "Metonymy",
        "Personification",
        "Irony"
      ],
      "answer": "Metonymy"
    },
    {
      "q": "From the passage: 'The classroom was a zoo today with students running everywhere,' identify the literary device.",
      "options": [
        "Metaphor",
        "Simile",
        "Paradox",
        "Foreshadowing"
      ],
      "answer": "Metaphor"
    },
    {
      "q": "Which device is used here: 'Bitter-sweet memories of childhood came flooding back.'?",
      "options": [
        "Oxymoron",
        "Hyperbole",
        "Alliteration",
        "Euphemism"
      ],
      "answer": "Oxymoron"
    },
    {
      "q": "Identify the literary device in: 'The bees buzzed angrily around the hive.'",
      "options": [
        "Onomatopoeia",
        "Personification",
        "Simile",
        "Metaphor"
      ],
      "answer": "Onomatopoeia"
    },
    {
      "q": "In the line: 'Peter picked a peck of pickled peppers,' the device is:",
      "options": [
        "Alliteration",
        "Assonance",
        "Hyperbole",
        "Oxymoron"
      ],
      "answer": "Alliteration"
    },
    {
      "q": "Which literary device is used: 'The mellow wedding bells rang throughout the hall'?",
      "options": [
        "Assonance",
        "Alliteration",
        "Metaphor",
        "Euphemism"
      ],
      "answer": "Assonance"
    },
    {
      "q": "Read this example: 'Dark clouds loomed over the village, hinting at the troubles ahead.' The device is:",
      "options": [
        "Foreshadowing",
        "Flashback",
        "Irony",
        "Personification"
      ],
      "answer": "Foreshadowing"
    },
    {
      "q": "In the sentence: 'He remembered the summer of 2010 when he first learned to swim,' the device used is:",
      "options": [
        "Flashback",
        "Foreshadowing",
        "Metaphor",
        "Irony"
      ],
      "answer": "Flashback"
    },
    {
      "q": "Which device is illustrated here: 'Less is more in the art of writing.'?",
      "options": [
        "Paradox",
        "Oxymoron",
        "Alliteration",
        "Hyperbole"
      ],
      "answer": "Paradox"
    },
    {
      "q": "Identify the device in: 'He passed away peacefully in his sleep.'",
      "options": [
        "Euphemism",
        "Sarcasm",
        "Irony",
        "Personification"
      ],
      "answer": "Euphemism"
    },
    {
      "q": "Read the sentence: 'Nice job on the essay,' he said, after seeing the mistakes everywhere. The device is:",
      "options": [
        "Sarcasm",
        "Hyperbole",
        "Metonymy",
        "Personification"
      ],
      "answer": "Sarcasm"
    },
    {
      "q": "Which device is used here: 'Making fun of corrupt politicians is a common theme in cartoons.'?",
      "options": [
        "Satire",
        "Euphemism",
        "Oxymoron",
        "Alliteration"
      ],
      "answer": "Satire"
    },
    {
      "q": "From the line: 'The alarm clock screamed at me this morning,' the device is:",
      "options": [
        "Personification",
        "Onomatopoeia",
        "Simile",
        "Hyperbole"
      ],
      "answer": "Personification"
    },
    {
      "q": "Read: 'All hands on deck for the ship’s departure.' The device is:",
      "options": [
        "Synecdoche",
        "Metonymy",
        "Oxymoron",
        "Paradox"
      ],
      "answer": "Synecdoche"
    },
    {
      "q": "In the passage: 'The crown has decided to raise taxes,' the device is:",
      "options": [
        "Metonymy",
        "Synecdoche",
        "Personification",
        "Irony"
      ],
      "answer": "Metonymy"
    }
  ]
},

//drama

{
  "topic": "Drama",
  "questions": [
    {
      "q": "Which of the following BEST defines drama?",
      "options": [
        "A story meant to be read silently",
        "Literature intended for performance by actors on stage",
        "A poem with a fixed rhyme scheme",
        "A factual report of events"
      ],
      "answer": "Literature intended for performance by actors on stage"
    },
    {
      "q": "Which element of drama is responsible for the story’s central conflict?",
      "options": [
        "Characters",
        "Plot",
        "Setting",
        "Dialogue"
      ],
      "answer": "Plot"
    },
    {
      "q": "In drama, the place and time in which the action occurs is called:",
      "options": [
        "Plot",
        "Setting",
        "Theme",
        "Conflict"
      ],
      "answer": "Setting"
    },
    {
      "q": "The words spoken by characters in a play are known as:",
      "options": [
        "Dialogue",
        "Monologue",
        "Stage directions",
        "Narration"
      ],
      "answer": "Dialogue"
    },
    {
      "q": "A speech delivered by a character alone on stage, revealing thoughts and feelings, is called:",
      "options": [
        "Dialogue",
        "Monologue",
        "Soliloquy",
        "Aside"
      ],
      "answer": "Monologue"
    },
    {
      "q": "When a character speaks directly to the audience without other characters hearing, it is called:",
      "options": [
        "Monologue",
        "Soliloquy",
        "Aside",
        "Narration"
      ],
      "answer": "Aside"
    },
    {
      "q": "Which type of drama is intended to provoke laughter while exposing human weaknesses?",
      "options": [
        "Tragedy",
        "Comedy",
        "Historical drama",
        "Melodrama"
      ],
      "answer": "Comedy"
    },
    {
      "q": "A play in which the main character experiences suffering or downfall is called:",
      "options": [
        "Comedy",
        "Tragedy",
        "Satire",
        "Farce"
      ],
      "answer": "Tragedy"
    },
    {
      "q": "A short, humorous play often exaggerating situations is known as:",
      "options": [
        "Farce",
        "Tragedy",
        "Historical drama",
        "Melodrama"
      ],
      "answer": "Farce"
    },
    {
      "q": "A dramatic work that focuses on exciting, sensational events and emotions is called:",
      "options": [
        "Melodrama",
        "Comedy",
        "Tragedy",
        "Farce"
      ],
      "answer": "Melodrama"
    },
    {
      "q": "In the dialogue: 'I cannot leave this place until the truth is revealed,' the part of drama being highlighted is:",
      "options": [
        "Conflict",
        "Setting",
        "Stage directions",
        "Narrator"
      ],
      "answer": "Conflict"
    },
    {
      "q": "Which of the following is NOT a feature of drama?",
      "options": [
        "Dialogue",
        "Stage directions",
        "Narrator",
        "Rhyme scheme"
      ],
      "answer": "Rhyme scheme"
    },
    {
      "q": "A play depicting historical events with artistic interpretation is called:",
      "options": [
        "Comedy",
        "Historical drama",
        "Farce",
        "Tragedy"
      ],
      "answer": "Historical drama"
    },
    {
      "q": "The underlying message or central idea of a play is called:",
      "options": [
        "Theme",
        "Plot",
        "Conflict",
        "Setting"
      ],
      "answer": "Theme"
    },
    {
      "q": "Which dramatic element guides actors on actions, gestures, and movements on stage?",
      "options": [
        "Stage directions",
        "Dialogue",
        "Conflict",
        "Theme"
      ],
      "answer": "Stage directions"
    },
    {
      "q": "When a character struggles against another character, nature, society, or self, it is called:",
      "options": [
        "Conflict",
        "Theme",
        "Plot",
        "Setting"
      ],
      "answer": "Conflict"
    },
    {
      "q": "Read the line from a play: 'The storm rages outside as John vows to save his family.' Which dramatic element is illustrated?",
      "options": [
        "Setting",
        "Plot",
        "Theme",
        "Dialogue"
      ],
      "answer": "Setting"
    },
    {
      "q": "A play where the storyline leads to a moral lesson while amusing the audience is typically:",
      "options": [
        "Comedy",
        "Tragedy",
        "Melodrama",
        "Farce"
      ],
      "answer": "Comedy"
    },
    {
      "q": "Which type of drama exaggerates absurd situations for comedic effect?",
      "options": [
        "Farce",
        "Tragedy",
        "Historical drama",
        "Melodrama"
      ],
      "answer": "Farce"
    },
    {
      "q": "In drama, 'acts' and 'scenes' are primarily used to:",
      "options": [
        "Organize the play into sections",
        "Describe characters’ thoughts",
        "Provide rhyming patterns",
        "Give background history"
      ],
      "answer": "Organize the play into sections"
    }
  ]
},

//prose

{
  "topic": "Prose",
  "questions": [
    {
      "q": "Read the passage: 'Ama ran across the dusty field, clutching her books tightly. She knew the exam results would change everything.' Which element of prose is being highlighted?",
      "options": [
        "Plot",
        "Setting",
        "Theme",
        "Conflict"
      ],
      "answer": "Plot"
    },
    {
      "q": "In the sentence: 'The old man had eyes like burning coals, always watching and judging,' the author is using which technique?",
      "options": [
        "Simile",
        "Metaphor",
        "Personification",
        "Irony"
      ],
      "answer": "Simile"
    },
    {
      "q": "Which of these BEST defines characterization in prose?",
      "options": [
        "The way the author develops and presents characters",
        "The sequence of events in a story",
        "The moral of the story",
        "The use of rhyme and rhythm"
      ],
      "answer": "The way the author develops and presents characters"
    },
    {
      "q": "Read: 'The village square was alive with laughter and chatter, the scent of roasted corn filling the air.' Which element is being described?",
      "options": [
        "Setting",
        "Conflict",
        "Plot",
        "Theme"
      ],
      "answer": "Setting"
    },
    {
      "q": "When a narrator tells the story using 'I', it is called:",
      "options": [
        "First-person narration",
        "Third-person narration",
        "Omniscient narration",
        "Objective narration"
      ],
      "answer": "First-person narration"
    },
    {
      "q": "Which type of conflict is shown here: 'John struggled with his own fear before stepping onto the stage'?",
      "options": [
        "Man vs. Self",
        "Man vs. Man",
        "Man vs. Society",
        "Man vs. Nature"
      ],
      "answer": "Man vs. Self"
    },
    {
      "q": "Read the passage: 'The river roared angrily after the storm, sweeping everything in its path.' This is an example of:",
      "options": [
        "Personification",
        "Metaphor",
        "Hyperbole",
        "Simile"
      ],
      "answer": "Personification"
    },
    {
      "q": "The central idea or message of a story is called its:",
      "options": [
        "Theme",
        "Plot",
        "Setting",
        "Character"
      ],
      "answer": "Theme"
    },
    {
      "q": "In the story: 'The greedy merchant refused to share his wealth and lost everything in the end,' the lesson or moral is derived from the story’s:",
      "options": [
        "Theme",
        "Plot",
        "Conflict",
        "Dialogue"
      ],
      "answer": "Theme"
    },
    {
      "q": "Which narrative technique allows readers to know the thoughts and feelings of all characters?",
      "options": [
        "Omniscient narration",
        "First-person narration",
        "Objective narration",
        "Limited narration"
      ],
      "answer": "Omniscient narration"
    },
    {
      "q": "In the passage: 'She screamed as the shadows crept along the walls, her heart pounding like a drum,' the phrase 'heart pounding like a drum' is an example of:",
      "options": [
        "Simile",
        "Metaphor",
        "Personification",
        "Foreshadowing"
      ],
      "answer": "Simile"
    },
    {
      "q": "Which element of prose involves the **sequence of events** from beginning to end?",
      "options": [
        "Plot",
        "Setting",
        "Characterization",
        "Theme"
      ],
      "answer": "Plot"
    },
    {
      "q": "In the story: 'Ayo knew everyone would laugh if he failed the test, and that thought kept him awake all night,' the conflict type is:",
      "options": [
        "Man vs. Society",
        "Man vs. Self",
        "Man vs. Nature",
        "Man vs. Man"
      ],
      "answer": "Man vs. Self"
    },
    {
      "q": "A story told by someone outside the events of the story, using 'he' or 'she', is called:",
      "options": [
        "Third-person narration",
        "First-person narration",
        "Omniscient narration",
        "Stream of consciousness"
      ],
      "answer": "Third-person narration"
    },
    {
      "q": "In the passage: 'The marketplace buzzed with activity; traders shouted, children ran about, and the smell of fresh bread wafted through the air,' the author is focusing on:",
      "options": [
        "Setting",
        "Plot",
        "Characterization",
        "Conflict"
      ],
      "answer": "Setting"
    },
    {
      "q": "Which term describes the struggle between a character and an outside force such as nature, society, or another character?",
      "options": [
        "External conflict",
        "Internal conflict",
        "Theme",
        "Characterization"
      ],
      "answer": "External conflict"
    },
    {
      "q": "Read the sentence: 'Despite his small size, the boy’s courage towered over everyone.' The author uses which technique?",
      "options": [
        "Hyperbole",
        "Simile",
        "Metaphor",
        "Personification"
      ],
      "answer": "Hyperbole"
    },
    {
      "q": "Which of these BEST explains indirect characterization?",
      "options": [
        "The author shows a character’s traits through actions, speech, or thoughts",
        "The author directly tells what the character is like",
        "The author describes only the setting",
        "The author reveals the theme of the story"
      ],
      "answer": "The author shows a character’s traits through actions, speech, or thoughts"
    },
    {
      "q": "A story that uses everyday life and ordinary characters to explore moral or social lessons is called:",
      "options": [
        "Realistic prose",
        "Fantasy",
        "Science fiction",
        "Historical fiction"
      ],
      "answer": "Realistic prose"
    },
    {
      "q": "When an author hints at events that will occur later in the story, it is called:",
      "options": [
        "Foreshadowing",
        "Flashback",
        "Conflict",
        "Theme"
      ],
      "answer": "Foreshadowing"
    }
  ]
},

//poetry
{
  "topic": "Poetry (Including Types)",
  "questions": [
    {
      "q": "Read the stanza: 'O Captain! my Captain! our fearful trip is done; The ship has weathered every rack, the prize we sought is won.' This poem mourns the death of a leader. Which type of poetry is it?",
      "options": [
        "Elegy",
        "Sonnet",
        "Ballad",
        "Pastoral"
      ],
      "answer": "Elegy"
    },
    {
      "q": "Which type of poem tells a story in verse, often with a repeated refrain and simple language?",
      "options": [
        "Ballad",
        "Sonnet",
        "Elegy",
        "Dirge"
      ],
      "answer": "Ballad"
    },
    {
      "q": "A 14-line poem with a fixed rhyme scheme, often exploring love or philosophy, is called:",
      "options": [
        "Sonnet",
        "Pastoral",
        "Elegy",
        "Limerick"
      ],
      "answer": "Sonnet"
    },
    {
      "q": "Read the passage: 'Beneath the golden sun, shepherds tended flocks in the green fields, while lovers wandered by the brook.' Which type of poetry is this?",
      "options": [
        "Pastoral",
        "Ballad",
        "Elegy",
        "Sonnet"
      ],
      "answer": "Pastoral"
    },
    {
      "q": "Which type of poem is a short song or lyric expressing grief, often for the dead?",
      "options": [
        "Dirge",
        "Sonnet",
        "Ballad",
        "Pastoral"
      ],
      "answer": "Dirge"
    },
    {
      "q": "A poem mourning someone’s death and reflecting on mortality is a(n):",
      "options": [
        "Elegy",
        "Ballad",
        "Sonnet",
        "Pastoral"
      ],
      "answer": "Elegy"
    },
    {
      "q": "Identify the type of poem: 'Two households, both alike in dignity, in fair Verona, where we lay our scene.'",
      "options": [
        "Sonnet",
        "Ballad",
        "Pastoral",
        "Elegy"
      ],
      "answer": "Sonnet"
    },
    {
      "q": "Which type of poem typically idealizes rural life and nature?",
      "options": [
        "Pastoral",
        "Elegy",
        "Ballad",
        "Dirge"
      ],
      "answer": "Pastoral"
    },
    {
      "q": "The poem: 'Lay thee down, sweet Rose, thy leaves are faded now' mourns the fading of a loved one. The type is:",
      "options": [
        "Elegy",
        "Ballad",
        "Sonnet",
        "Pastoral"
      ],
      "answer": "Elegy"
    },
    {
      "q": "A narrative poem recounting adventures, often sung, is called:",
      "options": [
        "Ballad",
        "Sonnet",
        "Elegy",
        "Dirge"
      ],
      "answer": "Ballad"
    },
    {
      "q": "Which type of poetry emphasizes formal structure, rhythm, and rhyme, and often reflects on love or philosophical ideas?",
      "options": [
        "Sonnet",
        "Pastoral",
        "Ballad",
        "Dirge"
      ],
      "answer": "Sonnet"
    },
    {
      "q": "Identify the type: 'Slowly, the drumbeat echoed through the village, mourning the loss of our beloved chief.'",
      "options": [
        "Dirge",
        "Sonnet",
        "Ballad",
        "Pastoral"
      ],
      "answer": "Dirge"
    },
    {
      "q": "Read: 'The river flows gently through the meadow, as the shepherd hums his tune.' This poem celebrates rural life. It is an example of:",
      "options": [
        "Pastoral",
        "Elegy",
        "Sonnet",
        "Ballad"
      ],
      "answer": "Pastoral"
    },
    {
      "q": "A poem that tells a story about love, heroism, or adventure in simple language, often with a refrain, is:",
      "options": [
        "Ballad",
        "Elegy",
        "Sonnet",
        "Dirge"
      ],
      "answer": "Ballad"
    },
    {
      "q": "Which type of poetry is solemn, reflective, and typically written in honor of someone who has died?",
      "options": [
        "Elegy",
        "Dirge",
        "Sonnet",
        "Ballad"
      ],
      "answer": "Elegy"
    },
    {
      "q": "Read the line: 'Death, be not proud, though some have called thee mighty and dreadful.' This is an example of a poem that reflects on mortality. Its type is:",
      "options": [
        "Elegy",
        "Sonnet",
        "Ballad",
        "Dirge"
      ],
      "answer": "Elegy"
    },
    {
      "q": "A poem that is sung at funerals to express grief is called:",
      "options": [
        "Dirge",
        "Sonnet",
        "Ballad",
        "Pastoral"
      ],
      "answer": "Dirge"
    },
    {
      "q": "Which type of poem idealizes the simplicity and peace of rural life and nature?",
      "options": [
        "Pastoral",
        "Sonnet",
        "Ballad",
        "Elegy"
      ],
      "answer": "Pastoral"
    },
    {
      "q": "The famous poem by Wordsworth beginning with 'I wandered lonely as a cloud...' is primarily an example of which type?",
      "options": [
        "Pastoral",
        "Elegy",
        "Ballad",
        "Sonnet"
      ],
      "answer": "Pastoral"
    },
    {
      "q": "Which poem type often includes moral lessons or warnings while telling a story in verse form?",
      "options": [
        "Ballad",
        "Sonnet",
        "Elegy",
        "Dirge"
      ],
      "answer": "Ballad"
    }
  ]
},

//Anthony and Cleopatra 
{
  "topic": "Shakespeare — Anthony and Cleopatra",
  "questions": [
    {
      "q": "Who are the main protagonists in Shakespeare's *Anthony and Cleopatra*?",
      "options": [
        "Antony and Cleopatra",
        "Romeo and Juliet",
        "Hamlet and Ophelia",
        "Macbeth and Lady Macbeth"
      ],
      "answer": "Antony and Cleopatra"
    },
    {
      "q": "Which Roman general is a key character and rival to Antony in the play?",
      "options": [
        "Octavius Caesar",
        "Brutus",
        "Cassius",
        "Pompey"
      ],
      "answer": "Octavius Caesar"
    },
    {
      "q": "Read the line: 'My salad days, when I was green in judgment.' Who speaks this line, reflecting on past inexperience?",
      "options": [
        "Cleopatra",
        "Enobarbus",
        "Antony",
        "Caesar"
      ],
      "answer": "Cleopatra"
    },
    {
      "q": "Which theme is prominent in Antony and Cleopatra, shown by their struggle between duty and love?",
      "options": [
        "Conflict between love and duty",
        "Revenge",
        "Friendship",
        "Greed and ambition"
      ],
      "answer": "Conflict between love and duty"
    },
    {
      "q": "The famous line by Enobarbus: 'Age cannot wither her, nor custom stale her infinite variety' refers to:",
      "options": [
        "Cleopatra’s charm and beauty",
        "Caesar’s ambition",
        "Antony’s bravery",
        "Octavia’s wisdom"
      ],
      "answer": "Cleopatra’s charm and beauty"
    },
    {
      "q": "Which city serves as the primary setting for the love and political conflict in the play?",
      "options": [
        "Alexandria",
        "Rome",
        "Athens",
        "Sparta"
      ],
      "answer": "Alexandria"
    },
    {
      "q": "The struggle between Antony and Caesar is primarily an example of:",
      "options": [
        "Man vs. Man",
        "Man vs. Nature",
        "Man vs. Self",
        "Man vs. Society"
      ],
      "answer": "Man vs. Man"
    },
    {
      "q": "Which character provides comic relief but also acts as a loyal friend to Antony?",
      "options": [
        "Enobarbus",
        "Charmian",
        "Pompey",
        "Octavia"
      ],
      "answer": "Enobarbus"
    },
    {
      "q": "The play shows Cleopatra’s political astuteness and charm. Which literary technique is most evident when her speeches persuade Antony?",
      "options": [
        "Rhetorical appeal",
        "Foreshadowing",
        "Irony",
        "Alliteration"
      ],
      "answer": "Rhetorical appeal"
    },
    {
      "q": "Which of the following is NOT a theme in *Anthony and Cleopatra*?",
      "options": [
        "Love and passion",
        "Political intrigue",
        "Ambition and power",
        "Time travel"
      ],
      "answer": "Time travel"
    },
    {
      "q": "Read the line: 'Let Rome in Tiber melt, and the wide arch of the ranged empire fall!' Antony declares this. Which theme does it illustrate?",
      "options": [
        "Conflict between love and duty",
        "Friendship",
        "Revenge",
        "Ambition"
      ],
      "answer": "Conflict between love and duty"
    },
    {
      "q": "Which event triggers Antony’s ultimate downfall?",
      "options": [
        "His defeat at the Battle of Actium",
        "Cleopatra’s death",
        "Caesar’s assassination",
        "Pompey’s betrayal"
      ],
      "answer": "His defeat at the Battle of Actium"
    },
    {
      "q": "How does Cleopatra die in the play?",
      "options": [
        "By the bite of an asp",
        "Poisoning Antony",
        "By drowning",
        "In battle"
      ],
      "answer": "By the bite of an asp"
    },
    {
      "q": "Enobarbus deserts Antony after seeing his forces weakened. This is an example of:",
      "options": [
        "Foreshadowing Antony’s defeat",
        "Comic relief",
        "Hyperbole",
        "Metaphor"
      ],
      "answer": "Foreshadowing Antony’s defeat"
    },
    {
      "q": "Which character serves as a foil to Antony, representing duty, strategy, and restraint?",
      "options": [
        "Caesar",
        "Pompey",
        "Enobarbus",
        "Octavia"
      ],
      "answer": "Caesar"
    },
    {
      "q": "Cleopatra’s elaborate speeches and manipulation of Antony highlight which feature of drama?",
      "options": [
        "Characterization",
        "Setting",
        "Conflict",
        "Plot"
      ],
      "answer": "Characterization"
    },
    {
      "q": "The play blends political conflict and romantic tragedy. This makes *Anthony and Cleopatra* an example of:",
      "options": [
        "Tragic drama",
        "Comedy",
        "Farce",
        "Melodrama"
      ],
      "answer": "Tragic drama"
    },
    {
      "q": "Which scene emphasizes the tension between Antony’s loyalty to Rome and love for Cleopatra?",
      "options": [
        "His meeting with Caesar after Actium",
        "The battle with Pompey",
        "Cleopatra’s coronation",
        "Enobarbus’s banquets"
      ],
      "answer": "His meeting with Caesar after Actium"
    },
    {
      "q": "The line by Cleopatra: 'Give me my robe, put on my crown; I have immortal longings in me.' Highlights:",
      "options": [
        "Her regal dignity and acceptance of death",
        "Her fear of Antony",
        "Her betrayal",
        "Her humor"
      ],
      "answer": "Her regal dignity and acceptance of death"
    },
    {
      "q": "The love affair between Antony and Cleopatra ultimately illustrates which universal theme?",
      "options": [
        "The tension between personal desire and public duty",
        "The importance of wealth",
        "The need for revenge",
        "The power of friendship"
      ],
      "answer": "The tension between personal desire and public duty"
    }
  ]
},

//an inspector calls

{
  "topic": "An Inspector Calls",
  "questions": [
    {
      "q": "Who is the mysterious visitor who interrogates the Birling family?",
      "options": [
        "Inspector Goole",
        "Mr. Birling",
        "Gerald Croft",
        "Eric Birling"
      ],
      "answer": "Inspector Goole"
    },
    {
      "q": "The play is set in which time period?",
      "options": [
        "1912, before the First World War",
        "1929, during the Great Depression",
        "1945, after the Second World War",
        "1939, beginning of the Second World War"
      ],
      "answer": "1912, before the First World War"
    },
    {
      "q": "Which character is engaged to Sheila Birling?",
      "options": [
        "Gerald Croft",
        "Eric Birling",
        "Inspector Goole",
        "Mr. Birling"
      ],
      "answer": "Gerald Croft"
    },
    {
      "q": "The line: 'We are members of one body. We are responsible for each other.' Illustrates which theme?",
      "options": [
        "Social responsibility",
        "Greed",
        "Love",
        "Ambition"
      ],
      "answer": "Social responsibility"
    },
    {
      "q": "Which character is revealed to have had a secret affair with Eva Smith/Daisy Renton?",
      "options": [
        "Gerald Croft",
        "Mr. Birling",
        "Inspector Goole",
        "Eric Birling"
      ],
      "answer": "Gerald Croft"
    },
    {
      "q": "Mr. Birling’s speeches about business, prosperity, and the impossibility of war reflect:",
      "options": [
        "Dramatic irony",
        "Foreshadowing",
        "Personification",
        "Symbolism"
      ],
      "answer": "Dramatic irony"
    },
    {
      "q": "Which character steals money from the Birling family’s business?",
      "options": [
        "Eric Birling",
        "Mr. Birling",
        "Inspector Goole",
        "Gerald Croft"
      ],
      "answer": "Eric Birling"
    },
    {
      "q": "Sheila Birling’s change in attitude after the Inspector’s visit illustrates:",
      "options": [
        "Character development",
        "Foreshadowing",
        "Symbolism",
        "Hyperbole"
      ],
      "answer": "Character development"
    },
    {
      "q": "Read the line: 'Public men, Mr. Birling, have responsibilities as well as privileges.' This reflects which theme?",
      "options": [
        "Social responsibility",
        "Love and marriage",
        "Wealth and status",
        "Youth and rebellion"
      ],
      "answer": "Social responsibility"
    },
    {
      "q": "The use of a single setting (the Birlings’ dining room) throughout the play is an example of:",
      "options": [
        "Unity of place",
        "Foreshadowing",
        "Flashback",
        "Symbolism"
      ],
      "answer": "Unity of place"
    },
    {
      "q": "The mysterious nature of Inspector Goole, who may not be a real police inspector, serves to:",
      "options": [
        "Convey Priestley’s message about morality and responsibility",
        "Provide comic relief",
        "Introduce romance",
        "Show historical facts"
      ],
      "answer": "Convey Priestley’s message about morality and responsibility"
    },
    {
      "q": "Which character represents the older generation’s complacency and self-interest?",
      "options": [
        "Mr. Birling",
        "Sheila Birling",
        "Eric Birling",
        "Inspector Goole"
      ],
      "answer": "Mr. Birling"
    },
    {
      "q": "The line: 'We don’t live alone. We are members of one body. We are responsible for each other.' is repeated to emphasize:",
      "options": [
        "The play’s central theme of social responsibility",
        "The romantic subplot",
        "The comedy elements",
        "The historical setting"
      ],
      "answer": "The play’s central theme of social responsibility"
    },
    {
      "q": "Which character attempts to maintain appearances and protect the family’s reputation at all costs?",
      "options": [
        "Mrs. Birling",
        "Sheila Birling",
        "Inspector Goole",
        "Gerald Croft"
      ],
      "answer": "Mrs. Birling"
    },
    {
      "q": "Read the passage: 'I speak as a hard-headed business man.' This is Mr. Birling. What literary device is being used when the audience knows WWI will occur shortly after 1912?",
      "options": [
        "Dramatic irony",
        "Foreshadowing",
        "Personification",
        "Alliteration"
      ],
      "answer": "Dramatic irony"
    },
    {
      "q": "The play’s emphasis on the moral failings of each character serves to illustrate:",
      "options": [
        "The consequences of neglecting social responsibility",
        "The importance of romantic love",
        "The power of wealth",
        "The inevitability of war"
      ],
      "answer": "The consequences of neglecting social responsibility"
    },
    {
      "q": "Sheila’s reaction to Eva Smith’s death demonstrates:",
      "options": [
        "Empathy and moral awareness",
        "Greed and selfishness",
        "Romantic interest",
        "Ignorance of society"
      ],
      "answer": "Empathy and moral awareness"
    },
    {
      "q": "Which character is the moral centre of the play, urging the others to take responsibility for their actions?",
      "options": [
        "Inspector Goole",
        "Mr. Birling",
        "Gerald Croft",
        "Mrs. Birling"
      ],
      "answer": "Inspector Goole"
    },
    {
      "q": "The play ends with a twist regarding the Inspector’s identity. This is an example of:",
      "options": [
        "Suspense",
        "Irony",
        "Foreshadowing",
        "Personification"
      ],
      "answer": "Suspense"
    },
    {
      "q": "The underlying message of the play is best described as:",
      "options": [
        "Moral responsibility and social conscience",
        "The pursuit of wealth",
        "Romantic love conquers all",
        "Historical accuracy"
      ],
      "answer": "Moral responsibility and social conscience"
    }
  ]
},

//a man for all seasons

{
  "topic": "A Man for All Seasons",
  "questions": [
    {
      "q": "Who is the protagonist of *A Man for All Seasons*, known for his moral integrity?",
      "options": [
        "Sir Thomas More",
        "King Henry VIII",
        "Thomas Cromwell",
        "Richard Rich"
      ],
      "answer": "Sir Thomas More"
    },
    {
      "q": "Which character pressures More to endorse King Henry VIII’s divorce from Catherine of Aragon?",
      "options": [
        "Thomas Cromwell",
        "Duke of Norfolk",
        "Richard Rich",
        "Chapman"
      ],
      "answer": "Thomas Cromwell"
    },
    {
      "q": "The line: 'I die the king’s good servant—but God’s first.' reflects which theme?",
      "options": [
        "Moral integrity and conscience",
        "Ambition",
        "Political deceit",
        "Romantic love"
      ],
      "answer": "Moral integrity and conscience"
    },
    {
      "q": "Which character betrays More to gain personal advantage and power?",
      "options": [
        "Richard Rich",
        "Duke of Norfolk",
        "Chapman",
        "King Henry VIII"
      ],
      "answer": "Richard Rich"
    },
    {
      "q": "The central conflict in the play is primarily between:",
      "options": [
        "Conscience and authority",
        "Love and friendship",
        "Wealth and poverty",
        "War and peace"
      ],
      "answer": "Conscience and authority"
    },
    {
      "q": "Which historical period does the play depict?",
      "options": [
        "The reign of King Henry VIII in 16th century England",
        "The Victorian Era",
        "Elizabethan Era",
        "The English Civil War"
      ],
      "answer": "The reign of King Henry VIII in 16th century England"
    },
    {
      "q": "More refuses to sign the Act of Supremacy, which declares the king the head of the Church of England. This illustrates:",
      "options": [
        "Conflict between conscience and political pressure",
        "Greed for wealth",
        "Romantic interest",
        "Desire for revenge"
      ],
      "answer": "Conflict between conscience and political pressure"
    },
    {
      "q": "Which character is loyal to More and offers support but cannot prevent his downfall?",
      "options": [
        "Duke of Norfolk",
        "Thomas Cromwell",
        "Richard Rich",
        "King Henry VIII"
      ],
      "answer": "Duke of Norfolk"
    },
    {
      "q": "The title *A Man for All Seasons* refers to:",
      "options": [
        "More’s unwavering integrity and adaptability to circumstances",
        "The weather in England",
        "A seasonal festival",
        "Cromwell’s political maneuvers"
      ],
      "answer": "More’s unwavering integrity and adaptability to circumstances"
    },
    {
      "q": "The trial and execution of More highlight which dramatic technique used by Bolt?",
      "options": [
        "Suspense and moral dilemma",
        "Comic relief",
        "Romantic subplot",
        "Foreshadowing only"
      ],
      "answer": "Suspense and moral dilemma"
    },
    {
      "q": "Which character embodies political cunning and manipulation in the play?",
      "options": [
        "Thomas Cromwell",
        "Sir Thomas More",
        "Richard Rich",
        "Duke of Norfolk"
      ],
      "answer": "Thomas Cromwell"
    },
    {
      "q": "Read the line: 'When statesmen forsake their conscience, they pave the way for tyranny.' This illustrates:",
      "options": [
        "Bolt’s emphasis on moral responsibility",
        "Romantic love",
        "Historical accuracy",
        "Tragic irony"
      ],
      "answer": "Bolt’s emphasis on moral responsibility"
    },
    {
      "q": "Richard Rich’s rise to power despite betraying More highlights which theme?",
      "options": [
        "Corruption and ambition",
        "Love and loyalty",
        "Conscience",
        "Generosity"
      ],
      "answer": "Corruption and ambition"
    },
    {
      "q": "More’s interactions with his family, particularly his daughter Margaret, illustrate:",
      "options": [
        "The human side of moral integrity",
        "Political strategy",
        "Comic relief",
        "Historical research"
      ],
      "answer": "The human side of moral integrity"
    },
    {
      "q": "The play’s climax, where More is executed, serves to:",
      "options": [
        "Emphasize the consequences of staying true to conscience",
        "Introduce a love story",
        "Provide humor",
        "Show historical chronology"
      ],
      "answer": "Emphasize the consequences of staying true to conscience"
    },
    {
      "q": "Bolt uses the character of Thomas More to contrast with which figure in the play?",
      "options": [
        "Thomas Cromwell",
        "Duke of Norfolk",
        "Richard Rich",
        "King Henry VIII"
      ],
      "answer": "Thomas Cromwell"
    },
    {
      "q": "Which literary device is used in More’s final words: 'I die the king’s good servant—but God’s first'?",
      "options": [
        "Antithesis",
        "Metaphor",
        "Alliteration",
        "Foreshadowing"
      ],
      "answer": "Antithesis"
    },
    {
      "q": "The play emphasizes the idea that integrity:",
      "options": [
        "Is more valuable than political power",
        "Can be easily compromised",
        "Is irrelevant in politics",
        "Depends on wealth"
      ],
      "answer": "Is more valuable than political power"
    },
    {
      "q": "The tension between personal beliefs and societal pressure in the play illustrates:",
      "options": [
        "A universal moral conflict",
        "Romantic tension",
        "Historical triviality",
        "Comic irony"
      ],
      "answer": "A universal moral conflict"
    },
    {
      "q": "Bolt’s play is classified as which genre?",
      "options": [
        "Historical drama",
        "Comedy",
        "Tragic romance",
        "Farce"
      ],
      "answer": "Historical drama"
    }
  ]
},

//once upon an elephant

{
  "topic": "Once Upon an Elephant",
  "questions": [
    {
      "q": "What is the central theme of *Once Upon an Elephant*?",
      "options": [
        "The destruction of forests",
        "The tyranny and corruption of power",
        "Romantic love",
        "Adventure in the wild"
      ],
      "answer": "The tyranny and corruption of power"
    },
    {
      "q": "In the play, the character Ajanaku symbolizes:",
      "options": [
        "A wise leader",
        "A tyrant whose rule harms the people",
        "A comic relief figure",
        "A gentle caretaker"
      ],
      "answer": "A tyrant whose rule harms the people"
    },
    {
      "q": "Which literary technique is heavily used to criticize bad leadership in the play?",
      "options": [
        "Satire",
        "Romantic imagery",
        "Epic simile",
        "Hyperbole alone"
      ],
      "answer": "Satire"
    },
    {
      "q": "The title *Once Upon an Elephant* is a metaphor for:",
      "options": [
        "A peaceful kingdom",
        "An oppressive and overbearing ruler",
        "A forest animal adventure",
        "A historical battle"
      ],
      "answer": "An oppressive and overbearing ruler"
    },
    {
      "q": "What role do the chiefs and Serubawon play in Ajanaku’s rise to power?",
      "options": [
        "They oppose his ambition",
        "They help him seize the throne through betrayal",
        "They flee the village",
        "They serve as moral guides"
      ],
      "answer": "They help him seize the throne through betrayal"
    },
    {
      "q": "What dramatic device is used when characters comment on events through traditional songs or chants?",
      "options": [
        "Chorus",
        "Aside",
        "Flashback",
        "Soliloquy"
      ],
      "answer": "Chorus"
    },
    {
      "q": "Which character most clearly foreshadows Ajanaku’s downfall?",
      "options": [
        "Iya Agba",
        "Odejimi",
        "Odegbami",
        "Ogundele"
      ],
      "answer": "Iya Agba"
    },
    {
      "q": "The horrific Ijedodo ritual in the play serves primarily to:",
      "options": [
        "Provide comic relief",
        "Underscore the brutal misuse of tradition for power",
        "Celebrate cultural rites",
        "Introduce a romantic subplot"
      ],
      "answer": "Underscore the brutal misuse of tradition for power"
    },
    {
      "q": "Which motif reappears to show how traditional beliefs are distorted by corrupt leaders?",
      "options": [
        "Proverbs and folklore",
        "Animal fables only",
        "Weather changes",
        "Dream sequences"
      ],
      "answer": "Proverbs and folklore"
    },
    {
      "q": "How does the play portray the ordinary people under Ajanaku’s rule?",
      "options": [
        "As empowered and free",
        "As oppressed and suffering",
        "As wealthy traders",
        "As indifferent to leadership"
      ],
      "answer": "As oppressed and suffering"
    },
    {
      "q": "Which dramatic technique is used when background singers repeat refrains that reinforce meaning?",
      "options": [
        "Chorus",
        "Stage directions",
        "Flashback",
        "Monologue"
      ],
      "answer": "Chorus"
    },
    {
      "q": "The character of Serubawon in the play mainly represents:",
      "options": [
        "A loyal and honest advisor",
        "An opportunist who fuels tyranny",
        "A tragic hero",
        "A mysterious outsider"
      ],
      "answer": "An opportunist who fuels tyranny"
    },
    {
      "q": "The downfall of Ajanaku best illustrates which moral lesson?",
      "options": [
        "No tyrant, no matter how powerful, is permanent",
        "Power always brings happiness",
        "Tradition must never be questioned",
        "The strongest always survive"
      ],
      "answer": "No tyrant, no matter how powerful, is permanent"
    },
    {
      "q": "Which theme in the play highlights how leaders misuse justice for self‑interest?",
      "options": [
        "Corruption and abuse of power",
        "Romantic love",
        "Economic prosperity",
        "Scientific progress"
      ],
      "answer": "Corruption and abuse of power"
    },
    {
      "q": "In the play’s critique, the elephant imagery most closely relates to:",
      "options": [
        "Gentle helping",
        "Overbearing political might",
        "Playful exploration",
        "Mythical adventure"
      ],
      "answer": "Overbearing political might"
    },
    {
      "q": "Which device is employed when background characters reflect on or comment about the main action?",
      "options": [
        "Chorus",
        "Personification",
        "Foreshadowing",
        "Alliteration"
      ],
      "answer": "Chorus"
    },
    {
      "q": "Which character challenges traditional rites when they are wrongly applied?",
      "options": [
        "Ogundele",
        "Ajanaku",
        "Serubawon",
        "Odejimi"
      ],
      "answer": "Ogundele"
    },
    {
      "q": "The play’s use of Yoruba folklore and proverbs primarily serves to:",
      "options": [
        "Ground the drama in African cultural context and critique social issues",
        "Serve as comic relief",
        "Describe wildlife",
        "Explain scientific phenomena"
      ],
      "answer": "Ground the drama in African cultural context and critique social issues"
    },
    {
      "q": "The eventual collapse of Ajanaku’s reign signifies:",
      "options": [
        "The triumph of despotic rule",
        "The inevitability of accountability for power abuses",
        "A celebration of dictatorship",
        "Victory for tradition without justice"
      ],
      "answer": "The inevitability of accountability for power abuses"
    }
  ]
},

//the marriage of anansewa

{
  "topic": "The Marriage of Anansewa",
  "questions": [
    {
      "q": "Who is the father whose schemes drive the action in *The Marriage of Anansewa*?",
      "options": [
        "Ananse",
        "Akwasi",
        "Chief‑Who‑Is‑Chief",
        "Miss Christie"
      ],
      "answer": "Ananse"
    },
    {
      "q": "What motivates Ananse’s plan to marry off his daughter to wealthy suitors?",
      "options": [
        "Poverty and ambition",
        "Romantic love",
        "Fear of tradition",
        "Religious belief"
      ],
      "answer": "Poverty and ambition"
    },
    {
      "q": "In the play, Ananse tricks multiple chiefs by:",
      "options": [
        "Sending each a photo of his daughter and inviting them to propose without telling them about the others",
        "Abandoning them in the forest",
        "Asking them to fight for her hand",
        "Making fake wedding rings"
      ],
      "answer": "Sending each a photo of his daughter and inviting them to propose without telling them about the others"
    },
    {
      "q": "Which theme deals with the way marriage becomes like a business transaction in the play?",
      "options": [
        "Marriage as a transaction",
        "Childhood and innocence",
        "War and peace",
        "Heroism"
      ],
      "answer": "Marriage as a transaction"
    },
    {
      "q": "Anansewa initially protests her father’s plans because she feels she is being treated like:",
      "options": [
        "An object or commodity",
        "A queen",
        "A storyteller",
        "A servant"
      ],
      "answer": "An object or commodity"
    },
    {
      "q": "Which character in the play serves as the voice of traditional storytelling and guides the audience through the action?",
      "options": [
        "The Narrator/Storyteller",
        "Miss Christie",
        "Chief‑Who‑Is‑Chief",
        "Anansewa"
      ],
      "answer": "The Narrator/Storyteller"
    },
    {
      "q": "The use of songs, dances, and direct audience address in *The Marriage of Anansewa* reflects the dramatic form known as:",
      "options": [
        "Anansegoro",
        "Tragedy",
        "Melodrama",
        "Epic theatre"
      ],
      "answer": "Anansegoro"
    },
    {
      "q": "Which theme explores the conflict between generational expectations and a young woman’s autonomy?",
      "options": [
        "Parental control vs individual freedom",
        "War and victory",
        "Nature’s power",
        "Religious devotion"
      ],
      "answer": "Parental control vs individual freedom"
    },
    {
      "q": "The play satirizes greed and materialism by showing how Ananse’s schemes exploit:",
      "options": [
        "Traditional marriage customs for personal gain",
        "Religious ceremonies",
        "School examinations",
        "Local festivals"
      ],
      "answer": "Traditional marriage customs for personal gain"
    },
    {
      "q": "Anansewa’s eventual agreement to marry Chief‑Who‑Is‑Chief illustrates:",
      "options": [
        "Love and sincerity prevailing over mere material wealth",
        "Her complete submission without question",
        "Her fear of her father",
        "A rejection of marriage altogether"
      ],
      "answer": "Love and sincerity prevailing over mere material wealth"
    },
    {
      "q": "Which device is used when the Narrator breaks the fourth wall to speak directly to the audience?",
      "options": [
        "Direct address",
        "Irony",
        "Flashback",
        "Foreshadowing"
      ],
      "answer": "Direct address"
    },
    {
      "q": "Ananse uses the traditional ceremony of bride price to:",
      "options": [
        "Extract gifts and wealth from the chiefs",
        "Celebrate his daughter’s education",
        "Lead a protest",
        "Sing traditional songs"
      ],
      "answer": "Extract gifts and wealth from the chiefs"
    },
    {
      "q": "The theme of female empowerment in the play is shown when Anansewa:",
      "options": [
        "Takes part in decisions about her marriage",
        "Runs away from home",
        "Refuses to speak at all",
        "Becomes a storyteller"
      ],
      "answer": "Takes part in decisions about her marriage"
    },
    {
      "q": "What is the effect of Ananse’s deception on the plot?",
      "options": [
        "It creates comic tension and social critique",
        "It ends the play suddenly",
        "It leads to tragedy",
        "It introduces supernatural events"
      ],
      "answer": "It creates comic tension and social critique"
    },
    {
      "q": "The play’s critique of marriage customs primarily exposes:",
      "options": [
        "How culture can be manipulated for selfish gain",
        "The beauty of all traditions unchanged",
        "The horrors of war",
        "The need for modern technology"
      ],
      "answer": "How culture can be manipulated for selfish gain"
    },
    {
      "q": "Which theme highlights the tension between tradition and changing modern ideas?",
      "options": [
        "Tradition vs modernity",
        "Nature vs nurture",
        "Childhood vs adulthood",
        "Faith vs reason"
      ],
      "answer": "Tradition vs modernity"
    },
    {
      "q": "The title ‘*The Marriage of Anansewa*’ symbolically refers to:",
      "options": [
        "The cultural complexities of marriage in Ghanaian society",
        "A heroic battle",
        "A tragic loss of life",
        "A ghost story"
      ],
      "answer": "The cultural complexities of marriage in Ghanaian society"
    },
    {
      "q": "The comic style of the play, despite its social critique, is best described as:",
      "options": [
        "Satirical comedy",
        "Romantic comedy",
        "Tragedy",
        "Melodrama"
      ],
      "answer": "Satirical comedy"
    },
    {
      "q": "Ananse’s success in outwitting the chiefs suggests what about the role of wit in the play?",
      "options": [
        "Cleverness can be a tool for survival but raises moral questions",
        "Strength alone is the most important",
        "Love is irrelevant",
        "Violence is essential"
      ],
      "answer": "Cleverness can be a tool for survival but raises moral questions"
    }
  ]
},


//to kill a mocking bird

{
  "topic": "To Kill a Mockingbird",
  "questions": [
    {
      "q": "Who is the narrator of *To Kill a Mockingbird*?",
      "options": [
        "Scout Finch",
        "Atticus Finch",
        "Jem Finch",
        "Dill Harris"
      ],
      "answer": "Scout Finch"
    },
    {
      "q": "Which character serves as a moral guide and defends Tom Robinson in court?",
      "options": [
        "Atticus Finch",
        "Boo Radley",
        "Bob Ewell",
        "Calpurnia"
      ],
      "answer": "Atticus Finch"
    },
    {
      "q": "Tom Robinson is accused of:",
      "options": [
        "Raping Mayella Ewell",
        "Stealing money",
        "Setting fire to a house",
        "Kidnapping Scout"
      ],
      "answer": "Raping Mayella Ewell"
    },
    {
      "q": "The Finch children’s neighbor, mysterious and reclusive, is:",
      "options": [
        "Boo Radley",
        "Tom Robinson",
        "Dill Harris",
        "Bob Ewell"
      ],
      "answer": "Boo Radley"
    },
    {
      "q": "Which theme is central to the novel, highlighted through the trial of Tom Robinson?",
      "options": [
        "Racial injustice and prejudice",
        "Romantic love",
        "War and peace",
        "Wealth and greed"
      ],
      "answer": "Racial injustice and prejudice"
    },
    {
      "q": "Scout’s father, Atticus Finch, teaches her to:",
      "options": [
        "Empathize with others and fight for justice",
        "Avoid school",
        "Ignore social issues",
        "Seek revenge"
      ],
      "answer": "Empathize with others and fight for justice"
    },
    {
      "q": "Read the line: 'You never really understand a person until you consider things from his point of view.' This illustrates which literary device?",
      "options": [
        "Theme and moral lesson",
        "Irony",
        "Foreshadowing",
        "Alliteration"
      ],
      "answer": "Theme and moral lesson"
    },
    {
      "q": "The town in which the novel is set is:",
      "options": [
        "Maycomb, Alabama",
        "Monroeville",
        "Atlanta, Georgia",
        "Memphis, Tennessee"
      ],
      "answer": "Maycomb, Alabama"
    },
    {
      "q": "The children’s fascination with Boo Radley primarily serves to explore:",
      "options": [
        "Prejudice, fear, and the loss of innocence",
        "Romantic love",
        "Political conflict",
        "Economic hardship"
      ],
      "answer": "Prejudice, fear, and the loss of innocence"
    },
    {
      "q": "Which character represents the evils of racism and ignorance in the novel?",
      "options": [
        "Bob Ewell",
        "Atticus Finch",
        "Calpurnia",
        "Dill Harris"
      ],
      "answer": "Bob Ewell"
    },
    {
      "q": "Scout’s first-grade teacher is frustrated with her ability to read. This event highlights:",
      "options": [
        "Conflict between institutional expectations and individual abilities",
        "Racial injustice",
        "Romantic tension",
        "Historical commentary"
      ],
      "answer": "Conflict between institutional expectations and individual abilities"
    },
    {
      "q": "Atticus’s defense of Tom Robinson demonstrates:",
      "options": [
        "Courage and moral integrity",
        "Ignorance and fear",
        "Greed",
        "Indifference"
      ],
      "answer": "Courage and moral integrity"
    },
    {
      "q": "The mockingbird is a symbol of:",
      "options": [
        "Innocence and harmlessness",
        "Greed",
        "Violence",
        "Ignorance"
      ],
      "answer": "Innocence and harmlessness"
    },
    {
      "q": "Boo Radley saves Scout and Jem from an attack. This event illustrates:",
      "options": [
        "The theme of compassion and human goodness",
        "Romantic love",
        "Racial injustice",
        "Political corruption"
      ],
      "answer": "The theme of compassion and human goodness"
    },
    {
      "q": "Which character is the moral conscience of the novel?",
      "options": [
        "Atticus Finch",
        "Scout Finch",
        "Bob Ewell",
        "Dill Harris"
      ],
      "answer": "Atticus Finch"
    },
    {
      "q": "Read the passage: 'It’s a sin to kill a mockingbird.' What does it metaphorically warn against?",
      "options": [
        "Harming innocent and good people",
        "Punishing criminals",
        "Breaking laws",
        "Revenge"
      ],
      "answer": "Harming innocent and good people"
    },
    {
      "q": "Scout, Jem, and Dill’s attempts to see Boo Radley primarily illustrate:",
      "options": [
        "Childhood curiosity and innocence",
        "Political activism",
        "Moral failure",
        "Romantic adventure"
      ],
      "answer": "Childhood curiosity and innocence"
    },
    {
      "q": "The verdict in Tom Robinson’s trial is:",
      "options": [
        "Guilty, despite evidence proving innocence",
        "Not guilty",
        "Dismissed",
        "Hung jury"
      ],
      "answer": "Guilty, despite evidence proving innocence"
    },
    {
      "q": "Harper Lee uses the children’s perspective to:",
      "options": [
        "Expose social prejudice while retaining innocence",
        "Offer historical accuracy",
        "Provide romantic comedy",
        "Introduce political satire"
      ],
      "answer": "Expose social prejudice while retaining innocence"
    },
    {
      "q": "A major lesson from the novel is:",
      "options": [
        "The importance of empathy and fighting injustice",
        "Wealth guarantees happiness",
        "Revenge solves conflicts",
        "Ignorance is strength"
      ],
      "answer": "The importance of empathy and fighting injustice"
    }
  ]
},


    ],
    
    Government: [
      {
  "topic": "Meaning, Scope and Functions of Government",
  "questions": [
    {
      "q": "What is government?",
      "options": ["A group of friends managing society", "The machinery and institutions through which a state is ruled or controlled", "An association for entertainment", "A private business organization"],
      "answer": "The machinery and institutions through which a state is ruled or controlled"
    },
    {
      "q": "Which of the following BEST describes the scope of government?",
      "options": ["The areas, activities, and responsibilities covered by government", "The number of citizens in a state", "Only the president’s duties", "Only taxation"],
      "answer": "The areas, activities, and responsibilities covered by government"
    },
    {
      "q": "Government as an institution of the state refers to:",
      "options": ["Family members living together", "The body of persons and institutions that make and enforce laws", "A political party", "A voluntary organization"],
      "answer": "The body of persons and institutions that make and enforce laws"
    },
    {
      "q": "Which of these is NOT part of the scope of government?",
      "options": ["Maintenance of law and order", "Provision of social amenities", "Preparation of food for households", "Protection of lives and property"],
      "answer": "Preparation of food for households"
    },
    {
      "q": "Which of the following is a major purpose of government?",
      "options": ["To create disorder", "To maintain peace, order, and stability", "To encourage corruption", "To abolish laws"],
      "answer": "To maintain peace, order, and stability"
    },
    {
      "q": "The body responsible for making laws in a country is the:",
      "options": ["Executive", "Legislature", "Judiciary", "Police force"],
      "answer": "Legislature"
    },
    {
      "q": "Which arm of government interprets the law?",
      "options": ["The Executive", "The Judiciary", "The Legislature", "The Civil service"],
      "answer": "The Judiciary"
    },
    {
      "q": "Government helps to protect the rights of citizens by:",
      "options": ["Providing armed robbers", "Making and enforcing laws", "Banning education", "Removing security agencies"],
      "answer": "Making and enforcing laws"
    },
    {
      "q": "Which of the following is NOT a function of government?",
      "options": ["Provision of security", "Administration of justice", "Economic planning", "Planning family size for citizens"],
      "answer": "Planning family size for citizens"
    },
    {
      "q": "Government as a process refers to:",
      "options": ["The activities involved in governing", "A political party’s meeting", "Only elections", "Public holidays"],
      "answer": "The activities involved in governing"
    },
    {
      "q": "Which of these is a political function of government?",
      "options": ["Repairing mobile phones", "Conducting elections", "Cooking for citizens", "Making movies"],
      "answer": "Conducting elections"
    },
    {
      "q": "A major economic function of government is:",
      "options": ["Taxation and budgeting", "Teaching only mathematics", "Building private businesses", "Importing only luxury goods"],
      "answer": "Taxation and budgeting"
    },
    {
      "q": "A social function of government is to:",
      "options": ["Provide healthcare and education", "Encourage crime", "Ban public transport", "Promote hunger"],
      "answer": "Provide healthcare and education"
    },
    {
      "q": "Who is responsible for implementing and enforcing laws?",
      "options": ["Executive", "Legislature", "Judiciary", "Civil society"],
      "answer": "Executive"
    },
    {
      "q": "One reason why government is necessary is:",
      "options": ["To ensure lawlessness", "To maintain social order", "To create confusion", "To increase crime"],
      "answer": "To maintain social order"
    },
    {
      "q": "The term 'state' refers to:",
      "options": ["A group of villages", "A politically organized body of people occupying a definite territory with government", "A school building", "A church group"],
      "answer": "A politically organized body of people occupying a definite territory with government"
    },
    {
      "q": "The civil service belongs to which arm of government?",
      "options": ["Judiciary", "Executive", "Legislature", "Private sector"],
      "answer": "Executive"
    },
    {
      "q": "Which of the following is an example of government maintaining law and order?",
      "options": ["Establishing police and courts", "Encouraging riots", "Banning rules", "Ignoring crimes"],
      "answer": "Establishing police and courts"
    },
    {
      "q": "What is one importance of government to citizens?",
      "options": ["Protection of fundamental human rights", "Teaching only personal lessons", "Increasing tribal conflict", "Promoting injustice"],
      "answer": "Protection of fundamental human rights"
    },
    {
      "q": "The arm of government that resolves disputes is the:",
      "options": ["Executive", "Judiciary", "Legislature", "Police force"],
      "answer": "Judiciary"
    }
  ]
},

{
  "topic": "Basic Concepts of Government",
  "questions": [
    {
      "q": "What is power in government?",
      "options": ["The ability to dance well", "The capacity to influence or control the behaviour of others", "A type of electricity", "A form of entertainment"],
      "answer": "The capacity to influence or control the behaviour of others"
    },
    {
      "q": "Authority refers to:",
      "options": ["Power without legitimacy", "The legitimate right to exercise power", "Any form of punishment", "The ability to sing loudly"],
      "answer": "The legitimate right to exercise power"
    },
    {
      "q": "Legitimacy in government means:",
      "options": ["People willingly accept the government’s right to rule", "A government that rules secretly", "A government that uses only force", "Citizens ignoring laws"],
      "answer": "People willingly accept the government’s right to rule"
    },
    {
      "q": "Which of the following best describes sovereignty?",
      "options": ["The power of traditional rulers only", "Absolute power of a state to rule itself without external control", "A shared power between neighbours", "The influence of religious leaders"],
      "answer": "Absolute power of a state to rule itself without external control"
    },
    {
      "q": "A state must possess all the following EXCEPT:",
      "options": ["Population", "Territory", "Government", "Sports stadium"],
      "answer": "Sports stadium"
    },
    {
      "q": "Which of these is NOT a feature of a state?",
      "options": ["Sovereignty", "Government", "Defined territory", "Multiple football clubs"],
      "answer": "Multiple football clubs"
    },
    {
      "q": "Nation refers to:",
      "options": ["People who share common identity, culture, history, and language", "Only people living in a small village", "A group of tourists", "A company with many branches"],
      "answer": "People who share common identity, culture, history, and language"
    },
    {
      "q": "What is the main difference between a state and a nation?",
      "options": ["A state has sovereignty; a nation may not", "A nation has a constitution; a state does not", "A state has no government", "A nation must be large"],
      "answer": "A state has sovereignty; a nation may not"
    },
    {
      "q": "What is political culture?",
      "options": ["The way people dress", "The set of attitudes, beliefs, and values that people have about politics", "Holiday traditions", "Cultural dances only"],
      "answer": "The set of attitudes, beliefs, and values that people have about politics"
    },
    {
      "q": "Political socialization is the process by which:",
      "options": ["People learn about politics and develop political attitudes", "People learn farming techniques", "New holidays are created", "People learn sports"],
      "answer": "People learn about politics and develop political attitudes"
    },
    {
      "q": "Which of the following is an agent of political socialization?",
      "options": ["Schools and educational institutions", "Animals", "Weather", "Foreign currencies"],
      "answer": "Schools and educational institutions"
    },
    {
      "q": "Citizenship means:",
      "options": ["Belonging to a political party", "Legal membership of a state", "Owning a passport of any country", "Being a tourist"],
      "answer": "Legal membership of a state"
    },
    {
      "q": "Political participation involves:",
      "options": ["Taking part in political activities such as voting", "Buying goods in the market", "Reading novels", "Travelling abroad"],
      "answer": "Taking part in political activities such as voting"
    },
    {
      "q": "Which of these is an example of political participation?",
      "options": ["Voting in elections", "Watching football", "Cooking at home", "Selling in the market"],
      "answer": "Voting in elections"
    },
    {
      "q": "State sovereignty can be classified into:",
      "options": ["Internal and external sovereignty", "Large and small sovereignty", "Public and private sovereignty", "Legal and illegal sovereignty"],
      "answer": "Internal and external sovereignty"
    },
    {
      "q": "What is the meaning of constitutionalism?",
      "options": ["Respect for the constitution and limitation of government powers", "Disobeying rules", "Using police to control everything", "Ignoring human rights"],
      "answer": "Respect for the constitution and limitation of government powers"
    },
    {
      "q": "Political power can be obtained in all the following ways EXCEPT:",
      "options": ["Election", "Inheritance", "Coercion or force", "Cooking"],
      "answer": "Cooking"
    },
    {
      "q": "The rule of law refers to:",
      "options": ["Government must obey the law and all citizens are equal before the law", "Government officials can do anything they want", "Only rich people obey the law", "Judges make laws secretly"],
      "answer": "Government must obey the law and all citizens are equal before the law"
    },
    {
      "q": "Nationalism can be defined as:",
      "options": ["Love and loyalty to one's nation", "Hatred for government", "Desire to travel abroad", "Love for foreign culture"],
      "answer": "Love and loyalty to one's nation"
    },
    {
      "q": "Which of these is NOT an element of the state?",
      "options": ["Government", "Territory", "Population", "Religion"],
      "answer": "Religion"
    }
  ]
},

{
  "topic": "Systems of Government and Economic Systems",
  "questions": [
    {
      "q": "What is a system of government?",
      "options": ["A type of musical instrument", "The way a country is politically organized and governed", "A method of farming", "A type of school administration"],
      "answer": "The way a country is politically organized and governed"
    },
    {
      "q": "Which of the following is a feature of a unitary system of government?",
      "options": ["Power is shared equally among regions", "Power is concentrated in a central authority", "State governments are stronger than the central government", "There is no central government"],
      "answer": "Power is concentrated in a central authority"
    },
    {
      "q": "A federal system of government is characterized by:",
      "options": ["Complete power for the central government", "Division of powers between central and component units", "Only local governments having power", "A government without a constitution"],
      "answer": "Division of powers between central and component units"
    },
    {
      "q": "Which of the following countries operates a federal system of government?",
      "options": ["France", "Nigeria", "Ghana", "Kenya"],
      "answer": "Nigeria"
    },
    {
      "q": "Confederal system of government means:",
      "options": ["A weak central government and strong regional governments", "Strong central government", "Only one level of government", "No government at all"],
      "answer": "A weak central government and strong regional governments"
    },
    {
      "q": "Which of these is an advantage of a federal system?",
      "options": ["Uniform laws for all regions", "Promotion of local autonomy", "Centralized dictatorship", "Less representation"],
      "answer": "Promotion of local autonomy"
    },
    {
      "q": "Which is a disadvantage of a unitary system?",
      "options": ["Duplication of functions", "Slow decision-making", "Over-centralization of power", "Weak central authority"],
      "answer": "Over-centralization of power"
    },
    {
      "q": "In a presidential system of government:",
      "options": ["The president is both head of state and head of government", "The president is ceremonial only", "The prime minister leads the government", "Courts make government policies"],
      "answer": "The president is both head of state and head of government"
    },
    {
      "q": "A parliamentary system of government is also called:",
      "options": ["Cabinet system", "Confederal system", "Unitary system", "Imperial system"],
      "answer": "Cabinet system"
    },
    {
      "q": "In a parliamentary system, the prime minister emerges from:",
      "options": ["The army", "The ruling political party in parliament", "The judiciary", "The civil service"],
      "answer": "The ruling political party in parliament"
    },
    {
      "q": "Which of the following is an advantage of the presidential system?",
      "options": ["Fusion of powers", "Clear separation of powers", "No fixed tenure", "Prime minister controls the president"],
      "answer": "Clear separation of powers"
    },
    {
      "q": "Which is a disadvantage of the parliamentary system?",
      "options": ["Unstable government due to frequent votes of no confidence", "Too much separation of powers", "Too slow decision-making", "No accountability"],
      "answer": "Unstable government due to frequent votes of no confidence"
    },
    {
      "q": "What is an economic system?",
      "options": ["A country's method of producing, distributing, and consuming goods and services", "A type of political party", "The process of electing leaders", "A type of school exam"],
      "answer": "A country's method of producing, distributing, and consuming goods and services"
    },
    {
      "q": "Which of the following is a feature of capitalism?",
      "options": ["Government owns all means of production", "Private ownership of property and businesses", "No competition allowed", "Prices controlled only by government"],
      "answer": "Private ownership of property and businesses"
    },
    {
      "q": "Socialism is based on:",
      "options": ["Private ownership of factories", "Government ownership and control of major means of production", "Free market economy", "Absence of planning"],
      "answer": "Government ownership and control of major means of production"
    },
    {
      "q": "A mixed economic system combines features of:",
      "options": ["Capitalism and socialism", "Democracy and monarchy", "Feudalism and communism", "Unitary and federal systems"],
      "answer": "Capitalism and socialism"
    },
    {
      "q": "Communism advocates:",
      "options": ["Classless society and common ownership of resources", "Private property", "Competition among individuals", "Only traditional leadership"],
      "answer": "Classless society and common ownership of resources"
    },
    {
      "q": "A disadvantage of capitalism is:",
      "options": ["Competition", "Encouragement of innovation", "Possibility of income inequality", "Consumer choice"],
      "answer": "Possibility of income inequality"
    },
    {
      "q": "Which is an advantage of socialism?",
      "options": ["Elimination of exploitation", "High level of inequality", "Weak government control", "Absence of social welfare"],
      "answer": "Elimination of exploitation"
    },
    {
      "q": "Traditional economic system is based on:",
      "options": ["Customs, beliefs, and age-long practices", "Advanced technology", "Heavy government control", "Large-scale industries"],
      "answer": "Customs, beliefs, and age-long practices"
    }
  ]
},

{
  "topic": "Forms of Government",
  "questions": [
    {
      "q": "What are forms of government?",
      "options": ["Ways citizens pay tax", "The structure through which political power is organized and exercised in a state", "Types of schools in a country", "Methods of farming"],
      "answer": "The structure through which political power is organized and exercised in a state"
    },
    {
      "q": "Democracy is a form of government where:",
      "options": ["Power belongs to one person", "People rule directly or through elected representatives", "The army controls the state", "Religious leaders make all decisions"],
      "answer": "People rule directly or through elected representatives"
    },
    {
      "q": "Which of the following is a key feature of democracy?",
      "options": ["Suppression of opposition", "Free and fair elections", "Government by one family", "No rule of law"],
      "answer": "Free and fair elections"
    },
    {
      "q": "Autocracy refers to:",
      "options": ["Rule by many people", "Rule by a single individual with absolute power", "Rule by elected representatives", "Government by religious leaders"],
      "answer": "Rule by a single individual with absolute power"
    },
    {
      "q": "A government ruled by a king or queen is called:",
      "options": ["Democracy", "Oligarchy", "Monarchy", "Plutocracy"],
      "answer": "Monarchy"
    },
    {
      "q": "Which type of monarchy allows the monarch limited or no powers?",
      "options": ["Absolute monarchy", "Constitutional monarchy", "Military monarchy", "Feudal monarchy"],
      "answer": "Constitutional monarchy"
    },
    {
      "q": "In an absolute monarchy:",
      "options": ["The king’s powers are limited by a constitution", "The king has total and unrestricted power", "People elect their leaders", "The judiciary is supreme"],
      "answer": "The king has total and unrestricted power"
    },
    {
      "q": "Oligarchy is a system where:",
      "options": ["One person rules", "A small group of people rule", "Every citizen rules directly", "Religious leaders rule"],
      "answer": "A small group of people rule"
    },
    {
      "q": "A government ruled by the wealthy or upper class is called:",
      "options": ["Theocracy", "Plutocracy", "Democracy", "Aristocracy"],
      "answer": "Plutocracy"
    },
    {
      "q": "Theocracy is a form of government where:",
      "options": ["Religious leaders govern based on religious laws", "Soldiers control the state", "The rich rule all institutions", "Kings rule forever"],
      "answer": "Religious leaders govern based on religious laws"
    },
    {
      "q": "Which form of government is based on military control?",
      "options": ["Democracy", "Military rule", "Theocracy", "Monarchy"],
      "answer": "Military rule"
    },
    {
      "q": "Aristocracy refers to rule by:",
      "options": ["The common people", "The noble or privileged class", "The military", "Foreigners"],
      "answer": "The noble or privileged class"
    },
    {
      "q": "Which of the following is a characteristic of dictatorship?",
      "options": ["Respect for human rights", "Absolute power by one leader", "Freedom of the press", "Regular free elections"],
      "answer": "Absolute power by one leader"
    },
    {
      "q": "Which system allows citizens to vote directly on issues?",
      "options": ["Indirect democracy", "Direct democracy", "Military rule", "Aristocracy"],
      "answer": "Direct democracy"
    },
    {
      "q": "Indirect democracy is also known as:",
      "options": ["Representative democracy", "Absolute democracy", "Autocracy", "Theocracy"],
      "answer": "Representative democracy"
    },
    {
      "q": "Which form of government combines both elected officials and monarchy?",
      "options": ["Oligarchy", "Constitutional monarchy", "Theocracy", "Military rule"],
      "answer": "Constitutional monarchy"
    },
    {
      "q": "A totalitarian government is one that:",
      "options": ["Allows complete freedom of speech", "Controls every aspect of citizens’ lives", "Runs only the army", "Encourages opposition parties"],
      "answer": "Controls every aspect of citizens’ lives"
    },
    {
      "q": "Which of these is NOT a democratic feature?",
      "options": ["Rule of law", "Regular elections", "Freedom of speech", "Suppression of opposition"],
      "answer": "Suppression of opposition"
    },
    {
      "q": "The type of government where no single individual or group has absolute power, and institutions operate independently is called:",
      "options": ["Democracy", "Totalitarianism", "Autocracy", "Feudalism"],
      "answer": "Democracy"
    },
    {
      "q": "Which of the following is an advantage of democracy?",
      "options": ["Promotes popular participation", "Suppresses opposition", "Concentrates power in one person", "Removes citizen rights"],
      "answer": "Promotes popular participation"
    }
  ]
},

{
  "topic": "Organs of Government",
  "questions": [
    {
      "q": "What are the three main organs of government?",
      "options": ["Police, Army, Navy", "Legislature, Executive, Judiciary", "Family, School, Church", "Ministers, Governors, Chiefs"],
      "answer": "Legislature, Executive, Judiciary"
    },
    {
      "q": "Which organ of government is responsible for making laws?",
      "options": ["Executive", "Judiciary", "Legislature", "Police"],
      "answer": "Legislature"
    },
    {
      "q": "The executive organ of government is responsible for:",
      "options": ["Enforcing laws", "Interpreting laws", "Making laws", "Judging election results"],
      "answer": "Enforcing laws"
    },
    {
      "q": "The judiciary's main function is to:",
      "options": ["Make laws", "Implement policies", "Interpret laws and settle disputes", "Collect taxes"],
      "answer": "Interpret laws and settle disputes"
    },
    {
      "q": "Which arm of government is led by the president or prime minister?",
      "options": ["Legislature", "Executive", "Judiciary", "Civil service"],
      "answer": "Executive"
    },
    {
      "q": "Which of the following is a function of the legislature?",
      "options": ["Execution of laws", "Law-making", "Judicial review", "Enforcement of court judgments"],
      "answer": "Law-making"
    },
    {
      "q": "Bicameral legislature refers to:",
      "options": ["One chamber of parliament", "Two chambers of parliament", "Three chambers of parliament", "Military-controlled parliament"],
      "answer": "Two chambers of parliament"
    },
    {
      "q": "Nigeria operates a ______ legislature.",
      "options": ["Unicameral", "Bicameral", "Feudal", "Aristocratic"],
      "answer": "Bicameral"
    },
    {
      "q": "What are the two houses of the Nigerian National Assembly?",
      "options": ["Upper House and Lower House", "Senate and House of Representatives", "Council of Chiefs and National Council", "House of Lords and House of Commons"],
      "answer": "Senate and House of Representatives"
    },
    {
      "q": "Which arm of government has the power to veto bills?",
      "options": ["Legislature", "Executive", "Judiciary", "Citizens"],
      "answer": "Executive"
    },
    {
      "q": "Judicial independence means:",
      "options": ["Judges are controlled by the executive", "Judges can interpret laws without fear or favor", "Judges are elected by politicians", "The judiciary makes laws alone"],
      "answer": "Judges can interpret laws without fear or favor"
    },
    {
      "q": "Which of the following is a function of the executive?",
      "options": ["Approving budgets", "Executing laws and maintaining peace", "Conducting court trials", "Interpreting the constitution"],
      "answer": "Executing laws and maintaining peace"
    },
    {
      "q": "Who is the head of the judiciary in Nigeria?",
      "options": ["Attorney-General", "President", "Chief Justice of Nigeria", "Inspector General of Police"],
      "answer": "Chief Justice of Nigeria"
    },
    {
      "q": "A unicameral legislature has:",
      "options": ["Two houses", "Only one house", "Three houses", "No house"],
      "answer": "Only one house"
    },
    {
      "q": "Checks and balances among the organs of government helps to:",
      "options": ["Concentrate power in one arm", "Prevent abuse of power", "Remove separation of powers", "Give the military more authority"],
      "answer": "Prevent abuse of power"
    },
    {
      "q": "Which arm of government can declare a law unconstitutional?",
      "options": ["Legislature", "Executive", "Judiciary", "Electoral Commission"],
      "answer": "Judiciary"
    },
    {
      "q": "Who prepares and presents the national budget?",
      "options": ["Legislature", "Executive", "Judiciary", "Civil society"],
      "answer": "Executive"
    },
    {
      "q": "Oversight functions over ministries and agencies are performed by:",
      "options": ["Judiciary", "Executive", "Legislature", "Police"],
      "answer": "Legislature"
    },
    {
      "q": "Which organ can impeach the president?",
      "options": ["Judiciary alone", "Legislature", "Executive council", "Police service"],
      "answer": "Legislature"
    },
    {
      "q": "The organ that ensures justice, protects rights, and interprets the constitution is:",
      "options": ["Legislature", "Executive", "Judiciary", "Armed forces"],
      "answer": "Judiciary"
    }
  ]
},

{
  "topic": "Political Participation",
  "questions": [
    {
      "q": "What is political participation?",
      "options": ["Taking part in political activities and decision-making processes", "Joining social clubs only", "Avoiding politics completely", "Attending only sports events"],
      "answer": "Taking part in political activities and decision-making processes"
    },
    {
      "q": "Which of the following is a form of political participation?",
      "options": ["Voting in elections", "Playing football", "Shopping at the market", "Attending concerts"],
      "answer": "Voting in elections"
    },
    {
      "q": "The most common form of political participation in a democracy is:",
      "options": ["Protesting", "Campaigning", "Voting", "Petition writing"],
      "answer": "Voting"
    },
    {
      "q": "Political apathy refers to:",
      "options": ["High political interest", "Lack of interest in political activities", "Over-participation in elections", "Supporting multiple parties at once"],
      "answer": "Lack of interest in political activities"
    },
    {
      "q": "Which of the following encourages political participation?",
      "options": ["Voter education", "Political violence", "Electoral fraud", "High cost of elections"],
      "answer": "Voter education"
    },
    {
      "q": "Pressure groups influence government decisions mainly through:",
      "options": ["Lobbying and advocacy", "Sports competitions", "Religious sermons", "Cultural dances"],
      "answer": "Lobbying and advocacy"
    },
    {
      "q": "Which group is responsible for educating voters and conducting elections?",
      "options": ["The Police", "Electoral Commission", "Judiciary", "Traditional Rulers"],
      "answer": "Electoral Commission"
    },
    {
      "q": "One reason why citizens participate in politics is to:",
      "options": ["Increase entertainment options", "Protect their interests", "Reduce population", "Create cultural festivals"],
      "answer": "Protect their interests"
    },
    {
      "q": "Running for political office is an example of:",
      "options": ["Indirect political participation", "Direct political participation", "Passive participation", "Social participation"],
      "answer": "Direct political participation"
    },
    {
      "q": "Joining a political party is classified as:",
      "options": ["Social participation", "Economic activity", "Political participation", "Judicial participation"],
      "answer": "Political participation"
    },
    {
      "q": "A town hall meeting is an example of:",
      "options": ["Political participation", "Family gathering", "Festival planning", "Economic activity"],
      "answer": "Political participation"
    },
    {
      "q": "Why do some citizens fail to participate in politics?",
      "options": ["Political apathy", "High interest in governance", "Effective leadership", "Availability of information"],
      "answer": "Political apathy"
    },
    {
      "q": "Which of these is a barrier to political participation?",
      "options": ["Free and fair elections", "Political intimidation", "Voter education", "Democratic governance"],
      "answer": "Political intimidation"
    },
    {
      "q": "Which age group is legally allowed to vote in Nigeria?",
      "options": ["10 years and above", "15 years and above", "18 years and above", "21 years and above"],
      "answer": "18 years and above"
    },
    {
      "q": "Participating in protests, rallies or demonstrations is a form of:",
      "options": ["Direct political participation", "Passive participation", "Economic participation", "Judicial participation"],
      "answer": "Direct political participation"
    },
    {
      "q": "One importance of political participation is that it:",
      "options": ["Weakens democracy", "Strengthens democracy", "Promotes dictatorship", "Discourages accountability"],
      "answer": "Strengthens democracy"
    },
    {
      "q": "Which of the following is an indirect form of political participation?",
      "options": ["Voting", "Holding political office", "Joining a pressure group", "Running for presidency"],
      "answer": "Joining a pressure group"
    },
    {
      "q": "Citizens can participate in governance by expressing their views through:",
      "options": ["Media and public discussions", "Sports events", "Market trading", "Family meetings"],
      "answer": "Media and public discussions"
    },
    {
      "q": "Standing as a candidate in an election is:",
      "options": ["A right and a form of political participation", "A punishment", "A requirement for all citizens", "A military duty"],
      "answer": "A right and a form of political participation"
    },
    {
      "q": "Community development activities such as volunteering or attending meetings are examples of:",
      "options": ["Civic participation", "Military participation", "Economic participation", "Judicial participation"],
      "answer": "Civic participation"
    }
  ]
},

{
  "topic": "Constitutions",
  "questions": [
    {
      "q": "What is a constitution?",
      "options": ["A set of religious rules", "A body of fundamental laws guiding a country", "A list of market prices", "A book of cultural traditions"],
      "answer": "A body of fundamental laws guiding a country"
    },
    {
      "q": "Which of the following describes a written constitution?",
      "options": ["Not documented", "Found in a single, formal document", "Passed down orally", "Known only by traditional rulers"],
      "answer": "Found in a single, formal document"
    },
    {
      "q": "Which type of constitution is not written down in one document?",
      "options": ["Rigid constitution", "Flexible constitution", "Unwritten constitution", "Unitary constitution"],
      "answer": "Unwritten constitution"
    },
    {
      "q": "A rigid constitution is:",
      "options": ["Easy to amend", "Difficult to amend", "Not recognized by law", "Only used during elections"],
      "answer": "Difficult to amend"
    },
    {
      "q": "A constitution that can be easily amended is called:",
      "options": ["Rigid constitution", "Flexible constitution", "Federal constitution", "Confederal constitution"],
      "answer": "Flexible constitution"
    },
    {
      "q": "Which country is known for having an unwritten constitution?",
      "options": ["Nigeria", "United States", "Britain", "China"],
      "answer": "Britain"
    },
    {
      "q": "Which of the following is a feature of a written constitution?",
      "options": ["It is scattered and unwritten", "It provides legal certainty", "It changes frequently without procedure", "It is based solely on customs"],
      "answer": "It provides legal certainty"
    },
    {
      "q": "The supreme law of a country is its:",
      "options": ["Manifesto", "Constitution", "Budget", "Election timetable"],
      "answer": "Constitution"
    },
    {
      "q": "One function of a constitution is to:",
      "options": ["Determine school fees", "Define the powers of government", "Fix market prices", "Organize sports events"],
      "answer": "Define the powers of government"
    },
    {
      "q": "The part of a constitution that lists the rights of citizens is called:",
      "options": ["Bill of Rights", "Table of Contents", "Preamble", "Appendix"],
      "answer": "Bill of Rights"
    },
    {
      "q": "Which of the following is included in most constitutions?",
      "options": ["Rules for cooking", "Structure of government", "Fashion guidelines", "Business advertisements"],
      "answer": "Structure of government"
    },
    {
      "q": "A constitution that divides power between central and regional governments is called:",
      "options": ["Unitary constitution", "Federal constitution", "Flexible constitution", "Unwritten constitution"],
      "answer": "Federal constitution"
    },
    {
      "q": "Which constitution introduced federalism to Nigeria?",
      "options": ["1963 Republican Constitution", "1946 Richards Constitution", "1954 Lyttleton Constitution", "1999 Constitution"],
      "answer": "1954 Lyttleton Constitution"
    },
    {
      "q": "The introduction of the constitution is called the:",
      "options": ["Appendix", "Preamble", "Annex", "Body"],
      "answer": "Preamble"
    },
    {
      "q": "The 1999 Constitution of Nigeria is a:",
      "options": ["Flexible constitution", "Rigid constitution", "Unwritten constitution", "Confederal constitution"],
      "answer": "Rigid constitution"
    },
    {
      "q": "Which body is responsible for interpreting the constitution?",
      "options": ["Executive", "Legislature", "Judiciary", "Media"],
      "answer": "Judiciary"
    },
    {
      "q": "A constitution helps to limit:",
      "options": ["Government powers", "Education access", "Sports participation", "Economic growth"],
      "answer": "Government powers"
    },
    {
      "q": "Which of the following is NOT a reason for having a constitution?",
      "options": ["To safeguard citizens' rights", "To promote disorder", "To guide government actions", "To maintain law and order"],
      "answer": "To promote disorder"
    },
    {
      "q": "Judicial review means:",
      "options": ["Courts making laws", "Courts interpreting the constitution", "Citizens voting in elections", "Ministers signing budgets"],
      "answer": "Courts interpreting the constitution"
    },
    {
      "q": "A constitution that concentrates power in one central authority is called:",
      "options": ["Federal constitution", "Unitary constitution", "Rigid constitution", "Flexible constitution"],
      "answer": "Unitary constitution"
    }
  ]
},

{
  "topic": "Rule of Law",
  "questions": [
    {
      "q": "What is the rule of law?",
      "options": ["Government is above the law", "Nobody is above the law and all actions are guided by law", "Only leaders obey the law", "Laws apply only during elections"],
      "answer": "Nobody is above the law and all actions are guided by law"
    },
    {
      "q": "Who popularized the concept of the rule of law?",
      "options": ["Karl Marx", "A.V. Dicey", "Aristotle", "John Locke"],
      "answer": "A.V. Dicey"
    },
    {
      "q": "Which of the following is a key principle of the rule of law?",
      "options": ["Supremacy of the law", "Supremacy of the president", "Supremacy of the military", "Supremacy of political parties"],
      "answer": "Supremacy of the law"
    },
    {
      "q": "Equality before the law means:",
      "options": ["Some citizens are above the law", "Rich people get special laws", "All persons are treated equally under the law", "Only politicians obey laws"],
      "answer": "All persons are treated equally under the law"
    },
    {
      "q": "Which principle ensures that government officials must act within the law?",
      "options": ["Judicial activism", "Due process", "Checks and balances", "Parliamentary immunity"],
      "answer": "Due process"
    },
    {
      "q": "One major feature of rule of law is:",
      "options": ["Arbitrary arrest", "Fair hearing", "Political intimidation", "Dictatorship"],
      "answer": "Fair hearing"
    },
    {
      "q": "The phrase *habeas corpus* protects citizens from:",
      "options": ["Illegal detention", "High taxation", "Voting", "Military recruitment"],
      "answer": "Illegal detention"
    },
    {
      "q": "Rule of law helps to prevent:",
      "options": ["Abuse of power", "Judicial independence", "Democratic participation", "Respect for rights"],
      "answer": "Abuse of power"
    },
    {
      "q": "Which body is responsible for protecting the rule of law?",
      "options": ["The media alone", "The judiciary", "Political parties", "The armed forces"],
      "answer": "The judiciary"
    },
    {
      "q": "Which of these conditions promotes the rule of law?",
      "options": ["Independent judiciary", "Political corruption", "Weak legal system", "Dictatorship"],
      "answer": "Independent judiciary"
    },
    {
      "q": "Which action violates the rule of law?",
      "options": ["Fair trial", "Arbitrary arrest", "Judicial review", "Legal representation"],
      "answer": "Arbitrary arrest"
    },
    {
      "q": "One importance of the rule of law is that it:",
      "options": ["Encourages tyranny", "Protects fundamental human rights", "Promotes political oppression", "Weakens democracy"],
      "answer": "Protects fundamental human rights"
    },
    {
      "q": "Which principle ensures that a suspect is heard before judgment?",
      "options": ["Rule of men", "Fair hearing", "Executive privilege", "Martial law"],
      "answer": "Fair hearing"
    },
    {
      "q": "Which of these is necessary for the enforcement of the rule of law?",
      "options": ["Corrupt judiciary", "Free press", "Political intimidation", "Electoral malpractice"],
      "answer": "Free press"
    },
    {
      "q": "Rule of law is best protected when:",
      "options": ["The judiciary is controlled by politicians", "Courts are independent", "Leaders ignore court orders", "Citizens are denied rights"],
      "answer": "Courts are independent"
    },
    {
      "q": "What does ‘supremacy of the law’ imply?",
      "options": ["The president can override the law", "The law is above everyone, including leaders", "Judges can ignore the law", "The military controls legal processes"],
      "answer": "The law is above everyone, including leaders"
    },
    {
      "q": "Which of the following supports the rule of law?",
      "options": ["Transparent legal system", "Biased judges", "Political bribery", "Weak constitution"],
      "answer": "Transparent legal system"
    },
    {
      "q": "Which situation reflects rule of law?",
      "options": ["A leader jailed for corruption", "A governor exempted from laws", "Police arrest without warrant", "Court decisions ignored"],
      "answer": "A leader jailed for corruption"
    },
    {
      "q": "Which principle prevents government from making arbitrary decisions?",
      "options": ["Separation of powers", "Electoral registration", "Political campaigns", "Manifestos"],
      "answer": "Separation of powers"
    },
    {
      "q": "One major obstacle to the rule of law is:",
      "options": ["Judicial corruption", "Independent courts", "Human rights", "Law enforcement"],
      "answer": "Judicial corruption"
    }
  ]
},

{
  "topic": "Delegated Legislation",
  "questions": [
    {
      "q": "What is delegated legislation?",
      "options": ["Laws made directly by voters", "Laws made by bodies other than the legislature but with its authority", "Laws made only by the president", "Laws made by the judiciary"],
      "answer": "Laws made by bodies other than the legislature but with its authority"
    },
    {
      "q": "Why does parliament delegate legislative powers?",
      "options": ["To avoid making any laws", "To save time and handle technical matters efficiently", "To weaken democracy", "To avoid responsibility"],
      "answer": "To save time and handle technical matters efficiently"
    },
    {
      "q": "Which of the following is an example of delegated legislation?",
      "options": ["A constitutional amendment", "A minister issuing regulations", "A bill passed by parliament", "A court judgment"],
      "answer": "A minister issuing regulations"
    },
    {
      "q": "Delegated legislation is also called:",
      "options": ["Primary legislation", "Subsidiary legislation", "Judicial legislation", "Manifesto rules"],
      "answer": "Subsidiary legislation"
    },
    {
      "q": "Which of the following bodies can make delegated legislation?",
      "options": ["Executive bodies", "Courts only", "Traditional rulers only", "Voters only"],
      "answer": "Executive bodies"
    },
    {
      "q": "A by-law is a form of delegated legislation made by:",
      "options": ["Local government authorities", "The president", "The military", "The judiciary"],
      "answer": "Local government authorities"
    },
    {
      "q": "Which term refers to laws made by government ministers?",
      "options": ["Ministerial orders", "Judicial decrees", "Executive pardons", "Electoral codes"],
      "answer": "Ministerial orders"
    },
    {
      "q": "Which of the following is NOT a reason for delegated legislation?",
      "options": ["Complexity of modern government", "Need for expert knowledge", "Flexibility and speed", "Desire to remove parliament completely"],
      "answer": "Desire to remove parliament completely"
    },
    {
      "q": "Which group monitors the use of delegated legislation?",
      "options": ["The military", "Parliament", "Students", "Traditional leaders"],
      "answer": "Parliament"
    },
    {
      "q": "Judicial control of delegated legislation means:",
      "options": ["Courts approve all laws", "Courts can declare delegated legislation invalid", "Courts make the laws", "Courts run the government"],
      "answer": "Courts can declare delegated legislation invalid"
    },
    {
      "q": "One advantage of delegated legislation is:",
      "options": ["It bypasses democracy", "It allows experts to handle technical matters", "It removes parliament", "It promotes secrecy"],
      "answer": "It allows experts to handle technical matters"
    },
    {
      "q": "One disadvantage of delegated legislation is:",
      "options": ["It speeds up law-making", "It may lead to abuse of power", "It involves experts", "It reduces parliamentary workload"],
      "answer": "It may lead to abuse of power"
    },
    {
      "q": "Which of these is a type of delegated legislation?",
      "options": ["Statutory instruments", "Supreme court rulings", "Referendums", "Manifestos"],
      "answer": "Statutory instruments"
    },
    {
      "q": "Local government by-laws usually apply:",
      "options": ["Nationwide", "Only within the local government's area", "Only in the capital city", "Only to foreigners"],
      "answer": "Only within the local government's area"
    },
    {
      "q": "Delegated legislation is necessary because:",
      "options": ["Parliament cannot meet every day to make minor regulations", "It removes democratic processes", "It increases election campaigns", "It reduces the judiciary's power"],
      "answer": "Parliament cannot meet every day to make minor regulations"
    },
    {
      "q": "Which body gives the authority for delegated legislation?",
      "options": ["Citizens directly", "Parliament", "Religious leaders", "Private companies"],
      "answer": "Parliament"
    },
    {
      "q": "One form of parliamentary control over delegated legislation is:",
      "options": ["Judicial sentencing", "Question time and committee reviews", "Military oversight", "Public protests"],
      "answer": "Question time and committee reviews"
    },
    {
      "q": "Which type of delegated legislation is issued during emergencies?",
      "options": ["Statutory instruments", "Orders in Council", "By-laws", "Constitutional amendments"],
      "answer": "Orders in Council"
    },
    {
      "q": "A key criticism of delegated legislation is that it:",
      "options": ["Saves time", "Is too technical", "Lacks publicity and transparency", "Is always approved by parliament"],
      "answer": "Lacks publicity and transparency"
    },
    {
      "q": "Delegated legislation is supervised by the judiciary through:",
      "options": ["Judicial review", "Election monitoring", "Budget approval", "Public debates"],
      "answer": "Judicial review"
    }
  ]
},

{
  "topic": "Separation of Powers",
  "questions": [
    {
      "q": "What is separation of powers?",
      "options": ["Combining all government powers in one body", "Dividing government powers among separate arms", "Giving all power to the judiciary", "Allowing citizens to make all laws"],
      "answer": "Dividing government powers among separate arms"
    },
    {
      "q": "Who popularized the modern concept of separation of powers?",
      "options": ["A.V. Dicey", "Montesquieu", "Karl Marx", "John Locke"],
      "answer": "Montesquieu"
    },
    {
      "q": "How many arms of government are recognized under separation of powers?",
      "options": ["Two", "Three", "Four", "Five"],
      "answer": "Three"
    },
    {
      "q": "Which of these is NOT an arm of government?",
      "options": ["Legislature", "Executive", "Judiciary", "Military"],
      "answer": "Military"
    },
    {
      "q": "Separation of powers aims to prevent:",
      "options": ["Checks and balances", "Abuse of power", "Judicial independence", "Democratic elections"],
      "answer": "Abuse of power"
    },
    {
      "q": "The legislature is responsible for:",
      "options": ["Interpreting laws", "Making laws", "Executing laws", "Conducting elections"],
      "answer": "Making laws"
    },
    {
      "q": "Which organ of government enforces laws?",
      "options": ["Judiciary", "Executive", "Legislature", "Civil society"],
      "answer": "Executive"
    },
    {
      "q": "The judiciary's main function is to:",
      "options": ["Execute laws", "Interpret laws", "Make laws", "Conduct national census"],
      "answer": "Interpret laws"
    },
    {
      "q": "Which principle works alongside separation of powers?",
      "options": ["Federalism", "Checks and balances", "Monarchy", "Communism"],
      "answer": "Checks and balances"
    },
    {
      "q": "Checks and balances refers to:",
      "options": ["Removing all government limits", "Each arm monitoring the others to prevent abuse", "One arm having full power", "The military controlling the government"],
      "answer": "Each arm monitoring the others to prevent abuse"
    },
    {
      "q": "Which of these is an example of checks and balances?",
      "options": ["President vetoing a bill", "Courts making laws", "Legislature conducting military operations", "Executive interpreting the constitution"],
      "answer": "President vetoing a bill"
    },
    {
      "q": "A system where one person holds legislative, executive, and judicial power is called:",
      "options": ["Democracy", "Totalitarianism", "Republic", "Federalism"],
      "answer": "Totalitarianism"
    },
    {
      "q": "Why is separation of powers important in a democracy?",
      "options": ["It strengthens dictatorship", "It ensures no single arm becomes too powerful", "It removes constitutional rights", "It abolishes elections"],
      "answer": "It ensures no single arm becomes too powerful"
    },
    {
      "q": "Which arm of government can declare an executive action unconstitutional?",
      "options": ["Legislature", "Judiciary", "Executive", "Civil society"],
      "answer": "Judiciary"
    },
    {
      "q": "Which arm approves the national budget?",
      "options": ["Executive", "Judiciary", "Legislature", "Police"],
      "answer": "Legislature"
    },
    {
      "q": "In a presidential system, the president belongs to the:",
      "options": ["Legislature", "Judiciary", "Executive", "Electoral commission"],
      "answer": "Executive"
    },
    {
      "q": "The power to impeach the president lies with the:",
      "options": ["Judiciary", "Executive", "Legislature", "Police"],
      "answer": "Legislature"
    },
    {
      "q": "Judicial independence supports separation of powers by:",
      "options": ["Allowing judges to act without external influence", "Putting judges under executive control", "Letting judges make laws", "Combining courts with legislature"],
      "answer": "Allowing judges to act without external influence"
    },
    {
      "q": "Which constitution introduced clear separation of powers in Nigeria?",
      "options": ["1999 Constitution", "1946 Richards Constitution", "1960 Independence Constitution", "1954 Lyttleton Constitution"],
      "answer": "1999 Constitution"
    },
    {
      "q": "A system where the arms of government closely overlap is called:",
      "options": ["Fusion of powers", "Constitutionalism", "Judicial review", "Bicameral system"],
      "answer": "Fusion of powers"
    }
  ]
},

{
  "topic": "Citizenship",
  "questions": [
    {
      "q": "What is citizenship?",
      "options": ["Membership of a political party", "Legal membership of a state with rights and duties", "Being rich and influential", "Living in a country temporarily"],
      "answer": "Legal membership of a state with rights and duties"
    },
    {
      "q": "Which of the following is a way of acquiring citizenship by birth?",
      "options": ["Being born in a country to citizen parents", "Marrying a citizen", "Applying after 10 years", "Winning a lottery"],
      "answer": "Being born in a country to citizen parents"
    },
    {
      "q": "Citizenship by descent means:",
      "options": ["Born in a country automatically", "Citizenship through parentage even if born abroad", "Being granted citizenship by government award", "Buying citizenship"],
      "answer": "Citizenship through parentage even if born abroad"
    },
    {
      "q": "Which of these is an example of citizenship by registration?",
      "options": ["A foreign woman marrying a citizen and applying", "A child born to citizen parents", "A person born abroad to non-citizen parents", "An immigrant refusing to apply for citizenship"],
      "answer": "A foreign woman marrying a citizen and applying"
    },
    {
      "q": "Naturalization as a method of acquiring citizenship requires:",
      "options": ["Long-term residence and good character", "Being born in the country", "Having wealthy parents", "Winning an election"],
      "answer": "Long-term residence and good character"
    },
    {
      "q": "Honorary citizenship is usually given to:",
      "options": ["Foreigners with exceptional contributions", "Children born in the country", "Political party members", "Immigrants who refuse to naturalize"],
      "answer": "Foreigners with exceptional contributions"
    },
    {
      "q": "Nigeria allows dual citizenship for:",
      "options": ["Citizens by birth", "Naturalized citizens only", "All foreigners", "Anyone living in Nigeria temporarily"],
      "answer": "Citizens by birth"
    },
    {
      "q": "A citizen can lose citizenship by:",
      "options": ["Renunciation, denaturalization, or fraud", "Being rich", "Owning property abroad", "Voting in elections"],
      "answer": "Renunciation, denaturalization, or fraud"
    },
    {
      "q": "Which of the following is a right of a citizen?",
      "options": ["Right to vote", "Right to rule others", "Right to evade taxes", "Right to ignore laws"],
      "answer": "Right to vote"
    },
    {
      "q": "A citizen has the duty to:",
      "options": ["Obey laws, pay taxes, and defend the nation", "Ignore national rules", "Disregard public property", "Break the law if convenient"],
      "answer": "Obey laws, pay taxes, and defend the nation"
    },
    {
      "q": "One quality of a good citizen is:",
      "options": ["Respect for authority and laws", "Refusing to vote", "Avoiding civic duties", "Being apathetic to national issues"],
      "answer": "Respect for authority and laws"
    },
    {
      "q": "Which of these is an example of civic participation by a citizen?",
      "options": ["Voting in elections", "Traveling abroad", "Buying property", "Watching sports events"],
      "answer": "Voting in elections"
    },
    {
      "q": "Citizenship by marriage is classified as:",
      "options": ["Citizenship by registration", "Citizenship by descent", "Naturalization", "Birthright citizenship"],
      "answer": "Citizenship by registration"
    },
    {
      "q": "Denaturalization occurs when:",
      "options": ["A citizen obtained naturalization fraudulently or acts against the state", "A child is born to citizen parents", "A citizen votes", "A citizen travels abroad"],
      "answer": "A citizen obtained naturalization fraudulently or acts against the state"
    },
    {
      "q": "Which of the following is NOT a right of a citizen?",
      "options": ["Freedom of expression", "Right to life", "Right to break the law", "Freedom of association"],
      "answer": "Right to break the law"
    },
    {
      "q": "One obligation of citizens is to:",
      "options": ["Promote national unity", "Ignore national laws", "Disobey government", "Evade taxes"],
      "answer": "Promote national unity"
    },
    {
      "q": "A child born abroad to Nigerian parents can become a citizen by:",
      "options": ["Descent", "Naturalization", "Honorary citizenship", "Marriage"],
      "answer": "Descent"
    },
    {
      "q": "Which of the following allows a foreigner to apply for Nigerian citizenship after many years of residence?",
      "options": ["Naturalization", "Birthright citizenship", "Honorary citizenship", "Dual citizenship"],
      "answer": "Naturalization"
    },
    {
      "q": "Respecting the rights of others is an example of:",
      "options": ["A citizen’s duty", "A citizen’s privilege", "A government duty", "Optional behavior"],
      "answer": "A citizen’s duty"
    },
    {
      "q": "Which of these actions may lead to loss of naturalized citizenship?",
      "options": ["Fraud in application", "Voting in elections", "Obeying laws", "Paying taxes"],
      "answer": "Fraud in application"
    }
  ]
},

{
  "topic": "Political Parties",
  "questions": [
    {
      "q": "What is a political party?",
      "options": ["A group of social workers", "A group of people with common interests seeking to gain political power", "A religious organization", "A labor union"],
      "answer": "A group of people with common interests seeking to gain political power"
    },
    {
      "q": "Which of the following is a function of political parties?",
      "options": ["Run schools", "Organize sporting events", "Form government and provide opposition", "Conduct religious ceremonies"],
      "answer": "Form government and provide opposition"
    },
    {
      "q": "Political parties help in:",
      "options": ["Judging court cases", "Mobilizing voters and promoting political awareness", "Collecting taxes", "Printing currency"],
      "answer": "Mobilizing voters and promoting political awareness"
    },
    {
      "q": "One way political parties contribute to democracy is by:",
      "options": ["Supporting only the ruling party", "Providing alternative policies and candidates", "Ignoring elections", "Controlling the judiciary"],
      "answer": "Providing alternative policies and candidates"
    },
    {
      "q": "A party that holds power in government is called the:",
      "options": ["Ruling party", "Opposition party", "Minor party", "Interest group"],
      "answer": "Ruling party"
    },
    {
      "q": "The party that criticizes and challenges the ruling party is called:",
      "options": ["Opposition party", "Ruling party", "Minor party", "Judiciary"],
      "answer": "Opposition party"
    },
    {
      "q": "Which type of party system has only one political party?",
      "options": ["Two-party system", "One-party system", "Multiparty system", "Coalition system"],
      "answer": "One-party system"
    },
    {
      "q": "A country with many political parties competing in elections has a:",
      "options": ["Multiparty system", "One-party system", "Two-party system", "No-party system"],
      "answer": "Multiparty system"
    },
    {
      "q": "Which of these is a characteristic of a good political party?",
      "options": ["Encourages violence", "Excludes citizens from participation", "Promotes national unity and represents diverse interests", "Ignores the constitution"],
      "answer": "Promotes national unity and represents diverse interests"
    },
    {
      "q": "Political parties are important because they:",
      "options": ["Print money", "Recruit candidates and organize elections", "Control the army", "Pass laws alone"],
      "answer": "Recruit candidates and organize elections"
    },
    {
      "q": "Which type of party system does Nigeria operate?",
      "options": ["Two-party system", "No-party system", "Multiparty system", "One-party system"],
      "answer": "Multiparty system"
    },
    {
      "q": "Minor political parties are sometimes called:",
      "options": ["Coalitions", "Ruling parties", "Small or third parties", "Major parties"],
      "answer": "Small or third parties"
    },
    {
      "q": "Coalition government usually happens when:",
      "options": ["The judiciary rules", "Military intervenes", "No single party wins a majority in elections", "Only one party contests"],
      "answer": "No single party wins a majority in elections"
    },
    {
      "q": "Political parties help in law-making by:",
      "options": ["Presenting party policies and members in the legislature", "Conducting elections alone", "Printing laws", "Judging disputes"],
      "answer": "Presenting party policies and members in the legislature"
    },
    {
      "q": "Which of these is NOT a function of political parties?",
      "options": ["Judging court cases", "Organizing elections", "Educating citizens politically", "Forming government"],
      "answer": "Judging court cases"
    },
    {
      "q": "A party formed to represent a specific group or region is called a:",
      "options": ["Regional or sectional party", "National party", "Ruling party", "Opposition party"],
      "answer": "Regional or sectional party"
    },
    {
      "q": "The primary aim of political parties is to:",
      "options": ["Build factories", "Win political power and govern", "Conduct religious activities", "Run schools"],
      "answer": "Win political power and govern"
    },
    {
      "q": "Political parties promote democracy by:",
      "options": ["Encouraging political participation and debate", "Controlling the judiciary", "Restricting elections", "Ignoring the constitution"],
      "answer": "Encouraging political participation and debate"
    },
    {
      "q": "The party that is not in government is expected to:",
      "options": ["Criticize the ruling party and provide alternative policies", "Run schools", "Form a military government", "Print currency"],
      "answer": "Criticize the ruling party and provide alternative policies"
    },
    {
      "q": "Which of the following is an example of a multiparty system advantage?",
      "options": ["It reduces elections", "It allows voters to choose from a variety of options", "It promotes dictatorship", "It removes democracy"],
      "answer": "It allows voters to choose from a variety of options"
    }
  ]
},

{
  "topic": "Pressure Groups",
  "questions": [
    {
      "q": "What is a pressure group?",
      "options": ["A group of people seeking to influence government policies without contesting elections", "A political party contesting elections", "A group of military officials", "A community social club"],
      "answer": "A group of people seeking to influence government policies without contesting elections"
    },
    {
      "q": "Which of the following is a main function of pressure groups?",
      "options": ["Influencing government policy", "Printing money", "Forming government", "Judging court cases"],
      "answer": "Influencing government policy"
    },
    {
      "q": "Pressure groups differ from political parties because they:",
      "options": ["Do not aim to form government", "Always win elections", "Control the judiciary", "Write constitutions"],
      "answer": "Do not aim to form government"
    },
    {
      "q": "An example of a professional pressure group is:",
      "options": ["Nigerian Bar Association (NBA)", "All Progressives Congress (APC)", "Supreme Court", "Local sports club"],
      "answer": "Nigerian Bar Association (NBA)"
    },
    {
      "q": "Which type of pressure group represents the interests of workers?",
      "options": ["Trade unions", "Political parties", "Judiciary", "Religious organizations"],
      "answer": "Trade unions"
    },
    {
      "q": "Business associations, such as the Nigerian Employers’ Consultative Association (NECA), are examples of:",
      "options": ["Economic pressure groups", "Religious pressure groups", "Social clubs", "Political parties"],
      "answer": "Economic pressure groups"
    },
    {
      "q": "Methods employed by pressure groups include:",
      "options": ["Lobbying, demonstrations, petitions", "Printing money", "Running elections", "Judging disputes"],
      "answer": "Lobbying, demonstrations, petitions"
    },
    {
      "q": "One disadvantage of pressure groups is that they:",
      "options": ["May cause conflict or misuse influence", "Always obey the constitution", "Run schools", "Control the judiciary"],
      "answer": "May cause conflict or misuse influence"
    },
    {
      "q": "Pressure groups are important because they:",
      "options": ["Ensure government listens to public opinion", "Form government", "Print laws", "Control the military"],
      "answer": "Ensure government listens to public opinion"
    },
    {
      "q": "Which of the following is a social pressure group?",
      "options": ["Non-governmental organizations (NGOs)", "Supreme Court", "Political parties", "Trade unions"],
      "answer": "Non-governmental organizations (NGOs)"
    },
    {
      "q": "Factors that militate against the success of pressure groups include:",
      "options": ["Lack of funds, poor organization, government hostility", "Winning elections easily", "Printing laws", "Judicial approval of all demands"],
      "answer": "Lack of funds, poor organization, government hostility"
    },
    {
      "q": "Which of these is a political pressure group?",
      "options": ["Campaign for Democracy (CD)", "NBA", "NECA", "Red Cross"],
      "answer": "Campaign for Democracy (CD)"
    },
    {
      "q": "Pressure groups promote democracy by:",
      "options": ["Educating the public and representing interests", "Controlling the military", "Printing currency", "Judging court cases"],
      "answer": "Educating the public and representing interests"
    },
    {
      "q": "An interest group based on religion is an example of:",
      "options": ["Religious pressure group", "Economic pressure group", "Professional pressure group", "Social pressure group"],
      "answer": "Religious pressure group"
    },
    {
      "q": "A professional body can influence government policy through:",
      "options": ["Lobbying and providing expert advice", "Running elections", "Printing laws", "Controlling the judiciary"],
      "answer": "Lobbying and providing expert advice"
    },
    {
      "q": "Which of the following is NOT a function of pressure groups?",
      "options": ["Forming government", "Influencing public policy", "Educating members", "Monitoring government actions"],
      "answer": "Forming government"
    },
    {
      "q": "Which method of pressure group activity involves organizing public protests?",
      "options": ["Demonstrations", "Lobbying", "Petitions", "Professional training"],
      "answer": "Demonstrations"
    },
    {
      "q": "Trade unions usually represent the interests of:",
      "options": ["Workers", "Judges", "Business owners", "Religious leaders"],
      "answer": "Workers"
    },
    {
      "q": "A pressure group can succeed if it is:",
      "options": ["Well-funded, organized, and credible", "Ignored by the public", "Poorly organized", "Against the law always"],
      "answer": "Well-funded, organized, and credible"
    },
    {
      "q": "Pressure groups can influence legislation by:",
      "options": ["Lobbying lawmakers and presenting research", "Printing currency", "Running courts", "Winning elections directly"],
      "answer": "Lobbying lawmakers and presenting research"
    }
  ]
},

{
  "topic": "Public Opinion",
  "questions": [
    {
      "q": "What is public opinion?",
      "options": ["The collective views and attitudes of citizens on issues", "The decision of the government alone", "A court ruling", "An opinion of a single politician"],
      "answer": "The collective views and attitudes of citizens on issues"
    },
    {
      "q": "Public opinion is important because it:",
      "options": ["Guides government policies and decisions", "Controls the judiciary", "Prints laws", "Runs elections"],
      "answer": "Guides government policies and decisions"
    },
    {
      "q": "Which of the following can shape public opinion?",
      "options": ["Media, education, and religious leaders", "Military forces", "Courts alone", "Factories"],
      "answer": "Media, education, and religious leaders"
    },
    {
      "q": "Opinion polls are used to:",
      "options": ["Measure the views of the public on specific issues", "Print laws", "Control the judiciary", "Conduct elections"],
      "answer": "Measure the views of the public on specific issues"
    },
    {
      "q": "Public opinion influences government by:",
      "options": ["Pressuring leaders to respond to citizens’ needs", "Printing currency", "Judging court cases", "Ignoring citizens"],
      "answer": "Pressuring leaders to respond to citizens’ needs"
    },
    {
      "q": "One limitation of public opinion is that it:",
      "options": ["May be uninformed or biased", "Always controls government fully", "Prints laws directly", "Runs courts"],
      "answer": "May be uninformed or biased"
    },
    {
      "q": "A strong public opinion can lead to:",
      "options": ["Policy changes and government reforms", "Military dictatorship", "Judges making laws", "Printing currency"],
      "answer": "Policy changes and government reforms"
    },
    {
      "q": "Public opinion differs from political participation because it:",
      "options": ["Does not involve directly voting or contesting elections", "Always wins elections", "Forms government directly", "Controls the army"],
      "answer": "Does not involve directly voting or contesting elections"
    },
    {
      "q": "Which institution often measures public opinion through surveys?",
      "options": ["Research organizations and polling agencies", "Supreme Court", "Political parties alone", "Military councils"],
      "answer": "Research organizations and polling agencies"
    },
    {
      "q": "Media plays a role in public opinion by:",
      "options": ["Educating citizens and shaping views", "Printing laws", "Running elections", "Judging disputes"],
      "answer": "Educating citizens and shaping views"
    },
    {
      "q": "Public opinion can be influenced by:",
      "options": ["Peer groups, community leaders, and NGOs", "Printing money", "Courts alone", "Military exercises"],
      "answer": "Peer groups, community leaders, and NGOs"
    },
    {
      "q": "Government sometimes ignores public opinion because it:",
      "options": ["May conflict with policy priorities or national interest", "Always wants to follow citizens", "Prints laws from public opinion", "Runs elections based on opinion polls"],
      "answer": "May conflict with policy priorities or national interest"
    },
    {
      "q": "Public opinion is considered effective when:",
      "options": ["It is informed, organized, and persistent", "It is uninformed and random", "It ignores laws", "It controls the judiciary"],
      "answer": "It is informed, organized, and persistent"
    },
    {
      "q": "Which of the following is NOT a source of public opinion?",
      "options": ["Media", "Education", "Religious institutions", "Military exercises"],
      "answer": "Military exercises"
    },
    {
      "q": "Pressure from public opinion can prevent:",
      "options": ["Unpopular government decisions", "Free elections", "Printing of laws", "Judicial review"],
      "answer": "Unpopular government decisions"
    },
    {
      "q": "The role of NGOs in public opinion is to:",
      "options": ["Educate citizens and advocate for issues", "Print currency", "Run elections", "Control courts"],
      "answer": "Educate citizens and advocate for issues"
    },
    {
      "q": "Public opinion is expressed through:",
      "options": ["Petitions, protests, and surveys", "Judges alone", "Printing laws", "Military action"],
      "answer": "Petitions, protests, and surveys"
    },
    {
      "q": "An uninformed public opinion may result in:",
      "options": ["Misguided policies and decisions", "Better governance automatically", "Military control", "Judicial independence"],
      "answer": "Misguided policies and decisions"
    },
    {
      "q": "Public opinion in a democracy ensures that:",
      "options": ["Government remains accountable to the people", "Military controls the state", "Courts make all policies", "Political parties are banned"],
      "answer": "Government remains accountable to the people"
    },
    {
      "q": "Which of the following is a way citizens express public opinion?",
      "options": ["Voting, petitions, and demonstrations", "Printing currency", "Judges issuing rulings", "Military interventions"],
      "answer": "Voting, petitions, and demonstrations"
    }
  ]
},

{
  "topic": "Franchise",
  "questions": [
    {
      "q": "What is franchise in government?",
      "options": ["Membership in a political party", "The right to vote in elections", "A legal license to drive", "The ability to run a business"],
      "answer": "The right to vote in elections"
    },
    {
      "q": "Who can vote in Nigeria’s elections?",
      "options": ["Anyone living in Nigeria", "Children above 12", "Foreign residents", "Citizens aged 18 and above"],
      "answer": "Citizens aged 18 and above"
    },
    {
      "q": "Voting rights based on age, citizenship, and registration is called:",
      "options": ["Franchise", "Judicial review", "Pressure group activity", "Separation of powers"],
      "answer": "Franchise"
    },
    {
      "q": "Universal adult suffrage means:",
      "options": ["Voting only for property owners", "Only rich people can vote", "Only males can vote", "All adults of voting age can vote regardless of gender, race, or religion"],
      "answer": "All adults of voting age can vote regardless of gender, race, or religion"
    },
    {
      "q": "A citizen may be denied the right to vote if they:",
      "options": ["Own property", "Have been declared legally insane or convicted of serious crimes", "Pay taxes", "Attend school"],
      "answer": "Have been declared legally insane or convicted of serious crimes"
    },
    {
      "q": "Why is franchise important in a democracy?",
      "options": ["It allows citizens to participate in choosing their leaders", "It prints laws automatically", "It controls the judiciary", "It appoints military officers"],
      "answer": "It allows citizens to participate in choosing their leaders"
    },
    {
      "q": "Voter registration is necessary because it:",
      "options": ["Confirms eligibility and prevents electoral fraud", "Controls the courts", "Automatically allows foreigners to vote", "Prints currency"],
      "answer": "Confirms eligibility and prevents electoral fraud"
    },
    {
      "q": "The right to vote is also called:",
      "options": ["Referendum", "Suffrage", "Lobbying", "Petition"],
      "answer": "Suffrage"
    },
    {
      "q": "Which of these is a limitation on franchise?",
      "options": ["Being educated", "Age restriction, mental incapacity, criminal record", "Owning property", "Attending religious events"],
      "answer": "Age restriction, mental incapacity, criminal record"
    },
    {
      "q": "Compulsory voter education helps in:",
      "options": ["Informing citizens about their voting rights and responsibilities", "Judicial appointments", "Printing currency", "Controlling the military"],
      "answer": "Informing citizens about their voting rights and responsibilities"
    },
    {
      "q": "The minimum voting age in Nigeria is:",
      "options": ["21 years", "16 years", "18 years", "25 years"],
      "answer": "18 years"
    },
    {
      "q": "One condition for franchise is that a citizen must be:",
      "options": ["Registered to vote", "Male only", "Rich", "University graduate"],
      "answer": "Registered to vote"
    },
    {
      "q": "Disenfranchisement refers to:",
      "options": ["Winning an election", "Running a political party", "The loss or denial of the right to vote", "Judicial review"],
      "answer": "The loss or denial of the right to vote"
    },
    {
      "q": "Voting in secret ensures that:",
      "options": ["Only property owners vote", "The government chooses for citizens", "Voters can choose freely without intimidation", "Only men vote"],
      "answer": "Voters can choose freely without intimidation"
    },
    {
      "q": "Franchise encourages democracy because it:",
      "options": ["Empowers citizens to influence government policies", "Controls the army", "Runs the judiciary", "Prints laws automatically"],
      "answer": "Empowers citizens to influence government policies"
    },
    {
      "q": "Which of the following is NOT a condition for franchise in Nigeria?",
      "options": ["Being of voting age", "Being a citizen", "Owning property", "Being a registered voter"],
      "answer": "Owning property"
    },
    {
      "q": "Active participation in elections reflects:",
      "options": ["Lobbying", "Exercise of franchise", "Judicial review", "Membership in a pressure group"],
      "answer": "Exercise of franchise"
    },
    {
      "q": "Voting in multiple constituencies illegally is:",
      "options": ["Electoral fraud", "A right of franchise", "Judicial review", "Petitioning"],
      "answer": "Electoral fraud"
    },
    {
      "q": "Franchise is limited in some countries by:",
      "options": ["Property ownership only", "Language spoken", "Age, mental capacity, and criminal convictions", "Height and weight"],
      "answer": "Age, mental capacity, and criminal convictions"
    },
    {
      "q": "The exercise of franchise promotes:",
      "options": ["Legitimacy of government and political accountability", "Military dictatorship", "Judicial control of policies", "Property registration"],
      "answer": "Legitimacy of government and political accountability"
    }
  ]
},

{
  "topic": "Electoral System",
  "questions": [
    {
      "q": "What is an electoral system?",
      "options": ["A method by which votes are cast and counted to elect representatives", "A type of political party", "A government department", "A social club"],
      "answer": "A method by which votes are cast and counted to elect representatives"
    },
    {
      "q": "Which of the following is a type of electoral system?",
      "options": ["Proportional representation", "Separation of powers", "Judicial review", "Pressure groups"],
      "answer": "Proportional representation"
    },
    {
      "q": "First-past-the-post system means:",
      "options": ["The candidate with the highest number of votes wins", "Votes are shared equally among all candidates", "The government chooses the winner", "Judges select the candidate"],
      "answer": "The candidate with the highest number of votes wins"
    },
    {
      "q": "Proportional representation ensures that:",
      "options": ["Seats are allocated based on the percentage of votes each party receives", "The candidate with the fewest votes wins", "Voting is restricted to males", "Judges decide the election"],
      "answer": "Seats are allocated based on the percentage of votes each party receives"
    },
    {
      "q": "Universal suffrage in elections means:",
      "options": ["All adult citizens have the right to vote", "Only property owners vote", "Voting is only for men", "Only military officers vote"],
      "answer": "All adult citizens have the right to vote"
    },
    {
      "q": "Which body conducts elections in Nigeria?",
      "options": ["Independent National Electoral Commission (INEC)", "Supreme Court", "Police Force", "Nigerian Bar Association (NBA)"],
      "answer": "Independent National Electoral Commission (INEC)"
    },
    {
      "q": "Secret ballot in elections ensures that:",
      "options": ["Voters can choose freely without intimidation", "The government picks for citizens", "Only men vote", "Property owners vote first"],
      "answer": "Voters can choose freely without intimidation"
    },
    {
      "q": "A major advantage of the electoral system is that it:",
      "options": ["Provides a fair and organized method to choose leaders", "Controls the judiciary", "Prints laws automatically", "Runs schools"],
      "answer": "Provides a fair and organized method to choose leaders"
    },
    {
      "q": "One limitation of an electoral system could be:",
      "options": ["Electoral fraud and manipulation", "Printing laws", "Military appointments", "Judicial review"],
      "answer": "Electoral fraud and manipulation"
    },
    {
      "q": "Which type of electoral system is used for presidential elections in Nigeria?",
      "options": ["Majority system", "Proportional representation", "Lot system", "Consensus system"],
      "answer": "Majority system"
    },
    {
      "q": "Which of these is a feature of proportional representation?",
      "options": ["Seats are distributed according to votes received by each party", "Only one candidate can run", "The judiciary chooses the winner", "Military intervenes in voting"],
      "answer": "Seats are distributed according to votes received by each party"
    },
    {
      "q": "Direct election means:",
      "options": ["Voters directly choose their representatives", "Judges select leaders", "Leaders are appointed by the military", "Government decides who votes"],
      "answer": "Voters directly choose their representatives"
    },
    {
      "q": "Indirect election refers to:",
      "options": ["Elected representatives choose office holders on behalf of citizens", "Voters choose directly", "Judges select candidates", "Military decides leaders"],
      "answer": "Elected representatives choose office holders on behalf of citizens"
    },
    {
      "q": "A secret ballot helps prevent:",
      "options": ["Intimidation and vote-buying", "Judicial review", "Printing of laws", "Military control of elections"],
      "answer": "Intimidation and vote-buying"
    },
    {
      "q": "Electoral campaigns are important because they:",
      "options": ["Inform citizens about candidates and policies", "Print laws", "Control courts", "Run the military"],
      "answer": "Inform citizens about candidates and policies"
    },
    {
      "q": "Electoral malpractices include:",
      "options": ["Rigging, vote buying, and intimidation", "Judges writing laws", "Printing money", "Military parades"],
      "answer": "Rigging, vote buying, and intimidation"
    },
    {
      "q": "Voter turnout refers to:",
      "options": ["The percentage of registered voters who cast their votes", "The number of political parties", "Seats in the legislature", "Judges in court"],
      "answer": "The percentage of registered voters who cast their votes"
    },
    {
      "q": "The main purpose of an electoral system is to:",
      "options": ["Translate votes into representation", "Print currency", "Control schools", "Manage the military"],
      "answer": "Translate votes into representation"
    },
    {
      "q": "A fair electoral system helps in:",
      "options": ["Strengthening democracy and ensuring legitimacy of government", "Judicial appointments", "Printing laws", "Running the army"],
      "answer": "Strengthening democracy and ensuring legitimacy of government"
    },
    {
      "q": "Which of the following ensures transparency in elections?",
      "options": ["Independent monitoring and election observers", "Judges writing policies", "Military interference", "Only one political party"],
      "answer": "Independent monitoring and election observers"
    }
  ]
},

{
  "topic": "Elections",
  "questions": [
    {
      "q": "What is an election?",
      "options": ["A process by which citizens choose leaders or decide on issues", "A military parade", "A judicial review session", "A social gathering"],
      "answer": "A process by which citizens choose leaders or decide on issues"
    },
    {
      "q": "Free and fair elections mean:",
      "options": ["All eligible citizens can vote without coercion and the results reflect voters’ choice", "The government appoints winners", "Only the military votes", "Judges select leaders"],
      "answer": "All eligible citizens can vote without coercion and the results reflect voters’ choice"
    },
    {
      "q": "Secret ballot in elections ensures:",
      "options": ["Voters can make choices privately without intimidation", "Government chooses for voters", "Only men vote", "Voting is done publicly"],
      "answer": "Voters can make choices privately without intimidation"
    },
    {
      "q": "One requirement to vote in Nigeria is:",
      "options": ["Being a registered voter", "Owning property", "Being over 25", "Having a university degree"],
      "answer": "Being a registered voter"
    },
    {
      "q": "Direct elections involve:",
      "options": ["Voters choosing their representatives directly", "Judges appointing officials", "Military selecting leaders", "Government assigning representatives"],
      "answer": "Voters choosing their representatives directly"
    },
    {
      "q": "Indirect elections mean:",
      "options": ["Elected representatives vote on behalf of citizens", "Voters choose directly", "Military selects leaders", "Judges conduct elections"],
      "answer": "Elected representatives vote on behalf of citizens"
    },
    {
      "q": "A by-election is held when:",
      "options": ["A seat becomes vacant between general elections", "The entire country votes again", "Judges are replaced", "Military officers resign"],
      "answer": "A seat becomes vacant between general elections"
    },
    {
      "q": "Electoral fraud includes:",
      "options": ["Rigging, vote-buying, and intimidation", "Judges making laws", "Printing currency", "Campaigning legally"],
      "answer": "Rigging, vote-buying, and intimidation"
    },
    {
      "q": "Campaigning in elections is important because it:",
      "options": ["Informs voters about candidates and policies", "Controls the judiciary", "Prints laws", "Runs schools"],
      "answer": "Informs voters about candidates and policies"
    },
    {
      "q": "Voter turnout refers to:",
      "options": ["The percentage of registered voters who actually vote", "Number of candidates contesting", "Seats in the legislature", "Judges in court"],
      "answer": "The percentage of registered voters who actually vote"
    },
    {
      "q": "Majority system in elections means:",
      "options": ["A candidate must get more than half the votes to win", "Votes are shared equally among all candidates", "Judges select winners", "Military intervenes in voting"],
      "answer": "A candidate must get more than half the votes to win"
    },
    {
      "q": "Proportional representation in elections ensures:",
      "options": ["Seats are allocated according to the percentage of votes each party receives", "Only the winner takes all seats", "Judges decide winners", "Military appoints representatives"],
      "answer": "Seats are allocated according to the percentage of votes each party receives"
    },
    {
      "q": "Electoral malpractice can be prevented by:",
      "options": ["Independent election monitoring and strict laws", "Judges writing policies", "Military controlling polling", "Ignoring voter education"],
      "answer": "Independent election monitoring and strict laws"
    },
    {
      "q": "Election petitions are used to:",
      "options": ["Challenge results believed to be unfair", "Vote in multiple constituencies", "Control the army", "Print laws"],
      "answer": "Challenge results believed to be unfair"
    },
    {
      "q": "Voting by proxy means:",
      "options": ["Someone votes on behalf of an eligible voter", "Judges vote for citizens", "The military votes instead of civilians", "Candidates vote for themselves only"],
      "answer": "Someone votes on behalf of an eligible voter"
    },
    {
      "q": "An independent electoral commission ensures:",
      "options": ["Free, fair, and transparent elections", "Government appoints winners", "Judges select candidates", "Only one party contests"],
      "answer": "Free, fair, and transparent elections"
    },
    {
      "q": "Elections are necessary in democracy because they:",
      "options": ["Allow citizens to choose leaders and hold them accountable", "Print laws automatically", "Control the judiciary", "Run the military"],
      "answer": "Allow citizens to choose leaders and hold them accountable"
    },
    {
      "q": "Electoral observers help by:",
      "options": ["Monitoring elections to ensure fairness", "Printing currency", "Judges ruling in favor of candidates", "Military enforcing results"],
      "answer": "Monitoring elections to ensure fairness"
    },
    {
      "q": "One challenge of elections in some countries is:",
      "options": ["Low voter turnout and electoral fraud", "Judges writing laws", "Campaigning legally", "Printing currency"],
      "answer": "Low voter turnout and electoral fraud"
    },
    {
      "q": "A fair election promotes:",
      "options": ["Legitimacy of government and political stability", "Military dictatorship", "Judicial control of policies", "Property registration"],
      "answer": "Legitimacy of government and political stability"
    }
  ]
},

{
  "topic": "Public Administration",
  "questions": [
    {
      "q": "What is public administration?",
      "options": ["The process of implementing government policies and managing public affairs", "A private business operation", "A political party activity", "Judicial law-making"],
      "answer": "The process of implementing government policies and managing public affairs"
    },
    {
      "q": "Which of the following is a key function of public administration?",
      "options": ["Policy implementation", "Judicial review", "Political campaigning", "Military training"],
      "answer": "Policy implementation"
    },
    {
      "q": "The civil service is part of public administration because it:",
      "options": ["Carries out day-to-day government operations", "Elects political leaders", "Prints currency", "Conducts military exercises"],
      "answer": "Carries out day-to-day government operations"
    },
    {
      "q": "Who formulates policies in public administration?",
      "options": ["Elected officials and policymakers", "Judges alone", "Military generals", "Pressure groups only"],
      "answer": "Elected officials and policymakers"
    },
    {
      "q": "Public administration is necessary because it:",
      "options": ["Ensures efficient delivery of government services", "Controls the judiciary", "Prints laws automatically", "Runs private companies"],
      "answer": "Ensures efficient delivery of government services"
    },
    {
      "q": "One characteristic of public administration is that it is:",
      "options": ["Goal-oriented and organized", "Random and informal", "Judicial-only", "Military-only"],
      "answer": "Goal-oriented and organized"
    },
    {
      "q": "A major challenge in public administration is:",
      "options": ["Corruption and bureaucratic inefficiency", "Judges making laws", "Voting in secret", "Printing currency"],
      "answer": "Corruption and bureaucratic inefficiency"
    },
    {
      "q": "Which of the following is an example of public administration?",
      "options": ["Managing a public hospital", "Owning a private store", "Voting in elections", "Forming a political party"],
      "answer": "Managing a public hospital"
    },
    {
      "q": "Bureaucracy in public administration refers to:",
      "options": ["Structured organization with rules and hierarchy", "Random decision-making", "Military command only", "Judicial review process"],
      "answer": "Structured organization with rules and hierarchy"
    },
    {
      "q": "Public administration ensures accountability by:",
      "options": ["Monitoring and evaluating government programs", "Printing laws", "Controlling schools", "Conducting military drills"],
      "answer": "Monitoring and evaluating government programs"
    },
    {
      "q": "Policy evaluation in public administration helps to:",
      "options": ["Assess the effectiveness of programs and make improvements", "Appoint judges", "Control the army", "Run private businesses"],
      "answer": "Assess the effectiveness of programs and make improvements"
    },
    {
      "q": "Decentralization in public administration means:",
      "options": ["Distributing authority and decision-making to local governments", "Centralizing all powers in the president", "Judges controlling policies", "Military intervention in governance"],
      "answer": "Distributing authority and decision-making to local governments"
    },
    {
      "q": "Public administration is closely linked to:",
      "options": ["Political science and governance", "Printing currency", "Military exercises", "Private business only"],
      "answer": "Political science and governance"
    },
    {
      "q": "Merit system in public administration means:",
      "options": ["Appointments are based on qualifications and competence", "Appointments are based on favoritism", "Judges appoint staff", "Military selects employees"],
      "answer": "Appointments are based on qualifications and competence"
    },
    {
      "q": "Transparency in public administration promotes:",
      "options": ["Public trust and accountability", "Judicial control of policies", "Military oversight", "Printing laws"],
      "answer": "Public trust and accountability"
    },
    {
      "q": "Public administration can be classified into:",
      "options": ["Central, state, and local administration", "Military-only administration", "Judicial-only administration", "Private business administration"],
      "answer": "Central, state, and local administration"
    },
    {
      "q": "Efficiency in public administration means:",
      "options": ["Achieving goals with minimal resources and time", "Printing laws automatically", "Military intervention", "Judicial review only"],
      "answer": "Achieving goals with minimal resources and time"
    },
    {
      "q": "One of the principles of public administration is:",
      "options": ["Equity and fairness in service delivery", "Judges making laws", "Military appointments", "Political party loyalty only"],
      "answer": "Equity and fairness in service delivery"
    },
    {
      "q": "Public administration differs from politics because it:",
      "options": ["Focuses on implementing policies rather than making them", "Runs elections", "Prints currency", "Conducts court trials"],
      "answer": "Focuses on implementing policies rather than making them"
    },
    {
      "q": "Ethics in public administration is important to:",
      "options": ["Ensure integrity, accountability, and public confidence", "Control the judiciary", "Run the military", "Print laws automatically"],
      "answer": "Ensure integrity, accountability, and public confidence"
    }
  ]
},

{
  "topic": "Public Corporations and Local Government",
  "questions": [
    {
      "q": "What is a public corporation?",
      "options": ["A political party", "A military division", "A government-owned organization that provides goods or services", "A private company"],
      "answer": "A government-owned organization that provides goods or services"
    },
    {
      "q": "Which of the following is a characteristic of a public corporation?",
      "options": ["Judges controlling decisions", "Government ownership", "Political campaigning", "Profit-driven private ownership"],
      "answer": "Government ownership"
    },
    {
      "q": "Local government is:",
      "options": ["A military-controlled body", "A private company", "The administration of a local area by elected representatives", "A political party branch"],
      "answer": "The administration of a local area by elected representatives"
    },
    {
      "q": "The main purpose of public corporations is to:",
      "options": ["Provide essential services to the public", "Control the judiciary", "Conduct elections", "Run political campaigns"],
      "answer": "Provide essential services to the public"
    },
    {
      "q": "Which of the following is an example of a public corporation in Nigeria?",
      "options": ["Judicial council", "Private banks", "Nigerian National Petroleum Corporation (NNPC)", "Political party office"],
      "answer": "Nigerian National Petroleum Corporation (NNPC)"
    },
    {
      "q": "Local governments are created to:",
      "options": ["Bring governance closer to the people", "Print laws automatically", "Control national security", "Run federal elections only"],
      "answer": "Bring governance closer to the people"
    },
    {
      "q": "A key source of revenue for local governments is:",
      "options": ["Taxes, fees, and government grants", "Foreign aid only", "Judicial fines", "Military funding"],
      "answer": "Taxes, fees, and government grants"
    },
    {
      "q": "Public corporations are usually managed by:",
      "options": ["Boards of directors appointed by the government", "Military officers", "Judges only", "Political party members"],
      "answer": "Boards of directors appointed by the government"
    },
    {
      "q": "One challenge of public corporations is:",
      "options": ["Voting irregularities", "Bureaucracy and inefficiency", "Military control", "Judges making laws"],
      "answer": "Bureaucracy and inefficiency"
    },
    {
      "q": "Local government council is usually headed by a:",
      "options": ["Military General", "President", "Chief Justice", "Chairman or Mayor"],
      "answer": "Chairman or Mayor"
    },
    {
      "q": "Public corporations differ from private companies because they:",
      "options": ["Elect government officials", "Run elections", "Are owned and funded by the government", "Seek maximum profit only"],
      "answer": "Are owned and funded by the government"
    },
    {
      "q": "Local government functions include:",
      "options": ["Provision of primary education, health, and sanitation services", "Printing currency", "Running national defense", "Judicial review"],
      "answer": "Provision of primary education, health, and sanitation services"
    },
    {
      "q": "The appointment of staff in public corporations is usually based on:",
      "options": ["Merit and competence", "Political favoritism", "Military selectivity", "Judicial decree only"],
      "answer": "Merit and competence"
    },
    {
      "q": "Public corporations are accountable to:",
      "options": ["The government and citizens", "Private shareholders", "Military leaders", "Judges only"],
      "answer": "The government and citizens"
    },
    {
      "q": "One benefit of local government is that it:",
      "options": ["Controls national currency", "Prints national laws", "Ensures citizen participation in governance", "Runs courts"],
      "answer": "Ensures citizen participation in governance"
    },
    {
      "q": "Public corporations can face inefficiency due to:",
      "options": ["Political interference and corruption", "Military control", "Judges making policies", "Printing money"],
      "answer": "Political interference and corruption"
    },
    {
      "q": "Local governments are financed by:",
      "options": ["Private company donations", "Military budget only", "Local taxes, state allocations, and federal grants", "Judges' salaries"],
      "answer": "Local taxes, state allocations, and federal grants"
    },
    {
      "q": "Autonomy of public corporations means they:",
      "options": ["Operate independently within government guidelines", "Print laws", "Elect judges", "Control local armies"],
      "answer": "Operate independently within government guidelines"
    },
    {
      "q": "Decentralization in local government ensures:",
      "options": ["The president controls everything", "Military supervises local councils", "Decision-making is closer to the people", "Judges appoint local officials"],
      "answer": "Decision-making is closer to the people"
    },
    {
      "q": "Public corporations are important because they:",
      "options": ["Provide essential services and promote economic development", "Run political campaigns", "Elect the president", "Control the judiciary"],
      "answer": "Provide essential services and promote economic development"
    }
  ]
},

{
  "topic": "Pre-Colonial Administration",
  "questions": [
    {
      "q": "Pre-colonial administration refers to:",
      "options": ["Systems of governance before colonial rule", "Colonial government structures", "Modern federal administration", "Judicial-only governance"],
      "answer": "Systems of governance before colonial rule"
    },
    {
      "q": "In Yoruba pre-colonial administration, the king is called:",
      "options": ["Oba", "Sarki", "Eze", "Alhaji"],
      "answer": "Oba"
    },
    {
      "q": "The Yoruba king was assisted by:",
      "options": ["Chiefs and council of elders", "Military generals only", "Judges", "Political party leaders"],
      "answer": "Chiefs and council of elders"
    },
    {
      "q": "In Hausa pre-colonial administration, the ruler is known as:",
      "options": ["Sarki", "Oba", "Eze", "Alhaji"],
      "answer": "Sarki"
    },
    {
      "q": "The Hausa emir was assisted by:",
      "options": ["District heads and council of ministers", "Obas and chiefs", "Igbo elders", "Judges only"],
      "answer": "District heads and council of ministers"
    },
    {
      "q": "The Igbo pre-colonial system was mostly:",
      "options": ["Acephalous, without centralized kingship", "Monarchical with a king", "Military dictatorship", "Judicial-based"],
      "answer": "Acephalous, without centralized kingship"
    },
    {
      "q": "Igbo communities were governed by:",
      "options": ["Council of elders and age grades", "Sarki and ministers", "Oba and chiefs", "Military rulers"],
      "answer": "Council of elders and age grades"
    },
    {
      "q": "One feature of Yoruba administration was:",
      "options": ["Hierarchical system with clear authority", "Acephalous governance", "Judicial-only power", "Military-only control"],
      "answer": "Hierarchical system with clear authority"
    },
    {
      "q": "A feature of Hausa administration included:",
      "options": ["Centralized emirate system", "Council of elders only", "Acephalous village councils", "Military rule only"],
      "answer": "Centralized emirate system"
    },
    {
      "q": "The Igbo system promoted:",
      "options": ["Democratic decision-making through elders and groups", "Absolute monarchy", "Military dictatorship", "Colonial administration"],
      "answer": "Democratic decision-making through elders and groups"
    },
    {
      "q": "In Yoruba kingdoms, the chiefs were responsible for:",
      "options": ["Advising the Oba and administering provinces", "Military campaigns only", "Judicial rulings only", "Printing laws"],
      "answer": "Advising the Oba and administering provinces"
    },
    {
      "q": "Hausa district heads were responsible for:",
      "options": ["Local administration and tax collection", "Leading religious ceremonies only", "Printing laws", "Judicial review only"],
      "answer": "Local administration and tax collection"
    },
    {
      "q": "Age grades in Igbo communities helped to:",
      "options": ["Organize labor and maintain order", "Elect kings", "Collect national taxes", "Control military campaigns"],
      "answer": "Organize labor and maintain order"
    },
    {
      "q": "The Yoruba king had spiritual authority as well as:",
      "options": ["Political authority", "Judicial control only", "Military dictatorship only", "Age-grade leadership"],
      "answer": "Political authority"
    },
    {
      "q": "Hausa emirs derived authority from:",
      "options": ["Islamic and traditional laws", "Military appointments only", "Oba councils", "Judges only"],
      "answer": "Islamic and traditional laws"
    },
    {
      "q": "Igbo communities relied on consensus for:",
      "options": ["Community decisions and conflict resolution", "Military campaigns", "Printing laws", "Electing a king"],
      "answer": "Community decisions and conflict resolution"
    },
    {
      "q": "In Yoruba administration, the Ogboni society had the role of:",
      "options": ["Advising on traditional and spiritual matters", "Collecting taxes only", "Military leadership only", "Running courts exclusively"],
      "answer": "Advising on traditional and spiritual matters"
    },
    {
      "q": "Hausa emirate councils included:",
      "options": ["Ministers, palace officials, and nobles", "Council of elders only", "Igbo age grades", "Obas and chiefs"],
      "answer": "Ministers, palace officials, and nobles"
    },
    {
      "q": "Igbo pre-colonial administration lacked:",
      "options": ["Centralized kingship", "Community decision-making", "Age-grade systems", "Council of elders"],
      "answer": "Centralized kingship"
    },
    {
      "q": "A similarity between Yoruba and Hausa systems was that:",
      "options": ["They both had centralized leadership structures", "They both were acephalous", "Neither had councils", "Both were purely democratic with no ruler"],
      "answer": "They both had centralized leadership structures"
    }
  ]
},


{
  "topic": "Colonial Administration",
  "questions": [
    {
      "q": "Colonial administration refers to:",
      "options": ["The system of governance imposed by colonial powers", "Traditional local governance before colonial rule", "Modern democratic administration", "Military rule by indigenous leaders"],
      "answer": "The system of governance imposed by colonial powers"
    },
    {
      "q": "The British system of colonial administration in Nigeria was characterized by:",
      "options": ["Indirect rule through local rulers", "Direct rule by elected officials", "French assimilation policy", "Military dictatorship"],
      "answer": "Indirect rule through local rulers"
    },
    {
      "q": "Indirect rule allowed the British to:",
      "options": ["Use existing local institutions to govern", "Appoint all local officials directly", "Merge colonies with neighboring countries", "Abolish traditional authorities completely"],
      "answer": "Use existing local institutions to govern"
    },
    {
      "q": "One feature of indirect rule was:",
      "options": ["Preservation of local customs under colonial oversight", "Centralized judicial control by the British only", "Abolition of all local chiefs", "Direct election of governors by locals"],
      "answer": "Preservation of local customs under colonial oversight"
    },
    {
      "q": "A reason for introducing indirect rule was:",
      "options": ["It was cost-effective and minimized resistance", "To completely remove local rulers", "To enforce French language", "To militarize villages"],
      "answer": "It was cost-effective and minimized resistance"
    },
    {
      "q": "An advantage of indirect rule was:",
      "options": ["It reduced administrative costs and used local knowledge", "It eliminated local traditions", "It centralized all power in the British governor", "It made all citizens vote directly for governors"],
      "answer": "It reduced administrative costs and used local knowledge"
    },
    {
      "q": "A disadvantage of indirect rule was:",
      "options": ["It could strengthen authoritarian local rulers", "It increased local democracy", "It gave total power to elected councils", "It abolished the military completely"],
      "answer": "It could strengthen authoritarian local rulers"
    },
    {
      "q": "The French system of colonial administration included:",
      "options": ["Assimilation and association policies", "Indirect rule only", "Military rule exclusively", "Democratic local councils like in Nigeria"],
      "answer": "Assimilation and association policies"
    },
    {
      "q": "The policy of assimilation aimed to:",
      "options": ["Make colonies adopt French culture and laws", "Strengthen traditional rulers", "Follow British indirect rule", "Promote Igbo age-grade systems"],
      "answer": "Make colonies adopt French culture and laws"
    },
    {
      "q": "The policy of association allowed:",
      "options": ["Local customs to continue under French supervision", "Full French citizenship for all locals", "Direct election of French governors", "Military-only governance"],
      "answer": "Local customs to continue under French supervision"
    },
    {
      "q": "A similarity between British and French colonial systems was:",
      "options": ["Both aimed to control colonies efficiently", "Both completely abolished local traditions", "Both introduced direct democracy", "Both gave full independence immediately"],
      "answer": "Both aimed to control colonies efficiently"
    },
    {
      "q": "One main difference between British and French colonial administration was:",
      "options": ["British used indirect rule; French used assimilation/association", "British abolished local rulers; French left them fully in power", "British introduced universal suffrage; French did not", "French used age grades; British did not"],
      "answer": "British used indirect rule; French used assimilation/association"
    },
    {
      "q": "Indirect rule often relied on:",
      "options": ["Existing chiefs and traditional institutions", "Elected local councils only", "French-appointed governors", "Military governors exclusively"],
      "answer": "Existing chiefs and traditional institutions"
    },
    {
      "q": "French assimilation required:",
      "options": ["Colonial subjects to adopt French culture and language", "Preservation of all local customs", "Indirect rule like in Nigeria", "Military administration only"],
      "answer": "Colonial subjects to adopt French culture and language"
    },
    {
      "q": "Association under French rule meant:",
      "options": ["Allowing local customs but maintaining French authority", "Replacing all chiefs with French officials", "Direct local elections", "Total independence from France"],
      "answer": "Allowing local customs but maintaining French authority"
    },
    {
      "q": "Indirect rule sometimes failed because:",
      "options": ["Some local rulers became oppressive and corrupt", "It gave full democracy to all locals", "It reduced taxes excessively", "It abolished all traditional practices immediately"],
      "answer": "Some local rulers became oppressive and corrupt"
    },
    {
      "q": "British indirect rule was popular in:",
      "options": ["Northern Nigeria with existing emirs", "Southern Nigeria only", "French colonies in West Africa", "Igbo acephalous societies exclusively"],
      "answer": "Northern Nigeria with existing emirs"
    },
    {
      "q": "A key feature of French colonial rule was:",
      "options": ["Attempt to transform locals into French citizens", "Indirect rule like the British", "Military-only governance", "Age-grade administration"],
      "answer": "Attempt to transform locals into French citizens"
    },
    {
      "q": "Colonial administration impacted Nigeria by:",
      "options": ["Creating centralized structures and influencing local governance", "Eliminating all traditional customs immediately", "Promoting French culture in the north only", "Removing taxes completely"],
      "answer": "Creating centralized structures and influencing local governance"
    },
    {
      "q": "Indirect rule allowed the British to:",
      "options": ["Control large territories with few officials", "Give full independence to colonies", "Implement French culture", "Establish military-only governments"],
      "answer": "Control large territories with few officials"
    }
  ]
},

{
  "topic": "Nationalism",
  "questions": [
    {
      "q": "Nationalism in government refers to:",
      "options": ["Loyalty and devotion to one's nation", "Colonial domination by foreign powers", "Global cooperation above national interest", "Local community service only"],
      "answer": "Loyalty and devotion to one's nation"
    },
    {
      "q": "A key factor that fueled nationalism in Nigeria was:",
      "options": ["Colonial oppression and exploitation", "Peaceful coexistence with colonial rulers", "Abundant natural resources without taxation", "Local trade agreements"],
      "answer": "Colonial oppression and exploitation"
    },
    {
      "q": "Nationalist movements often aimed to:",
      "options": ["Achieve self-rule and independence", "Strengthen colonial control", "Promote only local trade", "Focus solely on cultural festivals"],
      "answer": "Achieve self-rule and independence"
    },
    {
      "q": "The main ideology of Nigerian nationalism was:",
      "options": ["Self-determination and unity", "Monarchism and loyalty to colonial rulers", "Tribalism and regional supremacy", "International socialism exclusively"],
      "answer": "Self-determination and unity"
    },
    {
      "q": "One method used by nationalists to promote independence was:",
      "options": ["Organizing protests and political campaigns", "Following colonial directives strictly", "Focusing on individual wealth accumulation", "Ignoring government policies"],
      "answer": "Organizing protests and political campaigns"
    },
    {
      "q": "Prominent Nigerian nationalists included:",
      "options": ["Nnamdi Azikiwe, Obafemi Awolowo, Ahmadu Bello", "Queen Victoria, Lord Lugard, Cecil Rhodes", "Julius Nyerere, Kwame Nkrumah, Patrice Lumumba", "None of the above"],
      "answer": "Nnamdi Azikiwe, Obafemi Awolowo, Ahmadu Bello"
    },
    {
      "q": "The impact of nationalism in Nigeria led to:",
      "options": ["Independence in 1960", "Stronger colonial control", "Isolation from international affairs", "Decline in political participation"],
      "answer": "Independence in 1960"
    },
    {
      "q": "Regionalism affected Nigerian nationalism by:",
      "options": ["Creating divisions among ethnic groups", "Strengthening national unity immediately", "Eliminating colonial influence", "Focusing only on trade policies"],
      "answer": "Creating divisions among ethnic groups"
    },
    {
      "q": "A challenge faced by nationalists in Nigeria was:",
      "options": ["Ethnic rivalry and lack of unity", "Abundant financial resources", "Complete support from colonial rulers", "No opposition from local chiefs"],
      "answer": "Ethnic rivalry and lack of unity"
    },
    {
      "q": "The role of political parties in nationalism was to:",
      "options": ["Mobilize citizens for self-governance", "Support colonial government policies", "Focus exclusively on trade development", "Promote only traditional rituals"],
      "answer": "Mobilize citizens for self-governance"
    },
    {
      "q": "Nationalism in Nigeria was influenced by:",
      "options": ["Western education and awareness of rights", "Isolation from international events", "Exclusive focus on agriculture", "Traditional leadership only"],
      "answer": "Western education and awareness of rights"
    },
    {
      "q": "One effect of nationalism on Nigerian society was:",
      "options": ["Growth of political consciousness", "Decline in literacy rates", "Increased colonial exploitation", "Reduction in local governance structures"],
      "answer": "Growth of political consciousness"
    },
    {
      "q": "Nationalists often used the press to:",
      "options": ["Educate citizens and criticize colonial policies", "Promote colonial propaganda", "Publish only religious content", "Avoid political topics entirely"],
      "answer": "Educate citizens and criticize colonial policies"
    },
    {
      "q": "The ultimate goal of Nigerian nationalism was:",
      "options": ["Full independence and sovereignty", "Stronger colonial administration", "Exclusive regional control", "Isolation from world affairs"],
      "answer": "Full independence and sovereignty"
    },
    {
      "q": "A similarity between Nigerian and other African nationalist movements was that:",
      "options": ["They aimed to end colonial rule", "They focused on supporting European governance", "They discouraged political activism", "They avoided mass mobilization"],
      "answer": "They aimed to end colonial rule"
    },
    {
      "q": "Nationalism promoted unity by:",
      "options": ["Encouraging collective identity above ethnic divisions", "Emphasizing regional differences only", "Limiting political participation", "Following colonial directives strictly"],
      "answer": "Encouraging collective identity above ethnic divisions"
    },
    {
      "q": "Nationalist leaders were often educated in:",
      "options": ["Western schools and universities", "Colonial military academies only", "Traditional village schools only", "Apprenticeships in farming"],
      "answer": "Western schools and universities"
    },
    {
      "q": "Economic factors that fueled nationalism included:",
      "options": ["Exploitation of resources and unfair taxation", "Abundant wealth without contribution", "No foreign trade involvement", "Local festivals"],
      "answer": "Exploitation of resources and unfair taxation"
    },
    {
      "q": "Nationalism can be described as:",
      "options": ["A movement to assert national identity and independence", "A colonial administrative policy", "An international trade agreement", "A religious organization"],
      "answer": "A movement to assert national identity and independence"
    },
    {
      "q": "The role of youth movements in nationalism was to:",
      "options": ["Organize protests, rallies, and political awareness campaigns", "Maintain colonial order", "Focus only on traditional rites", "Ignore political issues"],
      "answer": "Organize protests, rallies, and political awareness campaigns"
    }
  ]
},


{
  "topic": "Constitutional Development in Nigeria",
  "questions": [
    {
      "q": "Constitutional development in Nigeria refers to:",
      "options": ["The gradual evolution of laws and governance structures", "Building physical government offices", "Only traditional rule by chiefs", "Military-only governance"],
      "answer": "The gradual evolution of laws and governance structures"
    },
    {
      "q": "The Clifford Constitution of 1922 introduced:",
      "options": ["Nigerians into legislative councils", "Full independence", "Military governance", "Regional autonomy with no legislative input"],
      "answer": "Nigerians into legislative councils"
    },
    {
      "q": "One feature of the Richards Constitution of 1946 was:",
      "options": ["Regional representation without full self-government", "Immediate independence", "Centralized military rule", "Direct election of all governors"],
      "answer": "Regional representation without full self-government"
    },
    {
      "q": "The Macpherson Constitution of 1951 provided for:",
      "options": ["Greater regional autonomy and elected representatives", "Centralized colonial rule only", "Military dictatorship", "Elimination of local councils"],
      "answer": "Greater regional autonomy and elected representatives"
    },
    {
      "q": "The Lyttleton Constitution of 1954 established:",
      "options": ["A federation of regions with a central government", "Absolute monarchy", "Acephalous communities only", "A single-party military state"],
      "answer": "A federation of regions with a central government"
    },
    {
      "q": "One main aim of the 1960 Independence Constitution was to:",
      "options": ["Grant full sovereignty to Nigeria", "Increase colonial control", "Establish military rule", "Promote only regional chiefs"],
      "answer": "Grant full sovereignty to Nigeria"
    },
    {
      "q": "The 1963 Republican Constitution achieved:",
      "options": ["Nigeria became a republic with a president", "Return to colonial governance", "Centralized monarchy", "Elimination of regional governments"],
      "answer": "Nigeria became a republic with a president"
    },
    {
      "q": "The 1979 Constitution is known for:",
      "options": ["Introducing a presidential system of government", "Reverting to colonial council rule", "Only allowing military leadership", "Replacing all regions with provinces"],
      "answer": "Introducing a presidential system of government"
    },
    {
      "q": "The 1999 Constitution established:",
      "options": ["The current Fourth Republic and democratic governance", "Military dictatorship permanently", "Only regional councils", "Colonial-style legislative councils"],
      "answer": "The current Fourth Republic and democratic governance"
    },
    {
      "q": "Constitutional developments in Nigeria were influenced by:",
      "options": ["Pressure from nationalists and regional demands", "Only traditional chiefs", "Exclusive foreign trade agreements", "Religious practices only"],
      "answer": "Pressure from nationalists and regional demands"
    },
    {
      "q": "A major feature of Nigeria's 1954 Constitution was:",
      "options": ["Creation of a federal system with autonomous regions", "Centralized colonial administration", "Elimination of traditional rulers", "Exclusive military governance"],
      "answer": "Creation of a federal system with autonomous regions"
    },
    {
      "q": "The Richards Constitution faced criticism because:",
      "options": ["It did not give full self-government to Nigerians", "It allowed immediate independence", "It abolished all local councils", "It created a military dictatorship"],
      "answer": "It did not give full self-government to Nigerians"
    },
    {
      "q": "The Macpherson Constitution encouraged:",
      "options": ["Political party formation and regional representation", "Military-only rule", "Complete colonial dominance", "Only local festivals"],
      "answer": "Political party formation and regional representation"
    },
    {
      "q": "The 1960 Constitution provided for:",
      "options": ["A parliamentary system with a prime minister", "Military dictatorship", "Traditional rulers only", "No legislative council"],
      "answer": "A parliamentary system with a prime minister"
    },
    {
      "q": "One effect of constitutional development was:",
      "options": ["Progressive self-rule leading to independence", "Permanent colonial administration", "Elimination of all elections", "Decline in political awareness"],
      "answer": "Progressive self-rule leading to independence"
    },
    {
      "q": "The transition from colonial constitutions to the 1960 Constitution showed:",
      "options": ["Gradual transfer of power to Nigerians", "Immediate military takeover", "Centralized foreign governance", "Elimination of regional councils"],
      "answer": "Gradual transfer of power to Nigerians"
    },
    {
      "q": "The 1979 Constitution differed from previous ones by:",
      "options": ["Adopting a presidential system similar to the USA", "Maintaining parliamentary colonial rule", "Giving total power to regions", "Eliminating the presidency"],
      "answer": "Adopting a presidential system similar to the USA"
    },
    {
      "q": "The 1999 Constitution aimed to:",
      "options": ["Restore democracy after military rule", "Strengthen military authority", "Eliminate elections", "Return to colonial rule"],
      "answer": "Restore democracy after military rule"
    },
    {
      "q": "Constitutional development in Nigeria helped to:",
      "options": ["Define powers between central and regional governments", "Remove all traditional rulers", "Promote only military authority", "Eliminate political parties"],
      "answer": "Define powers between central and regional governments"
    },
    {
      "q": "A similarity between colonial and post-independence constitutions is that:",
      "options": ["Both established legislative structures", "Both ignored regional representation", "Both eliminated political parties", "Both gave full independence immediately"],
      "answer": "Both established legislative structures"
    }
  ]
},

{
  "topic": "Nigerian Federalism",
  "questions": [
    {
      "q": "Federalism in Nigeria refers to:",
      "options": ["A system of government where power is shared between central and regional governments", "Complete centralized government control", "Exclusive local governance", "Military dictatorship only"],
      "answer": "A system of government where power is shared between central and regional governments"
    },
    {
      "q": "One key feature of Nigerian federalism is:",
      "options": ["Division of powers between federal and state governments", "Total power to local councils", "Exclusive power to traditional rulers", "No separation of powers"],
      "answer": "Division of powers between federal and state governments"
    },
    {
      "q": "Federalism in Nigeria was influenced by:",
      "options": ["Ethnic, cultural, and regional diversity", "Complete cultural homogeneity", "Colonial military rule only", "Religious uniformity"],
      "answer": "Ethnic, cultural, and regional diversity"
    },
    {
      "q": "The Nigerian federation was formally established in:",
      "options": ["1954", "1960", "1979", "1999"],
      "answer": "1954"
    },
    {
      "q": "The 1954 Lyttleton Constitution contributed to federalism by:",
      "options": ["Creating autonomous regions under a central government", "Eliminating regional representation", "Giving absolute power to the central government", "Establishing military governance only"],
      "answer": "Creating autonomous regions under a central government"
    },
    {
      "q": "One advantage of federalism is:",
      "options": ["It allows local governments to manage local affairs effectively", "It centralizes all decision-making", "It eliminates regional autonomy", "It prevents political participation"],
      "answer": "It allows local governments to manage local affairs effectively"
    },
    {
      "q": "A disadvantage of Nigerian federalism is:",
      "options": ["Ethnic and regional tensions can arise", "All regions are completely united", "It eliminates central authority", "It prevents elections"],
      "answer": "Ethnic and regional tensions can arise"
    },
    {
      "q": "In Nigerian federalism, the central government is also called:",
      "options": ["The Federal Government", "State Council", "Regional Assembly", "Local Government Council"],
      "answer": "The Federal Government"
    },
    {
      "q": "States in Nigeria are responsible for:",
      "options": ["Managing local affairs such as education and health", "Only foreign relations", "Military campaigns only", "Printing national laws exclusively"],
      "answer": "Managing local affairs such as education and health"
    },
    {
      "q": "Federalism helps Nigeria to:",
      "options": ["Accommodate diverse ethnic and cultural groups", "Eliminate all local governance", "Prevent regional elections", "Centralize all judicial power"],
      "answer": "Accommodate diverse ethnic and cultural groups"
    },
    {
      "q": "The 1979 Constitution strengthened federalism by:",
      "options": ["Clearly defining powers between federal and state governments", "Eliminating state autonomy", "Allowing only military rule", "Reducing political representation"],
      "answer": "Clearly defining powers between federal and state governments"
    },
    {
      "q": "Revenue allocation in federalism refers to:",
      "options": ["Sharing resources between federal and state governments", "Exclusive foreign trade", "Military funding only", "Traditional rulers’ income"],
      "answer": "Sharing resources between federal and state governments"
    },
    {
      "q": "Federalism allows states to:",
      "options": ["Pass laws relevant to their local needs", "Ignore federal laws entirely", "Control international trade alone", "Command military operations"],
      "answer": "Pass laws relevant to their local needs"
    },
    {
      "q": "A challenge of Nigerian federalism is:",
      "options": ["Calls for secession by aggrieved regions", "Total unity without disputes", "No elections at state level", "Complete elimination of political parties"],
      "answer": "Calls for secession by aggrieved regions"
    },
    {
      "q": "The principle of federalism in Nigeria ensures:",
      "options": ["Balance of power between central and regional governments", "Absolute power of one region", "Elimination of political parties", "Centralized monarchy"],
      "answer": "Balance of power between central and regional governments"
    },
    {
      "q": "Federalism in Nigeria differs from a unitary system because:",
      "options": ["Power is shared between central and regional authorities", "Power is entirely centralized", "Regions have no legislative power", "Only local councils exist"],
      "answer": "Power is shared between central and regional authorities"
    },
    {
      "q": "One effect of federalism is:",
      "options": ["Encourages regional development and self-governance", "Eliminates all local government structures", "Prevents elections", "Ensures only one ethnic group rules"],
      "answer": "Encourages regional development and self-governance"
    },
    {
      "q": "Ethnic diversity in Nigeria makes federalism important because:",
      "options": ["It accommodates different groups within one nation", "It eliminates regional representation", "It prevents democratic governance", "It centralizes all authority in one region"],
      "answer": "It accommodates different groups within one nation"
    },
    {
      "q": "Federalism in Nigeria is also meant to:",
      "options": ["Prevent domination by a single region", "Ensure only central government rules", "Promote colonial interests", "Limit elections"],
      "answer": "Prevent domination by a single region"
    },
    {
      "q": "A similarity between federalism and constitutional development is that:",
      "options": ["Both define powers and responsibilities in government", "Both eliminate elections", "Both establish military rule", "Both ignore regional representation"],
      "answer": "Both define powers and responsibilities in government"
    }
  ]
},



    ]
        
  };