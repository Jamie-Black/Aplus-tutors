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
      {
        topic: "Grammar",
        questions: [
  {
    q: "Which of the following sentences is correct?",
    options: ["He go to school everyday.", "He goes to school every day.", "He going to school every day.", "He gone to school every day."],
    answer: "He goes to school every day."
  },
  {
    q: "Identify the verb in this sentence: 'The boy ran quickly.'",
    options: ["boy", "ran", "quickly", "the"],
    answer: "ran"
  },
  {
    q: "Choose the correct sentence:",
    options: ["She don’t like apples.", "She doesn’t likes apples.", "She doesn’t like apples.", "She not like apples."],
    answer: "She doesn’t like apples."
  },
  {
    q: "What part of speech is the word 'beautiful'?",
    options: ["Noun", "Adjective", "Verb", "Adverb"],
    answer: "Adjective"
  },
  {
    q: "Choose the correct form: 'Neither the teacher nor the students ___ happy.'",
    options: ["is", "are", "were", "be"],
    answer: "are"
  },
  {
    q: "Identify the tense: 'I have been studying for hours.'",
    options: ["Simple present", "Present perfect continuous", "Past perfect", "Past continuous"],
    answer: "Present perfect continuous"
  },
  {
    q: "Choose the correct pronoun: 'Everyone must do ___ best.'",
    options: ["their", "his or her", "his", "its"],
    answer: "his or her"
  },
  {
    q: "Select the correct form: 'She sings better than ___.’",
    options: ["me", "I", "myself", "mine"],
    answer: "I"
  },
  {
    q: "Which is a compound sentence?",
    options: ["He came, but she left.", "Although he came, she left.", "He came after she left.", "He came when she left."],
    answer: "He came, but she left."
  },
  {
    q: "Identify the correct plural: 'Crisis'",
    options: ["Crisises", "Crisis", "Crises", "Crisess"],
    answer: "Crises"
  },
  {
    q: "Which is a question tag for: 'You are coming,'",
    options: ["aren’t you?", "isn’t you?", "don’t you?", "won’t you?"],
    answer: "aren’t you?"
  },
  {
    q: "Choose the correct sentence:",
    options: ["She has eat her food.", "She have eaten her food.", "She has eaten her food.", "She has eating her food."],
    answer: "She has eaten her food."
  },
  {
    q: "Which sentence is in passive voice?",
    options: ["The boy kicked the ball.", "The ball was kicked by the boy.", "The boy was kicking the ball.", "The ball kicks the boy."],
    answer: "The ball was kicked by the boy."
  },
  {
    q: "Identify the adverb in: 'He spoke softly to her.'",
    options: ["He", "spoke", "softly", "her"],
    answer: "softly"
  },
  {
    q: "Choose the correct conjunction: 'She failed ___ she did not study.'",
    options: ["because", "although", "so", "if"],
    answer: "because"
  },
  {
    q: "Choose the correct article: '___ honest man deserves respect.'",
    options: ["A", "An", "The", "No article"],
    answer: "An"
  },
  {
    q: "Pick the correct preposition: 'He is afraid ___ snakes.'",
    options: ["from", "of", "by", "with"],
    answer: "of"
  },
  {
    q: "Select the correct comparative form: 'good'",
    options: ["gooder", "more good", "better", "best"],
    answer: "better"
  },
  {
    q: "Choose the correct phrase: 'He was accused ___ theft.'",
    options: ["of", "for", "with", "by"],
    answer: "of"
  },
  {
    q: "Which is the correct order: adjective sequence?",
    options: ["A red small car", "A small red car", "A car small red", "A car red small"],
    answer: "A small red car"
  }
    ]
      },
      
      {
        topic: "Vocabulary",
        questions: [
  {
    q: "Choose the word that means the same as 'generous':",
    options: ["stingy", "kind", "cruel", "selfish"],
    answer: "kind"
  },
  {
    q: "Select the opposite of 'victory':",
    options: ["win", "battle", "defeat", "success"],
    answer: "defeat"
  },
  {
    q: "Which of the following is a synonym of 'diligent'?",
    options: ["lazy", "hardworking", "careless", "tired"],
    answer: "hardworking"
  },
  {
    q: "The word 'benevolent' means:",
    options: ["kind-hearted", "angry", "selfish", "rude"],
    answer: "kind-hearted"
  },
  {
    q: "Choose the antonym of 'ancient':",
    options: ["modern", "old", "historic", "aged"],
    answer: "modern"
  },
  {
    q: "Pick the synonym of 'fragile':",
    options: ["strong", "delicate", "tough", "solid"],
    answer: "delicate"
  },
  {
    q: "Select the correct meaning of 'conceal':",
    options: ["reveal", "hide", "expose", "show"],
    answer: "hide"
  },
  {
    q: "The opposite of 'temporary' is:",
    options: ["brief", "permanent", "short", "lasting"],
    answer: "permanent"
  },
  {
    q: "Find the synonym of 'courageous':",
    options: ["fearful", "brave", "timid", "weak"],
    answer: "brave"
  },
  {
    q: "Which word means 'to forgive completely'?",
    options: ["pardon", "ignore", "condemn", "punish"],
    answer: "pardon"
  },
  {
    q: "Choose the correct opposite of 'scarce':",
    options: ["rare", "plenty", "few", "limited"],
    answer: "plenty"
  },
  {
    q: "Pick the word that means 'looking forward to something':",
    options: ["anticipation", "regret", "surprise", "fear"],
    answer: "anticipation"
  },
  {
    q: "The opposite of 'humble' is:",
    options: ["modest", "proud", "quiet", "gentle"],
    answer: "proud"
  },
  {
    q: "Choose the synonym of 'assist':",
    options: ["help", "hinder", "delay", "oppose"],
    answer: "help"
  },
  {
    q: "Select the antonym of 'expand':",
    options: ["increase", "enlarge", "contract", "stretch"],
    answer: "contract"
  },
  {
    q: "Which of these is the synonym of 'sincere'?",
    options: ["false", "genuine", "fake", "deceptive"],
    answer: "genuine"
  },
  {
    q: "Pick the antonym of 'joyful':",
    options: ["happy", "sad", "excited", "cheerful"],
    answer: "sad"
  },
  {
    q: "The word 'vivid' means:",
    options: ["clear", "dark", "dim", "blurred"],
    answer: "clear"
  },
  {
    q: "Select the opposite of 'polite':",
    options: ["rude", "respectful", "courteous", "gentle"],
    answer: "rude"
  },
  {
    q: "Choose the synonym of 'terminate':",
    options: ["begin", "start", "end", "continue"],
    answer: "end"
  }
    ]
      },
      
      {
       topic: "Comprehension",
       questions: [
      {
    q: "The main idea of a passage is usually found in the:",
    options: ["introduction", "middle", "conclusion", "title"],
    answer: "introduction"
  },
  {
    q: "The writer’s attitude toward a subject is called the:",
    options: ["theme", "tone", "mood", "style"],
    answer: "tone"
  },
  {
    q: "A summary should contain:",
    options: ["all examples", "only main points", "every detail", "figures of speech"],
    answer: "only main points"
  },
  {
    q: "What should you do first before answering comprehension questions?",
    options: ["Read the questions first", "Read the passage carefully", "Guess the answers", "Highlight random words"],
    answer: "Read the passage carefully"
  },
  {
    q: "If a passage describes a sad event, its mood is likely:",
    options: ["happy", "cheerful", "sorrowful", "joyous"],
    answer: "sorrowful"
  },
  {
    q: "The purpose of a comprehension passage may be to:",
    options: ["entertain", "inform", "persuade", "all of the above"],
    answer: "all of the above"
  },
  {
    q: "What is implied meaning?",
    options: ["Meaning stated directly", "Hidden or suggested meaning", "The title of a passage", "Literal meaning"],
    answer: "Hidden or suggested meaning"
  },
  {
    q: "Which of these best describes 'context clues'?",
    options: ["Hints around an unknown word", "Definition of a word", "A dictionary meaning", "Author’s opinion"],
    answer: "Hints around an unknown word"
  },
  {
    q: "In a comprehension, the 'author’s purpose' refers to:",
    options: ["the length of the text", "why the author wrote it", "the main character", "the summary"],
    answer: "why the author wrote it"
  },
  {
    q: "An inference means:",
    options: ["guessing without evidence", "a logical conclusion based on facts", "copying the text", "summarizing the passage"],
    answer: "a logical conclusion based on facts"
  },
  {
    q: "When a passage compares two things, it is showing:",
    options: ["contrast", "similarity", "opposition", "difference"],
    answer: "similarity"
  },
  {
    q: "The word ‘explicit’ means:",
    options: ["clearly stated", "hidden", "complex", "figurative"],
    answer: "clearly stated"
  },
  {
    q: "‘The boy was as brave as a lion’ is an example of:",
    options: ["metaphor", "simile", "hyperbole", "personification"],
    answer: "simile"
  },
  {
    q: "A narrative passage mainly:",
    options: ["describes", "tells a story", "explains", "argues"],
    answer: "tells a story"
  },
  {
    q: "The word ‘summary’ means:",
    options: ["to lengthen a text", "to restate the main ideas briefly", "to explain every word", "to rewrite in detail"],
    answer: "to restate the main ideas briefly"
  },
  {
    q: "If the author uses emotional words, he aims to:",
    options: ["entertain", "persuade", "inform", "summarize"],
    answer: "persuade"
  },
  {
    q: "The phrase ‘according to the passage’ means:",
    options: ["your opinion", "writer’s words", "title of the story", "summary only"],
    answer: "writer’s words"
  },
  {
    q: "Which of these is NOT a comprehension skill?",
    options: ["Summarizing", "Memorizing", "Inferring", "Predicting"],
    answer: "Memorizing"
  },
  {
    q: "When you restate information in your own words, you:",
    options: ["summarize", "paraphrase", "quote", "copy"],
    answer: "paraphrase"
  },
  {
    q: "A passage that provides facts and figures aims to:",
    options: ["entertain", "inform", "persuade", "criticize"],
    answer: "inform"
  }
    ]
       },
       
      {
       topic: "Lexis and Structure",
       questions: [
  {
    q: "Choose the correct word: 'He congratulated me ___ my success.'",
    options: ["for", "on", "about", "of"],
    answer: "on"
  },
  {
    q: "Select the correct option: 'Neither Ade nor Bola ___ gone.'",
    options: ["have", "has", "is", "are"],
    answer: "has"
  },
  {
    q: "Choose the correct form: 'She prefers tea ___ coffee.'",
    options: ["than", "to", "from", "over"],
    answer: "to"
  },
  {
    q: "Pick the correct option: 'The man ___ car was stolen is here.'",
    options: ["whose", "who", "which", "that"],
    answer: "whose"
  },
  {
    q: "Fill in the blank: 'The students were divided ___ groups.'",
    options: ["into", "in", "to", "among"],
    answer: "into"
  },
  {
    q: "Choose the correct structure: 'It’s high time you ___ home.'",
    options: ["go", "goes", "went", "going"],
    answer: "went"
  },
  {
    q: "Pick the correct preposition: 'He depends ___ his father.'",
    options: ["on", "in", "to", "by"],
    answer: "on"
  },
  {
    q: "Choose the right phrase: 'No sooner had he arrived ___ it began to rain.'",
    options: ["when", "than", "that", "then"],
    answer: "than"
  },
  {
    q: "Complete the sentence: 'He did it ___ purpose.'",
    options: ["in", "with", "on", "by"],
    answer: "on"
  },
  {
    q: "Select the correct word: 'He is used ___ sleeping early.'",
    options: ["to", "for", "with", "at"],
    answer: "to"
  },
  {
    q: "Fill in the blank: 'She is fond ___ dancing.'",
    options: ["of", "for", "with", "to"],
    answer: "of"
  },
  {
    q: "Choose the right word: 'He is capable ___ doing better.'",
    options: ["to", "for", "of", "in"],
    answer: "of"
  },
  {
    q: "Pick the correct phrase: 'He was accused ___ stealing.'",
    options: ["of", "for", "by", "with"],
    answer: "of"
  },
  {
    q: "Choose the right option: 'She insisted ___ going.'",
    options: ["to", "on", "for", "with"],
    answer: "on"
  },
  {
    q: "Select the correct expression: 'He has no interest ___ politics.'",
    options: ["on", "in", "to", "for"],
    answer: "in"
  },
  {
    q: "Choose the best structure: 'He apologized ___ being rude.'",
    options: ["for", "of", "with", "about"],
    answer: "for"
  },
  {
    q: "Pick the correct usage: 'They arrived ___ the airport on time.'",
    options: ["at", "in", "to", "by"],
    answer: "at"
  },
  {
    q: "Select the right phrase: 'He congratulated her ___ her wedding.'",
    options: ["at", "on", "in", "about"],
    answer: "on"
  },
  {
    q: "Choose the correct expression: 'She succeeded ___ convincing them.'",
    options: ["in", "at", "to", "on"],
    answer: "in"
  },
  {
    q: "Pick the right word: 'The boy was accused ___ theft.'",
    options: ["of", "at", "to", "by"],
    answer: "of"
  }
    ]
       }
    ],
  
    Physics: [
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
    topic: "Introduction to Biology",
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
    ]
        
  };