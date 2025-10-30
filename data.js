
// data.js
const registeredUsers = [
  { 
    fullName: "Olaborede James", 
    email: "olaboredejames2021@gmail.com" 
  },
  { 
    fullName: "Sarah Adeola", 
    email: "sarah.adeola@gmail.com" 
    
  },
  { 
    fullName: "Tunde Akin", 
    email: "tundeakin@yahoo.com" 
    
  },
  {
    fullName: "Olaborede Kehinde",
    email: "kennyblack@gmail.com"
  }
];






// subject data

const subjectsData = [
    {
        id: 1,
        title: "Mathematics",
        instructor: "Olaborede James",
        description: "Comprehensive coverage of Algebra, Geometry, and introductory Calculus concepts, statistics and matrices.",
        price: "₦" + 7000,
        topics: [
            "Quadratic Equations",
            "Trigonometric Identities",
            "Vectors and Scalars",
            "Basic Differentiation",
            "Calculus",
            "Algebra",
            "Statistics",
            "Matrices and determinants"
        ],
        whatsappNumber: "2349152769294" // Replace with your actual WhatsApp number (no + or spaces)
    },
    {
        id: 2,
        title: "Physics",
        instructor: "Mr. James Olaborede",
        description: "Exploring classical mechanics, thermodynamics, and introductory electromagnetism, electricity and other fundamental concepts",
        price: "₦" + 5000,
        topics: [
            "Newton's Laws of Motion",
            "Work, Energy, and Power",
            "Light and Optics",
            "Electric Fields",
            "Electricity",
            "Magnetism",
            "Radioactivity"
        ],
        whatsappNumber: "2349152769294" 
    },
    {
        id: 3,
        title: "Chemistry",
        instructor: "Mr. Olaborede James",
        description: "Fundamentals of atomic structure, chemical bonding, and reaction kinetics.",
        price: "₦" + 4500,
        topics: [
            "Atomic Structure",
            "Stoichiometry",
            "Acids, Bases, and Salts",
            "Organic Chemistry Basics"
        ],
        whatsappNumber: "2348012345678"
    },
    {
        id: 4,
        title: "Biology",
        instructor: "Mr. Adeleke Adeniran",
        description: "Study of life, including cell biology, genetics, and ecology.",
        price: "₦" + 5000,
        topics: [
            "Cell Structure and Function",
            "Inheritance and Variation",
            "Ecosystem Dynamics",
            "Human Physiology",
            "Genetics",
            "Classification of living things"
        ],
        whatsappNumber: "2348012345678" 
    },
    {
        id: 5,
        title: "English Language",
        instructor: "Mrs. Virginia Woolf",
        description: "Improving grammar, composition, comprehension, and literary analysis skills.",
        price: "₦" + 5000,
        topics: [
            "Tenses and Concord",
            "Essay Writing Techniques",
            "Verbal Reasoning",
            "Poetic Devices"
        ],
        whatsappNumber: "2348012345678" 
    },
    {
    id: 6 ,
    title: "Full Science Package",
    instructor: "Olaborede James",
    description: "Comprehensive coverage of all science subjects including mathematics, chemistry, biology, physics, further mathematics and technical drawing.",
    price: "₦" + 20000 + " Monthly",
    topics: [
        "Quadratic Equations",
        "Trigonometric Identities",
        "Vectors and Scalars",
        "Basic Differentiation",
        "Organic chemistry",
        "Metals and non metals",
        "Ecology",
        "Classification of living things"
    ],
    whatsappNumber: "08063721835" // Replace with your actual WhatsApp number (no + or spaces)
}
];


const TEAM_DATA = [
    {
        id: 1,
        name: "Olaborede James",
        role: "Lead Science Teacher",
        specialty: "Mathematics, Physics, Chemistry, and Biology",
        bio: "He is focused on exam mastery, implementing strategic teaching methodologies to ensure students gain foundational competence and achieve top scores in challenging national exams like WAEC and JAMB.",
        image: "./IMG_20250720_162824_145.jpg",
        whatsapp: "2349152769294", 
        linkedin: "#"
    },
    {
        id: 2,
        name: "Olaborede Kehinde",
        role: "Lead English Teacher",
        specialty: "Lexis & Structure, Comprehension, Essay Writing and Oral",
        bio: "A highly experienced English Language specialist dedicated to high-stakes exam success. She employs analytical and structural methods to build advanced literacy.",
        image: "/BackgroundEraser_20251005_215502512.png",
        whatsapp: "2349034499225", 
        linkedin: "#"
    }
];


//testimonials data
const testimonials = [
    {
    name: "Sarah Johnson",
    role: "Parent of JSS 2 Student",
    message:
      "Aplus Tutors has been a blessing! My daughter’s confidence and grades have improved tremendously.",
    image: "images/sarah.jpg",
  },
    {
    name: "Michael Adeyemi",
    role: "SS3 Student",
    message:
      "The CBT practice tests and lessons really prepared me for WAEC. I scored higher than I imagined!",
    image: "images/michael.jpg",
  },
    {
    name: "Mrs. Okafor",
    role: "Parent",
    message:
      "I love the way Aplus Tutors combines discipline and encouragement. My son now enjoys studying.",
    image: "images/okafor.jpg",
  },
    {
    name: "Tolu Adebayo",
    role: "JAMB Candidate",
    message:
      "Aplus Tutors made learning fun and interactive. I passed my exams on my first attempt!",
    image: "images/tolu.jpg",
  }
];



// Blog data here

const blogPosts = [
      {
    id: 2,
    title: "5 Ways Artificial Intelligence is Transforming Education",
    author: "Olaborede James",
    date: "2022-02-01",
    content: "Artificial intelligence is changing the way we learn and teach. From personalized learning platforms to intelligent tutoring systems, AI is being used in a variety of ways to improve educational outcomes. One of the most significant benefits of AI in education is its ability to analyze large amounts of data and provide insights that can inform instruction. For example, AI-powered learning analytics can help teachers identify areas where students are struggling and provide targeted support. AI can also help to automate administrative tasks, freeing up teachers to focus on more important tasks. Additionally, AI-powered chatbots can provide students with instant support and feedback, helping to improve their learning experience. As AI continues to evolve, it's likely that we'll see even more innovative applications in the education sector. Some potential future developments include the use of AI-powered virtual reality and augmented reality in education, which could provide students with immersive and interactive learning experiences. Overall, AI has the potential to revolutionize the way we learn and teach, and it's exciting to think about the possibilities.",
    category: "Technology",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
},
      {
    id: 3,
    title: "The Rise of Online Learning Platforms in Africa",
    author: "Olaborede James",
    date: "2024-04-10",
    content: "The rapid growth of online learning platforms is reshaping education across Africa. With internet access expanding and mobile devices becoming more affordable, students from rural and urban areas alike can now access high-quality educational resources. Platforms like uLesson, EduTech, and Aplus Tutors are leading the charge by offering localized content, practice tests, and interactive sessions. Online learning bridges gaps created by poor infrastructure and limited access to teachers, allowing learners to study at their own pace. The future of African education looks promising as technology continues to democratize learning and empower millions of students.",
    category: "E-Learning",
    image: "https://images.pexels.com/photos/4145195/pexels-photo-4145195.jpeg"
},
      {
    id: 5,
    title: "The Importance of Digital Literacy for 21st Century Students",
    author: "Olaborede James",
    date: "2024-09-20",
    content: "In today’s technology-driven world, digital literacy has become as essential as reading and writing. Students need to know not only how to use technology but also how to navigate online spaces responsibly. Digital literacy includes understanding how to verify information, protect privacy, and use productivity tools effectively. Schools that teach digital skills prepare students for future careers in science, business, and technology. Encouraging critical thinking, coding, and responsible internet use are now vital components of modern education. As the digital divide narrows, fostering digital literacy will ensure no learner is left behind.",
    category: "Digital Skills",
    image: "https://images.pexels.com/photos/4144093/pexels-photo-4144093.jpeg"
},
      {
    id: 5,
    title: "How to Prepare for Exams Without Stress",
    author: "Olaborede James",
    date: "2025-10-25",
    content: "Exam periods often bring anxiety and pressure, but effective preparation can make all the difference. Start by creating a realistic study schedule that breaks your syllabus into smaller, manageable sections. Avoid last-minute cramming — instead, review consistently and test yourself with past questions. Ensure you balance study with rest, proper meals, and hydration to keep your brain sharp. Study in a calm environment, minimize distractions, and use active recall techniques to boost memory retention. Remember, confidence comes from preparation, not panic. Approach your exams with a calm mind and organized plan, and you'll perform your best.",
    category: "Study Tips",
    image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg"
},
      {
    id: 6,
    title: "Building a Growth Mindset: The Key to Lifelong Learning",
    author: "Olaborede James",
    date: "2025-10-25",
    content: "A growth mindset is the belief that intelligence and abilities can be developed through effort, learning, and persistence. Students with this mindset see challenges as opportunities to improve rather than as obstacles. Instead of saying 'I can’t do this,' they ask, 'How can I learn to do this?' Cultivating a growth mindset involves embracing feedback, learning from mistakes, and celebrating progress, not just results. Teachers and parents can encourage it by praising effort over talent. When you believe you can grow, you open the door to endless learning possibilities and personal development.",
    category: "Personal Development",
    image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg"
},
      {
    id: 7,
    title: "Balancing School, Social Life, and Rest Effectively",
    author: "Olaborede James",
    date: "2025-10-25",
    content: "Many students struggle to balance academics, friendships, and self-care, often sacrificing one for the other. The key is creating a healthy routine that prioritizes your responsibilities while allowing time for rest and relationships. Use planners or digital calendars to schedule study sessions and breaks. Avoid procrastination so you can enjoy your leisure guilt-free. Make sure to sleep well — rest improves concentration and memory. Remember, success isn’t just about studying hard, but also maintaining your physical and mental health. A balanced life makes you more focused, happier, and ultimately more productive.",
    category: "Student Life",
    image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg"
},
      {
    id: 8,
    title: "Why Learning Coding Early is a Superpower",
    author: "Olaborede James",
    date: "2025-10-25",
    content: "Coding is one of the most valuable skills a student can learn in today’s digital world. It goes beyond computers — it teaches logic, creativity, and problem-solving. When you learn to code early, you learn to think systematically, break problems into smaller steps, and find efficient solutions. From developing websites to designing apps and even controlling robots, coding opens doors to countless opportunities. Platforms like Scratch, Python, and HTML make it easy for beginners to start. With the world moving towards automation and AI, students who understand coding will lead the innovation of the future.",
    category: "STEM Education",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
}
// add blog posts here
];



// reasources data here

const resources = [
  {
    title: "WAEC Physics Past Questions 2024",
    description: "Complete WAEC Physics solved past questions (PDF).",
    type: "free",
    format: "pdf",
    link: "resources/waec_physics_2024.pdf",
    preview: "",
  },
  {
    title: "Mathematics Video Lecture: Algebra Simplified",
    description: "Step-by-step explanation of algebraic equations.",
    type: "paid",
    format: "video",
    price: 1500,
    preview: "videos/algebra_intro.mp4",
    whatsapp: "2348012345678",
  },
  {
    title: "English Literature Notes",
    description: "Comprehensive WAEC Literature notes and summaries.",
    type: "free",
    format: "pdf",
    link: "resources/lit_notes.pdf",
    preview: "",
  },
  {
    title: "Chemistry Diagrams Pack",
    description: "High-quality Chemistry illustrations for revision.",
    type: "paid",
    format: "image",
    price: 1000,
    preview: "images/chemistry_pack.jpg",
    whatsapp: "2348012345678",
  }
];


// Registered quiz Users ---
const allowedUsers = [
  { 
    name: "John Doe", 
    email: "john@example.com" 
    
  },
  { 
    name: "Mary James", 
    email: "mary@example.com" 
    
  },
  { 
    name: "Olaborede James", 
    email: "olaboredejames2021@gmail.com" 
    
  }
];


