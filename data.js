// data.js

const subjectsData = [
    {
        id: 1,
        title: "Mathematics",
        instructor: "Olaborede James",
        description: "Comprehensive coverage of Algebra, Geometry, and introductory Calculus concepts, statistics, matrices and much more.",
        price: "₦" + 7000,
        topics: [
            "Surds",
            "Trigonometry",
            "Vectors",
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
        whatsappNumber: "+2349152769294" 
    },
    {
        id: 3,
        title: "Chemistry",
        instructor: "Mr. Olaborede James",
        description: "Fundamentals of atomic structure, chemical bonding, and reaction kinetics.",
        price: "₦" + 5000,
        topics: [
            "Atomic Structure",
            "Stoichiometry",
            "Acids, Bases, and Salts",
            "Organic Chemistry",
            "Descriptive Chemistry",
            "Electrochemistry",
            "Nuclear Chemistry and Radioactivity"
        ],
        whatsappNumber: "2349152769294" 
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
            "Classification of living things",
            "The cell and its properties",
            "Homeostasis and regulation of internal environment."
        ],
        whatsappNumber: "2349152769294" 
    },
    {
        id: 5,
        title: "English Language",
        instructor: "Mrs. Olaborede Kehinde",
        description: "Improving grammar, composition, lexis and structure, comprehension, and literary analysis skills.",
        price: "₦" + 5000,
        topics: [
            "Tenses and Concord",
            "Essay Writing Techniques",
            "Verbal Reasoning",
            "Poetic Devices",
            "Comprehension",
            "Summary"
        ],
        whatsappNumber: "2349034499225" 
    },
    {
    id: 6 ,
    title: "Full Science Package",
    instructor: "Olaborede James",
    description: "Comprehensive coverage of all science subjects including mathematics, chemistry, biology, physics, further mathematics and technical drawing.",
    price: "₦" + 20000 + " Monthly",
    topics: [
        "All prominent topics in Mathematics, Physics, Chemistry and Biology.",
    ],
    whatsappNumber: "2349152769294" // Replace with your actual WhatsApp number (no + or spaces)
}
];


// js/data.js (UPDATED TEAM_DATA array with professional biographies)

/**
 * Aplus Tutor Team Member Data
 * Updated biographies for enhanced professional presentation.
 */
const TEAM_DATA = [
    {
        id: 1,
        name: "Olaborede James",
        role: "Lead Science Teacher",
        specialty: "Mathematics, Physics, Chemistry, and Biology",
        bio: "He is focused on exam mastery, implementing strategic teaching methodologies to ensure students gain foundational competence and achieve top scores in challenging national exams like WAEC and JAMB.",
        image: "./IMG_20250720_162824_145.jpg",
        whatsapp: "2349152769294", 
        Email: "olaboredejames2021@gmail.com"
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
    },
    {
        id: 3,
        name: "Mrs. Oyewole Fausat",
        role: "Administrator",
        specialty: "Administrative role, Payment and Customer relations",
        bio: "Holding a ND. in banking and finance, She oversees all administrative governance. Her mandate is to create a link between clients/parents and our team, disseminating information and creating deadlines.",
        image: "images/team/alani.jpg",
        whatsapp: "2349049196679",
        linkedin: "#"
    }
];


