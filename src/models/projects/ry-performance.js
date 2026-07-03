/** RY Performance — edit this file to update the project card and case study page. */
const ryPerformance = {
  slug: "ry-performance",
  title: "RY Performance",
  desc: "Web platform for vehicle customization with real-time visual preview.",
  detailedDesc:
    "RY Performance is a full platform that lets users configure their vehicle (color, wheels, accessories) with an interactive visual preview. The project includes secure authentication with email confirmation, real-time messaging via Socket.io, and an admin dashboard to manage requests. Built with Node.js, Express, MySQL, and Socket.io, it showcases my ability to design a user-focused full stack application.",
  tags: ["JavaScript", "Node.js", "Express", "MySQL", "Socket.io"],
  img: "",
  demoUrl: "",
  githubUrl: "https://github.com/nemicheroumaissa/RY-performance",
  videoUrl: "",
  featured: true,

  caseStudy: {
    role: "Full Stack Developer (solo project)",
    duration: "",
    year: "2025",
    problem:
      "Clients of an auto customization shop had to visit in person or exchange many emails to visualize vehicle customization options (color, wheels, accessories), which slowed down quoting and created unnecessary back-and-forth with the sales team.",
    goals: [
      "Let clients visually configure their vehicle online without visiting the shop",
      "Centralize client/admin communication in a single tool",
      "Give the sales team a clear dashboard to track requests",
      "Secure user accounts with proper authentication",
    ],
    mockups: [],
    challenges: [
      "Display a vehicle preview that updates in real time based on selected options without slowing down the UI",
      "Implement reliable instant messaging between clients and administrators",
      "Secure sign-up and login without relying on a paid third-party service",
    ],
    solutions: [
      "Client-side configuration state with targeted re-rendering of only the affected visual elements",
      "Socket.io integration for real-time messaging between users and the admin team",
      "Custom authentication with password hashing and email account confirmation before activation",
    ],
    results: [
      "A working configurator covering the main customization options",
      "An admin dashboard to track and process client requests",
      "A solid full stack foundation (Node.js, Express, MySQL, Socket.io) reused in later projects",
    ],
    learnings: [
      "Structuring a relational database for an e-commerce/configuration use case",
      "Managing real-time client-server communication with Socket.io",
      "Designing the UX of a visual configurator, not just its technical implementation",
    ],
    gallery: [],
  },
};

export default ryPerformance;
