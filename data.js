
// data.js
const registeredUsers = [
  { 
    fullName: "Olaborede James", 
    password: "lordkronos" 
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
    fullName: "Akinwale Omobolanle",
    password: "omobolanle16"
  }
];


// subject data

const subjectsData = [
  
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
    
];


const TEAM_DATA = [
    {
        id: 1,
        name: "Olaborede James",
        role: "Science Teacher and Web developer",
        specialty: "Mathematics, Physics, Chemistry, and Biology",
        bio: "He is focused on exam mastery, implementing strategic teaching methodologies to ensure students gain foundational competence and achieve top scores in challenging national exams like WAEC and JAMB.",
        image: "./IMG_20250720_162824_145.jpg",
        whatsapp: "2349152769294"
    },
    {
        id: 2,
        name: "Olaborede Kehinde",
        role: "English Teacher and Administrator",
        specialty: "Lexis & Structure, Comprehension, Essay Writing and Oral",
        bio: "A highly experienced English Language specialist dedicated to high-stakes exam success. She employs analytical and structural methods to build advanced literacy.",
        image: "./BackgroundEraser_20251005_215502512.png",
        whatsapp: "2349034499225"
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