const testimonials = [
  {
    name: "Precious A.",
    role: "WAEC Candidate",
    message:
      "Aplus Tutors helped me pass my WAEC with distinction! The tutors made each topic easy to understand.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  },
  {
    name: "Chinedu K.",
    role: "University Student",
    message:
      "I joined Aplus Tutors to prepare for JAMB. The lessons were detailed and the quizzes improved my speed.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
  },
  {
    name: "Aisha M.",
    role: "Secondary School Student",
    message:
      "Learning online has never been this fun. The teachers are patient and the platform is easy to use!",
    image: "https://images.pexels.com/photos/901935/pexels-photo-901935.jpeg"
  },
  {
    name: "Tunde O.",
    role: "Parent",
    message:
      "My daughter’s grades improved remarkably since joining Aplus Tutors. I recommend it to every parent.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  }
];




const blogPosts = [
      {
    id: 1,
    title: "How Virtual Reality is Changing Classroom Learning",
    author: "Olaborede James",
    date: "2023-06-15",
    content: "Virtual Reality (VR) is revolutionizing education by transforming how students experience lessons. Instead of reading about ancient Egypt, students can explore virtual pyramids and temples. Science students can simulate complex lab experiments in a risk-free environment. VR creates immersive experiences that enhance engagement, retention, and understanding. With affordable headsets becoming more available, schools around the world are gradually adopting VR-based learning. Teachers are finding new ways to integrate VR into subjects like history, biology, and geography, helping students visualize and interact with concepts in ways that traditional teaching cannot offer.",
    category: "Education Technology",
    image: "https://images.pexels.com/photos/4145032/pexels-photo-4145032.jpeg"
},
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
    id: 4,
    title: "Gamification in Education: Learning Through Play",
    author: "Olaborede James",
    date: "2023-11-02",
    content: "Gamification—the integration of game elements into learning—has become one of the most effective strategies for improving student motivation. By introducing elements such as points, badges, leaderboards, and challenges, teachers are transforming ordinary lessons into interactive experiences. Gamification not only makes learning fun but also improves memory retention and participation. For instance, apps like Kahoot and ClassDojo use friendly competition to keep students engaged. As education continues to evolve, gamified systems will likely play a crucial role in shaping the classrooms of the future.",
    category: "Learning Innovation",
    image: "https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg"
},
{
    id: 5,
    title: "The Importance of Digital Literacy for 21st Century Students",
    author: "Olaborede James",
    date: "2024-09-20",
    content: "In today’s technology-driven world, digital literacy has become as essential as reading and writing. Students need to know not only how to use technology but also how to navigate online spaces responsibly. Digital literacy includes understanding how to verify information, protect privacy, and use productivity tools effectively. Schools that teach digital skills prepare students for future careers in science, business, and technology. Encouraging critical thinking, coding, and responsible internet use are now vital components of modern education. As the digital divide narrows, fostering digital literacy will ensure no learner is left behind.",
    category: "Digital Skills",
    image: "https://images.pexels.com/photos/4144093/pexels-photo-4144093.jpeg"
}
// add blog posts here
];


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




const allowedUsers = [
  {
    name: "Olaborede James",
    email: "olaboredejames2021@gmail.com"
  }
]


const quizQuestions = {
    "Mathematics": [
        {
            q: "What is the value of pi to two decimal places?",
            options: ["3.12", "3.14", "3.16", "3.18"],
            answer: "3.14"
        },
        {
            q: "Solve for x in: 2x + 5 = 15",
            options: ["x=5", "x=10", "x=7.5", "x=2.5"],
            answer: "x=5"
        },
        {
            q: "What is the area of a circle with radius 7 cm (Use $\\pi \\approx 22/7$)?",
            options: ["49 cm$^2$", "154 cm$^2$", "22 cm$^2$", "77 cm$^2$"],
            answer: "154 cm$^2$"
        }
    ],
    "Physics": [
        {
            q: "What unit is used to measure electrical resistance?",
            options: ["Volt", "Ampere", "Ohm", "Watt"],
            answer: "Ohm"
        },
        {
            q: "What is the acceleration due to gravity on Earth (approximate)?",
            options: ["8.9 m/s²", "9.8 m/s^2", "10.0 m/s^2", "6.67 m/s^2"],
            answer: "9.8 m/s^2"
        },
        {
            q: "Which of the following is a vector quantity?",
            options: ["Mass", "Distance", "Speed", "Velocity"],
            answer: "Velocity"
        }
    ],
    "Biology": [
        {
            q: "All the following are aquatic organisms except",
            options: ["shrimp", "lizard", "jelly fish", "lobster"],
            answer: "lizard"
        }
    ],
    // Add more subjects and questions here following the same structure
    "Chemistry": [
        {
            q: "The chemical symbol for Gold is:",
            options: ["Ag", "Au", "Fe", "Pb"],
            answer: "Au"
        },
        {
            q: "Which element is the most abundant in the Earth's crust?",
            options: ["Silicon", "Aluminum", "Oxygen", "Iron"],
            answer: "Oxygen"
        },
        {
            q: "The following elements are halogens except",
            options: ["Silicon", "Chlorine", "Iodine", "Bromine"],
            answer: "Silicon"
        },
        {
q: "Which of the following is a physical change?",
options: ["burning of kerosene"," freezing of ice cream", "exposing white phosphorus to air"," dissolving calcium a water"],
answer: "freezing of ice cream"
},
{
q: "The constituent of leaf pigment can be separated by",
options: ["chromatography","filtration","fractional distillation"," fractional crystallization"],
answer: "chro"
},

  { q: "The chemical symbol for Gold is:", options: ["Ag", "Au", "Fe", "Pb"], answer: "Au" },
  { q: "The chemical formula for water is:", options: ["H2O", "H3O", "H4O", "O2H"], answer: "H2O" },
  { q: "The chemical symbol for Oxygen is:", options: ["O", "Ox", "O2", "Os"], answer: "O" },
  { q: "The chemical formula for carbon dioxide is:", options: ["CO", "CO2", "C2O", "CO3"], answer: "CO2" },
  { q: "The chemical symbol for Silver is:", options: ["Ag", "Sv", "Sl", "Si"], answer: "Ag" },
  { q: "The chemical formula for ammonia is:", options: ["NH3", "NH4", "N2H4", "N2H2"], answer: "NH3" },
  { q: "The chemical symbol for Copper is:", options: ["Cu", "Cp", "Co", "C"], answer: "Cu" },
  { q: "The chemical formula for sulfuric acid is:", options: ["H2SO3", "H2SO4", "HSO4", "SO4"], answer: "H2SO4" },
  { q: "The chemical symbol for Helium is:", options: ["He", "H", "He2", "H2"], answer: "He" },
  { q: "The chemical formula for hydrochloric acid is:", options: ["HCl", "HCl2", "HCl3", "HCl4"], answer: "HCl" },
  { q: "The chemical symbol for Sodium is:", options: ["Na", "So", "Sd", "Na2"], answer: "Na" },
  { q: "The chemical formula for glucose is:", options: ["C6H12O6", "C5H10O5", "C7H14O7", "C8H16O8"], answer: "C6H12O6" },
  { q: "The chemical symbol for Nitrogen is:", options: ["N", "Ni", "Nt", "Na"], answer: "N" },
  { q: "The chemical formula for methane is:", options: ["CH3", "CH4", "C2H6", "C3H8"], answer: "CH4" },
  { q: "The chemical symbol for Calcium is:", options: ["Ca", "Cm", "C", "Cl"], answer: "Ca" },
  { q: "The chemical formula for ethanol is:", options: ["C2H5OH", "C2H6O", "C3H7OH", "C4H9OH"], answer: "C2H5OH" },
  { q: "The chemical symbol for Potassium is:", options: ["P", "K", "Pt", "Po"], answer: "K" },
  { q: "The chemical formula for sodium chloride is:", options: ["NaCl", "NaCl2", "Na2Cl", "Na2Cl2"], answer: "NaCl" },
  { q: "The chemical symbol for Iron is:", options: ["Fe", "Ir", "In", "F"], answer: "Fe" },
  { q: "The chemical formula for hydrogen peroxide is:", options: ["H2O2", "H2O", "H3O2", "H4O2"], answer: "H2O2" },
  // ...and 30 more questions
{ q: "The chemical symbol for Tin is:", options: ["Sn", "Ti", "S", "T"], answer: "Sn" },
{ q: "The chemical formula for benzene is:", options: ["C5H5", "C6H6", "C7H7", "C8H8"], answer: "C6H6" },
{ q: "The chemical symbol for Lead is:", options: ["Pb", "L", "Le", "Ld"], answer: "Pb" },
{ q: "The chemical formula for acetic acid is:", options: ["CH3COOH", "CH3CH2COOH", "C2H5COOH", "C3H7COOH"], answer: "CH3COOH" },
{ q: "The chemical symbol for Mercury is:", options: ["Hg", "M", "Me", "Mr"], answer: "Hg" },
{ q: "The chemical formula for nitric acid is:", options: ["HNO2", "HNO3", "H2NO3", "H3NO3"], answer: "HNO3" }
]
// ...and 24 more questions
};
// js/data.js (ADD THIS NEW ARRAY)

/**
 * Aplus Tutor WAEC Preparation Data
 * This array is for WAEC-specific lessons, quizzes, and resources.
 * If this array is empty (or removed), the page will display the 'No Data' message.
 */
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



/**
 * Aplus Tutor Course Data
 * This array holds all the video content, topics, and links.
 * Paths point to local files in your project folder (e.g., 'videos/').
 */
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



// data.js
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
  }
];

const subjects = ["Mathematics", "English", "Physics", "Chemistry", "Biology"];

const questions = {
  Mathematics: [
    {
      question: "What is 2 + 2?",
      options: ["1", "2", "3", "4"],
      answer: 3, // index of correct answer
    },
    {
      question: "The value of x in 2x - 2 = 10:",
      options: ["2", "5", "6", "4"],
      answer: 2,
    },
    {
    question: "The area of a circle o radius 7cm is",
    options: ["44cm²", "154cm²", "18cm²", "332cm²"],
    answer: 1,
},
{
    question: "Find the value of x in the diagram",
    image: "/TRIANGLE.jpg",
    imageAlt: "diagram of triangle",
    options: ["70°", "35°", "75°", "60°"],
    answer: 2
}
  ],
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
  Physics: [
      {
          question: "What is the SI unit ot temperature?",
          options: ["volts", "ampere", "kelvin", "Celsius"],
          answer: 2,
      },
      {
          question: "The dimention of volume is",
          options: ["LT", "L³", "L²", "LT²"],
          answer: 1,
      }
  ],
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
  ]
  // Add Physics, Chemistry etc.
};

