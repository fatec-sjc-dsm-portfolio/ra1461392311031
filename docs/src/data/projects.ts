const BASE = import.meta.env.BASE_URL ?? '/';

export const projects = [
  {
    id: 1,
    title: "Consulta-Vid",
    description: "A web app focused on Long Covid in Vale do Paraíba’s major cities, offering accurate, localized data on cases, symptoms, and treatments. Built for health professionals, researchers, and the public, it delivers insights to understand and address the condition's regional impact.",
    image: `${BASE}images/consultavid.png`,
    repoUrl: "https://github.com/APIEquipe/EquipeTechEmpireAPI",
    tags: ["HTML", "CSS", "Python", "JavaScript", "Flask"],
    contributions: [
      "Responsible for database modeling and backend structuring.",
      "Developed data scraping scripts to collect and process information on Long Covid.",
      "Built the backend infrastructure, including services, routes, and database integration."
    ]
  },
  {
    id: 2,
    title: "Asset Management System",
    description: "System to optimize business management with an intuitive interface and robust features that simplify asset administration.",
    image: `${BASE}images/ativos.avif`,
    repoUrl: "https://github.com/BananaaScript/SGA",
    tags: ["Java", "TypeScript", "React", "Spring", "MySQL"],
    contributions: [
      "Implemented the authentication system with JWT, route protection, and user permissions.",
      "Developed complete CRUD functionalities for managing categories, models, assets, and users.",
      "Created the backend for the reporting system, including data aggregation and filtering."
    ]
  },
  {
    id: 3,
    title: "Meteorological Data Collector",
    description: "Environmental monitoring system with low-cost IoT weather stations that collect climate data and display it in dashboards.",
    image: `${BASE}images/meteorologico.png`,
    repoUrl: "https://github.com/BananaScripts/Meteorological-Data-Collector",
    tags: ["TypeScript", "React", "Node.js", "MySQL", "Docker", "Google Cloud", "Supabase"],
    contributions: [
      "Designed the relational database schema in MySQL.",
      ""
    ]
  },
  {
    id: 4,
    title: "AI Agents Platform",
    description: "A platform for creating and managing personalized Artificial Intelligence agents, trained to answer questions about the company's products, systems, and internal processes. The tool features permission control and a mobile app with an intelligent chat, where users interact only with the agents they have access to, with data stored in the cloud.",
    image: `${BASE}images/agentia.png`,
    repoUrl: "https://github.com/BananaScripts/API_5-Semester",
    tags: ["TypeScript", "React", "Node.js", "MongoDB", "Docker", "AI", "Mobile"],
    contributions: [
      "Developed the core backend in C#, including authentication and permission systems.",
      "Implemented CRUD APIs for user and agent management and integrated Redis for real-time messaging.",
      "Implemented AI agents using Google Gemini and a file upload system to train them."
    ]
  },
  {
    id: 5,
    title: "Opin8",
    description: "A collaborative space site for participatory democracy, where anyone can create petitions, proposals and bills to help improve society. Free from ads and algorithmic manipulation, it allows you to share ideas, raise support and create real impact - with AI's help to shape your proposals professionally",
    image: `${BASE}images/opin8.png`,
    siteURL: "https://opin8.com/",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "AI"],
    contributions: [
      "Developed the backend authentication system with OAuth, JWT, and Google integration.",
      "Built the core functionalities, including management of proposals, comments, and interactions.",
      "Designed and implemented the database schema using PostgreSQL"
    ]
  },
];

export const placeholder = `${BASE}images/placeholder.svg`;