// --- Multi-Subject Quiz Data ---
const quizData = {

  Mathematics: [
    {
      // Algebra quiz
      topic: "Algebra",
      questions: [
{
  q: "Simplify: 2x + 3x − 5",
  options: ["5x − 5", "5x + 5", "x − 5", "x + 5"],
  answer: "5x − 5"
},
{
  q: "Solve for x: 3x + 5 = 14",
  options: ["x = 3", "x = 4", "x = 5", "x = 6"],
  answer: "x = 3"
},
{
  q: "Simplify: (2x² + 3x + 1) − (x² + x − 2)",
  options: ["x² + 2x + 3", "x² + 4x + 1", "x² + 2x + 2", "2x² + 4x + 3"],
  answer: "x² + 2x + 3"
},
{
  q: "Factorize: x² − 9",
  options: ["(x + 3)(x − 3)", "(x + 9)(x − 9)", "(x − 3)²", "(x + 3)²"],
  answer: "(x + 3)(x − 3)"
},
{
  q: "Simplify: 4(x + 2) − 3(x − 5)",
  options: ["x + 23", "x − 23", "7x + 1", "x + 17"],
  answer: "x + 23"
},
{
  q: "Solve for x: 5x − 7 = 3x + 9",
  options: ["x = 8", "x = −8", "x = 16", "x = −16"],
  answer: "x = 8"
},
{
  q: "If 2x + 3 = 9, find x.",
  options: ["x = 2", "x = 3", "x = 4", "x = 5"],
  answer: "x = 3"
},
{
  q: "Factorize completely: 2x² + 4x",
  options: ["2x(x + 2)", "x(2x + 4)", "2(x + 2)", "x²(2 + 4)"],
  answer: "2x(x + 2)"
},
{
  q: "Simplify: (x + 2)(x − 5)",
  options: ["x² − 3x − 10", "x² + 3x − 10", "x² − 7x + 10", "x² + 7x − 10"],
  answer: "x² − 3x − 10"
},
{
  q: "Solve for x: 7x = 35",
  options: ["x = 4", "x = 5", "x = 6", "x = 7"],
  answer: "x = 5"
},
{
  q: "Simplify: (3x² − 2x + 5) + (x² + 4x − 3)",
  options: ["4x² + 2x + 2", "4x² + 6x + 2", "2x² + 2x + 2", "3x² + 6x + 8"],
  answer: "4x² + 2x + 2"
},
{
  q: "If 4x − 2 = 10, find x.",
  options: ["x = 2", "x = 3", "x = 4", "x = 5"],
  answer: "x = 3"
},
{
  q: "Simplify: 5(x − 2) + 3(x + 4)",
  options: ["8x + 2", "8x − 2", "8x + 14", "8x − 14"],
  answer: "8x + 2"
},
{
  q: "Expand and simplify: (2x − 3)(x + 4)",
  options: ["2x² + 5x − 12", "2x² − 5x − 12", "2x² + 8x − 3", "2x² − 8x + 12"],
  answer: "2x² + 5x − 12"
},
{
  q: "Solve for x: x/3 = 6",
  options: ["x = 12", "x = 15", "x = 18", "x = 20"],
  answer: "x = 18"
},
{
  q: "Factorize: x² + 6x + 8",
  options: ["(x + 2)(x + 4)", "(x − 2)(x − 4)", "(x + 1)(x + 8)", "(x + 3)(x + 3)"],
  answer: "(x + 2)(x + 4)"
},
{
  q: "Simplify: (3x² − 5x + 2) − (x² − 2x − 1)",
  options: ["2x² − 3x + 3", "2x² − 7x + 3", "4x² − 3x + 3", "2x² − 3x − 3"],
  answer: "2x² − 3x + 3"
},
{
  q: "Solve for x: 2(x + 3) = 4x − 2",
  options: ["x = 4", "x = 5", "x = 3", "x = 2"],
  answer: "x = 4"
},
{
  q: "Simplify: (x² − 16) ÷ (x − 4)",
  options: ["x + 4", "x − 4", "x² + 4", "x² − 4"],
  answer: "x + 4"
},
{
  q: "If 3x − 7 = 2x + 1, find x.",
  options: ["x = 6", "x = 7", "x = 8", "x = 9"],
  answer: "x = 8"
}
      ]
    },
    {
      topic: "Geometry",
      questions: [
        {
  q: "Find the sum of interior angles of a triangle.",
  options: ["90°", "120°", "180°", "360°"],
  answer: "180°"
},
{
  q: "Find the sum of interior angles of a pentagon.",
  options: ["360°", "540°", "720°", "900°"],
  answer: "540°"
},
{
  q: "Each interior angle of a regular hexagon is:",
  options: ["100°", "120°", "135°", "140°"],
  answer: "120°"
},
{
  q: "The sum of exterior angles of any polygon is:",
  options: ["90°", "180°", "270°", "360°"],
  answer: "360°"
},
{
  q: "In a right-angled triangle, if one angle is 30°, the other acute angle is:",
  options: ["30°", "45°", "60°", "90°"],
  answer: "60°"
},
{
  q: "A triangle with all sides equal is called:",
  options: ["Scalene triangle", "Isosceles triangle", "Equilateral triangle", "Right triangle"],
  answer: "Equilateral triangle"
},
{
  q: "Find the area of a rectangle with length 10 cm and width 5 cm.",
  options: ["15 cm²", "25 cm²", "50 cm²", "100 cm²"],
  answer: "50 cm²"
},
{
  q: "Find the perimeter of a square with side 8 cm.",
  options: ["16 cm", "24 cm", "32 cm", "64 cm"],
  answer: "32 cm"
},
{
  q: "The perpendicular distance from the center of a circle to a chord bisects the chord. True or False?",
  options: ["True", "False"],
  answer: "True"
},
{
  q: "The radius of a circle is half of its:",
  options: ["Circumference", "Diameter", "Area", "Chord"],
  answer: "Diameter"
},
{
  q: "Find the area of a circle with radius 7 cm. (Take π = 22/7)",
  options: ["49 cm²", "77 cm²", "154 cm²", "308 cm²"],
  answer: "154 cm²"
},
{
  q: "In a parallelogram, opposite angles are:",
  options: ["Equal", "Complementary", "Right angles", "None of these"],
  answer: "Equal"
},
{
  q: "The line joining the center of a circle to any point on the circle is the:",
  options: ["Chord", "Diameter", "Radius", "Tangent"],
  answer: "Radius"
},
{
  q: "The distance around a circle is called the:",
  options: ["Diameter", "Area", "Circumference", "Arc"],
  answer: "Circumference"
},
{
  q: "Find the number of sides of a polygon whose sum of interior angles is 900°.",
  options: ["5", "6", "7", "8"],
  answer: "7"
},
{
  q: "In a cyclic quadrilateral, opposite angles are:",
  options: ["Equal", "Supplementary", "Complementary", "Right angles"],
  answer: "Supplementary"
},
{
  q: "Find the area of a triangle with base 12 cm and height 8 cm.",
  options: ["48 cm²", "96 cm²", "24 cm²", "60 cm²"],
  answer: "48 cm²"
},
{
  q: "The diagonals of a rhombus:",
  options: ["Are equal", "Bisect each other at right angles", "Are parallel", "Are unequal and non-bisecting"],
  answer: "Bisect each other at right angles"
},
{
  q: "A line that touches a circle at only one point is called a:",
  options: ["Chord", "Secant", "Tangent", "Radius"],
  answer: "Tangent"
},
{
  q: "Find the volume of a cube with edge 4 cm.",
  options: ["8 cm³", "16 cm³", "32 cm³", "64 cm³"],
  answer: "64 cm³"
}
      ]
    },
    {
      topic: "Set",
      questions: [
        {
  q: "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, find A ∩ B.",
  options: ["{1, 2}", "{3, 4}", "{5, 6}", "{1, 2, 3, 4, 5, 6}"],
  answer: "{3, 4}"
},
{
  q: "If A = {2, 4, 6, 8} and B = {1, 2, 3, 4, 5}, find A ∪ B.",
  options: ["{1, 2, 3, 4, 5, 6, 8}", "{2, 4, 6, 8}", "{1, 3, 5}", "{6, 8}"],
  answer: "{1, 2, 3, 4, 5, 6, 8}"
},
{
  q: "If U = {1,2,3,4,5,6,7,8,9,10} and A = {2,4,6,8,10}, find A′.",
  options: ["{1,3,5,7,9}", "{2,4,6,8,10}", "{1,2,3,4,5}", "{3,6,9}"],
  answer: "{1,3,5,7,9}"
},
{
  q: "If n(U) = 20, n(A) = 12 and n(A′) = ?, find n(A′).",
  options: ["8", "12", "10", "20"],
  answer: "8"
},
{
  q: "If A = {x | x is an even number less than 10}, find A.",
  options: ["{2,4,6,8}", "{1,2,3,4,5}", "{2,3,5,7}", "{1,3,5,7,9}"],
  answer: "{2,4,6,8}"
},
{
  q: "If A = {a, b, c} and B = {b, c, d, e}, find A − B.",
  options: ["{a}", "{b, c}", "{d, e}", "{a, b, c, d, e}"],
  answer: "{a}"
},
{
  q: "If A ⊆ B, then which of the following is true?",
  options: ["Every element of A is in B", "Every element of B is in A", "A and B are disjoint", "A ∩ B = ∅"],
  answer: "Every element of A is in B"
},
{
  q: "If A ∩ B = ∅, then A and B are:",
  options: ["Equal sets", "Disjoint sets", "Universal sets", "Empty sets"],
  answer: "Disjoint sets"
},
{
  q: "The number of subsets of a set with 3 elements is:",
  options: ["3", "6", "8", "9"],
  answer: "8"
},
{
  q: "The universal set is the set that:",
  options: ["Contains all subsets", "Contains all possible elements under consideration", "Contains no element", "Is empty"],
  answer: "Contains all possible elements under consideration"
},
{
  q: "If A = {1,2,3} and B = {3,4,5}, find n(A ∪ B).",
  options: ["3", "5", "6", "7"],
  answer: "5"
},
{
  q: "If n(U) = 50, n(A) = 30, n(B) = 25, and n(A ∩ B) = 10, find n(A ∪ B).",
  options: ["45", "50", "55", "60"],
  answer: "45"
},
{
  q: "If A = {x | x is a vowel in the English alphabet}, find A.",
  options: ["{a, e, i, o, u}", "{b, c, d, f, g}", "{a, e, i, o}", "{e, i, o, u}"],
  answer: "{a, e, i, o, u}"
},
{
  q: "What is the complement of the universal set U?",
  options: ["∅", "U", "A′", "{0}", "None"],
  answer: "∅"
},
{
  q: "The empty set is also called:",
  options: ["Null set", "Subset", "Complement set", "Universal set"],
  answer: "Null set"
},
{
  q: "If A = {1,2,3} and B = {2,3,4}, find A Δ B (symmetric difference).",
  options: ["{1,4}", "{2,3}", "{1,2,3,4}", "{1,2,4}"],
  answer: "{1,4}"
},
{
  q: "If n(A) = 5, how many subsets can be formed from A?",
  options: ["10", "25", "30", "32"],
  answer: "32"
},
{
  q: "If A ⊂ B and B ⊂ C, then:",
  options: ["A ⊂ C", "C ⊂ A", "A = B", "B = C"],
  answer: "A ⊂ C"
},
{
  q: "The intersection of a set with the universal set U is:",
  options: ["∅", "U", "The set itself", "Complement of the set"],
  answer: "The set itself"
},
{
  q: "Which of the following sets is finite?",
  options: ["Set of even numbers", "Set of natural numbers", "Set of prime numbers", "Set of months in a year"],
  answer: "Set of months in a year"
}
      ]
    },
    {
      topic: "Variation",
      questions: [
        {
  q: "If y varies directly as x and y = 12 when x = 4, find y when x = 6.",
  options: ["16", "18", "20", "22"],
  answer: "18"
},
{
  q: "If y varies inversely as x and y = 8 when x = 3, find y when x = 6.",
  options: ["2", "3", "4", "6"],
  answer: "4"
},
{
  q: "If y varies jointly as x and z, and y = 24 when x = 3 and z = 4, find y when x = 2 and z = 5.",
  options: ["15", "20", "25", "30"],
  answer: "20"
},
{
  q: "If y varies directly as the square of x and y = 50 when x = 5, find y when x = 7.",
  options: ["80", "90", "98", "100"],
  answer: "98"
},
{
  q: "If y varies inversely as the square of x and y = 9 when x = 2, find y when x = 3.",
  options: ["3", "4", "5", "6"],
  answer: "4"
},
{
  q: "If y varies directly as x and inversely as z, and y = 6 when x = 2 and z = 4, find y when x = 3 and z = 6.",
  options: ["2", "3", "4", "5"],
  answer: "3"
},
{
  q: "If y varies directly as the cube of x and y = 64 when x = 2, find y when x = 3.",
  options: ["96", "192", "216", "324"],
  answer: "216"
},
{
  q: "If y varies inversely as x and y = 15 when x = 8, find x when y = 10.",
  options: ["10", "12", "15", "20"],
  answer: "12"
},
{
  q: "If y varies directly as x and y = 14 when x = 7, find y when x = 21.",
  options: ["28", "35", "42", "49"],
  answer: "42"
},
{
  q: "If y varies inversely as the square of x, and y = 16 when x = 2, find y when x = 4.",
  options: ["2", "3", "4", "8"],
  answer: "4"
},
{
  q: "If y varies directly as x and y = 30 when x = 5, find x when y = 18.",
  options: ["2", "3", "4", "6"],
  answer: "3"
},
{
  q: "If y varies jointly as x and the square root of z, and y = 24 when x = 4 and z = 9, find y when x = 6 and z = 16.",
  options: ["32", "36", "48", "64"],
  answer: "48"
},
{
  q: "If y varies inversely as x and y = 20 when x = 3, find the constant of variation.",
  options: ["20", "23", "50", "60"],
  answer: "60"
},
{
  q: "If y varies directly as x and inversely as the square of z, and y = 8 when x = 4 and z = 2, find y when x = 9 and z = 3.",
  options: ["6", "8", "10", "12"],
  answer: "6"
},
{
  q: "If y varies directly as x² and inversely as z, and y = 10 when x = 2 and z = 4, find y when x = 3 and z = 6.",
  options: ["12", "13.5", "14", "15"],
  answer: "13.5"
},
{
  q: "If y varies directly as the square root of x, and y = 12 when x = 9, find y when x = 16.",
  options: ["13", "14", "15", "16"],
  answer: "16"
},
{
  q: "If y varies inversely as x and y = 25 when x = 8, find y when x = 10.",
  options: ["18", "19", "20", "21"],
  answer: "20"
},
{
  q: "If y varies directly as x and y = 24 when x = 8, find x when y = 9.",
  options: ["2", "3", "4", "5"],
  answer: "3"
},
{
  q: "If y varies inversely as the square root of x and y = 20 when x = 9, find y when x = 16.",
  options: ["10", "12", "15", "18"],
  answer: "15"
},
{
  q: "If y varies jointly as x and z and inversely as w, and y = 24 when x = 3, z = 4, and w = 2, find y when x = 2, z = 5, and w = 1.",
  options: ["40", "45", "48", "50"],
  answer: "40"
}
      ]
    }
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

    {
  topic: "Nutrition in Plants and Animals",
  questions: [
    {
      q: "The process by which green plants manufacture their food is called —",
      options: ["Respiration", "Photosynthesis", "Transpiration", "Osmosis"],
      answer: "Photosynthesis"
    },
    {
      q: "Which of the following substances is required for photosynthesis?",
      options: ["Carbon dioxide and water", "Oxygen and glucose", "Nitrogen and oxygen", "Water and protein"],
      answer: "Carbon dioxide and water"
    },
    {
      q: "The green pigment that traps light energy for photosynthesis is —",
      options: ["Haemoglobin", "Chlorophyll", "Carotene", "Melanin"],
      answer: "Chlorophyll"
    },
    {
      q: "The main products of photosynthesis are —",
      options: [
        "Glucose and oxygen",
        "Carbon dioxide and water",
        "Protein and energy",
        "Starch and carbon dioxide"
      ],
      answer: "Glucose and oxygen"
    },
    {
      q: "The process by which plants lose water through the stomata is called —",
      options: ["Transpiration", "Osmosis", "Respiration", "Condensation"],
      answer: "Transpiration"
    },
    {
      q: "Which of these minerals is essential for the formation of chlorophyll?",
      options: ["Iron", "Magnesium", "Calcium", "Phosphorus"],
      answer: "Magnesium"
    },
    {
      q: "The type of nutrition in which organisms make their own food is —",
      options: ["Heterotrophic", "Autotrophic", "Saprophytic", "Parasitic"],
      answer: "Autotrophic"
    },
    {
      q: "Animals that feed on both plants and animals are called —",
      options: ["Herbivores", "Carnivores", "Omnivores", "Detritivores"],
      answer: "Omnivores"
    },
    {
      q: "Which of the following is NOT a class of food?",
      options: ["Carbohydrates", "Proteins", "Vitamins", "Chlorophyll"],
      answer: "Chlorophyll"
    },
    {
      q: "Which of the following food substances is mainly for energy supply?",
      options: ["Carbohydrates", "Proteins", "Vitamins", "Minerals"],
      answer: "Carbohydrates"
    },
    {
      q: "Proteins are mainly used for —",
      options: ["Energy supply", "Growth and repair of tissues", "Regulating temperature", "Producing hormones"],
      answer: "Growth and repair of tissues"
    },
    {
      q: "Which of these enzymes breaks down starch to maltose?",
      options: ["Amylase", "Pepsin", "Lipase", "Trypsin"],
      answer: "Amylase"
    },
    {
      q: "Which part of the human digestive system absorbs digested food?",
      options: ["Stomach", "Small intestine", "Large intestine", "Mouth"],
      answer: "Small intestine"
    },
    {
      q: "The finger-like projections in the small intestine that aid absorption are called —",
      options: ["Cilia", "Villi", "Papillae", "Flagella"],
      answer: "Villi"
    },
    {
      q: "Which of the following is an example of a ruminant animal?",
      options: ["Dog", "Rabbit", "Goat", "Hen"],
      answer: "Goat"
    },
    {
      q: "Ruminant animals chew the cud mainly to —",
      options: [
        "Swallow more food",
        "Help digest cellulose better",
        "Prevent overeating",
        "Produce saliva"
      ],
      answer: "Help digest cellulose better"
    },
    {
      q: "The enzyme that breaks down fats into fatty acids and glycerol is —",
      options: ["Amylase", "Pepsin", "Lipase", "Maltase"],
      answer: "Lipase"
    },
    {
      q: "In plants, food is transported from the leaves to other parts through the —",
      options: ["Xylem", "Phloem", "Stomata", "Cortex"],
      answer: "Phloem"
    },
    {
      q: "Which of these organisms feed on dead and decaying matter?",
      options: ["Parasites", "Herbivores", "Saprophytes", "Carnivores"],
      answer: "Saprophytes"
    },
    {
      q: "Which of these vitamins prevents rickets?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      answer: "Vitamin D"
    }
  ]
}
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


// Exam prep data

const WAEC_PREP_DATA = [
    {
        id: 101,
        subject: "General Mathematics",
        topic: "WAEC Surds",
        subTopic: "Calculating Gradient and Distance",
        description: "A comprehensive video covering the essential WAEC topics on coordinate geometry. Includes past question examples.",
        type: "Video Lesson",
        videoSource: "/VID_20250929_075727.mp4", 
        downloadLink: "downloads/waec/maths_geometry_notes.pdf", 
        duration: "18:45"
    },
    
    {
        id: 102,
        subject: "English Language",
        topic: "Essay Writing",
        subTopic: "Tips for Argumentative Essays (WAEC Standard)",
        description: "Downloadable guide and video focusing on structure, grammar, and vocabulary needed to score high in the WAEC essay section.",
        type: "Resource Guide",
        videoSource: "videos/waec/english_essay_tips.mp4",
        downloadLink: "downloads/waec/argumentative_essay_guide.pdf",
        duration: "10:30"
    },
    
    {
        id: 102,
        subject: "Biology",
        topic: "The cell and its environment",
        subTopic: "Functions of the cell",
        description: "Downloadable guide and video focusing on the cell theory, components of the cell and properties.",
        type: "Resource Guide",
        videoSource: "videos/waec/english_essay_tips.mp4",
        downloadLink: "downloads/waec/argumentative_essay_guide.pdf",
        duration: "10:30"
    }
    // Add more WAEC specific lessons here
];


// Classroom lesson data 

const COURSE_DATA = [
    {
        id: 1,
        subject: "Mathematics",
        topic: "Algebra Fundamentals",
        subTopic: "Introduction to Linear Equations",
        description: "A foundational lesson on recognizing and solving single-variable linear equations. Essential for WAEC/NECO/JAMB.",
        videoTitle: "Solving Linear Equations (Part 1)",
        // !!! IMPORTANT: Update this path to your actual video file location !!!
        videoSource: "/VID_20250929_075727.mp4", 
        downloadLink: "/VID_20250929_075727.mp4", // Link to a downloadable resource
        duration: "15:30"
    },
    {
        id: 2,
        subject: "English Language",
        topic: "Lexis and Structure",
        subTopic: "Identifying Figurative Speech",
        description: "Mastering Simile, Metaphor, and Personification for comprehension and literary analysis. Key concepts for exam success.",
        videoTitle: "Understanding Figurative Language",
        // !!! IMPORTANT: Update this path to your actual video file location !!!
        videoSource: "videos/english/figurative_speech.mp4",
        downloadLink: "downloads/english/figurative_speech.pdf",
        duration: "12:05"
    },
    {
        id: 3,
        subject: "Biology",
        topic: "Cell Structure",
        subTopic: "The Mitochondrion and Respiration",
        description: "Detailed video on the structure and function of the 'powerhouse' of the cell, linking structure to function.",
        videoTitle: "Mitochondria: The Powerhouse",
        // !!! IMPORTANT: Update this path to your actual video file location !!!
        videoSource: "videos/biology/cell_respiration.mp4",
        downloadLink: "downloads/biology/cell_respiration_guide.mp4",
        duration: "20:15"
    }
    // Add more lessons here for control and management
];


// CBT allowed user data

const users = [
  { 
    name: "John Doe", 
    email: "john@example.com" 
    
  },
  { 
    name: "Mary Smith", 
    email: "mary@example.com" 
    
  },
  {
    name: "Olaborede James",
    email: "olaboredejames2021@gmail.com"
  },
  {
    name: "Henry Smith",
    email: "henrysmith@gmail.com"
  }

];

// CBT subject array
const subjects = ["Mathematics", "English", "Physics", "Chemistry", "Biology", "Economics", "Literature", "Crs", "Government", "Civic_Education", "Data_Processing", "Agriculture"]


// CBT questions data
const questions = {
  
  //Mathematics questions here
  Mathematics: [
  {
    question: "Simplify: 3x + 4x − 2x.",
    options: ["5x", "6x", "7x", "9x"],
    answer: 0,
  },
  {
    question: "Find the value of x if 2x − 2 = 10.",
    options: ["2", "5", "6", "4"],
    answer: 2,
  },
  {
    question: "The area of a circle of radius 7 cm is:",
    options: ["44 cm²", "154 cm²", "18 cm²", "332 cm²"],
    answer: 1,
  },
  {
    question: "Find the value of x in the triangle shown.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Triangle_ABC.svg",
    imageAlt: "Triangle ABC with sides labeled",
    options: ["70°", "35°", "75°", "60°"],
    answer: 2,
  },
  {
    question: "Evaluate 3² × 2³.",
    options: ["12", "18", "24", "72"],
    answer: 2,
  },
  {
    question: "Simplify: (2/3) ÷ (4/9).",
    options: ["3/2", "2/3", "9/8", "8/9"],
    answer: 0,
  },
  {
    question: "Find the simple interest on ₦4000 at 5% per annum for 3 years.",
    options: ["₦300", "₦500", "₦600", "₦700"],
    answer: 2,
  },
  {
    question: "If y = 2x + 3, find y when x = 4.",
    options: ["9", "10", "11", "12"],
    answer: 2,
  },
  {
    question: "The mean of 3, 7, 5, and 9 is:",
    options: ["5", "6", "6.5", "7"],
    answer: 2,
  },
  {
    question: "Solve for x: 5x = 20.",
    options: ["2", "3", "4", "5"],
    answer: 2,
  },
  {
    question: "Find the mode of 2, 3, 4, 3, 2, 3, 5.",
    options: ["2", "3", "4", "5"],
    answer: 1,
  },
  {
    question: "The perimeter of a rectangle is 24 cm. If its length is 8 cm, find its breadth.",
    options: ["4 cm", "6 cm", "8 cm", "12 cm"],
    answer: 0,
  },
  {
    question: "A die is thrown once. What is the probability of getting an even number?",
    options: ["1/2", "1/3", "2/3", "1/6"],
    answer: 0,
  },
  {
    question: "Simplify: 5a − 2b + 3a + b.",
    options: ["8a − b", "8a + 3b", "2a − 3b", "5a + 2b"],
    answer: 0,
  },
  {
    question: "Find the gradient of the line joining (2, 3) and (4, 7).",
    options: ["2", "3", "1", "4"],
    answer: 0,
  },
  {
    question: "Convert 0.125 to a fraction in its simplest form.",
    options: ["1/2", "1/4", "1/8", "3/8"],
    answer: 2,
  },
  {
    question: "Expand: (x + 2)(x + 3).",
    options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5x + 3", "x² + 3x + 6"],
    answer: 0,
  },
  {
    question: "Find the value of log₁₀ 1000.",
    options: ["1", "2", "3", "4"],
    answer: 2,
  },
  {
    question: "The exterior angle of a regular polygon is 30°. Find the number of sides.",
    options: ["6", "8", "10", "12"],
    answer: 3,
  },
  {
    question: "If sin x = 3/5, find cos x.",
    options: ["4/5", "5/3", "3/4", "1/5"],
    answer: 0,
  },
  {
    question: "The bearing of B from A is 065°. Find the bearing of A from B.",
    options: ["115°", "245°", "300°", "245°"],
    answer: 1,
  },
  {
    question: "A man bought a radio for ₦4500 and sold it for ₦5400. Find his gain percent.",
    options: ["10%", "15%", "20%", "25%"],
    answer: 2,
  },
  {
    question: "In the figure, ∠A = 90°. Find ∠C.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Right_triangle_definitions.svg",
    imageAlt: "Right triangle showing angles A, B, and C",
    options: ["30°", "45°", "60°", "90°"],
    answer: 1,
  },
  {
    question: "The distance between two towns on a map is 5 cm. If the scale is 1 : 100 000, find the actual distance in km.",
    options: ["2 km", "5 km", "10 km", "15 km"],
    answer: 2,
  },
  {
    question: "Simplify: (x²y³) × (x³y).",
    options: ["x⁵y⁴", "x⁶y³", "x⁴y⁴", "x³y³"],
    answer: 0,
  }, 
  {
    question: "If x = 2 and y = 3, find the value of 3x² + 2y.",
    options: ["12", "18", "20", "24"],
    answer: 1,
  },
  {
    question: "Find the LCM of 12, 15, and 20.",
    options: ["30", "45", "60", "120"],
    answer: 2,
  },
  {
    question: "A box contains 3 red, 4 blue, and 5 green balls. What is the probability of picking a red ball?",
    options: ["1/4", "1/3", "3/12", "3/10"],
    answer: 3,
  },
  {
    question: "The quadratic equation x² - 5x + 6 = 0 has roots:",
    options: ["2 and 3", "−2 and 3", "−2 and −3", "3 and 5"],
    answer: 0,
  },
  {
    question: "Simplify: (4x²y) ÷ (2xy²).",
    options: ["2x/y", "2y/x", "x/2y", "2xy"],
    answer: 0,
  },
  {
    question: "In the figure below, find ∠ABC.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Triangle_angles_sum.svg",
    imageAlt: "Triangle showing angles A, B, C",
    options: ["30°", "45°", "60°", "75°"],
    answer: 2,
  },
  {
    question: "Convert 0.375 to a fraction in simplest form.",
    options: ["3/5", "3/8", "5/8", "3/4"],
    answer: 1,
  },
  {
    question: "If a = 2, b = 3, find the value of a² + 2ab + b².",
    options: ["16", "20", "25", "49"],
    answer: 0,
  },
  {
    question: "Simplify: (x + 3)(x − 3).",
    options: ["x² + 6x + 9", "x² − 9", "x² − 6x + 9", "x² + 9"],
    answer: 1,
  },
  {
    question: "A straight line passes through (0, 2) and (2, 6). Find its equation.",
    options: ["y = 2x + 2", "y = 3x + 2", "y = 4x + 2", "y = x + 2"],
    answer: 1,
  },
  {
    question: "Find the 5th term of the arithmetic sequence 3, 7, 11, 15...",
    options: ["19", "20", "21", "23"],
    answer: 0,
  },
  {
    question: "Simplify: (2x + 3)².",
    options: ["4x² + 6x + 9", "4x² + 9x + 6", "4x² + 12x + 9", "4x² + 9"],
    answer: 2,
  },
  {
    question: "If tan θ = 3/4, find sin θ.",
    options: ["3/5", "4/5", "5/3", "1/5"],
    answer: 0,
  },
  {
    question: "A car travels 120 km in 3 hours. Find its average speed.",
    options: ["30 km/h", "35 km/h", "40 km/h", "45 km/h"],
    answer: 2,
  },
  {
    question: "A chord of a circle is 10 cm long and its distance from the center is 6 cm. Find the radius.",
    options: ["5 cm", "6 cm", "7 cm", "8 cm"],
    answer: 3,
  },
  {
    question: "Find the gradient of the line 3y = 2x + 5.",
    options: ["3/2", "2/3", "−2/3", "−3/2"],
    answer: 1,
  },
  {
    question: "Simplify: (3a²b³)².",
    options: ["6a⁴b⁶", "9a⁴b⁶", "6a³b⁴", "9a³b⁶"],
    answer: 1,
  },
  {
    question: "The 10th term of an arithmetic progression is 32, and the first term is 4. Find the common difference.",
    options: ["3", "3.5", "4", "3.2"],
    answer: 2,
  },
  {
    question: "If 4 men can do a job in 6 days, how many days will 3 men take?",
    options: ["6", "7", "8", "9"],
    answer: 2,
  },
  {
    question: "The volume of a cube is 27 cm³. Find its edge.",
    options: ["2 cm", "3 cm", "4 cm", "6 cm"],
    answer: 1,
  },
  {
    question: "Solve for x: 2(x − 3) = 10.",
    options: ["3", "5", "6", "7"],
    answer: 3,
  },
  {
    question: "Simplify: √50.",
    options: ["5√2", "10√5", "25√2", "2√5"],
    answer: 0,
  },
  {
    question: "Find the median of 2, 4, 6, 8, 10.",
    options: ["4", "5", "6", "7"],
    answer: 2,
  },
  {
    question: "Evaluate 2³ + 3².",
    options: ["12", "13", "17", "18"],
    answer: 2,
  },
  {
    question: "In the diagram, the circle has a radius of 5 cm. Find its circumference (π = 3.142).",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Circle_-_black_simple.svg",
    imageAlt: "Simple circle diagram with radius marked",
    options: ["25.13 cm", "28.27 cm", "31.42 cm", "33.12 cm"],
    answer: 2,
  },
  {
    question: "If y varies directly as x and y = 10 when x = 4, find y when x = 6.",
    options: ["12", "13", "14", "15"],
    answer: 3,
  },
  {
    question: "Find the simple interest on ₦10,000 at 5% per annum for 3 years.",
    options: ["₦1,500", "₦1,000", "₦2,000", "₦2,500"],
    answer: 0,
  },
  {
    question: "Express 0.04 as a percentage.",
    options: ["0.4%", "4%", "40%", "400%"],
    answer: 1,
  },
  {
    question: "Find the missing term in the sequence: 3, 9, 27, __, 243.",
    options: ["54", "72", "81", "90"],
    answer: 2,
  },
  {
    question: "If 3x + 4 = 10, find x.",
    options: ["2", "3", "4", "5"],
    answer: 0,
  },
  {
    question: "Find the mean of the numbers 5, 7, 9, 11, 13.",
    options: ["7", "9", "10", "11"],
    answer: 1,
  },
  {
    question: "Simplify: (x²y³)³.",
    options: ["x⁶y⁹", "x⁵y⁶", "x³y⁶", "x⁹y⁶"],
    answer: 0,
  },
  {
    question: "A rectangle has a length of 8 cm and a width of 3 cm. Find its perimeter.",
    options: ["11 cm", "16 cm", "22 cm", "24 cm"],
    answer: 2,
  },
  {
    question: "Find the next term of the sequence 1, 4, 9, 16, __.",
    options: ["20", "24", "25", "30"],
    answer: 2,
  },
  {
    question: "Solve: 5x − 7 = 18.",
    options: ["4", "5", "6", "7"],
    answer: 3,
  },
  {
    question: "Simplify: (3/4) ÷ (2/3).",
    options: ["1/2", "9/8", "8/9", "2/3"],
    answer: 1,
  },
  {
    question: "In a class of 40 students, 18 are boys. What percentage are girls?",
    options: ["45%", "50%", "55%", "60%"],
    answer: 2,
  },
  {
    question: "Find the range of the numbers 2, 5, 7, 9, 10.",
    options: ["5", "7", "8", "10"],
    answer: 2,
  },
  {
    question: "The interior angles of a triangle are in the ratio 2:3:4. Find the largest angle.",
    options: ["40°", "60°", "80°", "100°"],
    answer: 2,
  },
  {
    question: "A man bought a radio for ₦6,000 and sold it for ₦7,500. Find his percentage gain.",
    options: ["15%", "20%", "25%", "30%"],
    answer: 2,
  },
  {
    question: "Simplify: (x + y)(x − y).",
    options: ["x² − y²", "x² + y²", "x² − 2xy + y²", "x² + 2xy + y²"],
    answer: 0,
  },
  {
    question: "The bar chart below shows the number of cars sold in five months. Find the month with the highest sales.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Simple_bar_chart.svg",
    imageAlt: "Bar chart showing sales in months Jan–May",
    options: ["January", "March", "April", "May"],
    answer: 3,
  },
  {
    question: "Solve for x: x² − 16 = 0.",
    options: ["x = ±4", "x = 4", "x = −4", "x = 0"],
    answer: 0,
  },
  {
    question: "Simplify: (2x³y²) ÷ (4xy).",
    options: ["x²y", "x²y²", "(x²y)/2", "2x²y"],
    answer: 2,
  },
  {
    question: "Find the area of a triangle with base 10 cm and height 8 cm.",
    options: ["40 cm²", "80 cm²", "60 cm²", "20 cm²"],
    answer: 0,
  },
  {
    question: "Find the mode of 2, 4, 4, 5, 5, 5, 6.",
    options: ["2", "4", "5", "6"],
    answer: 2,
  },
  {
    question: "If the radius of a sphere is 3 cm, find its volume. (π = 3.142)",
    options: ["100 cm³", "110 cm³", "113 cm³", "120 cm³"],
    answer: 2,
  },
  {
    question: "A car depreciates by 10% annually. If it was bought for ₦1,000,000, find its value after 2 years.",
    options: ["₦900,000", "₦810,000", "₦800,000", "₦950,000"],
    answer: 1,
  },
  {
    question: "Simplify: (a + b)² − (a − b)².",
    options: ["4ab", "2ab", "ab", "a² − b²"],
    answer: 0,
  },
  {
    question: "The diagram shows a right-angled triangle. Find the hypotenuse if the other sides are 6 cm and 8 cm.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Pythagorean.svg",
    imageAlt: "Right-angled triangle with sides 6 and 8 cm",
    options: ["10 cm", "12 cm", "14 cm", "8 cm"],
    answer: 0,
  }
  ],
  
  //English language questions here
  English: [
    {
      question: "Choose the correct spelling:",
      options: ["Enviroment", "Environment", "Enviromentt", "Enviromenth"],
      answer: 1,
    },
    {
        question: "The woman is beautiful. Choose the adjective.",
        options: ["Woman", "beautiful", "The", "is"],
        answer: 1,
    },
    {
  question: "Which of the following is a noun?",
  options: ["Quickly", "Table", "Beautiful", "Run"],
  answer: 1,
},
{
  question: "Which of these words is an adjective?",
  options: ["Beauty", "Beautiful", "Beautify", "Beautifully"],
  answer: 1,
},
{
  question: "Choose the correct plural of 'child'.",
  options: ["Childs", "Children", "Childes", "Childrens"],
  answer: 1,
},
{
  question: "Which of these sentences is in the past tense?",
  options: ["He walks to school", "He is walking to school", "He walked to school", "He will walk to school"],
  answer: 2,
},
{
  question: "Which of the following is a pronoun?",
  options: ["Boy", "He", "Jump", "Blue"],
  answer: 1,
},
{
  question: "Which of these is an example of a verb?",
  options: ["Book", "Jump", "Happy", "Blue"],
  answer: 1,
},
{
  question: "What part of speech is the word 'quickly'?",
  options: ["Noun", "Adjective", "Adverb", "Verb"],
  answer: 2,
},
{
  question: "Which of the following sentences is correct?",
  options: ["He go to school every day.", "He goes to school every day.", "He going to school every day.", "He gone to school every day."],
  answer: 1,
},
{
  question: "Select the correct synonym of 'big'.",
  options: ["Tiny", "Huge", "Small", "Little"],
  answer: 1,
},
{
  question: "Select the antonym of 'happy'.",
  options: ["Glad", "Cheerful", "Sad", "Joyful"],
  answer: 2,
},
{
  question: "Which of these sentences is in the future tense?",
  options: ["I eat rice", "I will eat rice", "I am eating rice", "I ate rice"],
  answer: 1,
},
{
  question: "Which of these words is a conjunction?",
  options: ["And", "Run", "Because", "Both A and C"],
  answer: 3,
},
{
  question: "What is the comparative form of 'good'?",
  options: ["Gooder", "More good", "Better", "Best"],
  answer: 2,
},
{
  question: "Which of these words is a preposition?",
  options: ["Under", "Beautiful", "Run", "Because"],
  answer: 0,
},
{
  question: "Choose the correct spelling:",
  options: ["Definately", "Definitely", "Definetely", "Definatly"],
  answer: 1,
},
{
  question: "Which of these sentences is passive?",
  options: ["The boy kicked the ball.", "The ball was kicked by the boy.", "The boy is kicking the ball.", "The ball kicks the boy."],
  answer: 1,
},
{
  question: "Which of these is a synonym for 'begin'?",
  options: ["End", "Stop", "Start", "Finish"],
  answer: 2,
},
{
  question: "Which of these is an antonym of 'increase'?",
  options: ["Grow", "Expand", "Reduce", "Multiply"],
  answer: 2,
},
{
  question: "Which of these words is in the past participle form?",
  options: ["Go", "Went", "Gone", "Going"],
  answer: 2,
},
{
  question: "What is the plural of 'leaf'?",
  options: ["Leafs", "Leaves", "Leves", "Leavs"],
  answer: 1,
},
{
  question: "Which of these is a question tag for 'He is coming'?",
  options: ["Isn't he?", "Wasn't he?", "Doesn't he?", "Won't he?"],
  answer: 0,
},
{
  question: "Identify the adverb in this sentence: 'She sang beautifully.'",
  options: ["She", "Sang", "Beautifully", "Song"],
  answer: 2,
},
{
  question: "Which of these is an example of a simple sentence?",
  options: ["Although he came, he was late.", "He came early.", "He came and she left.", "Because he was late, he ran."],
  answer: 1,
},
{
  question: "Which word best completes the sentence: 'The cup is ____ the table.'",
  options: ["In", "At", "On", "By"],
  answer: 2,
},
{
  question: "Which of these is a collective noun?",
  options: ["Water", "Army", "Joy", "Pencil"],
  answer: 1,
},
{
  question: "What is the superlative form of 'bad'?",
  options: ["Worse", "Worst", "Badder", "Most bad"],
  answer: 1,
},
{
  question: "Which of these sentences is correct?",
  options: ["She don’t like rice.", "She doesn’t like rice.", "She not like rice.", "She didn’t likes rice."],
  answer: 1,
},
{
  question: "Which of these is a declarative sentence?",
  options: ["Are you coming?", "Close the door!", "I am tired.", "What a day!"],
  answer: 2,
},
{
  question: "Choose the correct word: 'He _____ to school every morning.'",
  options: ["Go", "Goes", "Going", "Gone"],
  answer: 1,
},
{
  question: "Which of these is a synonym for 'brave'?",
  options: ["Cowardly", "Bold", "Afraid", "Weak"],
  answer: 1,
},
{
  question: "Which of these is an antonym of 'honest'?",
  options: ["Truthful", "Sincere", "Deceitful", "Frank"],
  answer: 2,
},
{
  question: "Which of these is a correct indirect speech form of: 'He said, “I am tired.”'?",
  options: ["He said he was tired.", "He said he is tired.", "He said that I was tired.", "He said I am tired."],
  answer: 0,
},
{
  question: "Which of these is an example of a complex sentence?",
  options: ["He came and left.", "He came when I was sleeping.", "He came.", "He will come tomorrow."],
  answer: 1,
},
{
  question: "Which of these punctuation marks is used to end a question?",
  options: ["Comma", "Full stop", "Question mark", "Exclamation mark"],
  answer: 2,
},
{
  question: "Choose the correct preposition: 'She is interested ____ music.'",
  options: ["In", "On", "At", "About"],
  answer: 0,
},
{
  question: "Which of these words is a synonym for 'angry'?",
  options: ["Furious", "Calm", "Peaceful", "Happy"],
  answer: 0,
},
{
  question: "Which of these sentences contains a simile?",
  options: ["He is brave.", "She is as fast as a cheetah.", "The night was silent.", "He was very tall."],
  answer: 1,
},
{
  question: "Which of these words is a conjunction?",
  options: ["Because", "Before", "Both", "All of the above"],
  answer: 3,
},
{
  question: "Which of these is an imperative sentence?",
  options: ["Do your homework.", "Are you ready?", "She is reading.", "I am late."],
  answer: 0,
},
{
  question: "What is the past tense of 'write'?",
  options: ["Writes", "Writing", "Wrote", "Written"],
  answer: 2,
},
{
  question: "Which of these words is a synonym for 'strong'?",
  options: ["Weak", "Powerful", "Fragile", "Soft"],
  answer: 1,
},
{
  question: "Which of these is an antonym of 'cold'?",
  options: ["Hot", "Cool", "Warm", "Frozen"],
  answer: 0,
},
{
  question: "Which of these sentences is correct?",
  options: ["He has ate his food.", "He have eaten his food.", "He has eaten his food.", "He eaten his food."],
  answer: 2,
},
{
  question: "What is the plural of 'goose'?",
  options: ["Gooses", "Goose", "Geese", "Goos"],
  answer: 2,
},
{
  question: "Which of these words is an example of a conjunction?",
  options: ["However", "Because", "Although", "All of the above"],
  answer: 3,
},
{
  question: "Which of these is an example of a compound sentence?",
  options: ["He came, and she left.", "Although he came, he was late.", "He ran fast.", "He is tall."],
  answer: 0,
},
{
  question: "What is the opposite of 'arrive'?",
  options: ["Depart", "Come", "Reach", "Stay"],
  answer: 0,
},
{
  question: "Which of these words is a pronoun?",
  options: ["John", "His", "Car", "Fast"],
  answer: 1,
},
{
  question: "Choose the correct article: 'He bought ____ umbrella.'",
  options: ["A", "An", "The", "No article"],
  answer: 1,
},
{
  question: "Which of these words means the same as 'intelligent'?",
  options: ["Clever", "Dull", "Slow", "Lazy"],
  answer: 0,
},
{
  question: "Which of these sentences contains an idiom?",
  options: ["She is tall.", "He kicked the bucket.", "He eats rice.", "She runs fast."],
  answer: 1,
},
{
  question: "Which of these is an interjection?",
  options: ["Wow!", "Slowly", "Blue", "Because"],
  answer: 0,
}
  ],
  
  //Chemistry questions here
  Chemistry: [
    {
      question: "The chemical symbol for Gold is:",
      options: ["Ag", "Au", "Fe", "Pb"],
      answer: 1,
    },
    {
      question: "Identify this element",
      options: ["Carbon", "Oxygen", "Gold", "Iron"],
      answer: 2,
      image: "number line - Copy.jpg"
    },
    {
      question: "Which element is the most abundant in the Earth's crust?",
      options: ["Silicon", "Aluminum", "Oxygen", "Iron"],
      answer: 2,
    },
    {
      question: "The following elements are halogens except",
      options: ["Silicon", "Chlorine", "Iodine", "Bromine"],
      answer:0,
    },
    {
  question: "Which of the following particles has a negative charge?",
  options: ["Proton", "Electron", "Neutron", "Positron"],
  answer: 1,
},
{
  question: "Which of these elements is a noble gas?",
  options: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
  answer: 2,
},
{
  question: "What is the atomic number of carbon?",
  options: ["6", "12", "8", "4"],
  answer: 0,
},
{
  question: "Which of these is a compound?",
  options: ["Air", "Water", "Oxygen", "Argon"],
  answer: 1,
},
{
  question: "The bond formed when electrons are shared between atoms is called a ____ bond.",
  options: ["Ionic", "Hydrogen", "Covalent", "Metallic"],
  answer: 2,
},
{
  question: "What is the chemical symbol for Sodium?",
  options: ["So", "Na", "Sn", "S"],
  answer: 1,
},
{
  question: "Which of these is a transition metal?",
  options: ["Calcium", "Copper", "Sodium", "Potassium"],
  answer: 1,
},
{
  question: "The number of protons in an atom is called its ____.",
  options: ["Mass number", "Atomic number", "Charge", "Valency"],
  answer: 1,
},
{
  question: "Which of the following is an alkali?",
  options: ["NaOH", "HCl", "CH₃COOH", "H₂SO₄"],
  answer: 0,
},
{
  question: "Which gas is liberated when an acid reacts with a metal?",
  options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
  answer: 2,
},
{
  question: "What is the pH of a neutral solution?",
  options: ["0", "7", "10", "14"],
  answer: 1,
},
{
  question: "Which of these elements is a halogen?",
  options: ["Fluorine", "Sulphur", "Oxygen", "Nitrogen"],
  answer: 0,
},
{
  question: "Which instrument is used to measure temperature?",
  options: ["Barometer", "Thermometer", "Hygrometer", "Ammeter"],
  answer: 1,
},
{
  question: "Which of these is an endothermic process?",
  options: ["Combustion", "Photosynthesis", "Freezing", "Condensation"],
  answer: 1,
},
{
  question: "Which of the following is an example of a physical change?",
  options: ["Burning wood", "Rusting iron", "Melting ice", "Baking bread"],
  answer: 2,
},
{
  question: "What is the most abundant gas in the atmosphere?",
  options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
  answer: 1,
},
{
  question: "Which of the following is used as a drying agent?",
  options: ["Conc. H₂SO₄", "NaCl", "Water", "Ethanol"],
  answer: 0,
},
{
  question: "Which of these is an example of a mixture?",
  options: ["Salt", "Water", "Air", "Glucose"],
  answer: 2,
},
{
  question: "The smallest particle of an element that can take part in a chemical reaction is the ____.",
  options: ["Molecule", "Atom", "Ion", "Proton"],
  answer: 1,
},
{
  question: "Which of the following oxides is acidic?",
  options: ["CO₂", "Na₂O", "CaO", "MgO"],
  answer: 0,
},
{
  question: "Which of these is an organic compound?",
  options: ["NaCl", "CH₄", "H₂SO₄", "KOH"],
  answer: 1,
},
{
  question: "Which of these gases turns lime water milky?",
  options: ["CO₂", "O₂", "H₂", "N₂"],
  answer: 0,
},
{
  question: "The process by which liquids change into vapour is called ____.",
  options: ["Condensation", "Evaporation", "Sublimation", "Distillation"],
  answer: 1,
},
{
  question: "Which of these is a chemical property?",
  options: ["Color", "Density", "Flammability", "Boiling point"],
  answer: 2,
},
{
  question: "The atomic mass of an element is measured in ____.",
  options: ["Grams", "Moles", "Atomic mass units", "Kilograms"],
  answer: 2,
},
{
  question: "Which of these gases supports combustion?",
  options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
  answer: 0,
},
{
  question: "Which of these is used to test for hydrogen gas?",
  options: ["Glowing splint", "Burning splint", "Lime water", "Litmus paper"],
  answer: 1,
},
{
  question: "Which law states that mass is neither created nor destroyed in a chemical reaction?",
  options: ["Boyle’s law", "Charles’ law", "Law of conservation of mass", "Dalton’s law"],
  answer: 2,
},
{
  question: "Which of the following is a reducing agent?",
  options: ["Oxygen", "Hydrogen", "Chlorine", "Sulphur dioxide"],
  answer: 1,
},
{
  question: "The process of passing electric current through an electrolyte is called ____.",
  options: ["Electrolysis", "Ionization", "Oxidation", "Reduction"],
  answer: 0,
},
{
  question: "Which electrode is negatively charged during electrolysis?",
  options: ["Anode", "Cathode", "Diode", "Conductor"],
  answer: 1,
},
{
  question: "Which of these hydrocarbons is an alkane?",
  options: ["C₂H₂", "C₂H₄", "C₂H₆", "C₆H₆"],
  answer: 2,
},
{
  question: "Which of these is not a greenhouse gas?",
  options: ["CO₂", "CH₄", "N₂", "O₃"],
  answer: 2,
},
{
  question: "What is the valency of nitrogen in ammonia (NH₃)?",
  options: ["1", "2", "3", "4"],
  answer: 2,
},
{
  question: "Which of these acids is found in vinegar?",
  options: ["Hydrochloric acid", "Sulphuric acid", "Acetic acid", "Nitric acid"],
  answer: 2,
},
{
  question: "What is the molar mass of water (H₂O)?",
  options: ["10 g/mol", "16 g/mol", "18 g/mol", "20 g/mol"],
  answer: 2,
},
{
  question: "Which type of reaction involves both oxidation and reduction?",
  options: ["Neutralization", "Redox", "Decomposition", "Combustion"],
  answer: 1,
},
{
  question: "Which of these gases is used in the Haber process?",
  options: ["Methane and Oxygen", "Nitrogen and Hydrogen", "Nitrogen and Carbon dioxide", "Hydrogen and Oxygen"],
  answer: 1,
},
{
  question: "Which of these is used as a catalyst in the Haber process?",
  options: ["Nickel", "Platinum", "Iron", "Copper"],
  answer: 2,
},
{
  question: "The process used to separate crude oil into components is called ____.",
  options: ["Filtration", "Crystallization", "Fractional distillation", "Sublimation"],
  answer: 2,
},
{
  question: "Which of these is an example of a base?",
  options: ["HCl", "H₂SO₄", "NaOH", "CO₂"],
  answer: 2,
},
{
  question: "Which of the following is not a state of matter?",
  options: ["Solid", "Liquid", "Plasma", "Radiation"],
  answer: 3,
},
{
  question: "Which of these quantities is measured in moles?",
  options: ["Temperature", "Amount of substance", "Volume", "Mass"],
  answer: 1,
},
{
  question: "What is the color of litmus paper in an acidic solution?",
  options: ["Blue", "Red", "Green", "Purple"],
  answer: 1,
},
{
  question: "Which of these is a property of metals?",
  options: ["Brittleness", "Good conductivity", "Poor heat conduction", "Low melting point"],
  answer: 1,
},
{
  question: "Which of these is a non-metal?",
  options: ["Sodium", "Calcium", "Sulphur", "Magnesium"],
  answer: 2,
},
{
  question: "Which of the following is a monatomic gas?",
  options: ["O₂", "N₂", "He", "CO₂"],
  answer: 2,
},
{
  question: "Which of these substances is amphoteric?",
  options: ["NaOH", "Al(OH)₃", "H₂SO₄", "CO₂"],
  answer: 1,
},
{
  question: "Which gas is used in fire extinguishers?",
  options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
  answer: 1,
},
{
  question: "Which of these is the main constituent of natural gas?",
  options: ["Methane", "Ethane", "Propane", "Butane"],
  answer: 0,
},
{
  question: "Which law relates pressure and volume of a gas at constant temperature?",
  options: ["Charles’ law", "Boyle’s law", "Avogadro’s law", "Graham’s law"],
  answer: 1,
},
{
  question: "Which of these indicators turns pink in basic solution?",
  options: ["Methyl orange", "Litmus", "Phenolphthalein", "Bromothymol blue"],
  answer: 2,
}
  ],
  
  //Physics questions here
  Physics: [
{
  question: "Which of the following is a fundamental quantity?",
  options: ["Force", "Length", "Velocity", "Pressure"],
  answer: 1
},
{
  question: "Which of the following is NOT a fundamental quantity?",
  options: ["Time", "Mass", "Volume", "Length"],
  answer: 2
},
{
  question: "How many fundamental quantities are there in physics?",
  options: ["3", "5", "7", "9"],
  answer: 2
},
{
  question: "Which of these is a derived quantity?",
  options: ["Length", "Mass", "Area", "Time"],
  answer: 2
},
{
  question: "The SI unit of length is:",
  options: ["Meter", "Kilogram", "Second", "Ampere"],
  answer: 0
},
{
  question: "Which of the following is the SI unit of mass?",
  options: ["Newton", "Kilogram", "Gram", "Pound"],
  answer: 1
},
{
  question: "The SI unit of time is:",
  options: ["Minute", "Hour", "Second", "Millisecond"],
  answer: 2
},
{
  question: "Which of these physical quantities is derived?",
  options: ["Mass", "Temperature", "Density", "Length"],
  answer: 2
},
{
  question: "The SI unit of density is:",
  options: ["kg/m³", "kg/m²", "N/m³", "m³/kg"],
  answer: 0
},
{
  question: "Pressure is defined as:",
  options: ["Force × Area", "Force ÷ Area", "Area ÷ Force", "Mass ÷ Volume"],
  answer: 1
},
{
  question: "The SI unit of force is:",
  options: ["Joule", "Newton", "Pascal", "Watt"],
  answer: 1
},
{
  question: "Which of the following is the SI unit of energy?",
  options: ["Watt", "Joule", "Volt", "Newton"],
  answer: 1
},
{
  question: "The SI unit of power is:",
  options: ["Newton", "Joule", "Watt", "Pascal"],
  answer: 2
},
{
  question: "The quantity measured in amperes is:",
  options: ["Current", "Voltage", "Resistance", "Power"],
  answer: 0
},
{
  question: "The dimensional formula of velocity is:",
  options: ["[M⁰L¹T⁻¹]", "[ML⁻¹T⁻²]", "[M⁰L⁰T⁰]", "[M¹L¹T⁻²]"],
  answer: 0
},
{
  question: "Acceleration is measured in:",
  options: ["m/s", "m/s²", "m²/s", "s/m²"],
  answer: 1
},
{
  question: "Which of these is a derived quantity?",
  options: ["Temperature", "Mass", "Area", "Length"],
  answer: 2
},
{
  question: "Which of these is NOT a base quantity?",
  options: ["Length", "Electric current", "Time", "Energy"],
  answer: 3
},
{
  question: "The SI unit of pressure is:",
  options: ["Newton", "Pascal", "Joule", "Tesla"],
  answer: 1
},
{
  question: "Which of the following quantities has a unit of N/m²?",
  options: ["Work", "Pressure", "Energy", "Power"],
  answer: 1
},
{
  question: "The quantity measured in volts is:",
  options: ["Current", "Potential difference", "Power", "Charge"],
  answer: 1
},
{
  question: "The SI unit of electric charge is:",
  options: ["Ampere", "Coulomb", "Volt", "Ohm"],
  answer: 1
},
{
  question: "The SI unit of resistance is:",
  options: ["Coulomb", "Ohm", "Ampere", "Watt"],
  answer: 1
},
{
  question: "Which of these has the dimension [ML⁻³]?",
  options: ["Pressure", "Density", "Acceleration", "Velocity"],
  answer: 1
},
{
  question: "The dimensional formula for force is:",
  options: ["[MLT⁻²]", "[ML²T⁻²]", "[MLT⁻¹]", "[M⁰L¹T⁻²]"],
  answer: 0
},
{
  question: "The quantity measured in joules per second is:",
  options: ["Energy", "Power", "Force", "Work"],
  answer: 1
},
{
  question: "Which of these has the unit of kg·m/s²?",
  options: ["Force", "Energy", "Pressure", "Momentum"],
  answer: 0
},
{
  question: "Work done is given by:",
  options: ["Force × Distance", "Force ÷ Distance", "Force × Time", "Force ÷ Time"],
  answer: 0
},
{
  question: "The SI unit of work is equivalent to:",
  options: ["Newton", "Pascal", "Joule", "Watt"],
  answer: 2
},
{
  question: "Which of the following is a derived quantity?",
  options: ["Mass", "Length", "Time", "Velocity"],
  answer: 3
},
{
  question: "The SI unit of momentum is:",
  options: ["kg·m/s", "kg·m²/s²", "N·m", "Joule"],
  answer: 0
},
{
  question: "What is the SI unit of energy per unit time?",
  options: ["Joule", "Newton", "Watt", "Pascal"],
  answer: 2
},
{
  question: "Which of these is not a derived quantity?",
  options: ["Speed", "Density", "Current", "Acceleration"],
  answer: 2
},
{
  question: "The SI unit of temperature is:",
  options: ["Celsius", "Kelvin", "Fahrenheit", "Joule"],
  answer: 1
},
{
  question: "Which physical quantity is represented by N·m?",
  options: ["Power", "Work", "Pressure", "Force"],
  answer: 1
},
{
  question: "The SI unit of frequency is:",
  options: ["Hertz", "Radian", "Newton", "Ohm"],
  answer: 0
},
{
  question: "Which derived quantity has the unit kg·m⁻¹·s⁻²?",
  options: ["Pressure", "Force", "Density", "Power"],
  answer: 0
},
{
  question: "The SI unit of heat is:",
  options: ["Joule", "Calorie", "Watt", "Kelvin"],
  answer: 0
},
{
  question: "Which physical quantity has a dimension of [ML²T⁻³]?",
  options: ["Power", "Force", "Energy", "Pressure"],
  answer: 0
},
{
  question: "What is the SI unit of angular velocity?",
  options: ["Radian per second", "Meter per second", "Degree per second", "Hertz"],
  answer: 0
},
{
  question: "Which of these is a base unit?",
  options: ["Coulomb", "Meter", "Newton", "Joule"],
  answer: 1
},
{
  question: "The dimensional formula of pressure is:",
  options: ["[ML⁻¹T⁻²]", "[MLT⁻²]", "[M⁰L⁰T⁰]", "[ML²T⁻³]"],
  answer: 0
},
{
  question: "The SI unit of luminous intensity is:",
  options: ["Candela", "Lux", "Lumen", "Watt"],
  answer: 0
},
{
  question: "Electric current is measured in:",
  options: ["Volt", "Coulomb", "Ampere", "Ohm"],
  answer: 2
},
{
  question: "The SI unit of potential difference is:",
  options: ["Ampere", "Ohm", "Coulomb", "Volt"],
  answer: 3
},
{
  question: "Which quantity has no dimension?",
  options: ["Strain", "Force", "Stress", "Power"],
  answer: 0
},
{
  question: "The unit of specific heat capacity is:",
  options: ["J/kg·K", "J/kg", "J/K", "W/kg"],
  answer: 0
},
{
  question: "Which of these is NOT a derived SI unit?",
  options: ["Newton", "Joule", "Kilogram", "Pascal"],
  answer: 2
},
{
  question: "The dimensional formula of energy is:",
  options: ["[ML²T⁻²]", "[MLT⁻²]", "[M⁰L¹T⁻¹]", "[ML⁻¹T⁻²]"],
  answer: 0
},
{
  question: "The quantity measured in coulombs per second is:",
  options: ["Current", "Charge", "Resistance", "Voltage"],
  answer: 0
},
{
  question: "Which of these is both a derived and vector quantity?",
  options: ["Speed", "Velocity", "Density", "Energy"],
  answer: 1
},
{
  question: "Which of the following is a scalar quantity?",
  options: ["Force", "Velocity", "Power", "Acceleration"],
  answer: 2
},
{
  question: "What is the S.I. unit of mass?",
  options: ["Gram", "Kilogram", "Pound", "Newton"],
  answer: 1
},
{
  question: "The S.I. unit of time is?",
  options: ["Minute", "Second", "Hour", "Day"],
  answer: 1
},
{
  question: "The fundamental unit of electric current is?",
  options: ["Volt", "Coulomb", "Ampere", "Ohm"],
  answer: 2
},
{
  question: "Which of the following quantities is NOT a fundamental quantity?",
  options: ["Length", "Mass", "Time", "Force"],
  answer: 3
},
{
  question: "The S.I. unit of temperature is?",
  options: ["Celsius", "Kelvin", "Fahrenheit", "Joule"],
  answer: 1
},
{
  question: "The unit of luminous intensity is?",
  options: ["Candela", "Lux", "Lumen", "Watt"],
  answer: 0
},
{
  question: "Which of the following is a derived quantity?",
  options: ["Length", "Mass", "Velocity", "Temperature"],
  answer: 2
},
{
  question: "The unit of pressure is?",
  options: ["Pascal", "Newton", "Joule", "Watt"],
  answer: 0
},
{
  question: "One Newton is equivalent to?",
  options: ["1 kg·m/s", "1 kg·m/s²", "1 kg/s²", "1 kg·m²/s²"],
  answer: 1
},
{
  question: "The unit of energy is?",
  options: ["Joule", "Newton", "Pascal", "Ampere"],
  answer: 0
},
{
  question: "Which of the following is not a base quantity?",
  options: ["Length", "Mass", "Temperature", "Density"],
  answer: 3
},
{
  question: "Derived units are obtained from?",
  options: ["Base units", "Fundamental laws", "Physical constants", "Mathematical formulae"],
  answer: 0
},
{
  question: "The S.I. unit of force is?",
  options: ["Joule", "Newton", "Pascal", "Watt"],
  answer: 1
},
{
  question: "Which of these quantities is dimensionless?",
  options: ["Velocity", "Strain", "Pressure", "Acceleration"],
  answer: 1
},
{
  question: "The unit of work and energy are the same. What is it?",
  options: ["Watt", "Joule", "Newton", "Calorie"],
  answer: 1
},
{
  question: "The S.I. unit of power is?",
  options: ["Joule", "Newton", "Watt", "Pascal"],
  answer: 2
},
{
  question: "The S.I. unit of frequency is?",
  options: ["Hertz", "Newton", "Joule", "Tesla"],
  answer: 0
},
{
  question: "Which of the following is a vector quantity?",
  options: ["Mass", "Temperature", "Velocity", "Energy"],
  answer: 2
},
{
  question: "The dimensional formula of force is?",
  options: ["MLT⁻²", "ML²T⁻²", "M⁻¹LT", "M⁻¹L²T⁻³"],
  answer: 0
},
{
  question: "The dimensional formula for pressure is?",
  options: ["ML⁻¹T⁻²", "MLT⁻²", "ML²T⁻³", "M⁻¹LT"],
  answer: 0
},
{
  question: "Which of the following quantities has the unit m/s²?",
  options: ["Velocity", "Acceleration", "Force", "Pressure"],
  answer: 1
},
{
  question: "The unit of momentum is?",
  options: ["kg·m/s", "kg·m/s²", "kg·m²/s²", "N·s"],
  answer: 0
},
{
  question: "The S.I. unit of charge is?",
  options: ["Ampere", "Coulomb", "Volt", "Farad"],
  answer: 1
},
{
  question: "What is the unit of electric potential difference?",
  options: ["Ampere", "Ohm", "Volt", "Coulomb"],
  answer: 2
},
{
  question: "The S.I. unit of resistance is?",
  options: ["Ohm", "Volt", "Ampere", "Farad"],
  answer: 0
},
{
  question: "The S.I. unit of capacitance is?",
  options: ["Ohm", "Henry", "Farad", "Tesla"],
  answer: 2
},
{
  question: "What is the S.I. unit of inductance?",
  options: ["Farad", "Henry", "Ohm", "Volt"],
  answer: 1
},
{
  question: "The S.I. unit of magnetic flux density is?",
  options: ["Tesla", "Weber", "Henry", "Farad"],
  answer: 0
},
{
  question: "The unit of magnetic flux is?",
  options: ["Weber", "Tesla", "Ampere", "Henry"],
  answer: 0
},
{
  question: "The unit of angular velocity is?",
  options: ["radian", "radian per second", "degree", "degree per second"],
  answer: 1
},
{
  question: "Which of the following is NOT a derived quantity?",
  options: ["Velocity", "Density", "Temperature", "Force"],
  answer: 2
},
{
  question: "The dimensional formula for energy is?",
  options: ["ML²T⁻²", "MLT⁻²", "ML⁻¹T⁻²", "M⁻¹L²T⁻³"],
  answer: 0
},
{
  question: "The S.I. unit of density is?",
  options: ["kg/m²", "kg/m³", "kg·m/s²", "g/cm³"],
  answer: 1
},
{
  question: "The S.I. unit of area is?",
  options: ["m", "m²", "m³", "m/s"],
  answer: 1
},
{
  question: "Which of these quantities has the unit N/m²?",
  options: ["Stress", "Energy", "Velocity", "Power"],
  answer: 0
},
{
  question: "What is the S.I. unit of strain?",
  options: ["No unit", "Newton", "Joule", "Pascal"],
  answer: 0
},
{
  question: "Which of the following has the unit of J/kg?",
  options: ["Specific heat capacity", "Pressure", "Energy", "Power"],
  answer: 0
},
{
  question: "The unit of angular acceleration is?",
  options: ["rad/s", "rad/s²", "s/rad", "radian"],
  answer: 1
},
{
  question: "The S.I. unit of volume is?",
  options: ["m", "m²", "m³", "m⁴"],
  answer: 2
},
{
  question: "Which of the following is a scalar quantity?",
  options: ["Force", "Velocity", "Mass", "Displacement"],
  answer: 2
},
{
  question: "The unit of surface tension is?",
  options: ["N/m", "N/m²", "J/m", "J/m²"],
  answer: 0
},
{
  question: "The S.I. unit of energy per unit charge is?",
  options: ["Volt", "Joule", "Ohm", "Coulomb"],
  answer: 0
},
{
  question: "Which of the following quantities has no direction?",
  options: ["Velocity", "Force", "Mass", "Acceleration"],
  answer: 2
},
{
  question: "Which of these is a base quantity?",
  options: ["Pressure", "Force", "Length", "Power"],
  answer: 2
},
{
  question: "Which of these is NOT a physical quantity?",
  options: ["Mass", "Temperature", "Length", "Happiness"],
  answer: 3
},
{
  question: "What is the S.I. unit of specific volume?",
  options: ["m³/kg", "kg/m³", "m²/kg", "kg/m²"],
  answer: 0
},
{
  question: "The S.I. unit of stress is the same as that of?",
  options: ["Pressure", "Power", "Work", "Energy"],
  answer: 0
},
{
  question: "Which of these pairs has the same dimensional formula?",
  options: ["Work and Energy", "Force and Velocity", "Power and Acceleration", "Pressure and Momentum"],
  answer: 0
},
{
  question: "The dimensional formula of power is?",
  options: ["ML²T⁻³", "ML²T⁻²", "MLT⁻²", "M⁻¹L²T⁻³"],
  answer: 0
},
{
  question: "Which of the following pairs has equal base and derived units?",
  options: ["Energy and Force", "Power and Work", "Mass and Weight", "Joule and Newton-meter"],
  answer: 3
},
{
  question: "Which physical quantity has the unit kg·m²/s²?",
  options: ["Force", "Work", "Momentum", "Acceleration"],
  answer: 1
},
{
  question: "Which of the following quantities is a vector?",
  options: ["Speed", "Distance", "Displacement", "Time"],
  answer: 2
},
{
  question: "Which of these represents uniform motion?",
  options: ["Constant velocity", "Changing acceleration", "Constant speed in a curve", "Zero displacement"],
  answer: 0
},
{
  question: "A car moves with a uniform speed of 20 m/s for 10 seconds. What distance does it cover?",
  options: ["100 m", "150 m", "200 m", "250 m"],
  answer: 2
},
{
  question: "Which of the following is not a type of motion?",
  options: ["Linear", "Rotational", "Translational", "Circular current"],
  answer: 3
},
{
  question: "Acceleration is defined as?",
  options: ["Change in displacement", "Change in velocity per unit time", "Change in speed", "Velocity per time"],
  answer: 1
},
{
  question: "The slope of a velocity-time graph represents?",
  options: ["Speed", "Acceleration", "Displacement", "Momentum"],
  answer: 1
},
{
  question: "The area under a velocity-time graph gives?",
  options: ["Acceleration", "Force", "Distance", "Momentum"],
  answer: 2
},
{
  question: "If a car accelerates from rest at 4 m/s² for 5 seconds, its final velocity is?",
  options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
  answer: 2
},
{
  question: "Which of the following is a scalar quantity?",
  options: ["Velocity", "Displacement", "Speed", "Force"],
  answer: 2
},
{
  question: "A body moving in a circle at constant speed is said to have?",
  options: ["Zero velocity", "Constant acceleration", "Variable velocity", "No acceleration"],
  answer: 2
},
{
  question: "Which of the following equations of motion is correct?",
  options: ["v = u + at", "s = ut − ½at²", "v² = u² − 2as", "t = s/u + a"],
  answer: 0
},
{
  question: "What is the unit of acceleration?",
  options: ["m/s", "m/s²", "m²/s", "s/m²"],
  answer: 1
},
{
  question: "A body of mass 2 kg moves with velocity 3 m/s. Its momentum is?",
  options: ["3 kgm/s", "5 kgm/s", "6 kgm/s", "9 kgm/s"],
  answer: 2
},
{
  question: "Newton’s first law of motion is also known as?",
  options: ["Law of acceleration", "Law of inertia", "Law of momentum", "Law of action and reaction"],
  answer: 1
},
{
  question: "The force which opposes motion between two surfaces in contact is?",
  options: ["Tension", "Friction", "Normal force", "Weight"],
  answer: 1
},
{
  question: "If no external force acts on a body, its state of motion will?",
  options: ["Change", "Remain constant", "Accelerate", "Stop"],
  answer: 1
},
{
  question: "The acceleration due to gravity on Earth is approximately?",
  options: ["8.8 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
  answer: 1
},
{
  question: "A stone is thrown vertically upwards with velocity 20 m/s. What is its maximum height? (g = 10 m/s²)",
  options: ["10 m", "20 m", "30 m", "40 m"],
  answer: 1
},
{
  question: "The third law of motion states that?",
  options: ["Force equals mass times acceleration", "Every action has an equal and opposite reaction", "Inertia is proportional to mass", "Momentum is conserved"],
  answer: 1
},
{
  question: "Which of these quantities is conserved in all collisions?",
  options: ["Energy", "Force", "Momentum", "Acceleration"],
  answer: 2
},
{
  question: "When a car suddenly stops, passengers move forward due to?",
  options: ["Friction", "Inertia", "Momentum", "Acceleration"],
  answer: 1
},
{
  question: "A 5 kg object accelerates at 2 m/s². The force acting is?",
  options: ["2 N", "5 N", "7 N", "10 N"],
  answer: 3
},
{
  question: "The momentum of a moving body is the product of?",
  options: ["Mass and acceleration", "Mass and velocity", "Force and time", "Velocity and distance"],
  answer: 1
},
{
  question: "The unit of momentum is?",
  options: ["kg·m/s", "kg·m/s²", "N·m", "J/s"],
  answer: 0
},
{
  question: "A ball thrown vertically upward returns to the thrower because of?",
  options: ["Inertia", "Gravity", "Momentum", "Elasticity"],
  answer: 1
},
{
  question: "A car moves at 72 km/h. What is its speed in m/s?",
  options: ["18 m/s", "20 m/s", "25 m/s", "30 m/s"],
  answer: 1
},
{
  question: "A force of 50 N moves an object 2 m in the direction of the force. The work done is?",
  options: ["25 J", "50 J", "75 J", "100 J"],
  answer: 3
},
{
  question: "Uniform acceleration means?",
  options: ["Constant speed", "Constant acceleration", "Zero velocity", "Zero acceleration"],
  answer: 1
},
{
  question: "If a car moves with uniform speed, its acceleration is?",
  options: ["Zero", "Constant", "Increasing", "Negative"],
  answer: 0
},
{
  question: "The rate of change of momentum is equal to?",
  options: ["Velocity", "Force", "Acceleration", "Work"],
  answer: 1
},
{
  question: "A freely falling object has?",
  options: ["Uniform speed", "Uniform acceleration", "Zero acceleration", "Increasing acceleration"],
  answer: 1
},
{
  question: "In the absence of air resistance, all bodies fall with?",
  options: ["Different acceleration", "Equal acceleration", "Constant speed", "Increasing force"],
  answer: 1
},
{
  question: "The product of mass and acceleration gives?",
  options: ["Work", "Energy", "Force", "Momentum"],
  answer: 2
},
{
  question: "If a car accelerates from 5 m/s to 15 m/s in 5 s, find its acceleration.",
  options: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"],
  answer: 1
},
{
  question: "A truck of mass 2000 kg moves with velocity 10 m/s. Its momentum is?",
  options: ["2000 kgm/s", "20,000 kgm/s", "200 kgm/s", "2,000,000 kgm/s"],
  answer: 1
},
{
  question: "Which of these describes uniform circular motion?",
  options: ["Constant velocity", "Constant speed with changing direction", "Constant acceleration", "Zero net force"],
  answer: 1
},
{
  question: "The centripetal force acts?",
  options: ["Tangentially", "Outward", "Inward", "Downward"],
  answer: 2
},
{
  question: "When no external force acts on a system, its total momentum?",
  options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
  answer: 2
},
{
  question: "The motion of the Earth around the Sun is an example of?",
  options: ["Linear motion", "Circular motion", "Random motion", "Translational motion"],
  answer: 1
},
{
  question: "A body is said to be in equilibrium when?",
  options: ["It is moving", "Resultant force is zero", "Acceleration is constant", "Force is maximum"],
  answer: 1
},
{
  question: "The impulse of a force is given by?",
  options: ["Force × Distance", "Force × Time", "Mass × Velocity", "Energy/Time"],
  answer: 1
},
{
  question: "The unit of impulse is the same as that of?",
  options: ["Work", "Force", "Momentum", "Acceleration"],
  answer: 2
},
{
  question: "A force of 20 N acts for 2 s. The impulse is?",
  options: ["10 Ns", "20 Ns", "30 Ns", "40 Ns"],
  answer: 3
},
{
  question: "A body moving with constant velocity has?",
  options: ["Zero acceleration", "Constant force", "Increasing momentum", "Decreasing velocity"],
  answer: 0
},
{
  question: "The first law of motion defines?",
  options: ["Force", "Momentum", "Inertia", "Acceleration"],
  answer: 2
},
{
  question: "When a gun is fired, the recoil of the gun is due to?",
  options: ["Law of inertia", "Conservation of momentum", "Gravitational pull", "Air resistance"],
  answer: 1
},
{
  question: "What is the S.I. unit of force?",
  options: ["Joule", "Newton", "Watt", "Pascal"],
  answer: 1
},
{
  question: "The force acting on a body of mass 10 kg moving with acceleration 2 m/s² is?",
  options: ["5 N", "10 N", "15 N", "20 N"],
  answer: 3
},
{
  question: "Which of these describes retardation?",
  options: ["Increase in velocity", "Decrease in velocity", "Constant speed", "Zero motion"],
  answer: 1
},
{
  question: "The motion of a pendulum is an example of?",
  options: ["Random motion", "Circular motion", "Oscillatory motion", "Translational motion"],
  answer: 2
},
{
  question: "Work is said to be done when?",
  options: ["A force acts without motion", "A force moves a body through a distance", "An object remains at rest", "A force is balanced"],
  answer: 1
},
{
  question: "The SI unit of work is?",
  options: ["Watt", "Newton", "Joule", "Pascal"],
  answer: 2
},
{
  question: "If a force of 10 N moves a body through 5 m, the work done is?",
  options: ["2 J", "15 J", "50 J", "100 J"],
  answer: 2
},
{
  question: "A man lifts a 20 kg load to a height of 2 m. Find the work done. (g = 10 m/s²)",
  options: ["200 J", "300 J", "400 J", "500 J"],
  answer: 2
},
{
  question: "Energy is defined as?",
  options: ["The ability to move", "The rate of doing work", "The ability to do work", "The force applied on a body"],
  answer: 2
},
{
  question: "The unit of energy is?",
  options: ["Newton", "Joule", "Pascal", "Watt"],
  answer: 1
},
{
  question: "Power is the rate of?",
  options: ["Change of acceleration", "Doing work", "Energy flow", "Displacement"],
  answer: 1
},
{
  question: "The unit of power is?",
  options: ["Joule", "Watt", "Newton", "Pascal"],
  answer: 1
},
{
  question: "If 200 J of work is done in 5 seconds, the power developed is?",
  options: ["20 W", "25 W", "30 W", "40 W"],
  answer: 1
},
{
  question: "A force of 15 N acts through a distance of 3 m in the direction of the force. Find the work done.",
  options: ["30 J", "35 J", "40 J", "45 J"],
  answer: 3
},
{
  question: "Which of the following has potential energy?",
  options: ["A rolling ball", "A moving car", "A stretched spring", "A falling stone"],
  answer: 2
},
{
  question: "A body of mass 5 kg is raised to a height of 10 m. Calculate its potential energy. (g = 10 m/s²)",
  options: ["50 J", "100 J", "200 J", "500 J"],
  answer: 3
},
{
  question: "The energy possessed by a moving body is called?",
  options: ["Potential energy", "Kinetic energy", "Heat energy", "Elastic energy"],
  answer: 1
},
{
  question: "A car of mass 800 kg moves at 10 m/s. Find its kinetic energy.",
  options: ["20,000 J", "30,000 J", "40,000 J", "50,000 J"],
  answer: 2
},
{
  question: "Kinetic energy is directly proportional to?",
  options: ["Velocity", "Mass", "Velocity squared", "Height"],
  answer: 2
},
{
  question: "A 2 kg ball moves with velocity 4 m/s. Its kinetic energy is?",
  options: ["4 J", "8 J", "12 J", "16 J"],
  answer: 3
},
{
  question: "When work is done against friction, energy is converted to?",
  options: ["Sound", "Potential energy", "Heat", "Light"],
  answer: 2
},
{
  question: "Mechanical energy is the sum of?",
  options: ["Kinetic and heat energy", "Kinetic and potential energy", "Heat and chemical energy", "Work and power"],
  answer: 1
},
{
  question: "If no energy is lost, the total mechanical energy of a system is?",
  options: ["Constant", "Decreasing", "Increasing", "Zero"],
  answer: 0
},
{
  question: "What type of energy transformation occurs in a falling stone?",
  options: ["Kinetic to potential", "Potential to kinetic", "Heat to potential", "Chemical to kinetic"],
  answer: 1
},
{
  question: "The work done lifting a 50 N load by 4 m is?",
  options: ["100 J", "150 J", "200 J", "250 J"],
  answer: 2
},
{
  question: "Power can be calculated as?",
  options: ["Work × Time", "Work ÷ Time", "Force × Velocity", "Force ÷ Time"],
  answer: 1
},
{
  question: "A machine does 400 J of work in 10 s. Find its power.",
  options: ["20 W", "30 W", "40 W", "50 W"],
  answer: 2
},
{
  question: "The energy stored in a stretched spring is called?",
  options: ["Elastic potential energy", "Kinetic energy", "Thermal energy", "Chemical energy"],
  answer: 0
},
{
  question: "If a car engine develops 4000 W of power to move a car at 20 m/s, what is the force exerted?",
  options: ["100 N", "150 N", "200 N", "250 N"],
  answer: 2
},
{
  question: "A man of mass 60 kg climbs a staircase 5 m high in 10 s. Find his power. (g = 10 m/s²)",
  options: ["200 W", "250 W", "300 W", "350 W"],
  answer: 1
},
{
  question: "Which of the following is not a form of energy?",
  options: ["Mechanical", "Nuclear", "Frictional", "Sound"],
  answer: 2
},
{
  question: "One horsepower (hp) is equal to?",
  options: ["500 W", "650 W", "746 W", "1000 W"],
  answer: 2
},
{
  question: "The work done in moving an object horizontally with no friction is?",
  options: ["Zero", "Minimum", "Maximum", "Infinite"],
  answer: 0
},
{
  question: "A body of weight 100 N is lifted vertically through 2 m. Calculate the work done.",
  options: ["50 J", "100 J", "150 J", "200 J"],
  answer: 3
},
{
  question: "The efficiency of a machine is the ratio of?",
  options: ["Input to output", "Output to input", "Force to distance", "Work to time"],
  answer: 1
},
{
  question: "A machine with an efficiency of 80% and input of 500 J gives an output of?",
  options: ["300 J", "350 J", "400 J", "450 J"],
  answer: 2
},
{
  question: "If the velocity of a moving car is doubled, its kinetic energy becomes?",
  options: ["Doubled", "Tripled", "Quadrupled", "Halved"],
  answer: 2
},
{
  question: "Work done is negative when?",
  options: ["Force and displacement are in the same direction", "No motion occurs", "Force and displacement are opposite", "Force acts at right angles"],
  answer: 2
},
{
  question: "Which of the following devices converts electrical energy to mechanical energy?",
  options: ["Electric motor", "Generator", "Battery", "Solar panel"],
  answer: 0
},
{
  question: "Which of the following has both kinetic and potential energy?",
  options: ["A falling apple", "A stretched spring at rest", "A battery", "A rolling ball on flat ground"],
  answer: 0
},
{
  question: "Energy can neither be created nor destroyed. This is the law of?",
  options: ["Inertia", "Conservation of energy", "Motion", "Thermodynamics"],
  answer: 1
},
{
  question: "The work done in holding a book stationary on a table is?",
  options: ["Zero", "Equal to mg", "Infinite", "Maximum"],
  answer: 0
},
{
  question: "A car engine does 30 kJ of work in 15 s. Calculate its power.",
  options: ["1000 W", "1500 W", "2000 W", "2500 W"],
  answer: 2
},
{
  question: "A 4 kg mass moving at 5 m/s has kinetic energy equal to?",
  options: ["25 J", "50 J", "75 J", "100 J"],
  answer: 3
},
{
  question: "Which of these expressions represents potential energy?",
  options: ["½mv²", "mgh", "Pt", "Fv"],
  answer: 1
},
{
  question: "A force acts at an angle of 60° to displacement. The work done is?",
  options: ["F × s × sin60", "F × s × cos60", "F × s", "F/s"],
  answer: 1
},
{
  question: "When work is done at constant speed, power is proportional to?",
  options: ["Speed", "Force", "Time", "Mass"],
  answer: 0
},
{
  question: "Which of these is a unit of energy?",
  options: ["Joule", "Newton", "Ampere", "Coulomb"],
  answer: 0
},
{
  question: "The mechanical advantage of a machine is the ratio of?",
  options: ["Load to effort", "Effort to load", "Input to output", "Force to time"],
  answer: 0
},
{
  question: "If a machine lifts a 100 N load through 2 m with an effort of 50 N, find its efficiency.",
  options: ["80%", "90%", "100%", "75%"],
  answer: 2
},
{
  question: "The power developed by a machine that does 1200 J of work in 4 s is?",
  options: ["100 W", "200 W", "300 W", "400 W"],
  answer: 3
},
{
  question: "The energy of an object due to its position is called?",
  options: ["Elastic energy", "Potential energy", "Kinetic energy", "Heat energy"],
  answer: 1
},
{
  question: "A spring with constant 100 N/m is stretched by 0.2 m. Find the energy stored.",
  options: ["1 J", "2 J", "3 J", "4 J"],
  answer: 0
},
{
  question: "If the force and displacement are perpendicular, work done is?",
  options: ["Zero", "Positive", "Negative", "Infinite"],
  answer: 0
},
{
  question: "Energy possessed by a compressed gas is a form of?",
  options: ["Elastic potential energy", "Heat energy", "Mechanical energy", "Nuclear energy"],
  answer: 0
},
{
  question: "The SI unit of temperature is?",
  options: ["Celsius", "Fahrenheit", "Kelvin", "Centigrade"],
  answer: 2
},
{
  question: "Temperature is a measure of?",
  options: ["Heat energy", "Degree of hotness or coldness", "Total energy of a body", "Potential energy"],
  answer: 1
},
{
  question: "Heat is a form of?",
  options: ["Light energy", "Mechanical energy", "Thermal energy", "Sound energy"],
  answer: 2
},
{
  question: "The SI unit of heat is?",
  options: ["Joule", "Calorie", "Watt", "Kelvin"],
  answer: 0
},
{
  question: "Which of the following is not a method of heat transfer?",
  options: ["Conduction", "Convection", "Radiation", "Reflection"],
  answer: 3
},
{
  question: "Metals are good conductors of heat because they have?",
  options: ["High density", "Free electrons", "Shiny surfaces", "Large specific heat capacity"],
  answer: 1
},
{
  question: "In which medium does convection occur?",
  options: ["Solid", "Liquid and gas", "Vacuum", "Metal"],
  answer: 1
},
{
  question: "Radiation can occur in?",
  options: ["Solids only", "Liquids only", "Vacuum", "Metals only"],
  answer: 2
},
{
  question: "The amount of heat required to raise the temperature of 1 kg of a substance by 1 K is?",
  options: ["Specific latent heat", "Specific heat capacity", "Thermal conductivity", "Heat flux"],
  answer: 1
},
{
  question: "The unit of specific heat capacity is?",
  options: ["J/kg", "J/kgK", "J/K", "W/kg"],
  answer: 1
},
{
  question: "A 2 kg copper block is heated from 20°C to 70°C. (c = 400 J/kgK). Find the heat absorbed.",
  options: ["20,000 J", "40,000 J", "50,000 J", "60,000 J"],
  answer: 1
},
{
  question: "The quantity of heat required to change 1 kg of ice to water at 0°C is?",
  options: ["Specific latent heat of fusion", "Specific latent heat of vaporization", "Specific heat capacity", "Thermal resistance"],
  answer: 0
},
{
  question: "The latent heat of vaporization is the heat required to?",
  options: ["Change solid to liquid", "Change liquid to gas", "Change gas to solid", "Change liquid to solid"],
  answer: 1
},
{
  question: "Which of these materials is the best absorber of radiant heat?",
  options: ["White polished surface", "Shiny surface", "Black dull surface", "Silver surface"],
  answer: 2
},
{
  question: "Which of the following surfaces is a poor emitter of radiation?",
  options: ["Black rough", "Black dull", "White shiny", "Matt black"],
  answer: 2
},
{
  question: "A copper rod is heated at one end. The heat travels through the rod by?",
  options: ["Conduction", "Convection", "Radiation", "Reflection"],
  answer: 0
},
{
  question: "When a liquid is heated, it expands because?",
  options: ["Molecules move closer", "Molecules move faster and farther apart", "Heat decreases cohesion", "Conduction increases"],
  answer: 1
},
{
  question: "When a gas is compressed adiabatically, its temperature?",
  options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
  answer: 0
},
{
  question: "At what temperature are Celsius and Fahrenheit scales equal?",
  options: ["-40°C", "0°C", "100°C", "50°C"],
  answer: 0
},
{
  question: "Convert 27°C to Kelvin.",
  options: ["273 K", "290 K", "300 K", "310 K"],
  answer: 2
},
{
  question: "Convert 0°C to Fahrenheit.",
  options: ["0°F", "32°F", "100°F", "212°F"],
  answer: 1
},
{
  question: "A 500 g metal is heated by 2000 J. The temperature rises by 10°C. Find the specific heat capacity.",
  options: ["200 J/kgK", "300 J/kgK", "400 J/kgK", "500 J/kgK"],
  answer: 2
},
{
  question: "The total energy of all particles of a body is its?",
  options: ["Temperature", "Heat energy", "Potential energy", "Pressure"],
  answer: 1
},
{
  question: "When heat is absorbed or released without temperature change, the process is called?",
  options: ["Latent process", "Conduction", "Sensible heating", "Convection"],
  answer: 0
},
{
  question: "The process by which heat from the sun reaches the earth is?",
  options: ["Conduction", "Convection", "Radiation", "Reflection"],
  answer: 2
},
{
  question: "A black pot heats up faster than a white one because?",
  options: ["It reflects more heat", "It absorbs more heat", "It conducts less heat", "It stores less heat"],
  answer: 1
},
{
  question: "The temperature at which a pure solid changes to liquid is called?",
  options: ["Melting point", "Boiling point", "Freezing point", "Latent point"],
  answer: 0
},
{
  question: "The boiling point of pure water at standard atmospheric pressure is?",
  options: ["0°C", "50°C", "100°C", "212°C"],
  answer: 2
},
{
  question: "The expansion of a substance when heated is due to?",
  options: ["Increased molecular attraction", "Decreased molecular motion", "Increased molecular separation", "Change in mass"],
  answer: 2
},
{
  question: "The device used to measure temperature is called?",
  options: ["Thermometer", "Barometer", "Hygrometer", "Manometer"],
  answer: 0
},
{
  question: "The thermometer used to measure high temperatures in furnaces is?",
  options: ["Clinical thermometer", "Laboratory thermometer", "Pyrometer", "Mercury thermometer"],
  answer: 2
},
{
  question: "Liquids expand more than solids because?",
  options: ["Their molecules are closely packed", "Their molecules are loosely packed", "They conduct heat better", "They have less mass"],
  answer: 1
},
{
  question: "When a gas expands at constant temperature, it is said to undergo?",
  options: ["Isobaric process", "Adiabatic process", "Isothermal process", "Isochoric process"],
  answer: 2
},
{
  question: "When two bodies at different temperatures are in contact, heat flows until?",
  options: ["Their masses are equal", "Their temperatures are equal", "Their specific heats are equal", "Their densities are equal"],
  answer: 1
},
{
  question: "Which of the following materials is a poor conductor of heat?",
  options: ["Iron", "Copper", "Wood", "Aluminium"],
  answer: 2
},
{
  question: "The specific latent heat of fusion of ice is 3.36×10⁵ J/kg. Find the heat required to melt 0.5 kg of ice.",
  options: ["1.68×10⁵ J", "3.36×10⁵ J", "6.72×10⁵ J", "8.4×10⁵ J"],
  answer: 0
},
{
  question: "Which of the following statements about heat and temperature is correct?",
  options: ["They are the same", "Heat causes temperature change", "Temperature causes heat", "They have same unit"],
  answer: 1
},
{
  question: "A 2 kg aluminium block (c = 900 J/kgK) is heated from 30°C to 70°C. Find the heat absorbed.",
  options: ["54,000 J", "72,000 J", "90,000 J", "100,000 J"],
  answer: 0
},
{
  question: "Which of these instruments measures both humidity and temperature?",
  options: ["Hygrometer", "Thermohygrograph", "Barometer", "Calorimeter"],
  answer: 1
},
{
  question: "The heat capacity of a body depends on its?",
  options: ["Mass only", "Material only", "Mass and nature", "Temperature only"],
  answer: 2
},
{
  question: "The process of heat transfer in which the medium does not move is?",
  options: ["Conduction", "Convection", "Radiation", "Absorption"],
  answer: 0
},
{
  question: "The rise of hot air and fall of cold air in the atmosphere is due to?",
  options: ["Conduction", "Convection", "Radiation", "Expansion"],
  answer: 1
},
{
  question: "A 1.5 kg block of iron at 100°C is dropped into 2 kg of water at 20°C. The final temperature will be?",
  options: ["Between 20°C and 100°C", "100°C", "20°C", "0°C"],
  answer: 0
},
{
  question: "Which of these gases is used in thermometers for very low temperatures?",
  options: ["Mercury", "Alcohol", "Argon", "Helium"],
  answer: 1
},
{
  question: "The amount of heat required to raise the temperature of a substance depends on?",
  options: ["Mass and specific heat", "Density and area", "Length and volume", "Time and speed"],
  answer: 0
},
{
  question: "The specific latent heat of vaporization of water is?",
  options: ["2.26×10⁵ J/kg", "2.26×10⁶ J/kg", "4.18×10⁶ J/kg", "1.0×10⁶ J/kg"],
  answer: 1
},
{
  question: "When ice melts to water, temperature remains constant because?",
  options: ["Heat is used to raise temperature", "Heat is lost", "Heat is used to change state", "Heat is converted to light"],
  answer: 2
},
{
  question: "A calorimeter is used to measure?",
  options: ["Heat capacity", "Heat energy", "Temperature only", "Density"],
  answer: 1
},
{
  question: "The fixed points on the Celsius scale are?",
  options: ["0°C and 50°C", "0°C and 100°C", "100°C and 200°C", "32°C and 212°C"],
  answer: 1
},
{
  question: "An increase in temperature generally causes?",
  options: ["Decrease in density", "Increase in density", "Increase in mass", "Decrease in heat energy"],
  answer: 0
},
{
  question: "Which of these statements about expansion is correct?",
  options: ["All substances expand equally", "Liquids expand least", "Gases expand most", "Solids expand most"],
  answer: 2
},
{
  question: "A wave is best described as?",
  options: ["A disturbance that travels through a medium transferring matter", "A disturbance that transfers energy from one point to another", "A flow of particles", "A flow of heat energy"],
  answer: 1
},
{
  question: "Which of these is a mechanical wave?",
  options: ["Light wave", "Radio wave", "Sound wave", "X-ray"],
  answer: 2
},
{
  question: "Sound cannot travel through?",
  options: ["Solid", "Liquid", "Gas", "Vacuum"],
  answer: 3
},
{
  question: "The distance between two successive crests is called?",
  options: ["Amplitude", "Frequency", "Wavelength", "Period"],
  answer: 2
},
{
  question: "The number of complete vibrations per second is called?",
  options: ["Amplitude", "Period", "Frequency", "Wave velocity"],
  answer: 2
},
{
  question: "The unit of frequency is?",
  options: ["Second", "Hertz", "Metre", "Newton"],
  answer: 1
},
{
  question: "The time taken to complete one full vibration is called?",
  options: ["Period", "Frequency", "Amplitude", "Speed"],
  answer: 0
},
{
  question: "If a wave has a frequency of 10 Hz and wavelength of 3 m, its speed is?",
  options: ["10 m/s", "30 m/s", "3 m/s", "13 m/s"],
  answer: 1
},
{
  question: "The speed of a wave is given by?",
  options: ["v = fλ", "v = λ/f", "v = f + λ", "v = f − λ"],
  answer: 0
},
{
  question: "If the wavelength of a wave is doubled while its frequency remains the same, its speed will?",
  options: ["Double", "Halve", "Remain constant", "Be zero"],
  answer: 0
},
{
  question: "Sound waves are classified as?",
  options: ["Transverse waves", "Longitudinal waves", "Stationary waves", "Electromagnetic waves"],
  answer: 1
},
{
  question: "Which of the following is a property of transverse waves?",
  options: ["Particles vibrate along the direction of propagation", "They can travel through vacuum", "They have crests and troughs", "They cannot be polarized"],
  answer: 2
},
{
  question: "In longitudinal waves, the regions of high pressure are called?",
  options: ["Crests", "Troughs", "Compressions", "Rarefactions"],
  answer: 2
},
{
  question: "The loudness of a sound depends on its?",
  options: ["Frequency", "Amplitude", "Wavelength", "Speed"],
  answer: 1
},
{
  question: "The pitch of a sound depends on?",
  options: ["Amplitude", "Frequency", "Wavelength", "Speed"],
  answer: 1
},
{
  question: "The speed of sound in air at room temperature is approximately?",
  options: ["150 m/s", "330 m/s", "500 m/s", "1000 m/s"],
  answer: 1
},
{
  question: "The reflection of sound waves from a surface is called?",
  options: ["Diffraction", "Refraction", "Echo", "Interference"],
  answer: 2
},
{
  question: "An echo can be heard if the reflecting surface is at least?",
  options: ["10 m away", "17 m away", "30 m away", "50 m away"],
  answer: 1
},
{
  question: "The phenomenon of sound persistence after the source stops is called?",
  options: ["Diffraction", "Resonance", "Reverberation", "Interference"],
  answer: 2
},
{
  question: "The bending of waves around obstacles is called?",
  options: ["Reflection", "Refraction", "Diffraction", "Resonance"],
  answer: 2
},
{
  question: "The change in direction of waves when they pass from one medium to another is?",
  options: ["Reflection", "Refraction", "Interference", "Diffraction"],
  answer: 1
},
{
  question: "Resonance occurs when?",
  options: ["Two waves of different frequencies meet", "The frequency of the source equals the natural frequency of the object", "A wave bends around an object", "Waves cancel out"],
  answer: 1
},
{
  question: "If a sound wave has frequency 250 Hz and wavelength 1.32 m, find its speed.",
  options: ["250 m/s", "330 m/s", "500 m/s", "660 m/s"],
  answer: 1
},
{
  question: "The principle of superposition is applied in explaining?",
  options: ["Refraction", "Diffraction", "Interference", "Reflection"],
  answer: 2
},
{
  question: "If the frequency of a wave is 50 Hz and its period is?",
  options: ["0.02 s", "0.2 s", "2 s", "5 s"],
  answer: 0
},
{
  question: "The product of frequency and wavelength gives?",
  options: ["Amplitude", "Velocity", "Time", "Period"],
  answer: 1
},
{
  question: "The region of low pressure in a sound wave is known as?",
  options: ["Compression", "Rarefaction", "Trough", "Node"],
  answer: 1
},
{
  question: "The equation v = fλ represents?",
  options: ["Newton’s Second Law", "Wave equation", "Hooke’s Law", "Ohm’s Law"],
  answer: 1
},
{
  question: "A sound of frequency above 20,000 Hz is called?",
  options: ["Audible sound", "Infrasound", "Ultrasound", "Supersonic sound"],
  answer: 2
},
{
  question: "A sound of frequency below 20 Hz is called?",
  options: ["Infrasound", "Ultrasound", "Supersonic", "Audible sound"],
  answer: 0
},
{
  question: "In a stationary wave, points of zero amplitude are called?",
  options: ["Nodes", "Antinodes", "Crests", "Troughs"],
  answer: 0
},
{
  question: "In a stationary wave, points of maximum amplitude are?",
  options: ["Nodes", "Antinodes", "Compressions", "Troughs"],
  answer: 1
},
{
  question: "The frequency of vibration of a stretched string is inversely proportional to?",
  options: ["Its length", "Its tension", "Its linear density", "Its amplitude"],
  answer: 0
},
{
  question: "If the speed of a wave is 300 m/s and the wavelength is 0.75 m, what is its frequency?",
  options: ["200 Hz", "300 Hz", "400 Hz", "500 Hz"],
  answer: 2
},
{
  question: "Which of these waves requires a medium for propagation?",
  options: ["Light wave", "Radio wave", "X-ray", "Sound wave"],
  answer: 3
},
{
  question: "Which of the following statements is true?",
  options: ["Sound travels faster in air than in metal", "Sound travels faster in metal than in air", "Sound speed is same in all media", "Sound does not travel in metal"],
  answer: 1
},
{
  question: "A wave has a wavelength of 0.5 m and speed of 250 m/s. Find its frequency.",
  options: ["250 Hz", "400 Hz", "500 Hz", "750 Hz"],
  answer: 2
},
{
  question: "The part of a longitudinal wave where particles are closest together is called?",
  options: ["Crest", "Compression", "Rarefaction", "Node"],
  answer: 1
},
{
  question: "A man claps his hands and hears an echo after 0.2 s. If the speed of sound in air is 340 m/s, how far is the wall?",
  options: ["17 m", "34 m", "68 m", "85 m"],
  answer: 1
},
{
  question: "Sound is a type of?",
  options: ["Mechanical wave", "Electromagnetic wave", "Transverse wave", "Stationary wave"],
  answer: 0
},
{
  question: "The speed of sound increases with?",
  options: ["Decrease in pressure", "Decrease in temperature", "Increase in temperature", "Increase in wavelength only"],
  answer: 2
},
{
  question: "The ratio of speed of sound in water to that in air is approximately?",
  options: ["1:2", "2:1", "4:1", "10:1"],
  answer: 2
},
{
  question: "Which of the following instruments can be used to demonstrate stationary waves?",
  options: ["Barometer", "Resonance tube", "Thermometer", "Hydrometer"],
  answer: 1
},
{
  question: "If the wavelength of a wave is 2 m and its period is 0.01 s, its speed is?",
  options: ["100 m/s", "150 m/s", "200 m/s", "250 m/s"],
  answer: 2
},
{
  question: "Beats are formed by?",
  options: ["Waves of same frequency", "Waves of slightly different frequencies", "Waves of equal amplitude", "Longitudinal waves only"],
  answer: 1
},
{
  question: "The human ear can hear frequencies between?",
  options: ["1 Hz and 100 Hz", "20 Hz and 20,000 Hz", "200 Hz and 200,000 Hz", "2,000 Hz and 20,000 Hz"],
  answer: 1
},
{
  question: "The amplitude of a wave measures its?",
  options: ["Loudness", "Pitch", "Speed", "Duration"],
  answer: 0
},
{
  question: "A wave with frequency 5 Hz travels at 10 m/s. Find its wavelength.",
  options: ["1 m", "2 m", "3 m", "4 m"],
  answer: 1
},
{
  question: "The phenomenon responsible for the change in pitch of a moving car horn is?",
  options: ["Resonance", "Doppler effect", "Reflection", "Refraction"],
  answer: 1
},
{
  question: "If two waves of equal amplitude and frequency travel in opposite directions, they form?",
  options: ["Longitudinal waves", "Stationary waves", "Transverse waves", "Progressive waves"],
  answer: 1
},
{
  question: "Which of these determines the pitch of a sound?",
  options: ["Amplitude", "Frequency", "Speed", "Medium"],
  answer: 1
},
{
      question: "Which of the following is NOT a fundamental quantity?",
      options: ["Mass", "Length", "Velocity", "Time"],
      answer: 2
    },
    {
      question: "Which of these is a fundamental unit?",
      options: ["Newton", "Meter", "Joule", "Watt"],
      answer: 1
    },
    {
      question: "The SI unit of mass is?",
      options: ["Gram", "Kilogram", "Milligram", "Tonne"],
      answer: 1
    },
    {
      question: "The SI unit of time is?",
      options: ["Minute", "Hour", "Second", "Millisecond"],
      answer: 2
    },
    {
      question: "Which of the following is a derived quantity?",
      options: ["Temperature", "Electric current", "Density", "Mass"],
      answer: 2
    },
    {
      question: "The unit of force is derived from which fundamental quantities?",
      options: ["Mass, length, and time", "Mass and temperature", "Length and time", "Mass and current"],
      answer: 0
    },
    {
      question: "What is the SI unit of energy?",
      options: ["Watt", "Newton", "Joule", "Pascal"],
      answer: 2
    },
    {
      question: "Which of these quantities is dimensionless?",
      options: ["Angle", "Mass", "Time", "Velocity"],
      answer: 0
    },
    {
      question: "The dimensional formula of velocity is?",
      options: ["[L T⁻¹]", "[M L⁻¹ T]", "[L T]", "[M T⁻²]"],
      answer: 0
    },
    {
      question: "What is the derived SI unit of pressure?",
      options: ["Newton", "Pascal", "Joule", "Watt"],
      answer: 1
    },
    {
      question: "Pressure is force per unit area. If force = 10 N and area = 2 m², find pressure.",
      options: ["2 N/m²", "5 N/m²", "10 N/m²", "20 N/m²"],
      answer: 1
    },
    {
      question: "Which of the following quantities is derived?",
      options: ["Mass", "Time", "Area", "Temperature"],
      answer: 2
    },
    {
      question: "Which of the following is a fundamental unit?",
      options: ["Coulomb", "Kelvin", "Joule", "Volt"],
      answer: 1
    },
    {
      question: "The dimensional formula of acceleration is?",
      options: ["[L T⁻²]", "[M L T⁻²]", "[L² T⁻²]", "[M T⁻¹]"],
      answer: 0
    },
    {
      question: "If a car moves 120 m in 10 s, what is its average velocity?",
      options: ["10 m/s", "12 m/s", "15 m/s", "20 m/s"],
      answer: 1
    },
    {
      question: "Which of the following represents power?",
      options: ["Energy per unit time", "Force per unit area", "Work × time", "Energy × distance"],
      answer: 0
    },
    {
      question: "The SI unit of power is?",
      options: ["Joule", "Watt", "Newton", "Pascal"],
      answer: 1
    },
    {
      question: "Which of the following quantities is NOT derived?",
      options: ["Force", "Pressure", "Length", "Work"],
      answer: 2
    },
    {
      question: "Which of the following physical quantities has the same unit as energy?",
      options: ["Torque", "Momentum", "Pressure", "Power"],
      answer: 0
    },
    {
      question: "The SI base unit of electric current is?",
      options: ["Volt", "Ampere", "Coulomb", "Ohm"],
      answer: 1
    },
    {
      question: "The unit of charge can be derived from?",
      options: ["Ampere × Time", "Voltage × Resistance", "Mass × Acceleration", "Power × Time"],
      answer: 0
    },
    {
      question: "What is the unit of density?",
      options: ["kg/m³", "N/m²", "J/m³", "kg/m²"],
      answer: 0
    },
    {
      question: "If mass = 10 kg and volume = 2 m³, find the density.",
      options: ["2 kg/m³", "4 kg/m³", "5 kg/m³", "10 kg/m³"],
      answer: 2
    },
    {
      question: "Which of these pairs are both derived quantities?",
      options: ["Mass and Density", "Force and Pressure", "Time and Speed", "Length and Area"],
      answer: 1
    },
    {
      question: "The dimensional formula of work is?",
      options: ["[M L² T⁻²]", "[M L T⁻²]", "[L² T]", "[M L⁻¹ T⁻¹]"],
      answer: 0
    },
    {
      question: "The SI unit of frequency is?",
      options: ["Hertz", "Watt", "Joule", "Pascal"],
      answer: 0
    },
    {
      question: "Which of these represents momentum?",
      options: ["Mass × Velocity", "Force × Time", "Mass × Acceleration", "Energy × Distance"],
      answer: 0
    },
    {
      question: "The SI unit of momentum is?",
      options: ["kg·m/s", "kg/m²", "N·m", "m/s²"],
      answer: 0
    },
    {
      question: "The SI unit of work is equivalent to?",
      options: ["N/m", "N·m", "m/s", "N/s"],
      answer: 1
    },
    {
      question: "Which of the following is NOT correctly matched?",
      options: ["Energy - Joule", "Power - Watt", "Force - Pascal", "Pressure - Pascal"],
      answer: 2
    },
    {
      question: "What is the derived unit of speed?",
      options: ["m²/s", "m/s", "m/s²", "kg·m/s"],
      answer: 1
    },
    {
      question: "If a body travels 50 m in 5 s, find its speed.",
      options: ["5 m/s", "8 m/s", "10 m/s", "15 m/s"],
      answer: 2
    },
    {
      question: "Which of the following combinations gives the unit of power?",
      options: ["Work × Time", "Force × Distance", "Work / Time", "Energy × Time"],
      answer: 2
    },
    {
      question: "The SI unit of electric potential difference is?",
      options: ["Volt", "Ohm", "Coulomb", "Ampere"],
      answer: 0
    },
    {
      question: "A force of 10 N moves a body through 5 m. Find the work done.",
      options: ["10 J", "15 J", "25 J", "50 J"],
      answer: 3
    },
    {
      question: "The dimensional formula of force is?",
      options: ["[M L T⁻²]", "[M L² T⁻²]", "[L T⁻¹]", "[M T⁻²]"],
      answer: 0
    },
    {
      question: "Which of these is a derived physical quantity?",
      options: ["Temperature", "Mass", "Energy", "Length"],
      answer: 2
    },
    {
      question: "The product of force and distance gives?",
      options: ["Power", "Work", "Energy", "Momentum"],
      answer: 1
    },
    {
      question: "The derived unit of acceleration is?",
      options: ["m/s²", "m/s", "kg·m/s", "N/m"],
      answer: 0
    },
    {
      question: "The SI unit of pressure can be expressed as?",
      options: ["N/m²", "N/m", "N·m", "kg/m²"],
      answer: 0
    },
    {
      question: "The unit of momentum can be derived from?",
      options: ["Force × Time", "Mass × Acceleration", "Work / Time", "Power × Time"],
      answer: 0
    },
    {
      question: "The SI unit of energy and work are the same. True or False?",
      options: ["True", "False", "Depends on context", "None of the above"],
      answer: 0
    },
    {
      question: "The dimensional formula of pressure is?",
      options: ["[M L⁻¹ T⁻²]", "[M L² T⁻²]", "[M T⁻²]", "[L T⁻¹]"],
      answer: 0
    },
    {
      question: "The SI unit of volume is?",
      options: ["cm³", "m³", "dm³", "Litre"],
      answer: 1
    },
    {
      question: "If a cube has sides of 2 m, find its volume.",
      options: ["4 m³", "6 m³", "8 m³", "10 m³"],
      answer: 2
    },
    {
      question: "Which of these has the same dimension as force?",
      options: ["Momentum", "Pressure × Area", "Work × Distance", "Energy × Time"],
      answer: 1
    },
    {
      question: "The SI unit of angular velocity is?",
      options: ["radian", "radian per second", "degree", "degree per minute"],
      answer: 1
    },
    {
      question: "What is the dimensional formula of density?",
      options: ["[M L⁻³]", "[M L T⁻³]", "[M L⁻² T⁻¹]", "[M L⁻¹ T]"],
      answer: 0
    },
    {
      question: "The SI unit of charge is derived from?",
      options: ["Current × Time", "Voltage × Current", "Resistance × Power", "Power × Time"],
      answer: 0
    },
    {
      question: "What is the SI unit of resistance?",
      options: ["Coulomb", "Ohm", "Ampere", "Volt"],
      answer: 1
    },
    {
      question: "Which of the following pairs has the same dimensional formula?",
      options: ["Work and Energy", "Power and Force", "Force and Pressure", "Momentum and Work"],
      answer: 0
    },
    {
      question: "Which unit is derived from Joule per second?",
      options: ["Watt", "Newton", "Pascal", "Coulomb"],
      answer: 0
    }
  ],
  
  //Biology questions here
  Biology: [
    { 
      question: "All the following are aquatic organisms except",
      options: ["shrimp", "lizard", "jelly fish", "lobster"],
      answer: 1,
  }, 
    { 
      question: "All the following are characteristics of living organisms except",
      options: ["growth", "death", " irritability", "regurgitation"],
      answer: 3,
    },
    { 
      question: "The most successful invertebrate is",
      options: ["Reptile", "Mammals", "Arthropods", "Echinoderms"],
      answer: 1,
      },
    { 
      question: "Which of these organisms is a reptile",
      options: ["shrimp", "lizard", "jelly fish", "lobster"],
      answer: 1,
        }
  ],
  
  //literature in english question
  Literature: [
   {
  question: "A poem that mourns the death of a person is called a _______.",
  options: ["Sonnet", "Elegy", "Ode", "Ballad"],
  answer: 1,
},
{
  question: "The repetition of vowel sounds in a poem is called _______.",
  options: ["Alliteration", "Assonance", "Consonance", "Rhyme"],
  answer: 1,
},
{
  question: "A poem without a regular rhyme scheme or rhythm is called _______.",
  options: ["Blank verse", "Free verse", "Sonnet", "Ballad"],
  answer: 1,
},
{
  question: "The persona in a poem refers to _______.",
  options: ["The poet", "The speaker in the poem", "The audience", "The editor"],
  answer: 1,
},
{
  question: "A fourteen-line poem is known as a _______.",
  options: ["Ballad", "Ode", "Sonnet", "Elegy"],
  answer: 2,
},
{
  question: "The pattern of rhymes in a poem is called its _______.",
  options: ["Tone", "Mood", "Rhyme scheme", "Structure"],
  answer: 2,
},
{
  question: "A poem that tells a story is called a _______.",
  options: ["Ode", "Ballad", "Elegy", "Sonnet"],
  answer: 1,
},
{
  question: "‘The Proud King’ is a poem about _______.",
  options: ["Pride and repentance", "Love and loss", "War and victory", "Nature and peace"],
  answer: 0,
},
{
  question: "In ‘Do Not Go Gentle into That Good Night’, the poet appeals for _______.",
  options: ["Calm acceptance of death", "Rebellion against death", "Peace and silence", "Loneliness"],
  answer: 1,
},
{
  question: "The use of descriptive language that appeals to the senses is called _______.",
  options: ["Imagery", "Personification", "Metaphor", "Symbolism"],
  answer: 0,
},
{
  question: "‘The Piano and Drums’ by Gabriel Okara contrasts _______.",
  options: ["War and peace", "Tradition and modernity", "Love and hate", "Youth and age"],
  answer: 1,
},
{
  question: "In ‘Vanity’ by Birago Diop, the poet blames Africans’ suffering on _______.",
  options: ["Foreigners", "Their neglect of ancestors", "Lack of education", "The environment"],
  answer: 1,
},
{
  question: "‘The Pulley’ by George Herbert presents the theme of _______.",
  options: ["Wealth", "Man’s relationship with God", "Love", "Nature"],
  answer: 1,
},
{
  question: "The line ‘The world is too much with us’ expresses _______.",
  options: ["Peace with nature", "Human disconnection from nature", "Religious devotion", "Love of the world"],
  answer: 1,
},
{
  question: "A poem that uses animals or objects to teach moral lessons is called a _______.",
  options: ["Myth", "Allegory", "Fable", "Sonnet"],
  answer: 2,
},
{
  question: "‘The Ambush’ by Gbemisola Adeoti criticizes _______.",
  options: ["The government and leadership", "Love and betrayal", "Modernity", "Family values"],
  answer: 0,
},
{
  question: "In ‘Birches’ by Robert Frost, the swinging birches symbolize _______.",
  options: ["Childhood freedom and escape", "Hard work", "Nature’s beauty", "Hope"],
  answer: 0,
},
{
  question: "‘The Dining Table’ by Gbanabom Hallowell reflects _______.",
  options: ["The horror of war", "Family reunion", "A political campaign", "A peaceful feast"],
  answer: 0,
},
{
  question: "The use of one thing to represent another in poetry is called _______.",
  options: ["Symbolism", "Allusion", "Hyperbole", "Metonymy"],
  answer: 0,
},
{
  question: "‘Caged Bird’ by Maya Angelou symbolizes _______.",
  options: ["Freedom of choice", "Oppression and freedom", "War and peace", "Love and hate"],
  answer: 1,
},
{
  question: "In ‘Telephone Conversation’ by Wole Soyinka, the central theme is _______.",
  options: ["Racism and prejudice", "Love", "Loneliness", "Modernization"],
  answer: 0,
},
{
  question: "The line ‘Because I could not stop for Death’ personifies _______.",
  options: ["Time", "Love", "Death", "Nature"],
  answer: 2,
},
{
  question: "‘The Journey of the Magi’ by T.S. Eliot explores _______.",
  options: ["Birth of Christ", "Death", "Conversion and spiritual change", "Adventure"],
  answer: 2,
},
{
  question: "In ‘Crossing the Bar’, the poet uses the sea as a metaphor for _______.",
  options: ["Life", "Death", "Adventure", "Freedom"],
  answer: 1,
},
{
  question: "‘The School Boy’ by William Blake criticizes _______.",
  options: ["Child labor", "Formal education system", "Nature", "Family life"],
  answer: 1,
},
{
  question: "A poem that celebrates heroes or heroic deeds is called an _______.",
  options: ["Elegy", "Epic", "Ode", "Ballad"],
  answer: 1,
},
{
  question: "The repetition of consonant sounds within a line of poetry is called _______.",
  options: ["Assonance", "Alliteration", "Consonance", "Rhyme"],
  answer: 2,
},
{
  question: "In ‘The Panic of Growing Older’ by Lenrie Peters, the poet reflects on _______.",
  options: ["The joy of youth", "The futility of ambition", "Childhood memories", "Family duties"],
  answer: 1,
},
{
  question: "‘The Pulley’ suggests that man’s restlessness will lead him to _______.",
  options: ["Despair", "Success", "God", "War"],
  answer: 2,
},
{
  question: "In ‘Do Not Go Gentle into That Good Night’, the ‘good night’ represents _______.",
  options: ["Old age", "Peace", "Death", "Love"],
  answer: 2,
},
{
  question: "‘The Poplar Field’ laments _______.",
  options: ["Loss of nature", "Love unfulfilled", "Family betrayal", "Political failure"],
  answer: 0,
},
{
  question: "‘The Piano and Drums’ contrasts the influence of _______.",
  options: ["Love and hatred", "Tradition and modernity", "Wealth and poverty", "Religion and politics"],
  answer: 1,
},
{
  question: "In poetry, enjambment occurs when _______.",
  options: ["A line continues to the next without pause", "Lines rhyme perfectly", "A poem changes tone", "Stanzas are repeated"],
  answer: 0,
},
{
  question: "‘Vanity’ ends with a call for Africans to _______.",
  options: ["Seek forgiveness and unity", "Blame colonial masters", "Return to nature", "Reject religion"],
  answer: 0,
},
{
  question: "The tone of ‘Caged Bird’ is mostly _______.",
  options: ["Joyful", "Bitter and defiant", "Mocking", "Nostalgic"],
  answer: 1,
},
{
  question: "‘The Ambush’ portrays the nation as _______.",
  options: ["A sleeping giant", "A predator devouring its people", "A prosperous land", "A loving mother"],
  answer: 1,
},
{
  question: "In ‘Piano and Drums’, the piano represents _______.",
  options: ["Modern civilization", "Rural tradition", "Poverty", "Conflict"],
  answer: 0,
},
{
  question: "A regular pattern of stressed and unstressed syllables in poetry is called _______.",
  options: ["Rhyme", "Meter", "Theme", "Tone"],
  answer: 1,
},
{
  question: "‘The Pulley’ reveals God’s intention to keep man _______.",
  options: ["Restless for divine connection", "Satisfied and proud", "Joyful and lazy", "Wealthy and content"],
  answer: 0,
},
{
  question: "‘Vanity’ is written by _______.",
  options: ["Lenrie Peters", "Birago Diop", "Gabriel Okara", "Wole Soyinka"],
  answer: 1,
},
{
  question: "‘Crossing the Bar’ by Tennyson uses the sea journey to symbolize _______.",
  options: ["Life and death", "War", "Hope", "Loneliness"],
  answer: 0,
},
{
  question: "‘The Panic of Growing Older’ depicts the poet’s fear of _______.",
  options: ["Aging without achievement", "Losing family", "War", "Sickness"],
  answer: 0,
},
{
  question: "‘The Dining Table’ symbolizes _______.",
  options: ["Peace", "War and suffering", "Unity", "Feasting"],
  answer: 1,
},
{
  question: "‘Birches’ suggests that childhood offers _______.",
  options: ["Escape from life’s burdens", "Pain", "Wealth", "Maturity"],
  answer: 0,
},
{
  question: "‘Vanity’ conveys the importance of _______.",
  options: ["Cultural remembrance", "Love", "Hard work", "Power"],
  answer: 0,
},
{
  question: "‘The Ambush’ was written by _______.",
  options: ["Birago Diop", "Gbemisola Adeoti", "Gabriel Okara", "Lenrie Peters"],
  answer: 1,
},
{
  question: "‘The Proud King’ warns against _______.",
  options: ["Pride and arrogance", "Cowardice", "Weakness", "Kindness"],
  answer: 0,
},
{
  question: "‘Caged Bird’ uses the metaphor of a bird to represent _______.",
  options: ["Freedom and captivity", "War and peace", "Power and greed", "Faith and hope"],
  answer: 0,
},
{
  question: "‘The Dining Table’ reveals the poet’s feeling of _______.",
  options: ["Fear and helplessness", "Joy", "Satisfaction", "Love"],
  answer: 0,
},
{
  question: "‘The Pulley’ suggests that man’s only rest is found in _______.",
  options: ["Wealth", "God", "Work", "Love"],
  answer: 1,
},
{
  question: "In ‘The Panic of Growing Older’, the poet’s tone is _______.",
  options: ["Reflective and regretful", "Joyful", "Excited", "Sarcastic"],
  answer: 0,
},
{
  question: "‘The Poplar Field’ laments how _______.",
  options: ["Nature is destroyed by man", "Love fades quickly", "Power corrupts", "Time heals all wounds"],
  answer: 0,
},
{
  question: "In a play, the dialogue between characters helps to _______.",
  options: ["Set the scene", "Develop the plot and reveal character", "Describe the setting", "Explain stage directions"],
  answer: 1,
},
{
  question: "The written form of a play is called a _______.",
  options: ["Novel", "Script", "Act", "Scene"],
  answer: 1,
},
{
  question: "The part of a play where conflict is introduced is known as the _______.",
  options: ["Exposition", "Rising action", "Resolution", "Denouement"],
  answer: 1,
},
{
  question: "The peak or turning point of a play is called the _______.",
  options: ["Climax", "Prologue", "Epilogue", "Resolution"],
  answer: 0,
},
{
  question: "The end of a play where conflicts are resolved is the _______.",
  options: ["Rising action", "Climax", "Falling action", "Resolution"],
  answer: 3,
},
{
  question: "Stage directions in a play are written to guide the _______.",
  options: ["Readers", "Actors and directors", "Audience", "Playwright"],
  answer: 1,
},
{
  question: "A play that ends unhappily is called a _______.",
  options: ["Comedy", "Tragedy", "Melodrama", "Satire"],
  answer: 1,
},
{
  question: "A humorous play with a happy ending is known as a _______.",
  options: ["Tragedy", "Comedy", "Satire", "Farce"],
  answer: 1,
},
{
  question: "A play that ridicules human folly or vice is a _______.",
  options: ["Satire", "Tragedy", "Romance", "Epic"],
  answer: 0,
},
{
  question: "In Shakespearean drama, the tragic hero’s downfall is often due to _______.",
  options: ["Fate", "Tragic flaw", "Evil forces", "Magic"],
  answer: 1,
},
{
  question: "Who is the tragic hero in ‘Macbeth’? ",
  options: ["Banquo", "Macduff", "Macbeth", "Duncan"],
  answer: 2,
},
{
  question: "In ‘Othello’, the main theme is _______.",
  options: ["Jealousy and betrayal", "Love and loyalty", "War and victory", "Faith and forgiveness"],
  answer: 0,
},
{
  question: "‘The Lion and the Jewel’ is written by _______.",
  options: ["Chinua Achebe", "Wole Soyinka", "Ngugi wa Thiong’o", "John Kani"],
  answer: 1,
},
{
  question: "The central conflict in ‘The Lion and the Jewel’ is between _______.",
  options: ["Baroka and Sidi", "Lakunle and Sadiku", "Sidi and Lakunle", "Baroka and Sadiku"],
  answer: 0,
},
{
  question: "‘Othello’ was written by _______.",
  options: ["William Shakespeare", "Wole Soyinka", "Sophocles", "Chinua Achebe"],
  answer: 0,
},
{
  question: "‘Oedipus Rex’ was written by _______.",
  options: ["Aristophanes", "Sophocles", "Shakespeare", "Molière"],
  answer: 1,
},
{
  question: "The major theme of ‘Oedipus Rex’ is _______.",
  options: ["Love", "Fate vs free will", "War", "Friendship"],
  answer: 1,
},
{
  question: "In drama, a soliloquy is a speech _______.",
  options: ["By one character alone on stage", "Between two lovers", "Between two opposing characters", "To the audience directly"],
  answer: 0,
},
{
  question: "An aside is a speech _______.",
  options: ["Addressed to another actor", "Heard only by the audience", "Said to the director", "Spoken in chorus"],
  answer: 1,
},
{
  question: "‘She Stoops to Conquer’ was written by _______.",
  options: ["Oliver Goldsmith", "William Shakespeare", "George Bernard Shaw", "John Osborne"],
  answer: 0,
},
{
  question: "The main purpose of a comic relief in a tragedy is to _______.",
  options: ["Lighten tension", "End the play", "Introduce new conflict", "Mock the hero"],
  answer: 0,
},
{
  question: "In ‘The Lion and the Jewel’, Lakunle represents _______.",
  options: ["Tradition", "Modernity and Western influence", "Old customs", "Religion"],
  answer: 1,
},
{
  question: "Baroka’s character in ‘The Lion and the Jewel’ represents _______.",
  options: ["Youth and inexperience", "Tradition and cunning", "Ignorance", "Modern education"],
  answer: 1,
},
{
  question: "The setting of ‘The Lion and the Jewel’ is _______.",
  options: ["Ilorin", "Lagos", "Ilujinle", "Ibadan"],
  answer: 2,
},
{
  question: "In ‘Othello’, Iago’s main motive is _______.",
  options: ["Revenge", "Love", "Fear", "Loyalty"],
  answer: 0,
},
{
  question: "In ‘Oedipus Rex’, the king unknowingly kills _______.",
  options: ["Creon", "Laius", "Jocasta", "Tiresias"],
  answer: 1,
},
{
  question: "‘Death and the King’s Horseman’ was written by _______.",
  options: ["Ngugi wa Thiong’o", "Chinua Achebe", "Wole Soyinka", "Athol Fugard"],
  answer: 2,
},
{
  question: "The theme of ‘Death and the King’s Horseman’ revolves around _______.",
  options: ["Conflict between tradition and colonial influence", "Romantic love", "Political leadership", "War"],
  answer: 0,
},
{
  question: "In ‘Death and the King’s Horseman’, Elesin is expected to _______.",
  options: ["Escape to England", "Die to accompany the king", "Marry the princess", "Fight the British"],
  answer: 1,
},
{
  question: "In drama, conflict drives the _______.",
  options: ["Setting", "Plot", "Theme", "Mood"],
  answer: 1,
},
{
  question: "A play divided into acts and scenes is a feature of _______.",
  options: ["Prose", "Drama", "Poetry", "Narrative"],
  answer: 1,
},
{
  question: "‘The gods are not to blame’ is an adaptation of _______.",
  options: ["Othello", "Oedipus Rex", "Julius Caesar", "Hamlet"],
  answer: 1,
},
{
  question: "Who wrote ‘The gods are not to blame’? ",
  options: ["Wole Soyinka", "Ola Rotimi", "J.P. Clark", "Ngugi wa Thiong’o"],
  answer: 1,
},
{
  question: "The theme of ‘The gods are not to blame’ is _______.",
  options: ["Love and hatred", "Fate and destiny", "War and peace", "Education"],
  answer: 1,
},
{
  question: "In ‘Julius Caesar’, Brutus joins the conspirators because he _______.",
  options: ["Hates Caesar", "Loves power", "Believes Caesar is ambitious", "Is bribed"],
  answer: 2,
},
{
  question: "Who said, ‘Et tu, Brute?’",
  options: ["Caesar", "Brutus", "Cassius", "Antony"],
  answer: 0,
},
{
  question: "In ‘Julius Caesar’, Mark Antony’s speech begins with _______.",
  options: ["‘Friends, Romans, countrymen, lend me your ears’", "‘Beware the Ides of March’", "‘Et tu, Brute?’", "‘O pardon me, thou bleeding piece of earth’"],
  answer: 0,
},
{
  question: "‘She Stoops to Conquer’ explores the theme of _________.",
  options: ["Love and class differences", "War and peace", "Religion", "Betrayal"],
  answer: 0,
},
{
  question: "In ‘She Stoops to Conquer’, Tony Lumpkin causes confusion by _________.",
  options: ["Misdirecting guests", "Stealing money", "Pretending to be rich", "Starting a fight"],
  answer: 0,
},
{
  question: "The protagonist of a play is _________.",
  options: ["The villain", "The main character", "The narrator", "The comic character"],
  answer: 1,
},
{
  question: "The antagonist in a play is _________.",
  options: ["The helper", "The hero", "The opposing character", "The narrator"],
  answer: 2,
},
{
  question: "In ‘Oedipus Rex’, the truth is revealed by the _________.",
  options: ["Oracle and messenger", "Chorus", "Priests", "Guards"],
  answer: 0,
},
{
  question: "In ‘Othello’, Desdemona dies by ________.",
  options: ["Poison", "Drowning", "Strangulation", "Stabbing"],
  answer: 2,
},
{
  question: "The language used by characters in a play is called ________.",
  options: ["Prose", "Dialogue", "Soliloquy", "Monologue"],
  answer: 1,
},
{
  question: "The final part of a play where loose ends are tied up is called the ________.",
  options: ["Prologue", "Denouement", "Rising action", "Conflict"],
  answer: 1,
},
{
  question: "‘Julius Caesar’ was written by ________.",
  options: ["William Shakespeare", "Ben Jonson", "Christopher Marlowe", "Sophocles"],
  answer: 0,
},
{
  question: "The chorus in classical drama serves to ________.",
  options: ["Sing only", "Comment on the action and express public opinion", "Act as villains", "Tell jokes"],
  answer: 1,
},
{
  question: "‘Death and the King’s Horseman’ is set in _________.",
  options: ["Ibadan", "Oyo", "Lagos", "Benin"],
  answer: 1,
},
{
  question: "A scene in drama refers to _________.",
  options: ["A part of an act", "A short story", "A monologue", "A poem"],
  answer: 0,
},
{
  question: "The main function of a prologue is to _________.",
  options: ["Summarize the end", "Introduce the story and characters", "Present the conflict", "Provide a climax"],
  answer: 1,
},
  {
    question: "In 'Lonely Days', Yaremi symbolizes _________.",
    options: ["Patience and resilience", "Weakness", "Greed", "Indifference"],
    answer: 0,
  },
  {
    question: "The central theme of 'Faceless' is _________.",
    options: ["Abuse of street children", "Religious intolerance", "Education", "Political freedom"],
    answer: 0,
  },
  {
    question: "In literature, 'foreshadowing' refers to _________.",
    options: ["A hint of future events", "A reflection of past events", "Direct narration", "Dream sequence"],
    answer: 0,
  },
  {
    question: "The act of giving human qualities to non-human objects is called _________.",
    options: ["Hyperbole", "Personification", "Simile", "Allusion"],
    answer: 1,
  },
  {
    question: "‘Faceless’ portrays which of the following social issues most strongly?",
    options: ["Street hawking and exploitation", "Political corruption", "Education", "Religious conflict"],
    answer: 0,
  },
  {
    question: "The use of vivid language to create pictures in the reader’s mind is known as _________.",
    options: ["Imagery", "Irony", "Symbolism", "Tone"],
    answer: 0,
  },
  {
    question: "‘Harvest of Corruption’ exposes corruption in _______.",
    options: ["The civil service", "The police force", "The judiciary and political system", "Education"],
    answer: 2,
  },
  {
    question: "The tone of 'The Life Changer' is mostly _______.",
    options: ["Cautionary and reflective", "Humorous", "Sad", "Aggressive"],
    answer: 0,
  },
  {
    question: "In 'Othello', Desdemona’s character is best described as _______.",
    options: ["Cunning", "Faithful and innocent", "Arrogant", "Rebellious"],
    answer: 1,
  },
  {
    question: "A story that ridicules human vices in order to correct them is called _______.",
    options: ["Parable", "Satire", "Elegy", "Comedy"],
    answer: 1,
  },
  {
    question: "‘The Lion and the Jewel’ explores the clash between _______.",
    options: ["Tradition and modernity", "Love and hate", "Religion and science", "Politics and economy"],
    answer: 0,
  },
  {
    question: "The protagonist in 'The Life Changer' is _______.",
    options: ["Ummi", "Tomi", "Salma", "Lekan"],
    answer: 0,
  },
  {
    question: "‘The Life Changer’ is narrated in the _______.",
    options: ["First person", "Second person", "Third person", "Omniscient"],
    answer: 0,
  },
  {
    question: "A poem that praises an individual or event is called an _______.",
    options: ["Ode", "Elegy", "Sonnet", "Ballad"],
    answer: 0,
  },
  {
    question: "The phrase ‘He met his waterloo’ is an example of _______.",
    options: ["Allusion", "Irony", "Pun", "Metaphor"],
    answer: 0,
  },
  {
    question: "‘He is a lion in battle’ is a _______.",
    options: ["Metaphor", "Simile", "Personification", "Euphemism"],
    answer: 0,
  },
  {
    question: "In 'Faceless', Fofo’s main goal is to _______.",
    options: ["Find her sister", "Start a business", "Travel abroad", "Expose corruption"],
    answer: 0,
  },
  {
    question: "In poetry, the repetition of vowel sounds is called _______.",
    options: ["Assonance", "Alliteration", "Consonance", "Onomatopoeia"],
    answer: 0,
  },
  {
    question: "‘The Lion and the Jewel’ is written by _______.",
    options: ["Wole Soyinka", "Chinua Achebe", "Ama Ata Aidoo", "Ngugi wa Thiong’o"],
    answer: 0,
  },
  {
    question: "A long speech by one character in a play is a _______.",
    options: ["Soliloquy", "Monologue", "Aside", "Dialogue"],
    answer: 1,
  },
  {
    question: "In 'Harvest of Corruption', Aloho’s death was caused by _______.",
    options: ["Abortion complications", "Poisoning", "Gunshot", "Suicide"],
    answer: 0,
  },
  {
    question: "The rhythm of a poem refers to its _______.",
    options: ["Beat and flow", "Meaning", "Form", "Imagery"],
    answer: 0,
  },
  {
    question: "A sonnet consists of _______ lines.",
    options: ["10", "12", "14", "16"],
    answer: 2,
  },
  {
    question: "In ‘Othello’, the handkerchief symbolizes _______.",
    options: ["Love and fidelity", "Betrayal", "Fear", "Jealousy"],
    answer: 0,
  },
  {
    question: "‘He is the pillar of the house’ is an example of _______.",
    options: ["Metaphor", "Simile", "Irony", "Pun"],
    answer: 0,
  },
  {
    question: "In 'Lonely Days', Yaremi’s rejection by the villagers reflects _______.",
    options: ["Gender discrimination", "Poverty", "Modernization", "Colonialism"],
    answer: 0,
  },
  {
    question: "‘Faceless’ addresses the importance of _______.",
    options: ["Media in exposing social ills", "Politics", "Agriculture", "Education reforms"],
    answer: 0,
  },
  {
    question: "The line ‘The child is father of the man’ is an example of _______.",
    options: ["Paradox", "Irony", "Metaphor", "Allusion"],
    answer: 0,
  },
  {
    question: "‘I came, I saw, I conquered’ demonstrates _______.",
    options: ["Repetition", "Parallelism", "Contrast", "Irony"],
    answer: 1,
  },
  {
    question: "‘The Life Changer’ is set mainly in a _______.",
    options: ["University town", "Village", "City", "Market"],
    answer: 0,
  },
  {
    question: "The central idea of a literary work is called its _______.",
    options: ["Theme", "Tone", "Mood", "Plot"],
    answer: 0,
  },
  {
    question: "The atmosphere of sadness in a literary work describes its _______.",
    options: ["Tone", "Mood", "Theme", "Style"],
    answer: 1,
  },
  {
    question: "In literature, ‘style’ refers to _______.",
    options: ["The author’s choice of language and technique", "Plot development", "Narrative tone", "Rhythm"],
    answer: 0,
  },
  {
    question: "‘He is slow and steady like a tortoise’ is a _______.",
    options: ["Simile", "Metaphor", "Personification", "Alliteration"],
    answer: 0,
  },
  {
    question: "A direct comparison without using ‘like’ or ‘as’ is a _______.",
    options: ["Metaphor", "Simile", "Symbol", "Allusion"],
    answer: 0,
  },
  {
    question: "‘Faceless’ ends with _______.",
    options: ["Hope and awareness", "Tragedy", "Hopelessness", "Revenge"],
    answer: 0,
  },
  {
    question: "In poetry, enjambment means _______.",
    options: ["Continuation of a sentence to the next line", "Repetition of sounds", "Rhyming words", "End rhyme"],
    answer: 0,
  },
  {
    question: "‘The Lion and the Jewel’ portrays Baroka as _______.",
    options: ["A cunning traditionalist", "A weak old man", "A modern leader", "A foolish chief"],
    answer: 0,
  },
  {
    question: "‘Othello’ is primarily a play about _______.",
    options: ["Jealousy and betrayal", "Love and loyalty", "Revenge", "Friendship"],
    answer: 0,
  },
  {
    question: "A humorous imitation of another work is called a _______.",
    options: ["Satire", "Parody", "Farce", "Comedy"],
    answer: 1,
  },
  {
    question: "‘Harvest of Corruption’ ends with _______.",
    options: ["Justice and punishment", "Victory for corruption", "Aloho’s resurrection", "Chief’s escape"],
    answer: 0,
  },
  {
    question: "‘He spoke in parables’ indicates _______.",
    options: ["Indirect communication", "Lies", "Simplicity", "Truth"],
    answer: 0,
  },
  {
    question: "‘The flame of love burnt brightly’ shows _______.",
    options: ["Personification", "Metaphor", "Simile", "Hyperbole"],
    answer: 1,
  },
  {
    question: "‘The Life Changer’ begins with a discussion about _______.",
    options: ["JAMB admission", "Examination malpractice", "Friendship", "Politics"],
    answer: 0,
  },
  {
    question: "A work written to be performed by actors is called a _______.",
    options: ["Prose", "Drama", "Poem", "Epic"],
    answer: 1,
  },
  {
    question: "The part of a story where the problem is solved is the _______.",
    options: ["Resolution", "Climax", "Conflict", "Prologue"],
    answer: 0,
  },
  {
    question: "‘The gods are not to blame’ explores the theme of _______.",
    options: ["Fate versus free will", "War", "Corruption", "Education"],
    answer: 0,
  },
  {
    question: "In literature, the 'plot' refers to _______.",
    options: ["The sequence of events", "The theme", "The language", "The tone"],
    answer: 0,
  },
  {
    question: "‘The drums of war echoed through the land’ appeals to the sense of _______.",
    options: ["Hearing", "Sight", "Smell", "Taste"],
    answer: 0,
  },
  {
    question: "In ‘Faceless’, Kabria represents _______.",
    options: ["A caring mother and reformer", "A corrupt politician", "A lazy journalist", "A street hawker"],
    answer: 0,
  },
{
  question: "Who wrote ---- “The Lion and the Jewel”?",
  options: ["Chinua Achebe", "Wole Soyinka", "John Osborne", "August Wilson"],
  answer: 1
},
{
  question: "Which of these is a prose text recommended for JAMB/WAEC?",
  options: ["Wuthering Heights", "A Doll’s House", "Othello", "The Importance of Being Earnest"],
  answer: 0
},
{
  question: "In literature, the term ‘theme’ refers to:",
  options: ["The time when the story is set", "The main idea or underlying meaning", "The colour of the cover", "The number of chapters"],
  answer: 1
},
{
  question: "Which of these works is by Buchi Emecheta?",
  options: ["Second Class Citizen", "Invisible Man", "The Lion and the Jewel", "Fences"],
  answer: 0
},
{
  question: "In a play, the character who opposes the protagonist is called the:",
  options: ["Protagonist", "Foil", "Antagonist", "Narrator"],
  answer: 2
},
{
  question: "What is a ‘foil’ in literature?",
  options: ["A gold piece in a story", "A conductor’s baton", "A character who contrasts with another to highlight qualities", "The title of a poem"],
  answer: 2
},
{
  question: "Which drama is a Shakespearean text recommended by WAEC for objective/contextual questions?",
  options: ["Hamlet", "A Midsummer Night’s Dream", "King Lear", "Macbeth"],
  answer: 1
},
{
  question: "Which of these poetry titles is included in the WAEC/NECO list for 2021-25?",
  options: ["Caged Bird", "The Waste Land", "Paradise Lost", "Don Juan"],
  answer: 0
},
{
  question: "Which novel features the character Heathcliff?",
  options: ["Wuthering Heights", "Second Class Citizen", "Invisible Man", "Look Back in Anger"],
  answer: 0
},
{
  question: "What is ‘narrator’ in a work of prose?",
  options: ["A character who tells the story", "A minor character", "The title only", "An absent voice"],
  answer: 0
},
{
  question: "Which of these is a non-African drama text recommended for WAEC?",
  options: ["Let Me Die Alone", "The Lion and the Jewel", "Look Back in Anger", "Unexpected Joy at Dawn"],
  answer: 2
},
{
  question: "In poetry, a ‘stanza’ refers to:",
  options: ["A single word", "A group of lines forming a unit", "The title of the poem", "The rhyming scheme"],
  answer: 1
},
{
  question: "Which of these poets wrote “Not my Business”?",
  options: ["Gabriel Okara", "Niyi Osundare", "Dylan Thomas", "Maya Angelou"],
  answer: 1
},
{
  question: "Which text is by John K. Kargbo?",
  options: ["Let Me Die Alone", "Second Class Citizen", "Fences", "Wuthering Heights"],
  answer: 0
},
{
  question: "What literary device is used when human traits are given to non-human things?",
  options: ["Simile", "Metaphor", "Personification", "Alliteration"],
  answer: 2
},
{
  question: "Which of the following is a non-African prose recommended text?",
  options: ["Invisible Man", "Second Class Citizen", "Let Me Die Alone", "The Lion and the Jewel"],
  answer: 0
},
{
  question: "Which drama by Wole Soyinka is in the WAEC/NECO list?",
  options: ["Death and the King’s Horseman", "The Lion and the Jewel", "A Man for All Seasons", "Othello"],
  answer: 1
},
{
  question: "What is the function of ‘setting’ in a literary text?",
  options: ["To show the author’s name", "To provide the time and place of action", "To list characters", "To give the chapter count"],
  answer: 1
},
{
  question: "A ‘soliloquy’ is:",
  options: ["A song in a play", "A character speaking alone to the audience", "A type of poem", "A dramatic dance"],
  answer: 1
},
{
  question: "Which of these poems appears on the WAEC recommended list for 2021-25?",
  options: ["The Good-Morrow", "The Waste Land", "Do Not Go Gentle into that Good Night", "Ode to Autumn"],
  answer: 2
},
{
  question: "What is the climax in a story?",
  options: ["The introduction", "The turning point of greatest tension", "The conclusion", "A list of characters"],
  answer: 1
},
{
  question: "Which device involves repetition of initial consonant sounds?",
  options: ["Metaphor", "Onomatopoeia", "Alliteration", "Irony"],
  answer: 2
},
{
  question: "Which is a non-African drama text approved for WAEC/NECO?",
  options: ["Fences", "Unexpected Joy at Dawn", "Black Woman", "Raider of the Treasure Trove"],
  answer: 0
},
{
 question: "Which of these themes is common in ‘Second Class Citizen’?",
  options: ["Racism and gender", "Space travel", "Medieval war", "Animal rights"],
  answer: 0
},
{
  question: "Which literary form is ‘plot’ associated with?",
  options: ["Poetry only", "Drama only", "Any narrative (prose or drama)", "Music lyrics"],
  answer: 2
},
{
  question: "Which of these is an African poetry selection from the recommended list?",
  options: ["Piano and Drums", "The Pulley", "Still I Rise", "The Good-Morrow"],
  answer: 0
},
{
  question: "In drama, the term ‘act’ refers to:",
  options: ["A scene change in a play", "A type of poem", "A novel chapter", "A short story"],
  answer: 0
},
{
  question: "Which of these is by John Donne?",
  options: ["Caged Bird", "The Good-Morrow", "Binsey Poplars", "Bat"],
  answer: 1
},
{
  question: "What is ‘irony’ in literature?",
  options: ["Something expected happens exactly as expected", "A contrast between expectation and reality", "A method of cooking", "A list of chapters"],
  answer: 1
},
{
  question: "Which of these prose texts addresses African immigrant experience in Britain?",
  options: ["Unexpected Joy at Dawn", "Wuthering Heights", "Look Back in Anger", "Fences"],
  answer: 0
},
{
  question: "Which poem by Maya Angelou is recommended in the non-African poetry list?",
  options: ["Still I Rise", "The Pulley", "Bat", "The Good-Morrow"],
  answer: 0
},
{
  question: "What is the narrator’s perspective called when the story is told by ‘I’?",
  options: ["Third person", "First person", "Omniscient", "Second person"],
  answer: 1
},
{
  question: "Which of these theatre works is by August Wilson?",
  options: ["Fences", "The Lion and the Jewel", "Let Me Die Alone", "Look Back in Anger"],
  answer: 0
},
{
  question: "Which of these features a tragic hero in a Shakespearean setting?",
  options: ["Othello", "A Midsummer Night’s Dream", "Look Back in Anger", "Fences"],
  answer: 0
},
{
  question: "Which literary term describes the perception of events by a character?",
  options: ["Setting", "Point of view", "Theme", "Motif"],
  answer: 1
},
{
  question: "Which of these African prose texts is included in the WAEC/NECO list for 2021-25?",
  options: ["Unexpected Joy at Dawn", "Native Son", "A Man for All Seasons", "A Midsummer Night’s Dream"],
  answer: 0
},
{
  question: "‘Wuthering Heights’ is set in:",
  options: ["Greece", "English moors", "Nigeria", "USA"],
  answer: 1
},
{
  question: "Which of these poems was written by Dylan Thomas?",
  options: ["Do Not Go Gentle into that Good Night", "Caged Bird", "The Good-Morrow", "Bat"],
  answer: 0
},
{
  question: "Which of these is a drama text recommended for JAMB 2025-26?",
  options: ["Othello", "The Lion and the Jewel", "Harvest of Corruption", "Invisible Man"],
  answer: 2
},
{
  question: "What is a ‘symbol’ in literature?",
  options: ["A method of printing", "An object or action that suggests more than its literal meaning", "A typo", "An author’s signature"],
  answer: 1
},
{
  question: "Which of these prose authors is non-African?",
  options: ["Buchi Emecheta", "Alex Agyei-Agyiri", "Emily Brontë", "John K. Kargbo"],
  answer: 2
},
{
  question: "In poetry, ‘meter’ refers to:",
  options: ["The time signature in music", "The rhythmic pattern of lines", "The number of words in a line", "The number of syllables only"],
  answer: 1
},
{
  question: "Which is the main conflict type in literature when the character struggles with society?",
  options: ["Man vs Self", "Man vs Nature", "Man vs Society", "Man vs Machine"],
  answer: 2
},
{
  question: "Which of these works is a non-African poetry selection for WAEC?",
  options: ["The Good-Morrow", "The Leader and the Led", "Raider of the Treasure Trove", "Black Woman"],
  answer: 0
},
{
  question: "What happens in the resolution of a narrative?",
  options: ["Conflict introduced", "Climax happens", "Loose ends tied up and conclusion reached", "More new characters introduced"],
  answer: 2
},
{
  question: "Which of these works features American racial and identity issues?",
  options: ["Invisible Man", "Second Class Citizen", "Wuthering Heights", "The Lion and the Jewel"],
  answer: 0
},
{
  question: "Which type of literary work is ‘Fences’?",
  options: ["Novel", "Poem", "Drama/Play", "Short story"],
  answer: 2
},
{
  question: "Which of the following is a theme in “The Lion and the Jewel”?",
  options: ["Tradition vs Modernity", "Space exploration", "Underwater adventure", "Medieval knights"],
  answer: 0
},
  {
    question: "A play that ends on a happy note is known as a _______.",
    options: ["Tragedy", "Comedy", "Satire", "Farce"],
    answer: 1,
  },
  {
    question: "The main character in a literary work is called the _______.",
    options: ["Protagonist", "Antagonist", "Narrator", "Chorus"],
    answer: 0,
  },
  {
    question: "The struggle between two opposing forces in a story is called _______.",
    options: ["Climax", "Conflict", "Exposition", "Resolution"],
    answer: 1,
  },
  {
    question: "A reference to an event or character in another work of art is called _______.",
    options: ["Allusion", "Irony", "Metaphor", "Simile"],
    answer: 0,
  },
  {
    question: "In poetry, the repetition of consonant sounds at the beginning of words is called _______.",
    options: ["Assonance", "Alliteration", "Rhyme", "Rhythm"],
    answer: 1,
  },
  {
    question: "In drama, the turning point of the story is called the _______.",
    options: ["Climax", "Prologue", "Epilogue", "Antagonist"],
    answer: 0,
  },
  {
    question: "‘The sun smiled at me’ is an example of _______.",
    options: ["Simile", "Metaphor", "Personification", "Irony"],
    answer: 2,
  },
  {
    question: "The theme of a literary work refers to its _______.",
    options: ["Plot", "Message", "Characters", "Setting"],
    answer: 1,
  },
  {
    question: "A figure of speech that involves comparison using 'like' or 'as' is called _______.",
    options: ["Metaphor", "Simile", "Irony", "Euphemism"],
    answer: 1,
  },
  {
    question: "The term 'point of view' in prose refers to _______.",
    options: ["The author's opinion", "The narrator's perspective", "The story’s title", "The reader’s view"],
    answer: 1,
  },
  {
    question: "The use of words to express the opposite of their literal meaning is called _______.",
    options: ["Metaphor", "Irony", "Euphemism", "Oxymoron"],
    answer: 1,
  },
  {
    question: "A short story that teaches a moral lesson is called a _______.",
    options: ["Myth", "Legend", "Fable", "Sonnet"],
    answer: 2,
  },
  {
    question: "In 'Harvest of Corruption' by Frank Ogodo Ogbeche, Aloho’s death symbolizes _______.",
    options: ["Injustice", "The consequence of corruption", "Love", "Greed"],
    answer: 1,
  },
  {
    question: "The setting of 'Lonely Days' by Bayo Adebowale is _______.",
    options: ["Kufi village", "Ibadan city", "Nsukka town", "Ilorin"],
    answer: 0,
  },
  {
    question: "In 'The Lion and the Jewel', the play ends with _______.",
    options: ["Sidi marrying Lakunle", "Baroka marrying Sidi", "Baroka’s defeat", "Sidi leaving the village"],
    answer: 1,
  },
  {
    question: "In ‘Second Class Citizen’ by Buchi Emecheta, Adah’s major struggle is _______.",
    options: ["Racism and gender discrimination", "Financial stability", "Loss of family", "Education"],
    answer: 0,
  },
  {
    question: "‘And miles to go before I sleep’ is an example of _______.",
    options: ["Repetition", "Irony", "Personification", "Hyperbole"],
    answer: 0,
  },
  {
    question: "In literature, 'tone' refers to _______.",
    options: ["The mood of the story", "The writer’s attitude toward the subject", "The plot", "The point of view"],
    answer: 1,
  },
  {
    question: "‘He fought like a lion’ is an example of _______.",
    options: ["Simile", "Metaphor", "Irony", "Pun"],
    answer: 0,
  },
  {
    question: "The major theme of ‘The Life Changer’ by Khadija Abubakar Jalli is _______.",
    options: ["University life and moral transformation", "Corruption in government", "Marriage and love", "Cultural conflict"],
    answer: 0,
  },
  {
    question: "A fourteen-line poem with a fixed rhyme scheme is called a _______.",
    options: ["Ballad", "Ode", "Sonnet", "Elegy"],
    answer: 2,
  },
  {
    question: "‘The caged bird sings of freedom’ exemplifies which literary device?",
    options: ["Irony", "Symbolism", "Metaphor", "Imagery"],
    answer: 1,
  },
  {
    question: "The word 'tragedy' originated from the works of _______.",
    options: ["Romans", "Greeks", "Egyptians", "British"],
    answer: 1,
  },
  {
    question: "The line ‘Fair is foul and foul is fair’ is an example of _______.",
    options: ["Oxymoron", "Paradox", "Metaphor", "Pun"],
    answer: 1,
  },
  {
    question: "In 'Othello', who is the antagonist?",
    options: ["Othello", "Desdemona", "Iago", "Cassio"],
    answer: 2,
  },
  {
    question: "‘The drum of death beats slowly’ appeals to which sense?",
    options: ["Sight", "Sound", "Touch", "Smell"],
    answer: 1,
  },
  {
    question: "A narrative poem that tells a story is known as a _______.",
    options: ["Sonnet", "Ballad", "Ode", "Elegy"],
    answer: 1,
  },
  {
    question: "The use of exaggerated statements for effect is called _______.",
    options: ["Personification", "Hyperbole", "Paradox", "Irony"],
    answer: 1,
  },
  {
    question: "In 'Faceless' by Amma Darko, the main theme is _______.",
    options: ["Street life and social neglect", "Politics", "Education", "War"],
    answer: 0,
  },
  {
    question: "A play that criticizes human folly through humor is called _______.",
    options: ["Tragedy", "Comedy", "Satire", "Farce"],
    answer: 2,
  },
  {
    question: "‘He is the black sheep of the family’ is an example of _______.",
    options: ["Idiom", "Simile", "Metaphor", "Euphemism"],
    answer: 2,
  },
  {
    question: "The writer’s choice of words is referred to as _______.",
    options: ["Tone", "Mood", "Diction", "Theme"],
    answer: 2,
  },
  {
    question: "‘The sun set on our happiness’ symbolizes _______.",
    options: ["Evening", "Loss or sorrow", "Joy", "Freedom"],
    answer: 1,
  },
  {
    question: "A figure of speech that places two opposite ideas together is _______.",
    options: ["Hyperbole", "Oxymoron", "Paradox", "Pun"],
    answer: 1,
  },
  {
    question: "‘She sells seashells by the seashore’ is an example of _______.",
    options: ["Assonance", "Alliteration", "Onomatopoeia", "Rhyme"],
    answer: 1,
  },
  {
    question: "In literature, a flashback is used to _______.",
    options: ["Describe future events", "Reveal past events", "Add suspense", "Change setting"],
    answer: 1,
  },
  {
    question: "The statement ‘the classroom was a zoo’ is a _______.",
    options: ["Simile", "Metaphor", "Hyperbole", "Irony"],
    answer: 1,
  },
  {
    question: "A poem that expresses sorrow for the dead is a(n) _______.",
    options: ["Sonnet", "Ode", "Elegy", "Ballad"],
    answer: 2,
  },
  {
    question: "In ‘The Lion and the Jewel’, Lakunle represents _______.",
    options: ["Tradition", "Modernity", "Foolishness", "Love"],
    answer: 1,
  },
  {
    question: "‘Faceless’ by Amma Darko is set in which country?",
    options: ["Ghana", "Nigeria", "Kenya", "South Africa"],
    answer: 0,
  },
  {
    question: "‘The Life Changer’ begins with a conversation between _______.",
    options: ["Mother and daughter", "Two students", "Lecturer and student", "Two friends"],
    answer: 0,
  },
  {
    question: "A short speech by a character heard only by the audience is called _______.",
    options: ["Dialogue", "Aside", "Monologue", "Soliloquy"],
    answer: 1,
  },
  {
    question: "‘He is as brave as a lion’ is a _______.",
    options: ["Simile", "Metaphor", "Irony", "Allusion"],
    answer: 0,
  },
  {
    question: "In literature, ‘mood’ refers to _______.",
    options: ["The emotional atmosphere of a work", "The writer’s opinion", "The theme", "The tone"],
    answer: 0,
  },
  {
    question: "A poem without rhyme is called _______.",
    options: ["Blank verse", "Free verse", "Sonnet", "Ballad"],
    answer: 1,
  },
  {
    question: "‘The thunder roared angrily’ is an example of _______.",
    options: ["Hyperbole", "Personification", "Irony", "Metaphor"],
    answer: 1,
  },
  {
    question: "In ‘Harvest of Corruption’, Chief Haladu Ade-Amaka represents _______.",
    options: ["Integrity", "Corruption and greed", "Justice", "Peace"],
    answer: 1,
  },
  {
    question: "The use of language that appeals to the senses is known as _______.",
    options: ["Imagery", "Tone", "Mood", "Irony"],
    answer: 0,
  },
  {
    question: "In 'Othello', Desdemona dies because _______.",
    options: ["She betrayed Othello", "Othello was deceived by Iago", "Cassio killed her", "She fled Venice"],
    answer: 1,
  },
  {
    question: "The main purpose of literature is to _______.",
    options: ["Entertain and educate", "Inform", "Instruct", "Debate"],
    answer: 0,
  },
  
  ],
  
  //Government questions here
  Government: [
    {
  question: "Government can best be defined as?",
  options: ["The study of politics", "The machinery and process through which rules are made and enforced", "The art of ruling", "The system of voting"],
  answer: 1
},
{
  question: "Which of the following is NOT a function of government?",
  options: ["Maintenance of law and order", "Provision of social amenities", "Promotion of anarchy", "Defense of the country"],
  answer: 2
},
{
  question: "The three arms of government are?",
  options: ["Executive, Legislative, and Judiciary", "President, Ministers, and Governors", "Parliament, Army, and Police", "Federal, State, and Local"],
  answer: 0
},
{
  question: "Which arm of government interprets the law?",
  options: ["Legislative", "Executive", "Judiciary", "Civil service"],
  answer: 2
},
{
  question: "The main function of the legislature is to?",
  options: ["Enforce laws", "Interpret laws", "Make laws", "Execute laws"],
  answer: 2
},
{
  question: "A government in which one person rules is known as?",
  options: ["Oligarchy", "Monarchy", "Aristocracy", "Democracy"],
  answer: 1
},
{
  question: "Democracy is based on the principle of?",
  options: ["Rule of law", "Military force", "Anarchy", "Secrecy"],
  answer: 0
},
{
  question: "Which of these is a feature of dictatorship?",
  options: ["Free press", "Checks and balances", "One-man rule", "Rule of law"],
  answer: 2
},
{
  question: "The rule of law implies that?",
  options: ["The rich are above the law", "Law is supreme and everyone is equal before it", "Judges make laws", "Police enforce rules without law"],
  answer: 1
},
{
  question: "Which of the following is a characteristic of a federal system?",
  options: ["Centralized government", "Division of powers", "Absence of constitution", "Unitary legislature"],
  answer: 1
},
{
  question: "Who was the first Prime Minister of Nigeria?",
  options: ["Nnamdi Azikiwe", "Abubakar Tafawa Balewa", "Obafemi Awolowo", "Ahmadu Bello"],
  answer: 1
},
{
  question: "The head of government in a parliamentary system is?",
  options: ["President", "Prime Minister", "Governor-General", "Speaker"],
  answer: 1
},
{
  question: "Which of the following countries practices a federal system?",
  options: ["France", "Ghana", "Nigeria", "Togo"],
  answer: 2
},
{
  question: "The Nigerian Independence Constitution was enacted in?",
  options: ["1951", "1954", "1960", "1963"],
  answer: 2
},
{
  question: "Who presides over the Nigerian Senate?",
  options: ["The Speaker", "The Chief Justice", "The Senate President", "The Vice President"],
  answer: 2
},
{
  question: "The 1979 Nigerian Constitution introduced what system of government?",
  options: ["Confederal", "Unitary", "Parliamentary", "Presidential"],
  answer: 3
},
{
  question: "A constitution can be defined as?",
  options: ["Rules and regulations of an organization", "A body of laws defining the powers of government", "Manifesto of a political party", "Collection of parliamentary acts"],
  answer: 1
},
{
  question: "The process of voting in Nigeria is supervised by?",
  options: ["The Senate", "INEC", "National Assembly", "Judiciary"],
  answer: 1
},
{
  question: "Public opinion is important because?",
  options: ["It allows citizens to influence government decisions", "It replaces elections", "It makes people obey laws", "It determines salaries of officials"],
  answer: 0
},
{
  question: "Which of the following is a pressure group in Nigeria?",
  options: ["NLC", "INEC", "NASS", "FRSC"],
  answer: 0
},
{
  question: "Franchise means?",
  options: ["Right to vote", "Right to education", "Right to free speech", "Right to property"],
  answer: 0
},
{
  question: "The right to vote and be voted for is known as?",
  options: ["Civil right", "Political right", "Social right", "Economic right"],
  answer: 1
},
{
  question: "Which of the following is NOT a type of constitution?",
  options: ["Rigid", "Flexible", "Unitary", "Written"],
  answer: 2
},
{
  question: "The judiciary helps to prevent abuse of power through?",
  options: ["Rule of law", "Martial law", "Emergency rule", "Presidential order"],
  answer: 0
},
{
  question: "Which of these organs of government implements laws?",
  options: ["Executive", "Legislature", "Judiciary", "Electoral Commission"],
  answer: 0
},
{
  question: "A constitution that can be amended easily is called?",
  options: ["Rigid", "Flexible", "Unwritten", "Federal"],
  answer: 1
},
{
  question: "The head of the local government is called?",
  options: ["Chairman", "Governor", "Mayor", "Secretary"],
  answer: 0
},
{
  question: "In a democracy, sovereignty belongs to?",
  options: ["The President", "The People", "The Army", "The Court"],
  answer: 1
},
{
  question: "Which of these best describes separation of powers?",
  options: ["Powers are shared among arms of government", "All powers belong to one arm", "Each state is independent", "Military runs the government"],
  answer: 0
},
{
  question: "Which document contains the basic principles of government?",
  options: ["Constitution", "Manifesto", "Gazette", "Decree"],
  answer: 0
},
{
  question: "Military government is usually characterized by?",
  options: ["Democratic elections", "Decrees", "Constitutional amendment", "Rule of law"],
  answer: 1
},
{
  question: "Which of these is a feature of a unitary government?",
  options: ["Division of powers", "Single central authority", "Autonomy of regions", "Dual citizenship"],
  answer: 1
},
{
  question: "The process of bringing government closer to the people is called?",
  options: ["Decentralization", "Centralization", "Privatization", "Nationalization"],
  answer: 0
},
{
  question: "Who is regarded as the father of modern democracy?",
  options: ["Aristotle", "Abraham Lincoln", "Plato", "Locke"],
  answer: 1
},
{
  question: "Which of these is NOT a type of citizenship?",
  options: ["By birth", "By registration", "By employment", "By naturalization"],
  answer: 2
},
{
  question: "The Nigerian civil service operates under which principle?",
  options: ["Merit system", "Patronage", "Nepotism", "Favoritism"],
  answer: 0
},
{
  question: "Who is the head of the Nigerian civil service?",
  options: ["Secretary to the Government", "Head of Service", "Chief Judge", "Permanent Secretary"],
  answer: 1
},
{
  question: "Delegated legislation means?",
  options: ["Laws made by courts", "Laws made by the legislature", "Laws made by subordinate bodies under authority", "Laws made by international organizations"],
  answer: 2
},
{
  question: "The first military coup in Nigeria occurred in?",
  options: ["1960", "1963", "1966", "1979"],
  answer: 2
},
{
  question: "The pre-colonial Hausa/Fulani system was based on?",
  options: ["Emirate system", "Democracy", "Confederalism", "Feudalism"],
  answer: 0
},
{
  question: "Indirect rule in Nigeria was introduced by?",
  options: ["Lord Lugard", "Obafemi Awolowo", "Tafawa Balewa", "Nnamdi Azikiwe"],
  answer: 0
},
{
  question: "One of the disadvantages of indirect rule was that?",
  options: ["It encouraged local participation", "It ignored traditional authority", "It was cheap to operate", "It respected culture"],
  answer: 1
},
{
  question: "Political parties aim primarily to?",
  options: ["Educate citizens", "Gain political power", "Support NGOs", "Organize sports"],
  answer: 1
},
{
  question: "The symbol of national unity in Nigeria is the?",
  options: ["Supreme Court", "National Assembly", "President", "Police Force"],
  answer: 2
},
{
  question: "The organ responsible for conducting elections in Nigeria is?",
  options: ["INEC", "NASS", "Judiciary", "Army"],
  answer: 0
},
{
  question: "The Nigerian flag was designed by?",
  options: ["Taiwo Akinkunmi", "Herbert Macaulay", "Obafemi Awolowo", "Ahmadu Bello"],
  answer: 0
},
{
  question: "The national anthem promotes the spirit of?",
  options: ["Unity and patriotism", "Division and competition", "Ethnic loyalty", "Political ambition"],
  answer: 0
},
{
  question: "Which of the following is NOT a political party in Nigeria’s Second Republic?",
  options: ["NPN", "UPN", "SDP", "NPP"],
  answer: 2
},
{
  question: "A state is different from a nation because?",
  options: ["A state must have sovereignty", "A nation is always larger", "A state has no defined territory", "A nation always has a constitution"],
  answer: 0
},
{
  question: "The judiciary acts as a check on the legislature through?",
  options: ["Judicial review", "Executive order", "Impeachment", "Budget control"],
  answer: 0
},
{
  question: "In a democracy, the principle of majority rule implies?",
  options: ["Minorities have no rights", "The majority decides but minority rights are respected", "Only elites decide", "All decisions are unanimous"],
  answer: 1
},
{
  question: "The concept of sovereignty means that a state has?",
  options: ["The power to make and enforce laws within its territory", "Limited power under international law", "No control over citizens", "Authority given by other states"],
  answer: 0
},
{
  question: "Which of the following best describes a confederation?",
  options: ["A union of sovereign states with a weak central government", "A single government with centralized power", "A military alliance", "A government led by monarchs"],
  answer: 0
},
{
  question: "Which of these was Nigeria’s first political party?",
  options: ["NCNC", "NNDP", "NPC", "AG"],
  answer: 1
},
{
  question: "The main objective of the NCNC was to?",
  options: ["Fight for Nigeria’s independence", "Promote trade", "Support colonial rule", "Unify the North only"],
  answer: 0
},
{
  question: "The 1946 Richards Constitution was criticized mainly because?",
  options: ["It lacked Nigerian participation", "It created regions", "It introduced federalism", "It gave too much power to Nigerians"],
  answer: 0
},
{
  question: "The Lyttleton Constitution of 1954 introduced?",
  options: ["Parliamentary government", "True federalism", "Unitary system", "Presidential system"],
  answer: 1
},
{
  question: "Nigeria became a republic in?",
  options: ["1960", "1963", "1966", "1979"],
  answer: 1
},
{
  question: "The executive arm of government is responsible for?",
  options: ["Making laws", "Interpreting laws", "Implementing laws", "Repealing laws"],
  answer: 2
},
{
  question: "Checks and balances are designed to?",
  options: ["Ensure accountability among branches of government", "Encourage military rule", "Weaken the judiciary", "Empower the legislature only"],
  answer: 0
},
{
  question: "Which of the following systems of government encourages equal representation of states?",
  options: ["Unitary", "Confederal", "Federal", "Monarchical"],
  answer: 2
},
{
  question: "The first military head of state in Nigeria was?",
  options: ["Yakubu Gowon", "Aguiyi Ironsi", "Olusegun Obasanjo", "Murtala Mohammed"],
  answer: 1
},
{
  question: "Which of these leaders introduced the Structural Adjustment Programme (SAP)?",
  options: ["Yakubu Gowon", "Murtala Mohammed", "Ibrahim Babangida", "Olusegun Obasanjo"],
  answer: 2
},
{
  question: "The 1999 Constitution of Nigeria provides for?",
  options: ["Unitary system", "Confederal system", "Presidential system", "Parliamentary system"],
  answer: 2
},
{
  question: "The federal character principle aims to?",
  options: ["Ensure fairness and equal representation of all regions", "Favor one region", "Encourage foreign influence", "Reduce state autonomy"],
  answer: 0
},
{
  question: "Who is the commander-in-chief of the armed forces in Nigeria?",
  options: ["The Chief of Army Staff", "The President", "The Defence Minister", "The Senate President"],
  answer: 1
},
{
  question: "A bill becomes law when it is?",
  options: ["Passed by the legislature only", "Approved by the executive after legislative passage", "Approved by judiciary", "Discussed in parliament"],
  answer: 1
},
{
  question: "Public corporations are established to?",
  options: ["Make profit only", "Provide essential services", "Weaken private firms", "Control prices"],
  answer: 1
},
{
  question: "Which of these is a feature of the civil service?",
  options: ["Political neutrality", "Active partisanship", "Elected leadership", "Temporary service"],
  answer: 0
},
{
  question: "Which of the following is a merit of federalism?",
  options: ["Duplication of functions", "Local participation in government", "Concentration of power", "Regional conflict"],
  answer: 1
},
{
  question: "The idea of the separation of powers was popularized by?",
  options: ["John Locke", "Baron de Montesquieu", "Plato", "Aristotle"],
  answer: 1
},
{
  question: "Which of the following documents guarantees citizens’ rights?",
  options: ["The Constitution", "Government gazette", "Electoral Act", "Official bulletin"],
  answer: 0
},
{
  question: "Pressure groups influence government through?",
  options: ["Lobbying and strikes", "Winning elections", "Passing bills", "Military action"],
  answer: 0
},
{
  question: "The electoral body in Nigeria is?",
  options: ["EFCC", "INEC", "NASS", "NLC"],
  answer: 1
},
{
  question: "The head of state in a parliamentary system is?",
  options: ["President", "Prime Minister", "Governor-General", "Chief Judge"],
  answer: 0
},
{
  question: "One advantage of democracy is that it?",
  options: ["Encourages public participation", "Ignores public opinion", "Promotes dictatorship", "Suppresses minorities"],
  answer: 0
},
{
  question: "Which of the following best describes a totalitarian government?",
  options: ["Freedom of speech is guaranteed", "The ruler controls all aspects of life", "Rule of law is supreme", "Power is decentralized"],
  answer: 1
},
{
  question: "Delegated legislation is also known as?",
  options: ["Statutory instruments", "Acts of Parliament", "Judicial laws", "Private bills"],
  answer: 0
},
{
  question: "In Nigeria, the judiciary is headed by?",
  options: ["Attorney General", "Chief Justice of Nigeria", "Solicitor-General", "President"],
  answer: 1
},
{
  question: "Civil liberty refers to?",
  options: ["Rights guaranteed by the constitution", "Duties to the state", "Obedience to leaders", "Freedom of government"],
  answer: 0
},
{
  question: "Which of the following is NOT an agent of political socialization?",
  options: ["Family", "School", "Army", "Media"],
  answer: 2
},
{
  question: "Universal adult suffrage means that?",
  options: ["Only men vote", "All qualified adults have the right to vote", "Only the rich can vote", "Voting is optional for women"],
  answer: 1
},
{
  question: "A by-election is conducted when?",
  options: ["There is a general election", "A seat becomes vacant between elections", "A government dissolves", "A party is formed"],
  answer: 1
},
{
  question: "A one-party state is characterized by?",
  options: ["Multiple political parties", "Competition among parties", "Only one legal political party", "No political participation"],
  answer: 2
},
{
  question: "In the Nigerian 1979 Constitution, the term limit for a president is?",
  options: ["Five years", "Four years", "Six years", "Unlimited"],
  answer: 1
},
{
  question: "Judicial independence is achieved when judges are?",
  options: ["Appointed by the public", "Free from political control", "Elected by parliament", "Appointed by soldiers"],
  answer: 1
},
{
  question: "The African Union replaced which organization?",
  options: ["ECOWAS", "OAU", "SADC", "UNESCO"],
  answer: 1
},
{
  question: "Nigeria became a member of the United Nations in?",
  options: ["1960", "1963", "1958", "1970"],
  answer: 0
},
{
  question: "Which of these is a regional organization in Africa?",
  options: ["ECOWAS", "NATO", "EU", "ASEAN"],
  answer: 0
},
{
  question: "Diplomacy refers to?",
  options: ["Peaceful management of international relations", "Use of force in politics", "National elections", "Military training"],
  answer: 0
},
{
  question: "The Cold War was a conflict between?",
  options: ["USA and USSR", "Britain and France", "China and Japan", "Nigeria and Ghana"],
  answer: 0
},
{
  question: "The Commonwealth is made up of countries that?",
  options: ["Speak French", "Were colonized by Britain", "Are in Europe", "Are in Asia"],
  answer: 1
},
{
  question: "Who appoints ministers in Nigeria?",
  options: ["Chief Justice", "President", "Senate President", "Governor"],
  answer: 1
},
{
  question: "Local government revenue sources include?",
  options: ["Grants and taxes", "Foreign loans only", "Petroleum export", "Tariff collection"],
  answer: 0
},
{
  question: "Who chairs the National Council of State in Nigeria?",
  options: ["The President", "The Vice President", "The Chief Justice", "The Senate President"],
  answer: 0
},
{
  question: "A referendum is used to?",
  options: ["Make constitutional decisions by citizens", "Select ministers", "Elect local chairmen", "Confirm presidential nominees"],
  answer: 0
},
{
  question: "A coup d’état means?",
  options: ["Legal change of government", "Forceful seizure of power by the military", "Election victory", "Peaceful protest"],
  answer: 1
},
{
  question: "The judiciary upholds the rule of law by?",
  options: ["Enforcing court decisions", "Ignoring the legislature", "Dissolving parliament", "Issuing decrees"],
  answer: 0
},
{
  question: "A constitution that is not written down in a single document is called?",
  options: ["Written", "Flexible", "Unwritten", "Rigid"],
  answer: 2
},
{
  question: "The head of the Commonwealth of Nations is?",
  options: ["King/Queen of Britain", "UN Secretary-General", "President of the USA", "Prime Minister of Britain"],
  answer: 0
},
{
  question: "Which of these principles guides Nigeria’s foreign policy?",
  options: ["Non-alignment", "Colonialism", "Apartheid", "Isolationism"],
  answer: 0
}

  ], 
  
  //CRS questions here
  Crs: [
    
  ],
  
  
  Agriculture: [
    
  ],
    //Economics questions here
  Economics: [ 
    { 
      question: "The following are problems in economics except",
      options: ["what to produce", "for whom to produce for", "where to produce", "how to produce"],
      answer: 2,
  }, 
  {
  question: "Which of these is not a type of tax?",
  options: ["direct tax", "proportional tax", "fixed", "indirect"],
  answer: 2,
}, 
{
  question: "Which of the following is not a type of bar chart?",
  options: ["component bar chart", "multiple bar chat", "simple bar chart", "colourful bar chart"],
  answer: 3,
}
  ],
  
  
  //Civic education questions here
  
  Civic_Education: [
    
  ],
  
  //data processing questions here
  Data_Processing: [
    
  ]
};