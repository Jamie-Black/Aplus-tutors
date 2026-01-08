const assignments = [
  
  {
    department: "Science",       // Department of the student
    subject: "Biology",          // Subject
    topic: "Classification of living things",     // Topic/title of the assignment
    content: [                   // The questions or tasks
      "Read notes on classification of living things including kingdom monera and kingdom protista.",
      "Study diagrams of: amoeba, paramecium and euglena."
    ],
    deadline: "2026-01-14"       // Deadline in YYYY-MM-DD format
  },
  /*
  {
    department: "Art",
    subject: "Literature",
    topic: "Poetry Analysis",
    content: "Read the poem 'Ozymandias' and summarize the main theme.",
    deadline: "2025-11-18"
  }
  */
];



assignments.push(
  /*
  {
  department: "Science",
  subject: "Chemistry",
  topic: "Acids and Bases",
  content: [
    "Define acids and bases with examples.",
    "Explain the pH scale and its significance."
  ],
  deadline: "2025-11-22"
}
*/
);


// Ensure assignments array exists

// Push Art assignments
assignments.push(
  /*
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
  }
  */
);

// Optional: expose to window for your assignments page
window.assignments = assignments;
