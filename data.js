
// data.js
const registeredUsers = [
  { 
    fullName: "Olaborede James", 
    password: "jamieblack" 
  },
  { 
    fullName: "Dahunsi Opemipo", 
    password: "opemipodahunsi123" 
  },
  {
    fullName: "Oluwalade Mary",
    email: "maryololade231"
  },
  {
    fullName: "Ajenifuja Kehinde",
    password: "kehindeajenifuja442"
  },
  {
    fullName: "Oderinde Olamide",
    password: "olamideoderinde343"
  },
  {
    fullName: "Omobolanle Akinwale",
    password: "akinwaleomobolanle16"
  },
  {
    fullName: "Jane Doe",
    password: "lordkronos"
  }

];






// subject data

const subjectsData = [
  /*
    {
        id: 1,
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
    */
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
    image: "./BackgroundEraser_20231102_035359819.png",
  },
    {
    name: "Michael Adeyemi",
    role: "SS3 Student",
    message:
      "The CBT practice tests and lessons really prepared me for WAEC. I scored higher than I imagined!",
    image: "./BackgroundEraser_20231102_035846684.png",
  },
    {
    name: "Mrs. Okafor",
    role: "Parent",
    message:
      "I love the way Aplus Tutors combines discipline and encouragement. My son now enjoys studying.",
    image: "./BackgroundEraser_20231102_035749901.png",
  },
    {
    name: "Tolu Adebayo",
    role: "JAMB Candidate",
    message:
      "Aplus Tutors made learning fun and interactive. I passed my exams on my first attempt!",
    image: "./BackgroundEraser_20231102_035749901.png",
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
]


// --- Multi-Subject Quiz Data ---
const quizData = {

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


// Exam prep data

const WAEC_PREP_DATA = [
  /*
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
    
    */
    
    // Add more WAEC specific lessons here
];



// Classroom video lesson data 

const COURSE_DATA = [
  /*
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
    */
    
    // Add more video lessons here for control and management
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
const subjects = [
  "Mathematics", "English", "Physics", "Chemistry", "Biology", "Economics", "Literature", "Crs", "Government", "Civic_Education", "Data_Processing", "Agriculture"
]


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
    image: "./images (56).jpeg",
    imageAlt: "image of triangle",
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
  
  
  //differentiation questions starts here
  {
  question: "Using first principles, find f'(x) for f(x) = x<sup>2</sup>.",
  options: ["2x", "x", "x<sup>2</sup>", "1"],
  answer: 0,
},
{
  question: "Using first principles, find f'(x) for f(x) = 3x.",
  options: ["3", "x", "0", "6x"],
  answer: 0,
},
{
  question: "Differentiate: y = x<sup>3</sup>.",
  options: ["3x<sup>2</sup>", "x<sup>2</sup>", "x<sup>3</sup>", "9x<sup>2</sup>"],
  answer: 0,
},
{
  question: "Differentiate: y = 5x<sup>4</sup>.",
  options: ["20x<sup>3</sup>", "5x<sup>3</sup>", "x<sup>4</sup>", "20x<sup>4</sup>"],
  answer: 0,
},
{
  question: "Differentiate: y = 7 (constant).",
  options: ["0", "7", "1", "7x"],
  answer: 0,
},
{
  question: "Differentiate: y = x<sup>5</sup> − 2x<sup>3</sup> + x.",
  options: ["5x<sup>4</sup> − 6x<sup>2</sup> + 1", "5x<sup>4</sup> − 6x + 1", "x<sup>4</sup> − 6x<sup>2</sup> + 1", "5x<sup>4</sup> − 6x<sup>2</sup>"],
  answer: 0,
},
{
  question: "Differentiate: y = sin x.",
  options: ["cos x", "−cos x", "sin x", "−sin x"],
  answer: 0,
},
{
  question: "Differentiate: y = cos x.",
  options: ["−sin x", "sin x", "cos x", "−cos x"],
  answer: 0,
},
{
  question: "Differentiate: y = tan x.",
  options: ["sec<sup>2</sup> x", "csc<sup>2</sup> x", "sec x tan x", "1/cos x"],
  answer: 0,
},
{
  question: "Differentiate: y = e<sup>x</sup>.",
  options: ["e<sup>x</sup>", "x e<sup>x</sup>", "1", "ln e"],
  answer: 0,
},
{
  question: "Differentiate: y = ln x (x>0).",
  options: ["1/x", "ln x", "x", "−1/x"],
  answer: 0,
},
{
  question: "Use the product rule: y = (2x)(x<sup>2</sup> + 1). Find y'.",
  options: ["2(x<sup>2</sup> + 1) + (2x)(2x)", "2x(2x) + (x<sup>2</sup> + 1)(2)", "2x(x<sup>2</sup> + 1)", "4x<sup>2</sup> + 2"],
  answer: 0,
},
{
  question: "Use the product rule: y = x<sup>2</sup>·sin x. Find y'.",
  options: ["2x sin x + x<sup>2</sup> cos x", "x<sup>2</sup> cos x", "2x cos x + x<sup>2</sup> sin x", "2x sin x − x<sup>2</sup> cos x"],
  answer: 0,
},
{
  question: "Use the quotient rule: y = (x<sup>2</sup> + 1)/x. Find y'.",
  options: ["(2x·x − (x<sup>2</sup> + 1)·1)/x<sup>2</sup>", "(2x + 1)/x", "(2x)/x", "1 − 1/x<sup>2</sup>"],
  answer: 0,
},
{
  question: "Differentiate using chain rule: y = (3x + 2)<sup>2</sup>.",
  options: ["2(3x + 2)(3)", "2(3x + 2)", "6x + 4", "3(3x + 2)"],
  answer: 0,
},
{
  question: "Differentiate: y = (x<sup>3</sup> + 1)<sup>4</sup>.",
  options: ["4(x<sup>3</sup> + 1)<sup>3</sup>·3x<sup>2</sup>", "4(x<sup>3</sup> + 1)<sup>3</sup>", "12x<sup>2</sup>(x<sup>3</sup> + 1)<sup>4</sup>", "3x<sup>2</sup>(x<sup>3</sup> + 1)<sup>3</sup>"],
  answer: 0,
},
{
  question: "Differentiate implicitly: x<sup>2</sup> + y<sup>2</sup> = 25. Find dy/dx.",
  options: ["−x/y", "y/x", "−y/x", "x/y"],
  answer: 0,
},
{
  question: "Differentiate implicitly: x + xy + y = 0. Find dy/dx.",
  options: ["dy/dx = −(1 + y)/(x + 1)", "dy/dx = −(1 + x)/(y + 1)", "dy/dx = −1/(x + 1)", "dy/dx = (1 + y)/(1 + x)"],
  answer: 0,
},
{
  question: "Find the second derivative: y = x<sup>3</sup>.",
  options: ["y'' = 6x", "y'' = 3x", "y'' = 3", "y'' = 0"],
  answer: 0,
},
{
  question: "Find d/dx of y = x<sup>−2</sup>.",
  options: ["−2x<sup>−3</sup>", "2x<sup>−1</sup>", "−x<sup>−2</sup>", "2x<sup>−3</sup>"],
  answer: 0,
},
{
  question: "Differentiate: y = √x = x<sup>1/2</sup>.",
  options: ["(1/2)x<sup>−1/2</sup>", "x<sup>1/2</sup>", "(1/2)x<sup>1/2</sup>", "2√x"],
  answer: 0,
},
{
  question: "Differentiate: y = (2x + 1)/(x − 1).",
  options: ["((2)(x − 1) − (2x + 1)(1))/(x − 1)<sup>2</sup>", "(2x + 1)'/(x − 1)'", "(2x + 1)/(x − 1)<sup>2</sup>", "(2x + 1)'(x − 1) − (2x + 1)(x − 1)'"],
  answer: 0,
},
{
  question: "Find slope of tangent to y = x<sup>2</sup> at x = 3.",
  options: ["2·3 = 6", "3", "9", "5"],
  answer: 0,
},
{
  question: "Differentiate: y = ln(3x).",
  options: ["1/x", "1/(3x)", "3/x", "1/(x·ln 3)"],
  answer: 0,
},
{
  question: "Differentiate: y = e<sup>2x</sup>.",
  options: ["2e<sup>2x</sup>", "e<sup>2x</sup>", "2x e<sup>2x</sup>", "e<sup>x</sup>"],
  answer: 0,
},
{
  question: "Differentiate: y = arctan x.",
  options: ["1/(1 + x<sup>2</sup>)", "1/(1 − x<sup>2</sup>)", "−1/(1 + x<sup>2</sup>)", "1/x"],
  answer: 0,
},
{
  question: "Differentiate: y = sec x.",
  options: ["sec x tan x", "sec<sup>2</sup> x", "tan x", "csc x"],
  answer: 0,
},
{
  question: "Differentiate: y = (x<sup>2</sup> + 1)<sup>−1</sup>.",
  options: ["−2x(x<sup>2</sup> + 1)<sup>−2</sup>", "2x(x<sup>2</sup> + 1)<sup>−2</sup>", "−x(x<sup>2</sup> + 1)<sup>−2</sup>", "2x(x<sup>2</sup> + 1)"],
  answer: 0,
},
{
  question: "Differentiate: y = ln(x<sup>2</sup> + 1).",
  options: ["(2x)/(x<sup>2</sup> + 1)", "1/(x<sup>2</sup> + 1)", "2/(x<sup>2</sup> + 1)", "x/(x<sup>2</sup> + 1)"],
  answer: 0,
},
{
  question: "Find d/dx of y = x·e<sup>x</sup> (product rule).",
  options: ["e<sup>x</sup>(1 + x)", "x e<sup>x</sup>", "e<sup>x</sup>", "x + e<sup>x</sup>"],
  answer: 0,
},
{
  question: "Differentiate: y = (3x<sup>2</sup> − x)(x + 2). Use product rule.",
  options: ["(6x − 1)(x + 2) + (3x<sup>2</sup> − x)(1)", "(3x<sup>2</sup> − x)'(x + 2)'", "3x( x +2) + (3x<sup>2</sup> − x)(1)", "(6x − 1)(x + 2)"],
  answer: 0,
},
{
  question: "Differentiate: y = x/(x + 1).",
  options: ["1/(x + 1)<sup>2</sup>", "1/(x + 1)", "1/(x + 1)<sup>3</sup>", "−1/(x + 1)<sup>2</sup>"],
  answer: 0,
},
{
  question: "Differentiate: y = sin(2x).",
  options: ["2 cos(2x)", "cos(2x)", "sin 2x", "−2 sin(2x)"],
  answer: 0,
},
{
  question: "Differentiate: y = cos(3x + 1).",
  options: ["−3 sin(3x + 1)", "−sin(3x + 1)", "3 cos(3x + 1)", "sin(3x + 1)"],
  answer: 0,
},
{
  question: "Find stationary points of y = x<sup>3</sup> − 3x<sup>2</sup> + 2 and classify (max/min/inflection).",
  options: ["y' = 3x<sup>2</sup> − 6x; stationary at x = 0 and 2; x=0 inflection, x=2 local min", "y' = 3x<sup>2</sup> − 6x; stationary at x = 0 and 2; x=0 local max, x=2 local min", "y' = 3x<sup>2</sup> − 6x; stationary at x = 1 only", "No stationary points"],
  answer: 0,
},
{
  question: "Differentiate: y = (ln x)<sup>2</sup>.",
  options: ["2 ln x · (1/x)", "2 ln x", "(ln x)/x", "1/x<sup>2</sup>"],
  answer: 0,
},
{
  question: "Differentiate: y = x<sup>x</sup> (use ln-differentiation).",
  options: ["y' = x<sup>x</sup>(ln x + 1)", "y' = x<sup>x</sup> ln x", "y' = x<sup>x</sup>·x", "y' = x<sup>x−1</sup>(ln x + 1)"],
  answer: 0,
},
{
  question: "Differentiate: y = (1 + x)<sup>1/3</sup>.",
  options: ["(1/3)(1 + x)<sup>−2/3</sup>", "(1/3)(1 + x)<sup>1/3</sup>", "3(1 + x)<sup>−2/3</sup>", "(1 + x)<sup>−2/3</sup>"],
  answer: 0,
},
{
  question: "Differentiate: y = cot x.",
  options: ["−csc<sup>2</sup> x", "csc<sup>2</sup> x", "−sec<sup>2</sup> x", "sec<sup>2</sup> x"],
  answer: 0,
},
{
  question: "A balloon rises so that its height above ground is h(t) = 5t<sup>2</sup> metres at t seconds. Find velocity at t = 3s.",
  options: ["dh/dt = 10t so at t=3, v = 30 m/s", "v = 45 m/s", "v = 15 m/s", "v = 9 m/s"],
  answer: 0,
},
{
  question: "Differentiate: y = (2x + 3)<sup>−2</sup>.",
  options: ["−4(2x + 3)<sup>−3</sup>", "−2(2x + 3)<sup>−2</sup>", "4(2x + 3)<sup>−3</sup>", "−2(2x + 3)<sup>−3</sup>"],
  answer: 0,
},
{
  question: "Differentiate: y = arcsin x.",
  options: ["1/√(1 − x<sup>2</sup>)", "1/(1 − x<sup>2</sup>)", "−1/√(1 − x<sup>2</sup>)", "x/√(1 − x<sup>2</sup>)"],
  answer: 0,
},
{
  question: "Differentiate: y = (x<sup>2</sup> + 2x + 1) = (x + 1)<sup>2</sup>. Find y'.",
  options: ["2(x + 1)", "x + 1", "x<sup>2</sup> + 2x + 1", "2x + 1"],
  answer: 0,
},
{
  question: "Differentiate: y = (3x)/(x<sup>2</sup> + 1).",
  options: ["(3(x<sup>2</sup> + 1) − 3x·2x)/(x<sup>2</sup> + 1)<sup>2</sup>", "3/(x<sup>2</sup> + 1)", "3x/(x<sup>2</sup> + 1)", "−3x/(x<sup>2</sup> + 1)<sup>2</sup>"],
  answer: 0,
},
{
  question: "Differentiate: y = sinh x (hyperbolic sine).",
  options: ["cosh x", "sinh x", "e<sup>x</sup>", "tanh x"],
  answer: 0,
},
{
  question: "Differentiate: y = cosh(2x).",
  options: ["2 sinh(2x)", "sinh(2x)", "2 cosh(2x)", "cosh(2x)"],
  answer: 0,
},
{
  question: "Find derivative of y = 1/(x<sup>3</sup> + 1).",
  options: ["−3x<sup>2</sup>/(x<sup>3</sup> + 1)<sup>2</sup>", "3x<sup>2</sup>/(x<sup>3</sup> + 1)<sup>2</sup>", "−1/(x<sup>3</sup> + 1)<sup>2</sup>", "−3/(x<sup>3</sup> + 1)"],
  answer: 0,
},
{
  question: "Differentiate and simplify: y = x<sup>4</sup>·ln x.",
  options: ["4x<sup>3</sup> ln x + x<sup>3</sup>", "4x<sup>3</sup> ln x + x<sup>4</sup>", "x<sup>4</sup>/x + ln x", "4x<sup>3</sup> + ln x"],
  answer: 0,
},
{
  question: "Differentiate using chain rule: y = (sin x)<sup>3</sup>.",
  options: ["3(sin x)<sup>2</sup> cos x", "3 sin x cos x", "sin<sup>3</sup> x", "cos x"],
  answer: 0,
},
{
  question: "Differentiate: y = (x<sup>2</sup> − 1)^(1/2).",
  options: ["(1/2)(x<sup>2</sup> − 1)<sup>−1/2</sup>·2x = x/(√(x<sup>2</sup> − 1))", "x<sup>2</sup> − 1", "1/(2√(x<sup>2</sup> − 1))", "2x(1/2)(x<sup>2</sup> − 1)<sup>−1/2</sup>"],
  answer: 0,
},
{
  question: "Differentiate: y = ln( sin x ) for x where sin x>0.",
  options: ["cot x", "tan x", "csc x", "sec x"],
  answer: 0,
},
{
  question: "Differentiate: y = (x<sup>2</sup> + x)<sup>3</sup>.",
  options: ["3(x<sup>2</sup> + x)<sup>2</sup>(2x + 1)", "3(x<sup>2</sup> + x)<sup>2</sup>", "(2x + 1)(x<sup>2</sup> + x)", "6x(x + 1)"],
  answer: 0,
},
{
  question: "Differentiate: y = arccos x.",
  options: ["−1/√(1 − x<sup>2</sup>)", "1/√(1 − x<sup>2</sup>)", "1/(1 − x<sup>2</sup>)", "−1/(1 − x<sup>2</sup>)"],
  answer: 0,
},
  {
    question: "Solve for x and y: 2x + y = 7, x - y = 1.",
    options: ["x = 3, y = 1", "x = 2, y = 3", "x = 4, y = -1", "x = 1, y = 5"],
    answer: 0
  },
  {
    question: "Find the values of x and y if 3x + 2y = 12 and 2x - y = 1.",
    options: ["x = 2, y = 3", "x = 3, y = 1.5", "x = 2.5, y = 2", "x = 2, y = 2"],
    answer: 1
  },
  {
    question: "Solve for x and y: x + y = 10, 2x - y = 5.",
    options: ["x = 5, y = 5", "x = 7, y = 3", "x = 6, y = 4", "x = 4, y = 6"],
    answer: 1
  },
  {
    question: "If 5x + 3y = 19 and x - y = 1, find y.",
    options: ["y = 2", "y = 3", "y = 4", "y = 1"],
    answer: 1
  },
  {
    question: "The solution of 4x - y = 11 and 3x + y = 9 is:",
    options: ["x = 2, y = 3", "x = 4, y = 1", "x = 2, y = 1", "x = 3, y = 2"],
    answer: 1
  },
  {
    question: "Solve for x: 2x + 3y = 12, x + y = 5.",
    options: ["x = 3, y = 2", "x = 2, y = 3", "x = 3.5, y = 1.5", "x = 4, y = 1"],
    answer: 0
  },
  {
    question: "If 3x - 2y = 4 and 2x + y = 7, find x.",
    options: ["x = 2", "x = 3", "x = 4", "x = 5"],
    answer: 1
  },
  {
    question: "The equations 2x + y = 5 and 4x + 2y = 10 are:",
    options: ["Consistent and independent", "Consistent and dependent", "Inconsistent", "Parallel lines"],
    answer: 1
  },
  {
    question: "Solve: x + 3y = 9, 2x - y = 3.",
    options: ["x = 3, y = 2", "x = 2, y = 3", "x = 1, y = 4", "x = 4, y = 1"],
    answer: 0
  },
  {
    question: "If x + y = 8 and x - y = 2, find x.",
    options: ["x = 3", "x = 4", "x = 5", "x = 6"],
    answer: 2
  },
  {
    question: "Solve for y: 5x + 2y = 16, 3x - y = 5.",
    options: ["y = 2", "y = 3", "y = 4", "y = 5"],
    answer: 0
  },
  {
    question: "If 2x + 5y = 20 and x - 2y = -4, find x.",
    options: ["x = 4", "x = 2", "x = 3", "x = 6"],
    answer: 0
  },
  {
    question: "Solve: 7x - 3y = 11, 2x + y = 4.",
    options: ["x = 2, y = 0", "x = 1, y = 2", "x = 3, y = -2", "x = 2, y = -1"],
    answer: 0
  },
  {
    question: "If 4x + y = 10 and x + y = 6, find y.",
    options: ["y = 2", "y = 3", "y = 4", "y = 5"],
    answer: 1
  },
  {
    question: "Find x and y: 5x - 2y = 8, x + y = 4.",
    options: ["x = 2, y = 2", "x = 3, y = 1", "x = 4, y = 0", "x = 2.5, y = 1.5"],
    answer: 1
  },
  {
    question: "If x + 2y = 10 and 2x - 3y = -4, find y.",
    options: ["y = 2", "y = 3", "y = 4", "y = 5"],
    answer: 2
  },
  {
    question: "Solve the simultaneous equations: 3x + y = 9, x - y = 1.",
    options: ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 1", "x = 5, y = 0"],
    answer: 1
  },
  {
    question: "If 6x + 2y = 10 and 3x + y = 5, the equations are:",
    options: ["Consistent", "Inconsistent", "Identical", "Parallel"],
    answer: 2
  },
  {
    question: "If 2x - y = 3 and 3x + y = 12, find x.",
    options: ["x = 3", "x = 2", "x = 4", "x = 5"],
    answer: 0
  },
  {
    question: "Solve for y: x + 2y = 7, 3x - y = 8.",
    options: ["y = 2", "y = 3", "y = 4", "y = 5"],
    answer: 0
  },
  {
    question: "If 5x + 4y = 14 and x - 2y = 1, find x.",
    options: ["x = 2", "x = 3", "x = 4", "x = 5"],
    answer: 1
  },
  {
    question: "Solve: 4x + y = 11, 2x + y = 7.",
    options: ["x = 2, y = 3", "x = 1, y = 4", "x = 2, y = 5", "x = 3, y = 5"],
    answer: 0
  },
  {
    question: "Find the value of y: 3x + 2y = 12, 2x - y = 1.",
    options: ["y = 3", "y = 2", "y = 4", "y = 5"],
    answer: 0
  },
  {
    question: "If x + y = 10 and x - y = 2, find y.",
    options: ["y = 4", "y = 3", "y = 5", "y = 6"],
    answer: 2
  },
  {
    question: "Solve for x: 3x - y = 5, x + y = 7.",
    options: ["x = 3, y = 4", "x = 4, y = 3", "x = 2, y = 5", "x = 5, y = 2"],
    answer: 1
  },
  {
    question: "If 2x + 3y = 7 and 4x + 6y = 14, then the equations are:",
    options: ["Inconsistent", "Consistent and dependent", "Consistent and independent", "Parallel lines"],
    answer: 1
  },
  {
    question: "Solve: 2x + y = 4, x + 2y = 5.",
    options: ["x = 1, y = 2", "x = 2, y = 1", "x = 3, y = 1", "x = 1, y = 1.5"],
    answer: 0
  },
  {
    question: "Find x and y: 4x - y = 5, 2x + y = 7.",
    options: ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 1", "x = 1, y = 4"],
    answer: 0
  },
  {
    question: "If 3x + y = 8 and 5x - y = 12, find x.",
    options: ["x = 2", "x = 3", "x = 4", "x = 5"],
    answer: 1
  },
  {
    question: "Solve: 7x + 2y = 16, 3x - y = 5.",
    options: ["x = 2, y = 1", "x = 3, y = 1", "x = 2, y = 2", "x = 3, y = 2"],
    answer: 3
  },
  {
    question: "The equations 2x + 3y = 7 and 4x + 6y = 14 represent:",
    options: ["The same line", "Two parallel lines", "Two intersecting lines", "No line"],
    answer: 0
  },
  {
    question: "If 4x - 3y = 5 and 2x + 3y = 13, find x.",
    options: ["x = 2", "x = 3", "x = 4", "x = 5"],
    answer: 2
  },
  {
    question: "Solve for y: 6x + 2y = 16, 3x + y = 8.",
    options: ["y = 0", "y = 1", "y = 2", "y = 3"],
    answer: 1
  },
  {
    question: "If x + y = 9 and 3x - y = 11, find x.",
    options: ["x = 5", "x = 4", "x = 6", "x = 7"],
    answer: 0
  },
  {
    question: "Solve for y: 4x + 3y = 18, x + y = 6.",
    options: ["y = 3", "y = 2", "y = 4", "y = 5"],
    answer: 0
  },
  {
    question: "Find x: 3x - 2y = 1, x + y = 4.",
    options: ["x = 2", "x = 3", "x = 4", "x = 5"],
    answer: 1
  },
  {
    question: "If 2x + 5y = 10 and x + y = 3, find y.",
    options: ["y = 1", "y = 2", "y = 3", "y = 4"],
    answer: 0
  },
  {
    question: "Solve: 2x - 3y = 1, 4x + y = 11.",
    options: ["x = 2, y = 3", "x = 3, y = 1", "x = 2, y = 2", "x = 3, y = 2"],
    answer: 1
  },
  {
    question: "If 5x + y = 16 and 3x - y = 8, find x.",
    options: ["x = 3", "x = 4", "x = 5", "x = 6"],
    answer: 1
  },
  {
    question: "Solve: x + y = 5, 2x - 3y = -4.",
    options: ["x = 1, y = 4", "x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 1"],
    answer: 0
  },
  {
    question: "Find x and y: 3x + 2y = 8, 2x - y = 1.",
    options: ["x = 2, y = 1", "x = 1, y = 2", "x = 3, y = 1", "x = 2, y = 2"],
    answer: 0
  },
  {
    question: "If 4x + 3y = 18 and 3x + 2y = 13, find y.",
    options: ["y = 2", "y = 3", "y = 4", "y = 5"],
    answer: 0
  },
  {
    question: "Solve for x: 5x - y = 9, 2x + y = 8.",
    options: ["x = 3", "x = 2", "x = 4", "x = 1"],
    answer: 0
  },
  {
    question: "If x + y = 7 and 3x - y = 9, find y.",
    options: ["y = 2", "y = 3", "y = 4", "y = 5"],
    answer: 1
  },
  {
    question: "Find x and y: 6x - y = 11, 2x + y = 5.",
    options: ["x = 2, y = 1", "x = 3, y = 1", "x = 2, y = 2", "x = 3, y = 2"],
    answer: 1
  },
  {
    question: "Solve for x: 3x + 4y = 18, x - y = 2.",
    options: ["x = 4, y = 2", "x = 3, y = 1", "x = 4, y = 1", "x = 5, y = 3"],
    answer: 0
  },
  {
    question: "If 2x + 3y = 9 and 3x - 2y = 4, find x.",
    options: ["x = 2", "x = 3", "x = 4", "x = 5"],
    answer: 0
  },
  {
    question: "Solve: x + y = 8, 3x - y = 4.",
    options: ["x = 3, y = 5", "x = 2, y = 6", "x = 4, y = 4", "x = 1, y = 7"],
    answer: 0
  },
  {
    question: "If 4x + 2y = 10 and 3x - y = 5, find y.",
    options: ["y = 1", "y = 2", "y = 3", "y = 4"],
    answer: 2
  },
  {
    question: "Solve: 2x + y = 6, 3x + 2y = 10.",
    options: ["x = 2, y = 2", "x = 1, y = 4", "x = 3, y = 1", "x = 2, y = 3"],
    answer: 0
  },
  {
    question: "If 5x - 2y = 8 and 3x + y = 7, find x.",
    options: ["x = 2", "x = 3", "x = 4", "x = 5"],
    answer: 1
  },
  
  //quadratic equations 
  {
    question: "Simplify: (x + 2)(x + 3).",
    options: ["x² + 6", "x² + 5x + 6", "x² + 3x + 2", "x² + 2x + 3"],
    answer: 1
  },
  {
    question: "Expand: (2x − 3)(x + 4).",
    options: ["2x² + 5x − 12", "2x² − 5x − 12", "2x² + 8x − 3", "2x² + 8x + 12"],
    answer: 0
  },
  {
    question: "Simplify: (x + 1)².",
    options: ["x² + 2x + 1", "x² + 1", "x² + 1x + 1", "x² + 2x"],
    answer: 0
  },
  {
    question: "Find the product of (x + 2) and (x − 2).",
    options: ["x² + 4", "x² − 4", "x² + 2x − 2", "x² − 2x + 2"],
    answer: 1
  },
  {
    question: "Simplify: (2x + 3)(x − 5).",
    options: ["2x² − 7x − 15", "2x² + 7x − 15", "2x² − 10x + 3", "2x² + 10x − 3"],
    answer: 0
  },
  {
    question: "If f(x) = x² − 4x + 3, find f(2).",
    options: ["3", "1", "0", "-1"],
    answer: 1
  },
  {
    question: "Simplify: (3x + 2)(x + 4).",
    options: ["3x² + 14x + 8", "3x² + 12x + 8", "3x² + 6x + 8", "x² + 12x + 8"],
    answer: 0
  },
  {
    question: "Factorize: x² + 5x + 6.",
    options: ["(x + 2)(x + 3)", "(x − 2)(x − 3)", "(x + 1)(x + 6)", "(x − 1)(x − 6)"],
    answer: 0
  },
  {
    question: "Factorize completely: x² − 9.",
    options: ["(x − 3)(x + 3)", "(x − 9)(x + 1)", "(x − 1)(x + 9)", "(x − 3)²"],
    answer: 0
  },
  {
    question: "Simplify: (x − 2)³.",
    options: ["x³ − 8", "x³ − 6x² + 12x − 8", "x³ − 4x² + 4x − 8", "x³ − 2x² + 4x − 8"],
    answer: 1
  },
  {
    question: "Find the remainder when x³ + 3x² + 3x + 1 is divided by x + 1.",
    options: ["0", "1", "2", "−1"],
    answer: 0
  },
  {
    question: "Simplify: (x + 5)(x² − 5x + 25).",
    options: ["x³ + 125", "x³ − 125", "x³ + 25x + 125", "x³ + 50x + 125"],
    answer: 0
  },
  {
    question: "If p(x) = x² − 2x − 3, find p(3).",
    options: ["0", "3", "−3", "−6"],
    answer: 1
  },
  {
    question: "Factorize: x² − x − 6.",
    options: ["(x − 3)(x + 2)", "(x + 3)(x − 2)", "(x − 1)(x − 6)", "(x − 2)(x + 3)"],
    answer: 0
  },
  {
    question: "Expand: (2x + 1)(x − 3).",
    options: ["2x² − 5x − 3", "2x² − x − 3", "2x² + 5x − 3", "2x² − 6x + 1"],
    answer: 0
  },
  {
    question: "Find the coefficient of x² in (x + 3)(x − 4).",
    options: ["1", "3", "−1", "2"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 3x + 2) − (x² + x − 1).",
    options: ["2x + 3", "2x + 1", "x + 3", "2x + 2"],
    answer: 1
  },
  {
    question: "Find the constant term in (x + 2)(x − 3).",
    options: ["6", "−6", "5", "−5"],
    answer: 1
  },
  {
    question: "If f(x) = x³ − 2x² + x − 3, find f(1).",
    options: ["−3", "−4", "−5", "−2"],
    answer: 0
  },
  {
    question: "Simplify: (x + 1)(x² − x + 1).",
    options: ["x³ + 1", "x³ − 1", "x² + 1", "x³ − x + 1"],
    answer: 0
  },
  {
    question: "Factorize: x³ − 8.",
    options: ["(x − 2)(x² + 2x + 4)", "(x + 2)(x² − 2x + 4)", "(x − 4)(x² + 4x + 4)", "(x + 4)(x² − 4x + 4)"],
    answer: 0
  },
  {
    question: "Find the sum of the roots of x² − 5x + 6 = 0.",
    options: ["5", "6", "1", "−5"],
    answer: 0
  },
  {
    question: "Find the product of the roots of x² + 3x + 2 = 0.",
    options: ["2", "3", "1", "−2"],
    answer: 0
  },
  {
    question: "Simplify: (x + 2y)(x − 2y).",
    options: ["x² + 4y²", "x² − 4y²", "x² − 2y²", "x² + 2y²"],
    answer: 1
  },
  {
    question: "Expand: (x − 3)(x² + 3x + 9).",
    options: ["x³ − 27", "x³ + 27", "x³ − 9x − 27", "x³ + 9x + 27"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 4x + 3) ÷ (x + 3).",
    options: ["x + 1", "x + 2", "x + 3", "x + 4"],
    answer: 0
  },
  {
    question: "If f(x) = 2x³ − 3x² + x − 5, find f(0).",
    options: ["−5", "−3", "0", "1"],
    answer: 0
  },
  {
    question: "Factorize: x² + 7x + 12.",
    options: ["(x + 3)(x + 4)", "(x − 3)(x − 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)"],
    answer: 0
  },
  {
    question: "Simplify: (3x − 2)(x² + 2x + 4).",
    options: ["3x³ − 2", "3x³ + 2x² + 12x − 8", "3x³ + 6x² + 12x − 8", "3x³ − 2x² + 12x + 8"],
    answer: 2
  },
  {
    question: "Find the remainder when x³ − 2x² + 3x − 5 is divided by x − 1.",
    options: ["−3", "−4", "−5", "−2"],
    answer: 1
  },
  {
    question: "If x = −1 is a root of x³ + x² − x − 1 = 0, factorize the polynomial.",
    options: ["(x + 1)(x² − 1)", "(x + 1)(x² − x − 1)", "(x + 1)(x² + x + 1)", "(x + 1)(x² − 2)"],
    answer: 1
  },
  {
    question: "Simplify: (x + 2)³.",
    options: ["x³ + 6x² + 12x + 8", "x³ + 3x² + 3x + 2", "x³ + 4x² + 8x + 8", "x³ + 5x² + 10x + 8"],
    answer: 0
  },
  {
    question: "If f(x) = 3x² − 2x + 5, find f(−2).",
    options: ["19", "15", "17", "21"],
    answer: 0
  },
  {
    question: "Factorize: x² − 16.",
    options: ["(x − 4)(x + 4)", "(x − 8)(x + 8)", "(x − 2)(x + 8)", "(x − 4)²"],
    answer: 0
  },
  {
    question: "Find the coefficient of x³ in (2x + 1)(x − 3)(x + 4).",
    options: ["2", "1", "0", "3"],
    answer: 0
  },
  {
    question: "Simplify: (x − 1)(x² + x + 1).",
    options: ["x³ − 1", "x³ + 1", "x³ − x + 1", "x³ + x − 1"],
    answer: 0
  },
  {
    question: "Expand: (x + 2y)(x² − 2xy + 4y²).",
    options: ["x³ + 8y³", "x³ − 8y³", "x³ − 6xy² + 8y³", "x³ − 4xy² + 8y³"],
    answer: 0
  },
  {
    question: "Factorize: 2x² − 8x.",
    options: ["2x(x − 4)", "x(2x − 4)", "2(x − 4)", "2x(x + 4)"],
    answer: 0
  },
  {
    question: "Simplify: (x² − 9) ÷ (x − 3).",
    options: ["x + 3", "x − 3", "x² + 3x", "x² − 3x"],
    answer: 0
  },
  {
    question: "Find the remainder when x³ − 6x² + 11x − 6 is divided by x − 1.",
    options: ["−6", "0", "5", "1"],
    answer: 1
  },
  {
    question: "If f(x) = x³ + 3x² + 3x + 1, find f(−1).",
    options: ["0", "−1", "1", "2"],
    answer: 0
  },
  {
    question: "Simplify: (x + 3)(x² − 3x + 9).",
    options: ["x³ + 27", "x³ − 27", "x³ − 9", "x³ + 9x + 27"],
    answer: 0
  },
  {
    question: "Factorize: x³ + 8y³.",
    options: ["(x + 2y)(x² − 2xy + 4y²)", "(x + 2y)(x² + 2xy + 4y²)", "(x − 2y)(x² + 2xy + 4y²)", "(x − 2y)(x² − 2xy + 4y²)"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 3x + 2)(x + 1).",
    options: ["x³ + 4x² + 5x + 2", "x³ + 3x² + 5x + 3", "x³ + 2x² + 3x + 2", "x³ + 4x² + 6x + 2"],
    answer: 0
  },
  {
    question: "If p(x) = x² + 2x + 1, find p(−1).",
    options: ["0", "1", "2", "−1"],
    answer: 0
  },
  {
    question: "Expand: (x + 4)(x − 5).",
    options: ["x² − x − 20", "x² − x + 20", "x² + 9x + 20", "x² − 9x − 20"],
    answer: 0
  },
  {
    question: "Find the constant term in (x + 1)(x² + x + 1).",
    options: ["1", "2", "3", "0"],
    answer: 0
  },
  {
    question: "Simplify: (x + 2)(x − 1)(x + 3).",
    options: ["x³ + 4x² + x − 6", "x³ + 4x² − x − 6", "x³ + 2x² + 3x − 6", "x³ − 2x² + 3x + 6"],
    answer: 1
  },
  
  
  //polynomials and remainder theorem
  
  {
    question: "Factorize completely: x² − 9.",
    options: ["(x − 3)(x + 3)", "(x − 9)(x + 1)", "(x − 1)(x + 9)", "(x − 3)²"],
    answer: 0
  },
  {
    question: "Find the remainder when x³ − 2x² + 3x − 5 is divided by x − 1.",
    options: ["−3", "−4", "0", "−2"],
    answer: 2
  },
  {
    question: "Factorize: x² + 5x + 6.",
    options: ["(x + 2)(x + 3)", "(x − 2)(x − 3)", "(x + 1)(x + 6)", "(x − 1)(x − 6)"],
    answer: 0
  },
  {
    question: "If f(x) = x³ − 4x² + x + 6, find f(2).",
    options: ["0", "2", "−2", "6"],
    answer: 0
  },
  {
    question: "Simplify: (x + 2)(x − 2).",
    options: ["x² + 4", "x² − 4", "x² − 2x + 2", "x² + 2x − 2"],
    answer: 1
  },
  {
    question: "Factorize completely: x³ + 8.",
    options: ["(x + 2)(x² − 2x + 4)", "(x + 2)(x² + 2x + 4)", "(x − 2)(x² + 2x + 4)", "(x − 2)(x² − 2x + 4)"],
    answer: 0
  },
  {
    question: "Using the remainder theorem, find the remainder when 2x³ − 3x² + x − 5 is divided by x − 2.",
    options: ["−5", "1", "−3", "7"],
    answer: 3
  },
  {
    question: "Factorize: x² − 7x + 12.",
    options: ["(x − 3)(x − 4)", "(x − 6)(x − 2)", "(x − 4)(x − 3)", "(x − 2)(x − 6)"],
    answer: 2
  },
  {
    question: "Find the sum of the roots of x² − 6x + 8 = 0.",
    options: ["6", "8", "−6", "−8"],
    answer: 0
  },
  {
    question: "Find the product of the roots of x² − 5x + 6 = 0.",
    options: ["6", "5", "1", "−6"],
    answer: 0
  },
  {
    question: "Factorize: x³ − 27.",
    options: ["(x − 3)(x² + 3x + 9)", "(x − 3)(x² − 3x + 9)", "(x + 3)(x² − 3x + 9)", "(x + 3)(x² + 3x + 9)"],
    answer: 1
  },
  {
    question: "If f(x) = x³ − 3x² + 4, find f(1).",
    options: ["2", "0", "1", "−2"],
    answer: 0
  },
  {
    question: "Factorize: 2x² − 8x.",
    options: ["2x(x − 4)", "x(2x − 4)", "2(x − 4)", "2x(x + 4)"],
    answer: 0
  },
  {
    question: "Simplify: (x + 1)(x² − x + 1).",
    options: ["x³ + 1", "x³ − 1", "x² + 1", "x³ − x + 1"],
    answer: 0
  },
  {
    question: "Using remainder theorem, find remainder when x³ + 2x² − x + 1 is divided by x + 1.",
    options: ["0", "2", "−2", "1"],
    answer: 3
  },
  {
    question: "Factorize: x³ − 8x.",
    options: ["x(x − 2)(x + 2)", "x(x − 4)(x + 2)", "x(x − 1)(x + 8)", "x(x − 8)(x + 1)"],
    answer: 0
  },
  {
    question: "Simplify: (x + 2)² − (x − 2)².",
    options: ["8x", "4x", "2x", "x² − 4"],
    answer: 0
  },
  {
    question: "Factorize completely: x³ − x² − 4x + 4.",
    options: ["(x − 1)(x + 2)(x − 2)", "(x + 1)(x − 2)(x + 2)", "(x − 2)(x² + x − 2)", "(x + 2)(x² − x − 2)"],
    answer: 0
  },
  {
    question: "Find remainder when x³ + 4x² − 5x + 2 is divided by x − 1.",
    options: ["0", "2", "1", "−1"],
    answer: 2
  },
  {
    question: "Factorize: x² + 2x − 15.",
    options: ["(x + 5)(x − 3)", "(x − 5)(x + 3)", "(x − 3)(x + 5)", "(x + 3)(x − 5)"],
    answer: 0
  },
  {
    question: "Using remainder theorem, if f(x) = x³ − 3x + 4, find remainder when divided by x − 2.",
    options: ["0", "2", "−2", "6"],
    answer: 3
  },
  {
    question: "Factorize: 4x² − 9.",
    options: ["(2x − 3)(2x + 3)", "(4x − 3)(x + 3)", "(2x − 9)(2x + 1)", "(4x − 1)(x + 9)"],
    answer: 0
  },
  {
    question: "Find the remainder when 3x³ − 5x² + 2x − 1 is divided by x + 1.",
    options: ["−7", "1", "0", "5"],
    answer: 0
  },
  {
    question: "Factorize: x³ − x² − x + 1.",
    options: ["(x − 1)(x² − 1)", "(x − 1)²(x + 1)", "(x + 1)(x − 1)²", "(x + 1)(x² − 1)"],
    answer: 1
  },
  {
    question: "Simplify: (x − 3)(x + 2) + (x − 3)(x − 2).",
    options: ["2x(x − 3)", "x² − 5", "x² − 9", "2x² − 3x − 10"],
    answer: 0
  },
  {
    question: "Factorize completely: x³ + 3x² − 4x − 12.",
    options: ["(x + 3)(x − 2)(x + 2)", "(x − 3)(x + 2)(x − 2)", "(x + 2)(x − 3)(x − 2)", "(x − 2)(x + 3)(x − 2)"],
    answer: 0
  },
  {
    question: "Find remainder when x³ − 6x² + 11x − 6 is divided by x − 1.",
    options: ["0", "1", "−1", "2"],
    answer: 0
  },
  {
    question: "Factorize: x³ − x.",
    options: ["x(x − 1)(x + 1)", "x(x − 1)²", "x²(x − 1)", "x(x² − 1)"],
    answer: 0
  },
  {
    question: "Using remainder theorem, find remainder when x³ − 2x² + 3x − 5 is divided by x − 2.",
    options: ["1", "−1", "3", "0"],
    answer: 0
  },
  {
    question: "Factorize completely: x³ + 2x² − x − 2.",
    options: ["(x + 2)(x + 1)(x − 1)", "(x + 2)(x − 1)²", "(x − 2)(x + 1)(x − 1)", "(x + 1)(x + 2)(x − 1)"],
    answer: 0
  },
  {
    question: "Simplify: (x + 2)³ − (x − 1)³.",
    options: ["3x² + 9x + 7", "3x² + 7x + 5", "x³ + 3x² + 6x + 7", "x³ − 3x² + 6x − 7"],
    answer: 2
  },
  {
    question: "Factorize: x² − 5x + 6.",
    options: ["(x − 2)(x − 3)", "(x + 2)(x + 3)", "(x − 1)(x − 6)", "(x + 1)(x + 6)"],
    answer: 0
  },
  {
    question: "Find remainder when 2x³ − 3x² + x − 5 is divided by x − 1.",
    options: ["−5", "−3", "−1", "−2"],
    answer: 3
  },
  {
    question: "Factorize: x³ − 6x² + 11x − 6.",
    options: ["(x − 1)(x − 2)(x − 3)", "(x − 1)(x − 2)²", "(x − 3)(x − 2)(x − 1)", "(x − 1)(x − 3)(x − 2)"],
    answer: 0
  },
  {
    question: "Simplify: (x + 1)(x² + 2x + 1).",
    options: ["x³ + 3x² + 3x + 1", "x³ + 2x² + 2x + 1", "x³ + x² + 2x + 1", "x³ + 3x² + 2x + 1"],
    answer: 0
  },
  {
    question: "Using remainder theorem, find remainder when x³ − x² + 2x − 1 is divided by x − 1.",
    options: ["0", "2", "1", "−1"],
    answer: 0
  },
  {
    question: "Factorize completely: x³ + 4x² + x − 6.",
    options: ["(x + 3)(x + 2)(x − 1)", "(x + 2)(x − 3)(x + 1)", "(x + 1)(x + 2)(x − 3)", "(x − 1)(x + 2)(x + 3)"],
    answer: 0
  },
  {
    question: "Factorize: 3x³ − 12x².",
    options: ["3x²(x − 4)", "3x²(x + 4)", "3x(x − 4)", "3x(x + 4)"],
    answer: 0
  },
  {
    question: "Simplify: (x − 2)(x² + 2x + 4).",
    options: ["x³ − 8", "x³ + 8", "x³ − 4", "x³ + 4"],
    answer: 0
  },
  {
    question: "Factorize completely: x³ − 2x² − x + 2.",
    options: ["(x − 1)(x − 2)(x + 1)", "(x + 1)(x − 2)(x − 1)", "(x − 2)(x + 2)(x − 1)", "(x − 1)(x + 2)(x − 1)"],
    answer: 0
  },
  
  
  //set and venn diagrams
  {
  question: "If A = {1, 2, 3} and B = {2, 3, 4}, find A ∩ B.",
  options: ["{1, 4}", "{2, 3}", "{1, 2, 3, 4}", "{1, 2, 3}"],
  answer: 1
},
{
  question: "If U = {1, 2, 3, 4, 5} and A = {2, 4}, find A' (the complement of A).",
  options: ["{2, 4}", "{1, 3, 5}", "{1, 2, 3, 5}", "{3, 4, 5}"],
  answer: 1
},
{
  question: "Given A = {a, b}, B = {b, c}, find A ∪ B.",
  options: ["{a, b}", "{a, b, c}", "{b, c}", "{a, c}"],
  answer: 1
},
{
  question: "The number of subsets of a set with 4 elements is:",
  options: ["4", "8", "16", "32"],
  answer: 2
},
{
  question: "If A = {1, 2, 3} and B = {3, 4, 5}, find A - B.",
  options: ["{1, 2}", "{3}", "{4, 5}", "{1, 2, 3, 4, 5}"],
  answer: 0
},
{
  question: "In a Venn diagram, 10 students like Maths, 8 like English, and 3 like both. How many like either Maths or English?",
  options: ["15", "12", "18", "5"],
  answer: 0
},
{
  question: "If U = {1, 2, 3, 4, 5, 6}, A = {1, 2, 3}, and B = {4, 5}, find A ∪ B.",
  options: ["{1, 2, 3, 4, 5}", "{1, 2, 3, 4, 5, 6}", "{4, 5, 6}", "{1, 2, 3}"],
  answer: 0
},
{
  question: "If A ⊆ B, which of the following is true?",
  options: ["All elements of B are in A", "A and B are disjoint", "All elements of A are in B", "A is empty"],
  answer: 2
},
{
  question: "In a class, 20 students play football, 15 play basketball, 5 play both. How many play only football?",
  options: ["15", "5", "20", "10"],
  answer: 0
},
{
  question: "If A = {x | x is an even number less than 10}, list A.",
  options: ["{2, 4, 6, 8}", "{1, 3, 5, 7}", "{2, 4, 6}", "{1, 2, 3, 4, 5, 6, 7, 8, 9}"],
  answer: 0
},
{
  question: "Given A = {1, 2}, B = {2, 3}, C = {3, 4}, find A ∩ B ∩ C.",
  options: ["{2}", "{3}", "{}", "{1}"],
  answer: 2
},
{
  question: "If U = {a, b, c, d, e}, A = {a, c}, B = {b, c, d}, find A ∪ B.",
  options: ["{a, b, c, d}", "{a, b, c}", "{a, c, d}", "{b, c, d, e}"],
  answer: 0
},
{
  question: "A survey shows 12 students like tea, 10 like coffee, and 5 like both. How many like either tea or coffee?",
  options: ["17", "10", "12", "5"],
  answer: 0
},
{
  question: "If A = {1, 2, 3, 4}, what is the number of elements in the power set of A?",
  options: ["4", "8", "16", "12"],
  answer: 2
},
{
  question: "In a Venn diagram, if |A ∩ B| = 3, |A| = 7, |B| = 5, find |A ∪ B|.",
  options: ["9", "10", "12", "15"],
  answer: 0
},
{
  question: "If A = {x | x is a prime number less than 10}, list A.",
  options: ["{2, 3, 5, 7}", "{1, 2, 3, 5, 7}", "{2, 3, 5}", "{3, 5, 7}"],
  answer: 0
},
{
  question: "If A = {1, 2, 3} and B = {3, 4, 5}, find A ∪ B.",
  options: ["{1, 2, 3, 4, 5}", "{1, 2, 3}", "{3, 4, 5}", "{1, 2, 4, 5}"],
  answer: 0
},
{
  question: "In a class of 30 students, 18 study Maths, 12 study English, 5 study both. How many study neither?",
  options: ["5", "7", "10", "15"],
  answer: 1
},
{
  question: "If A = {1, 3, 5}, B = {2, 3, 4}, find A - B.",
  options: ["{1, 5}", "{3}", "{2, 4}", "{1, 3, 5}"],
  answer: 0
},
{
  question: "The complement of the universal set U is:",
  options: ["Empty set", "U", "Undefined", "U itself"],
  answer: 0
},
{
  question: "If |A| = 5, |B| = 7, |A ∩ B| = 3, find |A ∪ B|.",
  options: ["12", "9", "10", "15"],
  answer: 2
},
{
  question: "A survey shows 8 students like cats, 10 like dogs, 3 like both. How many like only dogs?",
  options: ["7", "10", "8", "3"],
  answer: 0
},
{
  question: "If A = {x | x < 6, x ∈ N}, list A.",
  options: ["{1, 2, 3, 4, 5}", "{0, 1, 2, 3, 4, 5}", "{1, 2, 3, 4}", "{0, 1, 2, 3, 4}"],
  answer: 0
},
{
  question: "If A = {1, 2, 3}, B = {2, 3, 4}, find B - A.",
  options: ["{4}", "{2, 3}", "{1}", "{1, 4}"],
  answer: 0
},
{
  question: "If |U| = 20, |A| = 12, |B| = 9, |A ∩ B| = 4, find the number not in A or B.",
  options: ["7", "8", "5", "6"],
  answer: 0
},
{
  question: "Find A ∩ (B ∪ C) given sets A, B, C.",
  options: ["{x | x ∈ A and x ∈ B or C}", "{x | x ∈ A or B and C}", "{x | x ∈ B}", "{x | x ∈ C}"],
  answer: 0
},
{
  question: "If A = {a, b, c}, B = {c, d, e}, find A ∩ B.",
  options: ["{c}", "{a, b}", "{d, e}", "{}"],
  answer: 0
},
{
  question: "In a class, 15 students like tea, 20 like coffee, 5 like both. How many like only tea?",
  options: ["10", "15", "20", "5"],
  answer: 0
},
{
  question: "If A ∪ B = B, then which of the following is true?",
  options: ["A is empty", "A = B", "B is empty", "A ∩ B = {}"],
  answer: 1
},
{
  question: "The number of elements in the set {x | x is an odd number less than 10} is:",
  options: ["4", "5", "3", "6"],
  answer: 0
},
{
  question: "If |A| = 6, |B| = 8, |A ∩ B| = 3, find |A ∪ B|.",
  options: ["11", "12", "9", "14"],
  answer: 0
},
{
  question: "Find the complement of A if U = {1, 2, 3, 4, 5}, A = {2, 4}.",
  options: ["{1, 3, 5}", "{2, 4}", "{1, 2, 3, 5}", "{3, 5}"],
  answer: 0
},
{
  question: "If A = {1, 2, 3} and B = {3, 4, 5}, find (A ∪ B) - (A ∩ B).",
  options: ["{1, 2, 4, 5}", "{3}", "{1, 2, 3, 4, 5}", "{4, 5}"],
  answer: 0
},
{
  question: "In a Venn diagram, if |A| = 10, |B| = 8, |A ∩ B| = 3, find |A - B|.",
  options: ["7", "3", "5", "10"],
  answer: 2
},
{
  question: "If U = {1, 2, 3, 4, 5, 6}, A = {1, 3, 5}, B = {2, 4, 6}, find A ∪ B.",
  options: ["U", "{1, 2, 3, 4}", "{1, 3, 5}", "{2, 4, 6}"],
  answer: 0
},
{
  question: "Find the number of elements in the union of disjoint sets A and B if |A| = 6, |B| = 5.",
  options: ["11", "10", "6", "5"],
  answer: 0
},
{
  question: "If A ⊆ B and B ⊆ A, then which statement is true?",
  options: ["A = B", "A ∩ B = ∅", "A ∪ B = B", "A is empty"],
  answer: 0
},
{
  question: "If |U| = 50, |A| = 20, |B| = 30, |A ∩ B| = 10, find the number not in A or B.",
  options: ["10", "15", "20", "25"],
  answer: 0
},
{
  question: "Simplify (2³ × 2⁻⁴) × 2².",
  options: ["2¹", "2²", "2³", "2⁰"],
  answer: 1
},
{
  question: "Simplify (x²y⁻³)⁴.",
  options: ["x⁸y⁻¹²", "x⁸y¹²", "x⁶y⁻¹²", "x⁴y⁻¹²"],
  answer: 0
},
{
  question: "Simplify (3² × 3⁻³) ÷ 3⁻².",
  options: ["3¹", "3⁰", "3²", "3⁻¹"],
  answer: 0
},
{
  question: "Simplify (a³b⁻²)² × (a⁻¹b)³.",
  options: ["a³b⁻¹", "a⁵b⁻¹", "a⁴b⁻¹", "a⁶b⁻²"],
  answer: 2
},
{
  question: "Simplify ((2x³)⁴ × (x²y)³) ÷ (4x²y²)².",
  options: ["2³x¹⁰y³", "2⁴x¹⁰y³", "2³x¹⁰y²", "2³x⁹y³"],
  answer: 0
},
{
  question: "Simplify (x⁵y⁻²) ÷ (x²y³).",
  options: ["x³y⁻⁵", "x³y⁵", "x⁷y⁻⁵", "x³y⁻¹"],
  answer: 0
},
{
  question: "Simplify (a²b³)⁰ × (ab⁻¹)².",
  options: ["a²b⁻²", "ab⁻²", "a²b²", "a²b⁻¹"],
  answer: 0
},
{
  question: "Simplify (4⁰ × 2³ × 2⁻⁵)³.",
  options: ["2⁻⁶", "2⁻⁴", "2⁰", "2⁻³"],
  answer: 0
},
{
  question: "Simplify (x⁻²y³)⁴ ÷ (x²y⁻¹)³.",
  options: ["x⁻¹⁴y¹⁵", "x⁻¹⁴y¹⁰", "x⁻¹⁴y⁹", "x⁻¹⁴y¹²"],
  answer: 1
},
{
  question: "Simplify (3a²b³)² × (2a⁻¹b)³.",
  options: ["24a¹b⁹", "12a¹b⁹", "24a³b⁹", "12a³b⁶"],
  answer: 0
},
{
  question: "Simplify (x³y⁻²)² ÷ (x²y³).",
  options: ["x⁴y⁻⁷", "x⁴y⁵", "x⁶y⁻⁷", "x⁴y⁻¹"],
  answer: 0
},
{
  question: "Simplify ((2x²y³)³ × (xy²)²) ÷ (4x³y)².",
  options: ["2³x⁴y¹¹", "2³x⁴y¹²", "2³x⁶y⁸", "2⁴x⁴y¹¹"],
  answer: 0
},
{
  question: "Simplify (a²b⁻¹)⁴ ÷ (a³b²)².",
  options: ["a⁻²b⁻⁸", "a⁻²b⁻²", "a⁻²b⁶", "a²b⁻⁸"],
  answer: 0
},
{
  question: "Simplify (x⁵y⁻³)² ÷ (x³y²)³.",
  options: ["x⁻¹y⁻¹²", "x⁻¹y⁰", "x⁴y⁻⁹", "x⁴y⁻¹²"],
  answer: 0
},
{
  question: "Simplify (2² × 2⁻³ × 2⁴) ÷ 2².",
  options: ["2¹", "2²", "2³", "2⁰"],
  answer: 0
},
{
  question: "Simplify ((x³y⁴)² × (x⁻²y³)) ÷ (x⁴y²).",
  options: ["x⁰y⁹", "x⁰y⁸", "x⁰y¹⁰", "x¹y⁹"],
  answer: 0
},
{
  question: "Simplify (5⁻² × 5³) ÷ 5⁻¹.",
  options: ["5²", "5³", "5⁰", "5¹"],
  answer: 0
},
{
  question: "Simplify ((a²b⁻³)⁴ × (a⁻¹b²)³) ÷ (a³b⁻²)².",
  options: ["a²b⁻²", "a²b⁻³", "a³b⁻²", "a⁴b⁻⁵"],
  answer: 0
},
{
  question: "Simplify ((x⁻²y³)² × (xy⁻¹)³) ÷ x⁻¹y².",
  options: ["x⁰y⁴", "x⁰y³", "x¹y⁴", "x⁰y⁵"],
  answer: 0
},
{
  question: "Simplify (2³ × 2⁻² × 2⁴) ÷ 2³.",
  options: ["2²", "2³", "2⁴", "2¹"],
  answer: 3
},
{
  question: "Simplify (x⁴y⁻²)³ ÷ (x²y³)².",
  options: ["x⁶y⁻¹⁰", "x¹²y⁻⁴", "x⁶y⁴", "x⁸y⁻⁸"],
  answer: 0
},
{
  question: "Simplify ((3x²y⁻³)² × (2x⁻¹y²)³) ÷ (x²y⁻¹)².",
  options: ["72x¹y⁰", "72x¹y¹", "72x²y⁰", "36x¹y⁰"],
  answer: 0
},
{
  question: "Simplify (a⁻²b³)⁴ ÷ (a²b⁻¹)².",
  options: ["a⁻¹²b¹⁴", "a⁻¹²b¹⁰", "a⁻¹²b¹²", "a⁻⁸b¹⁰"],
  answer: 1
},
{
  question: "Simplify (x³y⁻²)⁰ × (x²y⁴)².",
  options: ["x⁴y⁸", "x⁴y⁴", "x²y⁸", "x⁴y⁸",],
  answer: 0
},
{
  question: "Simplify ((2x³)² × (x⁻¹y²)³) ÷ 4x²y⁴.",
  options: ["2x⁴y²", "2x⁵y²", "x⁴y²", "2x⁴y³"],
  answer: 0
},
{
  question: "Simplify ((x⁻²y³)³ × (x³y⁻¹)²) ÷ x²y.",
  options: ["x⁻¹y⁷", "x⁻¹y⁶", "x⁻²y⁷", "x⁻²y⁶"],
  answer: 1
},
{
  question: "Simplify (4⁻¹ × 2³)².",
  options: ["2⁴", "2²", "2³", "2⁰"],
  answer: 0
},
{
  question: "Simplify ((a²b³)³ × (a⁻¹b²)⁴) ÷ (a³b²)².",
  options: ["a³b¹²", "a³b¹¹", "a⁴b¹²", "a⁴b¹¹"],
  answer: 0
},
{
  question: "Simplify (x⁻³y²)⁴ ÷ (x²y⁻¹)³.",
  options: ["x⁻¹⁰y¹¹", "x⁻¹⁰y¹⁰", "x⁻⁹y¹¹", "x⁻¹⁰y⁹"],
  answer: 0
},
{
  question: "Simplify ((2x³y²)² × (x²y⁻¹)³) ÷ (2²x²y²).",
  options: ["2x⁷y¹", "2x⁸y¹", "2x⁷y²", "x⁷y¹"],
  answer: 0
},
{
  question: "Simplify ((x⁴y⁻²)³ × (x⁻¹y³)²) ÷ x³y⁻¹.",
  options: ["x⁶y⁰", "x⁸y⁰", "x⁶y¹", "x⁷y⁰"],
  answer: 0
},
{
  question: "Simplify (3⁻² × 3⁴) ÷ 3.",
  options: ["3⁰", "3¹", "3²", "3³"],
  answer: 1
},
{
  question: "Simplify ((2a³b⁻¹)² × (a⁻²b²)³) ÷ (a²b)².",
  options: ["a²b¹", "a²b²", "a¹b¹", "a²b⁰"],
  answer: 0
},
{
  question: "Simplify ((x³y⁻²)² × (x⁻¹y)³) ÷ (x²y⁻¹).",
  options: ["x²y⁰", "x²y¹", "x⁰y⁰", "x⁰y¹"],
  answer: 1
},
{
  question: "Simplify ((5x²y³)³ × (x⁻¹y²)²) ÷ 5²x³y⁴.",
  options: ["5x⁴y⁷", "5x⁵y⁷", "5x⁴y⁶", "5x⁵y⁶"],
  answer: 0
},
{
  question: "Simplify ((x⁴y⁻³)³ × (x⁻²y²)²) ÷ x⁵y⁻¹.",
  options: ["x³y⁻⁴", "x³y⁻³", "x⁴y⁻⁴", "x⁴y⁻³"],
  answer: 1
},
{
  question: "Simplify ((2x³)³ × (x⁻¹y²)⁴) ÷ 8x⁴y³.",
  options: ["2x⁵y⁵", "2x⁵y⁶", "x⁵y⁵", "x⁵y⁶"],
  answer: 0
},
{
  question: "Simplify ((x⁻²y³)⁴ × (x³y⁻¹)²) ÷ x²y⁴.",
  options: ["x⁰y⁶", "x⁰y⁷", "x⁻¹y⁶", "x⁻¹y⁷"],
  answer: 0
},
{
  question: "Simplify ((3x²y³)² × (x⁻¹y²)³) ÷ 9x²y⁴.",
  options: ["x¹y⁵", "x¹y⁶", "x²y⁵", "x²y⁶"],
  answer: 0
},
{
  question: "Simplify ((a²b³c⁴)² × (a⁻¹b²c³)³) ÷ (a²b⁴c²)².",
  options: ["a³b⁵c¹³", "a³b⁵c¹²", "a³b⁶c¹³", "a³b⁶c¹²"],
  answer: 0
},
{
  question: "Simplify ((x³y⁻²)³ × (x⁻²y)²) ÷ (x⁴y⁻¹).",
  options: ["x¹y⁻³", "x¹y⁻²", "x⁰y⁻³", "x⁰y⁻²"],
  answer: 0
},
{
  question: "Simplify ((2a³b²)³ × (a²b⁻¹)²) ÷ 4a⁴b³.",
  options: ["2a⁵b³", "2a⁷b³", "2a⁵b²", "2a⁷b²"],
  answer: 1
},

//Logarithm questions 

{
  question: "Simplify log₁₀(1000).",
  options: ["2", "3", "4", "5"],
  answer: 1
},
{
  question: "If logₐ 81 = 4, find a.",
  options: ["3", "4", "9", "2"],
  answer: 2
},
{
  question: "Simplify log₂ 8 + log₂ 4.",
  options: ["4", "5", "6", "3"],
  answer: 1
},
{
  question: "If log x = 2, find the value of x.",
  options: ["10", "100", "1000", "20"],
  answer: 1
},
{
  question: "Simplify log₃ 27 ÷ log₃ 3.",
  options: ["2", "3", "4", "1"],
  answer: 1
},
{
  question: "Solve for x: log(x²) = 4.",
  options: ["10", "100", "1000", "20"],
  answer: 1
},
{
  question: "If log₅ 25 = x, find x.",
  options: ["1", "2", "3", "5"],
  answer: 1
},
{
  question: "Simplify log₁₀ 50 + log₁₀ 2.",
  options: ["log₁₀ 52", "log₁₀ 100", "log₁₀ 25", "log₁₀ 48"],
  answer: 1
},
{
  question: "If log₂ x = 5, find x.",
  options: ["25", "32", "16", "10"],
  answer: 1
},
{
  question: "Simplify logₐ(a⁷).",
  options: ["7a", "a⁷", "7", "1"],
  answer: 2
},
{
  question: "Solve: log₁₀(x) + log₁₀(10) = 3.",
  options: ["10", "100", "1", "90"],
  answer: 1
},
{
  question: "Simplify log₄ 16 − log₄ 2.",
  options: ["1", "2", "3", "4"],
  answer: 1
},
{
  question: "If log₁₀ 2 = 0.301, find log₁₀ 8.",
  options: ["0.903", "0.602", "0.301", "1.204"],
  answer: 0
},
{
  question: "Solve for x: log₅ x = 3.",
  options: ["15", "125", "25", "5"],
  answer: 1
},
{
  question: "Simplify log₁₀(100 ÷ 10).",
  options: ["1", "2", "3", "0"],
  answer: 0
},
{
  question: "Simplify log₃ 9 × log₃ 3.",
  options: ["2", "3", "4", "1"],
  answer: 0
},
{
  question: "If log₁₀ x = 2.5, find x.",
  options: ["250", "100", "316.2", "200"],
  answer: 2
},
{
  question: "Simplify log₇ 49 + log₇ 7.",
  options: ["2", "3", "4", "1"],
  answer: 1
},
{
  question: "Solve: log₄ x² = 3.",
  options: ["2", "8", "4", "16"],
  answer: 3
},
{
  question: "If log₁₀ 5 ≈ 0.699, find log₁₀ 25.",
  options: ["1.398", "0.699", "2", "1.301"],
  answer: 0
},
{
  question: "Simplify log₆ 36 ÷ log₆ 6.",
  options: ["1", "2", "3", "4"],
  answer: 1
},
{
  question: "Simplify log(x³y²).",
  options: ["3 log x + 2 log y", "log x + log y", "3 log(xy²)", "3 log x log y²"],
  answer: 0
},
{
  question: "Simplify log₁₀ 0.01.",
  options: ["-2", "2", "-1", "1"],
  answer: 0
},
{
  question: "If log₂ 8 = x, find x.",
  options: ["1", "2", "3", "4"],
  answer: 2
},
{
  question: "Solve for x: log₃(x) − log₃ 3 = 2.",
  options: ["9", "27", "3", "6"],
  answer: 1
},
{
  question: "Simplify log₁₀(50 × 2).",
  options: ["log₁₀ 52", "log₁₀ 100", "log₁₀ 48", "log₁₀ 25"],
  answer: 1
},
{
  question: "Simplify log₅ 125 − log₅ 5.",
  options: ["1", "2", "3", "4"],
  answer: 1
},
{
  question: "If log₁₀ 7 ≈ 0.845, find log₁₀ 49.",
  options: ["1.69", "0.845", "2", "1.7"],
  answer: 0
},
{
  question: "Simplify log₃ 27 ÷ log₃ 9.",
  options: ["1", "1.5", "2", "3"],
  answer: 1
},
{
  question: "Solve: log₁₀ x + log₁₀ 4 = 2.",
  options: ["10", "25", "50", "100"],
  answer: 1
},
{
  question: "Simplify log₁₀ 5² × log₁₀ 5.",
  options: ["3 log₁₀ 5", "log₁₀ 25", "2 log₁₀ 5", "log₁₀ 5"],
  answer: 0
},
{
  question: "Solve for x: log₂(x − 1) = 3.",
  options: ["7", "8", "9", "4"],
  answer: 1
},
{
  question: "Simplify log₁₀(100 × 1000).",
  options: ["5", "6", "7", "8"],
  answer: 2
},
{
  question: "If log₄ x = 3, find x.",
  options: ["16", "64", "32", "8"],
  answer: 1
},
{
  question: "Simplify log₂ 32 − log₂ 8.",
  options: ["1", "2", "3", "4"],
  answer: 1
},
{
  question: "Solve: log₁₀(x²) = 6.",
  options: ["1000", "100", "10000", "10"],
  answer: 2
},
{
  question: "Simplify log₁₀ 1 ÷ log₁₀ 10.",
  options: ["0", "1", "-1", "10"],
  answer: 0
},
{
  question: "Simplify log(xy³) − log y.",
  options: ["log x + 2 log y", "log x + 3 log y", "log x − 2 log y", "log x + log y"],
  answer: 0
},
{
  question: "If log₂ 3 ≈ 1.585, find log₂ 9.",
  options: ["3.17", "3.0", "2.585", "2"],
  answer: 0
},
{
  question: "Simplify log₁₀(100) + log₁₀ 1000.",
  options: ["5", "6", "7", "8"],
  answer: 2
},
{
  question: "Solve for x: log₅ x + log₅ 25 = 3.",
  options: ["5", "25", "125", "1250"],
  answer: 2
},
{
  question: "Simplify log₆ 36 + log₆ 6.",
  options: ["3", "4", "5", "2"],
  answer: 2
},
{
  question: "If log₁₀ 2 ≈ 0.301, find log₁₀ 16.",
  options: ["1.204", "1", "1.5", "2"],
  answer: 0
},
{
  question: "Simplify log₁₀(x²y³).",
  options: ["2 log₁₀ x + 3 log₁₀ y", "log₁₀ x + log₁₀ y", "2 log₁₀(xy³)", "3 log₁₀ x + 2 log₁₀ y"],
  answer: 0
},
{
  question: "Solve: log₃(x) = 4.",
  options: ["27", "64", "81", "16"],
  answer: 2
},
{
  question: "Simplify log₁₀(1000 ÷ 10).",
  options: ["1", "2", "3", "4"],
  answer: 2
},
{
  question: "Simplify log₂ 16 × log₂ 2.",
  options: ["4", "2", "8", "16"],
  answer: 0
},
{
  question: "If log₁₀ 9 ≈ 0.954, find log₁₀ 81.",
  options: ["1.908", "0.954", "1.9", "1.8"],
  answer: 0
},
{
  question: "Simplify log(x³y⁴) − log y².",
  options: ["3 log x + 2 log y", "3 log x + 4 log y", "3 log x + log y", "3 log x + 6 log y"],
  answer: 0
},
{
  question: "If ln x = 3, find x.",
  options: ["3", "e³", "ln 3", "e"],
  answer: 1
},
{
  question: "Simplify ln(e⁵).",
  options: ["5", "e⁵", "1", "ln 5"],
  answer: 0
},
{
  question: "Solve: log₄ x + log₄ 16 = 5.",
  options: ["32", "64", "48", "16"],
  answer: 1
},
{
  question: "If log₁₀ x = 2.7, find x.",
  options: ["500", "501", "502", "503"],
  answer: 0
},
{
  question: "Simplify logₐ(x⁷y³).",
  options: ["7 logₐ x + 3 logₐ y", "7x + 3y", "7 log x log y³", "logₐ x⁷y³"],
  answer: 0
},
{
  question: "Solve for x: log₅(2x − 3) = 3.",
  options: ["64", "125", "124", "126"],
  answer: 1
},
{
  question: "Simplify log₃ 81 ÷ log₃ 9.",
  options: ["3/2", "2", "1", "4/3"],
  answer: 0
},
{
  question: "If log₂ x = 7, find x.",
  options: ["128", "127", "129", "64"],
  answer: 0
},
{
  question: "Simplify ln(a²b³) − ln(ab).",
  options: ["ln ab²", "ln a²b²", "ln a²b³", "ln a b³"],
  answer: 0
},
{
  question: "Solve: log₁₀(x² − 4) = 2.",
  options: ["6", "14", "16", "12"],
  answer: 2
},
{
  question: "If log₄ 32 = x, find x.",
  options: ["2.5", "3", "4", "5"],
  answer: 0
},
{
  question: "Simplify log₅ 125 − log₅ 25.",
  options: ["1", "2", "3", "0"],
  answer: 0
},
{
  question: "Solve for x: ln(2x) = 3.",
  options: ["e³/2", "3/2", "2e³", "e³"],
  answer: 0
},
{
  question: "Simplify log₁₀ 0.001.",
  options: ["-3", "3", "-2", "2"],
  answer: 0
},
{
  question: "Solve: log₇(x − 1) + log₇(x + 1) = 2.",
  options: ["7", "8", "6", "9"],
  answer: 0
},
{
  question: "If ln x − ln 2 = 3, find x.",
  options: ["2e³", "e³", "2 ln 3", "6"],
  answer: 0
},
{
  question: "Simplify log₂ 64 × log₂ 2.",
  options: ["6", "64", "8", "2"],
  answer: 0
},
{
  question: "Solve for x: log₃(x + 4) − log₃ 2 = 3.",
  options: ["50", "52", "54", "48"],
  answer: 1
},
{
  question: "If log₁₀ x = 1/2, find x.",
  options: ["5", "√10", "10", "0.5"],
  answer: 1
},
{
  question: "Simplify ln e⁵ − ln e².",
  options: ["3", "5", "2", "7"],
  answer: 0
},
{
  question: "Solve: log₂(x²) − log₂ 8 = 3.",
  options: ["16", "32", "64", "8"],
  answer: 1
},
{
  question: "If log₁₀ 3 ≈ 0.4771, find log₁₀ 27.",
  options: ["1.4313", "1.477", "1.5", "1.43"],
  answer: 0
},
{
  question: "Simplify log₅(125x²).",
  options: ["3 + 2 log₅ x", "5 + log₅ x²", "3 log₅ x²", "2 log₅ x + 125"],
  answer: 0
},
{
  question: "Solve: ln(x − 1) = 2.",
  options: ["e² + 1", "e² − 1", "2e − 1", "e²"],
  answer: 1
},
{
  question: "If log₃ x = 4/2, find x.",
  options: ["9", "16", "81", "8"],
  answer: 0
},
{
  question: "Simplify log₁₀(50) + log₁₀(20).",
  options: ["log₁₀ 1000", "log₁₀ 70", "log₁₀ 50 × 20", "log₁₀ 100"],
  answer: 0
},
{
  question: "Solve for x: log₁₀(x + 5) = 2.",
  options: ["90", "95", "100", "105"],
  answer: 1
},
{
  question: "Simplify log₄ 8 × log₄ 2.",
  options: ["3/2", "2", "1", "1/2"],
  answer: 0
},
{
  question: "If ln 5 ≈ 1.609, find ln 25.",
  options: ["3.218", "1.609", "2", "4.218"],
  answer: 0
},
{
  question: "Simplify ln(a²b⁵) − ln(ab²).",
  options: ["ln a b³", "ln a² b³", "ln a² b⁷", "ln a b²"],
  answer: 1
},
{
  question: "Solve: log₆(x² − 1) = 2.",
  options: ["7", "35", "37", "36"],
  answer: 3
},
{
  question: "If log₂ x + log₂(x − 2) = 3, find x.",
  options: ["4", "6", "8", "5"],
  answer: 1
},
{
  question: "Simplify log₁₀ 0.1 × log₁₀ 1000.",
  options: ["-1", "1", "0", "2"],
  answer: 2
},
{
  question: "Solve: ln(x²) − ln 4 = 3.",
  options: ["4e³", "2e³", "e³", "8e³"],
  answer: 1
},
{
  question: "If log₇ 49 = x, find x.",
  options: ["1", "2", "3", "4"],
  answer: 1
},
{
  question: "Simplify log₁₀(200 ÷ 2).",
  options: ["1", "2", "2.5", "3"],
  answer: 3
},
{
  question: "Solve: log₂(x + 3) = 5.",
  options: ["29", "32", "28", "31"],
  answer: 1
},
{
  question: "Simplify ln(xy²) + ln(x²y).",
  options: ["3 ln x + 3 ln y", "3 ln xy", "ln x + ln y", "2 ln x + 2 ln y"],
  answer: 0
},
{
  question: "Solve for x: log₁₀(x − 2) + log₁₀(x + 2) = 2.",
  options: ["6", "10", "8", "12"],
  answer: 3
},
{
  question: "If ln 2 ≈ 0.693, find ln 16.",
  options: ["2.772", "2.718", "2.8", "2.75"],
  answer: 0
},
{
  question: "Simplify log₃ 9³ ÷ log₃ 3.",
  options: ["6", "5", "4", "3"],
  answer: 0
},
{
  question: "Solve: ln(3x) − ln 2 = 4.",
  options: ["e⁴/3", "2e⁴/3", "e⁴", "3e⁴/2"],
  answer: 0
},
{
  question: "Simplify log₁₀(x⁵y²) − log₁₀(x²y).",
  options: ["3 log x + log y", "5 log x + 2 log y", "2 log x + log y", "log x + log y"],
  answer: 0
},
{
  question: "Solve for x: log₄(x − 1) + log₄(x + 1) = 3.",
  options: ["7", "8", "9", "6"],
  answer: 0
},
{
  question: "Simplify ln(e²x³) − ln(x³).",
  options: ["2", "ln e²", "3 ln x", "2 + 3 ln x"],
  answer: 0
},
{
  question: "If log₁₀ 11 ≈ 1.041, find log₁₀ 121.",
  options: ["2.082", "2.041", "2", "1.041"],
  answer: 0
},
{
  question: "Simplify log₂(x²y³z).",
  options: ["2 log x + 3 log y + log z", "log x + log y + log z", "2 log x + 2 log y + log z", "2 log x + 3 log y"],
  answer: 0
},
{
  question: "Solve: log₅(x² − x − 6) = 2.",
  options: ["6", "11", "12", "10"],
  answer: 2
},

//surds questions
{
  question: "Simplify √50.",
  options: ["5√2", "10√2", "25√2", "2√5"],
  answer: 0
},
{
  question: "Simplify √72 + √32.",
  options: ["8√2", "10√2", "12√2", "14√2"],
  answer: 1
},
{
  question: "Rationalize the denominator: 5/√2.",
  options: ["5√2/2", "√2/5", "5/2√2", "2√5"],
  answer: 0
},
{
  question: "Simplify √18 × √8.",
  options: ["12", "24", "36", "16"],
  answer: 0
},
{
  question: "Simplify √50 − √8.",
  options: ["3√2", "√42", "√58", "√10"],
  answer: 0
},
{
  question: "Simplify (√3 + √2)².",
  options: ["5 + 2√6", "3 + 2√6", "5 + √6", "5 + 4√6"],
  answer: 0
},
{
  question: "Simplify √12 ÷ √3.",
  options: ["2", "3", "4", "√4"],
  answer: 0
},
{
  question: "Rationalize the denominator: 7/(√5 − 2).",
  options: ["(7√5 + 14)/1", "(7√5 + 14)/1", "(7√5 + 14)/1", "(7√5 + 14)/1"],
  answer: 0
},
{
  question: "Simplify √98 − √32.",
  options: ["3√2", "2√2", "4√2", "√66"],
  answer: 0
},
{
  question: "Simplify (√5 − √2)(√5 + √2).",
  options: ["3", "7", "√7", "√3"],
  answer: 0
},
{
  question: "Simplify √32 + √18.",
  options: ["7√2", "8√2", "9√2", "10√2"],
  answer: 1
},
{
  question: "Simplify √50 × √2.",
  options: ["10", "12", "14", "8"],
  answer: 0
},
{
  question: "Rationalize the denominator: 3/(√3 + 1).",
  options: ["(3√3 − 3)/2", "3(√3 − 1)/2", "3/√2", "3√3/2"],
  answer: 0
},
{
  question: "Simplify √45 ÷ √5.",
  options: ["3", "4", "5", "√9"],
  answer: 0
},
{
  question: "Simplify √20 + 2√5.",
  options: ["4√5", "6√5", "2√5", "3√5"],
  answer: 0
},
{
  question: "Simplify (√7 + √3)².",
  options: ["10 + 2√21", "7 + 2√21", "10 + √21", "7 + √21"],
  answer: 0
},
{
  question: "Simplify √75 − √12.",
  options: ["3√3", "5√3", "√63", "√87"],
  answer: 0
},
{
  question: "Simplify (√2 + √5)(√2 − √5).",
  options: ["-3", "3", "-7", "7"],
  answer: 0
},
{
  question: "Simplify √50 ÷ √2.",
  options: ["5", "√25", "√50", "√48"],
  answer: 0
},
{
  question: "Simplify √8 × √18.",
  options: ["12", "14", "16", "24"],
  answer: 0
},
{
  question: "Rationalize the denominator: 2/(√7 − √3).",
  options: ["(2√7 + 2√3)/4", "(2√7 + 2√3)/4", "(2√7 + 2√3)/4", "(√7 + √3)/2"],
  answer: 0
},
{
  question: "Simplify √98 + √50.",
  options: ["7√2 + 5√2", "√148", "√148", "12√2"],
  answer: 0
},
{
  question: "Simplify (√6 + √2)².",
  options: ["8 + 2√12", "8 + 4√3", "6 + 2√12", "6 + 4√3"],
  answer: 1
},
{
  question: "Simplify √32 − √18.",
  options: ["2√2", "4√2", "√14", "√20"],
  answer: 1
},
{
  question: "Simplify √12 × √3.",
  options: ["6", "5", "3", "√36"],
  answer: 0
},
{
  question: "Simplify (√10 + √5)(√10 − √5).",
  options: ["5", "10", "15", "√5"],
  answer: 1
},
{
  question: "Simplify √45 + √20.",
  options: ["5√2 + 3√5", "3√5 + 2√5", "3√5 + 2√2", "5√2 + 2√5"],
  answer: 3
},
{
  question: "Rationalize: 5/(√2 + √3).",
  options: ["(5√2 − 5√3)/-1", "(5√2 − 5√3)/-1", "(5√2 − 5√3)/-1", "(5√2 − 5√3)/-1"],
  answer: 0
},
{
  question: "Simplify √8 + √18 − √2.",
  options: ["5√2", "6√2", "4√2", "7√2"],
  answer: 0
},
{
  question: "Simplify √50 × √8.",
  options: ["20", "16", "24", "18"],
  answer: 0
},
{
  question: "Simplify (√3 + √7)² − (√3 − √7)².",
  options: ["28", "20", "14", "10"],
  answer: 0
},
{
  question: "Simplify √32 + √50 − √18.",
  options: ["10√2", "8√2", "12√2", "9√2"],
  answer: 0
},
{
  question: "Simplify √98 ÷ √2.",
  options: ["7", "5", "6", "9"],
  answer: 0
},
{
  question: "Simplify √45 − √5.",
  options: ["√5(3 − 1)", "√5(3 − 2)", "2√5", "√5"],
  answer: 0
},
{
  question: "Simplify √72 × √2.",
  options: ["12", "14", "10", "8"],
  answer: 0
},
{
  question: "Simplify (√6 + √3)(√6 − √3).",
  options: ["3", "6", "9", "1"],
  answer: 1
},
{
  question: "Rationalize the denominator: 1/(√5 + √2).",
  options: ["(√5 − √2)/3", "(√5 − √2)/7", "(√5 − √2)/1", "(√5 − √2)/2"],
  answer: 0
},
{
  question: "Simplify √50 − √8 + √18.",
  options: ["7√2", "6√2", "5√2", "8√2"],
  answer: 1
},
{
  question: "Simplify √128 ÷ √2.",
  options: ["8", "16", "6", "4"],
  answer: 0
},
{
  question: "Simplify (√10 + √2)².",
  options: ["12 + 4√5", "12 + 2√20", "12 + 4√10", "12 + 2√5"],
  answer: 2
},
{
  question: "Simplify √200 − √50.",
  options: ["5√2", "10√2", "7√2", "15√2"],
  answer: 1
},
{
  question: "Simplify √72 + √50 − √8.",
  options: ["12√2", "10√2", "14√2", "8√2"],
  answer: 0
},
{
  question: "Simplify (√5 + √3)(√5 − √3).",
  options: ["2", "5", "8", "1"],
  answer: 1
},
{
  question: "Simplify √32 + √18 − √8.",
  options: ["8", "6√2", "10", "7√2"],
  answer: 1
},
{
  question: "Simplify √98 + √50 − √32.",
  options: ["10√2", "12√2", "8√2", "9√2"],
  answer: 0
},
{
  question: "Rationalize the denominator: 2/(√3 + √5).",
  options: ["(2√3 − 2√5)/-2", "(2√3 − 2√5)/-2", "(2√3 − 2√5)/-2", "(2√3 − 2√5)/-2"],
  answer: 0
},

//ratio, proportion and averages

{
  question: "The ratio of boys to girls in a class is 3:4. If there are 21 boys, how many girls are there?",
  options: ["28", "24", "30", "35"],
  answer: 0
},
{
  question: "A recipe requires sugar and flour in the ratio 2:5. If 10 kg of flour is used, how much sugar is needed?",
  options: ["4 kg", "5 kg", "3 kg", "6 kg"],
  answer: 0
},
{
  question: "The ages of A and B are in the ratio 5:7. If A is 25 years old, find B's age.",
  options: ["35", "30", "28", "40"],
  answer: 0
},
{
  question: "Divide ₦1200 among X, Y, and Z in the ratio 2:3:5.",
  options: ["₦240, ₦360, ₦600", "₦200, ₦300, ₦700", "₦240, ₦380, ₦580", "₦250, ₦350, ₦600"],
  answer: 0
},
{
  question: "If 5 pencils cost ₦150, find the cost of 8 pencils.",
  options: ["₦240", "₦200", "₦250", "₦220"],
  answer: 0
},
{
  question: "A sum of money is divided among 3 people in the ratio 4:5:6. If the total is ₦7500, how much does the middle person get?",
  options: ["₦2500", "₦3000", "₦2800", "₦2700"],
  answer: 1
},
{
  question: "The ratio of length to width of a rectangle is 5:3. If the width is 12 cm, find the length.",
  options: ["20 cm", "18 cm", "15 cm", "25 cm"],
  answer: 1
},
{
  question: "A and B can do a work in 12 and 8 days respectively. Working together, how long will it take them to finish the work?",
  options: ["4.8 days", "5 days", "5.5 days", "6 days"],
  answer: 0
},
{
  question: "The average of 5 numbers is 20. Four of the numbers are 18, 22, 24, 16. Find the fifth number.",
  options: ["20", "18", "22", "24"],
  answer: 0
},
{
  question: "The ratio of A's salary to B's salary is 7:5. If B earns ₦15000, what does A earn?",
  options: ["₦21000", "₦20000", "₦22000", "₦25000"],
  answer: 0
},
{
  question: "Three numbers are in the ratio 2:3:5. Their sum is 100. Find the largest number.",
  options: ["50", "40", "30", "45"],
  answer: 0
},
{
  question: "The ratio of two numbers is 4:7. If their sum is 44, find the numbers.",
  options: ["16 and 28", "18 and 26", "20 and 24", "15 and 29"],
  answer: 0
},
{
  question: "The average of 10 numbers is 18. If one number, 24, is removed, find the new average.",
  options: ["17.6", "17.5", "18", "17"],
  answer: 0
},
{
  question: "A mixture contains milk and water in the ratio 5:2. If the mixture is 14 liters, how much milk is there?",
  options: ["10 liters", "8 liters", "9 liters", "12 liters"],
  answer: 0
},
{
  question: "If 8 men can complete a job in 12 days, how many days will it take 6 men to complete it?",
  options: ["16 days", "14 days", "18 days", "12 days"],
  answer: 0
},
{
  question: "The average of five consecutive even numbers is 24. Find the numbers.",
  options: ["20, 22, 24, 26, 28", "18, 20, 22, 24, 26", "22, 24, 26, 28, 30", "24, 26, 28, 30, 32"],
  answer: 0
},
{
  question: "A and B share a sum of money in the ratio 3:2. If B gets ₦600, find the total sum.",
  options: ["₦1500", "₦1200", "₦1800", "₦1400"],
  answer: 1
},
{
  question: "The ratio of 3 numbers is 2:3:4. If the largest is 40, find the smallest.",
  options: ["20", "15", "10", "25"],
  answer: 2
},
{
  question: "If 5 workers earn ₦4500, how much will 8 workers earn?",
  options: ["₦7200", "₦7500", "₦7000", "₦8000"],
  answer: 0
},
{
  question: "The ratio of boys to girls in a school is 5:3. If there are 120 boys, find the number of girls.",
  options: ["72", "75", "80", "70"],
  answer: 0
},
{
  question: "The average of 6 numbers is 15. If one number, 18, is replaced by 24, find the new average.",
  options: ["16", "15.5", "16.5", "17"],
  answer: 2
},
{
  question: "A sum of money is divided among 4 people in the ratio 1:2:3:4. If the total is ₦10000, find the share of the second person.",
  options: ["₦2000", "₦3000", "₦2500", "₦4000"],
  answer: 1
},
{
  question: "The ratio of two numbers is 7:9. If the smaller number is 21, find the larger number.",
  options: ["27", "25", "28", "30"],
  answer: 0
},
{
  question: "If the ratio of A:B is 3:5 and B:C is 4:7, find the ratio of A:C.",
  options: ["12:35", "15:28", "12:28", "7:15"],
  answer: 0
},
{
  question: "The average of 8 numbers is 16. If one number, 20, is removed, find the new average.",
  options: ["15.5", "15", "16", "14.5"],
  answer: 0
},
{
  question: "Divide ₦900 among X, Y, Z in the ratio 2:3:4.",
  options: ["₦200, ₦300, ₦400", "₦180, ₦270, ₦450", "₦220, ₦330, ₦350", "₦200, ₦300, ₦350"],
  answer: 1
},
{
  question: "The ratio of ages of A and B is 5:6. If the sum of their ages is 55, find A's age.",
  options: ["25", "23", "22", "24"],
  answer: 3
},
{
  question: "If a:b = 3:4 and b:c = 2:5, find a:c.",
  options: ["3:10", "3:20", "6:20", "3:8"], 
  answer: 1
},
{
  question: "The average of 10 numbers is 25. One number is wrongly recorded as 28 instead of 18. Find the correct average.",
  options: ["24", "23.9", "24.9", "25"],
  answer: 2
},
{
  question: "A mixture contains water and alcohol in the ratio 3:2. If the mixture is 25 liters, find the amount of alcohol.",
  options: ["10 liters", "12 liters", "15 liters", "8 liters"],
  answer: 0
},
{
  question: "The ratio of two numbers is 9:11. If their sum is 200, find the numbers.",
  options: ["90 and 110", "100 and 100", "80 and 120", "85 and 115"],
  answer: 0
},
{
  question: "Divide ₦1500 among three people in the ratio 3:5:7.",
  options: ["₦300, ₦500, ₦700", "₦375, ₦625, ₦500", "₦360, ₦600, ₦540", "₦375, ₦625, ₦500"],
  answer: 1
},
{
  question: "The average of 5 numbers is 20. Four numbers are 18, 24, 16, 22. Find the fifth number.",
  options: ["20", "22", "18", "16"],
  answer: 0
},
{
  question: "If 12 men can complete a work in 20 days, how long will 15 men take?",
  options: ["16 days", "18 days", "15 days", "14 days"],
  answer: 0
},
{
  question: "The ratio of two numbers is 7:9. Their sum is 64. Find the numbers.",
  options: ["28 and 36", "30 and 34", "32 and 32", "27 and 37"],
  answer: 0
},
{
  question: "A sum of money is shared among 5 people in the ratio 2:3:4:5:6. If the total is ₦1000, find the share of the third person.",
  options: ["₦160", "₦200", "₦180", "₦150"],
  answer: 0
},
{
  question: "The average of 9 numbers is 12. One number is replaced by 18. Find the new average.",
  options: ["12.7", "13", "12.5", "12.8"],
  answer: 0
},
{
  question: "If a:b:c = 2:3:4 and their sum is 72, find b.",
  options: ["24", "20", "18", "22"],
  answer: 0
},
{
  question: "A mixture contains milk and water in the ratio 7:3. If the total is 50 liters, find the amount of milk.",
  options: ["35 liters", "30 liters", "25 liters", "40 liters"],
  answer: 0
},
{
  question: "If 5 men can do a work in 15 days, 3 men will do it in how many days?",
  options: ["25 days", "20 days", "30 days", "15 days"],
  answer: 0
},
{
  question: "The ratio of three numbers is 4:5:6. If the smallest is 12, find the largest.",
  options: ["18", "20", "16", "15"],
  answer: 0
},
{
  question: "Divide ₦1200 among A, B, C in the ratio 3:4:5.",
  options: ["₦300, ₦400, ₦500", "₦360, ₦400, ₦440", "₦350, ₦400, ₦450", "₦300, ₦360, ₦540"],
  answer: 0
},
{
  question: "The average of 8 numbers is 15. If one number 20 is removed, find the new average.",
  options: ["14.5", "14", "15", "15.5"],
  answer: 0
},


//linear inequality 

{
  question: "Solve for x: 2x + 5 > 9",
  options: ["x > 2", "x < 2", "x > -2", "x < -2"],
  answer: 0
},
{
  question: "Solve: 5 - 3x ≤ 8",
  options: ["x ≥ -1", "x ≤ -1", "x ≥ 1", "x ≤ 1"],
  answer: 3
},
{
  question: "If 4x - 7 < 9, find x",
  options: ["x < 4", "x > 4", "x < 16", "x > 16"],
  answer: 0
},
{
  question: "Solve for y: 3y + 2 ≥ 11",
  options: ["y ≥ 3", "y ≥ 4", "y ≤ 3", "y ≤ 4"],
  answer: 0
},
{
  question: "2x - 5 < 3x + 1, find x",
  options: ["x > -6", "x < -6", "x > 6", "x < 6"],
  answer: 0
},
{
  question: "Solve: -2x + 7 ≥ 1",
  options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
  answer: 0
},
{
  question: "If 5x - 9 < 16, find x",
  options: ["x < 5", "x > 5", "x < -5", "x > -5"],
  answer: 0
},
{
  question: "Solve 7 - 2x > 1",
  options: ["x < 3", "x > 3", "x < -3", "x > -3"],
  answer: 0
},
{
  question: "3x + 4 ≤ 10, find x",
  options: ["x ≤ 2", "x ≥ 2", "x ≤ -2", "x ≥ -2"],
  answer: 0
},
{
  question: "Solve: 6 - x > 2",
  options: ["x < 4", "x > 4", "x < -4", "x > -4"],
  answer: 0
},
{
  question: "Solve for x: 4x + 3 ≤ 15",
  options: ["x ≤ 3", "x ≥ 3", "x ≤ 4", "x ≥ 4"],
  answer: 0
},
{
  question: "If -3x + 5 > 2, find x",
  options: ["x < 1", "x > 1", "x < -1", "x > -1"],
  answer: 0
},
{
  question: "Solve: 2x - 3 ≥ 7",
  options: ["x ≥ 5", "x ≤ 5", "x ≥ 2", "x ≤ 2"],
  answer: 0
},
{
  question: "Solve: x/3 + 2 < 5",
  options: ["x < 9", "x > 9", "x < 6", "x > 6"],
  answer: 0
},
{
  question: "Solve: 5 - 2x ≥ 1",
  options: ["x ≤ 2", "x ≥ 2", "x ≤ -2", "x ≥ -2"],
  answer: 0
},
{
  question: "If 7x - 4 < 17, find x",
  options: ["x < 3", "x > 3", "x < -3", "x > -3"],
  answer: 0
},
{
  question: "Solve 3x + 7 > 13",
  options: ["x > 2", "x < 2", "x > -2", "x < -2"],
  answer: 0
},
{
  question: "Solve -5x + 9 ≤ 4",
  options: ["x ≥ 1", "x ≤ 1", "x ≥ -1", "x ≤ -1"],
  answer: 0
},
{
  question: "Solve: 2x - 3 ≤ 5",
  options: ["x ≤ 4", "x ≥ 4", "x ≤ -4", "x ≥ -4"],
  answer: 0
},
{
  question: "Solve 3 - x > 0",
  options: ["x < 3", "x > 3", "x < -3", "x > -3"],
  answer: 0
},
{
  question: "Solve for x: 4 - 2x < 0",
  options: ["x > 2", "x < 2", "x > -2", "x < -2"],
  answer: 0
},
{
  question: "Solve: 5x + 6 ≥ 16",
  options: ["x ≥ 2", "x ≤ 2", "x ≥ 4", "x ≤ 4"],
  answer: 0
},
{
  question: "Solve: 2 - 3x ≤ -7",
  options: ["x ≥ 3", "x ≤ 3", "x ≥ -3", "x ≤ -3"],
  answer: 0
},
{
  question: "Solve: 3x - 5 > 1",
  options: ["x > 2", "x < 2", "x > -2", "x < -2"],
  answer: 0
},
{
  question: "Solve: 2x + 3 ≤ 11",
  options: ["x ≤ 4", "x ≥ 4", "x ≤ 5", "x ≥ 5"],
  answer: 0
},
{
  question: "Solve -x + 6 > 2",
  options: ["x < 4", "x > 4", "x < -4", "x > -4"],
  answer: 0
},
{
  question: "Solve: 7 - 3x ≤ 1",
  options: ["x ≥ 2", "x ≤ 2", "x ≥ -2", "x ≤ -2"],
  answer: 0
},
{
  question: "Solve 5x - 10 < 15",
  options: ["x < 5", "x > 5", "x < -5", "x > -5"],
  answer: 0
},
{
  question: "Solve: -2x + 7 > 3",
  options: ["x < 2", "x > 2", "x < -2", "x > -2"],
  answer: 0
},
{
  question: "Solve: 4x - 5 ≤ 7",
  options: ["x ≤ 3", "x ≥ 3", "x ≤ 2", "x ≥ 2"],
  answer: 0
},
{
  question: "Solve for x: 3x + 4 < 13",
  options: ["x < 3", "x > 3", "x < -3", "x > -3"],
  answer: 0
},
{
  question: "Solve: 5 - x ≥ 2",
  options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
  answer: 0
},
{
  question: "Solve: 2x - 7 > -1",
  options: ["x > 3", "x < 3", "x > -3", "x < -3"],
  answer: 0
},
{
  question: "Solve 6 - 4x ≤ 2",
  options: ["x ≥ 1", "x ≤ 1", "x ≥ -1", "x ≤ -1"],
  answer: 0
},
{
  question: "Solve: 3x + 5 > 11",
  options: ["x > 2", "x < 2", "x > -2", "x < -2"],
  answer: 0
},
{
  question: "Solve: -x + 8 ≤ 3",
  options: ["x ≥ 5", "x ≤ 5", "x ≥ -5", "x ≤ -5"],
  answer: 0
},
{
  question: "Solve: 2x + 7 ≥ 13",
  options: ["x ≥ 3", "x ≤ 3", "x ≥ 4", "x ≤ 4"],
  answer: 0
},
{
  question: "Solve 5x - 3 ≤ 12",
  options: ["x ≤ 3", "x ≥ 3", "x ≤ 2", "x ≥ 2"],
  answer: 0
},
{
  question: "Solve: -3x + 9 > 0",
  options: ["x < 3", "x > 3", "x < -3", "x > -3"],
  answer: 0
},
{
  question: "Solve: 4x + 1 < 9",
  options: ["x < 2", "x > 2", "x < -2", "x > -2"],
  answer: 0
},
{
  question: "Solve for x: 6 - x ≥ 3",
  options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
  answer: 0
},
{
  question: "Solve: 3x - 4 ≤ 5",
  options: ["x ≤ 3", "x ≥ 3", "x ≤ 4", "x ≥ 4"],
  answer: 0
},
{
  question: "Solve: -2x + 6 < 0",
  options: ["x > 3", "x < 3", "x > -3", "x < -3"],
  answer: 0
},
{
  question: "Solve: 5x + 2 > 17",
  options: ["x > 3", "x < 3", "x > -3", "x < -3"],
  answer: 0
},
{
  question: "Solve for x: 7 - x ≤ 4",
  options: ["x ≥ 3", "x ≤ 3", "x ≥ -3", "x ≤ -3"],
  answer: 0
},
{
  question: "Solve 3x + 2 ≥ 11",
  options: ["x ≥ 3", "x ≤ 3", "x ≥ 4", "x ≤ 4"],
  answer: 0
},
{
  question: "Solve: -4x + 8 > 0",
  options: ["x < 2", "x > 2", "x < -2", "x > -2"],
  answer: 0
},
{
  question: "Solve for x: 3x - 7 > 2x + 5",
  options: ["x > 12", "x < 12", "x > -12", "x < -12"],
  answer: 0
},
{
  question: "Solve: -2x + 5 ≤ 3x - 10",
  options: ["x ≥ 3", "x ≤ 3", "x ≥ -3", "x ≤ -3"],
  answer: 1
},
{
  question: "Solve for y: 5 - 2y < 3y + 10",
  options: ["y > -1", "y < -1", "y > 3", "y < 3"],
  answer: 0
},
{
  question: "Solve: 7x + 3 ≤ 2x + 18",
  options: ["x ≤ 3", "x ≥ 3", "x ≤ 5", "x ≥ 5"],
  answer: 0
},
{
  question: "If -3x + 4 > 10, find x",
  options: ["x < -2", "x > -2", "x < 2", "x > 2"],
  answer: 0
},
{
  question: "Solve for x: 4(x - 3) ≥ 2x + 6",
  options: ["x ≥ 9", "x ≤ 9", "x ≥ 3", "x ≤ 3"],
  answer: 0
},
{
  question: "Solve: -5x + 2 < 3 - 2x",
  options: ["x > -1/3", "x < -1/3", "x > 1/3", "x < 1/3"],
  answer: 1
},
{
  question: "Solve: 1/2 x - 3 ≥ 1/4 x + 5",
  options: ["x ≥ 32", "x ≤ 32", "x ≥ -32", "x ≤ -32"],
  answer: 0
},
{
  question: "Solve: 3x/4 - 5 < x/2 + 2",
  options: ["x < 28", "x > 28", "x < -28", "x > -28"],
  answer: 0
},
{
  question: "Solve for x: 2(3x - 5) ≤ 4x + 10",
  options: ["x ≤ 10", "x ≥ 10", "x ≤ -10", "x ≥ -10"],
  answer: 0
},
{
  question: "Solve: -3(x - 2) + 5 > 2x - 1",
  options: ["x < 2", "x > 2", "x < 1", "x > 1"],
  answer: 0
},
{
  question: "If 2x + 5 < 3x - 7, find x",
  options: ["x > 12", "x < 12", "x > -12", "x < -12"],
  answer: 1
},
{
  question: "Solve: 5 - 3x > 2 - 2x",
  options: ["x < -3", "x > -3", "x < 3", "x > 3"],
  answer: 0
},
{
  question: "Solve: 2(x - 1) < 3(x + 2) - 5",
  options: ["x > -3", "x < -3", "x > 3", "x < 3"],
  answer: 1
},
{
  question: "Solve: -4x + 7 ≥ 3x - 14",
  options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
  answer: 0
},
{
  question: "Solve: 3 - 2(x + 1) < 5x - 7",
  options: ["x > 2", "x < 2", "x > -2", "x < -2"],
  answer: 0
},
{
  question: "Solve: (x - 3)/2 > (2x + 1)/3",
  options: ["x < 11", "x > 11", "x < -11", "x > -11"],
  answer: 1
},
{
  question: "Solve for x: 5x - 2 ≤ 2x + 7",
  options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
  answer: 0
},
{
  question: "Solve: -3x + 6 < 2x - 4",
  options: ["x > 2", "x < 2", "x > -2", "x < -2"],
  answer: 1
},
{
  question: "Solve: 4 - 5x > 3x + 8",
  options: ["x < -1/2", "x > -1/2", "x < 1/2", "x > 1/2"],
  answer: 0
},
{
  question: "Solve: 2/3 x - 5 ≤ x/2 + 3",
  options: ["x ≤ 48", "x ≥ 48", "x ≤ -48", "x ≥ -48"],
  answer: 0
},
{
  question: "Solve: -7x + 3 ≥ 4x - 25",
  options: ["x ≤ 4", "x ≥ 4", "x ≤ -4", "x ≥ -4"],
  answer: 0
},
{
  question: "Solve for x: 3(x - 1) < 2x + 5",
  options: ["x < 8", "x > 8", "x < -8", "x > -8"],
  answer: 0
},
{
  question: "Solve: 2x/5 + 3 ≥ x/2 + 5",
  options: ["x ≥ 30/9", "x ≤ 30/9", "x ≥ -30/9", "x ≤ -30/9"],
  answer: 1
},
{
  question: "Solve: -x/3 + 5 < 2x/3 - 1",
  options: ["x > 9", "x < 9", "x > -9", "x < -9"],
  answer: 0
},
{
  question: "Solve: 2(4 - x) ≥ 3x - 1",
  options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
  answer: 0
},
{
  question: "Solve: 5x - 2 < 3x + 6",
  options: ["x < 4", "x > 4", "x < -4", "x > -4"],
  answer: 0
},
{
  question: "Solve: 3 - x/2 ≥ 2x - 5",
  options: ["x ≤ 4", "x ≥ 4", "x ≤ -4", "x ≥ -4"],
  answer: 0
},
{
  question: "Solve: -2(x + 3) < 3 - x",
  options: ["x < -1", "x > -1", "x < 1", "x > 1"],
  answer: 0
},
{
  question: "Solve: 4x/3 - 5 > x/2 + 2",
  options: ["x > 10.5", "x < 10.5", "x > -10.5", "x < -10.5"],
  answer: 0
},
{
  question: "Solve for x: -3x + 8 ≤ 2x - 7",
  options: ["x ≥ 3", "x ≤ 3", "x ≥ -3", "x ≤ -3"],
  answer: 1
},
{
  question: "Solve: (x - 5)/2 + 3 < x/3 + 7",
  options: ["x < 23", "x > 23", "x < -23", "x > -23"],
  answer: 0
},
{
  question: "Solve: -4x + 9 > 5x - 12",
  options: ["x < 3", "x > 3", "x < -3", "x > -3"],
  answer: 0
},
{
  question: "Solve: 3x - 7 ≤ 2x + 5",
  options: ["x ≤ 12", "x ≥ 12", "x ≤ -12", "x ≥ -12"],
  answer: 0
},
{
  question: "Solve: 5 - 2x > 3x - 5",
  options: ["x < 2", "x > 2", "x < -2", "x > -2"],
  answer: 0
},
{
  question: "Solve for x: 4(x - 2) + 3 ≤ 2x + 11",
  options: ["x ≤ 5", "x ≥ 5", "x ≤ -5", "x ≥ -5"],
  answer: 0
},
{
  question: "Solve: -x + 8 ≥ 2x - 1",
  options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
  answer: 0
},
{
  question: "Solve: 3x/2 - 4 < x/3 + 5",
  options: ["x < 18", "x > 18", "x < -18", "x > -18"],
  answer: 0
},
{
  question: "Solve: 2(x + 3) ≥ 5x - 7",
  options: ["x ≤ 13/3", "x ≥ 13/3", "x ≤ -13/3", "x ≥ -13/3"],
  answer: 0
},
{
  question: "Solve: -5x + 10 < 2 - 3x",
  options: ["x > 4", "x < 4", "x > -4", "x < -4"],
  answer: 1
},
{
  question: "Solve: 3 - 2(x - 1) ≥ x + 2",
  options: ["x ≤ -1", "x ≥ -1", "x ≤ 1", "x ≥ 1"],
  answer: 0
},
{
  question: "Solve for x: (x - 4)/3 + 2 < (2x + 1)/4",
  options: ["x < 15", "x > 15", "x < -15", "x > -15"],
  answer: 0
},
{
  question: "Solve: -x/2 + 7 ≥ 3x/4 - 5",
  options: ["x ≤ 24/5", "x ≥ 24/5", "x ≤ -24/5", "x ≥ -24/5"],
  answer: 0
},
{
  question: "Solve: 4(x - 1)/3 + 2 < 2x + 1",
  options: ["x < 5", "x > 5", "x < -5", "x > -5"],
  answer: 0
},
{
  question: "Solve: -3x + 9 ≤ 2(x - 3)",
  options: ["x ≥ 3", "x ≤ 3", "x ≥ -3", "x ≤ -3"],
  answer: 1
},


//numbers and basic arithmetic operations 

{
  question: "Find the sum: 235 + 487 + 128",
  options: ["850", "850", "860", "870"],
  answer: 2
},
{
  question: "Find the difference: 1200 - 875",
  options: ["325", "325", "315", "345"],
  answer: 0
},
{
  question: "Multiply: 45 × 23",
  options: ["1035", "1025", "1040", "1050"],
  answer: 0
},
{
  question: "Divide: 144 ÷ 12",
  options: ["10", "12", "11", "14"],
  answer: 1
},
{
  question: "Find the remainder when 245 is divided by 7",
  options: ["0", "1", "2", "3"],
  answer: 0
},
{
  question: "Express 1011₂ in decimal",
  options: ["11", "12", "13", "10"],
  answer: 0
},
{
  question: "Express 1101₂ in decimal",
  options: ["13", "12", "15", "14"],
  answer: 0
},
{
  question: "Express 7₁₀ in binary",
  options: ["111", "101", "110", "100"],
  answer: 0
},
{
  question: "Express 13₁₀ in binary",
  options: ["1101", "1011", "1110", "1111"],
  answer: 0
},
{
  question: "Find the product: 0.25 × 0.4",
  options: ["0.1", "0.01", "0.2", "1"],
  answer: 0
},
{
  question: "Simplify: 3/4 + 2/5",
  options: ["23/20", "19/20", "17/20", "21/20"],
  answer: 3
},
{
  question: "Simplify: 7/8 − 3/4",
  options: ["1/8", "2/8", "3/8", "4/8"],
  answer: 1
},
{
  question: "Find LCM of 12 and 18",
  options: ["36", "54", "72", "48"],
  answer: 0
},
{
  question: "Find GCD of 24 and 36",
  options: ["6", "12", "18", "24"],
  answer: 1
},
{
  question: "Express 255₁₀ in hexadecimal",
  options: ["FF", "FE", "AA", "F0"],
  answer: 0
},
{
  question: "Express 3A₁₆ in decimal",
  options: ["58", "59", "60", "61"],
  answer: 0
},
{
  question: "Add 1011₂ + 1101₂",
  options: ["11000₂", "10110₂", "10000₂", "11110₂"],
  answer: 3
},
{
  question: "Subtract 1010₂ − 110₂",
  options: ["1000₂", "100₁₀", "111₂", "1001₂"],
  answer: 0
},
{
  question: "Multiply: 101₂ × 11₂",
  options: ["1111₂", "1011₂", "1110₂", "1101₂"],
  answer: 2
},
{
  question: "Divide: 1100₂ ÷ 10₂",
  options: ["110₂", "100₂", "101₂", "111₂"],
  answer: 1
},
{
  question: "Simplify: 5 × (7 − 3) + 6 ÷ 2",
  options: ["26", "23", "28", "24"],
  answer: 0
},
{
  question: "Simplify: 12 ÷ (2 + 4) × 3",
  options: ["6", "5", "4", "3"],
  answer: 0
},
{
  question: "Find the square of 15",
  options: ["225", "215", "205", "235"],
  answer: 0
},
{
  question: "Find the cube of 4",
  options: ["64", "48", "16", "32"],
  answer: 0
},
{
  question: "Find √121",
  options: ["11", "12", "10", "13"],
  answer: 0
},
{
  question: "Find √196",
  options: ["14", "13", "12", "15"],
  answer: 0
},
{
  question: "Simplify: (7² − 3²)",
  options: ["40", "37", "36", "34"],
  answer: 0
},
{
  question: "Simplify: (5³ − 4³)",
  options: ["61", "49", "64", "81"],
  answer: 0
},
{
  question: "Convert 100₈ to decimal",
  options: ["64", "72", "80", "100"],
  answer: 0
},
{
  question: "Convert 77₈ to decimal",
  options: ["63", "61", "57", "65"],
  answer: 0
},
{
  question: "Add: 45 + 67 + 89",
  options: ["201", "211", "201", "201"],
  answer: 1
},
{
  question: "Subtract: 765 − 487",
  options: ["278", "288", "268", "298"],
  answer: 0
},
{
  question: "Multiply: 25 × 48",
  options: ["1200", "1150", "1250", "1300"],
  answer: 0
},
{
  question: "Divide: 960 ÷ 32",
  options: ["30", "28", "32", "40"],
  answer: 3
},
{
  question: "Find LCM of 15, 20",
  options: ["60", "45", "50", "75"],
  answer: 0
},
{
  question: "Find GCD of 56 and 98",
  options: ["14", "28", "7", "56"],
  answer: 1
},
{
  question: "Convert 1010₂ to decimal",
  options: ["10", "11", "12", "9"],
  answer: 0
},
{
  question: "Convert 1101₂ to decimal",
  options: ["13", "12", "14", "15"],
  answer: 0
},
{
  question: "Convert 15₁₀ to binary",
  options: ["1111", "1110", "1101", "1011"],
  answer: 0
},
{
  question: "Convert 9₁₀ to binary",
  options: ["1001", "1000", "1010", "1111"],
  answer: 0
},
{
  question: "Add 1010₂ + 110₁₀",
  options: ["1010₂ + 110₁₀", "1110₂", "1000₂", "1100₂"],
  answer: 3
},
{
  question: "Subtract 1001₂ − 101₂",
  options: ["100", "1000", "1010", "111"],
  answer: 1
},
{
  question: "Multiply 11₂ × 10₂",
  options: ["110₂", "101₂", "100₂", "111₂"],
  answer: 0
},
{
  question: "Divide 111₂ ÷ 11₂",
  options: ["11₂", "10₂", "1₂", "101₂"],
  answer: 1
},
{
  question: "Find the sum of first 10 natural numbers",
  options: ["55", "50", "45", "60"],
  answer: 0
},
{
  question: "Find the sum of first 15 odd numbers",
  options: ["225", "200", "210", "215"],
  answer: 0
},
{
  question: "Simplify: 2³ × 2²",
  options: ["2⁵", "2⁶", "2⁴", "2³"],
  answer: 0
},
{
  question: "Simplify: 5² × 5³",
  options: ["5⁵", "5⁶", "5⁴", "5³"],
  answer: 0
},

//algebraic expressions

{
  question: "Simplify: 3x + 5x",
  options: ["8x", "15x", "2x", "5x"],
  answer: 0
},
{
  question: "Simplify: 7a - 3a + 4",
  options: ["4a + 4", "10a + 4", "4a", "7a + 4"],
  answer: 0
},
{
  question: "Simplify: 2x + 3y - x + 4y",
  options: ["x + 7y", "3x + 7y", "x + y", "x + 4y"],
  answer: 0
},
{
  question: "Simplify: 5(a + 2) - 3(a - 1)",
  options: ["2a + 13", "8a + 13", "2a + 7", "8a + 7"],
  answer: 0
},
{
  question: "Simplify: 3(x + 2y) - 2(x - y)",
  options: ["x + 8y", "5x + 4y", "x + 4y", "5x + 8y"],
  answer: 0
},
{
  question: "Simplify: 4(2a - 3) + 5(a + 1)",
  options: ["13a - 7", "8a + 2", "13a - 2", "8a - 2"],
  answer: 0
},
{
  question: "Simplify: 6x - 3(2x - 5)",
  options: ["15", "6x + 15", "0", "6x - 15"],
  answer: 0
},
{
  question: "Simplify: 2(x + y) + 3(x - y)",
  options: ["5x + y", "x + 5y", "5x - y", "x - 5y"],
  answer: 0
},
{
  question: "Simplify: 5(a + b) - 2(a - b)",
  options: ["3a + 7b", "7a + 3b", "3a - 7b", "7a - 3b"],
  answer: 0
},
{
  question: "Simplify: (2x + 3) + (4x - 5)",
  options: ["6x - 2", "6x + 8", "2x - 2", "4x - 2"],
  answer: 0
},
{
  question: "Simplify: (3a - 5) - (a + 2)",
  options: ["2a - 7", "4a - 3", "2a + 3", "2a - 2"],
  answer: 0
},
{
  question: "Simplify: 2(x + 3) - 3(x - 2)",
  options: ["-x + 12", "5x + 12", "x + 6", "-x - 12"],
  answer: 0
},
{
  question: "Simplify: 5x - (3x - 7)",
  options: ["2x + 7", "8x - 7", "2x - 7", "8x + 7"],
  answer: 0
},
{
  question: "Simplify: 3(2x - 4) - 5(x - 1)",
  options: ["x - 7", "x + 1", "x - 1", "x + 7"],
  answer: 0
},
{
  question: "Simplify: 6(x + 1) - 2(2x - 3)",
  options: ["2x + 12", "2x + 8", "2x + 6", "2x + 10"],
  answer: 0
},
{
  question: "Simplify: (x + 3) + (2x - 5) - (x - 2)",
  options: ["2x", "3x", "x + 4", "x - 4"],
  answer: 0
},
{
  question: "Simplify: 4a + 3b - 2a + b",
  options: ["2a + 4b", "6a + 2b", "2a + 2b", "4a + 4b"],
  answer: 0
},
{
  question: "Simplify: 5(x - 2) + 3(2x + 1)",
  options: ["11x - 7", "11x - 1", "x - 7", "x + 1"],
  answer: 0
},
{
  question: "Simplify: 2(3a - 4b) + 5(b - a)",
  options: ["a - 3b", "a + 3b", "6a - 3b", "-a - 3b"],
  answer: 0
},
{
  question: "Simplify: 3(x + 2) - 4(x - 1)",
  options: ["-x + 10", "7x + 10", "x - 2", "7x - 10"],
  answer: 0
},
{
  question: "Simplify: 2a + 3b - (a - b)",
  options: ["a + 4b", "3a + 2b", "a + 2b", "2a + 4b"],
  answer: 0
},
{
  question: "Simplify: (x + 2y) - (2x - 3y)",
  options: ["-x + 5y", "3x + 5y", "x - y", "-x - y"],
  answer: 0
},
{
  question: "Simplify: 3(x - 2y) + 4(2y - x)",
  options: ["-x + 2y", "x + 2y", "x - 2y", "-x - 2y"],
  answer: 0
},
{
  question: "Simplify: 5(2x - y) - 3(x + y)",
  options: ["7x - 8y", "7x - 2y", "x - 8y", "x - 2y"],
  answer: 0
},
{
  question: "Simplify: 4a - 3b + 2(3b - a)",
  options: ["2a + 3b", "2a - 3b", "a + 3b", "a - 3b"],
  answer: 0
},
{
  question: "Simplify: 6(x - 2) - 3(2x + 1)",
  options: ["0 - 15", "0 - 12", "0 - 9", "0 - 6"],
  answer: 0
},
{
  question: "Simplify: 2x + 3y - (x + 2y) + (x - y)",
  options: ["2x", "2y", "x + y", "2x + y"],
  answer: 0
},
{
  question: "Simplify: (3a + 2b) - (2a - b)",
  options: ["a + 3b", "5a + b", "a - b", "a + b"],
  answer: 0
},
{
  question: "Simplify: 2(x + y) + 3(x - y) - x",
  options: ["4x - y", "4x + y", "x + y", "5x - y"],
  answer: 0
},
{
  question: "Simplify: 5(a - b) + 2(b - a)",
  options: ["3a - 3b", "7a - 7b", "3a + 3b", "-3a + 3b"],
  answer: 0
},
{
  question: "Simplify: 2(x - y) + 3(y - 2x)",
  options: ["-4x + y", "-4x - y", "x - y", "x + y"],
  answer: 0
},
{
  question: "Simplify: 4a + 5b - 2(2a - b)",
  options: ["4b", "6b", "3b", "5b"],
  answer: 0
},
{
  question: "Simplify: 3(x + y) - 2(2x - y)",
  options: ["-x + 5y", "x + 5y", "-x - y", "x - y"],
  answer: 0
},
{
  question: "Simplify: (a + b) + (2a - b) - (3a - 2b)",
  options: ["0", "a + 2b", "2a + 2b", "-a + 2b"],
  answer: 0
},
{
  question: "Simplify: 2(x + 3) + 3(2x - 1)",
  options: ["8x + 3", "8x + 7", "8x + 1", "7x + 7"],
  answer: 0
},
{
  question: "Simplify: 5(a + 2b) - 3(a - b)",
  options: ["2a + 13b", "8a + b", "2a + 7b", "8a + 7b"],
  answer: 0
},
{
  question: "Simplify: 3(x - y) + 4(2y - x)",
  options: ["-x + 5y", "x + 5y", "-x - y", "x - y"],
  answer: 0
},
{
  question: "Simplify: 2(a + b) + 3(a - b)",
  options: ["5a - b", "5a + b", "a + 5b", "a - 5b"],
  answer: 0
},
{
  question: "Simplify: 4(x + 2y) - 2(3x - y)",
  options: ["-2x + 9y", "2x + 9y", "-2x - y", "2x - y"],
  answer: 0
},
{
  question: "Simplify: (x + y) + (2x - 3y) - (x - y)",
  options: ["2x - y", "2x + y", "x - y", "x + y"],
  answer: 0
},
{
  question: "Simplify: 5(a + b) - 2(2a - 3b)",
  options: ["a + 11b", "a + 7b", "9a - b", "a + 5b"],
  answer: 0
},
{
  question: "Simplify: 3(x + 4) - 2(2x - 5)",
  options: ["-x + 23", "x + 23", "-x - 23", "x - 23"],
  answer: 0
},


//rational expression 

{
  question: "Simplify: (x² - 9) / (x + 3)",
  options: ["x - 3", "x + 3", "x² - 3", "x² + 3"],
  answer: 0
},
{
  question: "Simplify: (x² + 5x + 6) / (x + 2)",
  options: ["x + 3", "x + 2", "x + 6", "x + 1"],
  answer: 0
},
{
  question: "Simplify: (x² - 4x + 4) / (x - 2)",
  options: ["x - 2", "x + 2", "x² - 2", "x² + 2"],
  answer: 0
},
{
  question: "Simplify: (x² - 16) / (x - 4)",
  options: ["x + 4", "x - 4", "x² - 4", "x² + 4"],
  answer: 0
},
{
  question: "Simplify: (x² + 7x + 12) / (x + 3)",
  options: ["x + 4", "x + 3", "x + 5", "x + 2"],
  answer: 0
},
{
  question: "Simplify: (x² - 6x + 9) / (x - 3)",
  options: ["x - 3", "x + 3", "x² - 3", "x² + 3"],
  answer: 0
},
{
  question: "Simplify: (x² + 2x - 15) / (x + 5)",
  options: ["x - 3", "x + 3", "x - 5", "x + 5"],
  answer: 0
},
{
  question: "Simplify: (x² - x - 12) / (x - 4)",
  options: ["x + 3", "x - 3", "x + 4", "x - 4"],
  answer: 0
},
{
  question: "Simplify: (x² + 6x + 9) / (x + 3)",
  options: ["x + 3", "x - 3", "x² + 3", "x² - 3"],
  answer: 0
},
{
  question: "Simplify: (x² - 25) / (x - 5)",
  options: ["x + 5", "x - 5", "x² + 5", "x² - 5"],
  answer: 0
},
{
  question: "Simplify: (2x² + 8x) / (2x)",
  options: ["x + 4", "x - 4", "2x + 8", "x² + 4"],
  answer: 0
},
{
  question: "Simplify: (3x² - 12) / (3x)",
  options: ["x - 4/x", "x + 4/x", "x² - 4", "x² + 4"],
  answer: 0
},
{
  question: "Simplify: (x² + 5x + 6) / (x + 2) / (x + 3)",
  options: ["1", "x", "x + 1", "x + 2"],
  answer: 0
},
{
  question: "Simplify: (x² - 9) / (x² + 6x + 9)",
  options: ["(x - 3)/(x + 3)", "(x + 3)/(x - 3)", "x - 3", "x + 3"],
  answer: 0
},
{
  question: "Simplify: (x² + 3x - 10) / (x² - 4)",
  options: ["(x + 5)/(x + 2)", "(x - 2)/(x - 5)", "(x - 5)/(x - 2)", "(x + 2)/(x + 5)"],
  answer: 0
},
{
  question: "Simplify: (x² + x - 6) / (x² - x - 6)",
  options: ["(x + 3)/(x - 3)", "(x - 3)/(x + 3)", "(x + 2)/(x - 2)", "(x - 2)/(x + 2)"],
  answer: 0
},
{
  question: "Simplify: (x² - 16) / (x² + 4x + 4)",
  options: ["(x - 4)/(x + 2)", "(x + 4)/(x - 2)", "(x - 4)/(x - 2)", "(x + 4)/(x + 2)"],
  answer: 0
},
{
  question: "Simplify: (x² - x - 20) / (x² + 4x + 4)",
  options: ["(x - 5)/(x + 2)", "(x + 5)/(x + 2)", "(x - 4)/(x + 4)", "(x + 4)/(x + 2)"],
  answer: 0
},
{
  question: "Simplify: (x² - 1) / (x² - 2x + 1)",
  options: ["(x + 1)/(x - 1)", "(x - 1)/(x + 1)", "(x + 1)/(x + 1)", "(x - 1)/(x - 1)"],
  answer: 0
},
{
  question: "Simplify: (x² + 2x - 15) / (x² - 9)",
  options: ["(x + 5)/(x + 3)", "(x - 5)/(x - 3)", "(x + 3)/(x + 5)", "(x - 3)/(x - 5)"],
  answer: 0
},
{
  question: "Simplify: (x² - 5x + 6) / (x² - 3x + 2)",
  options: ["(x - 2)/(x - 1)", "(x - 1)/(x - 2)", "(x - 3)/(x - 2)", "(x - 2)/(x - 3)"],
  answer: 0
},
{
  question: "Simplify: (2x² + 3x - 5) / (x² + x - 2)",
  options: ["(2x - 1)/(x + 2)", "(2x + 5)/(x - 1)", "(2x - 1)/(x - 1)", "(2x + 5)/(x + 2)"],
  answer: 0
},
{
  question: "Simplify: (x² - 4x + 4) / (x² - 2x)",
  options: ["(x - 2)/x", "(x + 2)/x", "(x - 2)/(x - 2)", "(x + 2)/(x - 2)"],
  answer: 0
},
{
  question: "Simplify: (x² - 6x + 8) / (x² - 4)",
  options: ["(x - 2)/(x + 2)", "(x - 4)/(x + 2)", "(x - 2)/(x - 2)", "(x + 4)/(x - 2)"],
  answer: 0
},
{
  question: "Simplify: (x² + 7x + 12) / (x² + 5x + 6)",
  options: ["(x + 4)/(x + 2)", "(x + 3)/(x + 2)", "(x + 4)/(x + 3)", "(x + 3)/(x + 4)"],
  answer: 0
},
{
  question: "Simplify: (x² - 9x + 20) / (x² - 4x)",
  options: ["(x - 5)/(x - 2)", "(x - 4)/(x - 2)", "(x - 5)/(x + 2)", "(x - 4)/(x + 2)"],
  answer: 0
},
{
  question: "Simplify: (x² - x - 12) / (x² - 4x + 3)",
  options: ["(x + 3)/(x - 1)", "(x - 3)/(x - 1)", "(x + 4)/(x - 1)", "(x - 4)/(x + 1)"],
  answer: 0
},
{
  question: "Simplify: (x² + x - 6) / (x² - x - 6)",
  options: ["(x + 3)/(x - 3)", "(x - 3)/(x + 3)", "(x + 2)/(x - 2)", "(x - 2)/(x + 2)"],
  answer: 0
},
{
  question: "Simplify: (2x² + 5x + 3) / (x² + 4x + 3)",
  options: ["(2x + 3)/(x + 1)", "(2x + 1)/(x + 3)", "(2x + 3)/(x + 3)", "(2x + 1)/(x + 1)"],
  answer: 0
},
{
  question: "Simplify: (x² - 9) / (x² + 6x + 9)",
  options: ["(x - 3)/(x + 3)", "(x + 3)/(x - 3)", "(x - 3)/(x - 3)", "(x + 3)/(x + 3)"],
  answer: 0
},
{
  question: "Simplify: (x² - 16) / (x² - 8x + 16)",
  options: ["(x + 4)/(x - 4)", "(x - 4)/(x + 4)", "(x + 4)/(x + 4)", "(x - 4)/(x - 4)"],
  answer: 0
},
{
  question: "Simplify: (x² + 3x - 18) / (x² + 6x + 8)",
  options: ["(x - 3)/(x + 2)", "(x + 6)/(x + 2)", "(x - 3)/(x + 4)", "(x + 3)/(x + 2)"],
  answer: 0
},
{
  question: "Simplify: (x² - x - 6) / (x² - 9)",
  options: ["(x + 2)/(x + 3)", "(x - 2)/(x - 3)", "(x + 3)/(x + 2)", "(x - 3)/(x - 2)"],
  answer: 0
},
{
  question: "Simplify: (x² - 5x + 6) / (x² - 4x + 3)",
  options: ["(x - 2)/(x - 1)", "(x - 3)/(x - 1)", "(x - 3)/(x + 1)", "(x - 2)/(x + 1)"],
  answer: 0
},
{
  question: "Simplify: (x² + 7x + 12) / (x² + 3x - 4)",
  options: ["(x + 4)/(x + 4)", "(x + 3)/(x - 1)", "(x + 4)/(x - 1)", "(x + 3)/(x + 4)"],
  answer: 0
},
{
  question: "Simplify: (x² - 4x + 4) / (x² - 2x)",
  options: ["(x - 2)/x", "(x + 2)/x", "(x - 2)/(x - 2)", "(x + 2)/(x - 2)"],
  answer: 0
},
{
  question: "Simplify: (x² - x - 20) / (x² - 9x + 20)",
  options: ["(x + 4)/(x - 5)", "(x - 4)/(x - 5)", "(x + 5)/(x - 4)", "(x - 5)/(x - 4)"],
  answer: 0
},
{
  question: "Simplify: (x² + 5x + 6) / (x² + 7x + 12)",
  options: ["(x + 2)/(x + 4)", "(x + 3)/(x + 4)", "(x + 2)/(x + 3)", "(x + 3)/(x + 2)"],
  answer: 0
},

// sequence and series

{
  question: "The first term of an AP is 5 and the common difference is 3. Find the 10th term.",
  options: ["32", "35", "30", "28"],
  answer: 0
},
{
  question: "The 5th term of an AP is 20 and the 2nd term is 8. Find the first term.",
  options: ["2", "4", "6", "8"],
  answer: 1
},
{
  question: "Find the sum of the first 20 terms of an AP: 3, 7, 11,...",
  options: ["880", "920", "940", "960"],
  answer: 3
},
{
  question: "The sum of first n terms of an AP is 200. If a = 5 and d = 3, find n.",
  options: ["10", "11", "12", "13"],
  answer: 2
},
{
  question: "The 8th term of an AP is 34 and the 3rd term is 19. Find the common difference.",
  options: ["3", "4", "5", "6"],
  answer: 2
},
{
  question: "The sum of first 15 natural numbers is:",
  options: ["120", "105", "135", "150"],
  answer: 1
},
{
  question: "Find the 12th term of the AP: 2, 5, 8,...",
  options: ["35", "32", "38", "41"],
  answer: 1
},
{
  question: "If a = 7 and d = 4, find the sum of first 25 terms of the AP.",
  options: ["875", "825", "900", "950"],
  answer: 0
},
{
  question: "The sum of first n terms of an AP is given by S_n = n² + 3n. Find the 5th term.",
  options: ["35", "31", "28", "30"],
  answer: 1
},
{
  question: "The 7th term of an AP is 19. If a = 1 and d = 3, find n such that T_n = 19.",
  options: ["7", "6", "8", "5"],
  answer: 0
},
{
  question: "Find the sum of first 10 terms of the AP: 1, 4, 7,...",
  options: ["145", "130", "160", "115"],
  answer: 1
},
{
  question: "The 4th term of a GP is 54 and the first term is 2. If the common ratio is r, find r.",
  options: ["3", "4", "5", "6"],
  answer: 0
},
{
  question: "The sum of first 5 terms of a GP: 3, 6, 12,... is:",
  options: ["189", "195", "201", "210"],
  answer: 0
},
{
  question: "The sum to infinity of a GP is 16. If a = 8, find r.",
  options: ["1/2", "1/3", "1/4", "1/5"],
  answer: 0
},
{
  question: "If a = 5 and r = 2, find the 6th term of the GP.",
  options: ["160", "155", "180", "200"],
  answer: 0
},
{
  question: "The sum of first n terms of a GP is S_n = 3(2^n - 1). Find the 5th term.",
  options: ["48", "45", "50", "40"],
  answer: 0
},
{
  question: "Find the 8th term of GP: 1, 3, 9,...",
  options: ["2187", "243", "729", "6561"],
  answer: 0
},
{
  question: "If the 3rd term of a GP is 12 and the 6th term is 96, find the first term.",
  options: ["3", "2", "4", "6"],
  answer: 0
},
{
  question: "The sum of first 4 terms of a GP: 2, 6, 18,... is:",
  options: ["80", "74", "68", "65"],
  answer: 2
},
{
  question: "If S∞ = 10 and a = 5, find the common ratio r of the GP.",
  options: ["1/2", "1/3", "1/4", "2/3"],
  answer: 0
},
{
  question: "The sum of first 6 terms of an AP: 4, 9, 14,... is:",
  options: ["129", "138", "144", "149"],
  answer: 2
},
{
  question: "The 10th term of the AP: 7, 11, 15,... is:",
  options: ["43", "47", "51", "55"],
  answer: 2
},
{
  question: "If a = 2, d = 3, find the 20th term of the AP.",
  options: ["59", "60", "61", "62"],
  answer: 2
},
{
  question: "Find the sum of first 12 terms of AP: 5, 9, 13,...",
  options: ["384", "360", "396", "420"],
  answer: 2
},
{
  question: "The sum of first n terms of an AP: 2, 5, 8,... is 275. Find n.",
  options: ["15", "20", "25", "30"],
  answer: 2
},
{
  question: "If a = 3 and r = 2, find the sum of first 8 terms of GP.",
  options: ["765", "765", "765", "510"],
  answer: 0
},
{
  question: "The 5th term of GP: 2, 4, 8,... is:",
  options: ["32", "16", "64", "128"],
  answer: 1
},
{
  question: "If S∞ = 12 and a = 8, find the common ratio r.",
  options: ["1/3", "1/2", "1/4", "1/5"],
  answer: 1
},
{
  question: "Find the sum of first 7 terms of AP: 6, 10, 14,...",
  options: ["210", "182", "196", "224"],
  answer: 2
},
{
  question: "The 9th term of an AP is 50. If a = 6, d = 5, find n for T_n = 50.",
  options: ["9", "10", "8", "11"],
  answer: 0
},
{
  question: "The sum of first n terms of GP: 3, 6, 12,... is 189. Find n.",
  options: ["5", "6", "7", "8"],
  answer: 2
},
{
  question: "The 6th term of a GP: 1, 2, 4,... is:",
  options: ["32", "16", "64", "8"],
  answer: 1
},
{
  question: "If a = 1, r = 1/2, find S∞ of the GP.",
  options: ["2", "1", "3", "4"],
  answer: 0
},
{
  question: "The sum of first 15 natural numbers is:",
  options: ["120", "105", "135", "120"],
  answer: 2
},
{
  question: "The sum of first 20 terms of AP: 7, 10, 13,... is:",
  options: ["570", "600", "630", "660"],
  answer: 1
},
{
  question: "The 12th term of AP: 3, 7, 11,... is:",
  options: ["47", "43", "39", "51"],
  answer: 0
},
{
  question: "Find n if S_n = 120 for AP: 2, 5, 8,...",
  options: ["10", "12", "15", "20"],
  answer: 2
},
{
  question: "The 8th term of GP: 5, 10, 20,... is:",
  options: ["320", "640", "1280", "2560"],
  answer: 1
},
{
  question: "If a = 3, r = 1/3, find S∞ of GP.",
  options: ["9/2", "3/2", "6", "4"],
  answer: 1
},
{
  question: "The sum of first 10 terms of AP: 4, 9, 14,... is:",
  options: ["460", "475", "495", "500"],
  answer: 2
},
{
  question: "The 5th term of AP: 2, 5, 8,... is:",
  options: ["14", "15", "16", "17"],
  answer: 1
},
{
  question: "Find the 10th term of GP: 1, 3, 9,...",
  options: ["19683", "59049", "729", "2187"],
  answer: 0
},
{
  question: "The sum of first n terms of GP: 2, 6, 18,... is 728. Find n.",
  options: ["5", "6", "7", "8"],
  answer: 2
},
{
  question: "If a = 8, r = 1/4, find S∞ of GP.",
  options: ["10.67", "8/3", "32/3", "4"],
  answer: 2
},
{
  question: "The sum of first 12 terms of AP: 3, 7, 11,... is:",
  options: ["510", "564", "576", "600"],
  answer: 2
},
{
  question: "The 7th term of AP: 5, 9, 13,... is:",
  options: ["33", "29", "37", "41"],
  answer: 0
}, 

  
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
  question: "Which of the following is a pure substance made of only one type of atom?",
  options: ["Compound", "Element", "Mixture", "Alloy"],
  answer: 1,
},
{
  question: "A substance formed when two or more elements chemically combine in fixed proportions is called a _______.",
  options: ["Mixture", "Solution", "Compound", "Isotope"],
  answer: 2,
},
{
  question: "Which state of matter has a definite volume but no definite shape?",
  options: ["Solid", "Liquid", "Gas", "Plasma"],
  answer: 1,
},
{
  question: "Atoms of the same element that have different numbers of neutrons are called _______.",
  options: ["Ions", "Isotopes", "Allotropes", "Molecules"],
  answer: 1,
},
{
  question: "The number of protons in the nucleus of an atom is called the _______.",
  options: ["Mass number", "Atomic mass", "Atomic number", "Valency"],
  answer: 2,
},
{
  question: "Which particle has a negative charge and orbits the nucleus?",
  options: ["Proton", "Neutron", "Electron", "Photon"],
  answer: 2,
},
{
  question: "Which bond involves the transfer of electrons from one atom to another?",
  options: ["Covalent bond", "Ionic bond", "Hydrogen bond", "Metallic bond"],
  answer: 1,
},
{
  question: "A covalent bond is formed by the _______ of electrons between atoms.",
  options: ["Transfer", "Exchange", "Sharing", "Loss"],
  answer: 2,
},
{
  question: "Which of these is an example of a homogeneous mixture?",
  options: ["Sand in water", "Granite", "Air", "Oil and water"],
  answer: 2,
},
{
  question: "The relative atomic mass of an element is the average mass of its atoms compared with _______.",
  options: ["Carbon-12", "Hydrogen-1", "Oxygen-16", "Proton mass"],
  answer: 0,
},
{
  question: "Which term describes the smallest particle of a compound that retains the properties of that compound?",
  options: ["Atom", "Molecule", "Ion", "Isotope"],
  answer: 1,
},
{
  question: "Avogadro's number (approximately 6.02 × 10^23) gives the number of particles in one _______.",
  options: ["Mole", "Gram", "Liter", "Molecule"],
  answer: 0,
},
{
  question: "The molar mass of water (H₂O) is approximately _______ g mol⁻¹.",
  options: ["16", "18", "20", "34"],
  answer: 1,
},
{
  question: "Which of these expresses concentration as moles of solute per litre of solution?",
  options: ["Molality", "Mass percent", "Normality", "Molarity"],
  answer: 3,
},
{
  question: "A substance that increases the rate of a chemical reaction without being consumed is called a _______.",
  options: ["Reactant", "Catalyst", "Inhibitor", "Solvent"],
  answer: 1,
},
{
  question: "Which of the following is a property of metals?",
  options: ["Brittle", "Poor conductor of heat", "Malleable", "Non-lustrous"],
  answer: 2,
},
{
  question: "The pH of a neutral aqueous solution at 25°C is approximately _______.",
  options: ["0", "7", "14", "1"],
  answer: 1,
},
{
  question: "Which of the following is a strong acid?",
  options: ["Acetic acid (CH₃COOH)", "Hydrochloric acid (HCl)", "Ethanol (C₂H₅OH)", "Ammonia (NH₃)"],
  answer: 1,
},
{
  question: "A solution that resists changes in pH when small amounts of acid or base are added is called a _______.",
  options: ["Buffer", "Dilute solution", "Saturated solution", "Colloid"],
  answer: 0,
},
{
  question: "The substance in which solute dissolves is called the _______.",
  options: ["Solute", "Solvent", "Solution", "Precipitate"],
  answer: 1,
},
{
  question: "Which separation technique is best for separating suspended solids from a liquid?",
  options: ["Distillation", "Filtration", "Chromatography", "Electrolysis"],
  answer: 1,
},
{
  question: "Which process separates components of a mixture based on differences in boiling points?",
  options: ["Filtration", "Evaporation", "Distillation", "Sedimentation"],
  answer: 2,
},
{
  question: "An ionic compound must contain _______.",
  options: ["Only non-metals", "Only metals", "Metal and non-metal", "Only noble gases"],
  answer: 2,
},
{
  question: "Which is true about isotopes?",
  options: ["Same number of neutrons, different protons", "Same atomic number, different mass number", "Different chemical element", "Always unstable"],
  answer: 1,
},
{
  question: "Electrolytes are substances that produce _______ when dissolved in water.",
  options: ["Insulating solution", "Non-conductive medium", "Ions", "Colloids"],
  answer: 2,
},
{
  question: "Which gas is released when an acid reacts with a carbonate?",
  options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Nitrogen"],
  answer: 2,
},
{
  question: "Which of these best describes an empirical formula?",
  options: ["Exact number of atoms in a molecule", "Lowest whole-number ratio of atoms in a compound", "Molecular mass expressed in g mol⁻¹", "Number of moles present"],
  answer: 1,
},
{
  question: "The electronic configuration of sodium (atomic number 11) in its ground state ends with _______.",
  options: ["...2s²", "...3s¹", "...3p⁶", "...2p⁶"],
  answer: 1,
},
{
  question: "Which of the following is a covalent molecular compound?",
  options: ["Sodium chloride (NaCl)", "Magnesium oxide (MgO)", "Water (H₂O)", "Calcium carbonate (CaCO₃)"],
  answer: 2,
},
{
  question: "Which property describes how easily a substance dissolves in a solvent?",
  options: ["Viscosity", "Solubility", "Boiling point", "Conductivity"],
  answer: 1,
},
{
  question: "Which technique separates pigments based on their solubility and capillary action?",
  options: ["Distillation", "Chromatography", "Filtration", "Titration"],
  answer: 1,
},
{
  question: "The boiling point elevation and freezing point depression are colligative properties that depend on _______.",
  options: ["Type of solute particles", "Number of solute particles", "Color of solution", "pH of solution"],
  answer: 1,
},
{
  question: "In a redox reaction, the species that loses electrons is _______.",
  options: ["Reduced", "Oxidized", "Neutralized", "Hydrolyzed"],
  answer: 1,
},
{
  question: "Which of the following best describes an acid according to Brønsted–Lowry theory?",
  options: ["Electron pair donor", "Proton (H⁺) donor", "Proton acceptor", "Electron acceptor"],
  answer: 1,
},
{
  question: "Which indicator changes colour around pH 7 and is often used for neutrality tests?",
  options: ["Methyl orange", "Phenolphthalein", "Bromothymol blue", "Litmus"],
  answer: 2,
},
{
  question: "Hard water is mainly caused by high concentrations of _______ and _______ ions.",
  options: ["Na⁺ and K⁺", "Ca²⁺ and Mg²⁺", "Cl⁻ and NO₃⁻", "H⁺ and OH⁻"],
  answer: 1,
},
{
  question: "Which term describes the mass of one mole of a substance in grams?",
  options: ["Atomic number", "Molar mass", "Relative abundance", "Mole fraction"],
  answer: 1,
},
{
  question: "Which statement about catalysts is TRUE?",
  options: ["They change the equilibrium position", "They increase activation energy", "They are consumed in the reaction", "They provide an alternative reaction pathway with lower activation energy"],
  answer: 3,
},
{
  question: "A neutralisation reaction occurs between an acid and a base to form _______.",
  options: ["Salt and water", "Carbon dioxide and water", "Oxide and hydrogen", "Gas and precipitate"],
  answer: 0,
},
{
  question: "Which of the following is NOT a physical change?",
  options: ["Melting of ice", "Boiling of water", "Rusting of iron", "Dissolving sugar in water"],
  answer: 2,
},
{
  question: "Which type of bond is primarily responsible for the unique properties of water (e.g., high surface tension)?",
  options: ["Ionic bonds", "Covalent bonds", "Hydrogen bonds", "Metallic bonds"],
  answer: 2,
},
{
  question: "Which technique is used to determine the concentration of an acid or base using a standard solution?",
  options: ["Titration", "Chromatography", "Distillation", "Filtration"],
  answer: 0,
},
{
  question: "An aqueous solution with [H⁺] = 1 × 10⁻⁴ mol L⁻¹ has a pH of _______.",
  options: ["2", "3", "4", "10"],
  answer: 2,
},
{
  question: "Which of the following formulae represents a molecule that is a hydrocarbon?",
  options: ["C₂H₅OH", "CH₄", "H₂O", "NH₃"],
  answer: 1,
},
{
  question: "Which quantity gives the number of particles in a given mass of substance by using molar mass and Avogadro's number?",
  options: ["Molarity", "Mass percent", "Number of moles", "Mole calculation using n = mass/molar mass then × Avogadro's number",],
  options: ["Molarity", "Mass percent", "Number of moles", "Mole calculation using n = mass/molar mass then × Avogadro's number"],
  answer: 3,
},
{
  question: "Which process involves the gain of electrons?",
  options: ["Oxidation", "Reduction", "Neutralization", "Hydrolysis"],
  options: ["Oxidation", "Reduction", "Neutralization", "Hydrolysis"],
  answer: 1,
},
{
  question: "Which property increases down a group in the periodic table for alkali metals?",
  options: ["Ionization energy", "Atomic radius", "Electronegativity", "Number of valence electrons"],
  answer: 1,
},
{
  question: "Which of the following is an example of a chemical change?",
  options: ["Cutting paper", "Dissolving salt in water", "Combustion of petrol", "Melting butter"],
  answer: 2,
},
{
  question: "Which compound is a major component of biological buffers in blood (important for biology students to know)?",
  options: ["Sodium chloride", "Sodium bicarbonate (NaHCO₃)", "Calcium carbonate", "Magnesium sulfate"],
  answer: 1,
},
{
  question: "Which reagent would you use to test for the presence of starch in a sample?",
  options: ["Litmus paper", "Iodine solution", "Benedict's solution", "Silver nitrate"],
  answer: 1,
},
{
  question: "Which of the following best describes an exothermic reaction?",
  options: ["Absorbs heat from surroundings", "Releases heat to surroundings", "No heat exchange", "Consumes products"],
  answer: 1,
},

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

//introduction to biology

{
  question: "Biology is the scientific study of _______.",
  options: ["Matter and energy", "Living organisms", "Rocks and minerals", "Atmospheric phenomena"],
  answer: 1,
},
{
  question: "Which of the following is NOT a characteristic of living organisms?",
  options: ["Reproduction", "Growth and development", "Response to stimuli", "Ability to form crystals"],
  answer: 3,
},
{
  question: "The basic structural and functional unit of all living organisms is the _______.",
  options: ["Tissue", "Organ", "Cell", "Organ system"],
  answer: 2,
},
{
  question: "Which statement best expresses the cell theory?",
  options: ["All cells arise from non-living matter", "All organisms are unicellular", "All living things are made of cells and all cells come from preexisting cells", "Cells are only found in plants and animals"],
  answer: 2,
},
{
  question: "Which organelle is known as the 'powerhouse' of the cell because it produces ATP?",
  options: ["Chloroplast", "Endoplasmic reticulum", "Mitochondrion", "Golgi apparatus"],
  answer: 2,
},
{
  question: "Photosynthesis mainly occurs in which cell organelle?",
  options: ["Mitochondrion", "Chloroplast", "Nucleus", "Ribosome"],
  answer: 1,
},
{
  question: "Which of the following macromolecules is the main source of immediate energy for cells?",
  options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
  answer: 0,
},
{
  question: "Which biomolecule carries genetic information?",
  options: ["Carbohydrate", "Lipid", "Protein", "Nucleic acid"],
  answer: 3,
},
{
  question: "Enzymes are biological catalysts that _______.",
  options: ["Are permanently changed during the reaction", "Slow down chemical reactions", "Lower the activation energy of reactions", "Increase the equilibrium constant of reactions"],
  answer: 2,
},
{
  question: "Which of the following affects the activity of an enzyme?",
  options: ["Temperature", "pH", "Substrate concentration", "All of the above"],
  answer: 3,
},
{
  question: "Which process moves molecules from a region of higher concentration to lower concentration without energy input?",
  options: ["Active transport", "Facilitated diffusion", "Diffusion", "Endocytosis"],
  answer: 2,
},
{
  question: "Osmosis is the movement of _______ across a selectively permeable membrane.",
  options: ["Solute particles from low to high concentration", "Water from low to high potential", "Water from high to low water potential", "Ions against their concentration gradient"],
  answer: 2,
},
{
  question: "Which of these is a prokaryotic organism?",
  options: ["Amoeba", "Bacterium", "Frog", "Yeast"],
  answer: 1,
},
{
  question: "Which kingdom contains multicellular, photosynthetic organisms with cell walls made of cellulose?",
  options: ["Protista", "Fungi", "Plantae", "Animalia"],
  answer: 2,
},
{
  question: "Which pair correctly shows the sequence of biological organization from simplest to more complex?",
  options: ["Organ → Cell → Tissue → Organ system", "Atom → Molecule → Cell → Tissue", "Organism → Organ system → Organ → Tissue", "Population → Organism → Community → Ecosystem"],
  answer: 1,
},
{
  question: "Which of the following best describes homeostasis?",
  options: ["The change in species over time", "Maintenance of a stable internal environment", "Production of gametes", "Energy conversion in cells"],
  answer: 1,
},
{
  question: "Which tool is best for observing the shape and internal structure of small cells?",
  options: ["Stethoscope", "Light microscope", "Thermometer", "Balance"],
  answer: 1,
},
{
  question: "Which branch of biology studies interactions between organisms and their environment?",
  options: ["Genetics", "Ecology", "Cytology", "Anatomy"],
  answer: 1,
},
{
  question: "What is a population in ecological terms?",
  options: ["All organisms of different species in an area", "A group of individuals of the same species in an area", "All non-living components of an ecosystem", "All communities in a biosphere"],
  answer: 1,
},
{
  question: "Which of the following is an example of a biotic factor in an ecosystem?",
  options: ["Soil pH", "Temperature", "Predators", "Sunlight"],
  answer: 2,
},
{
  question: "DNA replication occurs during which phase of the cell cycle?",
  options: ["M phase (mitosis)", "G₁ phase", "S phase (synthesis)", "G₂ phase"],
  answer: 2,
},
{
  question: "Which process produces two genetically identical daughter cells?",
  options: ["Meiosis", "Mitosis", "Fertilization", "Crossing over"],
  answer: 1,
},
{
  question: "Which type of cell division reduces the chromosome number by half to produce gametes?",
  options: ["Binary fission", "Mitosis", "Meiosis", "Budding"],
  answer: 2,
},
{
  question: "Which nucleotide base is found in RNA but not in DNA?",
  options: ["Adenine", "Cytosine", "Uracil", "Thymine"],
  answer: 2,
},
{
  question: "Which process in plants converts light energy into chemical energy (glucose)?",
  options: ["Respiration", "Fermentation", "Photosynthesis", "Transpiration"],
  answer: 2,
},
{
  question: "Which equation best represents aerobic respiration (generalised)?",
  options: ["C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy", "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂", "Light + H₂O → O₂ + glucose"],
  answer: 0,
},
{
  question: "Which organ system is primarily responsible for transporting oxygen and nutrients to body cells?",
  options: ["Digestive system", "Nervous system", "Circulatory system", "Excretory system"],
  answer: 2,
},
{
  question: "Which blood vessels carry blood away from the heart?",
  options: ["Veins", "Venules", "Capillaries", "Arteries"],
  answer: 3,
},
{
  question: "Which organ is the main site of nutrient absorption in the human digestive system?",
  options: ["Stomach", "Large intestine", "Small intestine", "Esophagus"],
  answer: 2,
},
{
  question: "Which macromolecule is most important for building and repairing tissues?",
  options: ["Carbohydrates", "Proteins", "Lipids", "Vitamins"],
  answer: 1,
},
{
  question: "Which vitamin is essential for normal blood clotting?",
  options: ["Vitamin C", "Vitamin D", "Vitamin K", "Vitamin A"],
  answer: 2,
},
{
  question: "Which structure carries genetic information that is passed from parents to offspring?",
  options: ["Ribosome", "Chromosome", "Lysosome", "Golgi body"],
  answer: 1,
},
{
  question: "Which of the following is a method for measuring the magnification of a light microscope image?",
  options: ["Multiply the eyepiece magnification by the objective magnification", "Add the eyepiece and objective magnifications", "Divide the objective by the eyepiece magnification", "Use only the objective magnification"],
  answer: 0,
},
{
  question: "Which of these is an example of a non-infectious disease?",
  options: ["Malaria", "Tuberculosis", "Sickle cell anaemia", "Measles"],
  answer: 2,
},
{
  question: "Which organ removes nitrogenous wastes from the blood in humans?",
  options: ["Lungs", "Liver", "Kidney", "Heart"],
  answer: 2,
},
{
  question: "Which type of reproduction produces offspring genetically identical to the parent?",
  options: ["Sexual reproduction", "Asexual reproduction", "Fertilization", "Crossing over"],
  answer: 1,
},
{
  question: "Which structure in a plant cell provides rigidity and is made of cellulose?",
  options: ["Cell membrane", "Cell wall", "Vacuole", "Plastid"],
  answer: 1,
},
{
  question: "Which physiological process in plants results mainly in loss of water vapour from leaves?",
  options: ["Transpiration", "Photosynthesis", "Respiration", "Germination"],
  answer: 0,
},
{
  question: "Which term describes small genetic changes in a population over a long time?",
  options: ["Homeostasis", "Evolution", "Metabolism", "Osmosis"],
  answer: 1,
},
{
  question: "Which structure controls the entry and exit of substances in and out of the cell?",
  options: ["Cell wall", "Nucleus", "Cell membrane", "Ribosome"],
  answer: 2,
},
{
  question: "Which simple test reagent is used to detect the presence of reducing sugars?",
  options: ["Iodine solution", "Benedict's solution", "Litmus paper", "Biuret reagent"],
  answer: 1,
},
{
  question: "What is the role of ribosomes in the cell?",
  options: ["Lipid synthesis", "Protein synthesis", "ATP production", "DNA replication"],
  answer: 1,
},
{
  question: "Which term describes the variety of all living organisms in an area?",
  options: ["Population", "Community", "Biodiversity", "Habitat"],
  answer: 2,
},
{
  question: "Which simple experimental practice involves comparing a treatment group to a group that does not receive the treatment?",
  options: ["Replication", "Randomization", "Control", "Observation"],
  answer: 2,
},
{
  question: "Which gas is a major by-product of photosynthesis and is released into the atmosphere?",
  options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"],
  answer: 1,
},
{
  question: "Which major macromolecule forms cell membranes (with phospholipids) and stores long-term energy?",
  options: ["Carbohydrates", "Proteins", "Lipids", "Nucleic acids"],
  answer: 2,
},
{
  question: "Which is the correct order of taxonomic ranks from broadest to most specific?",
  options: ["Species → Genus → Family → Order", "Kingdom → Phylum → Class → Order", "Genus → Species → Family → Order", "Order → Class → Phylum → Kingdom"],
  answer: 1,
},

//cell and its environment 

{
  question: "Which of the following is NOT a characteristic of living things?",
  options: ["Growth", "Respiration", "Photosynthesis", "Inertia"],
  answer: 3,
},
{
  question: "Which characteristic of living things involves the removal of waste products of metabolism?",
  options: ["Reproduction", "Nutrition", "Excretion", "Growth"],
  answer: 2,
},
{
  question: "The ability of living organisms to respond to changes in their environment is called _______.",
  options: ["Irritability", "Adaptation", "Locomotion", "Homeostasis"],
  answer: 0,
},
{
  question: "Which of the following is the most basic characteristic of living things?",
  options: ["Ability to move", "Ability to respire", "Ability to reproduce", "Cellular organization"],
  answer: 3,
},
{
  question: "The maintenance of a constant internal environment in an organism is known as _______.",
  options: ["Metabolism", "Homeostasis", "Coordination", "Regulation"],
  answer: 1,
},
{
  question: "Which of the following life processes is necessary for continuity of species?",
  options: ["Excretion", "Respiration", "Reproduction", "Nutrition"],
  answer: 2,
},
{
  question: "Growth in living organisms occurs by _______.",
  options: ["Increase in size of cells only", "Increase in number and size of cells", "Absorption of water", "Accumulation of waste"],
  answer: 1,
},
{
  question: "Which of the following is NOT an example of movement in plants?",
  options: ["Nastic movement", "Tropic movement", "Locomotion", "Growth curvature"],
  answer: 2,
},
{
  question: "The process by which green plants make their food using sunlight is called _______.",
  options: ["Respiration", "Transpiration", "Photosynthesis", "Fermentation"],
  answer: 2,
},
{
  question: "The life process by which energy is released from food substances is called _______.",
  options: ["Photosynthesis", "Respiration", "Digestion", "Circulation"],
  answer: 1,
},
{
  question: "Which of the following is a waste product of respiration?",
  options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Glucose"],
  answer: 1,
},
{
  question: "All living things are made up of _______.",
  options: ["Tissues", "Cells", "Organs", "Systems"],
  answer: 1,
},
{
  question: "The process by which living organisms take in food substances and utilize them is called _______.",
  options: ["Excretion", "Nutrition", "Respiration", "Irritability"],
  answer: 1,
},
{
  question: "Which of these is NOT a characteristic of living things?",
  options: ["Feeding", "Respiration", "Movement", "Evaporation"],
  answer: 3,
},
{
  question: "Which of the following statements about living things is true?",
  options: ["All living things are multicellular", "All living things reproduce", "All living things have backbones", "All living things live in water"],
  answer: 1,
},
{
  question: "Which of the following is an example of asexual reproduction?",
  options: ["Budding in yeast", "Pollination in plants", "Fertilization in humans", "Copulation in animals"],
  answer: 0,
},
{
  question: "The process by which organisms become suited to their environment is called _______.",
  options: ["Irritability", "Adaptation", "Evolution", "Reproduction"],
  answer: 1,
},
{
  question: "The ability of an organism to move from one place to another is called _______.",
  options: ["Locomotion", "Irritability", "Growth", "Tropism"],
  answer: 0,
},
{
  question: "Which of these characteristics is common to both plants and animals?",
  options: ["Photosynthesis", "Irritability", "Locomotion", "Heterotrophic feeding"],
  answer: 1,
},
{
  question: "Which process in living organisms ensures the continuity of life?",
  options: ["Growth", "Reproduction", "Nutrition", "Respiration"],
  answer: 1,
},
{
  question: "In living organisms, metabolism refers to _______.",
  options: ["Growth and development only", "All chemical reactions taking place in the body", "Reproduction and digestion only", "Movement and excretion only"],
  answer: 1,
},
{
  question: "The sum total of anabolic and catabolic reactions in an organism is called _______.",
  options: ["Metabolism", "Nutrition", "Respiration", "Homeostasis"],
  answer: 0,
},
{
  question: "Which of the following life processes involves both anabolic and catabolic reactions?",
  options: ["Respiration", "Metabolism", "Photosynthesis", "Reproduction"],
  answer: 1,
},
{
  question: "The waste products of photosynthesis are _______.",
  options: ["Carbon dioxide and water", "Oxygen and water", "Oxygen and glucose", "Glucose and starch"],
  answer: 1,
},
{
  question: "Which feature distinguishes living things from non-living things?",
  options: ["Ability to expand", "Ability to reproduce", "Ability to reflect light", "Ability to rust"],
  answer: 1,
},
{
  question: "Which of the following represents a catabolic process?",
  options: ["Photosynthesis", "Protein synthesis", "Respiration", "Cell division"],
  answer: 2,
},
{
  question: "The process of breaking down large food molecules into simpler forms is known as _______.",
  options: ["Assimilation", "Digestion", "Absorption", "Respiration"],
  answer: 1,
},
{
  question: "In plants, movement of growth in response to light is called _______.",
  options: ["Geotropism", "Phototropism", "Hydrotropism", "Nastic movement"],
  answer: 1,
},
{
  question: "Which of the following organisms exhibits locomotion?",
  options: ["Mucor", "Hydra", "Mushroom", "Spirogyra"],
  answer: 1,
},
{
  question: "Which life process provides raw materials for respiration?",
  options: ["Photosynthesis", "Nutrition", "Excretion", "Reproduction"],
  answer: 1,
},
{
  question: "Which process ensures that organisms maintain their internal environment despite external changes?",
  options: ["Adaptation", "Homeostasis", "Irritability", "Reproduction"],
  answer: 1,
},
{
  question: "Which of these life processes involves the intake and use of oxygen?",
  options: ["Growth", "Excretion", "Respiration", "Photosynthesis"],
  answer: 2,
},
{
  question: "The release of energy from glucose molecules occurs in the _______.",
  options: ["Nucleus", "Mitochondrion", "Ribosome", "Chloroplast"],
  answer: 1,
},
{
  question: "Which of the following is a feature common to all living cells?",
  options: ["Nucleus", "Cytoplasm", "Cell wall", "Chloroplast"],
  answer: 1,
},
{
  question: "A change in an organism’s surroundings that causes a response is known as a _______.",
  options: ["Reflex", "Stimulus", "Impulse", "Adaptation"],
  answer: 1,
},
{
  question: "Living organisms require energy mainly for _______.",
  options: ["Respiration", "Growth and maintenance of life", "Diffusion", "Photosynthesis"],
  answer: 1,
},
{
  question: "Which of the following best describes an autotroph?",
  options: ["An organism that feeds on others", "An organism that manufactures its own food", "An organism that decomposes organic matter", "An organism that lacks chlorophyll"],
  answer: 1,
},
{
  question: "Which group of organisms reproduces by spore formation?",
  options: ["Mammals", "Fungi", "Insects", "Reptiles"],
  answer: 1,
},
{
  question: "Which of these life processes ensures the removal of toxic materials from the body?",
  options: ["Excretion", "Egestion", "Secretion", "Assimilation"],
  answer: 0,
},
{
  question: "The breaking down of food molecules to release energy is referred to as _______.",
  options: ["Digestion", "Catabolism", "Anabolism", "Assimilation"],
  answer: 1,
},
{
  question: "The structural complexity of living things is arranged in which order?",
  options: ["Organ → Tissue → Cell → Organ system", "Cell → Tissue → Organ → Organ system", "Tissue → Cell → Organ → System", "System → Organ → Cell → Tissue"],
  answer: 1,
},
{
  question: "Which of the following is a characteristic of all living organisms?",
  options: ["Movement", "Photosynthesis", "Backbone", "Seed formation"],
  answer: 0,
},
{
  question: "An example of excretion in plants is _______.",
  options: ["Loss of water vapour through the stomata", "Formation of starch", "Absorption of minerals", "Transport of food"],
  answer: 0,
},
{
  question: "The basic difference between living and non-living things is the ability to _______.",
  options: ["Move", "Grow and reproduce", "Exist", "Change colour"],
  answer: 1,
},
{
  question: "Which process ensures survival of species over generations?",
  options: ["Reproduction", "Nutrition", "Excretion", "Growth"],
  answer: 0,
},
{
  question: "The removal of metabolic waste products in animals is carried out by the _______.",
  options: ["Heart", "Kidneys", "Lungs", "Liver"],
  answer: 1,
},
{
  question: "Which of the following activities is NOT common to all living things?",
  options: ["Movement", "Respiration", "Reproduction", "Photosynthesis"],
  answer: 3,
},
{
  question: "An organism’s ability to adjust to its environment for survival is known as _______.",
  options: ["Homeostasis", "Adaptation", "Metabolism", "Growth"],
  answer: 1,
},
{
  question: "Which of these describes a living thing?",
  options: ["Capable of reproducing and responding to stimuli", "Cannot move", "Cannot excrete waste", "Lacks growth ability"],
  answer: 0,
},
{
  question: "Which of the following is NOT a life process?",
  options: ["Feeding", "Excretion", "Metabolism", "Crystallization"],
  answer: 3,
},
{
  question: "Living things show organization in structure and function, beginning from _______.",
  options: ["Tissue", "Organ", "Cell", "Organ system"],
  answer: 2,
},

  {
    question: "Which of the following is a basic characteristic of all living things?",
    options: ["Movement", "Photosynthesis", "Growth", "Reproduction"],
    answer: 3,
  },
  {
    question: "Which of these processes is necessary for the continuity of life?",
    options: ["Nutrition", "Excretion", "Reproduction", "Respiration"],
    answer: 2,
  },
  {
    question: "Which of the following characteristics of living things is demonstrated by a plant bending towards light?",
    options: ["Growth", "Irritability", "Reproduction", "Movement"],
    answer: 1,
  },
  {
    question: "Which of the following is NOT a characteristic of living things?",
    options: ["Respiration", "Death", "Growth", "Decay"],
    answer: 3,
  },
  {
    question: "The ability of living organisms to respond to changes in their environment is called _______.",
    options: ["Reproduction", "Irritability", "Adaptation", "Metabolism"],
    answer: 1,
  },
  {
    question: "In animals, excretion is important for removing _______.",
    options: ["Carbon dioxide and nitrogenous waste", "Water and oxygen", "Nutrients and salts", "Enzymes and vitamins"],
    answer: 0,
  },
  {
    question: "The sum of all chemical processes in a living organism is referred to as _______.",
    options: ["Digestion", "Metabolism", "Irritability", "Circulation"],
    answer: 1,
  },
  {
    question: "Which of the following processes involves the breakdown of food substances to release energy?",
    options: ["Photosynthesis", "Respiration", "Excretion", "Digestion"],
    answer: 1,
  },
  {
    question: "The process by which green plants make their own food is called _______.",
    options: ["Osmosis", "Photosynthesis", "Respiration", "Transpiration"],
    answer: 1,
  },
  {
    question: "Living things increase in size and complexity through the process of _______.",
    options: ["Reproduction", "Growth", "Assimilation", "Irritability"],
    answer: 1,
  },
  {
    question: "Which of these best explains why growth is a permanent increase in size?",
    options: ["It involves cell enlargement and division", "It involves temporary water intake", "It happens only at night", "It occurs without nutrition"],
    answer: 0,
  },
  {
    question: "The removal of metabolic waste from the body of an organism is called _______.",
    options: ["Excretion", "Egestion", "Secretion", "Diffusion"],
    answer: 0,
  },
  {
    question: "The ability of an organism to maintain a stable internal condition is called _______.",
    options: ["Homeostasis", "Metabolism", "Assimilation", "Adaptation"],
    answer: 0,
  },
  {
    question: "Which of the following characteristics is common to both plants and animals?",
    options: ["Movement", "Photosynthesis", "Respiration", "Egestion"],
    answer: 2,
  },
  {
    question: "All living things need energy mainly for _______.",
    options: ["Sleeping", "Growth and repair", "Evaporation", "Diffusion"],
    answer: 1,
  },
  {
    question: "The ability to produce offspring of the same kind is called _______.",
    options: ["Irritability", "Reproduction", "Growth", "Respiration"],
    answer: 1,
  },
  {
    question: "Which of these statements about living things is TRUE?",
    options: ["All living things can move from place to place", "All living things respire", "All living things have chlorophyll", "All living things are animals"],
    answer: 1,
  },
  {
    question: "Which characteristic of living things ensures survival in changing environments?",
    options: ["Adaptation", "Reproduction", "Metabolism", "Assimilation"],
    answer: 0,
  },
  {
    question: "In multicellular organisms, growth occurs mainly by _______.",
    options: ["Enlargement of existing cells", "Division of cells", "Accumulation of fat", "Water absorption"],
    answer: 1,
  },
  {
    question: "Which of the following distinguishes living things from non-living things?",
    options: ["Ability to reproduce", "Ability to expand", "Ability to reflect light", "Ability to float in water"],
    answer: 0,
  },
  {
    question: "Which of the following is a product of respiration?",
    options: ["Oxygen", "Carbon dioxide", "Glucose", "Chlorophyll"],
    answer: 1,
  },
  {
    question: "The process by which organisms take in materials for growth and energy is called _______.",
    options: ["Nutrition", "Irritability", "Metabolism", "Photosynthesis"],
    answer: 0,
  },
  {
    question: "The living part of an organism’s environment is called its _______.",
    options: ["Habitat", "Biotic component", "Abiotic component", "Niche"],
    answer: 1,
  },
  {
    question: "The non-living factors of an ecosystem are called _______.",
    options: ["Biotic factors", "Abiotic factors", "Organic factors", "Chemical factors"],
    answer: 1,
  },
  {
    question: "Which of the following is NOT a feature of living things?",
    options: ["Feeding", "Photosynthesis", "Growth", "Decay"],
    answer: 3,
  },
  {
    question: "In plants, movement is mainly shown by _______.",
    options: ["Tropism", "Running", "Walking", "Swimming"],
    answer: 0,
  },
  {
    question: "Which of these is an example of an autotrophic organism?",
    options: ["Man", "Fish", "Grass", "Mushroom"],
    answer: 2,
  },
  {
    question: "Which of the following is NOT a function of respiration?",
    options: ["Energy release", "Carbon dioxide production", "Water production", "Protein synthesis"],
    answer: 3,
  },
  {
    question: "The process by which living things remove undigested food is called _______.",
    options: ["Egestion", "Excretion", "Secretion", "Assimilation"],
    answer: 0,
  },
  {
    question: "Which of these best describes reproduction?",
    options: ["Release of energy", "Formation of new individuals", "Breaking down of food", "Elimination of waste"],
    answer: 1,
  },
  {
    question: "Which of the following substances is a waste product of photosynthesis?",
    options: ["Carbon dioxide", "Water", "Oxygen", "Glucose"],
    answer: 2,
  },
  {
    question: "The movement of a plant shoot towards light is called _______.",
    options: ["Phototropism", "Geotropism", "Hydrotropism", "Thigmotropism"],
    answer: 0,
  },
  {
    question: "An organism that depends on other organisms for food is called a _______.",
    options: ["Heterotroph", "Autotroph", "Producer", "Saprophyte"],
    answer: 0,
  },
  {
    question: "The characteristic of living things that ensures waste removal is _______.",
    options: ["Excretion", "Nutrition", "Respiration", "Growth"],
    answer: 0,
  },
  {
    question: "The process by which organisms exchange gases with the environment is called _______.",
    options: ["Respiration", "Excretion", "Photosynthesis", "Osmosis"],
    answer: 0,
  },
  {
    question: "Which of these is NOT an example of movement in animals?",
    options: ["Running", "Flying", "Bending towards light", "Jumping"],
    answer: 2,
  },
  {
    question: "A cat responding to a sound is showing the characteristic of _______.",
    options: ["Reproduction", "Irritability", "Growth", "Nutrition"],
    answer: 1,
  },
  {
    question: "Which of these is an example of excretion in humans?",
    options: ["Sweating", "Eating", "Sleeping", "Talking"],
    answer: 0,
  },
  {
    question: "The ability of living organisms to change over long periods to suit their environment is called _______.",
    options: ["Adaptation", "Evolution", "Irritability", "Homeostasis"],
    answer: 0,
  },
  {
    question: "Which of the following best describes metabolism?",
    options: ["All chemical reactions in an organism", "Only digestion", "Only respiration", "Excretion process"],
    answer: 0,
  },
  {
    question: "Which of these organisms cannot make its own food?",
    options: ["Mango tree", "Green algae", "Man", "Euglena"],
    answer: 2,
  },
  {
    question: "Which of these is the basic unit of life?",
    options: ["Tissue", "Cell", "Organ", "System"],
    answer: 1,
  },
  {
    question: "Which of the following is NOT necessary for plant growth?",
    options: ["Light", "Air", "Sound", "Water"],
    answer: 2,
  },
  {
    question: "Animals excrete nitrogenous waste mainly as _______.",
    options: ["Carbon dioxide", "Ammonia", "Urea", "Water"],
    answer: 2,
  },
  {
    question: "The process of maintaining water balance in the body is a part of _______.",
    options: ["Homeostasis", "Osmosis", "Excretion", "Diffusion"],
    answer: 0,
  },
  {
    question: "Living things obtain energy from food through _______.",
    options: ["Respiration", "Digestion", "Photosynthesis", "Excretion"],
    answer: 0,
  },
  {
    question: "Which of the following best describes life processes?",
    options: ["Characteristics of living things", "Processes in machines", "Chemical changes in rocks", "Environmental cycles"],
    answer: 0,
  },
  {
    question: "Which characteristic of living things ensures increase in number of individuals?",
    options: ["Reproduction", "Growth", "Movement", "Irritability"],
    answer: 0,
  },
  {
    question: "All living organisms depend ultimately on _______ for energy.",
    options: ["The sun", "The moon", "The soil", "Water"],
    answer: 0,
  },
  {
    question: "The removal of metabolic waste through the skin is called _______.",
    options: ["Sweating", "Breathing", "Urination", "Egestion"],
    answer: 0,
  },
  {
    question: "Which of the following is a catabolic process?",
    options: ["Photosynthesis", "Protein synthesis", "Respiration", "Assimilation"],
    answer: 2,
  },
  {
    question: "An organism that carries out both photosynthesis and ingestion of food is _______.",
    options: ["Euglena", "Paramecium", "Amoeba", "Volvox"],
    answer: 0,
  }, 
  
//cell and its environment 
  {
    question: "The cell is regarded as the basic unit of life because _______.",
    options: [
      "All living things are made up of cells",
      "It performs all life activities",
      "It exists only in animals",
      "It is visible to the naked eye"
    ],
    answer: 1,
  },
  {
    question: "The structure that controls the activities of the cell is the _______.",
    options: ["Cytoplasm", "Nucleus", "Cell wall", "Mitochondrion"],
    answer: 1,
  },
  {
    question: "The jelly-like substance that fills the cell and holds organelles is called _______.",
    options: ["Cytoplasm", "Nucleus", "Chloroplast", "Vacuole"],
    answer: 0,
  },
  {
    question: "Which of the following is a function of the cell membrane?",
    options: [
      "Protection and selective permeability",
      "Storage of food",
      "Photosynthesis",
      "Respiration"
    ],
    answer: 0,
  },
  {
    question: "Which of the following structures is found only in plant cells?",
    options: ["Mitochondrion", "Cell wall", "Nucleus", "Ribosome"],
    answer: 1,
  },
  {
    question: "The part of a plant cell responsible for photosynthesis is the _______.",
    options: ["Chloroplast", "Vacuole", "Nucleus", "Mitochondrion"],
    answer: 0,
  },
  {
    question: "The living content of a cell is called _______.",
    options: ["Protoplasm", "Plasma membrane", "Cytoplasm", "Chlorophyll"],
    answer: 0,
  },
  {
    question: "Which of the following controls movement of materials in and out of the cell?",
    options: ["Cell wall", "Cell membrane", "Cytoplasm", "Nucleolus"],
    answer: 1,
  },
  {
    question: "The power house of the cell is the _______.",
    options: ["Mitochondrion", "Ribosome", "Vacuole", "Chloroplast"],
    answer: 0,
  },
  {
    question: "Which cell organelle is responsible for protein synthesis?",
    options: ["Nucleus", "Ribosome", "Golgi body", "Vacuole"],
    answer: 1,
  },
  {
    question: "Which of these best describes osmosis?",
    options: [
      "Movement of water molecules through a semi-permeable membrane",
      "Movement of solute particles across a membrane",
      "Random movement of particles in air",
      "Uptake of minerals from soil"
    ],
    answer: 0,
  },
  {
    question: "Diffusion differs from osmosis because diffusion _______.",
    options: [
      "Occurs in all states of matter",
      "Involves only water",
      "Requires a semi-permeable membrane",
      "Needs energy"
    ],
    answer: 0,
  },
  {
    question: "Which of the following is a function of the vacuole in a plant cell?",
    options: [
      "Maintains turgor pressure",
      "Controls cell division",
      "Carries genetic material",
      "Synthesizes protein"
    ],
    answer: 0,
  },
  {
    question: "Which of the following is absent in an animal cell?",
    options: ["Cell wall", "Nucleus", "Cytoplasm", "Ribosome"],
    answer: 0,
  },
  {
    question: "A cell that has lost water by osmosis is said to be _______.",
    options: ["Plasmolysed", "Turgid", "Flaccid", "Rigid"],
    answer: 0,
  },
  {
    question: "When a red blood cell is placed in distilled water, it _______.",
    options: ["Bursts", "Shrinks", "Remains the same", "Becomes flaccid"],
    answer: 0,
  },
  {
    question: "Which of these is a similarity between diffusion and osmosis?",
    options: [
      "Both are passive processes",
      "Both require energy",
      "Both occur only in liquids",
      "Both need living cells"
    ],
    answer: 0,
  },
  {
    question: "The process by which substances move against a concentration gradient using energy is called _______.",
    options: ["Active transport", "Diffusion", "Osmosis", "Plasmolysis"],
    answer: 0,
  },
  {
    question: "Which of the following best describes a semi-permeable membrane?",
    options: [
      "Allows only certain molecules to pass through",
      "Prevents all substances from passing",
      "Allows all substances freely",
      "Allows only gases to pass"
    ],
    answer: 0,
  },
  {
    question: "Which of these is not an organelle?",
    options: ["Mitochondrion", "Nucleus", "Ribosome", "Vacuole membrane"],
    answer: 3,
  },
  {
    question: "In plant cells, the cell wall is mainly composed of _______.",
    options: ["Cellulose", "Protein", "Lipid", "Chitin"],
    answer: 0,
  },
  {
    question: "Plasmolysis occurs when a cell is placed in a _______ solution.",
    options: ["Hypertonic", "Hypotonic", "Isotonic", "Neutral"],
    answer: 0,
  },
  {
    question: "Which of the following statements about osmosis is TRUE?",
    options: [
      "It involves the movement of water through a membrane",
      "It requires energy",
      "It only occurs in gases",
      "It is the movement of solutes"
    ],
    answer: 0,
  },
  {
    question: "Which structure controls the activities of other organelles?",
    options: ["Cytoplasm", "Nucleus", "Vacuole", "Ribosome"],
    answer: 1,
  },
  {
    question: "The process by which plant roots absorb water is _______.",
    options: ["Osmosis", "Diffusion", "Transpiration", "Active transport"],
    answer: 0,
  },
  {
    question: "The cell organelle involved in respiration is _______.",
    options: ["Mitochondrion", "Nucleus", "Ribosome", "Vacuole"],
    answer: 0,
  },
  {
    question: "Which of the following is found in both plant and animal cells?",
    options: ["Cell wall", "Chloroplast", "Nucleus", "Large vacuole"],
    answer: 2,
  },
  {
    question: "A cell becomes turgid when placed in a _______ solution.",
    options: ["Hypotonic", "Hypertonic", "Isotonic", "Concentrated"],
    answer: 0,
  },
  {
    question: "Which of these best defines diffusion?",
    options: [
      "Movement of molecules from high to low concentration",
      "Movement of water through a membrane",
      "Active movement of particles",
      "Flow of liquid through a pipe"
    ],
    answer: 0,
  },
  {
    question: "The plasma membrane is composed mainly of _______.",
    options: ["Lipids and proteins", "Sugars and starch", "Acids and bases", "Enzymes"],
    answer: 0,
  },
  {
    question: "When a cell is in an isotonic solution, water movement is _______.",
    options: ["Equal in both directions", "Only into the cell", "Only out of the cell", "Stopped completely"],
    answer: 0,
  },
  {
    question: "The region in the nucleus that produces ribosomes is the _______.",
    options: ["Nucleolus", "Chromosome", "Cytoplasm", "Vacuole"],
    answer: 0,
  },
  {
    question: "Which of these organelles is absent in prokaryotic cells?",
    options: ["Nucleus", "Cell membrane", "Cytoplasm", "Ribosome"],
    answer: 0,
  },
  {
    question: "The movement of ions through the cell membrane often requires _______.",
    options: ["Energy", "Diffusion", "Osmosis", "Capillarity"],
    answer: 0,
  },
  {
    question: "Which process does not require energy?",
    options: ["Diffusion", "Active transport", "Cytoplasmic streaming", "Endocytosis"],
    answer: 0,
  },
  {
    question: "The function of the Golgi apparatus is to _______.",
    options: ["Package and transport materials", "Store water", "Control cell division", "Produce ribosomes"],
    answer: 0,
  },
  {
    question: "Which organelle is responsible for digestion of worn-out cell parts?",
    options: ["Lysosome", "Ribosome", "Golgi body", "Chloroplast"],
    answer: 0,
  },
  {
    question: "In a hypertonic solution, an animal cell will _______.",
    options: ["Shrink", "Burst", "Remain the same", "Become turgid"],
    answer: 0,
  },
  {
    question: "Which of these best explains active transport?",
    options: [
      "Movement of substances against concentration gradient using ATP",
      "Movement of water through osmosis",
      "Passive movement of solutes",
      "Random movement of particles"
    ],
    answer: 0,
  },
  {
    question: "The cell wall provides _______ to plant cells.",
    options: ["Support and protection", "Energy", "Food storage", "Photosynthesis"],
    answer: 0,
  },
  {
    question: "Which organelle controls cell metabolism?",
    options: ["Nucleus", "Ribosome", "Vacuole", "Lysosome"],
    answer: 0,
  },
  {
    question: "The selective permeability of a membrane means it _______.",
    options: [
      "Allows only certain substances to pass through",
      "Allows all substances freely",
      "Prevents all movement",
      "Allows only gases to move"
    ],
    answer: 0,
  },
  {
    question: "Cytoplasm serves as the site for _______.",
    options: [
      "Many metabolic reactions",
      "Photosynthesis only",
      "Protein synthesis only",
      "Excretion only"
    ],
    answer: 0,
  },
  {
    question: "Which structure in the cell is responsible for hereditary information?",
    options: ["Chromosomes", "Mitochondria", "Ribosomes", "Golgi bodies"],
    answer: 0,
  },
  {
    question: "The double-layered membrane around the nucleus is called the _______.",
    options: ["Nuclear envelope", "Plasma membrane", "Nucleolus", "Cell wall"],
    answer: 0,
  },
  {
    question: "Which of the following best describes endocytosis?",
    options: [
      "Intake of large particles by engulfing them",
      "Expulsion of waste from the cell",
      "Diffusion of ions",
      "Absorption of water"
    ],
    answer: 0,
  },
  {
    question: "The fluid mosaic model describes the _______.",
    options: ["Structure of cell membrane", "Structure of DNA", "Function of ribosome", "Structure of mitochondrion"],
    answer: 0,
  },
  {
    question: "Which of the following is NOT a function of the cell membrane?",
    options: [
      "Allowing materials to pass selectively",
      "Separating cell contents",
      "Providing energy for respiration",
      "Protecting cell contents"
    ],
    answer: 2,
  },
  {
    question: "Which of these is an example of passive transport?",
    options: ["Osmosis", "Active transport", "Pinocytosis", "Endocytosis"],
    answer: 0,
  },
  {
    question: "The mitochondrion releases energy in the form of _______.",
    options: ["ATP", "ADP", "DNA", "Glucose"],
    answer: 0,
  },
  {
    question: "Which of the following helps in intracellular digestion?",
    options: ["Lysosome", "Vacuole", "Ribosome", "Chloroplast"],
    answer: 0,
  },
  {
    question: "A cell placed in a hypotonic solution will _______.",
    options: ["Gain water", "Lose water", "Shrink", "Remain unchanged"],
    answer: 0,
  },
  
  //cell structures and functions 
  
  {
  question: "The cell is regarded as the basic unit of life because _______.",
  options: [
    "it is found in all organisms",
    "it performs all life activities",
    "it is microscopic",
    "it cannot exist independently"
  ],
  answer: 1,
},
{
  question: "The outer boundary of an animal cell is the _______.",
  options: [
    "cell wall",
    "cell membrane",
    "nuclear envelope",
    "cytoplasm"
  ],
  answer: 1,
},
{
  question: "The structure responsible for controlling the entry and exit of materials in a cell is the _______.",
  options: [
    "nucleus",
    "cytoplasm",
    "cell membrane",
    "vacuole"
  ],
  answer: 2,
},
{
  question: "The living substance of a cell excluding the nucleus is the _______.",
  options: [
    "cytoplasm",
    "protoplasm",
    "nucleoplasm",
    "organelles"
  ],
  answer: 0,
},
{
  question: "Which of the following organelles is present only in plant cells?",
  options: [
    "Chloroplast",
    "Mitochondrion",
    "Ribosome",
    "Nucleus"
  ],
  answer: 0,
},
{
  question: "The organelle responsible for respiration in the cell is the _______.",
  options: [
    "ribosome",
    "mitochondrion",
    "chloroplast",
    "Golgi body"
  ],
  answer: 1,
},
{
  question: "Which part of the cell contains the hereditary material?",
  options: [
    "Cytoplasm",
    "Nucleus",
    "Cell wall",
    "Vacuole"
  ],
  answer: 1,
},
{
  question: "The cell wall is composed mainly of _______.",
  options: [
    "lipids",
    "starch",
    "cellulose",
    "protein"
  ],
  answer: 2,
},
{
  question: "Which organelle packages and secretes materials in the cell?",
  options: [
    "Endoplasmic reticulum",
    "Golgi apparatus",
    "Mitochondrion",
    "Nucleolus"
  ],
  answer: 1,
},
{
  question: "Which organelle is responsible for photosynthesis?",
  options: [
    "Mitochondrion",
    "Lysosome",
    "Chloroplast",
    "Golgi body"
  ],
  answer: 2,
},
{
  question: "The jelly-like fluid within the cell membrane is called the _______.",
  options: [
    "protoplasm",
    "cytoplasm",
    "nucleoplasm",
    "vacuole"
  ],
  answer: 1,
},
{
  question: "The part of the cell where ribosomes are produced is the _______.",
  options: [
    "nucleolus",
    "nuclear membrane",
    "chromatin",
    "endoplasmic reticulum"
  ],
  answer: 0,
},
{
  question: "Which organelle helps in protein synthesis?",
  options: [
    "Lysosome",
    "Ribosome",
    "Vacuole",
    "Chloroplast"
  ],
  answer: 1,
},
{
  question: "Which organelle is called the ‘powerhouse’ of the cell?",
  options: [
    "Nucleus",
    "Mitochondrion",
    "Golgi apparatus",
    "Vacuole"
  ],
  answer: 1,
},
{
  question: "Which of the following is present in both plant and animal cells?",
  options: [
    "Cell wall",
    "Chloroplast",
    "Mitochondrion",
    "Plastid"
  ],
  answer: 2,
},
{
  question: "The double-layered membrane surrounding the nucleus is called _______.",
  options: [
    "cell wall",
    "nuclear envelope",
    "cytoplasmic membrane",
    "nucleolus"
  ],
  answer: 1,
},
{
  question: "Which organelle stores waste and water in plant cells?",
  options: [
    "Chloroplast",
    "Vacuole",
    "Ribosome",
    "Nucleolus"
  ],
  answer: 1,
},
{
  question: "The endoplasmic reticulum is involved in _______.",
  options: [
    "digestion",
    "transport of materials",
    "photosynthesis",
    "respiration"
  ],
  answer: 1,
},
{
  question: "Which of the following is not an organelle?",
  options: [
    "Nucleus",
    "Cytoplasm",
    "Ribosome",
    "Mitochondrion"
  ],
  answer: 1,
},
{
  question: "Which of these cell structures is non-living?",
  options: [
    "Nucleus",
    "Cytoplasm",
    "Cell wall",
    "Mitochondrion"
  ],
  answer: 2,
},
{
  question: "In plant cells, turgidity is maintained by the _______.",
  options: [
    "nucleus",
    "vacuole",
    "cytoplasm",
    "cell wall"
  ],
  answer: 1,
},
{
  question: "Which of the following is common to all cells?",
  options: [
    "Mitochondria",
    "Cell membrane",
    "Chloroplast",
    "Cell wall"
  ],
  answer: 1,
},
{
  question: "Which part of a cell controls all metabolic activities?",
  options: [
    "Cytoplasm",
    "Nucleus",
    "Ribosome",
    "Golgi body"
  ],
  answer: 1,
},
{
  question: "The main function of lysosomes is _______.",
  options: [
    "digestion of worn-out cell parts",
    "protein synthesis",
    "cell division",
    "transport"
  ],
  answer: 0,
},
{
  question: "Which organelle detoxifies harmful substances in the liver?",
  options: [
    "Smooth endoplasmic reticulum",
    "Golgi body",
    "Mitochondrion",
    "Ribosome"
  ],
  answer: 0,
},
{
  question: "Chromosomes are found in the _______.",
  options: [
    "nucleolus",
    "nucleus",
    "cytoplasm",
    "mitochondrion"
  ],
  answer: 1,
},
{
  question: "The small spherical body within the nucleus is called _______.",
  options: [
    "chromatin",
    "nucleolus",
    "ribosome",
    "centriole"
  ],
  answer: 1,
},
{
  question: "The function of centrioles is to _______.",
  options: [
    "store water",
    "help in cell division",
    "carry genetic information",
    "absorb light energy"
  ],
  answer: 1,
},
{
  question: "The cell wall is absent in _______.",
  options: [
    "plant cell",
    "animal cell",
    "fungal cell",
    "bacterial cell"
  ],
  answer: 1,
},
{
  question: "Protoplasm is composed mainly of _______.",
  options: [
    "water, proteins, and lipids",
    "starch, fats, and sugar",
    "enzymes and cellulose",
    "minerals and acids"
  ],
  answer: 0,
},
{
  question: "The structure that maintains cell shape is the _______.",
  options: [
    "nucleus",
    "cell wall",
    "chloroplast",
    "ribosome"
  ],
  answer: 1,
},
{
  question: "Which of the following best describes cytoplasm?",
  options: [
    "The region where genetic materials are stored",
    "The site for most metabolic reactions",
    "A non-living structure in plant cells",
    "The thick outer layer of the cell"
  ],
  answer: 1,
},
{
  question: "Plasmodesmata are found in _______.",
  options: [
    "animal cells",
    "plant cells",
    "bacteria",
    "fungi"
  ],
  answer: 1,
},
{
  question: "The nuclear material of a prokaryotic cell is found in the _______.",
  options: [
    "nucleus",
    "cytoplasm",
    "chromosome",
    "nucleolus"
  ],
  answer: 1,
},
{
  question: "Which of the following is a function of ribosomes?",
  options: [
    "Protein synthesis",
    "Energy production",
    "Food storage",
    "Transport"
  ],
  answer: 0,
},
{
  question: "In a typical cell, the mitochondrion is more numerous in _______.",
  options: [
    "inactive cells",
    "muscle cells",
    "parenchyma cells",
    "epidermal cells"
  ],
  answer: 1,
},
{
  question: "The plasma membrane is composed mainly of _______.",
  options: [
    "cellulose and proteins",
    "lipids and proteins",
    "sugar and cellulose",
    "starch and fats"
  ],
  answer: 1,
},
{
  question: "Chromatin network is found in the _______.",
  options: [
    "cytoplasm",
    "nucleoplasm",
    "cell wall",
    "ribosome"
  ],
  answer: 1,
},
{
  question: "The cell organelle that digests worn-out parts is the _______.",
  options: [
    "lysosome",
    "vacuole",
    "ribosome",
    "mitochondrion"
  ],
  answer: 0,
},
{
  question: "What structure gives rigidity to plant cells?",
  options: [
    "Cell membrane",
    "Cytoplasm",
    "Cell wall",
    "Vacuole"
  ],
  answer: 2,
},
{
  question: "Which organelle assists in lipid synthesis?",
  options: [
    "Rough ER",
    "Smooth ER",
    "Mitochondria",
    "Chloroplast"
  ],
  answer: 1,
},
{
  question: "Cell theory was first proposed by _______.",
  options: [
    "Schwann and Schleiden",
    "Robert Hooke",
    "Pasteur and Darwin",
    "Watson and Crick"
  ],
  answer: 0,
},
{
  question: "A plant cell can be distinguished from an animal cell by the presence of _______.",
  options: [
    "nucleus",
    "cytoplasm",
    "chloroplast",
    "mitochondria"
  ],
  answer: 2,
},
{
  question: "The structure that controls all activities in a cell is the _______.",
  options: [
    "nucleus",
    "ribosome",
    "cytoplasm",
    "vacuole"
  ],
  answer: 0,
},

{
  question: "The cell membrane is described as selectively permeable because _______.",
  options: [
    "it allows all substances to pass freely",
    "it allows only certain substances to pass",
    "it blocks everything",
    "it is rigid and strong"
  ],
  answer: 1,
},
{
  question: "The main function of the Golgi apparatus is _______.",
  options: [
    "protein synthesis",
    "modification, packaging, and secretion",
    "respiration",
    "photosynthesis"
  ],
  answer: 1,
},
{
  question: "Centrioles are involved in _______.",
  options: [
    "protein synthesis",
    "cell division",
    "lipid storage",
    "photosynthesis"
  ],
  answer: 1,
},
{
  question: "The cell organelle responsible for storage of water and solutes in plant cells is the _______.",
  options: [
    "vacuole",
    "chloroplast",
    "ribosome",
    "lysosome"
  ],
  answer: 0,
},
{
  question: "Ribosomes are found on the surface of _______.",
  options: [
    "smooth endoplasmic reticulum",
    "rough endoplasmic reticulum",
    "mitochondria",
    "Golgi apparatus"
  ],
  answer: 1,
},
{
  question: "Which of the following is true for prokaryotic cells?",
  options: [
    "They have a true nucleus",
    "They lack membrane-bound organelles",
    "They have chloroplasts",
    "They are always multicellular"
  ],
  answer: 1,
},
{
  question: "Which cell structure provides protection and shape to plant cells?",
  options: [
    "Cell membrane",
    "Cytoplasm",
    "Cell wall",
    "Vacuole"
  ],
  answer: 2,
},
{
  question: "The structure that stores genetic information in a cell is the _______.",
  options: [
    "ribosome",
    "nucleus",
    "mitochondrion",
    "Golgi body"
  ],
  answer: 1,
},
{
  question: "Which organelle breaks down waste materials and worn-out organelles?",
  options: [
    "Lysosome",
    "Vacuole",
    "Ribosome",
    "Chloroplast"
  ],
  answer: 0,
},
{
  question: "Cytoplasm is mainly composed of _______.",
  options: [
    "water and dissolved substances",
    "cellulose and lignin",
    "starch and sugar",
    "lipids and DNA"
  ],
  answer: 0,
},
{
  question: "Which organelle captures light energy for photosynthesis?",
  options: [
    "Mitochondrion",
    "Chloroplast",
    "Lysosome",
    "Endoplasmic reticulum"
  ],
  answer: 1,
},
{
  question: "The process by which a cell engulfs solid particles is called _______.",
  options: [
    "Exocytosis",
    "Endocytosis",
    "Phagocytosis",
    "Osmosis"
  ],
  answer: 2,
},
{
  question: "The fluid inside the nucleus is called _______.",
  options: [
    "Cytoplasm",
    "Nucleoplasm",
    "Vacuole sap",
    "Chlorophyll"
  ],
  answer: 1,
},
{
  question: "Which organelle synthesizes lipids and detoxifies substances?",
  options: [
    "Smooth endoplasmic reticulum",
    "Rough endoplasmic reticulum",
    "Golgi body",
    "Mitochondrion"
  ],
  answer: 0,
},
{
  question: "The nuclear membrane contains small openings called _______.",
  options: [
    "Nuclear pores",
    "Plasmodesmata",
    "Cytoplasmic channels",
    "Pits"
  ],
  answer: 0,
},
{
  question: "The semi-fluid material that surrounds organelles in a cell is called _______.",
  options: [
    "Cytoplasm",
    "Nucleoplasm",
    "Cell sap",
    "Chloroplast fluid"
  ],
  answer: 0,
},
{
  question: "Which organelle is involved in the production of ATP?",
  options: [
    "Mitochondrion",
    "Ribosome",
    "Golgi apparatus",
    "Vacuole"
  ],
  answer: 0,
},
{
  question: "Plasmodesmata are channels found in _______.",
  options: [
    "plant cells",
    "animal cells",
    "bacteria",
    "fungi"
  ],
  answer: 0,
},
{
  question: "Which organelle stores proteins for secretion?",
  options: [
    "Golgi apparatus",
    "Mitochondrion",
    "Vacuole",
    "Ribosome"
  ],
  answer: 0,
},
{
  question: "The cell theory states that all cells arise from _______.",
  options: [
    "pre-existing cells",
    "cytoplasm",
    "protoplasm",
    "nucleus"
  ],
  answer: 0,
},
{
  question: "Which of the following structures is involved in intracellular transport?",
  options: [
    "Golgi apparatus",
    "Endoplasmic reticulum",
    "Ribosome",
    "Lysosome"
  ],
  answer: 1,
},
{
  question: "Which organelle is responsible for producing ribosomal RNA?",
  options: [
    "Nucleolus",
    "Nucleus",
    "Cytoplasm",
    "Ribosome"
  ],
  answer: 0,
},
{
  question: "The structure that regulates the movement of substances into and out of the cell is the _______.",
  options: [
    "Cell membrane",
    "Cell wall",
    "Vacuole",
    "Nucleus"
  ],
  answer: 0,
},
{
  question: "Which cell organelle is mainly involved in secretion and packaging?",
  options: [
    "Golgi body",
    "Mitochondrion",
    "Ribosome",
    "Vacuole"
  ],
  answer: 0,
},
{
  question: "The cytoskeleton helps the cell to _______.",
  options: [
    "store water",
    "maintain shape and support",
    "synthesize proteins",
    "digest waste"
  ],
  answer: 1,
},
{
  question: "The function of the nucleolus is to _______.",
  options: [
    "produce ribosomes",
    "control cell activities",
    "store energy",
    "digest food"
  ],
  answer: 0,
},
{
  question: "Which organelle is responsible for photosynthesis in plant cells?",
  options: [
    "Mitochondrion",
    "Chloroplast",
    "Lysosome",
    "Endoplasmic reticulum"
  ],
  answer: 1,
},
{
  question: "The rough endoplasmic reticulum is involved in _______.",
  options: [
    "lipid synthesis",
    "protein synthesis",
    "DNA replication",
    "energy production"
  ],
  answer: 1,
},
{
  question: "Which of the following organelles contains digestive enzymes?",
  options: [
    "Lysosome",
    "Vacuole",
    "Golgi body",
    "Mitochondrion"
  ],
  answer: 0,
},
{
  question: "The vacuole of a plant cell contains _______.",
  options: [
    "cell sap",
    "ribosomes",
    "chromatin",
    "mitochondria"
  ],
  answer: 0,
},
{
  question: "Which organelle is responsible for energy release through respiration?",
  options: [
    "Chloroplast",
    "Mitochondrion",
    "Golgi apparatus",
    "Ribosome"
  ],
  answer: 1,
},
{
  question: "The cell membrane is made up mainly of _______.",
  options: [
    "lipids and proteins",
    "cellulose and lignin",
    "DNA and RNA",
    "carbohydrates and water"
  ],
  answer: 0,
},
{
  question: "Which of the following is not a function of the cytoplasm?",
  options: [
    "Transport of materials",
    "Site of metabolic activities",
    "Protein synthesis",
    "Control of cell activities"
  ],
  answer: 3,
},
{
  question: "The part of a plant cell that maintains turgidity is the _______.",
  options: [
    "vacuole",
    "chloroplast",
    "cytoplasm",
    "cell wall"
  ],
  answer: 0,
},
{
  question: "Which organelle forms the spindle fibers during cell division?",
  options: [
    "Centrioles",
    "Mitochondria",
    "Golgi body",
    "Ribosomes"
  ],
  answer: 0,
},
{
  question: "The double membrane of mitochondria encloses the _______.",
  options: [
    "matrix",
    "cytoplasm",
    "nucleolus",
    "ribosome"
  ],
  answer: 0,
},
{
  question: "The main function of the cell wall is to _______.",
  options: [
    "protect and support the cell",
    "produce ATP",
    "digest food",
    "transport proteins"
  ],
  answer: 0,
},
{
  question: "Which organelle synthesizes enzymes and hormones?",
  options: [
    "Rough ER",
    "Smooth ER",
    "Mitochondria",
    "Chloroplast"
  ],
  answer: 1,
},
{
  question: "The cell organelle that converts light energy into chemical energy is _______.",
  options: [
    "Chloroplast",
    "Mitochondrion",
    "Golgi body",
    "Endoplasmic reticulum"
  ],
  answer: 0,
},
{
  question: "The nucleus is surrounded by a _______.",
  options: [
    "cell wall",
    "nuclear envelope",
    "cytoplasm",
    "vacuole"
  ],
  answer: 1,
},
{
  question: "The structure that assists in the movement of substances within a cell is _______.",
  options: [
    "Endoplasmic reticulum",
    "Golgi body",
    "Mitochondrion",
    "Ribosome"
  ],
  answer: 0,
},
{
  question: "Which organelle is absent in prokaryotic cells?",
  options: [
    "Ribosome",
    "Chloroplast",
    "Cytoplasm",
    "Cell membrane"
  ],
  answer: 1,
},
{
  question: "The nuclear pores allow _______.",
  options: [
    "entry and exit of substances from the nucleus",
    "attachment of ribosomes",
    "movement of mitochondria",
    "photosynthesis"
  ],
  answer: 0,
},
{
  question: "The main site of protein synthesis in a cell is the _______.",
  options: [
    "Ribosome",
    "Mitochondria",
    "Golgi apparatus",
    "Lysosome"
  ],
  answer: 0,
},
{
  question: "The jelly-like substance that forms the living content of the cell is called _______.",
  options: [
    "Protoplasm",
    "Cell wall",
    "Vacuole",
    "Chloroplast"
  ],
  answer: 0,
},
{
  question: "Which organelle is responsible for modifying and packaging proteins for secretion?",
  options: [
    "Golgi apparatus",
    "Endoplasmic reticulum",
    "Ribosome",
    "Vacuole"
  ],
  answer: 0,
},
{
  question: "The cell membrane is involved in _______.",
  options: [
    "movement of substances into and out of the cell",
    "protein synthesis",
    "energy production",
    "DNA storage"
  ],
  answer: 0,
},
{
  question: "Which organelle contains enzymes for breaking down macromolecules?",
  options: [
    "Lysosome",
    "Mitochondria",
    "Vacuole",
    "Golgi apparatus"
  ],
  answer: 0,
},
{
  question: "The plant cell organelle that stores pigments, starch, and proteins is _______.",
  options: [
    "Vacuole",
    "Plastid",
    "Nucleus",
    "Chloroplast"
  ],
  answer: 1,
},
{
  question: "Which organelle is involved in detoxification in the liver?",
  options: [
    "Smooth ER",
    "Rough ER",
    "Golgi body",
    "Mitochondrion"
  ],
  answer: 0,
},
{
  question: "Which organelle is not membrane-bound?",
  options: [
    "Ribosome",
    "Mitochondria",
    "Chloroplast",
    "Nucleus"
  ],
  answer: 0,
},
{
  question: "Which organelle produces ATP through cellular respiration?",
  options: [
    "Mitochondria",
    "Ribosome",
    "Chloroplast",
    "Golgi body"
  ],
  answer: 0,
},
{
  question: "The nucleus controls cell activities through _______.",
  options: [
    "DNA and RNA",
    "ATP",
    "Cytoplasm",
    "Lysosomes"
  ],
  answer: 0,
},


//cell division-meosis and mitosis

{
  question: "Cell division is necessary for _______.",
  options: [
    "growth and repair",
    "photosynthesis",
    "respiration",
    "digestion"
  ],
  answer: 0,
},
{
  question: "Which type of cell division produces two identical daughter cells?",
  options: [
    "Mitosis",
    "Meiosis",
    "Binary fission",
    "Budding"
  ],
  answer: 0,
},
{
  question: "Which phase of mitosis is characterized by the alignment of chromosomes at the equator?",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  answer: 1,
},
{
  question: "During which phase of mitosis do sister chromatids separate?",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  answer: 2,
},
{
  question: "The nuclear membrane disappears during _______.",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  answer: 0,
},
{
  question: "Cytokinesis is the process of _______.",
  options: [
    "division of the nucleus",
    "division of the cytoplasm",
    "duplication of chromosomes",
    "alignment of chromosomes"
  ],
  answer: 1,
},
{
  question: "Which stage of mitosis is characterized by the formation of two nuclei?",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  answer: 3,
},
{
  question: "Which type of cell division reduces chromosome number by half?",
  options: [
    "Mitosis",
    "Meiosis",
    "Binary fission",
    "Budding"
  ],
  answer: 1,
},
{
  question: "Synapsis occurs during _______.",
  options: [
    "Prophase I of meiosis",
    "Metaphase II of meiosis",
    "Anaphase I of meiosis",
    "Telophase of mitosis"
  ],
  answer: 0,
},
{
  question: "Crossing over occurs during _______.",
  options: [
    "Prophase I of meiosis",
    "Metaphase I of meiosis",
    "Anaphase I of meiosis",
    "Telophase I of meiosis"
  ],
  answer: 0,
},
{
  question: "The separation of homologous chromosomes occurs in _______.",
  options: [
    "Anaphase I of meiosis",
    "Anaphase II of meiosis",
    "Anaphase of mitosis",
    "Prophase I of meiosis"
  ],
  answer: 0,
},
{
  question: "Gametes are produced by _______.",
  options: [
    "Mitosis",
    "Meiosis",
    "Binary fission",
    "Budding"
  ],
  answer: 1,
},
{
  question: "Which of the following is a diploid cell?",
  options: [
    "Gamete",
    "Zygote",
    "Sperm",
    "Egg"
  ],
  answer: 1,
},
{
  question: "Which of the following is a haploid cell?",
  options: [
    "Zygote",
    "Sperm",
    "Skin cell",
    "Muscle cell"
  ],
  answer: 1,
},
{
  question: "Which phase of meiosis is similar to mitosis?",
  options: [
    "Meiosis I",
    "Meiosis II",
    "Prophase I",
    "Metaphase I"
  ],
  answer: 1,
},
{
  question: "The chiasmata is formed during _______.",
  options: [
    "Crossing over in meiosis",
    "Chromosome replication",
    "Spindle formation",
    "Telophase"
  ],
  answer: 0,
},
{
  question: "Independent assortment occurs during _______.",
  options: [
    "Metaphase I of meiosis",
    "Metaphase II of meiosis",
    "Metaphase of mitosis",
    "Prophase II of meiosis"
  ],
  answer: 0,
},
{
  question: "A zygote is formed by the fusion of _______.",
  options: [
    "Two somatic cells",
    "Sperm and egg",
    "Two sperm cells",
    "Two egg cells"
  ],
  answer: 1,
},
{
  question: "Which stage of meiosis produces four haploid cells?",
  options: [
    "Telophase I",
    "Telophase II",
    "Anaphase I",
    "Anaphase II"
  ],
  answer: 1,
},
{
  question: "Which of the following is true about mitosis?",
  options: [
    "It produces gametes",
    "It reduces chromosome number",
    "It produces genetically identical cells",
    "It occurs only in reproductive organs"
  ],
  answer: 2,
},
{
  question: "Which of the following is true about meiosis?",
  options: [
    "It produces somatic cells",
    "It maintains chromosome number",
    "It produces genetically varied gametes",
    "It occurs in skin cells"
  ],
  answer: 2,
},
{
  question: "The stage when chromosomes become visible is _______.",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  answer: 0,
},
{
  question: "The structure that attaches chromatids to spindle fibers is the _______.",
  options: [
    "Centromere",
    "Kinetochore",
    "Chromatin",
    "Nucleolus"
  ],
  answer: 0,
},
{
  question: "Which stage of mitosis involves movement of chromosomes toward opposite poles?",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  answer: 2,
},
{
  question: "The end product of meiosis is _______.",
  options: [
    "Two diploid cells",
    "Four haploid cells",
    "One diploid cell",
    "Two haploid cells"
  ],
  answer: 1,
},
{
  question: "Which phase of meiosis involves pairing of homologous chromosomes?",
  options: [
    "Prophase I",
    "Prophase II",
    "Metaphase I",
    "Telophase II"
  ],
  answer: 0,
},
{
  question: "The number of chromosomes in human gametes is _______.",
  options: [
    "23",
    "46",
    "92",
    "12"
  ],
  answer: 0,
},
{
  question: "The number of chromosomes in human somatic cells is _______.",
  options: [
    "23",
    "46",
    "92",
    "12"
  ],
  answer: 1,
},
{
  question: "Which stage of meiosis is responsible for genetic recombination?",
  options: [
    "Prophase I",
    "Metaphase I",
    "Anaphase II",
    "Telophase II"
  ],
  answer: 0,
},
{
  question: "Which of the following events does not occur in mitosis?",
  options: [
    "Chromosome replication",
    "Crossing over",
    "Spindle formation",
    "Nuclear division"
  ],
  answer: 1,
},
{
  question: "During which phase do homologous chromosomes separate?",
  options: [
    "Anaphase I",
    "Anaphase II",
    "Telophase I",
    "Prophase II"
  ],
  answer: 0,
},
{
  question: "Reduction division occurs in _______.",
  options: [
    "Mitosis",
    "Meiosis I",
    "Meiosis II",
    "Binary fission"
  ],
  answer: 1,
},
{
  question: "The process that ensures each gamete gets only one chromosome from each pair is called _______.",
  options: [
    "Crossing over",
    "Independent assortment",
    "Replication",
    "Synapsis"
  ],
  answer: 1,
},
{
  question: "Chromatids are joined at the _______.",
  options: [
    "Centromere",
    "Nucleolus",
    "Spindle fiber",
    "Cytoplasm"
  ],
  answer: 0,
},
{
  question: "The main purpose of mitosis in multicellular organisms is _______.",
  options: [
    "production of gametes",
    "growth and repair",
    "variation",
    "fertilization"
  ],
  answer: 1,
},
{
  question: "The stage in which chromosomes line up at the equatorial plane is _______.",
  options: [
    "Metaphase",
    "Anaphase",
    "Prophase",
    "Telophase"
  ],
  answer: 0,
},
{
  question: "During which stage do chromosomes condense and become visible?",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  answer: 0,
},
{
  question: "Spindle fibers are formed from _______.",
  options: [
    "Centrioles",
    "Ribosomes",
    "Mitochondria",
    "Chloroplasts"
  ],
  answer: 0,
},
{
  question: "The difference between meiosis I and meiosis II is _______.",
  options: [
    "Meiosis I is reductional; Meiosis II is equational",
    "Meiosis I is equational; Meiosis II is reductional",
    "Both are reductional",
    "Both are equational"
  ],
  answer: 0,
},
{
  question: "Which of the following occurs in meiosis II?",
  options: [
    "Separation of sister chromatids",
    "Synapsis",
    "Crossing over",
    "Independent assortment"
  ],
  answer: 0,
},
{
  question: "Which of the following is a result of meiosis?",
  options: [
    "Genetically identical cells",
    "Genetically diverse gametes",
    "Somatic cells",
    "Clones"
  ],
  answer: 1,
},
{
  question: "During telophase of mitosis, _______ reforms around chromosomes.",
  options: [
    "nuclear membrane",
    "spindle fibers",
    "chromatids",
    "centromere"
  ],
  answer: 0,
},
{
  question: "Mitosis ensures that _______.",
  options: [
    "chromosome number is maintained",
    "gametes are produced",
    "chromosomes are halved",
    "crossing over occurs"
  ],
  answer: 0,
},
{
  question: "Which of the following occurs only in meiosis?",
  options: [
    "Chromosome replication",
    "Crossing over",
    "Chromosome alignment",
    "Spindle formation"
  ],
  answer: 1,
},
{
  question: "Fertilization restores the diploid number of chromosomes in _______.",
  options: [
    "zygote",
    "gametes",
    "somatic cells",
    "sperm"
  ],
  answer: 0,
},
{
  question: "Which stage of meiosis involves the separation of sister chromatids?",
  options: [
    "Meiosis I",
    "Meiosis II",
    "Prophase I",
    "Metaphase I"
  ],
  answer: 1,
},
{
  question: "Genetic variation arises in meiosis due to _______.",
  options: [
    "crossing over and independent assortment",
    "chromosome replication",
    "mitosis",
    "cytokinesis"
  ],
  answer: 0,
},
{
  question: "During which phase does the nuclear envelope break down?",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  answer: 0,
},
{
  question: "The spindle apparatus is responsible for _______.",
  options: [
    "chromosome movement",
    "protein synthesis",
    "DNA replication",
    "cell growth"
  ],
  answer: 0,
},
{
  question: "Which of the following correctly describes meiosis II?",
  options: [
    "Equational division producing haploid cells",
    "Reduction division producing diploid cells",
    "Replication of DNA",
    "Fusion of gametes"
  ],
  answer: 0,
},
{
  question: "Which type of cell division occurs in somatic cells?",
  options: [
    "Mitosis",
    "Meiosis",
    "Gamete formation",
    "Fertilization"
  ],
  answer: 0,
},
{
  question: "Which type of cell division is involved in sexual reproduction?",
  options: [
    "Mitosis",
    "Meiosis",
    "Binary fission",
    "Budding"
  ],
  answer: 1,
},
{
  question: "The chromosomes become double-stranded after _______.",
  options: [
    "DNA replication",
    "Crossing over",
    "Metaphase",
    "Anaphase"
  ],
  answer: 0,
},
{
  question: "Which of the following stages occurs in both mitosis and meiosis?",
  options: [
    "Prophase",
    "Synapsis",
    "Crossing over",
    "Reduction division"
  ],
  answer: 0,
},
{
  question: "Which stage of meiosis is responsible for halving the chromosome number?",
  options: [
    "Meiosis I",
    "Meiosis II",
    "Prophase II",
    "Telophase II"
  ],
  answer: 0,
},
{
  question: "Which type of cell division ensures growth and repair in multicellular organisms?",
  options: [
    "Mitosis",
    "Meiosis",
    "Binary fission",
    "Budding"
  ],
  answer: 0,
},
{
  question: "The phase of meiosis in which chromatids separate is _______.",
  options: [
    "Anaphase II",
    "Anaphase I",
    "Metaphase I",
    "Telophase I"
  ],
  answer: 0,
},
{
  question: "Which stage of meiosis produces haploid daughter cells?",
  options: [
    "Telophase II",
    "Telophase I",
    "Metaphase I",
    "Prophase II"
  ],
  answer: 0,
},
{
  question: "The major difference between mitosis and meiosis is _______.",
  options: [
    "Mitosis produces identical cells; meiosis produces varied gametes",
    "Mitosis occurs only in reproductive cells",
    "Mitosis reduces chromosome number",
    "Meiosis occurs only in somatic cells"
  ],
  answer: 0,
},


//tissue and supportive system

{
  question: "Tissues are _______.",
  options: [
    "groups of similar cells performing a common function",
    "a collection of organs",
    "cells with different functions",
    "organs performing the same function"
  ],
  answer: 0,
},
{
  question: "Which of the following is a plant tissue?",
  options: [
    "Xylem",
    "Blood",
    "Cartilage",
    "Muscle"
  ],
  answer: 0,
},
{
  question: "Which tissue in plants is responsible for transport of water?",
  options: [
    "Phloem",
    "Xylem",
    "Parenchyma",
    "Collenchyma"
  ],
  answer: 1,
},
{
  question: "Phloem transports _______ in plants.",
  options: [
    "Water",
    "Minerals",
    "Food",
    "Oxygen"
  ],
  answer: 2,
},
{
  question: "Parenchyma cells are mainly involved in _______.",
  options: [
    "support",
    "photosynthesis and storage",
    "water transport",
    "conduction of impulses"
  ],
  answer: 1,
},
{
  question: "Collenchyma provides _______ to plant organs.",
  options: [
    "rigid support",
    "flexible support",
    "water storage",
    "transport of food"
  ],
  answer: 1,
},
{
  question: "Sclerenchyma cells are _______.",
  options: [
    "living and flexible",
    "dead and lignified",
    "photosynthetic",
    "parenchymatous"
  ],
  answer: 1,
},
{
  question: "The tissue that connects bones to muscles is _______.",
  options: [
    "Tendon",
    "Ligament",
    "Cartilage",
    "Bone"
  ],
  answer: 0,
},
{
  question: "Ligaments connect _______.",
  options: [
    "muscle to muscle",
    "bone to bone",
    "muscle to bone",
    "bone to cartilage"
  ],
  answer: 1,
},
{
  question: "Which type of muscle is involuntary and non-striated?",
  options: [
    "Skeletal",
    "Cardiac",
    "Smooth",
    "Striated"
  ],
  answer: 2,
},
{
  question: "Cardiac muscle is found in the _______.",
  options: [
    "heart",
    "lungs",
    "stomach",
    "biceps"
  ],
  answer: 0,
},
{
  question: "Skeletal muscles are under _______ control.",
  options: [
    "involuntary",
    "voluntary",
    "autonomic",
    "reflex"
  ],
  answer: 1,
},
{
  question: "Which connective tissue stores fat?",
  options: [
    "Adipose tissue",
    "Cartilage",
    "Bone",
    "Ligament"
  ],
  answer: 0,
},
{
  question: "Which connective tissue cushions joints?",
  options: [
    "Cartilage",
    "Bone",
    "Tendon",
    "Ligament"
  ],
  answer: 0,
},
{
  question: "Which connective tissue connects bones to bones?",
  options: [
    "Tendon",
    "Ligament",
    "Cartilage",
    "Adipose"
  ],
  answer: 1,
},
{
  question: "Epithelial tissue functions mainly in _______.",
  options: [
    "covering and protection",
    "support",
    "transport",
    "movement"
  ],
  answer: 0,
},
{
  question: "Simple squamous epithelium is adapted for _______.",
  options: [
    "diffusion",
    "contraction",
    "transport",
    "storage"
  ],
  answer: 0,
},
{
  question: "Cuboidal epithelium is mainly involved in _______.",
  options: [
    "absorption and secretion",
    "protection",
    "support",
    "transport"
  ],
  answer: 0,
},
{
  question: "Columnar epithelium is found lining the _______.",
  options: [
    "small intestine",
    "lungs",
    "heart",
    "kidney"
  ],
  answer: 0,
},
{
  question: "Ciliated epithelium is specialized for _______.",
  options: [
    "movement of substances along surfaces",
    "protection",
    "photosynthesis",
    "conduction of impulses"
  ],
  answer: 0,
},
{
  question: "Which connective tissue provides rigid support to the body?",
  options: [
    "Bone",
    "Cartilage",
    "Ligament",
    "Adipose"
  ],
  answer: 0,
},
{
  question: "Cartilage differs from bone because it is _______.",
  options: [
    "softer and flexible",
    "hard and rigid",
    "vascular",
    "mineralized"
  ],
  answer: 0,
},
{
  question: "Which tissue forms the outer layer of skin?",
  options: [
    "Epithelial",
    "Muscle",
    "Connective",
    "Nervous"
  ],
  answer: 0,
},
{
  question: "Which tissue forms tendons and ligaments?",
  options: [
    "Connective",
    "Muscle",
    "Epithelial",
    "Nervous"
  ],
  answer: 0,
},
{
  question: "Adipose tissue is mainly composed of _______.",
  options: [
    "fat cells",
    "bone cells",
    "cartilage",
    "muscle fibers"
  ],
  answer: 0,
},
{
  question: "Which connective tissue provides cushioning in joints?",
  options: [
    "Cartilage",
    "Bone",
    "Tendon",
    "Ligament"
  ],
  answer: 0,
},
{
  question: "Which plant tissue is responsible for transporting organic food?",
  options: [
    "Xylem",
    "Phloem",
    "Collenchyma",
    "Sclerenchyma"
  ],
  answer: 1,
},
{
  question: "Which plant tissue is dead at maturity and lignified?",
  options: [
    "Sclerenchyma",
    "Collenchyma",
    "Parenchyma",
    "Xylem"
  ],
  answer: 0,
},
{
  question: "Collenchyma tissue provides _______.",
  options: [
    "flexible support",
    "rigid support",
    "transport",
    "absorption"
  ],
  answer: 0,
},
{
  question: "Which tissue connects plant cells for communication?",
  options: [
    "Plasmodesmata",
    "Phloem",
    "Xylem",
    "Sclerenchyma"
  ],
  answer: 0,
},
{
  question: "Blood is classified as a _______ tissue.",
  options: [
    "connective",
    "epithelial",
    "muscle",
    "nervous"
  ],
  answer: 0,
},
{
  question: "Which connective tissue transports oxygen and nutrients?",
  options: [
    "Blood",
    "Cartilage",
    "Bone",
    "Ligament"
  ],
  answer: 0,
},
{
  question: "Which connective tissue resists mechanical stress?",
  options: [
    "Bone",
    "Cartilage",
    "Ligament",
    "Adipose"
  ],
  answer: 2,
},
{
  question: "Smooth muscle is found in the _______.",
  options: [
    "stomach and intestines",
    "biceps",
    "heart",
    "lungs"
  ],
  answer: 0,
},
{
  question: "Cardiac muscle is adapted to _______.",
  options: [
    "continuous rhythmic contraction",
    "rapid voluntary movement",
    "support",
    "absorption"
  ],
  answer: 0,
},
{
  question: "Which tissue detects stimuli and conducts impulses?",
  options: [
    "Nervous tissue",
    "Muscle tissue",
    "Epithelial tissue",
    "Connective tissue"
  ],
  answer: 0,
},
{
  question: "Neurons consist of a cell body, dendrites, and _______.",
  options: [
    "axon",
    "myosin",
    "collagen",
    "cartilage"
  ],
  answer: 0,
},
{
  question: "Which tissue is responsible for voluntary movement?",
  options: [
    "Skeletal muscle",
    "Cardiac muscle",
    "Smooth muscle",
    "Connective tissue"
  ],
  answer: 0,
},
{
  question: "Which plant tissue is responsible for mechanical strength?",
  options: [
    "Sclerenchyma",
    "Parenchyma",
    "Collenchyma",
    "Xylem"
  ],
  answer: 0,
},
{
  question: "Phloem consists of sieve tubes, companion cells, and _______.",
  options: [
    "fibers",
    "xylem vessels",
    "parenchyma",
    "collenchyma"
  ],
  answer: 0,
},
{
  question: "Xylem vessels are dead at maturity to allow _______.",
  options: [
    "efficient water transport",
    "food storage",
    "photosynthesis",
    "flexibility"
  ],
  answer: 0,
},
{
  question: "Sclerenchyma fibers provide _______.",
  options: [
    "mechanical support",
    "photosynthesis",
    "water storage",
    "conduction of food"
  ],
  answer: 0,
},
{
  question: "Which plant tissue allows flexibility in growing stems and leaves?",
  options: [
    "Collenchyma",
    "Sclerenchyma",
    "Parenchyma",
    "Xylem"
  ],
  answer: 0,
},
{
  question: "Which connective tissue forms the skeleton of the body?",
  options: [
    "Bone",
    "Cartilage",
    "Ligament",
    "Tendon"
  ],
  answer: 0,
},
{
  question: "Cartilage is found in the _______.",
  options: [
    "nose and ears",
    "bones",
    "ligaments",
    "muscles"
  ],
  answer: 0,
},
{
  question: "Tendons connect _______.",
  options: [
    "muscle to bone",
    "bone to bone",
    "muscle to muscle",
    "cartilage to bone"
  ],
  answer: 0,
},
{
  question: "The main function of ligaments is to _______.",
  options: [
    "connect bone to bone",
    "connect muscle to bone",
    "store fat",
    "transport oxygen"
  ],
  answer: 0,
},
{
  question: "Which tissue forms the linings of body cavities?",
  options: [
    "Epithelial",
    "Connective",
    "Muscle",
    "Nervous"
  ],
  answer: 0,
},
{
  question: "Which connective tissue stores energy in the form of fat?",
  options: [
    "Adipose",
    "Bone",
    "Cartilage",
    "Ligament"
  ],
  answer: 0,
},
{
  question: "Which tissue allows conduction of impulses in animals?",
  options: [
    "Nervous",
    "Muscle",
    "Epithelial",
    "Connective"
  ],
  answer: 0,
},
{
  question: "Which tissue is responsible for voluntary and involuntary movements?",
  options: [
    "Muscle tissue",
    "Connective tissue",
    "Epithelial tissue",
    "Nervous tissue"
  ],
  answer: 0,
},
{
  question: "Which tissue forms protective coverings in plants?",
  options: [
    "Epidermal tissue",
    "Collenchyma",
    "Sclerenchyma",
    "Parenchyma"
  ],
  answer: 0,
},
{
  question: "Phloem is made up of sieve tubes, companion cells, and _______.",
  options: [
    "fibres",
    "xylem",
    "parenchyma",
    "collenchyma"
  ],
  answer: 0,
},
{
  question: "Xylem consists of vessels, tracheids, xylem parenchyma, and _______.",
  options: [
    "fibres",
    "phloem",
    "sieve tubes",
    "companion cells"
  ],
  answer: 0,
},
{
  question: "The tissue that supports soft plant parts and stores food is _______.",
  options: [
    "Parenchyma",
    "Collenchyma",
    "Sclerenchyma",
    "Xylem"
  ],
  answer: 0,
},
{
  question: "The main role of collenchyma in plants is to provide _______.",
  options: [
    "flexible support",
    "rigid support",
    "photosynthesis",
    "food transport"
  ],
  answer: 0,
},
{
  question: "Adipose tissue is found beneath the _______.",
  options: [
    "skin",
    "bone",
    "cartilage",
    "muscle"
  ],
  answer: 0,
},
{
  question: "Which connective tissue forms the external ear?",
  options: [
    "Cartilage",
    "Bone",
    "Ligament",
    "Adipose"
  ],
  answer: 0,
},
{
  question: "Which connective tissue forms the skeleton of the trachea?",
  options: [
    "Cartilage",
    "Bone",
    "Ligament",
    "Tendon"
  ],
  answer: 0,
},
{
  question: "Smooth muscle is found in the _______.",
  options: [
    "intestine and stomach",
    "biceps",
    "heart",
    "ligaments"
  ],
  answer: 0,
},
{
  question: "Which tissue is responsible for voluntary movement in animals?",
  options: [
    "Skeletal muscle",
    "Cardiac muscle",
    "Smooth muscle",
    "Connective tissue"
  ],
  answer: 0,
},
{
  question: "The tissue responsible for transmitting impulses in animals is _______.",
  options: [
    "Nervous tissue",
    "Muscle tissue",
    "Epithelial tissue",
    "Connective tissue"
  ],
  answer: 0,
},
{
  question: "Which plant tissue protects young organs and reduces water loss?",
  options: [
    "Epidermal tissue",
    "Parenchyma",
    "Sclerenchyma",
    "Collenchyma"
  ],
  answer: 0,
},

{
  question: "Which connective tissue connects muscles to bones?",
  options: ["Ligament", "Tendon", "Cartilage", "Adipose"],
  answer: 1,
},
{
  question: "Which connective tissue connects bones to bones?",
  options: ["Tendon", "Ligament", "Cartilage", "Bone"],
  answer: 1,
},
{
  question: "Cartilage provides _______ in joints.",
  options: ["rigid support", "flexible cushioning", "rigid and brittle structure", "water transport"],
  answer: 1,
},
{
  question: "Bone is a connective tissue that is _______.",
  options: ["rigid and mineralized", "soft and flexible", "non-vascular", "non-living"],
  answer: 0,
},
{
  question: "The main function of adipose tissue is to _______.",
  options: ["store fat and energy", "transport oxygen", "provide rigid support", "connect bones to muscles"],
  answer: 0,
},
{
  question: "Which type of muscle is striated and voluntary?",
  options: ["Skeletal", "Cardiac", "Smooth", "Ligament"],
  answer: 0,
},
{
  question: "Cardiac muscle is characterized by _______.",
  options: ["striated and involuntary", "striated and voluntary", "non-striated and voluntary", "non-striated and involuntary"],
  answer: 0,
},
{
  question: "Smooth muscle is found in _______.",
  options: ["walls of intestines and stomach", "biceps", "heart", "ligaments"],
  answer: 0,
},
{
  question: "Nervous tissue consists of neurons and _______.",
  options: ["neuroglia", "ligaments", "adipose", "cartilage"],
  answer: 0,
},
{
  question: "The main function of nervous tissue is to _______.",
  options: ["conduct impulses", "store fat", "provide support", "contract"],
  answer: 0,
},
{
  question: "Epithelial tissue is adapted for _______.",
  options: ["covering and protection", "support", "conduction", "movement"],
  answer: 0,
},
{
  question: "Simple squamous epithelium is suited for _______.",
  options: ["diffusion", "contraction", "storage", "protection"],
  answer: 0,
},
{
  question: "Cuboidal epithelium is involved in _______.",
  options: ["secretion and absorption", "conduction", "rigid support", "transport"],
  answer: 0,
},
{
  question: "Columnar epithelium is found lining the _______.",
  options: ["small intestine", "lungs", "heart", "kidney"],
  answer: 0,
},
{
  question: "Ciliated epithelium helps in _______.",
  options: ["movement of substances along surfaces", "protection", "conduction", "rigid support"],
  answer: 0,
},
{
  question: "Which connective tissue provides mechanical strength to the body?",
  options: ["Bone", "Cartilage", "Ligament", "Adipose"],
  answer: 0,
},
{
  question: "Which connective tissue cushions bones at joints?",
  options: ["Cartilage", "Bone", "Ligament", "Adipose"],
  answer: 0,
},
{
  question: "Which connective tissue stores energy and insulates the body?",
  options: ["Adipose", "Cartilage", "Bone", "Ligament"],
  answer: 0,
},
{
  question: "Which plant tissue is involved in transporting water?",
  options: ["Xylem", "Phloem", "Collenchyma", "Sclerenchyma"],
  answer: 0,
},
{
  question: "Which plant tissue transports food from leaves to other parts?",
  options: ["Phloem", "Xylem", "Parenchyma", "Collenchyma"],
  answer: 0,
},
{
  question: "Parenchyma cells function mainly in _______.",
  options: ["photosynthesis, storage and secretion", "support", "transport", "rigid protection"],
  answer: 0,
},
{
  question: "Collenchyma provides _______ to growing plant parts.",
  options: ["flexible support", "rigid support", "water transport", "food conduction"],
  answer: 0,
},
{
  question: "Sclerenchyma provides _______ to plant organs.",
  options: ["rigid mechanical support", "flexible support", "water transport", "photosynthesis"],
  answer: 0,
},
{
  question: "The main function of sieve tubes in phloem is _______.",
  options: ["transport of organic food", "transport of water", "photosynthesis", "storage"],
  answer: 0,
},
{
  question: "Companion cells in phloem function to _______.",
  options: ["support sieve tubes", "transport water", "provide mechanical strength", "store food"],
  answer: 0,
},
{
  question: "Xylem vessels are dead at maturity to allow _______.",
  options: ["efficient water conduction", "rigid support", "food transport", "photosynthesis"],
  answer: 0,
},
{
  question: "Sclerenchyma fibers are mainly for _______.",
  options: ["mechanical support", "photosynthesis", "water transport", "conduction of food"],
  answer: 0,
},
{
  question: "Which tissue stores starch in plants?",
  options: ["Parenchyma", "Collenchyma", "Sclerenchyma", "Xylem"],
  answer: 0,
},
{
  question: "Which connective tissue protects internal organs?",
  options: ["Bone", "Cartilage", "Adipose", "Ligament"],
  answer: 2,
},
{
  question: "Ligaments are composed mainly of _______.",
  options: ["collagen fibers", "elastin fibers", "bone", "cartilage"],
  answer: 0,
},
{
  question: "Tendons are made of _______.",
  options: ["dense fibrous connective tissue", "cartilage", "bone", "adipose"],
  answer: 0,
},
{
  question: "Smooth muscles are under _______ control.",
  options: ["involuntary", "voluntary", "conscious", "striated"],
  answer: 0,
},
{
  question: "Skeletal muscles are attached to bones by _______.",
  options: ["tendons", "ligaments", "cartilage", "adipose"],
  answer: 0,
},
{
  question: "Which muscle type is responsible for peristalsis in the gut?",
  options: ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Ligament"],
  answer: 0,
},
{
  question: "Cardiac muscle cells are connected by _______.",
  options: ["intercalated discs", "tendons", "ligaments", "fibers"],
  answer: 0,
},
{
  question: "Neurons transmit impulses from _______ to target cells.",
  options: ["dendrites to axon", "axon to dendrites", "cell body to axon", "axon to cell body"],
  answer: 0,
},
{
  question: "Neuroglia function to _______.",
  options: ["support and nourish neurons", "contract muscles", "connect bones", "transport food"],
  answer: 0,
},
{
  question: "The outer protective layer of plant stems is formed by _______.",
  options: ["epidermal tissue", "collenchyma", "sclerenchyma", "xylem"],
  answer: 0,
},
{
  question: "Which connective tissue has a matrix rich in calcium salts?",
  options: ["Bone", "Cartilage", "Ligament", "Adipose"],
  answer: 0,
},
{
  question: "Which connective tissue is avascular?",
  options: ["Cartilage", "Bone", "Blood", "Ligament"],
  answer: 0,
},
{
  question: "Which muscle tissue has striations and involuntary control?",
  options: ["Cardiac", "Skeletal", "Smooth", "Tendon"],
  answer: 0,
},
{
  question: "Adipose tissue acts as _______ in animals.",
  options: ["insulation and energy storage", "transport tissue", "protective layer", "muscle fiber"],
  answer: 0,
},
{
  question: "Which tissue forms the myelin sheath around neurons?",
  options: ["Neuroglia", "Neuron", "Ligament", "Bone"],
  answer: 0,
},
{
  question: "The function of connective tissue is mainly _______.",
  options: ["support, binding, and protection", "transport, absorption, and secretion", "conduction of impulses", "movement"],
  answer: 0,
},
{
  question: "The plant tissue that forms wood is mainly _______.",
  options: ["Xylem", "Phloem", "Collenchyma", "Parenchyma"],
  answer: 0,
},
{
  question: "Phloem conducts food mainly in the form of _______.",
  options: ["sucrose", "water", "amino acids", "minerals"],
  answer: 0,
},
{
  question: "Collenchyma cells are living at maturity and provide _______.",
  options: ["flexible support", "rigid support", "transport", "photosynthesis"],
  answer: 0,
},
{
  question: "Sclerenchyma cells are dead at maturity and provide _______.",
  options: ["rigid mechanical support", "flexible support", "photosynthesis", "food transport"],
  answer: 0,
},
{
  question: "Epithelial tissue lines the _______.",
  options: ["body surfaces and cavities", "muscles", "bones", "cartilage"],
  answer: 0,
},
{
  question: "Which connective tissue forms the tendons and ligaments?",
  options: ["Dense fibrous connective tissue", "Adipose", "Cartilage", "Bone"],
  answer: 0,
},
{
  question: "Which muscle tissue is multinucleated and striated?",
  options: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Ligament"],
  answer: 0,
},
{
  question: "The main function of epidermis in plants is _______.",
  options: ["protection and water loss prevention", "transport of water", "support", "photosynthesis"],
  answer: 0,
},

//nervous and hormonal coordination 

{
  question: "The basic structural and functional unit of the nervous system is the _______.",
  options: ["Neuron", "Axon", "Dendrite", "Synapse"],
  answer: 0,
},
{
  question: "The junction between two neurons is called a _______.",
  options: ["Synapse", "Axon", "Dendrite", "Neuron"],
  answer: 0,
},
{
  question: "The part of the neuron that receives impulses from other neurons is the _______.",
  options: ["Dendrite", "Axon", "Cell body", "Synapse"],
  answer: 0,
},
{
  question: "The part of the neuron that transmits impulses away from the cell body is the _______.",
  options: ["Axon", "Dendrite", "Synapse", "Cell body"],
  answer: 0,
},
{
  question: "The cell body of a neuron contains the _______.",
  options: ["nucleus", "axon", "synapse", "dendrite"],
  answer: 0,
},
{
  question: "Myelin sheath functions to _______.",
  options: ["increase the speed of impulse conduction", "protect the dendrites", "store neurotransmitters", "connect neurons"],
  answer: 0,
},
{
  question: "Gaps in the myelin sheath are called _______.",
  options: ["Nodes of Ranvier", "Synapses", "Axon terminals", "Dendrites"],
  answer: 0,
},
{
  question: "The resting potential of a neuron is maintained by _______.",
  options: ["sodium-potassium pump", "diffusion only", "synapses", "axons"],
  answer: 0,
},
{
  question: "The all-or-none law of neurons states that _______.",
  options: ["a neuron either fires completely or not at all", "a neuron can fire partially", "all neurons fire together", "neurons can stop firing voluntarily"],
  answer: 0,
},
{
  question: "Reflex action is _______.",
  options: ["a rapid, automatic response to a stimulus", "a voluntary response", "controlled by the brain only", "slow and deliberate"],
  answer: 0,
},
{
  question: "The central nervous system consists of the _______.",
  options: ["brain and spinal cord", "brain only", "spinal cord only", "nerves throughout the body"],
  answer: 0,
},
{
  question: "The peripheral nervous system consists of _______.",
  options: ["all nerves outside the brain and spinal cord", "brain only", "spinal cord only", "neurons inside the brain"],
  answer: 0,
},
{
  question: "Sensory neurons carry impulses _______.",
  options: ["from receptors to the CNS", "from CNS to effectors", "between muscles", "between glands"],
  answer: 0,
},
{
  question: "Motor neurons carry impulses _______.",
  options: ["from CNS to effectors", "from receptors to CNS", "between neurons", "between glands"],
  answer: 0,
},
{
  question: "Interneurons are found _______.",
  options: ["within the CNS", "between CNS and muscles", "in muscles", "in glands"],
  answer: 0,
},
{
  question: "The cerebrum is responsible for _______.",
  options: ["thought, memory, and voluntary actions", "balance and coordination", "breathing", "heartbeat"],
  answer: 0,
},
{
  question: "The cerebellum controls _______.",
  options: ["balance and coordination", "thought and memory", "vision", "hearing"],
  answer: 0,
},
{
  question: "The medulla oblongata controls _______.",
  options: ["heartbeat and breathing", "thinking", "balance", "sight"],
  answer: 0,
},
{
  question: "The hypothalamus regulates _______.",
  options: ["body temperature, hunger, and thirst", "balance", "voluntary movement", "hearing"],
  answer: 0,
},
{
  question: "The reflex arc typically involves _______ neurons.",
  options: ["sensory, motor, and interneurons", "only motor", "only sensory", "only interneurons"],
  answer: 0,
},
{
  question: "A hormone is _______.",
  options: ["a chemical messenger secreted into the blood", "an electrical impulse", "a neurotransmitter", "a muscle contraction"],
  answer: 0,
},
{
  question: "Endocrine glands secrete hormones _______.",
  options: ["directly into the blood", "into ducts", "into muscles", "into the brain"],
  answer: 0,
},
{
  question: "Exocrine glands secrete their products _______.",
  options: ["through ducts to body surfaces or cavities", "into the blood", "into muscles", "into the brain"],
  answer: 0,
},
{
  question: "The pancreas is both an endocrine and exocrine gland because it _______.",
  options: ["secretes insulin and digestive enzymes", "only secretes insulin", "only secretes digestive enzymes", "does not secrete hormones"],
  answer: 0,
},
{
  question: "Insulin is secreted by the _______ cells of the pancreas.",
  options: ["beta", "alpha", "delta", "gamma"],
  answer: 0,
},
{
  question: "Glucagon is secreted by the _______ cells of the pancreas.",
  options: ["alpha", "beta", "delta", "gamma"],
  answer: 0,
},
{
  question: "The pituitary gland is often called the _______.",
  options: ["master gland", "slave gland", "adrenal gland", "thyroid gland"],
  answer: 0,
},
{
  question: "Thyroxine is secreted by the _______.",
  options: ["thyroid gland", "parathyroid gland", "pituitary gland", "adrenal gland"],
  answer: 0,
},
{
  question: "Adrenaline is secreted by the _______.",
  options: ["adrenal glands", "thyroid gland", "pituitary gland", "pancreas"],
  answer: 0,
},
{
  question: "The function of thyroxine is to _______.",
  options: ["regulate metabolism", "control blood sugar", "stimulate muscle contraction", "control heart rate"],
  answer: 0,
},
{
  question: "The parathyroid glands regulate _______.",
  options: ["calcium levels in the blood", "blood sugar", "heart rate", "metabolism"],
  answer: 0,
},
{
  question: "The adrenal cortex secretes _______.",
  options: ["cortisol and aldosterone", "adrenaline", "insulin", "thyroxine"],
  answer: 0,
},
{
  question: "The adrenal medulla secretes _______.",
  options: ["adrenaline and noradrenaline", "cortisol", "thyroxine", "insulin"],
  answer: 0,
},
{
  question: "Negative feedback in hormonal regulation helps to _______.",
  options: ["maintain homeostasis", "increase hormone levels indefinitely", "stop all hormones", "cause disease"],
  answer: 0,
},
{
  question: "The fight-or-flight response is mainly controlled by _______.",
  options: ["adrenaline", "insulin", "thyroxine", "glucagon"],
  answer: 0,
},
{
  question: "The hypothalamus links the nervous and endocrine systems via the _______.",
  options: ["pituitary gland", "thyroid gland", "adrenal gland", "pancreas"],
  answer: 0,
},
{
  question: "Oxytocin is secreted by the _______.",
  options: ["posterior pituitary", "anterior pituitary", "thyroid gland", "adrenal gland"],
  answer: 0,
},
{
  question: "Antidiuretic hormone (ADH) acts on the _______.",
  options: ["kidneys", "heart", "liver", "lungs"],
  answer: 0,
},
{
  question: "The endocrine system controls the body using _______.",
  options: ["hormones", "nerve impulses", "muscles", "bones"],
  answer: 0,
},
{
  question: "Neurotransmitters are released at the _______.",
  options: ["synapse", "axon", "cell body", "dendrite"],
  answer: 0,
},
{
  question: "Acetylcholine is a neurotransmitter that _______.",
  options: ["stimulates muscles and neurons", "inhibits glands", "destroys hormones", "increases adrenaline"],
  answer: 0,
},
{
  question: "The myelin sheath is produced by _______ in the PNS.",
  options: ["Schwann cells", "Oligodendrocytes", "Astrocytes", "Microglia"],
  answer: 0,
},
{
  question: "The central nervous system is protected by the _______.",
  options: ["skull and vertebral column", "heart", "kidneys", "lungs"],
  answer: 0,
},
{
  question: "Cranial nerves are part of the _______.",
  options: ["peripheral nervous system", "central nervous system", "brain", "spinal cord"],
  answer: 0,
},
{
  question: "Reflex actions are faster because they bypass the _______.",
  options: ["brain", "spinal cord", "muscles", "sensory receptors"],
  answer: 0,
},
{
  question: "Hormonal effects are generally _______ compared to nervous responses.",
  options: ["slower but longer-lasting", "faster and short-lived", "instantaneous", "non-specific"],
  answer: 0,
},
{
  question: "The pancreas regulates blood glucose by secreting _______.",
  options: ["insulin and glucagon", "adrenaline", "thyroxine", "cortisol"],
  answer: 0,
},
{
  question: "The posterior pituitary stores and releases hormones made by the _______.",
  options: ["hypothalamus", "pituitary", "thyroid", "adrenal"],
  answer: 0,
},

{
  question: "The sympathetic nervous system is responsible for _______.",
  options: ["fight-or-flight responses", "rest-and-digest responses", "hormone secretion", "digestion only"],
  answer: 0,
},
{
  question: "The parasympathetic nervous system is responsible for _______.",
  options: ["rest-and-digest activities", "fight-or-flight responses", "stress response", "adrenaline secretion"],
  answer: 0,
},
{
  question: "Reflex actions are _______.",
  options: ["automatic and involuntary", "voluntary", "slow responses", "long-lasting"],
  answer: 0,
},
{
  question: "The knee-jerk reflex is an example of a _______ reflex.",
  options: ["spinal", "cranial", "voluntary", "autonomic"],
  answer: 0,
},
{
  question: "Autonomic nervous system controls _______.",
  options: ["involuntary actions", "voluntary actions", "thought", "memory"],
  answer: 0,
},
{
  question: "Somatic nervous system controls _______.",
  options: ["voluntary actions", "involuntary actions", "hormone secretion", "digestion"],
  answer: 0,
},
{
  question: "Neurons that carry impulses from receptors to CNS are _______.",
  options: ["sensory neurons", "motor neurons", "interneurons", "reflex neurons"],
  answer: 0,
},
{
  question: "Neurons that carry impulses from CNS to effectors are _______.",
  options: ["motor neurons", "sensory neurons", "interneurons", "reflex neurons"],
  answer: 0,
},
{
  question: "The neurotransmitter involved in muscle contraction is _______.",
  options: ["acetylcholine", "dopamine", "adrenaline", "serotonin"],
  answer: 0,
},
{
  question: "The synaptic cleft is the space between _______.",
  options: ["two neurons", "axon and dendrite of the same neuron", "cell body and axon", "axon and muscle fiber"],
  answer: 0,
},
{
  question: "The limbic system is associated with _______.",
  options: ["emotions and memory", "movement coordination", "breathing", "digestion"],
  answer: 0,
},
{
  question: "The cerebrum is divided into _______ hemispheres.",
  options: ["two", "three", "four", "one"],
  answer: 0,
},
{
  question: "The right hemisphere of the cerebrum generally controls _______.",
  options: ["the left side of the body", "the right side of the body", "both sides equally", "hormone secretion"],
  answer: 0,
},
{
  question: "The medulla oblongata controls _______.",
  options: ["heart rate and breathing", "thought and reasoning", "voluntary movement", "memory"],
  answer: 0,
},
{
  question: "Hormones are transported in the body through _______.",
  options: ["blood", "nerves", "lymph", "muscles"],
  answer: 0,
},
{
  question: "Thyroxine deficiency leads to _______.",
  options: ["goiter or cretinism", "diabetes", "adrenal insufficiency", "high blood pressure"],
  answer: 0,
},
{
  question: "Insulin lowers blood glucose by _______.",
  options: ["stimulating glucose uptake by cells", "stimulating glycogen breakdown", "increasing blood sugar", "stimulating glucagon secretion"],
  answer: 0,
},
{
  question: "Glucagon raises blood glucose by _______.",
  options: ["stimulating glycogen breakdown", "stimulating insulin release", "lowering blood sugar", "stimulating thyroid hormones"],
  answer: 0,
},
{
  question: "Adrenaline increases _______ during stress.",
  options: ["heart rate and blood flow to muscles", "digestion", "thyroxine secretion", "blood clotting only"],
  answer: 0,
},
{
  question: "Cortisol is secreted by the _______.",
  options: ["adrenal cortex", "adrenal medulla", "pituitary gland", "thyroid gland"],
  answer: 0,
},
{
  question: "The target organs of hormones respond based on the presence of _______.",
  options: ["specific receptors", "size of hormone", "blood pressure", "nerve impulses"],
  answer: 0,
},
{
  question: "ADH acts on the _______ to control water reabsorption.",
  options: ["kidneys", "heart", "liver", "lungs"],
  answer: 0,
},
{
  question: "Oxytocin stimulates _______.",
  options: ["uterine contractions and milk ejection", "blood sugar increase", "heartbeat", "thyroxine secretion"],
  answer: 0,
},
{
  question: "The endocrine and nervous systems differ in that hormones act _______ compared to nerve impulses.",
  options: ["slower but longer-lasting", "faster and short-lived", "instantaneously", "never effective"],
  answer: 0,
},
{
  question: "Hypothalamus produces hormones that regulate the _______.",
  options: ["pituitary gland", "thyroid gland", "adrenal gland", "pancreas"],
  answer: 0,
},
{
  question: "The pituitary gland has anterior and posterior parts, which differ in _______.",
  options: ["hormone secretion and control", "size", "location", "nerve connections"],
  answer: 0,
},
{
  question: "Melatonin regulates _______.",
  options: ["sleep-wake cycles", "blood sugar", "heart rate", "growth"],
  answer: 0,
},
{
  question: "The thymus gland is important for _______.",
  options: ["immune system development", "digestion", "blood sugar regulation", "thyroxine secretion"],
  answer: 0,
},
{
  question: "The fight-or-flight response is triggered by the _______.",
  options: ["sympathetic nervous system", "parasympathetic nervous system", "pituitary gland", "thyroid gland"],
  answer: 0,
},
{
  question: "Negative feedback in hormone regulation prevents _______.",
  options: ["overproduction of hormones", "nerve impulses", "muscle contractions", "brain activity"],
  answer: 0,
},
{
  question: "The hormone that regulates calcium levels in blood is _______.",
  options: ["parathyroid hormone", "insulin", "adrenaline", "thyroxine"],
  answer: 0,
},
{
  question: "The adrenal medulla secretes hormones that prepare the body for _______.",
  options: ["emergency or stress situations", "sleep", "digestion", "growth"],
  answer: 0,
},
{
  question: "Endocrine glands are ductless because they release hormones directly into the _______.",
  options: ["bloodstream", "lymph", "nerves", "muscles"],
  answer: 0,
},
{
  question: "Exocrine glands secrete substances via _______.",
  options: ["ducts", "blood", "nerves", "lymph"],
  answer: 0,
},
{
  question: "Thyroid hormones regulate _______.",
  options: ["metabolic rate", "blood glucose", "heart rate", "immune function"],
  answer: 0,
},
{
  question: "Prolactin stimulates _______.",
  options: ["milk production", "thyroxine release", "glucagon release", "adrenaline release"],
  answer: 0,
},
{
  question: "The adrenal glands are located _______.",
  options: ["on top of the kidneys", "in the brain", "near the thyroid", "in the pancreas"],
  answer: 0,
},
{
  question: "The posterior pituitary releases hormones produced by the _______.",
  options: ["hypothalamus", "pituitary", "thyroid", "adrenal gland"],
  answer: 0,
},
{
  question: "Neurotransmitters are secreted by _______.",
  options: ["neurons", "glands", "muscles", "bones"],
  answer: 0,
},
{
  question: "Acetylcholine and norepinephrine are examples of _______.",
  options: ["neurotransmitters", "hormones", "enzymes", "vitamins"],
  answer: 0,
},
{
  question: "Synaptic transmission allows the nervous system to _______.",
  options: ["communicate between neurons", "secrete hormones", "contract muscles", "store nutrients"],
  answer: 0,
},
{
  question: "Reflex arcs usually involve _______ synapses.",
  options: ["one or more", "zero", "ten", "hundreds"],
  answer: 0,
},
{
  question: "The fight-or-flight hormone adrenaline is secreted by the _______.",
  options: ["adrenal medulla", "adrenal cortex", "pituitary", "thyroid"],
  answer: 0,
},
{
  question: "Norepinephrine primarily increases _______.",
  options: ["heart rate and alertness", "digestion", "growth", "sleep"],
  answer: 0,
},
{
  question: "The hypothalamus controls hormone secretion through _______.",
  options: ["pituitary gland", "thyroid gland", "adrenal gland", "pancreas"],
  answer: 0,
},
{
  question: "The myelin sheath ensures that nerve impulses _______.",
  options: ["travel faster along axons", "stop at synapses", "reach the brain slowly", "only move in one direction"],
  answer: 0,
},
{
  question: "Reflex actions help protect the body because they are _______.",
  options: ["rapid and automatic", "slow and voluntary", "controlled by hormones", "random movements"],
  answer: 0,
},


//reproduction 

{
  question: "Reproduction is the biological process by which organisms _______.",
  options: ["produce offspring", "respire", "move", "excrete"],
  answer: 0,
},
{
  question: "Sexual reproduction involves _______.",
  options: ["fusion of gametes", "budding", "fragmentation", "binary fission"],
  answer: 0,
},
{
  question: "Asexual reproduction involves _______.",
  options: ["one parent", "two parents", "gamete fusion", "pollination"],
  answer: 0,
},
{
  question: "In humans, male gametes are called _______.",
  options: ["sperm", "ovum", "zygote", "embryo"],
  answer: 0,
},
{
  question: "Female gametes in humans are called _______.",
  options: ["ova", "sperm", "zygotes", "gametes"],
  answer: 0,
},
{
  question: "Fertilization is the process by which _______.",
  options: ["sperm and ovum fuse", "gametes are produced", "zygotes grow", "meiosis occurs"],
  answer: 0,
},
{
  question: "Internal fertilization occurs in _______.",
  options: ["humans", "frogs", "fish", "algae"],
  answer: 0,
},
{
  question: "External fertilization occurs in _______.",
  options: ["frogs and fish", "humans", "birds", "mammals"],
  answer: 0,
},
{
  question: "The male reproductive organ in humans is the _______.",
  options: ["testis", "ovary", "uterus", "vagina"],
  answer: 0,
},
{
  question: "The female reproductive organ in humans is the _______.",
  options: ["ovary", "testis", "penis", "scrotum"],
  answer: 0,
},
{
  question: "Spermatogenesis occurs in the _______.",
  options: ["testes", "ovaries", "uterus", "vas deferens"],
  answer: 0,
},
{
  question: "Oogenesis occurs in the _______.",
  options: ["ovaries", "testes", "uterus", "fallopian tube"],
  answer: 0,
},
{
  question: "The process of meiosis produces _______.",
  options: ["gametes with half the chromosome number", "somatic cells", "zygotes", "embryos"],
  answer: 0,
},
{
  question: "The zygote develops into an _______.",
  options: ["embryo", "ovum", "sperm", "gamete"],
  answer: 0,
},
{
  question: "The uterus is the site of _______.",
  options: ["fetal development", "sperm production", "fertilization only", "egg formation"],
  answer: 0,
},
{
  question: "The fallopian tube transports the _______ to the uterus.",
  options: ["ovum", "sperm", "zygote", "embryo"],
  answer: 0,
},
{
  question: "The scrotum helps in _______ of testes.",
  options: ["temperature regulation", "sperm transport", "hormone secretion", "fertilization"],
  answer: 0,
},
{
  question: "The penis functions in _______.",
  options: ["delivering sperm into the female reproductive tract", "egg production", "hormone secretion", "zygote formation"],
  answer: 0,
},
{
  question: "Fertilized egg implants in the _______.",
  options: ["uterus", "ovary", "vagina", "fallopian tube"],
  answer: 0,
},
{
  question: "Asexual reproduction is common in _______.",
  options: ["plants, bacteria, and some animals", "humans", "birds", "mammals only"],
  answer: 0,
},
{
  question: "Budding in Hydra is an example of _______.",
  options: ["asexual reproduction", "sexual reproduction", "fertilization", "pollination"],
  answer: 0,
},
{
  question: "Binary fission is a type of _______.",
  options: ["asexual reproduction in unicellular organisms", "sexual reproduction", "pollination", "spore formation"],
  answer: 0,
},
{
  question: "In plants, sexual reproduction involves the fusion of _______.",
  options: ["male and female gametes", "leaves and stems", "pollen and soil", "roots and stems"],
  answer: 0,
},
{
  question: "Pollination is the transfer of pollen from _______ to _______.",
  options: ["anther to stigma", "stigma to ovary", "ovary to anther", "stigma to anther"],
  answer: 0,
},
{
  question: "Fertilization in flowering plants occurs in the _______.",
  options: ["ovule", "stigma", "anther", "petal"],
  answer: 0,
},
{
  question: "Seeds are formed from the _______ after fertilization.",
  options: ["ovule", "anther", "stigma", "ovary wall"],
  answer: 0,
},
{
  question: "The embryo in seeds develops from the _______.",
  options: ["zygote", "gamete", "ovule wall", "pollen"],
  answer: 0,
},
{
  question: "Fruit develops from the _______ in flowering plants.",
  options: ["ovary", "ovule", "petal", "stamen"],
  answer: 0,
},
{
  question: "Viviparous animals give birth to _______.",
  options: ["live young", "eggs only", "spores", "buds"],
  answer: 0,
},
{
  question: "Oviparous animals lay _______.",
  options: ["eggs", "live young", "buds", "seeds"],
  answer: 0,
},
{
  question: "Ovoviviparous animals _______.",
  options: ["produce eggs that hatch within the body", "lay eggs externally", "give birth to live young directly", "produce spores"],
  answer: 0,
},
{
  question: "Testosterone is secreted by the _______.",
  options: ["testes", "ovaries", "pituitary gland", "adrenal gland"],
  answer: 0,
},
{
  question: "Estrogen is secreted by the _______.",
  options: ["ovaries", "testes", "adrenal gland", "pituitary gland"],
  answer: 0,
},
{
  question: "Progesterone prepares the uterus for _______.",
  options: ["implantation of the zygote", "sperm production", "egg formation", "fertilization"],
  answer: 0,
},
{
  question: "Menstruation occurs due to the breakdown of the _______.",
  options: ["endometrium", "ovum", "zygote", "oviduct"],
  answer: 0,
},
{
  question: "Fertilization in humans is usually _______.",
  options: ["internal", "external", "asexual", "pollination"],
  answer: 0,
},
{
  question: "In humans, the male gamete is produced continuously from puberty due to _______.",
  options: ["spermatogenesis", "oogenesis", "menstruation", "fertilization"],
  answer: 0,
},
{
  question: "Oogenesis produces a single functional ovum and _______ polar bodies.",
  options: ["three", "one", "two", "four"],
  answer: 0,
},
{
  question: "The fusion of male and female gametes forms a _______.",
  options: ["zygote", "gamete", "embryo", "ovum"],
  answer: 0,
},
{
  question: "The placenta functions in _______.",
  options: ["nutrient and gas exchange between mother and fetus", "sperm production", "egg production", "hormone secretion only"],
  answer: 0,
},
{
  question: "Amniotic fluid protects the fetus by _______.",
  options: ["cushioning and maintaining temperature", "providing food", "producing gametes", "hormone regulation"],
  answer: 0,
},
{
  question: "The umbilical cord connects the fetus to the _______.",
  options: ["placenta", "uterus wall", "ovary", "fallopian tube"],
  answer: 0,
},
{
  question: "In plants, self-pollination involves pollen from the anther landing on the _______ of the same flower.",
  options: ["stigma", "ovule", "petal", "sepals"],
  answer: 0,
},
{
  question: "Cross-pollination involves transfer of pollen between _______.",
  options: ["different flowers", "the same flower", "same plant only", "non-flowering plants"],
  answer: 0,
},
{
  question: "Vegetative reproduction in plants is _______.",
  options: ["asexual reproduction without seeds", "sexual reproduction", "fertilization", "pollination"],
  answer: 0,
},
{
  question: "Fragmentation in animals is a form of _______.",
  options: ["asexual reproduction", "sexual reproduction", "pollination", "fertilization"],
  answer: 0,
},
{
  question: "Parthenogenesis is reproduction without _______.",
  options: ["fertilization", "gametes", "zygotes", "embryos"],
  answer: 0,
},
{
  question: "Cloning produces offspring _______ to the parent.",
  options: ["genetically identical", "genetically different", "haploid only", "with mutations always"],
  answer: 0,
},

{
  question: "The male reproductive hormone responsible for secondary sexual characteristics is _______.",
  options: ["testosterone", "estrogen", "progesterone", "FSH"],
  answer: 0,
},
{
  question: "The female hormone that regulates the menstrual cycle is _______.",
  options: ["estrogen and progesterone", "testosterone", "LH only", "FSH only"],
  answer: 0,
},
{
  question: "Follicle-stimulating hormone (FSH) stimulates _______.",
  options: ["maturation of gametes", "ovulation", "uterine contraction", "testosterone production"],
  answer: 0,
},
{
  question: "Luteinizing hormone (LH) triggers _______.",
  options: ["ovulation", "gamete maturation", "spermatogenesis", "menstruation"],
  answer: 0,
},
{
  question: "The endometrium thickens under the influence of _______.",
  options: ["estrogen", "progesterone", "testosterone", "FSH"],
  answer: 0,
},
{
  question: "The fertilized ovum develops into a _______.",
  options: ["zygote", "gamete", "embryo", "blastocyst"],
  answer: 0,
},
{
  question: "The blastocyst implants in the _______ during pregnancy.",
  options: ["uterus", "ovary", "oviduct", "vagina"],
  answer: 0,
},
{
  question: "The primary site of fertilization in humans is the _______.",
  options: ["fallopian tube", "uterus", "ovary", "vagina"],
  answer: 0,
},
{
  question: "Gametes are haploid cells containing _______ chromosomes.",
  options: ["half the diploid number", "double the diploid number", "diploid number", "one-quarter the diploid number"],
  answer: 0,
},
{
  question: "Zygote is a _______ cell formed by fusion of gametes.",
  options: ["diploid", "haploid", "polyploid", "monoploid"],
  answer: 0,
},
{
  question: "During pregnancy, progesterone maintains the _______.",
  options: ["endometrium", "ovary", "fallopian tube", "vagina"],
  answer: 0,
},
{
  question: "The corpus luteum forms from the _______ after ovulation.",
  options: ["ovarian follicle", "uterus", "oviduct", "endometrium"],
  answer: 0,
},
{
  question: "Spermatogenesis produces _______ sperm from each spermatogonium.",
  options: ["four", "one", "two", "eight"],
  answer: 0,
},
{
  question: "Oogenesis produces _______ functional ovum from one oogonium.",
  options: ["one", "two", "three", "four"],
  answer: 0,
},
{
  question: "Fertilization restores the _______ chromosome number in the zygote.",
  options: ["diploid", "haploid", "triploid", "tetraploid"],
  answer: 0,
},
{
  question: "The placenta is formed from _______.",
  options: ["maternal and fetal tissues", "uterus only", "ovary only", "umbilical cord only"],
  answer: 0,
},
{
  question: "The umbilical cord contains _______ arteries and veins.",
  options: ["two arteries and one vein", "one artery and two veins", "two veins and no arteries", "one artery and one vein"],
  answer: 0,
},
{
  question: "The amniotic sac contains _______ fluid that protects the fetus.",
  options: ["amniotic", "cerebrospinal", "plasma", "lymph"],
  answer: 0,
},
{
  question: "The process by which an egg develops without fertilization is called _______.",
  options: ["parthenogenesis", "budding", "fragmentation", "pollination"],
  answer: 0,
},
{
  question: "Vegetative propagation in plants is an example of _______.",
  options: ["asexual reproduction", "sexual reproduction", "pollination", "fertilization"],
  answer: 0,
},
{
  question: "Cuttings, grafting, and layering are methods of _______ in plants.",
  options: ["vegetative propagation", "sexual reproduction", "spore formation", "seed dispersal"],
  answer: 0,
},
{
  question: "Binary fission in bacteria results in _______.",
  options: ["two identical daughter cells", "one gamete", "zygote formation", "four gametes"],
  answer: 0,
},
{
  question: "Budding in yeast produces _______.",
  options: ["a small identical offspring from the parent cell", "gametes", "zygote", "pollen"],
  answer: 0,
},
{
  question: "Fragmentation in starfish results in _______.",
  options: ["regeneration of a new individual from a part", "formation of gametes", "fertilization", "pollination"],
  answer: 0,
},
{
  question: "Sexual reproduction increases _______ in populations.",
  options: ["genetic variation", "mutation rate only", "asexual clones", "sterility"],
  answer: 0,
},
{
  question: "Asexual reproduction produces offspring _______ to the parent.",
  options: ["genetically identical", "genetically different", "haploid", "polyploid"],
  answer: 0,
},
{
  question: "Ovoviviparous animals produce eggs that _______ inside the body.",
  options: ["hatch before birth", "are laid externally", "are fertilized externally", "never hatch"],
  answer: 0,
},
{
  question: "Viviparous animals give birth to _______.",
  options: ["live young", "eggs", "buds", "spores"],
  answer: 0,
},
{
  question: "Oviparous animals reproduce by laying _______.",
  options: ["eggs", "live young", "buds", "seeds"],
  answer: 0,
},
{
  question: "Testosterone controls sperm production and _______.",
  options: ["secondary sexual characteristics", "menstruation", "ovulation", "placenta formation"],
  answer: 0,
},
{
  question: "Estrogen is responsible for development of _______.",
  options: ["female secondary sexual characteristics", "male characteristics", "gamete production only", "placenta formation"],
  answer: 0,
},
{
  question: "Progesterone prepares the uterus for _______.",
  options: ["implantation of the zygote", "sperm production", "menstruation", "pollination"],
  answer: 0,
},
{
  question: "The menstrual cycle lasts approximately _______ days in humans.",
  options: ["28", "21", "35", "14"],
  answer: 0,
},
{
  question: "Ovulation typically occurs on day _______ of the menstrual cycle.",
  options: ["14", "1", "28", "7"],
  answer: 0,
},
{
  question: "The release of an ovum from the ovary is called _______.",
  options: ["ovulation", "fertilization", "menstruation", "implantation"],
  answer: 0,
},
{
  question: "The corpus luteum secretes _______ to maintain pregnancy.",
  options: ["progesterone", "estrogen", "testosterone", "FSH"],
  answer: 0,
},
{
  question: "The first cell formed after fertilization is called a _______.",
  options: ["zygote", "gamete", "embryo", "blastocyst"],
  answer: 0,
},
{
  question: "The human embryo implants in the _______.",
  options: ["uterus", "oviduct", "ovary", "vagina"],
  answer: 0,
},
{
  question: "In flowering plants, cross-pollination promotes _______.",
  options: ["genetic variation", "identical clones", "asexual reproduction", "vegetative growth"],
  answer: 0,
},
{
  question: "Self-pollination reduces _______ in plants.",
  options: ["genetic variation", "fertility", "flowering", "seed formation"],
  answer: 0,
},
{
  question: "The transfer of pollen from anther to stigma is called _______.",
  options: ["pollination", "fertilization", "ovulation", "budding"],
  answer: 0,
},
{
  question: "Fertilization restores the _______ chromosome number in the zygote.",
  options: ["diploid", "haploid", "tetraploid", "triploid"],
  answer: 0,
},
{
  question: "Asexual reproduction is common in _______.",
  options: ["bacteria, fungi, and some plants", "humans only", "birds only", "mammals only"],
  answer: 0,
},
{
  question: "Vegetative propagation is a type of _______ reproduction.",
  options: ["asexual", "sexual", "gametic", "fertilization-based"],
  answer: 0,
},
{
  question: "Parthenogenesis occurs when offspring develop from _______ without fertilization.",
  options: ["egg cells", "sperm cells", "zygotes", "buds"],
  answer: 0,
},
{
  question: "Cloning produces offspring _______ to the parent.",
  options: ["genetically identical", "genetically different", "haploid", "polyploid"],
  answer: 0,
},

{
  question: "Viviparous animals give birth to _______.",
  options: ["live young", "eggs", "buds", "spores"],
  answer: 0,
},
{
  question: "Oviparous animals lay _______.",
  options: ["eggs", "live young", "buds", "spores"],
  answer: 0,
},
{
  question: "Ovoviviparous animals produce eggs that _______ inside the body.",
  options: ["hatch before birth", "are laid externally", "are fertilized externally", "never hatch"],
  answer: 0,
},
{
  question: "External fertilization occurs mostly in _______.",
  options: ["fishes and amphibians", "mammals", "birds", "reptiles"],
  answer: 0,
},
{
  question: "Internal fertilization occurs in _______.",
  options: ["mammals, birds, and reptiles", "fish and amphibians", "insects only", "amphibians only"],
  answer: 0,
},
{
  question: "The male reproductive organ in mammals is the _______.",
  options: ["testis", "ovary", "penis", "scrotum"],
  answer: 0,
},
{
  question: "The female reproductive organ in mammals is the _______.",
  options: ["ovary", "testis", "uterus", "vagina"],
  answer: 0,
},
{
  question: "Fertilization in birds is _______.",
  options: ["internal", "external", "asexual", "pollination"],
  answer: 0,
},
{
  question: "Birds lay eggs that are _______.",
  options: ["amniotic", "non-amniotic", "live young", "ovoviviparous"],
  answer: 0,
},
{
  question: "Fishes like salmon lay eggs in water and fertilization is _______.",
  options: ["external", "internal", "asexual", "vegetative"],
  answer: 0,
},
{
  question: "Amphibians like frogs undergo _______ fertilization.",
  options: ["external", "internal", "asexual", "pollination"],
  answer: 0,
},
{
  question: "Reptiles lay _______ eggs with leathery or hard shells.",
  options: ["amniotic", "non-amniotic", "live young", "ovoviviparous"],
  answer: 0,
},
{
  question: "Placenta in mammals functions to _______.",
  options: ["exchange nutrients and gases between mother and fetus", "produce gametes", "protect eggs externally", "fertilize sperm"],
  answer: 0,
},
{
  question: "Marsupials give birth to _______ young that develop in a pouch.",
  options: ["underdeveloped", "fully developed", "eggs", "buds"],
  answer: 0,
},
{
  question: "Monotremes like the platypus lay _______ eggs.",
  options: ["amniotic eggs", "live young", "buds", "asexual spores"],
  answer: 0,
},
{
  question: "In mammals, sperm is produced in the _______.",
  options: ["testes", "ovaries", "uterus", "vas deferens"],
  answer: 0,
},
{
  question: "In mammals, eggs are produced in the _______.",
  options: ["ovaries", "testes", "uterus", "fallopian tubes"],
  answer: 0,
},
{
  question: "Fertilization in amphibians is usually triggered by _______.",
  options: ["environmental water conditions", "internal mating", "hormones only", "pollination"],
  answer: 0,
},
{
  question: "Most reptiles and birds have _______ fertilization.",
  options: ["internal", "external", "asexual", "parthenogenetic"],
  answer: 0,
},
{
  question: "Fish like guppies can be _______ or _______ in reproduction.",
  options: ["oviparous, ovoviviparous", "viviparous, parthenogenetic", "oviparous, viviparous", "asexual, parthenogenetic"],
  answer: 0,
},
{
  question: "Mammals are mostly _______ (viviparous/oviparous).",
  options: ["viviparous", "oviparous", "ovoviviparous", "asexual"],
  answer: 0,
},
{
  question: "Bird eggs contain _______ to support embryo development.",
  options: ["yolk and amniotic fluid", "blood only", "air only", "placenta only"],
  answer: 0,
},
{
  question: "Fertilization in reptiles is usually _______.",
  options: ["internal", "external", "asexual", "parthenogenetic"],
  answer: 0,
},
{
  question: "Amphibians show _______ development, often with larval stages.",
  options: ["indirect", "direct", "asexual", "vegetative"],
  answer: 0,
},
{
  question: "Birds and reptiles have _______ eggs to prevent desiccation.",
  options: ["amniotic", "non-amniotic", "ovoviviparous", "live young"],
  answer: 0,
},
{
  question: "Viviparity allows the mother to _______.",
  options: ["protect and nourish the embryo internally", "lay eggs externally", "produce gametes", "undergo budding"],
  answer: 0,
},
{
  question: "Fertilization in most fish is _______ because sperm meets eggs in water.",
  options: ["external", "internal", "asexual", "vegetative"],
  answer: 0,
},
{
  question: "Ovoviviparous reptiles hatch eggs _______ in the body.",
  options: ["before laying", "after laying", "externally", "as buds"],
  answer: 0,
},
{
  question: "Amphibians generally require water for _______.",
  options: ["external fertilization", "internal fertilization", "oviparity", "placenta formation"],
  answer: 0,
},
{
  question: "Mammals with live birth include _______.",
  options: ["humans, dogs, cats", "birds, reptiles", "amphibians, fish", "sponges, hydra"],
  answer: 0,
},
{
  question: "Marsupials include animals like _______.",
  options: ["kangaroos and opossums", "humans and dogs", "frogs and toads", "snakes and lizards"],
  answer: 0,
},
{
  question: "Monotremes include animals like _______.",
  options: ["platypus and echidna", "humans and cows", "frogs and salamanders", "birds and reptiles"],
  answer: 0,
},
{
  question: "Spermatogenesis and oogenesis in mammals are examples of _______.",
  options: ["gametogenesis", "fertilization", "gestation", "pollination"],
  answer: 0,
},
{
  question: "Most amphibians exhibit _______ eggs that develop in water.",
  options: ["non-amniotic", "amniotic", "viviparous", "placental"],
  answer: 0,
},
{
  question: "Birds have a _______ period for egg incubation.",
  options: ["fixed", "variable depending on species", "none", "continuous internal gestation"],
  answer: 1,
},
{
  question: "Reptiles and birds share _______ features in reproduction.",
  options: ["amniotic eggs", "live birth only", "external fertilization", "parthenogenesis"],
  answer: 0,
},
{
  question: "Fishes may show parental care such as _______.",
  options: ["nest building and guarding eggs", "placental nourishment", "internal gestation", "amniotic incubation"],
  answer: 0,
},
{
  question: "In mammals, the embryo is nourished directly by _______.",
  options: ["placenta", "egg yolk", "water", "air"],
  answer: 0,
},
{
  question: "In reptiles, temperature can influence _______ of offspring.",
  options: ["sex determination", "egg size", "number of eggs", "gestation length"],
  answer: 0,
},
{
  question: "External fertilization requires _______ to ensure gametes meet.",
  options: ["water medium", "amniotic fluid", "internal gestation", "pouch development"],
  answer: 0,
},
{
  question: "Internal fertilization increases _______ of eggs compared to external.",
  options: ["survival rate", "egg size only", "number of eggs only", "genetic variation only"],
  answer: 0,
},
{
  question: "Bird reproduction is characterized by _______.",
  options: ["internal fertilization and amniotic eggs", "external fertilization and live birth", "asexual reproduction", "budding"],
  answer: 0,
},
{
  question: "Ovoviviparous fish produce eggs that _______ inside the female.",
  options: ["hatch before being released", "are fertilized externally", "never hatch", "become buds"],
  answer: 0,
},
{
  question: "Fertilization in amphibians is often synchronized with _______.",
  options: ["rainy season or water availability", "temperature alone", "gestation period", "moon phases"],
  answer: 0,
},
{
  question: "Reptiles do not require water for fertilization because it is _______.",
  options: ["internal", "external", "asexual", "vegetative"],
  answer: 0,
},
{
  question: "Mammals exhibit _______ parental care compared to most fish and amphibians.",
  options: ["high", "low", "none", "variable depending on egg number"],
  answer: 0,
},
{
  question: "Birds and mammals are both _______ in reproduction.",
  options: ["viviparous (mostly mammals) and oviparous (birds)", "oviparous", "external fertilization only", "asexual only"],
  answer: 0,
},

//nutrition 

{
  question: "Nutrition can be defined as the process by which organisms _______.",
  options: ["obtain and utilize food", "move from place to place", "reproduce", "respire"],
  answer: 0,
},
{
  question: "Autotrophic nutrition is carried out by organisms that _______.",
  options: ["synthesize their own food", "feed on other organisms", "absorb soluble food", "parasitize hosts"],
  answer: 0,
},
{
  question: "Photosynthesis is an example of _______ nutrition.",
  options: ["autotrophic", "heterotrophic", "saprophytic", "parasitic"],
  answer: 0,
},
{
  question: "Heterotrophic organisms obtain their food from _______.",
  options: ["other organisms", "sunlight", "inorganic chemicals", "water only"],
  answer: 0,
},
{
  question: "Saprophytic nutrition involves obtaining food from _______.",
  options: ["dead organic matter", "living hosts", "sunlight", "inorganic salts"],
  answer: 0,
},
{
  question: "Parasitic nutrition involves obtaining food from _______.",
  options: ["living hosts", "dead matter", "sunlight", "soil minerals"],
  answer: 0,
},
{
  question: "Symbiotic nutrition involves a relationship where both organisms _______.",
  options: ["benefit", "harm each other", "ignore each other", "compete for food"],
  answer: 0,
},
{
  question: "Holozoic nutrition is characteristic of _______.",
  options: ["humans, dogs, and cats", "bacteria only", "plants only", "fungi only"],
  answer: 0,
},
{
  question: "In holozoic nutrition, food is first _______.",
  options: ["ingested", "absorbed", "assimilated", "excreted"],
  answer: 0,
},
{
  question: "Mechanical digestion begins in the _______.",
  options: ["mouth", "stomach", "small intestine", "oesophagus"],
  answer: 0,
},
{
  question: "Salivary glands secrete _______ to digest starch.",
  options: ["salivary amylase", "pepsin", "lipase", "trypsin"],
  answer: 0,
},
{
  question: "The stomach secretes _______ for protein digestion.",
  options: ["pepsin", "amylase", "lipase", "maltase"],
  answer: 0,
},
{
  question: "The small intestine is the main site for _______.",
  options: ["absorption of digested food", "mechanical digestion", "starch breakdown only", "chewing"],
  answer: 0,
},
{
  question: "Bile produced by the liver _______ fats.",
  options: ["emulsifies", "digests", "absorbs", "stores"],
  answer: 0,
},
{
  question: "Pancreatic juice contains enzymes such as _______ for digestion.",
  options: ["amylase, lipase, trypsin", "pepsin only", "salivary amylase only", "maltase only"],
  answer: 0,
},
{
  question: "Carbohydrates are broken down into _______ during digestion.",
  options: ["glucose", "amino acids", "fatty acids", "glycerol"],
  answer: 0,
},
{
  question: "Proteins are broken down into _______ during digestion.",
  options: ["amino acids", "glucose", "fatty acids", "vitamins"],
  answer: 0,
},
{
  question: "Lipids are broken down into _______ and glycerol.",
  options: ["fatty acids", "sugars", "amino acids", "starch"],
  answer: 0,
},
{
  question: "Vitamins are required in the diet in _______ amounts.",
  options: ["small", "large", "medium", "excessive"],
  answer: 0,
},
{
  question: "Iron deficiency in humans leads to _______.",
  options: ["anaemia", "scurvy", "rickets", "beriberi"],
  answer: 0,
},
{
  question: "Vitamin C deficiency causes _______.",
  options: ["scurvy", "rickets", "goitre", "anaemia"],
  answer: 0,
},
{
  question: "Vitamin D deficiency leads to _______ in children.",
  options: ["rickets", "scurvy", "beriberi", "kwashiorkor"],
  answer: 0,
},
{
  question: "Beriberi is caused by deficiency of vitamin _______.",
  options: ["B1 (thiamine)", "C", "D", "A"],
  answer: 0,
},
{
  question: "Kwashiorkor results from severe deficiency of _______.",
  options: ["protein", "carbohydrate", "vitamin C", "lipid"],
  answer: 0,
},
{
  question: "Goitre is caused by deficiency of _______.",
  options: ["iodine", "iron", "vitamin A", "vitamin D"],
  answer: 0,
},
{
  question: "Water is important in the body for _______.",
  options: ["transport, chemical reactions, and temperature regulation", "energy storage only", "digestion only", "defense only"],
  answer: 0,
},
{
  question: "Dietary fiber helps to _______.",
  options: ["regulate bowel movement", "store energy", "produce enzymes", "absorb vitamins"],
  answer: 0,
},
{
  question: "A balanced diet contains _______.",
  options: ["carbohydrates, proteins, lipids, vitamins, minerals, water, and fiber", "only carbohydrates", "only proteins", "only lipids"],
  answer: 0,
},
{
  question: "Amoeba obtains its food by _______.",
  options: ["phagocytosis", "absorption", "photosynthesis", "pollination"],
  answer: 0,
},
{
  question: "Paramecium uses _______ to sweep food into its mouth pore.",
  options: ["cilia", "flagella", "pseudopodia", "contractile vacuole"],
  answer: 0,
},
{
  question: "Hydra captures its prey using _______.",
  options: ["tentacles with cnidocytes", "cilia", "flagella", "pseudopodia"],
  answer: 0,
},
{
  question: "Grasshoppers have a _______ digestive system.",
  options: ["complete", "incomplete", "one-chambered", "no digestive system"],
  answer: 0,
},
{
  question: "Ruminants like cows have a _______ stomach to digest cellulose.",
  options: ["four-chambered", "one-chambered", "two-chambered", "three-chambered"],
  answer: 0,
},
{
  question: "Enzymes are biological catalysts that _______.",
  options: ["speed up chemical reactions", "slow digestion", "store food", "absorb nutrients"],
  answer: 0,
},
{
  question: "Amylase acts on _______ to produce maltose.",
  options: ["starch", "protein", "lipids", "cellulose"],
  answer: 0,
},
{
  question: "Pepsin acts on _______ to produce peptides.",
  options: ["protein", "starch", "lipids", "sugars"],
  answer: 0,
},
{
  question: "Lipase acts on _______ to produce fatty acids and glycerol.",
  options: ["fats", "proteins", "starch", "cellulose"],
  answer: 0,
},
{
  question: "Maltase acts on maltose to produce _______.",
  options: ["glucose", "amino acids", "fatty acids", "glycerol"],
  answer: 0,
},
{
  question: "Bile does not digest fats but _______ them.",
  options: ["emulsifies", "absorbs", "stores", "breaks down proteins"],
  answer: 0,
},
{
  question: "Deficiency of calcium in diet can lead to _______.",
  options: ["weak bones and rickets", "scurvy", "anaemia", "beriberi"],
  answer: 0,
},
{
  question: "Excess carbohydrate intake can lead to _______.",
  options: ["obesity", "kwashiorkor", "rickets", "scurvy"],
  answer: 0,
},
{
  question: "Proteins are essential for _______.",
  options: ["growth and repair", "energy storage only", "enzyme inhibition", "water transport"],
  answer: 0,
},
{
  question: "Lipids provide _______ more than carbohydrates or proteins.",
  options: ["energy per gram", "water", "vitamins", "minerals"],
  answer: 0,
},
{
  question: "Malnutrition refers to _______.",
  options: ["deficiency, excess or imbalance of nutrients", "overeating only", "lack of water only", "lack of exercise only"],
  answer: 0,
},
{
  question: "Holozoic nutrition involves _______ steps including ingestion, digestion, absorption, assimilation, and egestion.",
  options: ["five", "three", "two", "four"],
  answer: 0,
},
{
  question: "Autotrophic nutrition in plants occurs mainly in the _______.",
  options: ["leaves", "roots", "stem", "flowers"],
  answer: 0,
},

{
  question: "Chlorophyll in plants is important for _______.",
  options: ["photosynthesis", "respiration", "absorption of minerals", "transpiration"],
  answer: 0,
},
{
  question: "Chemosynthetic bacteria obtain energy from _______.",
  options: ["inorganic chemicals", "sunlight", "organic matter", "air"],
  answer: 0,
},
{
  question: "Heterotrophs that feed on dead matter are called _______.",
  options: ["saprophytes", "parasites", "predators", "producers"],
  answer: 0,
},
{
  question: "Organisms that live on living hosts and cause harm are called _______.",
  options: ["parasites", "saprophytes", "predators", "symbionts"],
  answer: 0,
},
{
  question: "The symbiotic relationship between fungi and algae in lichens is _______.",
  options: ["mutualistic", "parasitic", "commensal", "competitive"],
  answer: 0,
},
{
  question: "Carnivores are heterotrophs that eat mainly _______.",
  options: ["other animals", "plants", "dead matter", "microorganisms"],
  answer: 0,
},
{
  question: "Herbivores are heterotrophs that eat mainly _______.",
  options: ["plants", "animals", "microorganisms", "dead matter"],
  answer: 0,
},
{
  question: "Omnivores feed on both _______.",
  options: ["plants and animals", "plants only", "animals only", "microorganisms only"],
  answer: 0,
},
{
  question: "Enzymes in saliva start the digestion of _______.",
  options: ["starch", "proteins", "fats", "cellulose"],
  answer: 0,
},
{
  question: "The function of the large intestine is mainly to _______.",
  options: ["absorb water and form faeces", "digest proteins", "emulsify fats", "absorb vitamins only"],
  answer: 0,
},
{
  question: "The liver produces _______ which aids fat digestion.",
  options: ["bile", "amylase", "pepsin", "lipase"],
  answer: 0,
},
{
  question: "The pancreas secretes enzymes into the _______ for digestion.",
  options: ["small intestine", "stomach", "mouth", "large intestine"],
  answer: 0,
},
{
  question: "Vitamin A deficiency can lead to _______.",
  options: ["night blindness", "rickets", "anaemia", "scurvy"],
  answer: 0,
},
{
  question: "Vitamin K is important for _______.",
  options: ["blood clotting", "bone formation", "vision", "energy production"],
  answer: 0,
},
{
  question: "Water-soluble vitamins include _______.",
  options: ["B-complex and C", "A and D", "E and K", "B12 only"],
  answer: 0,
},
{
  question: "Fat-soluble vitamins include _______.",
  options: ["A, D, E, K", "B-complex, C", "C only", "B1 only"],
  answer: 0,
},
{
  question: "Cellulose in the diet helps _______.",
  options: ["regulate bowel movement", "digest protein", "store energy", "emulsify fats"],
  answer: 0,
},
{
  question: "Excess protein in the diet may be converted to _______.",
  options: ["fat", "carbohydrate", "amino acids", "starch"],
  answer: 0,
},
{
  question: "Malnutrition in children may result in _______.",
  options: ["stunted growth", "increased height", "improved immunity", "excess energy only"],
  answer: 0,
},
{
  question: "The energy content of foods is measured in _______.",
  options: ["kilojoules or kilocalories", "grams", "litres", "meters"],
  answer: 0,
},
{
  question: "Ruminants chew cud to _______.",
  options: ["aid cellulose digestion", "absorb proteins", "store fat", "produce enzymes"],
  answer: 0,
},
{
  question: "Amoeba uses _______ to engulf food particles.",
  options: ["pseudopodia", "cilia", "flagella", "tentacles"],
  answer: 0,
},
{
  question: "Paramecium traps food using _______.",
  options: ["cilia", "pseudopodia", "flagella", "tentacles"],
  answer: 0,
},
{
  question: "Hydra paralyzes its prey with _______.",
  options: ["cnidocytes", "cilia", "flagella", "pseudopodia"],
  answer: 0,
},
{
  question: "The human stomach produces acid and enzyme called _______.",
  options: ["hydrochloric acid and pepsin", "saliva and amylase", "bile and lipase", "maltase only"],
  answer: 0,
},
{
  question: "Bile salts help in _______ of fats.",
  options: ["emulsification", "absorption", "digestion of proteins", "breaking down starch"],
  answer: 0,
},
{
  question: "Excess intake of carbohydrates and fats can lead to _______.",
  options: ["obesity", "kwashiorkor", "rickets", "scurvy"],
  answer: 0,
},
{
  question: "Anaemia is caused by deficiency of _______.",
  options: ["iron", "vitamin C", "calcium", "vitamin D"],
  answer: 0,
},
{
  question: "A balanced diet prevents _______.",
  options: ["deficiency diseases", "external fertilization", "budding", "photosynthesis"],
  answer: 0,
},
{
  question: "Holozoic nutrition includes ingestion, digestion, absorption, assimilation, and _______.",
  options: ["egestion", "photosynthesis", "respiration", "budding"],
  answer: 0,
},
{
  question: "Proteins are necessary for _______ in the body.",
  options: ["growth and repair", "energy storage only", "digestion only", "water balance"],
  answer: 0,
},
{
  question: "Fats provide more energy per gram than carbohydrates because they contain more _______.",
  options: ["hydrogen atoms", "oxygen atoms", "nitrogen atoms", "sulfur atoms"],
  answer: 0,
},
{
  question: "Iron in the diet is important for the formation of _______.",
  options: ["haemoglobin", "enzymes", "vitamin D", "lipids"],
  answer: 0,
},
{
  question: "Iodine is necessary for the synthesis of _______.",
  options: ["thyroid hormones", "vitamin A", "haemoglobin", "enzymes"],
  answer: 0,
},
{
  question: "Vitamin D helps in the absorption of _______ from the intestine.",
  options: ["calcium", "iron", "protein", "vitamin C"],
  answer: 0,
},
{
  question: "Vitamins are required in the diet in _______ amounts.",
  options: ["trace or small", "large amounts", "excess only", "medium amounts"],
  answer: 0,
},
{
  question: "Excess salt in the diet may lead to _______.",
  options: ["high blood pressure", "rickets", "scurvy", "beriberi"],
  answer: 0,
},
{
  question: "Dietary fiber is important to prevent _______.",
  options: ["constipation", "vitamin deficiency", "protein deficiency", "scurvy"],
  answer: 0,
},
{
  question: "Vitamin C helps in the formation of _______.",
  options: ["collagen", "enzymes only", "fat", "starch"],
  answer: 0,
},
{
  question: "Kwashiorkor is mainly due to deficiency of _______.",
  options: ["protein", "carbohydrate", "fat", "vitamin C"],
  answer: 0,
},
{
  question: "Goitre can be prevented by adding _______ to the diet.",
  options: ["iodine", "iron", "calcium", "vitamin A"],
  answer: 0,
},
{
  question: "Rickets can be prevented by providing _______ in the diet.",
  options: ["vitamin D and calcium", "iron only", "vitamin C only", "protein only"],
  answer: 0,
},
{
  question: "Scurvy is prevented by consuming foods rich in _______.",
  options: ["vitamin C", "iron", "calcium", "vitamin D"],
  answer: 0,
},
{
  question: "Balanced nutrition helps to maintain _______ and prevent diseases.",
  options: ["health", "fertilization", "pollination", "photosynthesis"],
  answer: 0,
},

//transport system

{
  question: "The main function of the circulatory system is to _______.",
  options: ["transport substances around the body", "digest food", "produce hormones", "store energy"],
  answer: 0,
},
{
  question: "Blood is a _______ tissue.",
  options: ["connective", "epithelial", "muscular", "nervous"],
  answer: 0,
},
{
  question: "The heart is made up of _______ tissue.",
  options: ["cardiac muscle", "skeletal muscle", "smooth muscle", "connective"],
  answer: 0,
},
{
  question: "Arteries carry blood _______ the heart.",
  options: ["away from", "towards", "only to lungs", "only to liver"],
  answer: 0,
},
{
  question: "Veins carry blood _______ the heart.",
  options: ["towards", "away from", "only to lungs", "only to liver"],
  answer: 0,
},
{
  question: "Capillaries are important because they _______.",
  options: ["allow exchange of substances with tissues", "store blood", "pump blood", "produce white blood cells"],
  answer: 0,
},
{
  question: "The human heart has _______ chambers.",
  options: ["four", "two", "three", "five"],
  answer: 0,
},
{
  question: "The left side of the heart pumps blood to the _______.",
  options: ["whole body", "lungs", "heart only", "kidneys"],
  answer: 0,
},
{
  question: "The right side of the heart pumps blood to the _______.",
  options: ["lungs", "whole body", "heart only", "brain only"],
  answer: 0,
},
{
  question: "Pulmonary circulation carries blood between the heart and _______.",
  options: ["lungs", "liver", "kidneys", "brain"],
  answer: 0,
},
{
  question: "Systemic circulation carries blood between the heart and _______.",
  options: ["the rest of the body", "lungs only", "heart only", "kidneys only"],
  answer: 0,
},
{
  question: "Blood is composed of plasma, red blood cells, white blood cells, and _______.",
  options: ["platelets", "enzymes", "hormones", "oxygen only"],
  answer: 0,
},
{
  question: "Red blood cells are responsible for transporting _______.",
  options: ["oxygen", "carbon dioxide only", "hormones only", "plasma"],
  answer: 0,
},
{
  question: "White blood cells function mainly in _______.",
  options: ["defense against disease", "transport of oxygen", "clotting", "transport of nutrients"],
  answer: 0,
},
{
  question: "Platelets are important for _______.",
  options: ["blood clotting", "oxygen transport", "hormone production", "immune response"],
  answer: 0,
},
{
  question: "Plasma mainly transports _______ and nutrients.",
  options: ["hormones, glucose, and wastes", "red blood cells only", "enzymes only", "oxygen only"],
  answer: 0,
},
{
  question: "Lymph is transported through _______.",
  options: ["lymphatic vessels", "veins", "arteries", "capillaries"],
  answer: 0,
},
{
  question: "The lymphatic system helps to _______.",
  options: ["return excess tissue fluid to the blood", "digest food", "absorb water", "produce oxygen"],
  answer: 0,
},
{
  question: "An open circulatory system is found in _______.",
  options: ["insects", "humans", "fish", "amphibians"],
  answer: 0,
},
{
  question: "A closed circulatory system is found in _______.",
  options: ["humans and other vertebrates", "insects", "sponges", "cnidarians"],
  answer: 0,
},
{
  question: "Xylem in plants transports _______.",
  options: ["water and minerals from roots to leaves", "food from leaves to roots", "hormones only", "oxygen only"],
  answer: 0,
},
{
  question: "Phloem in plants transports _______.",
  options: ["food from leaves to other parts", "water from roots to leaves", "minerals only", "oxygen only"],
  answer: 0,
},
{
  question: "Transpiration in plants mainly occurs through the _______.",
  options: ["stomata", "roots", "phloem", "xylem"],
  answer: 0,
},
{
  question: "Root pressure in plants is caused by _______.",
  options: ["osmotic pressure in root cells", "wind", "photosynthesis", "stomata opening"],
  answer: 0,
},
{
  question: "The movement of water in xylem is mainly due to _______.",
  options: ["transpiration pull, cohesion, and adhesion", "phloem transport", "osmosis only", "diffusion only"],
  answer: 0,
},
{
  question: "Factors increasing transpiration include _______.",
  options: ["high temperature and wind", "low light", "high humidity", "low temperature"],
  answer: 0,
},
{
  question: "Cohesion in water molecules helps to _______.",
  options: ["pull water up the xylem", "absorb minerals", "digest food", "transport sugar only"],
  answer: 0,
},
{
  question: "Adhesion in water molecules helps water to _______.",
  options: ["stick to xylem walls", "stick to phloem only", "absorb sunlight", "digest food"],
  answer: 0,
},
{
  question: "Phloem transport is called _______.",
  options: ["translocation", "transpiration", "photosynthesis", "respiration"],
  answer: 0,
},
{
  question: "Water is absorbed by plant roots mainly through _______.",
  options: ["osmosis", "diffusion", "transpiration", "active transport only"],
  answer: 0,
},
{
  question: "Minerals are absorbed by plants mainly through _______.",
  options: ["active transport", "osmosis", "diffusion", "transpiration pull"],
  answer: 0,
},
{
  question: "The heart of a fish has _______ chambers.",
  options: ["two", "four", "three", "one"],
  answer: 0,
},
{
  question: "The human heart valves prevent _______.",
  options: ["backflow of blood", "blood clotting", "oxygen transport", "phloem transport"],
  answer: 0,
},
{
  question: "The vena cava carries _______ blood to the heart.",
  options: ["deoxygenated", "oxygenated", "nutrient-rich", "sugary"],
  answer: 0,
},
{
  question: "The aorta carries _______ blood from the heart to the body.",
  options: ["oxygenated", "deoxygenated", "lymph", "mineral-rich water"],
  answer: 0,
},
{
  question: "Capillaries are one-cell thick to allow _______.",
  options: ["exchange of substances with tissues", "blood storage", "immune response", "transport of lymph"],
  answer: 0,
},
{
  question: "Transpiration pull is created due to _______.",
  options: ["evaporation of water from leaves", "phloem transport", "xylem blockage", "root pressure only"],
  answer: 0,
},
{
  question: "Double circulation in humans ensures _______.",
  options: ["oxygen-rich and oxygen-poor blood are separated", "all blood mixes", "low blood pressure", "high transpiration"],
  answer: 0,
},
{
  question: "Lymph contains mainly _______.",
  options: ["white blood cells and tissue fluid", "red blood cells", "oxygen only", "nutrients only"],
  answer: 0,
},
{
  question: "Translocation in phloem occurs from _______ to sink.",
  options: ["source", "leaf only", "root only", "stem only"],
  answer: 0,
},
{
  question: "Transpiration helps in _______ mineral transport in plants.",
  options: ["upward", "downward", "horizontal", "no effect"],
  answer: 0,
},
{
  question: "Xylem vessels are made of _______ cells.",
  options: ["dead, hollow cells", "living cells", "parenchyma only", "collenchyma only"],
  answer: 0,
},
{
  question: "Phloem vessels are made of _______ cells.",
  options: ["living sieve tube elements and companion cells", "dead hollow cells", "xylem only", "collenchyma only"],
  answer: 0,
},
{
  question: "Transport of water in xylem is unidirectional because of _______.",
  options: ["transpiration pull from leaves", "phloem pressure", "osmosis in roots only", "gravity"],
  answer: 0,
},
{
  question: "Transport of food in phloem can be _______.",
  options: ["bidirectional", "unidirectional", "horizontal only", "vertical only"],
  answer: 0,
},
{
  question: "The lymphatic system complements the circulatory system by _______.",
  options: ["returning excess tissue fluid to blood", "digesting proteins", "transporting oxygen", "producing hormones"],
  answer: 0,
},

{
  question: "In fish, blood flows in a single circuit because the heart has _______ chambers.",
  options: ["two", "four", "three", "one"],
  answer: 0,
},
{
  question: "Amphibians have a three-chambered heart to allow _______.",
  options: ["some separation of oxygenated and deoxygenated blood", "complete separation of blood", "single circulation", "no circulation"],
  answer: 0,
},
{
  question: "Birds and mammals have a four-chambered heart for _______.",
  options: ["complete separation of oxygenated and deoxygenated blood", "single circulation", "slow circulation", "no blood mixing"],
  answer: 0,
},
{
  question: "The pulmonary artery carries _______ blood from the heart to the lungs.",
  options: ["deoxygenated", "oxygenated", "nutrient-rich", "lymph"],
  answer: 0,
},
{
  question: "The pulmonary vein carries _______ blood from the lungs to the heart.",
  options: ["oxygenated", "deoxygenated", "nutrient-rich", "lymph"],
  answer: 0,
},
{
  question: "Blood pressure is highest in the _______.",
  options: ["arteries", "veins", "capillaries", "lymph vessels"],
  answer: 0,
},
{
  question: "Blood pressure is lowest in the _______.",
  options: ["veins", "arteries", "capillaries", "heart chambers"],
  answer: 0,
},
{
  question: "The coronary arteries supply blood to the _______.",
  options: ["heart muscle", "brain", "lungs", "kidneys"],
  answer: 0,
},
{
  question: "The sinoatrial node in the heart acts as a _______.",
  options: ["pacemaker", "valve", "blood vessel", "capillary"],
  answer: 0,
},
{
  question: "The lymphatic system absorbs _______ from the intestines.",
  options: ["fats", "proteins", "carbohydrates", "vitamins only"],
  answer: 0,
},
{
  question: "Oxygen is transported in the blood mainly by _______.",
  options: ["haemoglobin in red blood cells", "plasma", "white blood cells", "platelets"],
  answer: 0,
},
{
  question: "Carbon dioxide is transported in the blood mainly as _______.",
  options: ["bicarbonate ions", "oxygen", "plasma proteins", "platelets"],
  answer: 0,
},
{
  question: "In plants, the Casparian strip ensures that water and minerals pass through _______.",
  options: ["endodermal cells", "xylem vessels", "phloem sieve tubes", "stomata"],
  answer: 0,
},
{
  question: "Transpiration helps to cool plants by _______.",
  options: ["evaporation of water from leaves", "photosynthesis", "root absorption", "phloem transport"],
  answer: 0,
},
{
  question: "Root hairs increase _______ for water and mineral absorption.",
  options: ["surface area", "transpiration", "phloem cells", "stomata opening"],
  answer: 0,
},
{
  question: "Xylem vessels are strengthened by _______.",
  options: ["lignin", "cellulose only", "proteins", "suberin"],
  answer: 0,
},
{
  question: "Phloem sieve plates allow _______ between sieve tube elements.",
  options: ["movement of food substances", "water only", "minerals only", "hormones only"],
  answer: 0,
},
{
  question: "Translocation in phloem is driven by _______.",
  options: ["pressure differences between source and sink", "transpiration only", "osmosis only", "gravity only"],
  answer: 0,
},
{
  question: "Cohesion-tension theory explains _______ in plants.",
  options: ["upward movement of water in xylem", "translocation in phloem", "photosynthesis", "root absorption"],
  answer: 0,
},
{
  question: "Transpiration is affected by _______.",
  options: ["temperature, wind, humidity, and light", "soil type only", "leaf color only", "root length only"],
  answer: 0,
},
{
  question: "Capillary action helps water to _______ in narrow xylem vessels.",
  options: ["rise", "fall", "remain stationary", "flow sideways"],
  answer: 0,
},
{
  question: "In double circulation, blood passes through the heart _______ times in one complete cycle.",
  options: ["twice", "once", "three times", "four times"],
  answer: 0,
},
{
  question: "The left ventricle has thicker walls than the right ventricle to _______.",
  options: ["pump blood throughout the body", "pump blood to the lungs", "store blood", "receive oxygen"],
  answer: 0,
},
{
  question: "The main function of the phloem companion cells is to _______.",
  options: ["support sieve tube elements", "transport water", "store starch", "absorb minerals"],
  answer: 0,
},
{
  question: "The movement of water from soil into root hairs occurs mainly by _______.",
  options: ["osmosis", "active transport", "diffusion of gases", "transpiration pull"],
  answer: 0,
},
{
  question: "The trachea in mammals carries air to the _______.",
  options: ["lungs", "stomach", "heart", "intestines"],
  answer: 0,
},
{
  question: "Oxygen enters the blood in the lungs through _______.",
  options: ["diffusion across alveolar walls", "active pumping", "phloem transport", "transpiration"],
  answer: 0,
},
{
  question: "In plants, guttation is caused by _______.",
  options: ["root pressure", "transpiration", "photosynthesis", "phloem transport"],
  answer: 0,
},
{
  question: "The main driving force for transpiration pull is _______.",
  options: ["evaporation of water from leaf surfaces", "root pressure only", "phloem activity", "gravity only"],
  answer: 0,
},
{
  question: "Blood from the digestive tract is first carried to the liver via the _______.",
  options: ["hepatic portal vein", "vena cava", "aorta", "pulmonary vein"],
  answer: 0,
},
{
  question: "The hepatic portal vein allows the liver to _______.",
  options: ["detoxify and process absorbed nutrients", "produce red blood cells", "pump blood", "absorb water"],
  answer: 0,
},
{
  question: "The lymph nodes function to _______.",
  options: ["filter lymph and trap pathogens", "absorb water", "transport oxygen", "store fats"],
  answer: 0,
},
{
  question: "Oxygen is mainly transported by red blood cells because of the presence of _______.",
  options: ["haemoglobin", "plasma", "white blood cells", "platelets"],
  answer: 0,
},
{
  question: "Blood in veins moves partly due to _______.",
  options: ["skeletal muscle contraction", "heart alone", "osmosis", "transpiration"],
  answer: 0,
},
{
  question: "The heart valves prevent _______ of blood.",
  options: ["backflow", "oxygen transport", "lymph movement", "water transport"],
  answer: 0,
},
{
  question: "Capillary beds are important because they _______.",
  options: ["allow exchange of gases, nutrients, and wastes", "store blood", "produce hormones", "absorb minerals"],
  answer: 0,
},
{
  question: "Translocation in phloem is driven by a difference in _______ between source and sink.",
  options: ["pressure", "temperature", "light intensity", "humidity"],
  answer: 0,
},
{
  question: "Water potential gradient in plants drives the movement of water from _______ to leaves.",
  options: ["roots", "stems", "soil surface", "phloem"],
  answer: 0,
},
{
  question: "The main function of xylem parenchyma is to _______.",
  options: ["store food and assist in lateral transport", "transport water", "produce enzymes", "digest protein"],
  answer: 0,
},
{
  question: "The transpiration stream refers to the continuous movement of water from _______.",
  options: ["roots to leaves and out through stomata", "leaves to roots", "phloem to roots", "stem to roots only"],
  answer: 0,
},
{
  question: "In plants, adhesion and cohesion together help in _______.",
  options: ["water movement in xylem", "translocation of food", "absorption of nutrients", "phloem loading"],
  answer: 0,
},
{
  question: "Capillary action occurs due to _______.",
  options: ["adhesion and cohesion of water molecules", "osmosis only", "active transport", "root pressure only"],
  answer: 0,
},
{
  question: "Lymph eventually drains into the _______ system.",
  options: ["venous blood", "arterial blood", "phloem", "xylem"],
  answer: 0,
},
{
  question: "Blood returning from the body enters the heart through the _______.",
  options: ["vena cava", "pulmonary vein", "aorta", "coronary artery"],
  answer: 0,
},
{
  question: "Transpiration rate decreases with _______.",
  options: ["high humidity", "high temperature", "strong wind", "bright sunlight"],
  answer: 0,
},
{
  question: "The sieve tubes in phloem are supported by _______.",
  options: ["companion cells", "xylem vessels", "parenchyma only", "collenchyma only"],
  answer: 0,
},

//respiration 

{
  question: "Aerobic respiration requires _______.",
  options: ["oxygen", "carbon dioxide", "water", "light"],
  answer: 0,
},
{
  question: "Anaerobic respiration occurs in the _______ of cells.",
  options: ["cytoplasm", "mitochondria", "nucleus", "ribosome"],
  answer: 0,
},
{
  question: "The main site of aerobic respiration in eukaryotic cells is the _______.",
  options: ["mitochondria", "nucleus", "ribosome", "chloroplast"],
  answer: 0,
},
{
  question: "During aerobic respiration, glucose is broken down into _______.",
  options: ["carbon dioxide and water", "lactic acid only", "oxygen and water", "starch"],
  answer: 0,
},
{
  question: "Anaerobic respiration in muscles produces _______.",
  options: ["lactic acid", "carbon dioxide", "oxygen", "water"],
  answer: 0,
},
{
  question: "Anaerobic respiration in yeast produces _______.",
  options: ["ethanol and carbon dioxide", "lactic acid", "oxygen and water", "glucose"],
  answer: 0,
},
{
  question: "The equation for aerobic respiration is _______.",
  options: ["C6H12O6 + 6O2 → 6CO2 + 6H2O + energy", "C6H12O6 → 2C2H5OH + 2CO2", "C6H12O6 → 2C3H6O3", "CO2 + H2O → C6H12O6 + O2"],
  answer: 0,
},
{
  question: "The energy released during respiration is stored mainly in _______.",
  options: ["ATP", "glucose", "carbon dioxide", "oxygen"],
  answer: 0,
},
{
  question: "Gaseous exchange in humans occurs in the _______.",
  options: ["alveoli of lungs", "trachea", "bronchi", "bronchioles only"],
  answer: 0,
},
{
  question: "The diaphragm and intercostal muscles help in _______.",
  options: ["breathing", "digestion", "circulation", "excretion"],
  answer: 0,
},
{
  question: "During inhalation, the diaphragm _______.",
  options: ["contracts and moves downward", "relaxes", "contracts and moves upward", "does not move"],
  answer: 0,
},
{
  question: "During exhalation, the diaphragm _______.",
  options: ["relaxes and moves upward", "contracts", "does not move", "contracts and moves downward"],
  answer: 0,
},
{
  question: "Oxygen is transported in the blood mainly by _______.",
  options: ["haemoglobin", "plasma", "white blood cells", "platelets"],
  answer: 0,
},
{
  question: "Carbon dioxide is transported in the blood mainly as _______.",
  options: ["bicarbonate ions", "oxygen", "plasma", "platelets"],
  answer: 0,
},
{
  question: "The volume of air taken in during a normal breath is called _______.",
  options: ["tidal volume", "vital capacity", "residual volume", "total lung capacity"],
  answer: 0,
},
{
  question: "The maximum volume of air a person can exhale after a maximum inhalation is called _______.",
  options: ["vital capacity", "tidal volume", "residual volume", "total lung capacity"],
  answer: 0,
},
{
  question: "In fish, gaseous exchange occurs mainly through _______.",
  options: ["gills", "lungs", "skin", "tracheae"],
  answer: 0,
},
{
  question: "Insects breathe through a system of tubes called _______.",
  options: ["tracheae", "lungs", "gills", "alveoli"],
  answer: 0,
},
{
  question: "During respiration, energy released is used for _______.",
  options: ["growth, movement, and maintenance of body functions", "photosynthesis", "transpiration only", "digestion only"],
  answer: 0,
},
{
  question: "Anaerobic respiration releases _______ energy than aerobic respiration.",
  options: ["less", "more", "the same", "none"],
  answer: 0,
},
{
  question: "Cellular respiration occurs in both plants and animals because both need _______.",
  options: ["energy for metabolic activities", "oxygen for photosynthesis", "light energy", "carbon dioxide"],
  answer: 0,
},
{
  question: "The release of carbon dioxide from the lungs is called _______.",
  options: ["exhalation", "inhalation", "diffusion", "osmosis"],
  answer: 0,
},
{
  question: "The chemical energy from glucose is first transferred to _______ molecules.",
  options: ["ATP", "CO2", "H2O", "NADPH"],
  answer: 0,
},
{
  question: "Aerobic respiration produces more ATP per glucose molecule than anaerobic respiration because it _______.",
  options: ["fully oxidizes glucose", "does not require oxygen", "produces lactic acid", "produces ethanol"],
  answer: 0,
},
{
  question: "During exercise, muscles may switch to _______ respiration if oxygen supply is insufficient.",
  options: ["anaerobic", "aerobic", "photosynthetic", "fermentation only in yeast"],
  answer: 0,
},
{
  question: "In plants, oxygen for respiration is mainly obtained from _______.",
  options: ["air spaces in leaves and roots", "chloroplasts", "phloem", "xylem only"],
  answer: 0,
},
{
  question: "Gaseous exchange in plants occurs mainly through _______.",
  options: ["stomata, lenticels, and root hairs", "xylem only", "phloem only", "chloroplasts only"],
  answer: 0,
},
{
  question: "CO2 produced during respiration is used in _______.",
  options: ["photosynthesis in plants", "digestion", "transport", "nitrogen fixation"],
  answer: 0,
},
{
  question: "The enzyme that catalyzes the breakdown of glucose in glycolysis is _______.",
  options: ["hexokinase", "amylase", "lipase", "pepsin"],
  answer: 0,
},
{
  question: "In anaerobic respiration in yeast, glucose is converted to _______.",
  options: ["ethanol and carbon dioxide", "lactic acid", "ATP only", "oxygen"],
  answer: 0,
},
{
  question: "Respiration in unicellular organisms like Amoeba occurs mainly through _______.",
  options: ["diffusion", "tracheae", "alveoli", "gills"],
  answer: 0,
},
{
  question: "Breathing rate increases during exercise to _______.",
  options: ["meet higher oxygen demand", "reduce CO2 production only", "increase lactic acid only", "slow metabolism"],
  answer: 0,
},
{
  question: "Residual volume of air in the lungs prevents _______.",
  options: ["lung collapse", "oxygen transport", "carbon dioxide transport", "diffusion"],
  answer: 0,
},
{
  question: "In humans, the trachea divides into two _______ leading to the lungs.",
  options: ["bronchi", "bronchioles", "alveoli", "capillaries"],
  answer: 0,
},
{
  question: "Alveoli are adapted for gaseous exchange because they are _______.",
  options: ["thin-walled and highly vascularized", "thick-walled", "lined with cuticle", "impermeable"],
  answer: 0,
},
{
  question: "During respiration, the concentration gradient drives _______.",
  options: ["diffusion of oxygen into blood and carbon dioxide out", "active transport of CO2", "osmosis of oxygen", "phloem transport"],
  answer: 0,
},
{
  question: "In plants, oxygen produced by photosynthesis can be used for _______.",
  options: ["cellular respiration", "transpiration", "transport only", "root pressure"],
  answer: 0,
},
{
  question: "The gas exchange surface in fish gills is supported by _______.",
  options: ["lamellae", "alveoli", "tracheae", "stomata"],
  answer: 0,
},
{
  question: "Counter-current flow in fish gills helps to _______.",
  options: ["maximize oxygen absorption", "minimize oxygen absorption", "transport CO2 only", "pump blood"],
  answer: 0,
},
{
  question: "Respiratory pigments like haemoglobin increase _______.",
  options: ["oxygen-carrying capacity of blood", "CO2 production", "ATP production directly", "water transport"],
  answer: 0,
},
{
  question: "Myoglobin stores oxygen in _______.",
  options: ["muscles", "lungs", "red blood cells", "plant leaves"],
  answer: 0,
},
{
  question: "Anaerobic respiration in humans can lead to muscle fatigue due to accumulation of _______.",
  options: ["lactic acid", "ethanol", "oxygen", "ATP"],
  answer: 0,
},
{
  question: "Respiration provides energy needed for _______ in plants and animals.",
  options: ["growth, movement, and metabolic processes", "photosynthesis only", "transpiration only", "absorption only"],
  answer: 0,
},
{
  question: "Breathing involves both inhalation and exhalation to maintain _______.",
  options: ["gas concentration gradients in the alveoli", "phloem transport", "root pressure", "transpiration only"],
  answer: 0,
},
{
  question: "Gaseous exchange in insects occurs via _______ and not blood.",
  options: ["tracheae", "gills", "lungs", "alveoli"],
  answer: 0,
},
{
  question: "Respiration rate in plants increases in the dark due to _______.",
  options: ["lack of photosynthesis", "stomatal opening", "phloem transport", "xylem activity"],
  answer: 0,
},
{
  question: "Oxygen diffuses into cells because of a _______ concentration gradient.",
  options: ["high outside, low inside", "low outside, high inside", "equal concentration", "active pumping"],
  answer: 0,
},
{
  question: "CO2 produced by respiration in plants is released mainly through _______.",
  options: ["stomata", "xylem", "phloem", "cuticle"],
  answer: 0,
},
{
  question: "ATP produced during respiration is immediately used for _______.",
  options: ["cellular activities", "storage only", "transport in phloem", "root pressure"],
  answer: 0,
},

{
  question: "During vigorous exercise, the body produces more CO2 due to _______.",
  options: ["increased aerobic respiration", "anaerobic respiration only", "photosynthesis", "decreased respiration"],
  answer: 0,
},
{
  question: "In humans, the gas exchange surface is moist to _______.",
  options: ["allow gases to dissolve and diffuse", "prevent water loss", "absorb nutrients", "store oxygen"],
  answer: 0,
},
{
  question: "During heavy exercise, muscles switch to anaerobic respiration to _______.",
  options: ["meet high energy demand quickly", "produce more oxygen", "store glucose", "absorb water"],
  answer: 0,
},
{
  question: "Lactic acid produced in muscles is transported to the liver for _______.",
  options: ["conversion to glucose", "breakdown to CO2 only", "storage in muscles", "excretion via urine"],
  answer: 0,
},
{
  question: "Gaseous exchange in plants occurs mainly via stomata and _______.",
  options: ["lenticels and root hairs", "xylem", "phloem", "cuticle only"],
  answer: 0,
},
{
  question: "Respiration is essential for maintaining _______ in cells.",
  options: ["ATP supply", "photosynthesis", "transpiration", "root pressure"],
  answer: 0,
},
{
  question: "The enzyme involved in glycolysis is _______.",
  options: ["hexokinase", "lipase", "amylase", "protease"],
  answer: 0,
},
{
  question: "During aerobic respiration, the majority of ATP is produced in the _______.",
  options: ["mitochondria", "cytoplasm", "nucleus", "chloroplasts"],
  answer: 0,
},
{
  question: "CO2 produced during aerobic respiration diffuses out of cells because of _______.",
  options: ["a concentration gradient", "active transport", "osmosis", "phloem transport"],
  answer: 0,
},
{
  question: "Respiratory rate in humans is controlled by the _______.",
  options: ["medulla oblongata", "cerebrum", "heart", "lungs"],
  answer: 0,
},
{
  question: "The energy released in respiration is measured in _______.",
  options: ["joules or calories", "liters", "grams", "watts"],
  answer: 0,
},
{
  question: "During anaerobic respiration, only a small amount of ATP is released because _______.",
  options: ["glucose is partially broken down", "oxygen is abundant", "glucose is fully oxidized", "more CO2 is produced"],
  answer: 0,
},
{
  question: "Oxygen is essential for aerobic respiration because it _______.",
  options: ["accepts electrons at the end of the electron transport chain", "produces glucose", "converts lactic acid", "stores energy directly"],
  answer: 0,
},
{
  question: "The majority of carbon dioxide in the blood is transported as _______.",
  options: ["bicarbonate ions", "dissolved CO2", "carbaminohaemoglobin", "oxygen bound to haemoglobin"],
  answer: 0,
},
{
  question: "In insects, oxygen reaches body cells directly through _______.",
  options: ["tracheal system", "blood circulation", "lungs", "gills"],
  answer: 0,
},
{
  question: "Counter-current flow in fish gills ensures _______.",
  options: ["maximum oxygen absorption from water", "minimal oxygen absorption", "CO2 transport only", "blood flow to heart"],
  answer: 0,
},
{
  question: "Respiration rate in plants increases in the dark because _______.",
  options: ["photosynthesis stops but energy is still needed", "stomata close", "phloem transport stops", "xylem stops working"],
  answer: 0,
},
{
  question: "In plants, mitochondria are found in _______.",
  options: ["all metabolically active cells", "only leaf cells", "only root cells", "xylem vessels"],
  answer: 0,
},
{
  question: "The main product of anaerobic respiration in human muscles is _______.",
  options: ["lactic acid", "ethanol", "ATP only", "carbon dioxide only"],
  answer: 0,
},
{
  question: "Ethanol produced during yeast fermentation is a result of _______.",
  options: ["anaerobic respiration", "aerobic respiration", "photosynthesis", "transpiration"],
  answer: 0,
},
{
  question: "Aerobic respiration produces a total of approximately _______ ATP molecules per glucose.",
  options: ["36-38", "2", "4", "50"],
  answer: 0,
},
{
  question: "Anaerobic respiration in humans produces only _______ ATP molecules per glucose.",
  options: ["2", "36", "38", "50"],
  answer: 0,
},
{
  question: "The process of breaking down glucose without oxygen is called _______.",
  options: ["anaerobic respiration", "aerobic respiration", "photosynthesis", "fermentation only in plants"],
  answer: 0,
},
{
  question: "The main reason alveoli have thin walls is to _______.",
  options: ["facilitate rapid gas exchange", "support the lungs", "store oxygen", "produce CO2"],
  answer: 0,
},
{
  question: "In humans, the tidal volume averages about _______ liters per breath.",
  options: ["0.5", "1", "2", "3"],
  answer: 0,
},
{
  question: "Vital capacity is important because it indicates _______.",
  options: ["the maximum volume of air a person can exhale after full inhalation", "tidal volume only", "residual volume only", "oxygen content only"],
  answer: 0,
},
{
  question: "Residual volume remains in lungs to _______.",
  options: ["prevent lung collapse", "increase oxygen uptake", "store CO2", "enhance ATP production"],
  answer: 0,
},
{
  question: "During inspiration, the pressure inside the lungs _______.",
  options: ["decreases below atmospheric pressure", "increases above atmospheric pressure", "remains equal", "increases slightly only"],
  answer: 0,
},
{
  question: "During expiration, the pressure inside the lungs _______.",
  options: ["increases above atmospheric pressure", "decreases below atmospheric pressure", "remains equal", "drops to zero"],
  answer: 0,
},
{
  question: "Respiratory pigments in blood enhance _______.",
  options: ["oxygen-carrying capacity", "CO2 production", "ATP production directly", "root absorption"],
  answer: 0,
},
{
  question: "Myoglobin stores oxygen in muscles to _______.",
  options: ["supply oxygen during intense activity", "produce CO2", "store ATP", "digest glucose"],
  answer: 0,
},
{
  question: "In anaerobic respiration in muscles, lactic acid accumulation leads to _______.",
  options: ["muscle fatigue", "increased ATP", "oxygen production", "carbon dioxide loss"],
  answer: 0,
},
{
  question: "Aerobic respiration efficiency is higher than anaerobic because _______.",
  options: ["glucose is completely oxidized", "less oxygen is needed", "CO2 is not produced", "ATP is stored in glucose"],
  answer: 0,
},
{
  question: "The release of energy during respiration is used for _______.",
  options: ["metabolic activities, growth, and movement", "photosynthesis", "phloem transport", "root pressure"],
  answer: 0,
},
{
  question: "The respiratory surface in fish is adapted to maximize _______.",
  options: ["oxygen absorption from water", "CO2 storage", "ATP synthesis", "digestion"],
  answer: 0,
},
{
  question: "Plants respire continuously because _______.",
  options: ["cells require energy at all times", "photosynthesis only occurs at night", "transpiration occurs only in daytime", "xylem transports water constantly"],
  answer: 0,
},
{
  question: "Gaseous exchange in insects occurs through small openings called _______.",
  options: ["spiracles", "stomata", "alveoli", "lenticels"],
  answer: 0,
},
{
  question: "Counter-current exchange in fish ensures _______.",
  options: ["maximum diffusion of oxygen into blood", "minimized CO2 absorption", "blood flow to heart only", "movement of water into xylem"],
  answer: 0,
},
{
  question: "Respiration rate in plants increases with _______.",
  options: ["temperature and oxygen availability", "humidity only", "light intensity only", "soil type only"],
  answer: 0,
},
{
  question: "Carbon dioxide produced during respiration in humans is transported mainly in _______.",
  options: ["plasma as bicarbonate ions", "red blood cells only", "white blood cells", "platelets"],
  answer: 0,
},
{
  question: "The exchange of gases in the lungs occurs mainly by _______.",
  options: ["diffusion", "active transport", "osmosis", "phloem transport"],
  answer: 0,
},
{
  question: "ATP produced in mitochondria is immediately used for _______.",
  options: ["cellular activities", "oxygen storage", "CO2 transport", "starch synthesis"],
  answer: 0,
},
{
  question: "Anaerobic respiration in yeast is also known as _______.",
  options: ["fermentation", "glycolysis", "oxidative phosphorylation", "electron transport chain"],
  answer: 0,
},
{
  question: "Energy released from respiration is measured in _______.",
  options: ["joules or calories", "liters", "watts", "grams"],
  answer: 0,
},
{
  question: "The primary purpose of respiration is to _______.",
  options: ["release energy from food", "absorb water", "transport minerals", "produce glucose"],
  answer: 0,
},

//excretion 


{
  question: "The main excretory organ in humans is the _______.",
  options: ["kidney", "liver", "lungs", "skin"],
  answer: 0,
},
{
  question: "The functional unit of the kidney is called the _______.",
  options: ["nephron", "glomerulus", "Bowman's capsule", "ureter"],
  answer: 0,
},
{
  question: "Filtration of blood occurs in the _______.",
  options: ["glomerulus", "loop of Henle", "collecting duct", "proximal tubule"],
  answer: 0,
},
{
  question: "Reabsorption of useful substances occurs mainly in the _______.",
  options: ["proximal convoluted tubule", "glomerulus", "Bowman's capsule", "urethra"],
  answer: 0,
},
{
  question: "Urea is produced in the body through _______.",
  options: ["deamination of amino acids", "digestion of carbohydrates", "photosynthesis", "respiration"],
  answer: 0,
},
{
  question: "The Bowman's capsule surrounds the _______.",
  options: ["glomerulus", "loop of Henle", "collecting duct", "ureter"],
  answer: 0,
},
{
  question: "The ureter connects the kidney to the _______.",
  options: ["urinary bladder", "urethra", "liver", "nephron"],
  answer: 0,
},
{
  question: "The main nitrogenous waste in mammals is _______.",
  options: ["urea", "ammonia", "uric acid", "carbon dioxide"],
  answer: 0,
},
{
  question: "In birds and reptiles, nitrogenous waste is excreted mainly as _______.",
  options: ["uric acid", "urea", "ammonia", "carbon dioxide"],
  answer: 0,
},
{
  question: "Ammonotelic animals excrete nitrogenous waste mainly as _______.",
  options: ["ammonia", "urea", "uric acid", "creatinine"],
  answer: 0,
},
{
  question: "The loop of Henle in the nephron is responsible for _______.",
  options: ["water reabsorption", "filtration", "urea production", "secretion of enzymes"],
  answer: 0,
},
{
  question: "Excess water and salts are excreted mainly by the _______.",
  options: ["kidney", "skin", "lungs", "liver"],
  answer: 0,
},
{
  question: "Sweat glands excrete _______.",
  options: ["water, salts, and some urea", "oxygen", "glucose", "carbon dioxide"],
  answer: 0,
},
{
  question: "The liver helps in excretion by converting ammonia to _______.",
  options: ["urea", "uric acid", "carbon dioxide", "water"],
  answer: 0,
},
{
  question: "The urinary bladder stores _______ temporarily.",
  options: ["urine", "bile", "blood", "lymph"],
  answer: 0,
},
{
  question: "The outer layer of the kidney is called the _______.",
  options: ["cortex", "medulla", "pelvis", "nephron"],
  answer: 0,
},
{
  question: "The inner region of the kidney is called the _______.",
  options: ["medulla", "cortex", "Bowman's capsule", "ureter"],
  answer: 0,
},
{
  question: "The process by which water and solutes move from blood into the nephron is called _______.",
  options: ["filtration", "reabsorption", "secretion", "diffusion"],
  answer: 0,
},
{
  question: "Reabsorption in the nephron is mainly through _______.",
  options: ["selective diffusion and active transport", "osmosis only", "phagocytosis", "endocytosis"],
  answer: 0,
},
{
  question: "Secretion in the nephron helps to _______.",
  options: ["remove additional wastes and maintain pH", "reabsorb water", "store glucose", "produce hormones"],
  answer: 0,
},
{
  question: "The renal artery carries _______ to the kidney.",
  options: ["blood containing wastes", "oxygen only", "urea only", "lymph"],
  answer: 0,
},
{
  question: "The renal vein carries _______ away from the kidney.",
  options: ["filtered blood", "urea", "urine", "oxygen"],
  answer: 0,
},
{
  question: "Kidneys regulate the water and salt balance through the process of _______.",
  options: ["osmoregulation", "photosynthesis", "respiration", "transpiration"],
  answer: 0,
},
{
  question: "The functional difference between nephron and ureter is that nephron _______.",
  options: ["filters blood", "stores urine", "transports urine", "produces hormones"],
  answer: 0,
},
{
  question: "Plants excrete waste mainly through _______.",
  options: ["stomata, lenticels, and bark", "roots only", "phloem only", "xylem only"],
  answer: 0,
},
{
  question: "Plants store waste products in _______ to prevent toxicity.",
  options: ["vacuoles", "chloroplasts", "nucleus", "cell wall"],
  answer: 0,
},
{
  question: "Resins and tannins in plants are examples of _______.",
  options: ["excretory products", "enzymes", "hormones", "nutrients"],
  answer: 0,
},
{
  question: "Excess oxygen produced in plants is released mainly through _______.",
  options: ["stomata", "roots", "xylem", "phloem"],
  answer: 0,
},
{
  question: "Gaseous wastes in plants, such as CO2, are mainly produced during _______.",
  options: ["respiration", "photosynthesis", "transpiration", "translocation"],
  answer: 0,
},
{
  question: "Nitrogenous waste is excreted by the liver in the form of _______.",
  options: ["urea", "ammonia", "uric acid", "creatinine"],
  answer: 0,
},
{
  question: "Kidney stones form due to _______.",
  options: ["accumulation of salts and minerals", "excess water intake", "low urea production", "high protein diet only"],
  answer: 0,
},
{
  question: "The nephron's collecting duct carries urine to the _______.",
  options: ["renal pelvis", "ureter", "bladder", "glomerulus"],
  answer: 0,
},
{
  question: "The skin excretes water, salts, and some nitrogenous waste through _______.",
  options: ["sweat glands", "sebaceous glands", "hair follicles", "nails"],
  answer: 0,
},
{
  question: "Uricotelic animals excrete nitrogen mainly as _______.",
  options: ["uric acid", "urea", "ammonia", "carbon dioxide"],
  answer: 0,
},
{
  question: "Ammonotelic animals are usually _______.",
  options: ["aquatic", "desert-dwelling", "birds", "reptiles"],
  answer: 0,
},
{
  question: "The renal capsule surrounds the _______ of the kidney.",
  options: ["entire kidney", "nephron only", "glomerulus only", "medulla only"],
  answer: 0,
},
{
  question: "The main function of kidney nephrons is to maintain _______ balance.",
  options: ["water and salt", "oxygen only", "carbon dioxide only", "glucose only"],
  answer: 0,
},
{
  question: "Kidneys help to maintain blood pH by excreting _______.",
  options: ["hydrogen ions", "oxygen", "carbon dioxide only", "water only"],
  answer: 0,
},
{
  question: "The urine of mammals is usually _______ due to the presence of urea.",
  options: ["slightly acidic", "alkaline", "neutral", "basic"],
  answer: 0,
},
{
  question: "Plants excrete excess salts mainly through _______.",
  options: ["salt glands or specialized cells", "roots only", "xylem only", "stomata only"],
  answer: 0,
},
{
  question: "Excretion in protozoa occurs through the _______.",
  options: ["contractile vacuole", "plasma membrane only", "nucleus", "cilia"],
  answer: 0,
},
{
  question: "Excretory wastes in humans include urea, water, salts, and _______.",
  options: ["carbon dioxide", "glucose", "oxygen", "enzymes"],
  answer: 0,
},
{
  question: "The formation of urine involves filtration, reabsorption, and _______.",
  options: ["secretion", "diffusion", "osmosis", "photosynthesis"],
  answer: 0,
},
{
  question: "Plants remove metabolic wastes to prevent _______.",
  options: ["toxicity", "growth", "photosynthesis only", "respiration only"],
  answer: 0,
},
{
  question: "The renal medulla contains _______ of the nephron.",
  options: ["loops of Henle and collecting ducts", "Bowman's capsule only", "glomerulus only", "proximal tubule only"],
  answer: 0,
},
{
  question: "Excretion is important because it removes _______ from the body.",
  options: ["metabolic wastes", "oxygen", "glucose", "starch"],
  answer: 0,
},
{
  question: "The liver converts toxic ammonia into _______ which is less toxic.",
  options: ["urea", "carbon dioxide", "uric acid", "water"],
  answer: 0,
},
{
  question: "Lenticels in plants help in excreting _______.",
  options: ["gases and resins", "water only", "starch", "glucose"],
  answer: 0,
},
{
  question: "The renal pelvis collects urine from _______.",
  options: ["collecting ducts", "nephrons only", "glomerulus only", "Bowman's capsule only"],
  answer: 0,
},
{
  question: "Excretory organs maintain homeostasis by regulating water, salts, and _______.",
  options: ["pH of blood", "glucose", "oxygen", "starch"],
  answer: 0,
},

{
  question: "The kidney regulates blood pressure by controlling _______.",
  options: ["water and salt content", "oxygen content", "carbon dioxide only", "glucose levels"],
  answer: 0,
},
{
  question: "The nephron’s distal convoluted tubule is mainly involved in _______.",
  options: ["secretion and selective reabsorption", "filtration only", "urea production only", "water storage only"],
  answer: 0,
},
{
  question: "Bowman’s capsule and glomerulus together form the _______.",
  options: ["renal corpuscle", "loop of Henle", "collecting duct", "renal pelvis"],
  answer: 0,
},
{
  question: "Excretion of uric acid helps birds and reptiles conserve _______.",
  options: ["water", "oxygen", "glucose", "minerals"],
  answer: 0,
},
{
  question: "Humans are ureotelic because they excrete nitrogen mainly as _______.",
  options: ["urea", "ammonia", "uric acid", "creatinine"],
  answer: 0,
},
{
  question: "Excretory products in plants include oxygen, resins, tannins, and _______.",
  options: ["waste salts", "urea", "carbon dioxide", "proteins"],
  answer: 0,
},
{
  question: "The kidney receives blood from the _______.",
  options: ["renal artery", "renal vein", "aorta", "vena cava"],
  answer: 0,
},
{
  question: "The renal vein carries _______ away from the kidney.",
  options: ["filtered blood", "urine", "urea", "oxygenated blood only"],
  answer: 0,
},
{
  question: "The juxtaglomerular apparatus helps regulate _______.",
  options: ["blood pressure", "oxygen supply", "glucose level", "respiration rate"],
  answer: 0,
},
{
  question: "The main nitrogenous waste of amphibians is _______.",
  options: ["urea", "ammonia", "uric acid", "creatinine"],
  answer: 0,
},
{
  question: "Water reabsorption in the nephron occurs mainly in the _______.",
  options: ["loop of Henle", "Bowman's capsule", "glomerulus", "distal convoluted tubule"],
  answer: 0,
},
{
  question: "Sweating helps in excretion and also in _______.",
  options: ["thermoregulation", "glucose storage", "photosynthesis", "respiration only"],
  answer: 0,
},
{
  question: "The excretory function of the liver includes _______.",
  options: ["detoxifying ammonia into urea", "excreting water only", "storing glucose", "producing oxygen"],
  answer: 0,
},
{
  question: "Excretion differs from egestion because excretion removes _______.",
  options: ["metabolic wastes", "undigested food", "water only", "minerals only"],
  answer: 0,
},
{
  question: "Excretory organs help maintain homeostasis by controlling water, salts, and _______.",
  options: ["pH", "glucose", "oxygen", "carbon dioxide only"],
  answer: 0,
},
{
  question: "The renal capsule protects the kidney from _______.",
  options: ["physical damage", "oxygen loss", "glucose loss", "CO2 accumulation"],
  answer: 0,
},
{
  question: "Excretory wastes from the liver are transported to the kidney via the _______.",
  options: ["blood", "ureter", "urinary bladder", "renal pelvis"],
  answer: 0,
},
{
  question: "Plants remove metabolic wastes to prevent _______.",
  options: ["toxicity", "respiration only", "photosynthesis only", "growth only"],
  answer: 0,
},
{
  question: "Contractile vacuoles in protozoa help remove _______.",
  options: ["excess water", "CO2", "oxygen", "glucose"],
  answer: 0,
},
{
  question: "Ureotelic animals excrete nitrogen mainly as _______.",
  options: ["urea", "ammonia", "uric acid", "creatinine"],
  answer: 0,
},
{
  question: "Ammonotelic animals are usually _______.",
  options: ["aquatic", "birds", "reptiles", "mammals"],
  answer: 0,
},
{
  question: "Uricotelic animals are adapted to conserve _______.",
  options: ["water", "glucose", "oxygen", "CO2"],
  answer: 0,
},
{
  question: "Nephrons help in excretion and also in _______.",
  options: ["osmoregulation", "photosynthesis", "respiration", "transpiration"],
  answer: 0,
},
{
  question: "The distal convoluted tubule helps maintain _______ balance.",
  options: ["water and ions", "CO2 only", "glucose only", "oxygen only"],
  answer: 0,
},
{
  question: "Plants excrete toxic compounds in vacuoles to _______.",
  options: ["prevent cell damage", "store glucose", "increase photosynthesis", "transport water"],
  answer: 0,
},
{
  question: "Liver excretes bile which contains _______.",
  options: ["waste products like bilirubin", "urea", "glucose", "oxygen"],
  answer: 0,
},
{
  question: "Liver detoxifies harmful substances like _______.",
  options: ["alcohol and drugs", "CO2 only", "O2 only", "glucose only"],
  answer: 0,
},
{
  question: "Excretion of carbon dioxide occurs mainly via _______.",
  options: ["lungs", "kidney", "skin", "liver"],
  answer: 0,
},
{
  question: "Renal artery enters the kidney at the _______.",
  options: ["hilum", "cortex", "medulla", "nephron"],
  answer: 0,
},
{
  question: "Ureters transport urine from the kidney to the _______.",
  options: ["urinary bladder", "urethra", "renal pelvis", "nephrons"],
  answer: 0,
},
{
  question: "The excretory products of the skin include water, salts, and _______.",
  options: ["urea", "CO2", "glucose", "oxygen"],
  answer: 0,
},
{
  question: "Lenticels in plants allow excretion of _______.",
  options: ["gases and resins", "urea only", "starch only", "sugars only"],
  answer: 0,
},
{
  question: "Excretion is vital for removing _______ from metabolic activities.",
  options: ["waste products", "glucose", "oxygen", "starch"],
  answer: 0,
},
{
  question: "The renal medulla contains _______ of nephrons.",
  options: ["loops of Henle and collecting ducts", "glomeruli only", "Bowman's capsules only", "proximal tubules only"],
  answer: 0,
},
{
  question: "The renal cortex contains mainly _______.",
  options: ["glomeruli and convoluted tubules", "loops of Henle only", "collecting ducts only", "renal pelvis only"],
  answer: 0,
},
{
  question: "Plants excrete waste products like tannins and resins to prevent _______.",
  options: ["toxicity", "respiration only", "growth only", "photosynthesis only"],
  answer: 0,
},
{
  question: "Excretory organs help maintain blood composition by regulating water, salts, and _______.",
  options: ["pH", "glucose", "CO2 only", "oxygen only"],
  answer: 0,
},
{
  question: "The liver converts ammonia into _______ to reduce toxicity.",
  options: ["urea", "uric acid", "CO2", "water"],
  answer: 0,
},
{
  question: "Excretory wastes in humans include urea, water, salts, and _______.",
  options: ["CO2", "glucose", "oxygen", "enzymes"],
  answer: 0,
},
{
  question: "Excretion of uric acid is an adaptation to _______.",
  options: ["conserve water", "produce more energy", "store glucose", "increase respiration"],
  answer: 0,
},
{
  question: "Excretion of carbon dioxide from cells occurs by _______.",
  options: ["diffusion", "active transport", "osmosis", "endocytosis"],
  answer: 0,
},
{
  question: "Water balance in the body is maintained by _______ and kidney function.",
  options: ["excretion", "photosynthesis", "respiration", "transpiration"],
  answer: 0,
},
{
  question: "Excretion helps prevent accumulation of toxic substances like _______.",
  options: ["ammonia, urea, and uric acid", "oxygen", "glucose", "starch"],
  answer: 0,
},
{
  question: "The urine of mammals is usually _______ due to dissolved urea.",
  options: ["slightly acidic", "alkaline", "neutral", "basic"],
  answer: 0,
},
{
  question: "Renal pelvis collects urine from _______.",
  options: ["collecting ducts", "nephrons only", "glomerulus only", "Bowman's capsule only"],
  answer: 0,
},
{
  question: "The nephron helps in both excretion and _______.",
  options: ["osmoregulation", "photosynthesis", "respiration", "transpiration"],
  answer: 0,
},
{
  question: "Sweat helps remove wastes and also _______.",
  options: ["regulates body temperature", "stores glucose", "produces ATP", "absorbs oxygen"],
  answer: 0,
},


//growth and development 

{
  question: "Growth in living organisms can best be defined as _______.",
  options: [
    "an increase in size and number of cells",
    "a temporary change in shape",
    "a reversible change in mass",
    "a decrease in dry weight"
  ],
  answer: 0,
},
{
  question: "Which of the following statements best describes development?",
  options: [
    "Increase in body size only",
    "Increase in complexity and specialization of cells",
    "Temporary expansion of tissues",
    "Formation of spores in plants"
  ],
  answer: 1,
},
{
  question: "The main difference between growth and development is that development involves _______.",
  options: [
    "an increase in cell size",
    "changes in form and function",
    "cell elongation only",
    "cell division alone"
  ],
  answer: 1,
},
{
  question: "Which of these factors does NOT affect growth?",
  options: [
    "Light",
    "Temperature",
    "Sound",
    "Nutrients"
  ],
  answer: 2,
},
{
  question: "The region of active cell division in a plant is called the _______.",
  options: [
    "epidermis",
    "phloem",
    "meristem",
    "xylem"
  ],
  answer: 2,
},
{
  question: "Which of the following is a characteristic of growth in living organisms?",
  options: [
    "Reversibility",
    "Irreversibility",
    "Periodic occurrence",
    "Random occurrence"
  ],
  answer: 1,
},
{
  question: "In plants, elongation of cells mainly occurs in the _______.",
  options: [
    "apical meristem",
    "lateral meristem",
    "root cap",
    "epidermal layer"
  ],
  answer: 0,
},
{
  question: "Which of the following represents a phase in growth?",
  options: [
    "Lag phase, log phase, stationary phase",
    "Beginning, middle, and end",
    "Active and inactive",
    "Primary and secondary"
  ],
  answer: 0,
},
{
  question: "A sigmoid growth curve is also known as a _______ curve.",
  options: [
    "U-shaped",
    "S-shaped",
    "V-shaped",
    "C-shaped"
  ],
  answer: 1,
},
{
  question: "The increase in dry mass of an organism is a measure of _______.",
  options: [
    "temporary growth",
    "turgidity",
    "true growth",
    "water absorption"
  ],
  answer: 2,
},
{
  question: "The type of growth where cells divide rapidly and continuously is called _______.",
  options: [
    "secondary growth",
    "primary growth",
    "cellular growth",
    "static growth"
  ],
  answer: 1,
},
{
  question: "Which plant hormone is responsible for cell elongation?",
  options: [
    "Auxin",
    "Gibberellin",
    "Cytokinin",
    "Abscisic acid"
  ],
  answer: 0,
},
{
  question: "The hormone that promotes seed germination is _______.",
  options: [
    "Abscisic acid",
    "Auxin",
    "Gibberellin",
    "Cytokinin"
  ],
  answer: 2,
},
{
  question: "Secondary growth in plants results in an increase in _______.",
  options: [
    "length",
    "width or girth",
    "root hairs",
    "leaf number"
  ],
  answer: 1,
},
{
  question: "Which of the following is NOT a plant growth hormone?",
  options: [
    "Auxin",
    "Insulin",
    "Cytokinin",
    "Gibberellin"
  ],
  answer: 1,
},
{
  question: "Which of the following conditions is NOT necessary for seed germination?",
  options: [
    "Water",
    "Oxygen",
    "Light",
    "Temperature"
  ],
  answer: 2,
},
{
  question: "Which of the following stages of growth curve represents the most rapid growth?",
  options: [
    "Lag phase",
    "Log phase",
    "Stationary phase",
    "Decline phase"
  ],
  answer: 1,
},
{
  question: "Cell division in growth occurs in the _______.",
  options: [
    "region of elongation",
    "region of differentiation",
    "region of cell division",
    "root cap"
  ],
  answer: 2,
},
{
  question: "In plants, growth can be measured by the increase in _______.",
  options: [
    "cell color",
    "root length",
    "turgidity",
    "seed number"
  ],
  answer: 1,
},
{
  question: "Epigeal germination is characterized by _______.",
  options: [
    "cotyledons remaining underground",
    "cotyledons coming above the soil",
    "absence of cotyledons",
    "seed coat remaining intact"
  ],
  answer: 1,
},
{
  question: "The main function of gibberellins in plants is to _______.",
  options: [
    "promote dormancy",
    "inhibit cell division",
    "promote stem elongation",
    "cause leaf fall"
  ],
  answer: 2,
},
{
  question: "Which of these plant hormones promotes the ripening of fruits?",
  options: [
    "Auxin",
    "Ethylene",
    "Cytokinin",
    "Gibberellin"
  ],
  answer: 1,
},
{
  question: "The irreversible increase in the dry mass of an organism is called _______.",
  options: [
    "maturation",
    "development",
    "growth",
    "movement"
  ],
  answer: 2,
},
{
  question: "Which of these organisms exhibits discontinuous growth?",
  options: [
    "Human",
    "Fish",
    "Crab",
    "Cow"
  ],
  answer: 2,
},
{
  question: "The process by which an organism changes from a juvenile to an adult form is called _______.",
  options: [
    "fertilization",
    "metamorphosis",
    "growth",
    "regeneration"
  ],
  answer: 1,
},
{
  question: "Insect growth is controlled by which of the following hormones?",
  options: [
    "Ecdysone and juvenile hormone",
    "Insulin and thyroxine",
    "Auxin and cytokinin",
    "Adrenaline and glucagon"
  ],
  answer: 0,
},
{
  question: "Which of the following animals undergo incomplete metamorphosis?",
  options: [
    "Butterfly",
    "Housefly",
    "Grasshopper",
    "Mosquito"
  ],
  answer: 2,
},
{
  question: "Complete metamorphosis in insects involves _______.",
  options: [
    "egg, larva, adult",
    "egg, larva, pupa, adult",
    "egg, nymph, adult",
    "egg, pupa, adult"
  ],
  answer: 1,
},
{
  question: "The hormone responsible for growth in animals is _______.",
  options: [
    "Insulin",
    "Thyroxine",
    "Growth hormone",
    "Adrenaline"
  ],
  answer: 2,
},
{
  question: "The part of a plant embryo that develops into the shoot is the _______.",
  options: [
    "radicle",
    "plumule",
    "cotyledon",
    "endosperm"
  ],
  answer: 1,
},
{
  question: "The cotyledons in dicot seeds mainly function as _______.",
  options: [
    "storage organs",
    "absorptive organs",
    "photosynthetic organs",
    "protective organs"
  ],
  answer: 0,
},
{
  question: "A growth curve that levels off after rapid growth indicates that _______.",
  options: [
    "growth continues indefinitely",
    "growth has stopped due to limiting factors",
    "growth rate increases steadily",
    "growth never began"
  ],
  answer: 1,
},
{
  question: "In hypogeal germination, the cotyledons _______.",
  options: [
    "remain below the soil",
    "come above the soil",
    "turn green",
    "are shed immediately"
  ],
  answer: 0,
},
{
  question: "Which of these statements about animal growth is correct?",
  options: [
    "It is indefinite",
    "It stops after maturity",
    "It continues at a constant rate",
    "It decreases throughout life"
  ],
  answer: 1,
},
{
  question: "Differentiation in animals involves _______.",
  options: [
    "cells becoming specialized for specific functions",
    "increase in cell size only",
    "reduction in body size",
    "temporary change in shape"
  ],
  answer: 0,
},
{
  question: "A tadpole developing into a frog is an example of _______.",
  options: [
    "growth only",
    "differentiation only",
    "development and metamorphosis",
    "fertilization"
  ],
  answer: 2,
},
{
  question: "In humans, growth hormone is secreted by the _______.",
  options: [
    "thyroid gland",
    "adrenal gland",
    "pituitary gland",
    "pancreas"
  ],
  answer: 2,
},
{
  question: "Deficiency of growth hormone in children results in _______.",
  options: [
    "gigantism",
    "dwarfism",
    "cretinism",
    "obesity"
  ],
  answer: 1,
},
{
  question: "The part of the seed that develops into the root is the _______.",
  options: [
    "radicle",
    "plumule",
    "endosperm",
    "cotyledon"
  ],
  answer: 0,
},
{
  question: "The period of slow growth at the beginning of a growth curve is called the _______.",
  options: [
    "log phase",
    "stationary phase",
    "lag phase",
    "decline phase"
  ],
  answer: 2,
},
{
  question: "The process of seed germination ends when _______.",
  options: [
    "the radicle appears",
    "the plumule appears above the soil",
    "photosynthesis begins",
    "the seed coat breaks"
  ],
  answer: 2,
},
{
  question: "Which of the following hormones inhibits growth in plants?",
  options: [
    "Cytokinin",
    "Gibberellin",
    "Abscisic acid",
    "Auxin"
  ],
  answer: 2,
},
{
  question: "Which structure protects the root tip during growth?",
  options: [
    "Root hair",
    "Root cap",
    "Meristem",
    "Cortex"
  ],
  answer: 1,
},
{
  question: "Growth that occurs due to increase in girth of a plant is brought about by the _______.",
  options: [
    "apical meristem",
    "intercalary meristem",
    "lateral meristem",
    "root cap"
  ],
  answer: 2,
},
{
  question: "The hormone responsible for leaf fall in plants is _______.",
  options: [
    "Auxin",
    "Ethylene",
    "Gibberellin",
    "Abscisic acid"
  ],
  answer: 3,
},
{
  question: "Which of these represents the correct sequence in complete metamorphosis of a butterfly?",
  options: [
    "Egg → Larva → Adult",
    "Egg → Nymph → Adult",
    "Egg → Larva → Pupa → Adult",
    "Egg → Pupa → Adult"
  ],
  answer: 2,
},
{
  question: "Which of the following organisms shows both growth and regeneration when cut?",
  options: [
    "Hydra",
    "Human",
    "Grasshopper",
    "Lizard"
  ],
  answer: 0,
},
{
  question: "In plants, growth is said to be _______.",
  options: [
    "limited and reversible",
    "unlimited and irreversible",
    "temporary and continuous",
    "reversible and measurable"
  ],
  answer: 1,
},
{
  question: "The outer covering of a seed that protects the embryo is called the _______.",
  options: [
    "endosperm",
    "seed coat",
    "plumule",
    "radicle"
  ],
  answer: 1,
},

{
  question: "Which of these is a correct feature of growth in plants?",
  options: ["Localized and indefinite", "General and limited", "Localized and limited", "General and reversible"],
  answer: 0,
},
{
  question: "Growth in animals stops after maturity because _______.",
  options: ["food becomes insufficient", "cells stop dividing", "growth hormone decreases", "oxygen supply reduces"],
  answer: 2,
},
{
  question: "The growth of a leaf from bud to full size is an example of _______.",
  options: ["cell division only", "cell elongation and differentiation", "cell death", "dormancy"],
  answer: 1,
},
{
  question: "The dry mass of a seedling increases because of _______.",
  options: ["respiration", "photosynthesis", "imbibition", "osmosis"],
  answer: 1,
},
{
  question: "An organism that shows indeterminate growth is _______.",
  options: ["Human", "Frog", "Fish", "Mango tree"],
  answer: 3,
},
{
  question: "In a typical growth curve, the point where growth rate is highest is the _______.",
  options: ["lag phase", "log phase", "stationary phase", "decline phase"],
  answer: 1,
},
{
  question: "Growth in multicellular organisms is brought about by _______.",
  options: ["cell elongation only", "cell division and differentiation", "fusion of cells", "osmosis only"],
  answer: 1,
},
{
  question: "Which of these plant hormones delays leaf senescence?",
  options: ["Cytokinin", "Ethylene", "Auxin", "Abscisic acid"],
  answer: 0,
},
{
  question: "Which of the following is NOT a characteristic of growth?",
  options: ["Irreversibility", "Cell enlargement", "Cell death", "Differentiation"],
  answer: 2,
},
{
  question: "A mature seed that fails to germinate under suitable conditions is said to be _______.",
  options: ["alive", "dead", "dormant", "dry"],
  answer: 2,
},
{
  question: "The part of the embryo that develops into the root system is the _______.",
  options: ["plumule", "radicle", "cotyledon", "endosperm"],
  answer: 1,
},
{
  question: "In monocot seeds like maize, the cotyledon is called the _______.",
  options: ["scutellum", "aleurone layer", "endosperm", "coleoptile"],
  answer: 0,
},
{
  question: "The type of germination that occurs in maize seed is _______.",
  options: ["epigeal", "hypogeal", "viviparous", "asexual"],
  answer: 1,
},
{
  question: "A balanced growth curve levels off because _______.",
  options: ["light increases", "food and space become limited", "water decreases", "cell division stops completely"],
  answer: 1,
},
{
  question: "Which of these shows determinate growth?",
  options: ["Human", "Mango tree", "Palm tree", "Fish"],
  answer: 0,
},
{
  question: "Metamorphosis is controlled by hormones secreted from the _______.",
  options: ["pituitary gland", "thyroid gland", "adrenal gland", "gonads"],
  answer: 1,
},
{
  question: "Which of these hormones promotes root formation?",
  options: ["Auxin", "Cytokinin", "Ethylene", "Gibberellin"],
  answer: 0,
},
{
  question: "Which plant hormone promotes the formation of fruits without fertilization?",
  options: ["Abscisic acid", "Cytokinin", "Auxin", "Ethylene"],
  answer: 2,
},
{
  question: "A measurement of increase in dry weight indicates _______.",
  options: ["reversible growth", "true growth", "false growth", "temporary turgidity"],
  answer: 1,
},
{
  question: "In a growth curve, the stationary phase represents _______.",
  options: ["rapid growth", "no growth", "slow growth", "death of cells"],
  answer: 1,
},
{
  question: "Seed germination starts with _______.",
  options: ["imbibition of water", "photosynthesis", "cell elongation", "division of plumule"],
  answer: 0,
},
{
  question: "A bean seed exhibits _______ germination.",
  options: ["hypogeal", "epigeal", "viviparous", "asexual"],
  answer: 1,
},
{
  question: "Which of these correctly defines dormancy?",
  options: ["Growth without light", "Temporary suspension of growth", "Death of embryo", "Drying of seed"],
  answer: 1,
},
{
  question: "The first visible sign of germination in a seed is _______.",
  options: ["plumule emergence", "radicle emergence", "cotyledon swelling", "seed coat splitting"],
  answer: 1,
},
{
  question: "The hormone responsible for breaking seed dormancy is _______.",
  options: ["Auxin", "Gibberellin", "Abscisic acid", "Ethylene"],
  answer: 1,
},
{
  question: "The hormone that inhibits seed germination is _______.",
  options: ["Abscisic acid", "Cytokinin", "Auxin", "Gibberellin"],
  answer: 0,
},
{
  question: "An increase in cell number during growth results from _______.",
  options: ["cell elongation", "cell division", "cell fusion", "cell respiration"],
  answer: 1,
},
{
  question: "Which phase of growth is associated with most active mitosis?",
  options: ["Lag phase", "Log phase", "Stationary phase", "Decline phase"],
  answer: 1,
},
{
  question: "Which of these plant hormones promotes cell division?",
  options: ["Auxin", "Cytokinin", "Gibberellin", "Abscisic acid"],
  answer: 1,
},
{
  question: "Which structure is responsible for protecting the root tip during growth?",
  options: ["Root cap", "Root hair", "Cortex", "Meristem"],
  answer: 0,
},
{
  question: "Which of these conditions is most important for seed germination?",
  options: ["Light", "Water", "Carbon dioxide", "Fertilizer"],
  answer: 1,
},
{
  question: "The conversion of an immature insect into adult form is called _______.",
  options: ["metamorphosis", "fertilization", "differentiation", "regeneration"],
  answer: 0,
},
{
  question: "In which of these organisms does growth occur throughout life?",
  options: ["Man", "Dog", "Fish", "Butterfly"],
  answer: 2,
},
{
  question: "The major difference between complete and incomplete metamorphosis is the presence of _______.",
  options: ["pupa stage", "larva stage", "nymph stage", "egg stage"],
  answer: 0,
},
{
  question: "Which of the following statements is true about development?",
  options: ["It is reversible", "It involves differentiation", "It occurs without growth", "It reduces cell number"],
  answer: 1,
},
{
  question: "The growth pattern of insects is _______.",
  options: ["continuous", "discontinuous", "exponential", "uniform"],
  answer: 1,
},
{
  question: "Which of these animals undergoes complete metamorphosis?",
  options: ["Grasshopper", "Cockroach", "Butterfly", "Dragonfly"],
  answer: 2,
},
{
  question: "Growth in a unicellular organism occurs by _______.",
  options: ["cell division", "cell elongation", "fusion", "differentiation"],
  answer: 0,
},
{
  question: "The living part of a seed that develops into a new plant is called the _______.",
  options: ["endosperm", "embryo", "cotyledon", "seed coat"],
  answer: 1,
},
{
  question: "Which of these statements is correct about auxins?",
  options: ["They inhibit root formation", "They promote cell elongation", "They stop seed germination", "They promote leaf fall"],
  answer: 1,
},
{
  question: "The hormone that promotes apical dominance in plants is _______.",
  options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
  answer: 0,
},
{
  question: "A lizard regenerating its tail is an example of _______.",
  options: ["growth", "regeneration", "metamorphosis", "reproduction"],
  answer: 1,
},
{
  question: "The part of the embryo that develops into the shoot is the _______.",
  options: ["plumule", "radicle", "cotyledon", "endosperm"],
  answer: 0,
},
{
  question: "The graph showing rate of growth against time is called a _______.",
  options: ["bar chart", "growth curve", "histogram", "bell curve"],
  answer: 1,
},
{
  question: "The dry mass of a plant can be determined by _______.",
  options: ["weighing after drying", "weighing fresh", "soaking in water", "boiling"],
  answer: 0,
},
{
  question: "Auxins are produced mainly in the _______.",
  options: ["root tip and shoot tip", "leaf", "stem", "flower"],
  answer: 0,
},
{
  question: "The enzyme responsible for digesting stored food during germination is _______.",
  options: ["amylase", "pepsin", "lipase", "renin"],
  answer: 0,
},
{
  question: "Which of these hormones regulates fruit abscission?",
  options: ["Cytokinin", "Auxin", "Abscisic acid", "Gibberellin"],
  answer: 2,
},
{
  question: "The dry weight of a growing seedling at the stationary phase will be _______.",
  options: ["increasing rapidly", "constant", "decreasing", "zero"],
  answer: 1,
},
{
  question: "Growth occurs in animals mainly by _______.",
  options: ["cell division throughout the body", "cell division in certain tissues", "cell division at the tip only", "fusion of tissues"],
  answer: 1,
},
{
  question: "The organ responsible for producing growth hormone in man is the _______.",
  options: ["pituitary gland", "thyroid gland", "pancreas", "liver"],
  answer: 0,
},
{
  question: "Which factor below is not essential for growth?",
  options: ["Water", "Mineral salts", "Sound", "Light"],
  answer: 2,
},




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









//assignments data here

const assignments = [
 
  {
    subject: "Mathematics",
    topic: "Simultaneous Equations",
    content: [
      "Solve the equations: 2x + y = 10 and 3x - y = 5.",
      "Find the point of intersection of the lines represented by the equations.",
      "Verify your solution by substitution.",
      "Use graph to show the point of intersection of the two equations."
    ],
    deadline: "2025-11-05"
  }
];



