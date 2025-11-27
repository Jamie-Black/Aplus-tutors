const assignments = [
  {
    department: "Science",       // Department of the student
    subject: "Biology",          // Subject
    topic: "Cell Structure",     // Topic/title of the assignment
    content: [                   // The questions or tasks
      "Explain the structure of a plant cell.",
      "Draw and label an animal cell."
    ],
    deadline: "2025-11-20"       // Deadline in YYYY-MM-DD format
  },
  {
    department: "Art",
    subject: "Literature",
    topic: "Poetry Analysis",
    content: "Read the poem 'Ozymandias' and summarize the main theme.",
    deadline: "2025-11-18"
  }
];



assignments.push({
  department: "Science",
  subject: "Chemistry",
  topic: "Acids and Bases",
  content: [
    "Define acids and bases with examples.",
    "Explain the pH scale and its significance."
  ],
  deadline: "2025-11-22"
});


// Ensure assignments array exists

// Push Art assignments
assignments.push(
  {
    department: "Art",
    subject: "Literature",
    topic: "Poetry Analysis",
    content: [
      "Read the poem 'Ozymandias' by Percy Bysshe Shelley.",
      "Identify and explain the main theme of the poem.",
      "Discuss the literary devices used in the poem.",
      "Write a 200-word summary of the poem in your own words."
    ],
    deadline: "2025-11-20"
  },
  {
    department: "Art",
    subject: "Visual Arts",
    topic: "Color Theory",
    content: [
      "Explain the primary, secondary, and tertiary colors.",
      "Create a color wheel using watercolors or digital tools.",
      "Discuss the emotional impact of different color combinations."
    ],
    deadline: "2025-11-22"
  },
  {
    department: "Art",
    subject: "Music",
    topic: "History of Classical Music",
    content: [
      "Research the life and works of Ludwig van Beethoven.",
      "List three key periods in classical music history and their characteristics.",
      "Explain how classical music influenced modern music genres."
    ],
    deadline: "2025-11-25"
  },
  {
    department: "Art",
    subject: "Drama",
    topic: "Play Analysis",
    content: [
      "Read the play 'Romeo and Juliet' by William Shakespeare.",
      "Summarize the plot in 150–200 words.",
      "Identify the main themes and moral lessons.",
      "Analyze one major character and their development."
    ],
    deadline: "2025-11-28"
  },
  {
    department: "Art",
    subject: "Art Appreciation",
    topic: "Famous Paintings",
    content: [
      "Select one painting from Vincent van Gogh and one from Pablo Picasso.",
      "Describe the style and techniques used in each painting.",
      "Explain what emotions or messages the artists convey.",
      "Compare and contrast the two works."
    ],
    deadline: "2025-12-02"
  }
);

// Optional: expose to window for your assignments page
window.assignments = assignments;